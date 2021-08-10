(ns sort.audio
  (:require
   [cljs.core.async :refer [<! chan put! close!]])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]))

(defonce ^:dynamic *context* (js/AudioContext.))

(defn load-sound [named-url]
  (let [out (chan)
        req (js/XMLHttpRequest.)]
    (set! (.-responseType req) "arraybuffer")
    (set! (.-onload req) (fn [e]
                           (if (= (.-status req) 200)
                             (do (put! out (assoc named-url :buffer (.-response req)))
                                 (close! out))
                             (close! out))))
    (.open req "GET" (:url named-url) true)
    (.send req)
    out))

(defn decode [named-url]
  (let [out (chan)]
    (if (:buffer named-url)
      (do
        (.decodeAudioData
         *context* (:buffer named-url)
         (fn [decoded-buffer]
           (put! out (assoc named-url :decoded-buffer decoded-buffer))
           (close! out))
         (fn []
           (.error js/console "Error loading file " (prn named-url))
           (close! out))))
      (close! out))
    out))

(defn buffer-source [buffer]
  (let [source (.createBufferSource *context*)]
    (set! (.-buffer source) buffer)
    source))

(defn get-and-decode [named-url]
  (go
    (when-let [s (<! (load-sound named-url))]
      (<! (decode s)))))

(defn load-samples []
  (go-loop [result {}
            sounds (range 1 19)]
    (if-not (nil? (first sounds))
      (let [sound (first sounds)
            decoded-buffer (<! (get-and-decode {:url (str "/audio/" sound ".mp3")
                                                :sound sound}))]
        (prn sound)
        (prn decoded-buffer)
        (recur (assoc result sound decoded-buffer)
               (rest sounds)))
      result)))

(defonce loading-samples
  (go
    (def samples  (<! (load-samples)))
    (prn "Samples loaded")))

(defn add-semitone [rate]
  (* rate (.pow js/Math 2 (/ 1 12))))

(defn sub-semitone [rate]
  (* rate (.pow js/Math 2 (/ -1 12))))

(defn inc-rate [semis]
  (reduce add-semitone (repeat semis 1)))

(defn dec-rate [semis]
  (reduce sub-semitone (repeat semis 1)))

(defn pitch->rate [midi-num]
  (if (< 66 midi-num)
    (inc-rate (- midi-num 66))
    (dec-rate (- 68 midi-num))))

(defn play-note [pitch]
  (let [audio-buffer  (:decoded-buffer (get samples 1))
        sample-source (.createBufferSource *context*)]
    (set! (.-buffer sample-source) audio-buffer)
    (.setValueAtTime
     (.-playbackRate sample-source)
     (pitch->rate pitch)
     (.-currentTime *context*))
    (.connect sample-source (.-destination *context*))
    (.start sample-source)
    sample-source))

(if (= (.-state *context*) "suspended")
  (.resume *context*))

(.resume *context*)

(get samples 1)
(.-currentTime *context*)
(.createBufferSource *context*)
(.-state *context*)
(play-note 60)