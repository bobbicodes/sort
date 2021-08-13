(ns sort.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as d]
   [sort.audio :as audio :refer [*context*]]))

;; -------------------------
;; Views

(defn button [label onclick]
  [:button
   {:on-click onclick}
   label])

(defn polygon [& points]
  [:polygon
   {:stroke       "black"
    :stroke-width 0.3
    :fill         "none"
    :points       (apply str (interpose " " points))}])

(defn rect [x y w h]
  [:rect
   {:width        w
    :height      h
    :fill         "#00d0ff"
    :x            x
    :y            y
    :stroke       "black"
    :stroke-width 0.05}])

(defn svg-bar [w h x y color]
  [:g
   [:rect
    {:width        w
     :height      h
     :fill         color
     :x            x
     :y            y
     :stroke       "#00d0ff"
     :stroke-width 0.05}]])

(defonce elements (r/atom (vec (repeatedly 96 #(rand-int 100)))))
(defonce sorted (r/atom []))
(defonce algo (r/atom "Insertion sort"))
(defonce highlighted (r/atom nil))
(defonce pointer (r/atom 0))

(defn bars [items]
  (let [bars items
        bar-width (/ 100 (count bars))
        hl highlighted]
    (into [:g]
          (for [bar (range (count bars))]
            (svg-bar bar-width
                     (nth bars bar)
                     (* bar bar-width)
                     (- 100 (nth bars bar))
                     (if (= bar @hl)
                       "red"
                       "yellow"))))))

(defn remove-nth
  [nums n]
  (into (vec (take n nums)) (drop (+ 1 n) nums)))

(defn render-sort []
  [:svg {:width    "100%"
         :view-box (str "0 0 100 100")}
   [:g
    (rect 0 0 100 100)

    (cond (= @algo "Selection sort")
          [bars (into @sorted @elements)]
          (= @algo "Bubble sort")
          [bars @elements]
          (= @algo "Insertion sort")
          [bars (into (vec  @sorted) @elements)])]])

(def timer-id (atom 0))

(def timer (atom :off))

(defn stop-timer! [id]
  (js/clearInterval id)
  (reset! timer :off))

(defn sweep-notes! [notes]
  (let [now (.-currentTime *context*)]
    (doall (for [note (range (count notes))]
             (do (reset! highlighted note)
                 (when (< note 10) 
                   (audio/play-note! (get notes note) (+ now (/ note 30.0)))))))))

(defn insert! []
  (let [lesser-items (vec (take-while #(< % (first @elements)) @sorted))]
    (if (seq @elements)
      (do
        (reset! highlighted (count lesser-items))
        (audio/play-note! (first @elements))
        (reset! sorted (into
                        (conj
                         lesser-items
                         (first @elements))
                        (vec (drop (count lesser-items)
                                   @sorted))))
        (swap! elements #(vec (rest %))))
      (do
        (stop-timer! @timer-id)
        (sweep-notes! @sorted)))))

(defn select! []
  (let [min-val (apply min-key second (map-indexed vector @elements))
        val (last min-val)
        idx (first min-val)]
    (if (seq @elements)
      (do
        (reset! highlighted (+ idx (count @sorted)))
        (audio/play-note! (+ idx (count @sorted)))
        (swap! sorted conj val)
        (swap! elements #(remove-nth % idx)))
      (do
        (stop-timer! @timer-id)
        (sweep-notes! @sorted)))))

(defn exchange [v]
  (assoc v (inc @pointer) (v @pointer) @pointer (v (inc @pointer))))

(defn bubble! []
  (let [item1 (get @elements @pointer)
        item2 (get @elements (inc @pointer))]
    (when (= @pointer 95)
      (reset! pointer 0))
    (if (not= @elements (sort @elements))
      (do
        (when (< item2 item1)
          (swap! elements #(exchange %))
          (audio/play-note! @pointer))
        (reset! highlighted (inc @pointer))
        (swap! pointer inc))
      (do
        (stop-timer! @timer-id)
        (sweep-notes! @elements)))))

(defn start-timer! []
  (when (= @timer :off)
    (reset! timer-id (cond (= @algo "Selection sort") (js/setInterval select! 150)
                           (= @algo "Insertion sort") (js/setInterval insert! 150)
                           (= @algo "Bubble sort") (js/setInterval bubble! 4)))
    (reset! timer :on)))

(defn home-page []
  (let [lesser-items (vec (take-while #(< % (first @elements)) @sorted))
        min-val (apply min-key second (map-indexed vector @elements))
        val (last min-val)
        idx (first min-val)]
    [:div#app
     [:div
      [:h2 "Musical Sorting"]
      [:select {:on-change #(reset! algo (.. % -target -value))}
       [:option {:value "Insertion sort"} "Insertion sort"]
       [:option {:value "Selection sort"} "Selection sort"]
       [:option {:value "Bubble sort"} "Bubble sort"]]
      [button "Reset" (fn []
                        (reset! elements (vec (repeatedly 96 #(rand-int 100))))
                        (reset! sorted []))]]
     [:div
      [:button
       {:on-click
        (fn stop-click [e]
          (stop-timer! @timer-id))}
       "Stop"]
      [:button
       {:on-click
        (fn play-click [e]
          (if (= (.-state *context*) "suspended")
            (.resume *context*))
          (start-timer!))}
       "Play"]]
     [render-sort]
     [:p (str "Elements: " @elements)]
     [:p (str "Sorted: " @sorted)]
     (cond (= @algo "Selection sort")
           [:div
            [:p " Selection sort works by repeatedly finding the smallest element and moving it to the left."]
            [:p (str "Here, the smallest value is " val
                     " which is " idx " bars from the left.")]]
           (= @algo "Insertion sort")
           [:p (str "Insertion sort works by taking the next element, " (first @elements)
                    " at index " (count @sorted)
                    ", and inserting it into its proper position in the sorted list which here is " (count lesser-items))])
     (cond (= @algo "Selection sort")
           [:p (str "Smallest element: " val " at index " idx)]
           (= @algo "Insertion sort")
           [:p (str "Next element: " (first @elements)
                    " at index " (count @sorted)
                    " belongs at position " (count lesser-items))])]))

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
