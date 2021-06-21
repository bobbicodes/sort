goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__38619,res){
var map__38620 = p__38619;
var map__38620__$1 = cljs.core.__destructure_map(map__38620);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38620__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38620__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__38621 = res;
var G__38621__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38621,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__38621);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38621__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__38621__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__38624 = arguments.length;
switch (G__38624) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__38629,msg,handlers,timeout_after_ms){
var map__38630 = p__38629;
var map__38630__$1 = cljs.core.__destructure_map(map__38630);
var runtime = map__38630__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38630__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38753 = arguments.length;
var i__4830__auto___38754 = (0);
while(true){
if((i__4830__auto___38754 < len__4829__auto___38753)){
args__4835__auto__.push((arguments[i__4830__auto___38754]));

var G__38755 = (i__4830__auto___38754 + (1));
i__4830__auto___38754 = G__38755;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__38634,ev,args){
var map__38636 = p__38634;
var map__38636__$1 = cljs.core.__destructure_map(map__38636);
var runtime = map__38636__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38636__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__38637 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__38640 = null;
var count__38641 = (0);
var i__38642 = (0);
while(true){
if((i__38642 < count__38641)){
var ext = chunk__38640.cljs$core$IIndexed$_nth$arity$2(null,i__38642);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__38757 = seq__38637;
var G__38758 = chunk__38640;
var G__38759 = count__38641;
var G__38760 = (i__38642 + (1));
seq__38637 = G__38757;
chunk__38640 = G__38758;
count__38641 = G__38759;
i__38642 = G__38760;
continue;
} else {
var G__38761 = seq__38637;
var G__38762 = chunk__38640;
var G__38763 = count__38641;
var G__38764 = (i__38642 + (1));
seq__38637 = G__38761;
chunk__38640 = G__38762;
count__38641 = G__38763;
i__38642 = G__38764;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38637);
if(temp__5753__auto__){
var seq__38637__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38637__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__38637__$1);
var G__38768 = cljs.core.chunk_rest(seq__38637__$1);
var G__38769 = c__4649__auto__;
var G__38770 = cljs.core.count(c__4649__auto__);
var G__38771 = (0);
seq__38637 = G__38768;
chunk__38640 = G__38769;
count__38641 = G__38770;
i__38642 = G__38771;
continue;
} else {
var ext = cljs.core.first(seq__38637__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__38772 = cljs.core.next(seq__38637__$1);
var G__38773 = null;
var G__38774 = (0);
var G__38775 = (0);
seq__38637 = G__38772;
chunk__38640 = G__38773;
count__38641 = G__38774;
i__38642 = G__38775;
continue;
} else {
var G__38776 = cljs.core.next(seq__38637__$1);
var G__38777 = null;
var G__38778 = (0);
var G__38779 = (0);
seq__38637 = G__38776;
chunk__38640 = G__38777;
count__38641 = G__38778;
i__38642 = G__38779;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq38631){
var G__38632 = cljs.core.first(seq38631);
var seq38631__$1 = cljs.core.next(seq38631);
var G__38633 = cljs.core.first(seq38631__$1);
var seq38631__$2 = cljs.core.next(seq38631__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38632,G__38633,seq38631__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__38657,p__38658){
var map__38659 = p__38657;
var map__38659__$1 = cljs.core.__destructure_map(map__38659);
var runtime = map__38659__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38659__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__38660 = p__38658;
var map__38660__$1 = cljs.core.__destructure_map(map__38660);
var msg = map__38660__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38660__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__38661 = cljs.core.deref(state_ref);
var map__38661__$1 = cljs.core.__destructure_map(map__38661);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38661__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38661__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__38665){
var map__38666 = p__38665;
var map__38666__$1 = cljs.core.__destructure_map(map__38666);
var runtime = map__38666__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38666__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__38671,msg){
var map__38673 = p__38671;
var map__38673__$1 = cljs.core.__destructure_map(map__38673);
var runtime = map__38673__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38673__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__38674,key,p__38675){
var map__38676 = p__38674;
var map__38676__$1 = cljs.core.__destructure_map(map__38676);
var state = map__38676__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38676__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__38677 = p__38675;
var map__38677__$1 = cljs.core.__destructure_map(map__38677);
var spec = map__38677__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38677__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__38683,key,spec){
var map__38684 = p__38683;
var map__38684__$1 = cljs.core.__destructure_map(map__38684);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38684__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__38689_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__38689_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__38690_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__38690_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__38691_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__38691_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__38692_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__38692_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__38693_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__38693_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__38722,key){
var map__38723 = p__38722;
var map__38723__$1 = cljs.core.__destructure_map(map__38723);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38723__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__38727,msg){
var map__38728 = p__38727;
var map__38728__$1 = cljs.core.__destructure_map(map__38728);
var runtime = map__38728__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38728__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__38730,p__38731){
var map__38732 = p__38730;
var map__38732__$1 = cljs.core.__destructure_map(map__38732);
var runtime = map__38732__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38732__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__38733 = p__38731;
var map__38733__$1 = cljs.core.__destructure_map(map__38733);
var msg = map__38733__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38733__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38733__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__38735 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__38737 = null;
var count__38738 = (0);
var i__38739 = (0);
while(true){
if((i__38739 < count__38738)){
var map__38747 = chunk__38737.cljs$core$IIndexed$_nth$arity$2(null,i__38739);
var map__38747__$1 = cljs.core.__destructure_map(map__38747);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38747__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__38794 = seq__38735;
var G__38795 = chunk__38737;
var G__38796 = count__38738;
var G__38797 = (i__38739 + (1));
seq__38735 = G__38794;
chunk__38737 = G__38795;
count__38738 = G__38796;
i__38739 = G__38797;
continue;
} else {
var G__38798 = seq__38735;
var G__38799 = chunk__38737;
var G__38800 = count__38738;
var G__38801 = (i__38739 + (1));
seq__38735 = G__38798;
chunk__38737 = G__38799;
count__38738 = G__38800;
i__38739 = G__38801;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38735);
if(temp__5753__auto__){
var seq__38735__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38735__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__38735__$1);
var G__38806 = cljs.core.chunk_rest(seq__38735__$1);
var G__38807 = c__4649__auto__;
var G__38808 = cljs.core.count(c__4649__auto__);
var G__38809 = (0);
seq__38735 = G__38806;
chunk__38737 = G__38807;
count__38738 = G__38808;
i__38739 = G__38809;
continue;
} else {
var map__38749 = cljs.core.first(seq__38735__$1);
var map__38749__$1 = cljs.core.__destructure_map(map__38749);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38749__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__38810 = cljs.core.next(seq__38735__$1);
var G__38811 = null;
var G__38812 = (0);
var G__38813 = (0);
seq__38735 = G__38810;
chunk__38737 = G__38811;
count__38738 = G__38812;
i__38739 = G__38813;
continue;
} else {
var G__38814 = cljs.core.next(seq__38735__$1);
var G__38815 = null;
var G__38816 = (0);
var G__38817 = (0);
seq__38735 = G__38814;
chunk__38737 = G__38815;
count__38738 = G__38816;
i__38739 = G__38817;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
