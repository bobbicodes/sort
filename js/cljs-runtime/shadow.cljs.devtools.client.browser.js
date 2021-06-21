goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___40853 = arguments.length;
var i__4830__auto___40855 = (0);
while(true){
if((i__4830__auto___40855 < len__4829__auto___40853)){
args__4835__auto__.push((arguments[i__4830__auto___40855]));

var G__40857 = (i__4830__auto___40855 + (1));
i__4830__auto___40855 = G__40857;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq40686){
var G__40687 = cljs.core.first(seq40686);
var seq40686__$1 = cljs.core.next(seq40686);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40687,seq40686__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__40690 = cljs.core.seq(sources);
var chunk__40691 = null;
var count__40692 = (0);
var i__40693 = (0);
while(true){
if((i__40693 < count__40692)){
var map__40707 = chunk__40691.cljs$core$IIndexed$_nth$arity$2(null,i__40693);
var map__40707__$1 = cljs.core.__destructure_map(map__40707);
var src = map__40707__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40707__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40707__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40707__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40707__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40708){var e_40859 = e40708;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40859);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40859.message)].join('')));
}

var G__40863 = seq__40690;
var G__40864 = chunk__40691;
var G__40865 = count__40692;
var G__40866 = (i__40693 + (1));
seq__40690 = G__40863;
chunk__40691 = G__40864;
count__40692 = G__40865;
i__40693 = G__40866;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40690);
if(temp__5753__auto__){
var seq__40690__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40690__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__40690__$1);
var G__40867 = cljs.core.chunk_rest(seq__40690__$1);
var G__40868 = c__4649__auto__;
var G__40869 = cljs.core.count(c__4649__auto__);
var G__40870 = (0);
seq__40690 = G__40867;
chunk__40691 = G__40868;
count__40692 = G__40869;
i__40693 = G__40870;
continue;
} else {
var map__40712 = cljs.core.first(seq__40690__$1);
var map__40712__$1 = cljs.core.__destructure_map(map__40712);
var src = map__40712__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40712__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40712__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40712__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40712__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40713){var e_40871 = e40713;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40871);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40871.message)].join('')));
}

var G__40872 = cljs.core.next(seq__40690__$1);
var G__40873 = null;
var G__40874 = (0);
var G__40875 = (0);
seq__40690 = G__40872;
chunk__40691 = G__40873;
count__40692 = G__40874;
i__40693 = G__40875;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__40715 = cljs.core.seq(js_requires);
var chunk__40716 = null;
var count__40717 = (0);
var i__40718 = (0);
while(true){
if((i__40718 < count__40717)){
var js_ns = chunk__40716.cljs$core$IIndexed$_nth$arity$2(null,i__40718);
var require_str_40879 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40879);


var G__40880 = seq__40715;
var G__40881 = chunk__40716;
var G__40882 = count__40717;
var G__40883 = (i__40718 + (1));
seq__40715 = G__40880;
chunk__40716 = G__40881;
count__40717 = G__40882;
i__40718 = G__40883;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40715);
if(temp__5753__auto__){
var seq__40715__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40715__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__40715__$1);
var G__40887 = cljs.core.chunk_rest(seq__40715__$1);
var G__40888 = c__4649__auto__;
var G__40889 = cljs.core.count(c__4649__auto__);
var G__40890 = (0);
seq__40715 = G__40887;
chunk__40716 = G__40888;
count__40717 = G__40889;
i__40718 = G__40890;
continue;
} else {
var js_ns = cljs.core.first(seq__40715__$1);
var require_str_40891 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40891);


