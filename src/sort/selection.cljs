(ns sort.selection
  (:require 
   [reagent.core :as r]
   [sort.audio :as audio :refer [*context*]]))

(defonce num-items (r/atom 40))
(defonce elements (r/atom (vec (repeatedly @num-items #(rand-int 100)))))
(defonce sorted (r/atom []))
(defonce select-ptr (r/atom 0))
(defonce select-min (r/atom {:val 999999 :index nil}))
(defonce highlighted (r/atom nil))
(def timer (atom :off))
(def timer-id (atom 0))

(defn stop-timer! [id]
  (js/clearInterval id)
  (reset! timer :off))

(defn sweep-notes! [notes]
  (let [now (.-currentTime *context*)]
    (doall (for [note (range (count notes))]
             (do (reset! highlighted note)
                 (when (< note 10)
                   (audio/play-note! (get notes note) (+ now (/ note 30.0)))))))))

(defn remove-nth
  [nums n]
  (into (vec (take n nums)) (drop (+ 1 n) nums)))

(defn select! []
  (if (seq @elements)
      (cond
        (= @select-ptr (count @elements))
        (do
          (audio/play-note! (+ (:index @select-min) (count @sorted)) (.-currentTime *context*) 15)
          (swap! sorted conj (:val @select-min))
          (swap! elements #(remove-nth % (:index @select-min)))
          (reset! highlighted (count @sorted))
          (reset! select-ptr 0)
          (reset! select-min {:index (count @elements) :val 99999}))
        :else
        (do (when (< (get @elements @select-ptr) (:val @select-min))
              (swap! select-min assoc :index @select-ptr :val (get @elements @select-ptr))
              (audio/play-note! (get @elements @select-ptr)))
            (swap! select-ptr inc)
            (swap! highlighted inc)))
      (do
        (stop-timer! @timer-id)
        (sweep-notes! @sorted))))

(comment
  (= (inc @select-ptr) (count @elements))
  (select!))