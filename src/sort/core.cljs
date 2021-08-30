(ns sort.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as d]
   [sort.audio :as audio :refer [*context*]]
   [sort.heap :as heap]))

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

(defonce elements (r/atom (vec (repeatedly 96 #(rand-int 100)))))
(defonce sorted (r/atom []))
(defonce algo (r/atom "Insertion sort"))
(defonce highlighted (r/atom nil))
(defonce pointer (r/atom 0))
(defonce heap (r/atom []))
(defonce insert-ptr (r/atom 0))
(defonce select-ptr (r/atom 0))
(defonce select-min (r/atom {:val 999999 :index nil}))
(defonce bubble-max (r/atom 95))
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

(defn remove-nth
  [nums n]
  (into (vec (take n nums)) (drop (+ 1 n) nums)))

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

(defn select! []
  (let [min-val (apply min-key second (map-indexed vector @elements))
        val (last min-val)
        idx (first min-val)]
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
        (sweep-notes! @sorted)))))

(comment
  (= (inc @select-ptr) (count @elements))
  (select!)
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
          (audio/play-note! @pointer (.-currentTime *context*) 4))
        (swap! pointer inc)
        (reset! highlighted @pointer)
        )
      (do
        (stop-timer! @timer-id)
        (sweep-notes! @elements)))
    (when (or (= @pointer 95) (= @pointer @bubble-down))
      (reset! pointer 0)
      (reset! bubble-down @bubble-max)
      (audio/play-note! item1 (.-currentTime *context*) 15))))

(comment
   (let [item1 (get @elements @pointer)
        item2 (get @elements (inc @pointer))]
     (or (= @pointer 95) (= @pointer @bubble-down))
(not= @elements (sort @elements))
(< item2 item1)
     )
  
  @pointer
  (<
   (get @elements @pointer)
   (get @elements (inc @pointer)))
  (bubble!)
  )

(defn parent [node]
  (int (/ (dec node) 2)))

(parent 2)

(defn l-child [n]
  (* n 2))

(defn r-child [n]
  (inc (* n 2)))

(l-child 2)

(defn swap [coll i j]
  (assoc coll i (get coll j) j (get coll i)))

(swap (conj @heap (first @elements)) 1 2)

(defn float-up [h i]
  (if (<= i 0)
    h ;; terminate at the top
    (let [parent (nth h (parent i))
          me (nth h i)]
      (if (< me parent)
        (float-up (swap h (parent i) i)  (parent i))
        h))))


(let [h' (conj @heap (first @elements))
      i (dec (count h'))
      parent-node (nth h' (parent i))
      me (nth h' i)]
  (if (< me parent-node)
    (swap h' (parent i) i)
    h'))

(let [h @heap
      val (first @elements)
      h' (conj h val)
      i (dec (count h'))
      parent-node (nth h' (parent i))
      me (nth h' i)]
  (swap h' (parent i) i)
  ;parent-node
;(parent i)
  )

(let [h @heap
      val (first @elements)
      h' (conj h val)
      i (dec (count h'))
      parent-node (nth h' (parent i))
      me (nth h' i)]
(swap h' (parent i) i)
  )

  

(defn heap-add [h val]
  (let [h' (conj h val)
        len (dec (count h'))]
    (float-up h' len)))

(let [h @heap val (first @elements)
      h' (conj h val)
      len (dec (count h'))]
  (float-up h' len)
  )

(defn heap! []
  (when (seq @elements)
    (swap! heap conj (first @elements))
    (swap! elements #(vec (rest %)))))

;(nth @heap (parent 2))
#_(<
 (nth @heap (dec (count @heap)))
 (nth @heap (parent (dec (count @heap)))))
(count @heap)

;(float-up (conj @heap (first @elements)) (dec (count @heap)))

;(float-up (swap @heap (parent (dec (count @heap))) (dec (count @heap)))  (parent (dec (count @heap))))

(comment
  (heap!)
  )

(defonce step-delay (r/atom 20))

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
       [:option {:value "Bubble sort"} "Bubble sort"]
       ]
      [button "Reset" (fn []
                        (reset! elements (vec (repeatedly 96 #(rand-int 100))))
                        (reset! sorted [])
                        (reset! heap [])
                        (reset! insert-ptr 0)
                        (reset! highlighted 0)
                        (reset! select-ptr 0)
                        (reset! select-min {:index nil :val 99999})
                        (reset! bubble-max 95)
                        (reset! bubble-down 999))]
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

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
