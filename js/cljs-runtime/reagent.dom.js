goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__41316 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__41317 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__41317);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__41321 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__41322 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__41322);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__41321);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__41316);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__41350 = arguments.length;
switch (G__41350) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__41352 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41352,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41352,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__41358_41378 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__41359_41379 = null;
var count__41360_41380 = (0);
var i__41361_41381 = (0);
while(true){
if((i__41361_41381 < count__41360_41380)){
var vec__41369_41382 = chunk__41359_41379.cljs$core$IIndexed$_nth$arity$2(null,i__41361_41381);
var container_41383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41369_41382,(0),null);
var comp_41384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41369_41382,(1),null);
reagent.dom.re_render_component(comp_41384,container_41383);


var G__41385 = seq__41358_41378;
var G__41386 = chunk__41359_41379;
var G__41387 = count__41360_41380;
var G__41388 = (i__41361_41381 + (1));
seq__41358_41378 = G__41385;
chunk__41359_41379 = G__41386;
count__41360_41380 = G__41387;
i__41361_41381 = G__41388;
continue;
} else {
var temp__5753__auto___41389 = cljs.core.seq(seq__41358_41378);
if(temp__5753__auto___41389){
var seq__41358_41390__$1 = temp__5753__auto___41389;
if(cljs.core.chunked_seq_QMARK_(seq__41358_41390__$1)){
var c__4649__auto___41391 = cljs.core.chunk_first(seq__41358_41390__$1);
var G__41392 = cljs.core.chunk_rest(seq__41358_41390__$1);
var G__41393 = c__4649__auto___41391;
var G__41394 = cljs.core.count(c__4649__auto___41391);
var G__41395 = (0);
seq__41358_41378 = G__41392;
chunk__41359_41379 = G__41393;
count__41360_41380 = G__41394;
i__41361_41381 = G__41395;
continue;
} else {
var vec__41374_41396 = cljs.core.first(seq__41358_41390__$1);
var container_41397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41374_41396,(0),null);
var comp_41398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41374_41396,(1),null);
reagent.dom.re_render_component(comp_41398,container_41397);


var G__41401 = cljs.core.next(seq__41358_41390__$1);
var G__41402 = null;
var G__41403 = (0);
var G__41404 = (0);
seq__41358_41378 = G__41401;
chunk__41359_41379 = G__41402;
count__41360_41380 = G__41403;
i__41361_41381 = G__41404;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
