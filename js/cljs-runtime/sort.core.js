goog.provide('sort.core');
sort.core.button = (function sort$core$button(label,onclick){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),onclick], null),label], null);
});
sort.core.polygon = (function sort$core$polygon(var_args){
var args__4835__auto__ = [];
var len__4829__auto___43601 = arguments.length;
var i__4830__auto___43602 = (0);
while(true){
if((i__4830__auto___43602 < len__4829__auto___43601)){
args__4835__auto__.push((arguments[i__4830__auto___43602]));

var G__43603 = (i__4830__auto___43602 + (1));
i__4830__auto___43602 = G__43603;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sort.core.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sort.core.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (points){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.3,new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",points))], null)], null);
}));

(sort.core.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sort.core.polygon.cljs$lang$applyTo = (function (seq43592){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43592));
}));

sort.core.rect = (function sort$core$rect(x,y,w,h){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"fill","fill",883462889),"#00d0ff",new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.05], null)], null);
});
sort.core.svg_bar = (function sort$core$svg_bar(w,h,x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"fill","fill",883462889),"yellow",new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#00d0ff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.05], null)], null)], null);
});
if((typeof sort !== 'undefined') && (typeof sort.core !== 'undefined') && (typeof sort.core.elements !== 'undefined')){
} else {
sort.core.elements = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((20),(function (){
return cljs.core.rand_int((100));
}))));
}
if((typeof sort !== 'undefined') && (typeof sort.core !== 'undefined') && (typeof sort.core.sorted !== 'undefined')){
} else {
sort.core.sorted = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof sort !== 'undefined') && (typeof sort.core !== 'undefined') && (typeof sort.core.algo !== 'undefined')){
} else {
sort.core.algo = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Selection sort");
}
sort.core.bars = (function sort$core$bars(items){
var bars = items;
var bar_width = ((80) / cljs.core.count(bars));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__4622__auto__ = (function sort$core$bars_$_iter__43593(s__43594){
return (new cljs.core.LazySeq(null,(function (){
var s__43594__$1 = s__43594;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__43594__$1);
if(temp__5753__auto__){
var s__43594__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43594__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__43594__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__43596 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__43595 = (0);
while(true){
if((i__43595 < size__4621__auto__)){
var bar = cljs.core._nth(c__4620__auto__,i__43595);
cljs.core.chunk_append(b__43596,sort.core.svg_bar(bar_width,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bars,bar),(bar * bar_width),((100) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bars,bar))));

var G__43604 = (i__43595 + (1));
i__43595 = G__43604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43596),sort$core$bars_$_iter__43593(cljs.core.chunk_rest(s__43594__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43596),null);
}
} else {
var bar = cljs.core.first(s__43594__$2);
return cljs.core.cons(sort.core.svg_bar(bar_width,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bars,bar),(bar * bar_width),((100) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bars,bar))),sort$core$bars_$_iter__43593(cljs.core.rest(s__43594__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(bars)));
})());
});
sort.core.remove_nth = (function sort$core$remove_nth(nums,n){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,nums)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(((1) + n),nums));
});
sort.core.render_sort = (function sort$core$render_sort(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 100 100"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),sort.core.rect((0),(0),(80),(100)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sort.core.algo),"Selection sort"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sort.core.bars,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sort.core.sorted),cljs.core.deref(sort.core.elements))], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sort.core.algo),"Insertion sort"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sort.core.bars,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.deref(sort.core.sorted)),cljs.core.deref(sort.core.elements))], null):null))], null)], null);
});
sort.core.home_page = (function sort$core$home_page(){
var lesser_items = cljs.core.vec(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__43597_SHARP_){
return (p1__43597_SHARP_ < cljs.core.first(cljs.core.deref(sort.core.elements)));
}),cljs.core.deref(sort.core.sorted)));
var min_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,cljs.core.second,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.deref(sort.core.elements)));
var val = cljs.core.last(min_val);
var idx = cljs.core.first(min_val);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app","div#app",840279329),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Sorting algorithms"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43598_SHARP_){
return cljs.core.reset_BANG_(sort.core.algo,p1__43598_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Selection sort"], null),"Selection sort"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Insertion sort"], null),"Insertion sort"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sort.core.button,"Reset",(function (){
cljs.core.reset_BANG_(sort.core.elements,cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((25),(function (){
return cljs.core.rand_int((100));
}))));

return cljs.core.reset_BANG_(sort.core.sorted,cljs.core.PersistentVector.EMPTY);
})], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sort.core.algo),"Selection sort"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)," Selection sort works by repeatedly finding the smallest element and moving it to the left."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Here, the smallest value is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)," which is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)," bars from the left."].join('')], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sort.core.algo),"Insertion sort"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Insertion sort works by taking the next element, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.deref(sort.core.elements)))," at index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(sort.core.sorted))),", and inserting it into its proper position in the sorted list which here is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(lesser_items))].join('')], null):null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sort.core.render_sort], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Elements: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sort.core.elements))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Sorted: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sort.core.sorted))].join('')], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sort.core.algo),"Selection sort"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Smallest element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)," at index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sort.core.algo),"Insertion sort"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Next element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.deref(sort.core.elements)))," at index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(sort.core.sorted)))," belongs at position ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(lesser_items))].join('')], null):null)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sort.core.algo),"Selection sort"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sort.core.button,"Swap!",(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sort.core.sorted,cljs.core.conj,val);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sort.core.elements,(function (p1__43599_SHARP_){
return sort.core.remove_nth(p1__43599_SHARP_,idx);
}));
})], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sort.core.algo),"Insertion sort"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sort.core.button,"Insert!",(function (){
cljs.core.reset_BANG_(sort.core.sorted,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lesser_items,cljs.core.first(cljs.core.deref(sort.core.elements))),cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lesser_items),cljs.core.deref(sort.core.sorted)))));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sort.core.elements,(function (p1__43600_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__43600_SHARP_));
}));
})], null):null))], null);
});
sort.core.mount_root = (function sort$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sort.core.home_page], null),document.getElementById("app"));
});
sort.core.init_BANG_ = (function sort$core$init_BANG_(){
return sort.core.mount_root();
});
goog.exportSymbol('sort.core.init_BANG_', sort.core.init_BANG_);

//# sourceMappingURL=sort.core.js.map