var G__40892 = cljs.core.next(seq__40715__$1);
var G__40893 = null;
var G__40894 = (0);
var G__40895 = (0);
seq__40715 = G__40892;
chunk__40716 = G__40893;
count__40717 = G__40894;
i__40718 = G__40895;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__40720){
var map__40721 = p__40720;
var map__40721__$1 = cljs.core.__destructure_map(map__40721);
var msg = map__40721__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40721__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40721__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40722(s__40723){
return (new cljs.core.LazySeq(null,(function (){
var s__40723__$1 = s__40723;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__40723__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__40728 = cljs.core.first(xs__6308__auto__);
var map__40728__$1 = cljs.core.__destructure_map(map__40728);
var src = map__40728__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40728__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40728__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__40723__$1,map__40728,map__40728__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__40721,map__40721__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40722_$_iter__40724(s__40725){
return (new cljs.core.LazySeq(null,((function (s__40723__$1,map__40728,map__40728__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__40721,map__40721__$1,msg,info,reload_info){
return (function (){
var s__40725__$1 = s__40725;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__40725__$1);
if(temp__5753__auto____$1){
var s__40725__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40725__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__40725__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__40727 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__40726 = (0);
while(true){
if((i__40726 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__40726);
cljs.core.chunk_append(b__40727,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__40896 = (i__40726 + (1));
i__40726 = G__40896;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40727),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40722_$_iter__40724(cljs.core.chunk_rest(s__40725__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40727),null);
}
} else {
var warning = cljs.core.first(s__40725__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40722_$_iter__40724(cljs.core.rest(s__40725__$2)));
}
} else {
return null;
}
break;
}
});})(s__40723__$1,map__40728,map__40728__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__40721,map__40721__$1,msg,info,reload_info))
,null,null));
});})(s__40723__$1,map__40728,map__40728__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__40721,map__40721__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40722(cljs.core.rest(s__40723__$1)));
} else {
var G__40897 = cljs.core.rest(s__40723__$1);
s__40723__$1 = G__40897;
continue;
}
} else {
var G__40898 = cljs.core.rest(s__40723__$1);
s__40723__$1 = G__40898;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__40730_40899 = cljs.core.seq(warnings);
var chunk__40731_40900 = null;
var count__40732_40901 = (0);
var i__40733_40902 = (0);
while(true){
if((i__40733_40902 < count__40732_40901)){
var map__40736_40903 = chunk__40731_40900.cljs$core$IIndexed$_nth$arity$2(null,i__40733_40902);
var map__40736_40904__$1 = cljs.core.__destructure_map(map__40736_40903);
var w_40905 = map__40736_40904__$1;
var msg_40906__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40736_40904__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40736_40904__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40736_40904__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40736_40904__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40909)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40907),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40908),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40906__$1)].join(''));


var G__40910 = seq__40730_40899;
var G__40911 = chunk__40731_40900;
var G__40912 = count__40732_40901;
var G__40913 = (i__40733_40902 + (1));
seq__40730_40899 = G__40910;
chunk__40731_40900 = G__40911;
count__40732_40901 = G__40912;
i__40733_40902 = G__40913;
continue;
} else {
var temp__5753__auto___40914 = cljs.core.seq(seq__40730_40899);
if(temp__5753__auto___40914){
var seq__40730_40917__$1 = temp__5753__auto___40914;
if(cljs.core.chunked_seq_QMARK_(seq__40730_40917__$1)){
var c__4649__auto___40918 = cljs.core.chunk_first(seq__40730_40917__$1);
var G__40919 = cljs.core.chunk_rest(seq__40730_40917__$1);
var G__40920 = c__4649__auto___40918;
var G__40921 = cljs.core.count(c__4649__auto___40918);
var G__40922 = (0);
seq__40730_40899 = G__40919;
chunk__40731_40900 = G__40920;
count__40732_40901 = G__40921;
i__40733_40902 = G__40922;
continue;
} else {
var map__40737_40923 = cljs.core.first(seq__40730_40917__$1);
var map__40737_40924__$1 = cljs.core.__destructure_map(map__40737_40923);
var w_40925 = map__40737_40924__$1;
var msg_40926__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40737_40924__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40737_40924__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40737_40924__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40737_40924__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40929)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40927),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40928),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40926__$1)].join(''));


