# porkostomus/sort

## Inspiration

Most algorithms in Clojure are written very elegantly in a functional style which I find obscures the essence of what it is doing. Following this practice is very beneficial for just about every reason, *except* for gaining intuition about the algorithm! I found that by modeling the algorithm *statefully* (yes, the opposite of what we normally try to do), it allowed me to focus on a single iteration at a time, visualizing each step without getting confused by the outer looping machinery or reducing operation. How about that?

Much like our reactive frontend libraries have us model our app data using a central data store and compute the views from this data, we store our data to be operated on in a global atom and then write functions that derive the necessary facts from it to compute the next step. I find this to be a very clear and fresh way to learn.


### Development mode
```
npm install
npx shadow-cljs watch app
```
start a ClojureScript REPL
```
npx shadow-cljs browser-repl
```
### Building for production

```
npx shadow-cljs release app
```
