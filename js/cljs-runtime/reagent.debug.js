goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__40694__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40694 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40695__i = 0, G__40695__a = new Array(arguments.length -  0);
while (G__40695__i < G__40695__a.length) {G__40695__a[G__40695__i] = arguments[G__40695__i + 0]; ++G__40695__i;}
  args = new cljs.core.IndexedSeq(G__40695__a,0,null);
} 
return G__40694__delegate.call(this,args);};
G__40694.cljs$lang$maxFixedArity = 0;
G__40694.cljs$lang$applyTo = (function (arglist__40696){
var args = cljs.core.seq(arglist__40696);
return G__40694__delegate(args);
});
G__40694.cljs$core$IFn$_invoke$arity$variadic = G__40694__delegate;
return G__40694;
})()
);

(o.error = (function() { 
var G__40697__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40697 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40698__i = 0, G__40698__a = new Array(arguments.length -  0);
while (G__40698__i < G__40698__a.length) {G__40698__a[G__40698__i] = arguments[G__40698__i + 0]; ++G__40698__i;}
  args = new cljs.core.IndexedSeq(G__40698__a,0,null);
} 
return G__40697__delegate.call(this,args);};
G__40697.cljs$lang$maxFixedArity = 0;
G__40697.cljs$lang$applyTo = (function (arglist__40699){
var args = cljs.core.seq(arglist__40699);
return G__40697__delegate(args);
});
G__40697.cljs$core$IFn$_invoke$arity$variadic = G__40697__delegate;
return G__40697;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