var G__40938 = cljs.core.next(seq__40730_40917__$1);
var G__40939 = null;
var G__40940 = (0);
var G__40941 = (0);
seq__40730_40899 = G__40938;
chunk__40731_40900 = G__40939;
count__40732_40901 = G__40940;
i__40733_40902 = G__40941;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__40719_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__40719_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__40738){
var map__40739 = p__40738;
var map__40739__$1 = cljs.core.__destructure_map(map__40739);
var msg = map__40739__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40739__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__40740 = cljs.core.seq(updates);
var chunk__40742 = null;
var count__40743 = (0);
var i__40744 = (0);
while(true){
if((i__40744 < count__40743)){
var path = chunk__40742.cljs$core$IIndexed$_nth$arity$2(null,i__40744);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40788_40942 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40792_40943 = null;
var count__40793_40944 = (0);
var i__40794_40945 = (0);
while(true){
if((i__40794_40945 < count__40793_40944)){
var node_40946 = chunk__40792_40943.cljs$core$IIndexed$_nth$arity$2(null,i__40794_40945);
if(cljs.core.not(node_40946.shadow$old)){
var path_match_40949 = shadow.cljs.devtools.client.browser.match_paths(node_40946.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40949)){
var new_link_40950 = (function (){var G__40802 = node_40946.cloneNode(true);
G__40802.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40949),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40802;
})();
(node_40946.shadow$old = true);

(new_link_40950.onload = ((function (seq__40788_40942,chunk__40792_40943,count__40793_40944,i__40794_40945,seq__40740,chunk__40742,count__40743,i__40744,new_link_40950,path_match_40949,node_40946,path,map__40739,map__40739__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40946);
});})(seq__40788_40942,chunk__40792_40943,count__40793_40944,i__40794_40945,seq__40740,chunk__40742,count__40743,i__40744,new_link_40950,path_match_40949,node_40946,path,map__40739,map__40739__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40949], 0));

goog.dom.insertSiblingAfter(new_link_40950,node_40946);


var G__40954 = seq__40788_40942;
var G__40955 = chunk__40792_40943;
var G__40956 = count__40793_40944;
var G__40957 = (i__40794_40945 + (1));
seq__40788_40942 = G__40954;
chunk__40792_40943 = G__40955;
count__40793_40944 = G__40956;
i__40794_40945 = G__40957;
continue;
} else {
var G__40959 = seq__40788_40942;
var G__40960 = chunk__40792_40943;
var G__40961 = count__40793_40944;
var G__40962 = (i__40794_40945 + (1));
seq__40788_40942 = G__40959;
chunk__40792_40943 = G__40960;
count__40793_40944 = G__40961;
i__40794_40945 = G__40962;
continue;
}
} else {
var G__40963 = seq__40788_40942;
var G__40964 = chunk__40792_40943;
var G__40965 = count__40793_40944;
var G__40966 = (i__40794_40945 + (1));
seq__40788_40942 = G__40963;
chunk__40792_40943 = G__40964;
count__40793_40944 = G__40965;
i__40794_40945 = G__40966;
continue;
}
} else {
var temp__5753__auto___40967 = cljs.core.seq(seq__40788_40942);
if(temp__5753__auto___40967){
var seq__40788_40968__$1 = temp__5753__auto___40967;
if(cljs.core.chunked_seq_QMARK_(seq__40788_40968__$1)){
var c__4649__auto___40969 = cljs.core.chunk_first(seq__40788_40968__$1);
var G__40970 = cljs.core.chunk_rest(seq__40788_40968__$1);
var G__40971 = c__4649__auto___40969;
var G__40972 = cljs.core.count(c__4649__auto___40969);
var G__40973 = (0);
seq__40788_40942 = G__40970;
chunk__40792_40943 = G__40971;
count__40793_40944 = G__40972;
i__40794_40945 = G__40973;
continue;
} else {
var node_40974 = cljs.core.first(seq__40788_40968__$1);
if(cljs.core.not(node_40974.shadow$old)){
var path_match_40975 = shadow.cljs.devtools.client.browser.match_paths(node_40974.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40975)){
var new_link_40977 = (function (){var G__40803 = node_40974.cloneNode(true);
G__40803.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40975),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40803;
})();
(node_40974.shadow$old = true);

(new_link_40977.onload = ((function (seq__40788_40942,chunk__40792_40943,count__40793_40944,i__40794_40945,seq__40740,chunk__40742,count__40743,i__40744,new_link_40977,path_match_40975,node_40974,seq__40788_40968__$1,temp__5753__auto___40967,path,map__40739,map__40739__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40974);
});})(seq__40788_40942,chunk__40792_40943,count__40793_40944,i__40794_40945,seq__40740,chunk__40742,count__40743,i__40744,new_link_40977,path_match_40975,node_40974,seq__40788_40968__$1,temp__5753__auto___40967,path,map__40739,map__40739__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40975], 0));

goog.dom.insertSiblingAfter(new_link_40977,node_40974);


var G__40980 = cljs.core.next(seq__40788_40968__$1);
var G__40981 = null;
var G__40982 = (0);
var G__40983 = (0);
seq__40788_40942 = G__40980;
chunk__40792_40943 = G__40981;
count__40793_40944 = G__40982;
i__40794_40945 = G__40983;
continue;
} else {
var G__40984 = cljs.core.next(seq__40788_40968__$1);
var G__40985 = null;
var G__40986 = (0);
var G__40987 = (0);
seq__40788_40942 = G__40984;
chunk__40792_40943 = G__40985;
count__40793_40944 = G__40986;
i__40794_40945 = G__40987;
continue;
}
} else {
var G__40988 = cljs.core.next(seq__40788_40968__$1);
var G__40989 = null;
var G__40990 = (0);
var G__40991 = (0);
seq__40788_40942 = G__40988;
chunk__40792_40943 = G__40989;
count__40793_40944 = G__40990;
i__40794_40945 = G__40991;
continue;
}
}
} else {
}
}
break;
}


