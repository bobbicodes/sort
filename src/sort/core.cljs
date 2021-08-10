(ns sort.core
    (:require
     [reagent.core :as r]
     [reagent.dom :as d]
     [sort.audio :refer [*context*]]))

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

(defn svg-bar [w h x y]
  [:g
   [:rect
    {:width        w
     :height      h
     :fill         "yellow"
     :x            x
     :y            y
     :stroke       "#00d0ff"
     :stroke-width 0.05}]])

(defonce elements (r/atom (vec (repeatedly 20 #(rand-int 100)))))
(defonce sorted (r/atom []))
(defonce algo (r/atom "Selection sort"))

(defn bars [items]
  (let [bars items
        bar-width (/ 80 (count bars))]
    (into [:g]
          (for [bar (range (count bars))]
            (svg-bar bar-width (nth bars bar) (* bar bar-width) (- 100 (nth bars bar)))))))

(defn remove-nth
  [nums n]
  (into (vec (take n nums)) (drop (+ 1 n) nums)))

(defn render-sort []
  [:svg {:width    "90%"
         :view-box (str "0 0 100 100")}
   [:g
    (rect 0 0 80 100)

    (cond (= @algo "Selection sort")
          [bars (into @sorted @elements)]
          (= @algo "Insertion sort")
          [bars (into (vec  @sorted) @elements)])]])

(defn insert! []
  (let [lesser-items (vec (take-while #(< % (first @elements)) @sorted))]
    (when (seq @elements)
      (reset! sorted (into
                      (conj
                       lesser-items
                       (first @elements))
                      (vec (drop (count lesser-items)
                                 @sorted))))
      (swap! elements #(vec (rest %))))))

(defn select! []
  (let [min-val (apply min-key second (map-indexed vector @elements))
        val (last min-val)
        idx (first min-val)]
    (when (seq @elements)
      (swap! sorted conj val)
      (swap! elements #(remove-nth % idx)))))

(def status (r/atom "not started"))

(def timer-id (r/atom 0))

(def timer (r/atom :off))

(defn start-timer! []
  (when (= @timer :off)
    (reset! timer-id (js/setInterval #(cond 
                                        (= @algo "Selection sort") (select!)
                                        (= @algo "Insertion sort") (insert!)) 
                                     300))
    (reset! timer :on)))

(defn stop-timer! [timer]
  (js/clearInterval timer))

(defn home-page []
  (let [lesser-items (vec (take-while #(< % (first @elements)) @sorted))
        min-val (apply min-key second (map-indexed vector @elements))
        val (last min-val)
        idx (first min-val)]
    [:div#app
     [:div
      [:h2 "Sorting algorithms"]
      [:select {:on-change #(reset! algo (.. % -target -value))}
       [:option {:value "Selection sort"} "Selection sort"]
       [:option {:value "Insertion sort"} "Insertion sort"]]
      [button "Reset" (fn []
                        (reset! elements (vec (repeatedly 25 #(rand-int 100))))
                        (reset! sorted []))]]
     (cond (= @algo "Selection sort")
           [:div
            [:p " Selection sort works by repeatedly finding the smallest element and moving it to the left."]
            [:p (str "Here, the smallest value is " val
                     " which is " idx " bars from the left.")]]
           (= @algo "Insertion sort")
           [:p (str "Insertion sort works by taking the next element, " (first @elements)
                    " at index " (count @sorted)
                    ", and inserting it into its proper position in the sorted list which here is " (count lesser-items))])
     [:div
      [:button
       {:on-click
        #(select!)}
       "Step"]
      [:button
       {:on-click
        (fn play-click [e]
          (if (= (.-state *context*) "suspended")
            (.resume *context*))
          (start-timer!)
          (reset! status "started"))}
       "Play"]
      [:button
       {:on-click
        (fn stop-click [e]
          (stop-timer! @timer-id)
          (reset! timer :off))}
       "Stop"]]
     [render-sort]
     [:p (str "Elements: " @elements)]
     [:p (str "Sorted: " @sorted)]
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
