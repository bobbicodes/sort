(ns sort.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as d]
   [sort.audio :as audio :refer [*context*]]
   [sort.heap :as heap]
   [sort.selection :as selection :refer [num-items highlighted sorted elements timer-id select! select-ptr select-min]]
   [sort.insertion :as insertion]))

;; -------------------------
;; Views

(defn button [label onclick]
  [:button
   {:on-click onclick}
   label])

(defn input [type label value on-change]
  [:label label
   [:input
    {:style     {:width            40
                 :background-color "white"}
     :type      type
     :value     value
     :on-change on-change}]])

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

(defonce algo (r/atom "Insertion sort"))

(defonce pointer (r/atom 0))
(defonce heap (r/atom []))
(defonce insert-ptr (r/atom 0))


(defonce bubble-max (r/atom (dec @num-items)))
(defonce bubble-down (r/atom 9999))

(defn bars [items]
  (let [bars items
        bar-width (/ 100 (count bars))
        hl highlighted]
    (into [:g]
          (for [bar (range (count bars))]
            (svg-bar bar-width
                     (/ (nth bars bar) 2.0)
                     (* bar bar-width)
                     (- 50 (/ (nth bars bar) 2.0))
                     (cond
                       (= bar @hl) "red"
                       (< @bubble-down bar) "magenta"
                       (< bar (count @sorted)) "magenta"
                       :else "yellow"))))))