var G__40993 = seq__40740;
var G__40994 = chunk__40742;
var G__40995 = count__40743;
var G__40996 = (i__40744 + (1));
seq__40740 = G__40993;
chunk__40742 = G__40994;
count__40743 = G__40995;
i__40744 = G__40996;
continue;
} else {
var G__40997 = seq__40740;
var G__40998 = chunk__40742;
var G__40999 = count__40743;
var G__41000 = (i__40744 + (1));
seq__40740 = G__40997;
chunk__40742 = G__40998;
count__40743 = G__40999;
i__40744 = G__41000;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40740);
if(temp__5753__auto__){
var seq__40740__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40740__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__40740__$1);
var G__41001 = cljs.core.chunk_rest(seq__40740__$1);
var G__41002 = c__4649__auto__;
var G__41003 = cljs.core.count(c__4649__auto__);
var G__41004 = (0);
seq__40740 = G__41001;
chunk__40742 = G__41002;
count__40743 = G__41003;
i__40744 = G__41004;
continue;
} else {
var path = cljs.core.first(seq__40740__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40805_41005 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40810_41006 = null;
var count__40811_41007 = (0);
var i__40812_41008 = (0);
while(true){
if((i__40812_41008 < count__40811_41007)){
var node_41009 = chunk__40810_41006.cljs$core$IIndexed$_nth$arity$2(null,i__40812_41008);
if(cljs.core.not(node_41009.shadow$old)){
var path_match_41010 = shadow.cljs.devtools.client.browser.match_paths(node_41009.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41010)){
var new_link_41011 = (function (){var G__40824 = node_41009.cloneNode(true);
G__40824.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41010),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40824;
})();
(node_41009.shadow$old = true);

(new_link_41011.onload = ((function (seq__40805_41005,chunk__40810_41006,count__40811_41007,i__40812_41008,seq__40740,chunk__40742,count__40743,i__40744,new_link_41011,path_match_41010,node_41009,path,seq__40740__$1,temp__5753__auto__,map__40739,map__40739__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41009);
});})(seq__40805_41005,chunk__40810_41006,count__40811_41007,i__40812_41008,seq__40740,chunk__40742,count__40743,i__40744,new_link_41011,path_match_41010,node_41009,path,seq__40740__$1,temp__5753__auto__,map__40739,map__40739__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41010], 0));

goog.dom.insertSiblingAfter(new_link_41011,node_41009);


var G__41013 = seq__40805_41005;
var G__41014 = chunk__40810_41006;
var G__41015 = count__40811_41007;
var G__41016 = (i__40812_41008 + (1));
seq__40805_41005 = G__41013;
chunk__40810_41006 = G__41014;
count__40811_41007 = G__41015;
i__40812_41008 = G__41016;
continue;
} else {
var G__41017 = seq__40805_41005;
var G__41018 = chunk__40810_41006;
var G__41019 = count__40811_41007;
var G__41020 = (i__40812_41008 + (1));
seq__40805_41005 = G__41017;
chunk__40810_41006 = G__41018;
count__40811_41007 = G__41019;
i__40812_41008 = G__41020;
continue;
}
} else {
var G__41021 = seq__40805_41005;
var G__41022 = chunk__40810_41006;
var G__41023 = count__40811_41007;
var G__41024 = (i__40812_41008 + (1));
seq__40805_41005 = G__41021;
chunk__40810_41006 = G__41022;
count__40811_41007 = G__41023;
i__40812_41008 = G__41024;
continue;
}
} else {
var temp__5753__auto___41025__$1 = cljs.core.seq(seq__40805_41005);
if(temp__5753__auto___41025__$1){
var seq__40805_41026__$1 = temp__5753__auto___41025__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40805_41026__$1)){
var c__4649__auto___41027 = cljs.core.chunk_first(seq__40805_41026__$1);
var G__41028 = cljs.core.chunk_rest(seq__40805_41026__$1);
var G__41029 = c__4649__auto___41027;
var G__41030 = cljs.core.count(c__4649__auto___41027);
var G__41031 = (0);
seq__40805_41005 = G__41028;
chunk__40810_41006 = G__41029;
count__40811_41007 = G__41030;
i__40812_41008 = G__41031;
continue;
} else {
var node_41032 = cljs.core.first(seq__40805_41026__$1);
if(cljs.core.not(node_41032.shadow$old)){
var path_match_41034 = shadow.cljs.devtools.client.browser.match_paths(node_41032.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41034)){
var new_link_41036 = (function (){var G__40825 = node_41032.cloneNode(true);
G__40825.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41034),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40825;
})();
(node_41032.shadow$old = true);

(new_link_41036.onload = ((function (seq__40805_41005,chunk__40810_41006,count__40811_41007,i__40812_41008,seq__40740,chunk__40742,count__40743,i__40744,new_link_41036,path_match_41034,node_41032,seq__40805_41026__$1,temp__5753__auto___41025__$1,path,seq__40740__$1,temp__5753__auto__,map__40739,map__40739__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41032);
});})(seq__40805_41005,chunk__40810_41006,count__40811_41007,i__40812_41008,seq__40740,chunk__40742,count__40743,i__40744,new_link_41036,path_match_41034,node_41032,seq__40805_41026__$1,temp__5753__auto___41025__$1,path,seq__40740__$1,temp__5753__auto__,map__40739,map__40739__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41034], 0));

