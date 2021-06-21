goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37996 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_37996(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37997 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_37997(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__37333 = coll;
var G__37334 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__37333,G__37334) : shadow.dom.lazy_native_coll_seq.call(null,G__37333,G__37334));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__37361 = arguments.length;
switch (G__37361) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__37369 = arguments.length;
switch (G__37369) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__37379 = arguments.length;
switch (G__37379) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__37389 = arguments.length;
switch (G__37389) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__37399 = arguments.length;
switch (G__37399) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__37411 = arguments.length;
switch (G__37411) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e37423){if((e37423 instanceof Object)){
var e = e37423;
return console.log("didnt support attachEvent",el,e);
} else {
throw e37423;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__37433 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37434 = null;
var count__37435 = (0);
var i__37436 = (0);
while(true){
if((i__37436 < count__37435)){
var el = chunk__37434.cljs$core$IIndexed$_nth$arity$2(null,i__37436);
var handler_38008__$1 = ((function (seq__37433,chunk__37434,count__37435,i__37436,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37433,chunk__37434,count__37435,i__37436,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38008__$1);


var G__38009 = seq__37433;
var G__38010 = chunk__37434;
var G__38011 = count__37435;
var G__38012 = (i__37436 + (1));
seq__37433 = G__38009;
chunk__37434 = G__38010;
count__37435 = G__38011;
i__37436 = G__38012;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37433);
if(temp__5753__auto__){
var seq__37433__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37433__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__37433__$1);
var G__38013 = cljs.core.chunk_rest(seq__37433__$1);
var G__38014 = c__4649__auto__;
var G__38015 = cljs.core.count(c__4649__auto__);
var G__38016 = (0);
seq__37433 = G__38013;
chunk__37434 = G__38014;
count__37435 = G__38015;
i__37436 = G__38016;
continue;
} else {
var el = cljs.core.first(seq__37433__$1);
var handler_38017__$1 = ((function (seq__37433,chunk__37434,count__37435,i__37436,el,seq__37433__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37433,chunk__37434,count__37435,i__37436,el,seq__37433__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38017__$1);


var G__38018 = cljs.core.next(seq__37433__$1);
var G__38019 = null;
var G__38020 = (0);
var G__38021 = (0);
seq__37433 = G__38018;
chunk__37434 = G__38019;
count__37435 = G__38020;
i__37436 = G__38021;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__37455 = arguments.length;
switch (G__37455) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__37463 = cljs.core.seq(events);
var chunk__37464 = null;
var count__37465 = (0);
var i__37466 = (0);
while(true){
if((i__37466 < count__37465)){
var vec__37475 = chunk__37464.cljs$core$IIndexed$_nth$arity$2(null,i__37466);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37475,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37475,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38025 = seq__37463;
var G__38026 = chunk__37464;
var G__38027 = count__37465;
var G__38028 = (i__37466 + (1));
seq__37463 = G__38025;
chunk__37464 = G__38026;
count__37465 = G__38027;
i__37466 = G__38028;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37463);
if(temp__5753__auto__){
var seq__37463__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37463__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__37463__$1);
var G__38029 = cljs.core.chunk_rest(seq__37463__$1);
var G__38030 = c__4649__auto__;
var G__38031 = cljs.core.count(c__4649__auto__);
var G__38032 = (0);
seq__37463 = G__38029;
chunk__37464 = G__38030;
count__37465 = G__38031;
i__37466 = G__38032;
continue;
} else {
var vec__37479 = cljs.core.first(seq__37463__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37479,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37479,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38033 = cljs.core.next(seq__37463__$1);
var G__38034 = null;
var G__38035 = (0);
var G__38036 = (0);
seq__37463 = G__38033;
chunk__37464 = G__38034;
count__37465 = G__38035;
i__37466 = G__38036;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__37482 = cljs.core.seq(styles);
var chunk__37483 = null;
var count__37484 = (0);
var i__37485 = (0);
while(true){
if((i__37485 < count__37484)){
var vec__37493 = chunk__37483.cljs$core$IIndexed$_nth$arity$2(null,i__37485);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37493,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37493,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38037 = seq__37482;
var G__38038 = chunk__37483;
var G__38039 = count__37484;
var G__38040 = (i__37485 + (1));
seq__37482 = G__38037;
chunk__37483 = G__38038;
count__37484 = G__38039;
i__37485 = G__38040;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37482);
if(temp__5753__auto__){
var seq__37482__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37482__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__37482__$1);
var G__38041 = cljs.core.chunk_rest(seq__37482__$1);
var G__38042 = c__4649__auto__;
var G__38043 = cljs.core.count(c__4649__auto__);
var G__38044 = (0);
seq__37482 = G__38041;
chunk__37483 = G__38042;
count__37484 = G__38043;
i__37485 = G__38044;
continue;
} else {
var vec__37500 = cljs.core.first(seq__37482__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37500,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37500,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38045 = cljs.core.next(seq__37482__$1);
var G__38046 = null;
var G__38047 = (0);
var G__38048 = (0);
seq__37482 = G__38045;
chunk__37483 = G__38046;
count__37484 = G__38047;
i__37485 = G__38048;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__37510_38049 = key;
var G__37510_38050__$1 = (((G__37510_38049 instanceof cljs.core.Keyword))?G__37510_38049.fqn:null);
switch (G__37510_38050__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_38054 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_38054,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_38054,"aria-");
}
})())){
el.setAttribute(ks_38054,value);
} else {
(el[ks_38054] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37538){
var map__37539 = p__37538;
var map__37539__$1 = cljs.core.__destructure_map(map__37539);
var props = map__37539__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37539__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37541 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37541,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37541,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37541,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37547 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37547,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37547;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37555 = arguments.length;
switch (G__37555) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37567){
var vec__37568 = p__37567;
var seq__37569 = cljs.core.seq(vec__37568);
var first__37570 = cljs.core.first(seq__37569);
var seq__37569__$1 = cljs.core.next(seq__37569);
var nn = first__37570;
var first__37570__$1 = cljs.core.first(seq__37569__$1);
var seq__37569__$2 = cljs.core.next(seq__37569__$1);
var np = first__37570__$1;
var nc = seq__37569__$2;
var node = vec__37568;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37572 = nn;
var G__37573 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37572,G__37573) : create_fn.call(null,G__37572,G__37573));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37574 = nn;
var G__37575 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37574,G__37575) : create_fn.call(null,G__37574,G__37575));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37578 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37578,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37578,(1),null);
var seq__37581_38062 = cljs.core.seq(node_children);
var chunk__37582_38063 = null;
var count__37583_38064 = (0);
var i__37584_38065 = (0);
while(true){
if((i__37584_38065 < count__37583_38064)){
var child_struct_38066 = chunk__37582_38063.cljs$core$IIndexed$_nth$arity$2(null,i__37584_38065);
var children_38067 = shadow.dom.dom_node(child_struct_38066);
if(cljs.core.seq_QMARK_(children_38067)){
var seq__37612_38068 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38067));
var chunk__37614_38069 = null;
var count__37615_38070 = (0);
var i__37616_38071 = (0);
while(true){
if((i__37616_38071 < count__37615_38070)){
var child_38072 = chunk__37614_38069.cljs$core$IIndexed$_nth$arity$2(null,i__37616_38071);
if(cljs.core.truth_(child_38072)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38072);


var G__38074 = seq__37612_38068;
var G__38075 = chunk__37614_38069;
var G__38076 = count__37615_38070;
var G__38077 = (i__37616_38071 + (1));
seq__37612_38068 = G__38074;
chunk__37614_38069 = G__38075;
count__37615_38070 = G__38076;
i__37616_38071 = G__38077;
continue;
} else {
var G__38078 = seq__37612_38068;
var G__38079 = chunk__37614_38069;
var G__38080 = count__37615_38070;
var G__38081 = (i__37616_38071 + (1));
seq__37612_38068 = G__38078;
chunk__37614_38069 = G__38079;
count__37615_38070 = G__38080;
i__37616_38071 = G__38081;
continue;
}
} else {
var temp__5753__auto___38082 = cljs.core.seq(seq__37612_38068);
if(temp__5753__auto___38082){
var seq__37612_38083__$1 = temp__5753__auto___38082;
if(cljs.core.chunked_seq_QMARK_(seq__37612_38083__$1)){
var c__4649__auto___38084 = cljs.core.chunk_first(seq__37612_38083__$1);
var G__38085 = cljs.core.chunk_rest(seq__37612_38083__$1);
var G__38086 = c__4649__auto___38084;
var G__38087 = cljs.core.count(c__4649__auto___38084);
var G__38088 = (0);
seq__37612_38068 = G__38085;
chunk__37614_38069 = G__38086;
count__37615_38070 = G__38087;
i__37616_38071 = G__38088;
continue;
} else {
var child_38089 = cljs.core.first(seq__37612_38083__$1);
if(cljs.core.truth_(child_38089)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38089);


var G__38090 = cljs.core.next(seq__37612_38083__$1);
var G__38091 = null;
var G__38092 = (0);
var G__38093 = (0);
seq__37612_38068 = G__38090;
chunk__37614_38069 = G__38091;
count__37615_38070 = G__38092;
i__37616_38071 = G__38093;
continue;
} else {
var G__38094 = cljs.core.next(seq__37612_38083__$1);
var G__38095 = null;
var G__38096 = (0);
var G__38097 = (0);
seq__37612_38068 = G__38094;
chunk__37614_38069 = G__38095;
count__37615_38070 = G__38096;
i__37616_38071 = G__38097;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38067);
}


var G__38098 = seq__37581_38062;
var G__38099 = chunk__37582_38063;
var G__38100 = count__37583_38064;
var G__38101 = (i__37584_38065 + (1));
seq__37581_38062 = G__38098;
chunk__37582_38063 = G__38099;
count__37583_38064 = G__38100;
i__37584_38065 = G__38101;
continue;
} else {
var temp__5753__auto___38106 = cljs.core.seq(seq__37581_38062);
if(temp__5753__auto___38106){
var seq__37581_38107__$1 = temp__5753__auto___38106;
if(cljs.core.chunked_seq_QMARK_(seq__37581_38107__$1)){
var c__4649__auto___38108 = cljs.core.chunk_first(seq__37581_38107__$1);
var G__38109 = cljs.core.chunk_rest(seq__37581_38107__$1);
var G__38110 = c__4649__auto___38108;
var G__38111 = cljs.core.count(c__4649__auto___38108);
var G__38112 = (0);
seq__37581_38062 = G__38109;
chunk__37582_38063 = G__38110;
count__37583_38064 = G__38111;
i__37584_38065 = G__38112;
continue;
} else {
var child_struct_38113 = cljs.core.first(seq__37581_38107__$1);
var children_38114 = shadow.dom.dom_node(child_struct_38113);
if(cljs.core.seq_QMARK_(children_38114)){
var seq__37636_38115 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38114));
var chunk__37638_38116 = null;
var count__37639_38117 = (0);
var i__37640_38118 = (0);
while(true){
if((i__37640_38118 < count__37639_38117)){
var child_38119 = chunk__37638_38116.cljs$core$IIndexed$_nth$arity$2(null,i__37640_38118);
if(cljs.core.truth_(child_38119)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38119);


var G__38120 = seq__37636_38115;
var G__38121 = chunk__37638_38116;
var G__38122 = count__37639_38117;
var G__38123 = (i__37640_38118 + (1));
seq__37636_38115 = G__38120;
chunk__37638_38116 = G__38121;
count__37639_38117 = G__38122;
i__37640_38118 = G__38123;
continue;
} else {
var G__38124 = seq__37636_38115;
var G__38125 = chunk__37638_38116;
var G__38126 = count__37639_38117;
var G__38127 = (i__37640_38118 + (1));
seq__37636_38115 = G__38124;
chunk__37638_38116 = G__38125;
count__37639_38117 = G__38126;
i__37640_38118 = G__38127;
continue;
}
} else {
var temp__5753__auto___38128__$1 = cljs.core.seq(seq__37636_38115);
if(temp__5753__auto___38128__$1){
var seq__37636_38129__$1 = temp__5753__auto___38128__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37636_38129__$1)){
var c__4649__auto___38130 = cljs.core.chunk_first(seq__37636_38129__$1);
var G__38132 = cljs.core.chunk_rest(seq__37636_38129__$1);
var G__38133 = c__4649__auto___38130;
var G__38134 = cljs.core.count(c__4649__auto___38130);
var G__38135 = (0);
seq__37636_38115 = G__38132;
chunk__37638_38116 = G__38133;
count__37639_38117 = G__38134;
i__37640_38118 = G__38135;
continue;
} else {
var child_38136 = cljs.core.first(seq__37636_38129__$1);
if(cljs.core.truth_(child_38136)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38136);


var G__38137 = cljs.core.next(seq__37636_38129__$1);
var G__38138 = null;
var G__38139 = (0);
var G__38140 = (0);
seq__37636_38115 = G__38137;
chunk__37638_38116 = G__38138;
count__37639_38117 = G__38139;
i__37640_38118 = G__38140;
continue;
} else {
var G__38141 = cljs.core.next(seq__37636_38129__$1);
var G__38142 = null;
var G__38143 = (0);
var G__38144 = (0);
seq__37636_38115 = G__38141;
chunk__37638_38116 = G__38142;
count__37639_38117 = G__38143;
i__37640_38118 = G__38144;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38114);
}


var G__38145 = cljs.core.next(seq__37581_38107__$1);
var G__38146 = null;
var G__38147 = (0);
var G__38148 = (0);
seq__37581_38062 = G__38145;
chunk__37582_38063 = G__38146;
count__37583_38064 = G__38147;
i__37584_38065 = G__38148;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37658 = cljs.core.seq(node);
var chunk__37659 = null;
var count__37660 = (0);
var i__37661 = (0);
while(true){
if((i__37661 < count__37660)){
var n = chunk__37659.cljs$core$IIndexed$_nth$arity$2(null,i__37661);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38152 = seq__37658;
var G__38153 = chunk__37659;
var G__38154 = count__37660;
var G__38155 = (i__37661 + (1));
seq__37658 = G__38152;
chunk__37659 = G__38153;
count__37660 = G__38154;
i__37661 = G__38155;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37658);
if(temp__5753__auto__){
var seq__37658__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37658__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__37658__$1);
var G__38156 = cljs.core.chunk_rest(seq__37658__$1);
var G__38157 = c__4649__auto__;
var G__38158 = cljs.core.count(c__4649__auto__);
var G__38160 = (0);
seq__37658 = G__38156;
chunk__37659 = G__38157;
count__37660 = G__38158;
i__37661 = G__38160;
continue;
} else {
var n = cljs.core.first(seq__37658__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38162 = cljs.core.next(seq__37658__$1);
var G__38163 = null;
var G__38164 = (0);
var G__38165 = (0);
seq__37658 = G__38162;
chunk__37659 = G__38163;
count__37660 = G__38164;
i__37661 = G__38165;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37679 = arguments.length;
switch (G__37679) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37685 = arguments.length;
switch (G__37685) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37700 = arguments.length;
switch (G__37700) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38176 = arguments.length;
var i__4830__auto___38177 = (0);
while(true){
if((i__4830__auto___38177 < len__4829__auto___38176)){
args__4835__auto__.push((arguments[i__4830__auto___38177]));

var G__38178 = (i__4830__auto___38177 + (1));
i__4830__auto___38177 = G__38178;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37718_38179 = cljs.core.seq(nodes);
var chunk__37719_38180 = null;
var count__37720_38181 = (0);
var i__37721_38182 = (0);
while(true){
if((i__37721_38182 < count__37720_38181)){
var node_38183 = chunk__37719_38180.cljs$core$IIndexed$_nth$arity$2(null,i__37721_38182);
fragment.appendChild(shadow.dom._to_dom(node_38183));


var G__38184 = seq__37718_38179;
var G__38185 = chunk__37719_38180;
var G__38186 = count__37720_38181;
var G__38187 = (i__37721_38182 + (1));
seq__37718_38179 = G__38184;
chunk__37719_38180 = G__38185;
count__37720_38181 = G__38186;
i__37721_38182 = G__38187;
continue;
} else {
var temp__5753__auto___38188 = cljs.core.seq(seq__37718_38179);
if(temp__5753__auto___38188){
var seq__37718_38189__$1 = temp__5753__auto___38188;
if(cljs.core.chunked_seq_QMARK_(seq__37718_38189__$1)){
var c__4649__auto___38190 = cljs.core.chunk_first(seq__37718_38189__$1);
var G__38191 = cljs.core.chunk_rest(seq__37718_38189__$1);
var G__38192 = c__4649__auto___38190;
var G__38193 = cljs.core.count(c__4649__auto___38190);
var G__38194 = (0);
seq__37718_38179 = G__38191;
chunk__37719_38180 = G__38192;
count__37720_38181 = G__38193;
i__37721_38182 = G__38194;
continue;
} else {
var node_38195 = cljs.core.first(seq__37718_38189__$1);
fragment.appendChild(shadow.dom._to_dom(node_38195));


var G__38196 = cljs.core.next(seq__37718_38189__$1);
var G__38197 = null;
var G__38198 = (0);
var G__38199 = (0);
seq__37718_38179 = G__38196;
chunk__37719_38180 = G__38197;
count__37720_38181 = G__38198;
i__37721_38182 = G__38199;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37714){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37714));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37733_38200 = cljs.core.seq(scripts);
var chunk__37734_38201 = null;
var count__37735_38202 = (0);
var i__37736_38203 = (0);
while(true){
if((i__37736_38203 < count__37735_38202)){
var vec__37749_38204 = chunk__37734_38201.cljs$core$IIndexed$_nth$arity$2(null,i__37736_38203);
var script_tag_38205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37749_38204,(0),null);
var script_body_38206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37749_38204,(1),null);
eval(script_body_38206);


var G__38207 = seq__37733_38200;
var G__38208 = chunk__37734_38201;
var G__38209 = count__37735_38202;
var G__38210 = (i__37736_38203 + (1));
seq__37733_38200 = G__38207;
chunk__37734_38201 = G__38208;
count__37735_38202 = G__38209;
i__37736_38203 = G__38210;
continue;
} else {
var temp__5753__auto___38211 = cljs.core.seq(seq__37733_38200);
if(temp__5753__auto___38211){
var seq__37733_38212__$1 = temp__5753__auto___38211;
if(cljs.core.chunked_seq_QMARK_(seq__37733_38212__$1)){
var c__4649__auto___38213 = cljs.core.chunk_first(seq__37733_38212__$1);
var G__38214 = cljs.core.chunk_rest(seq__37733_38212__$1);
var G__38215 = c__4649__auto___38213;
var G__38216 = cljs.core.count(c__4649__auto___38213);
var G__38217 = (0);
seq__37733_38200 = G__38214;
chunk__37734_38201 = G__38215;
count__37735_38202 = G__38216;
i__37736_38203 = G__38217;
continue;
} else {
var vec__37754_38218 = cljs.core.first(seq__37733_38212__$1);
var script_tag_38219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37754_38218,(0),null);
var script_body_38220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37754_38218,(1),null);
eval(script_body_38220);


var G__38221 = cljs.core.next(seq__37733_38212__$1);
var G__38222 = null;
var G__38223 = (0);
var G__38224 = (0);
seq__37733_38200 = G__38221;
chunk__37734_38201 = G__38222;
count__37735_38202 = G__38223;
i__37736_38203 = G__38224;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37760){
var vec__37761 = p__37760;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37761,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37761,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37773 = arguments.length;
switch (G__37773) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37781 = cljs.core.seq(style_keys);
var chunk__37782 = null;
var count__37783 = (0);
var i__37784 = (0);
while(true){
if((i__37784 < count__37783)){
var it = chunk__37782.cljs$core$IIndexed$_nth$arity$2(null,i__37784);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38229 = seq__37781;
var G__38230 = chunk__37782;
var G__38231 = count__37783;
var G__38232 = (i__37784 + (1));
seq__37781 = G__38229;
chunk__37782 = G__38230;
count__37783 = G__38231;
i__37784 = G__38232;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37781);
if(temp__5753__auto__){
var seq__37781__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37781__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__37781__$1);
var G__38233 = cljs.core.chunk_rest(seq__37781__$1);
var G__38234 = c__4649__auto__;
var G__38235 = cljs.core.count(c__4649__auto__);
var G__38236 = (0);
seq__37781 = G__38233;
chunk__37782 = G__38234;
count__37783 = G__38235;
i__37784 = G__38236;
continue;
} else {
var it = cljs.core.first(seq__37781__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38237 = cljs.core.next(seq__37781__$1);
var G__38238 = null;
var G__38239 = (0);
var G__38240 = (0);
seq__37781 = G__38237;
chunk__37782 = G__38238;
count__37783 = G__38239;
i__37784 = G__38240;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k37786,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__37794 = k37786;
var G__37794__$1 = (((G__37794 instanceof cljs.core.Keyword))?G__37794.fqn:null);
switch (G__37794__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37786,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__37799){
var vec__37801 = p__37799;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37801,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37801,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37785){
var self__ = this;
var G__37785__$1 = this;
return (new cljs.core.RecordIter((0),G__37785__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37787,other37788){
var self__ = this;
var this37787__$1 = this;
return (((!((other37788 == null)))) && ((((this37787__$1.constructor === other37788.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37787__$1.x,other37788.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37787__$1.y,other37788.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37787__$1.__extmap,other37788.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k37786){
var self__ = this;
var this__4479__auto____$1 = this;
var G__37822 = k37786;
var G__37822__$1 = (((G__37822 instanceof cljs.core.Keyword))?G__37822.fqn:null);
switch (G__37822__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37786);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__37785){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__37825 = cljs.core.keyword_identical_QMARK_;
var expr__37826 = k__4481__auto__;
if(cljs.core.truth_((pred__37825.cljs$core$IFn$_invoke$arity$2 ? pred__37825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37826) : pred__37825.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37826)))){
return (new shadow.dom.Coordinate(G__37785,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37825.cljs$core$IFn$_invoke$arity$2 ? pred__37825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37826) : pred__37825.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37826)))){
return (new shadow.dom.Coordinate(self__.x,G__37785,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__37785),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__37785){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37785,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37789){
var extmap__4512__auto__ = (function (){var G__37843 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37789,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37789)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37843);
} else {
return G__37843;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37789),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37789),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k37853,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__37864 = k37853;
var G__37864__$1 = (((G__37864 instanceof cljs.core.Keyword))?G__37864.fqn:null);
switch (G__37864__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37853,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__37868){
var vec__37870 = p__37868;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37870,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37870,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37852){
var self__ = this;
var G__37852__$1 = this;
return (new cljs.core.RecordIter((0),G__37852__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37854,other37855){
var self__ = this;
var this37854__$1 = this;
return (((!((other37855 == null)))) && ((((this37854__$1.constructor === other37855.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37854__$1.w,other37855.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37854__$1.h,other37855.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37854__$1.__extmap,other37855.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k37853){
var self__ = this;
var this__4479__auto____$1 = this;
var G__37894 = k37853;
var G__37894__$1 = (((G__37894 instanceof cljs.core.Keyword))?G__37894.fqn:null);
switch (G__37894__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37853);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__37852){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__37899 = cljs.core.keyword_identical_QMARK_;
var expr__37900 = k__4481__auto__;
if(cljs.core.truth_((pred__37899.cljs$core$IFn$_invoke$arity$2 ? pred__37899.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37900) : pred__37899.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37900)))){
return (new shadow.dom.Size(G__37852,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37899.cljs$core$IFn$_invoke$arity$2 ? pred__37899.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37900) : pred__37899.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37900)))){
return (new shadow.dom.Size(self__.w,G__37852,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__37852),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__37852){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37852,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37857){
var extmap__4512__auto__ = (function (){var G__37913 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37857,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37857)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37913);
} else {
return G__37913;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37857),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37857),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__38249 = (i + (1));
var G__38250 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38249;
ret = G__38250;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37921){
var vec__37922 = p__37921;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37922,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37922,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37926 = arguments.length;
switch (G__37926) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__38256 = ps;
var G__38257 = (i + (1));
el__$1 = G__38256;
i = G__38257;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37927 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37927,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37927,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37927,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37930_38258 = cljs.core.seq(props);
var chunk__37931_38259 = null;
var count__37932_38260 = (0);
var i__37933_38261 = (0);
while(true){
if((i__37933_38261 < count__37932_38260)){
var vec__37940_38262 = chunk__37931_38259.cljs$core$IIndexed$_nth$arity$2(null,i__37933_38261);
var k_38263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37940_38262,(0),null);
var v_38264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37940_38262,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_38263);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38263),v_38264);


var G__38265 = seq__37930_38258;
var G__38266 = chunk__37931_38259;
var G__38267 = count__37932_38260;
var G__38268 = (i__37933_38261 + (1));
seq__37930_38258 = G__38265;
chunk__37931_38259 = G__38266;
count__37932_38260 = G__38267;
i__37933_38261 = G__38268;
continue;
} else {
var temp__5753__auto___38269 = cljs.core.seq(seq__37930_38258);
if(temp__5753__auto___38269){
var seq__37930_38270__$1 = temp__5753__auto___38269;
if(cljs.core.chunked_seq_QMARK_(seq__37930_38270__$1)){
var c__4649__auto___38271 = cljs.core.chunk_first(seq__37930_38270__$1);
var G__38272 = cljs.core.chunk_rest(seq__37930_38270__$1);
var G__38273 = c__4649__auto___38271;
var G__38274 = cljs.core.count(c__4649__auto___38271);
var G__38275 = (0);
seq__37930_38258 = G__38272;
chunk__37931_38259 = G__38273;
count__37932_38260 = G__38274;
i__37933_38261 = G__38275;
continue;
} else {
var vec__37943_38276 = cljs.core.first(seq__37930_38270__$1);
var k_38277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37943_38276,(0),null);
var v_38278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37943_38276,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_38277);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38277),v_38278);


var G__38279 = cljs.core.next(seq__37930_38270__$1);
var G__38280 = null;
var G__38281 = (0);
var G__38282 = (0);
seq__37930_38258 = G__38279;
chunk__37931_38259 = G__38280;
count__37932_38260 = G__38281;
i__37933_38261 = G__38282;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37947 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37947,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37947,(1),null);
var seq__37950_38283 = cljs.core.seq(node_children);
var chunk__37952_38284 = null;
var count__37953_38285 = (0);
var i__37954_38286 = (0);
while(true){
if((i__37954_38286 < count__37953_38285)){
var child_struct_38287 = chunk__37952_38284.cljs$core$IIndexed$_nth$arity$2(null,i__37954_38286);
if((!((child_struct_38287 == null)))){
if(typeof child_struct_38287 === 'string'){
var text_38288 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38288),child_struct_38287].join(''));
} else {
var children_38289 = shadow.dom.svg_node(child_struct_38287);
if(cljs.core.seq_QMARK_(children_38289)){
var seq__37968_38290 = cljs.core.seq(children_38289);
var chunk__37970_38291 = null;
var count__37971_38292 = (0);
var i__37972_38293 = (0);
while(true){
if((i__37972_38293 < count__37971_38292)){
var child_38294 = chunk__37970_38291.cljs$core$IIndexed$_nth$arity$2(null,i__37972_38293);
if(cljs.core.truth_(child_38294)){
node.appendChild(child_38294);


var G__38298 = seq__37968_38290;
var G__38299 = chunk__37970_38291;
var G__38300 = count__37971_38292;
var G__38301 = (i__37972_38293 + (1));
seq__37968_38290 = G__38298;
chunk__37970_38291 = G__38299;
count__37971_38292 = G__38300;
i__37972_38293 = G__38301;
continue;
} else {
var G__38302 = seq__37968_38290;
var G__38303 = chunk__37970_38291;
var G__38304 = count__37971_38292;
var G__38305 = (i__37972_38293 + (1));
seq__37968_38290 = G__38302;
chunk__37970_38291 = G__38303;
count__37971_38292 = G__38304;
i__37972_38293 = G__38305;
continue;
}
} else {
var temp__5753__auto___38306 = cljs.core.seq(seq__37968_38290);
if(temp__5753__auto___38306){
var seq__37968_38308__$1 = temp__5753__auto___38306;
if(cljs.core.chunked_seq_QMARK_(seq__37968_38308__$1)){
var c__4649__auto___38309 = cljs.core.chunk_first(seq__37968_38308__$1);
var G__38310 = cljs.core.chunk_rest(seq__37968_38308__$1);
var G__38311 = c__4649__auto___38309;
var G__38312 = cljs.core.count(c__4649__auto___38309);
var G__38313 = (0);
seq__37968_38290 = G__38310;
chunk__37970_38291 = G__38311;
count__37971_38292 = G__38312;
i__37972_38293 = G__38313;
continue;
} else {
var child_38315 = cljs.core.first(seq__37968_38308__$1);
if(cljs.core.truth_(child_38315)){
node.appendChild(child_38315);


var G__38316 = cljs.core.next(seq__37968_38308__$1);
var G__38317 = null;
var G__38318 = (0);
var G__38319 = (0);
seq__37968_38290 = G__38316;
chunk__37970_38291 = G__38317;
count__37971_38292 = G__38318;
i__37972_38293 = G__38319;
continue;
} else {
var G__38320 = cljs.core.next(seq__37968_38308__$1);
var G__38321 = null;
var G__38322 = (0);
var G__38323 = (0);
seq__37968_38290 = G__38320;
chunk__37970_38291 = G__38321;
count__37971_38292 = G__38322;
i__37972_38293 = G__38323;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38289);
}
}


var G__38324 = seq__37950_38283;
var G__38325 = chunk__37952_38284;
var G__38326 = count__37953_38285;
var G__38327 = (i__37954_38286 + (1));
seq__37950_38283 = G__38324;
chunk__37952_38284 = G__38325;
count__37953_38285 = G__38326;
i__37954_38286 = G__38327;
continue;
} else {
var G__38328 = seq__37950_38283;
var G__38329 = chunk__37952_38284;
var G__38330 = count__37953_38285;
var G__38331 = (i__37954_38286 + (1));
seq__37950_38283 = G__38328;
chunk__37952_38284 = G__38329;
count__37953_38285 = G__38330;
i__37954_38286 = G__38331;
continue;
}
} else {
var temp__5753__auto___38332 = cljs.core.seq(seq__37950_38283);
if(temp__5753__auto___38332){
var seq__37950_38333__$1 = temp__5753__auto___38332;
if(cljs.core.chunked_seq_QMARK_(seq__37950_38333__$1)){
var c__4649__auto___38334 = cljs.core.chunk_first(seq__37950_38333__$1);
var G__38335 = cljs.core.chunk_rest(seq__37950_38333__$1);
var G__38336 = c__4649__auto___38334;
var G__38337 = cljs.core.count(c__4649__auto___38334);
var G__38338 = (0);
seq__37950_38283 = G__38335;
chunk__37952_38284 = G__38336;
count__37953_38285 = G__38337;
i__37954_38286 = G__38338;
continue;
} else {
var child_struct_38339 = cljs.core.first(seq__37950_38333__$1);
if((!((child_struct_38339 == null)))){
if(typeof child_struct_38339 === 'string'){
var text_38340 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38340),child_struct_38339].join(''));
} else {
var children_38341 = shadow.dom.svg_node(child_struct_38339);
if(cljs.core.seq_QMARK_(children_38341)){
var seq__37974_38342 = cljs.core.seq(children_38341);
var chunk__37976_38343 = null;
var count__37977_38344 = (0);
var i__37978_38345 = (0);
while(true){
if((i__37978_38345 < count__37977_38344)){
var child_38346 = chunk__37976_38343.cljs$core$IIndexed$_nth$arity$2(null,i__37978_38345);
if(cljs.core.truth_(child_38346)){
node.appendChild(child_38346);


var G__38347 = seq__37974_38342;
var G__38348 = chunk__37976_38343;
var G__38349 = count__37977_38344;
var G__38350 = (i__37978_38345 + (1));
seq__37974_38342 = G__38347;
chunk__37976_38343 = G__38348;
count__37977_38344 = G__38349;
i__37978_38345 = G__38350;
continue;
} else {
var G__38351 = seq__37974_38342;
var G__38352 = chunk__37976_38343;
var G__38353 = count__37977_38344;
var G__38354 = (i__37978_38345 + (1));
seq__37974_38342 = G__38351;
chunk__37976_38343 = G__38352;
count__37977_38344 = G__38353;
i__37978_38345 = G__38354;
continue;
}
} else {
var temp__5753__auto___38355__$1 = cljs.core.seq(seq__37974_38342);
if(temp__5753__auto___38355__$1){
var seq__37974_38356__$1 = temp__5753__auto___38355__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37974_38356__$1)){
var c__4649__auto___38357 = cljs.core.chunk_first(seq__37974_38356__$1);
var G__38358 = cljs.core.chunk_rest(seq__37974_38356__$1);
var G__38359 = c__4649__auto___38357;
var G__38360 = cljs.core.count(c__4649__auto___38357);
var G__38361 = (0);
seq__37974_38342 = G__38358;
chunk__37976_38343 = G__38359;
count__37977_38344 = G__38360;
i__37978_38345 = G__38361;
continue;
} else {
var child_38362 = cljs.core.first(seq__37974_38356__$1);
if(cljs.core.truth_(child_38362)){
node.appendChild(child_38362);


var G__38363 = cljs.core.next(seq__37974_38356__$1);
var G__38364 = null;
var G__38365 = (0);
var G__38366 = (0);
seq__37974_38342 = G__38363;
chunk__37976_38343 = G__38364;
count__37977_38344 = G__38365;
i__37978_38345 = G__38366;
continue;
} else {
var G__38367 = cljs.core.next(seq__37974_38356__$1);
var G__38368 = null;
var G__38369 = (0);
var G__38370 = (0);
seq__37974_38342 = G__38367;
chunk__37976_38343 = G__38368;
count__37977_38344 = G__38369;
i__37978_38345 = G__38370;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38341);
}
}


var G__38371 = cljs.core.next(seq__37950_38333__$1);
var G__38372 = null;
var G__38373 = (0);
var G__38374 = (0);
seq__37950_38283 = G__38371;
chunk__37952_38284 = G__38372;
count__37953_38285 = G__38373;
i__37954_38286 = G__38374;
continue;
} else {
var G__38375 = cljs.core.next(seq__37950_38333__$1);
var G__38376 = null;
var G__38377 = (0);
var G__38378 = (0);
seq__37950_38283 = G__38375;
chunk__37952_38284 = G__38376;
count__37953_38285 = G__38377;
i__37954_38286 = G__38378;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38379 = arguments.length;
var i__4830__auto___38380 = (0);
while(true){
if((i__4830__auto___38380 < len__4829__auto___38379)){
args__4835__auto__.push((arguments[i__4830__auto___38380]));

var G__38381 = (i__4830__auto___38380 + (1));
i__4830__auto___38380 = G__38381;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37980){
var G__37981 = cljs.core.first(seq37980);
var seq37980__$1 = cljs.core.next(seq37980);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37981,seq37980__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37983 = arguments.length;
switch (G__37983) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__35781__auto___38383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = (function (state_37988){
var state_val_37989 = (state_37988[(1)]);
if((state_val_37989 === (1))){
var state_37988__$1 = state_37988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37988__$1,(2),once_or_cleanup);
} else {
if((state_val_37989 === (2))){
var inst_37985 = (state_37988[(2)]);
var inst_37986 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37988__$1 = (function (){var statearr_37990 = state_37988;
(statearr_37990[(7)] = inst_37985);

return statearr_37990;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37988__$1,inst_37986);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__35689__auto__ = null;
var shadow$dom$state_machine__35689__auto____0 = (function (){
var statearr_37991 = [null,null,null,null,null,null,null,null];
(statearr_37991[(0)] = shadow$dom$state_machine__35689__auto__);

(statearr_37991[(1)] = (1));

return statearr_37991;
});
var shadow$dom$state_machine__35689__auto____1 = (function (state_37988){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_37988);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e37992){var ex__35692__auto__ = e37992;
var statearr_37993_38387 = state_37988;
(statearr_37993_38387[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_37988[(4)]))){
var statearr_37994_38388 = state_37988;
(statearr_37994_38388[(1)] = cljs.core.first((state_37988[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38389 = state_37988;
state_37988 = G__38389;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
shadow$dom$state_machine__35689__auto__ = function(state_37988){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__35689__auto____0.call(this);
case 1:
return shadow$dom$state_machine__35689__auto____1.call(this,state_37988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__35689__auto____0;
shadow$dom$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__35689__auto____1;
return shadow$dom$state_machine__35689__auto__;
})()
})();
var state__35783__auto__ = (function (){var statearr_37995 = f__35782__auto__();
(statearr_37995[(6)] = c__35781__auto___38383);

return statearr_37995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
