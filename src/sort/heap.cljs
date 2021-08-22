(ns sort.heap)

(defn tree-height
  "Returns the number of levels high a binary tree or heap
   consisting of n elements must be, or what level
   node n is on."
  [n]
  (inc (.floor js/Math (.log2 js/Math n))))

(defn tree-width
  "Returns the number of nodes wide a binary tree or heap
   consisting of n elements must be."
  [n]
  (.pow js/Math 2 (dec (tree-height n))))

(defn x-pos
  "Returns how many positions to the right a node must be
   in a binary tree or heap."
  [n]
  (inc (mod n (tree-width n))))

(defn node-x
  "Returns the x-coordinate of node n."
  [n nodes]
  (let [row-width (tree-width n)
        viewbox-width (* 36 (tree-width (count nodes)))]
    (+ (* (/ viewbox-width row-width) (dec (x-pos n)))
       (/ viewbox-width (* 2 row-width)))))

(defn node-y
  "Returns the y-coordinate of node n."
  [n nodes]
  (- -18 (* 87 (- (tree-height (count nodes))
                  (tree-height n)))))

(defn node-loc [n nodes]
  [(node-x n nodes) (node-y n nodes)])

(defn svg-node [label x y]
  [:g [:circle {:fill "yellow" :stroke "black" :cx x :cy y :r 18}]
   [:text {:text-anchor "middle" :x x :y (+ 4 y) :font-family "Monospace"
           :font-size 14} label]])

(defn svg-nodes [nodes]
  (let [locs (vec (map #(node-loc % nodes) (range 1 (inc (count nodes)))))]
    (into [:g]
          (for [node (range (count nodes))]
            (svg-node (str (get nodes node))
                      (first (get locs node))
                      (last (get locs node)))))))

(defn edge
  "Takes 2 vector tuples representing x and y points.
   Outputs an SVG path."
  [from to]
  (let [x1 (first from) x2 (first to) y1 (last from) y2 (last to)]
    [:path {:fill "none" :stroke "white"
            :d (str "M" x1 "," y1 "L" x2 "," y2)}]))

(defn edges
  "Draws a line from each child to its parent node."
  [nodes]
  (let [locs (vec (map #(node-loc % nodes) (range 1 (inc (count nodes)))))]
    (for [child (range 1 (count nodes))]
      ^{:key child}
      [edge (get locs (.ceil js/Math (- (/ child 2) 1)))
       (get locs child)])))

(defn heap [nodes]
  [:svg {:width "100%"
         :viewBox (str "0 0 "
                       (max 350 (* 36 (tree-width (count nodes)))) " "
                       (max 125 (* 110 (dec (tree-height (count nodes))))))}
   (into
    [:g {:transform
         (str "scale(1,1), rotate(0), translate("
              ; x-offsets for specific widths
              (cond
                (= 1 (tree-width (count nodes))) 77
                (= 2 (tree-width (count nodes))) 59
                (= 4 (tree-width (count nodes))) 27
                :else 4) ","
              ; y-offsets for specific heights
              (cond
                (= 1 (tree-height (count nodes))) 40
                (= 2 (tree-height (count nodes))) 124
                (= 4 (tree-height (count nodes))) 300
                (= 5 (tree-height (count nodes))) 390
                (= 6 (tree-height (count nodes))) 480
                :else (* 108 (dec (tree-height (count nodes))))) ")")}
     (edges nodes)
     [svg-nodes nodes]])])
