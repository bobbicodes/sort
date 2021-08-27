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
            sounds (range 1 16)]
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

(defn play-note!
  ([pitch]
   (play-note! pitch (.-currentTime *context*)))
  ([pitch time]
   (play-note! pitch time 1))
  ([pitch time instrument]
   (let [adjusted-pitch (cond 
                          (= 0 pitch) 57
                          (= 1 pitch) 60
                          (= 2 pitch) 62
                          (= 3 pitch) 63
                          (= 4 pitch) 64
                          (= 5 pitch) 67
                          (= 6 pitch) 69
                              (<= 11 pitch 20) 57
                              (<= 21 pitch 30) 60
                              (<= 31 pitch 40) 62
                              (<= 41 pitch 50) 63
                              (<= 51 pitch 60) 64
                              (<= 61 pitch 70) 67
                              (<= 71 pitch 80) 69
                              (<= 81 pitch 90) 72
                              (<= 91 pitch 99) 74
                              :else 76)
         audio-buffer  (:decoded-buffer (get samples instrument))
         sample-source (.createBufferSource *context*)]
     (set! (.-buffer sample-source) audio-buffer)
     (.setValueAtTime
      (.-playbackRate sample-source)
      (pitch->rate adjusted-pitch)
      time)
     (.connect sample-source (.-destination *context*))
     (.start sample-source time)
     sample-source)))