(defn render-sort []
  [:svg {:width    "100%"
         :view-box (str "0 0 100 50")}
   [:g
    (rect 0 0 100 50)

    (cond (= @algo "Selection sort")
          [bars (into @sorted @elements)]
          (= @algo "Heapsort")
          [bars (into @heap @elements)]
          (= @algo "Bubble sort")
          [bars @elements]
          (= @algo "Insertion sort")
          [bars (into (vec  @sorted) @elements)])]])



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
    (if (seq @elements)
      (cond (empty? @sorted)
            (do (swap! sorted conj (first @elements))
                (swap! elements #(vec (rest %)))
                (reset! highlighted 0)
                (audio/play-note! (first @elements)))
            (> (get @sorted @insert-ptr) (first @elements))
            (do (swap! sorted #(into
                                (conj (vec (take @insert-ptr @sorted)) (first @elements))
                                (subvec @sorted  @insert-ptr)))
                (swap! elements #(vec (rest %)))
                (reset! insert-ptr 0)
                (reset! highlighted 0)
                (audio/play-note! (first @elements) (.-currentTime *context*) 15))
            (= @insert-ptr (dec (count @sorted)))
            (do (swap! sorted conj (first @elements))
                (swap! elements #(vec (rest %)))
                (reset! insert-ptr 0)
                (reset! highlighted 0)
                (audio/play-note! (first @elements) (.-currentTime *context*) 14))
            :else
            (do (swap! insert-ptr inc)
                (swap! highlighted inc)
                #_(audio/play-note! @insert-ptr (.-currentTime *context*) 14)))
      (do
        (stop-timer! @timer-id)
        (sweep-notes! @sorted))))

(comment
  (first @elements)
  (> (get @sorted @insert-ptr) (first @elements))
  (= @insert-ptr (dec (count @sorted)))
  (into
   (conj (vec (take @insert-ptr @sorted)) (first @elements))
   (subvec @sorted  @insert-ptr))
  (insert!)
  

  (reset! highlighted 0)

  (reset! select-min {:index nil :val 9999})

  (= @select-ptr (count @elements))

  (< (get @elements @select-ptr) (:val @select-min))
  )



(defn bubble! []
  (let [item1 (get @elements @pointer)
        item2 (get @elements (inc @pointer))]
    (if (not= @elements (sort @elements))
      (do
        (when (< item2 item1)
          (swap! elements #(assoc % 
                                  (inc @pointer) (% @pointer) 
                                  @pointer (% (inc @pointer))))
          (reset! bubble-max @pointer)
          (audio/play-note! (mod @pointer 100) (.-currentTime *context*) 4))
        (swap! pointer inc)
        (reset! highlighted @pointer)
        )
      (do
        (stop-timer! @timer-id)
        (sweep-notes! @elements)))
    (when (or (= @pointer (dec @num-items)) (= @pointer @bubble-down))
      (reset! pointer 0)
      (reset! bubble-down @bubble-max)
      (audio/play-note! item1 (.-currentTime *context*) 15))))

(comment
   (let [item1 (get @elements @pointer)
        item2 (get @elements (inc @pointer))]
     (or (= @pointer 95) (= @pointer @bubble-down))
(not= @elements (sort @elements))
(< item2 item1)
     (mod 1023 100)
     )
  
  @pointer
  (<
   (get @elements @pointer)
   (get @elements (inc @pointer)))
  (bubble!)
  )

(defn heap! []
  (when (seq @elements)
    (swap! heap conj (first @elements))
    (swap! elements #(vec (rest %)))))

(defonce step-delay (r/atom 15))

(defn start-timer! []
  (when (= @timer :off)
    (reset! timer-id (cond (= @algo "Selection sort") (js/setInterval select! @step-delay)
                           (= @algo "Insertion sort") (js/setInterval insert! @step-delay)
                           (= @algo "Bubble sort") (js/setInterval bubble! @step-delay)
                           (= @algo "Heapsort") (js/setInterval heap! @step-delay)))
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
       ;[:option {:value "Heapsort"} "Heapsort"]
       [:option {:value "Insertion sort"} "Insertion sort"]
       [:option {:value "Selection sort"} "Selection sort"]
       [:option {:value "Bubble sort"} "Bubble sort"]]
      [button "Reset" (fn []
                        (reset! elements (vec (repeatedly @num-items #(rand-int 100))))
                        (reset! sorted [])
                        (reset! heap [])
                        (reset! insert-ptr 0)
                        (reset! highlighted 0)
                        (reset! select-ptr 0)
                        (reset! select-min {:index nil :val 99999})
                        (reset! bubble-max (dec @num-items))
                        (reset! bubble-down 999))]
      [input "number" " Items: " @num-items #(do
                                                     (reset! num-items (-> % .-target .-value js/parseInt))
                                                     (stop-timer! @timer-id))]
      [input "number" " Delay (ms): " @step-delay #(do 
                                                     (reset! step-delay (-> % .-target .-value js/parseInt))
                                                     (stop-timer! @timer-id))]]
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
          #_(cond (= @algo "Selection sort")
                [:div
                 [:p " Selection sort works by repeatedly finding the smallest element and moving it to the left."]
                 [:p (str "Here, the smallest value is " val
                          " which is " idx " bars from the left.")]]
                (= @algo "Heapsort")
                [heap/heap @heap]
                (= @algo "Insertion sort")
                [:p (str "Insertion sort works by taking the next element, " (first @elements)
                         " at index " (count @sorted)
                         ", and inserting it into its proper position in the sorted list which here is " (count lesser-items))])
     [:p (str "Elements: " @elements)]
     (when (= @algo "Heapsort")
       [:p (str "Heap: " @heap)])
     [:p (str "Sorted: " @sorted)]
     [:p (str "Pointer: " @pointer)]
     [:p (str "highlighted: " @highlighted)]
     [:p (str "Item1: " (get @elements @pointer))]
     [:p (str "Item2: " (get @elements (inc @pointer)))]
     [:p (str "Bubble max: " @bubble-max)]
          [:p (str "Bubble down: " @bubble-down)]
     ;[:p (str "Select pointer: " @select-ptr)]
     ;[:p (str "Select min: " @select-min)]
     #_(cond (= @algo "Selection sort")
           [:p (str "Smallest element: " val " at index " idx)]
           (= @algo "Insertion sort")
           [:p (str "Next element: " (first @elements)
                    " at index " (count @sorted)
                    " belongs at position " (count lesser-items))])]))

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