goog.dom.insertSiblingAfter(new_link_41036,node_41032);


var G__41039 = cljs.core.next(seq__40805_41026__$1);
var G__41040 = null;
var G__41041 = (0);
var G__41042 = (0);
seq__40805_41005 = G__41039;
chunk__40810_41006 = G__41040;
count__40811_41007 = G__41041;
i__40812_41008 = G__41042;
continue;
} else {
var G__41043 = cljs.core.next(seq__40805_41026__$1);
var G__41044 = null;
var G__41045 = (0);
var G__41046 = (0);
seq__40805_41005 = G__41043;
chunk__40810_41006 = G__41044;
count__40811_41007 = G__41045;
i__40812_41008 = G__41046;
continue;
}
} else {
var G__41047 = cljs.core.next(seq__40805_41026__$1);
var G__41048 = null;
var G__41049 = (0);
var G__41050 = (0);
seq__40805_41005 = G__41047;
chunk__40810_41006 = G__41048;
count__40811_41007 = G__41049;
i__40812_41008 = G__41050;
continue;
}
}
} else {
}
}
break;
}


var G__41051 = cljs.core.next(seq__40740__$1);
var G__41052 = null;
var G__41053 = (0);
var G__41054 = (0);
seq__40740 = G__41051;
chunk__40742 = G__41052;
count__40743 = G__41053;
i__40744 = G__41054;
continue;
} else {
var G__41055 = cljs.core.next(seq__40740__$1);
var G__41056 = null;
var G__41057 = (0);
var G__41058 = (0);
seq__40740 = G__41055;
chunk__40742 = G__41056;
count__40743 = G__41057;
i__40744 = G__41058;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__40826){
var map__40827 = p__40826;
var map__40827__$1 = cljs.core.__destructure_map(map__40827);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40827__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__40829){
var map__40830 = p__40829;
var map__40830__$1 = cljs.core.__destructure_map(map__40830);
var _ = map__40830__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40830__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__40831,done,error){
var map__40832 = p__40831;
var map__40832__$1 = cljs.core.__destructure_map(map__40832);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40832__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__40833,done,error){
var map__40834 = p__40833;
var map__40834__$1 = cljs.core.__destructure_map(map__40834);
var msg = map__40834__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40834__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40834__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40834__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40835){
var map__40836 = p__40835;
var map__40836__$1 = cljs.core.__destructure_map(map__40836);
var src = map__40836__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40836__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__40837 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__40837) : done.call(null,G__40837));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__40838){
var map__40839 = p__40838;
var map__40839__$1 = cljs.core.__destructure_map(map__40839);
var msg__$1 = map__40839__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40839__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e40840){var ex = e40840;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__40841){
var map__40842 = p__40841;
var map__40842__$1 = cljs.core.__destructure_map(map__40842);
var env = map__40842__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40842__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__40844){
var map__40845 = p__40844;
var map__40845__$1 = cljs.core.__destructure_map(map__40845);
var msg = map__40845__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40845__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__40846){
var map__40847 = p__40846;
var map__40847__$1 = cljs.core.__destructure_map(map__40847);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40847__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40847__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__40848){
var map__40849 = p__40848;
var map__40849__$1 = cljs.core.__destructure_map(map__40849);
var svc = map__40849__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40849__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
