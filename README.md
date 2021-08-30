# porkostomus/sort

![Sorting visualization](sort.png)

## Inspiration

[Sound-of-Sorting](https://panthema.net/2013/sound-of-sorting/), but with Mario Paint sounds instead of triangle waves.

I've made a certain effort to render these algorithms _musically_, i.e. the notes are restricted to the blues scale, and I attempt to create an instrumental counterpoint that reflects the sorting mechanics. I tried to strike a balance between it seeming "generative" enough as well as what I'd subjectively consider "pleasing", "interesting", and perhaps once in awhile "a little unexpected".

Not for comparative analytics, just for fun!

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
