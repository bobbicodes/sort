goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__40373,p__40374){
var map__40375 = p__40373;
var map__40375__$1 = cljs.core.__destructure_map(map__40375);
var svc = map__40375__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40375__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40375__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40375__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40376 = p__40374;
var map__40376__$1 = cljs.core.__destructure_map(map__40376);
var msg = map__40376__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40376__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40376__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40376__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40376__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__40382,p__40383){
var map__40384 = p__40382;
var map__40384__$1 = cljs.core.__destructure_map(map__40384);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40384__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__40385 = p__40383;
var map__40385__$1 = cljs.core.__destructure_map(map__40385);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40385__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__40390,p__40391){
var map__40392 = p__40390;
var map__40392__$1 = cljs.core.__destructure_map(map__40392);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40392__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40392__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40393 = p__40391;
var map__40393__$1 = cljs.core.__destructure_map(map__40393);
var msg = map__40393__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40393__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__40396,tid){
var map__40397 = p__40396;
var map__40397__$1 = cljs.core.__destructure_map(map__40397);
var svc = map__40397__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40397__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__40403 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__40404 = null;
var count__40405 = (0);
var i__40406 = (0);
while(true){
if((i__40406 < count__40405)){
var vec__40421 = chunk__40404.cljs$core$IIndexed$_nth$arity$2(null,i__40406);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40421,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40421,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40433 = seq__40403;
var G__40434 = chunk__40404;
var G__40435 = count__40405;
var G__40436 = (i__40406 + (1));
seq__40403 = G__40433;
chunk__40404 = G__40434;
count__40405 = G__40435;
i__40406 = G__40436;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40403);
if(temp__5753__auto__){
var seq__40403__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40403__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__40403__$1);
var G__40437 = cljs.core.chunk_rest(seq__40403__$1);
var G__40438 = c__4649__auto__;
var G__40439 = cljs.core.count(c__4649__auto__);
var G__40440 = (0);
seq__40403 = G__40437;
chunk__40404 = G__40438;
count__40405 = G__40439;
i__40406 = G__40440;
continue;
} else {
var vec__40426 = cljs.core.first(seq__40403__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40426,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40426,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40441 = cljs.core.next(seq__40403__$1);
var G__40442 = null;
var G__40443 = (0);
var G__40444 = (0);
seq__40403 = G__40441;
chunk__40404 = G__40442;
count__40405 = G__40443;
i__40406 = G__40444;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__40398_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__40398_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__40399_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__40399_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__40400_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__40400_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__40401_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__40401_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__40431){
var map__40432 = p__40431;
var map__40432__$1 = cljs.core.__destructure_map(map__40432);
var svc = map__40432__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40432__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40432__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
