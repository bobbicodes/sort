goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35850 = arguments.length;
switch (G__35850) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35851 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35851 = (function (f,blockable,meta35852){
this.f = f;
this.blockable = blockable;
this.meta35852 = meta35852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35853,meta35852__$1){
var self__ = this;
var _35853__$1 = this;
return (new cljs.core.async.t_cljs$core$async35851(self__.f,self__.blockable,meta35852__$1));
}));

(cljs.core.async.t_cljs$core$async35851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35853){
var self__ = this;
var _35853__$1 = this;
return self__.meta35852;
}));

(cljs.core.async.t_cljs$core$async35851.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35851.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35851.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async35851.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async35851.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35852","meta35852",-761714194,null)], null);
}));

(cljs.core.async.t_cljs$core$async35851.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35851.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35851");

(cljs.core.async.t_cljs$core$async35851.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async35851");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35851.
 */
cljs.core.async.__GT_t_cljs$core$async35851 = (function cljs$core$async$__GT_t_cljs$core$async35851(f__$1,blockable__$1,meta35852){
return (new cljs.core.async.t_cljs$core$async35851(f__$1,blockable__$1,meta35852));
});

}

return (new cljs.core.async.t_cljs$core$async35851(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__35856 = arguments.length;
switch (G__35856) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__35858 = arguments.length;
switch (G__35858) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__35860 = arguments.length;
switch (G__35860) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_37281 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37281) : fn1.call(null,val_37281));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37281) : fn1.call(null,val_37281));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__35862 = arguments.length;
switch (G__35862) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___37283 = n;
var x_37284 = (0);
while(true){
if((x_37284 < n__4706__auto___37283)){
(a[x_37284] = x_37284);

var G__37285 = (x_37284 + (1));
x_37284 = G__37285;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35863 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35863 = (function (flag,meta35864){
this.flag = flag;
this.meta35864 = meta35864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35865,meta35864__$1){
var self__ = this;
var _35865__$1 = this;
return (new cljs.core.async.t_cljs$core$async35863(self__.flag,meta35864__$1));
}));

(cljs.core.async.t_cljs$core$async35863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35865){
var self__ = this;
var _35865__$1 = this;
return self__.meta35864;
}));

(cljs.core.async.t_cljs$core$async35863.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35863.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35863.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35863.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async35863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35864","meta35864",1887483522,null)], null);
}));

(cljs.core.async.t_cljs$core$async35863.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35863");

(cljs.core.async.t_cljs$core$async35863.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async35863");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35863.
 */
cljs.core.async.__GT_t_cljs$core$async35863 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35863(flag__$1,meta35864){
return (new cljs.core.async.t_cljs$core$async35863(flag__$1,meta35864));
});

}

return (new cljs.core.async.t_cljs$core$async35863(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35866 = (function (flag,cb,meta35867){
this.flag = flag;
this.cb = cb;
this.meta35867 = meta35867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35868,meta35867__$1){
var self__ = this;
var _35868__$1 = this;
return (new cljs.core.async.t_cljs$core$async35866(self__.flag,self__.cb,meta35867__$1));
}));

(cljs.core.async.t_cljs$core$async35866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35868){
var self__ = this;
var _35868__$1 = this;
return self__.meta35867;
}));

(cljs.core.async.t_cljs$core$async35866.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35866.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35866.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35866.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async35866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35867","meta35867",124354915,null)], null);
}));

(cljs.core.async.t_cljs$core$async35866.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35866");

(cljs.core.async.t_cljs$core$async35866.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async35866");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35866.
 */
cljs.core.async.__GT_t_cljs$core$async35866 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35866(flag__$1,cb__$1,meta35867){
return (new cljs.core.async.t_cljs$core$async35866(flag__$1,cb__$1,meta35867));
});

}

return (new cljs.core.async.t_cljs$core$async35866(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35869_SHARP_){
var G__35871 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35869_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35871) : fret.call(null,G__35871));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35870_SHARP_){
var G__35872 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35870_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35872) : fret.call(null,G__35872));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37293 = (i + (1));
i = G__37293;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___37296 = arguments.length;
var i__4830__auto___37297 = (0);
while(true){
if((i__4830__auto___37297 < len__4829__auto___37296)){
args__4835__auto__.push((arguments[i__4830__auto___37297]));

var G__37298 = (i__4830__auto___37297 + (1));
i__4830__auto___37297 = G__37298;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35875){
var map__35876 = p__35875;
var map__35876__$1 = cljs.core.__destructure_map(map__35876);
var opts = map__35876__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35873){
var G__35874 = cljs.core.first(seq35873);
var seq35873__$1 = cljs.core.next(seq35873);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35874,seq35873__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__35878 = arguments.length;
switch (G__35878) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35781__auto___37304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = (function (state_35902){
var state_val_35903 = (state_35902[(1)]);
if((state_val_35903 === (7))){
var inst_35898 = (state_35902[(2)]);
var state_35902__$1 = state_35902;
var statearr_35904_37305 = state_35902__$1;
(statearr_35904_37305[(2)] = inst_35898);

(statearr_35904_37305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (1))){
var state_35902__$1 = state_35902;
var statearr_35905_37306 = state_35902__$1;
(statearr_35905_37306[(2)] = null);

(statearr_35905_37306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (4))){
var inst_35881 = (state_35902[(7)]);
var inst_35881__$1 = (state_35902[(2)]);
var inst_35882 = (inst_35881__$1 == null);
var state_35902__$1 = (function (){var statearr_35906 = state_35902;
(statearr_35906[(7)] = inst_35881__$1);

return statearr_35906;
})();
if(cljs.core.truth_(inst_35882)){
var statearr_35907_37307 = state_35902__$1;
(statearr_35907_37307[(1)] = (5));

} else {
var statearr_35908_37308 = state_35902__$1;
(statearr_35908_37308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (13))){
var state_35902__$1 = state_35902;
var statearr_35909_37309 = state_35902__$1;
(statearr_35909_37309[(2)] = null);

(statearr_35909_37309[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (6))){
var inst_35881 = (state_35902[(7)]);
var state_35902__$1 = state_35902;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35902__$1,(11),to,inst_35881);
} else {
if((state_val_35903 === (3))){
var inst_35900 = (state_35902[(2)]);
var state_35902__$1 = state_35902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35902__$1,inst_35900);
} else {
if((state_val_35903 === (12))){
var state_35902__$1 = state_35902;
var statearr_35910_37310 = state_35902__$1;
(statearr_35910_37310[(2)] = null);

(statearr_35910_37310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (2))){
var state_35902__$1 = state_35902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35902__$1,(4),from);
} else {
if((state_val_35903 === (11))){
var inst_35891 = (state_35902[(2)]);
var state_35902__$1 = state_35902;
if(cljs.core.truth_(inst_35891)){
var statearr_35911_37311 = state_35902__$1;
(statearr_35911_37311[(1)] = (12));

} else {
var statearr_35912_37312 = state_35902__$1;
(statearr_35912_37312[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (9))){
var state_35902__$1 = state_35902;
var statearr_35913_37313 = state_35902__$1;
(statearr_35913_37313[(2)] = null);

(statearr_35913_37313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (5))){
var state_35902__$1 = state_35902;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35914_37314 = state_35902__$1;
(statearr_35914_37314[(1)] = (8));

} else {
var statearr_35915_37315 = state_35902__$1;
(statearr_35915_37315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (14))){
var inst_35896 = (state_35902[(2)]);
var state_35902__$1 = state_35902;
var statearr_35916_37316 = state_35902__$1;
(statearr_35916_37316[(2)] = inst_35896);

(statearr_35916_37316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (10))){
var inst_35888 = (state_35902[(2)]);
var state_35902__$1 = state_35902;
var statearr_35917_37317 = state_35902__$1;
(statearr_35917_37317[(2)] = inst_35888);

(statearr_35917_37317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (8))){
var inst_35885 = cljs.core.async.close_BANG_(to);
var state_35902__$1 = state_35902;
var statearr_35918_37318 = state_35902__$1;
(statearr_35918_37318[(2)] = inst_35885);

(statearr_35918_37318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35689__auto__ = null;
var cljs$core$async$state_machine__35689__auto____0 = (function (){
var statearr_35919 = [null,null,null,null,null,null,null,null];
(statearr_35919[(0)] = cljs$core$async$state_machine__35689__auto__);

(statearr_35919[(1)] = (1));

return statearr_35919;
});
var cljs$core$async$state_machine__35689__auto____1 = (function (state_35902){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_35902);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e35920){var ex__35692__auto__ = e35920;
var statearr_35921_37319 = state_35902;
(statearr_35921_37319[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_35902[(4)]))){
var statearr_35922_37320 = state_35902;
(statearr_35922_37320[(1)] = cljs.core.first((state_35902[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37321 = state_35902;
state_35902 = G__37321;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
cljs$core$async$state_machine__35689__auto__ = function(state_35902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35689__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35689__auto____1.call(this,state_35902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35689__auto____0;
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35689__auto____1;
return cljs$core$async$state_machine__35689__auto__;
})()
})();
var state__35783__auto__ = (function (){var statearr_35923 = f__35782__auto__();
(statearr_35923[(6)] = c__35781__auto___37304);

return statearr_35923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__35924){
var vec__35925 = p__35924;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35925,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35925,(1),null);
var job = vec__35925;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__35781__auto___37322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = (function (state_35932){
var state_val_35933 = (state_35932[(1)]);
if((state_val_35933 === (1))){
var state_35932__$1 = state_35932;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35932__$1,(2),res,v);
} else {
if((state_val_35933 === (2))){
var inst_35929 = (state_35932[(2)]);
var inst_35930 = cljs.core.async.close_BANG_(res);
var state_35932__$1 = (function (){var statearr_35934 = state_35932;
(statearr_35934[(7)] = inst_35929);

return statearr_35934;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35932__$1,inst_35930);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____0 = (function (){
var statearr_35935 = [null,null,null,null,null,null,null,null];
(statearr_35935[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__);

(statearr_35935[(1)] = (1));

return statearr_35935;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____1 = (function (state_35932){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_35932);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e35936){var ex__35692__auto__ = e35936;
var statearr_35937_37323 = state_35932;
(statearr_35937_37323[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_35932[(4)]))){
var statearr_35938_37324 = state_35932;
(statearr_35938_37324[(1)] = cljs.core.first((state_35932[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37325 = state_35932;
state_35932 = G__37325;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__ = function(state_35932){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____1.call(this,state_35932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__;
})()
})();
var state__35783__auto__ = (function (){var statearr_35939 = f__35782__auto__();
(statearr_35939[(6)] = c__35781__auto___37322);

return statearr_35939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__35940){
var vec__35941 = p__35940;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35941,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35941,(1),null);
var job = vec__35941;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___37326 = n;
var __37327 = (0);
while(true){
if((__37327 < n__4706__auto___37326)){
var G__35944_37328 = type;
var G__35944_37329__$1 = (((G__35944_37328 instanceof cljs.core.Keyword))?G__35944_37328.fqn:null);
switch (G__35944_37329__$1) {
case "compute":
var c__35781__auto___37331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37327,c__35781__auto___37331,G__35944_37328,G__35944_37329__$1,n__4706__auto___37326,jobs,results,process,async){
return (function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = ((function (__37327,c__35781__auto___37331,G__35944_37328,G__35944_37329__$1,n__4706__auto___37326,jobs,results,process,async){
return (function (state_35957){
var state_val_35958 = (state_35957[(1)]);
if((state_val_35958 === (1))){
var state_35957__$1 = state_35957;
var statearr_35959_37332 = state_35957__$1;
(statearr_35959_37332[(2)] = null);

(statearr_35959_37332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (2))){
var state_35957__$1 = state_35957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35957__$1,(4),jobs);
} else {
if((state_val_35958 === (3))){
var inst_35955 = (state_35957[(2)]);
var state_35957__$1 = state_35957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35957__$1,inst_35955);
} else {
if((state_val_35958 === (4))){
var inst_35947 = (state_35957[(2)]);
var inst_35948 = process(inst_35947);
var state_35957__$1 = state_35957;
if(cljs.core.truth_(inst_35948)){
var statearr_35960_37335 = state_35957__$1;
(statearr_35960_37335[(1)] = (5));

} else {
var statearr_35961_37336 = state_35957__$1;
(statearr_35961_37336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (5))){
var state_35957__$1 = state_35957;
var statearr_35962_37337 = state_35957__$1;
(statearr_35962_37337[(2)] = null);

(statearr_35962_37337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (6))){
var state_35957__$1 = state_35957;
var statearr_35963_37338 = state_35957__$1;
(statearr_35963_37338[(2)] = null);

(statearr_35963_37338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (7))){
var inst_35953 = (state_35957[(2)]);
var state_35957__$1 = state_35957;
var statearr_35964_37339 = state_35957__$1;
(statearr_35964_37339[(2)] = inst_35953);

(statearr_35964_37339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37327,c__35781__auto___37331,G__35944_37328,G__35944_37329__$1,n__4706__auto___37326,jobs,results,process,async))
;
return ((function (__37327,switch__35688__auto__,c__35781__auto___37331,G__35944_37328,G__35944_37329__$1,n__4706__auto___37326,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____0 = (function (){
var statearr_35965 = [null,null,null,null,null,null,null];
(statearr_35965[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__);

(statearr_35965[(1)] = (1));

return statearr_35965;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____1 = (function (state_35957){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_35957);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e35966){var ex__35692__auto__ = e35966;
var statearr_35967_37340 = state_35957;
(statearr_35967_37340[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_35957[(4)]))){
var statearr_35968_37341 = state_35957;
(statearr_35968_37341[(1)] = cljs.core.first((state_35957[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37342 = state_35957;
state_35957 = G__37342;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__ = function(state_35957){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____1.call(this,state_35957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__;
})()
;})(__37327,switch__35688__auto__,c__35781__auto___37331,G__35944_37328,G__35944_37329__$1,n__4706__auto___37326,jobs,results,process,async))
})();
var state__35783__auto__ = (function (){var statearr_35969 = f__35782__auto__();
(statearr_35969[(6)] = c__35781__auto___37331);

return statearr_35969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
});})(__37327,c__35781__auto___37331,G__35944_37328,G__35944_37329__$1,n__4706__auto___37326,jobs,results,process,async))
);


break;
case "async":
var c__35781__auto___37343 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37327,c__35781__auto___37343,G__35944_37328,G__35944_37329__$1,n__4706__auto___37326,jobs,results,process,async){
return (function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = ((function (__37327,c__35781__auto___37343,G__35944_37328,G__35944_37329__$1,n__4706__auto___37326,jobs,results,process,async){
return (function (state_35982){
var state_val_35983 = (state_35982[(1)]);
if((state_val_35983 === (1))){
var state_35982__$1 = state_35982;
var statearr_35984_37344 = state_35982__$1;
(statearr_35984_37344[(2)] = null);

(statearr_35984_37344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (2))){
var state_35982__$1 = state_35982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35982__$1,(4),jobs);
} else {
if((state_val_35983 === (3))){
var inst_35980 = (state_35982[(2)]);
var state_35982__$1 = state_35982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35982__$1,inst_35980);
} else {
if((state_val_35983 === (4))){
var inst_35972 = (state_35982[(2)]);
var inst_35973 = async(inst_35972);
var state_35982__$1 = state_35982;
if(cljs.core.truth_(inst_35973)){
var statearr_35985_37345 = state_35982__$1;
(statearr_35985_37345[(1)] = (5));

} else {
var statearr_35986_37346 = state_35982__$1;
(statearr_35986_37346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (5))){
var state_35982__$1 = state_35982;
var statearr_35987_37347 = state_35982__$1;
(statearr_35987_37347[(2)] = null);

(statearr_35987_37347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (6))){
var state_35982__$1 = state_35982;
var statearr_35988_37348 = state_35982__$1;
(statearr_35988_37348[(2)] = null);

(statearr_35988_37348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (7))){
var inst_35978 = (state_35982[(2)]);
var state_35982__$1 = state_35982;
var statearr_35989_37349 = state_35982__$1;
(statearr_35989_37349[(2)] = inst_35978);

(statearr_35989_37349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37327,c__35781__auto___37343,G__35944_37328,G__35944_37329__$1,n__4706__auto___37326,jobs,results,process,async))
;
return ((function (__37327,switch__35688__auto__,c__35781__auto___37343,G__35944_37328,G__35944_37329__$1,n__4706__auto___37326,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____0 = (function (){
var statearr_35990 = [null,null,null,null,null,null,null];
(statearr_35990[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__);

(statearr_35990[(1)] = (1));

return statearr_35990;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____1 = (function (state_35982){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_35982);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e35991){var ex__35692__auto__ = e35991;
var statearr_35992_37350 = state_35982;
(statearr_35992_37350[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_35982[(4)]))){
var statearr_35993_37351 = state_35982;
(statearr_35993_37351[(1)] = cljs.core.first((state_35982[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37352 = state_35982;
state_35982 = G__37352;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__ = function(state_35982){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____1.call(this,state_35982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__;
})()
;})(__37327,switch__35688__auto__,c__35781__auto___37343,G__35944_37328,G__35944_37329__$1,n__4706__auto___37326,jobs,results,process,async))
})();
var state__35783__auto__ = (function (){var statearr_35994 = f__35782__auto__();
(statearr_35994[(6)] = c__35781__auto___37343);

return statearr_35994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
});})(__37327,c__35781__auto___37343,G__35944_37328,G__35944_37329__$1,n__4706__auto___37326,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35944_37329__$1)].join('')));

}

var G__37353 = (__37327 + (1));
__37327 = G__37353;
continue;
} else {
}
break;
}

var c__35781__auto___37354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = (function (state_36016){
var state_val_36017 = (state_36016[(1)]);
if((state_val_36017 === (7))){
var inst_36012 = (state_36016[(2)]);
var state_36016__$1 = state_36016;
var statearr_36018_37356 = state_36016__$1;
(statearr_36018_37356[(2)] = inst_36012);

(statearr_36018_37356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36017 === (1))){
var state_36016__$1 = state_36016;
var statearr_36019_37357 = state_36016__$1;
(statearr_36019_37357[(2)] = null);

(statearr_36019_37357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36017 === (4))){
var inst_35997 = (state_36016[(7)]);
var inst_35997__$1 = (state_36016[(2)]);
var inst_35998 = (inst_35997__$1 == null);
var state_36016__$1 = (function (){var statearr_36020 = state_36016;
(statearr_36020[(7)] = inst_35997__$1);

return statearr_36020;
})();
if(cljs.core.truth_(inst_35998)){
var statearr_36021_37358 = state_36016__$1;
(statearr_36021_37358[(1)] = (5));

} else {
var statearr_36022_37359 = state_36016__$1;
(statearr_36022_37359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36017 === (6))){
var inst_36002 = (state_36016[(8)]);
var inst_35997 = (state_36016[(7)]);
var inst_36002__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_36003 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36004 = [inst_35997,inst_36002__$1];
var inst_36005 = (new cljs.core.PersistentVector(null,2,(5),inst_36003,inst_36004,null));
var state_36016__$1 = (function (){var statearr_36023 = state_36016;
(statearr_36023[(8)] = inst_36002__$1);

return statearr_36023;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36016__$1,(8),jobs,inst_36005);
} else {
if((state_val_36017 === (3))){
var inst_36014 = (state_36016[(2)]);
var state_36016__$1 = state_36016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36016__$1,inst_36014);
} else {
if((state_val_36017 === (2))){
var state_36016__$1 = state_36016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36016__$1,(4),from);
} else {
if((state_val_36017 === (9))){
var inst_36009 = (state_36016[(2)]);
var state_36016__$1 = (function (){var statearr_36024 = state_36016;
(statearr_36024[(9)] = inst_36009);

return statearr_36024;
})();
var statearr_36025_37362 = state_36016__$1;
(statearr_36025_37362[(2)] = null);

(statearr_36025_37362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36017 === (5))){
var inst_36000 = cljs.core.async.close_BANG_(jobs);
var state_36016__$1 = state_36016;
var statearr_36026_37363 = state_36016__$1;
(statearr_36026_37363[(2)] = inst_36000);

(statearr_36026_37363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36017 === (8))){
var inst_36002 = (state_36016[(8)]);
var inst_36007 = (state_36016[(2)]);
var state_36016__$1 = (function (){var statearr_36027 = state_36016;
(statearr_36027[(10)] = inst_36007);

return statearr_36027;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36016__$1,(9),results,inst_36002);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____0 = (function (){
var statearr_36028 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36028[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__);

(statearr_36028[(1)] = (1));

return statearr_36028;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____1 = (function (state_36016){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_36016);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e36029){var ex__35692__auto__ = e36029;
var statearr_36030_37364 = state_36016;
(statearr_36030_37364[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_36016[(4)]))){
var statearr_36031_37365 = state_36016;
(statearr_36031_37365[(1)] = cljs.core.first((state_36016[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37366 = state_36016;
state_36016 = G__37366;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__ = function(state_36016){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____1.call(this,state_36016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__;
})()
})();
var state__35783__auto__ = (function (){var statearr_36032 = f__35782__auto__();
(statearr_36032[(6)] = c__35781__auto___37354);

return statearr_36032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
}));


var c__35781__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = (function (state_36070){
var state_val_36071 = (state_36070[(1)]);
if((state_val_36071 === (7))){
var inst_36066 = (state_36070[(2)]);
var state_36070__$1 = state_36070;
var statearr_36072_37368 = state_36070__$1;
(statearr_36072_37368[(2)] = inst_36066);

(statearr_36072_37368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (20))){
var state_36070__$1 = state_36070;
var statearr_36073_37370 = state_36070__$1;
(statearr_36073_37370[(2)] = null);

(statearr_36073_37370[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (1))){
var state_36070__$1 = state_36070;
var statearr_36074_37371 = state_36070__$1;
(statearr_36074_37371[(2)] = null);

(statearr_36074_37371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (4))){
var inst_36035 = (state_36070[(7)]);
var inst_36035__$1 = (state_36070[(2)]);
var inst_36036 = (inst_36035__$1 == null);
var state_36070__$1 = (function (){var statearr_36075 = state_36070;
(statearr_36075[(7)] = inst_36035__$1);

return statearr_36075;
})();
if(cljs.core.truth_(inst_36036)){
var statearr_36076_37372 = state_36070__$1;
(statearr_36076_37372[(1)] = (5));

} else {
var statearr_36077_37373 = state_36070__$1;
(statearr_36077_37373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (15))){
var inst_36048 = (state_36070[(8)]);
var state_36070__$1 = state_36070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36070__$1,(18),to,inst_36048);
} else {
if((state_val_36071 === (21))){
var inst_36061 = (state_36070[(2)]);
var state_36070__$1 = state_36070;
var statearr_36078_37374 = state_36070__$1;
(statearr_36078_37374[(2)] = inst_36061);

(statearr_36078_37374[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (13))){
var inst_36063 = (state_36070[(2)]);
var state_36070__$1 = (function (){var statearr_36079 = state_36070;
(statearr_36079[(9)] = inst_36063);

return statearr_36079;
})();
var statearr_36080_37375 = state_36070__$1;
(statearr_36080_37375[(2)] = null);

(statearr_36080_37375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (6))){
var inst_36035 = (state_36070[(7)]);
var state_36070__$1 = state_36070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36070__$1,(11),inst_36035);
} else {
if((state_val_36071 === (17))){
var inst_36056 = (state_36070[(2)]);
var state_36070__$1 = state_36070;
if(cljs.core.truth_(inst_36056)){
var statearr_36081_37377 = state_36070__$1;
(statearr_36081_37377[(1)] = (19));

} else {
var statearr_36082_37378 = state_36070__$1;
(statearr_36082_37378[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (3))){
var inst_36068 = (state_36070[(2)]);
var state_36070__$1 = state_36070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36070__$1,inst_36068);
} else {
if((state_val_36071 === (12))){
var inst_36045 = (state_36070[(10)]);
var state_36070__$1 = state_36070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36070__$1,(14),inst_36045);
} else {
if((state_val_36071 === (2))){
var state_36070__$1 = state_36070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36070__$1,(4),results);
} else {
if((state_val_36071 === (19))){
var state_36070__$1 = state_36070;
var statearr_36083_37380 = state_36070__$1;
(statearr_36083_37380[(2)] = null);

(statearr_36083_37380[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (11))){
var inst_36045 = (state_36070[(2)]);
var state_36070__$1 = (function (){var statearr_36084 = state_36070;
(statearr_36084[(10)] = inst_36045);

return statearr_36084;
})();
var statearr_36085_37381 = state_36070__$1;
(statearr_36085_37381[(2)] = null);

(statearr_36085_37381[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (9))){
var state_36070__$1 = state_36070;
var statearr_36086_37382 = state_36070__$1;
(statearr_36086_37382[(2)] = null);

(statearr_36086_37382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (5))){
var state_36070__$1 = state_36070;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36087_37383 = state_36070__$1;
(statearr_36087_37383[(1)] = (8));

} else {
var statearr_36088_37384 = state_36070__$1;
(statearr_36088_37384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (14))){
var inst_36050 = (state_36070[(11)]);
var inst_36048 = (state_36070[(8)]);
var inst_36048__$1 = (state_36070[(2)]);
var inst_36049 = (inst_36048__$1 == null);
var inst_36050__$1 = cljs.core.not(inst_36049);
var state_36070__$1 = (function (){var statearr_36089 = state_36070;
(statearr_36089[(11)] = inst_36050__$1);

(statearr_36089[(8)] = inst_36048__$1);

return statearr_36089;
})();
if(inst_36050__$1){
var statearr_36090_37385 = state_36070__$1;
(statearr_36090_37385[(1)] = (15));

} else {
var statearr_36091_37387 = state_36070__$1;
(statearr_36091_37387[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (16))){
var inst_36050 = (state_36070[(11)]);
var state_36070__$1 = state_36070;
var statearr_36092_37388 = state_36070__$1;
(statearr_36092_37388[(2)] = inst_36050);

(statearr_36092_37388[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (10))){
var inst_36042 = (state_36070[(2)]);
var state_36070__$1 = state_36070;
var statearr_36093_37390 = state_36070__$1;
(statearr_36093_37390[(2)] = inst_36042);

(statearr_36093_37390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (18))){
var inst_36053 = (state_36070[(2)]);
var state_36070__$1 = state_36070;
var statearr_36094_37391 = state_36070__$1;
(statearr_36094_37391[(2)] = inst_36053);

(statearr_36094_37391[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (8))){
var inst_36039 = cljs.core.async.close_BANG_(to);
var state_36070__$1 = state_36070;
var statearr_36095_37392 = state_36070__$1;
(statearr_36095_37392[(2)] = inst_36039);

(statearr_36095_37392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____0 = (function (){
var statearr_36096 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36096[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__);

(statearr_36096[(1)] = (1));

return statearr_36096;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____1 = (function (state_36070){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_36070);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e36097){var ex__35692__auto__ = e36097;
var statearr_36098_37393 = state_36070;
(statearr_36098_37393[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_36070[(4)]))){
var statearr_36099_37394 = state_36070;
(statearr_36099_37394[(1)] = cljs.core.first((state_36070[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37395 = state_36070;
state_36070 = G__37395;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__ = function(state_36070){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____1.call(this,state_36070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35689__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35689__auto__;
})()
})();
var state__35783__auto__ = (function (){var statearr_36100 = f__35782__auto__();
(statearr_36100[(6)] = c__35781__auto__);

return statearr_36100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
}));

return c__35781__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__36102 = arguments.length;
switch (G__36102) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__36104 = arguments.length;
switch (G__36104) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__36106 = arguments.length;
switch (G__36106) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__35781__auto___37401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = (function (state_36132){
var state_val_36133 = (state_36132[(1)]);
if((state_val_36133 === (7))){
var inst_36128 = (state_36132[(2)]);
var state_36132__$1 = state_36132;
var statearr_36134_37402 = state_36132__$1;
(statearr_36134_37402[(2)] = inst_36128);

(statearr_36134_37402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36133 === (1))){
var state_36132__$1 = state_36132;
var statearr_36135_37403 = state_36132__$1;
(statearr_36135_37403[(2)] = null);

(statearr_36135_37403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36133 === (4))){
var inst_36109 = (state_36132[(7)]);
var inst_36109__$1 = (state_36132[(2)]);
var inst_36110 = (inst_36109__$1 == null);
var state_36132__$1 = (function (){var statearr_36136 = state_36132;
(statearr_36136[(7)] = inst_36109__$1);

return statearr_36136;
})();
if(cljs.core.truth_(inst_36110)){
var statearr_36137_37404 = state_36132__$1;
(statearr_36137_37404[(1)] = (5));

} else {
var statearr_36138_37405 = state_36132__$1;
(statearr_36138_37405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36133 === (13))){
var state_36132__$1 = state_36132;
var statearr_36139_37406 = state_36132__$1;
(statearr_36139_37406[(2)] = null);

(statearr_36139_37406[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36133 === (6))){
var inst_36109 = (state_36132[(7)]);
var inst_36115 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36109) : p.call(null,inst_36109));
var state_36132__$1 = state_36132;
if(cljs.core.truth_(inst_36115)){
var statearr_36140_37407 = state_36132__$1;
(statearr_36140_37407[(1)] = (9));

} else {
var statearr_36141_37408 = state_36132__$1;
(statearr_36141_37408[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36133 === (3))){
var inst_36130 = (state_36132[(2)]);
var state_36132__$1 = state_36132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36132__$1,inst_36130);
} else {
if((state_val_36133 === (12))){
var state_36132__$1 = state_36132;
var statearr_36142_37410 = state_36132__$1;
(statearr_36142_37410[(2)] = null);

(statearr_36142_37410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36133 === (2))){
var state_36132__$1 = state_36132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36132__$1,(4),ch);
} else {
if((state_val_36133 === (11))){
var inst_36109 = (state_36132[(7)]);
var inst_36119 = (state_36132[(2)]);
var state_36132__$1 = state_36132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36132__$1,(8),inst_36119,inst_36109);
} else {
if((state_val_36133 === (9))){
var state_36132__$1 = state_36132;
var statearr_36143_37412 = state_36132__$1;
(statearr_36143_37412[(2)] = tc);

(statearr_36143_37412[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36133 === (5))){
var inst_36112 = cljs.core.async.close_BANG_(tc);
var inst_36113 = cljs.core.async.close_BANG_(fc);
var state_36132__$1 = (function (){var statearr_36144 = state_36132;
(statearr_36144[(8)] = inst_36112);

return statearr_36144;
})();
var statearr_36145_37413 = state_36132__$1;
(statearr_36145_37413[(2)] = inst_36113);

(statearr_36145_37413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36133 === (14))){
var inst_36126 = (state_36132[(2)]);
var state_36132__$1 = state_36132;
var statearr_36146_37414 = state_36132__$1;
(statearr_36146_37414[(2)] = inst_36126);

(statearr_36146_37414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36133 === (10))){
var state_36132__$1 = state_36132;
var statearr_36147_37415 = state_36132__$1;
(statearr_36147_37415[(2)] = fc);

(statearr_36147_37415[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36133 === (8))){
var inst_36121 = (state_36132[(2)]);
var state_36132__$1 = state_36132;
if(cljs.core.truth_(inst_36121)){
var statearr_36148_37416 = state_36132__$1;
(statearr_36148_37416[(1)] = (12));

} else {
var statearr_36149_37417 = state_36132__$1;
(statearr_36149_37417[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35689__auto__ = null;
var cljs$core$async$state_machine__35689__auto____0 = (function (){
var statearr_36150 = [null,null,null,null,null,null,null,null,null];
(statearr_36150[(0)] = cljs$core$async$state_machine__35689__auto__);

(statearr_36150[(1)] = (1));

return statearr_36150;
});
var cljs$core$async$state_machine__35689__auto____1 = (function (state_36132){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_36132);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e36151){var ex__35692__auto__ = e36151;
var statearr_36152_37418 = state_36132;
(statearr_36152_37418[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_36132[(4)]))){
var statearr_36153_37419 = state_36132;
(statearr_36153_37419[(1)] = cljs.core.first((state_36132[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37420 = state_36132;
state_36132 = G__37420;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
cljs$core$async$state_machine__35689__auto__ = function(state_36132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35689__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35689__auto____1.call(this,state_36132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35689__auto____0;
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35689__auto____1;
return cljs$core$async$state_machine__35689__auto__;
})()
})();
var state__35783__auto__ = (function (){var statearr_36154 = f__35782__auto__();
(statearr_36154[(6)] = c__35781__auto___37401);

return statearr_36154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__35781__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = (function (state_36176){
var state_val_36177 = (state_36176[(1)]);
if((state_val_36177 === (7))){
var inst_36172 = (state_36176[(2)]);
var state_36176__$1 = state_36176;
var statearr_36178_37421 = state_36176__$1;
(statearr_36178_37421[(2)] = inst_36172);

(statearr_36178_37421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (1))){
var inst_36155 = init;
var inst_36156 = inst_36155;
var state_36176__$1 = (function (){var statearr_36179 = state_36176;
(statearr_36179[(7)] = inst_36156);

return statearr_36179;
})();
var statearr_36180_37422 = state_36176__$1;
(statearr_36180_37422[(2)] = null);

(statearr_36180_37422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (4))){
var inst_36159 = (state_36176[(8)]);
var inst_36159__$1 = (state_36176[(2)]);
var inst_36160 = (inst_36159__$1 == null);
var state_36176__$1 = (function (){var statearr_36181 = state_36176;
(statearr_36181[(8)] = inst_36159__$1);

return statearr_36181;
})();
if(cljs.core.truth_(inst_36160)){
var statearr_36182_37424 = state_36176__$1;
(statearr_36182_37424[(1)] = (5));

} else {
var statearr_36183_37425 = state_36176__$1;
(statearr_36183_37425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (6))){
var inst_36156 = (state_36176[(7)]);
var inst_36159 = (state_36176[(8)]);
var inst_36163 = (state_36176[(9)]);
var inst_36163__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36156,inst_36159) : f.call(null,inst_36156,inst_36159));
var inst_36164 = cljs.core.reduced_QMARK_(inst_36163__$1);
var state_36176__$1 = (function (){var statearr_36184 = state_36176;
(statearr_36184[(9)] = inst_36163__$1);

return statearr_36184;
})();
if(inst_36164){
var statearr_36185_37426 = state_36176__$1;
(statearr_36185_37426[(1)] = (8));

} else {
var statearr_36186_37427 = state_36176__$1;
(statearr_36186_37427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (3))){
var inst_36174 = (state_36176[(2)]);
var state_36176__$1 = state_36176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36176__$1,inst_36174);
} else {
if((state_val_36177 === (2))){
var state_36176__$1 = state_36176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36176__$1,(4),ch);
} else {
if((state_val_36177 === (9))){
var inst_36163 = (state_36176[(9)]);
var inst_36156 = inst_36163;
var state_36176__$1 = (function (){var statearr_36187 = state_36176;
(statearr_36187[(7)] = inst_36156);

return statearr_36187;
})();
var statearr_36188_37428 = state_36176__$1;
(statearr_36188_37428[(2)] = null);

(statearr_36188_37428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (5))){
var inst_36156 = (state_36176[(7)]);
var state_36176__$1 = state_36176;
var statearr_36189_37429 = state_36176__$1;
(statearr_36189_37429[(2)] = inst_36156);

(statearr_36189_37429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (10))){
var inst_36170 = (state_36176[(2)]);
var state_36176__$1 = state_36176;
var statearr_36190_37430 = state_36176__$1;
(statearr_36190_37430[(2)] = inst_36170);

(statearr_36190_37430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (8))){
var inst_36163 = (state_36176[(9)]);
var inst_36166 = cljs.core.deref(inst_36163);
var state_36176__$1 = state_36176;
var statearr_36191_37431 = state_36176__$1;
(statearr_36191_37431[(2)] = inst_36166);

(statearr_36191_37431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__35689__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35689__auto____0 = (function (){
var statearr_36192 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36192[(0)] = cljs$core$async$reduce_$_state_machine__35689__auto__);

(statearr_36192[(1)] = (1));

return statearr_36192;
});
var cljs$core$async$reduce_$_state_machine__35689__auto____1 = (function (state_36176){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_36176);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e36193){var ex__35692__auto__ = e36193;
var statearr_36194_37432 = state_36176;
(statearr_36194_37432[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_36176[(4)]))){
var statearr_36195_37437 = state_36176;
(statearr_36195_37437[(1)] = cljs.core.first((state_36176[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37438 = state_36176;
state_36176 = G__37438;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35689__auto__ = function(state_36176){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35689__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35689__auto____1.call(this,state_36176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35689__auto____0;
cljs$core$async$reduce_$_state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35689__auto____1;
return cljs$core$async$reduce_$_state_machine__35689__auto__;
})()
})();
var state__35783__auto__ = (function (){var statearr_36196 = f__35782__auto__();
(statearr_36196[(6)] = c__35781__auto__);

return statearr_36196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
}));

return c__35781__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__35781__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = (function (state_36202){
var state_val_36203 = (state_36202[(1)]);
if((state_val_36203 === (1))){
var inst_36197 = cljs.core.async.reduce(f__$1,init,ch);
var state_36202__$1 = state_36202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36202__$1,(2),inst_36197);
} else {
if((state_val_36203 === (2))){
var inst_36199 = (state_36202[(2)]);
var inst_36200 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_36199) : f__$1.call(null,inst_36199));
var state_36202__$1 = state_36202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36202__$1,inst_36200);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__35689__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35689__auto____0 = (function (){
var statearr_36204 = [null,null,null,null,null,null,null];
(statearr_36204[(0)] = cljs$core$async$transduce_$_state_machine__35689__auto__);

(statearr_36204[(1)] = (1));

return statearr_36204;
});
var cljs$core$async$transduce_$_state_machine__35689__auto____1 = (function (state_36202){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_36202);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e36205){var ex__35692__auto__ = e36205;
var statearr_36206_37439 = state_36202;
(statearr_36206_37439[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_36202[(4)]))){
var statearr_36207_37440 = state_36202;
(statearr_36207_37440[(1)] = cljs.core.first((state_36202[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37441 = state_36202;
state_36202 = G__37441;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35689__auto__ = function(state_36202){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35689__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35689__auto____1.call(this,state_36202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35689__auto____0;
cljs$core$async$transduce_$_state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35689__auto____1;
return cljs$core$async$transduce_$_state_machine__35689__auto__;
})()
})();
var state__35783__auto__ = (function (){var statearr_36208 = f__35782__auto__();
(statearr_36208[(6)] = c__35781__auto__);

return statearr_36208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
}));

return c__35781__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__36210 = arguments.length;
switch (G__36210) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35781__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = (function (state_36235){
var state_val_36236 = (state_36235[(1)]);
if((state_val_36236 === (7))){
var inst_36217 = (state_36235[(2)]);
var state_36235__$1 = state_36235;
var statearr_36237_37443 = state_36235__$1;
(statearr_36237_37443[(2)] = inst_36217);

(statearr_36237_37443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (1))){
var inst_36211 = cljs.core.seq(coll);
var inst_36212 = inst_36211;
var state_36235__$1 = (function (){var statearr_36238 = state_36235;
(statearr_36238[(7)] = inst_36212);

return statearr_36238;
})();
var statearr_36239_37444 = state_36235__$1;
(statearr_36239_37444[(2)] = null);

(statearr_36239_37444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (4))){
var inst_36212 = (state_36235[(7)]);
var inst_36215 = cljs.core.first(inst_36212);
var state_36235__$1 = state_36235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36235__$1,(7),ch,inst_36215);
} else {
if((state_val_36236 === (13))){
var inst_36229 = (state_36235[(2)]);
var state_36235__$1 = state_36235;
var statearr_36240_37445 = state_36235__$1;
(statearr_36240_37445[(2)] = inst_36229);

(statearr_36240_37445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (6))){
var inst_36220 = (state_36235[(2)]);
var state_36235__$1 = state_36235;
if(cljs.core.truth_(inst_36220)){
var statearr_36241_37446 = state_36235__$1;
(statearr_36241_37446[(1)] = (8));

} else {
var statearr_36242_37447 = state_36235__$1;
(statearr_36242_37447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (3))){
var inst_36233 = (state_36235[(2)]);
var state_36235__$1 = state_36235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36235__$1,inst_36233);
} else {
if((state_val_36236 === (12))){
var state_36235__$1 = state_36235;
var statearr_36243_37448 = state_36235__$1;
(statearr_36243_37448[(2)] = null);

(statearr_36243_37448[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (2))){
var inst_36212 = (state_36235[(7)]);
var state_36235__$1 = state_36235;
if(cljs.core.truth_(inst_36212)){
var statearr_36244_37449 = state_36235__$1;
(statearr_36244_37449[(1)] = (4));

} else {
var statearr_36245_37450 = state_36235__$1;
(statearr_36245_37450[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (11))){
var inst_36226 = cljs.core.async.close_BANG_(ch);
var state_36235__$1 = state_36235;
var statearr_36246_37451 = state_36235__$1;
(statearr_36246_37451[(2)] = inst_36226);

(statearr_36246_37451[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (9))){
var state_36235__$1 = state_36235;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36247_37452 = state_36235__$1;
(statearr_36247_37452[(1)] = (11));

} else {
var statearr_36248_37453 = state_36235__$1;
(statearr_36248_37453[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (5))){
var inst_36212 = (state_36235[(7)]);
var state_36235__$1 = state_36235;
var statearr_36249_37456 = state_36235__$1;
(statearr_36249_37456[(2)] = inst_36212);

(statearr_36249_37456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (10))){
var inst_36231 = (state_36235[(2)]);
var state_36235__$1 = state_36235;
var statearr_36250_37457 = state_36235__$1;
(statearr_36250_37457[(2)] = inst_36231);

(statearr_36250_37457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (8))){
var inst_36212 = (state_36235[(7)]);
var inst_36222 = cljs.core.next(inst_36212);
var inst_36212__$1 = inst_36222;
var state_36235__$1 = (function (){var statearr_36251 = state_36235;
(statearr_36251[(7)] = inst_36212__$1);

return statearr_36251;
})();
var statearr_36252_37458 = state_36235__$1;
(statearr_36252_37458[(2)] = null);

(statearr_36252_37458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35689__auto__ = null;
var cljs$core$async$state_machine__35689__auto____0 = (function (){
var statearr_36253 = [null,null,null,null,null,null,null,null];
(statearr_36253[(0)] = cljs$core$async$state_machine__35689__auto__);

(statearr_36253[(1)] = (1));

return statearr_36253;
});
var cljs$core$async$state_machine__35689__auto____1 = (function (state_36235){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_36235);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e36254){var ex__35692__auto__ = e36254;
var statearr_36255_37459 = state_36235;
(statearr_36255_37459[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_36235[(4)]))){
var statearr_36256_37460 = state_36235;
(statearr_36256_37460[(1)] = cljs.core.first((state_36235[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37461 = state_36235;
state_36235 = G__37461;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
cljs$core$async$state_machine__35689__auto__ = function(state_36235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35689__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35689__auto____1.call(this,state_36235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35689__auto____0;
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35689__auto____1;
return cljs$core$async$state_machine__35689__auto__;
})()
})();
var state__35783__auto__ = (function (){var statearr_36257 = f__35782__auto__();
(statearr_36257[(6)] = c__35781__auto__);

return statearr_36257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
}));

return c__35781__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__36259 = arguments.length;
switch (G__36259) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_37470 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_37470(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37474 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_37474(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37478 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_37478(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37489 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_37489(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36260 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36260 = (function (ch,cs,meta36261){
this.ch = ch;
this.cs = cs;
this.meta36261 = meta36261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36262,meta36261__$1){
var self__ = this;
var _36262__$1 = this;
return (new cljs.core.async.t_cljs$core$async36260(self__.ch,self__.cs,meta36261__$1));
}));

(cljs.core.async.t_cljs$core$async36260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36262){
var self__ = this;
var _36262__$1 = this;
return self__.meta36261;
}));

(cljs.core.async.t_cljs$core$async36260.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36260.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36260.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36260.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async36260.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async36260.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async36260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36261","meta36261",-981723740,null)], null);
}));

(cljs.core.async.t_cljs$core$async36260.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36260");

(cljs.core.async.t_cljs$core$async36260.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async36260");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36260.
 */
cljs.core.async.__GT_t_cljs$core$async36260 = (function cljs$core$async$mult_$___GT_t_cljs$core$async36260(ch__$1,cs__$1,meta36261){
return (new cljs.core.async.t_cljs$core$async36260(ch__$1,cs__$1,meta36261));
});

}

return (new cljs.core.async.t_cljs$core$async36260(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__35781__auto___37496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = (function (state_36395){
var state_val_36396 = (state_36395[(1)]);
if((state_val_36396 === (7))){
var inst_36391 = (state_36395[(2)]);
var state_36395__$1 = state_36395;
var statearr_36397_37497 = state_36395__$1;
(statearr_36397_37497[(2)] = inst_36391);

(statearr_36397_37497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (20))){
var inst_36296 = (state_36395[(7)]);
var inst_36308 = cljs.core.first(inst_36296);
var inst_36309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36308,(0),null);
var inst_36310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36308,(1),null);
var state_36395__$1 = (function (){var statearr_36398 = state_36395;
(statearr_36398[(8)] = inst_36309);

return statearr_36398;
})();
if(cljs.core.truth_(inst_36310)){
var statearr_36399_37498 = state_36395__$1;
(statearr_36399_37498[(1)] = (22));

} else {
var statearr_36400_37499 = state_36395__$1;
(statearr_36400_37499[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (27))){
var inst_36345 = (state_36395[(9)]);
var inst_36265 = (state_36395[(10)]);
var inst_36340 = (state_36395[(11)]);
var inst_36338 = (state_36395[(12)]);
var inst_36345__$1 = cljs.core._nth(inst_36338,inst_36340);
var inst_36346 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36345__$1,inst_36265,done);
var state_36395__$1 = (function (){var statearr_36401 = state_36395;
(statearr_36401[(9)] = inst_36345__$1);

return statearr_36401;
})();
if(cljs.core.truth_(inst_36346)){
var statearr_36402_37503 = state_36395__$1;
(statearr_36402_37503[(1)] = (30));

} else {
var statearr_36403_37504 = state_36395__$1;
(statearr_36403_37504[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (1))){
var state_36395__$1 = state_36395;
var statearr_36404_37505 = state_36395__$1;
(statearr_36404_37505[(2)] = null);

(statearr_36404_37505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (24))){
var inst_36296 = (state_36395[(7)]);
var inst_36315 = (state_36395[(2)]);
var inst_36316 = cljs.core.next(inst_36296);
var inst_36274 = inst_36316;
var inst_36275 = null;
var inst_36276 = (0);
var inst_36277 = (0);
var state_36395__$1 = (function (){var statearr_36405 = state_36395;
(statearr_36405[(13)] = inst_36277);

(statearr_36405[(14)] = inst_36275);

(statearr_36405[(15)] = inst_36274);

(statearr_36405[(16)] = inst_36276);

(statearr_36405[(17)] = inst_36315);

return statearr_36405;
})();
var statearr_36406_37506 = state_36395__$1;
(statearr_36406_37506[(2)] = null);

(statearr_36406_37506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (39))){
var state_36395__$1 = state_36395;
var statearr_36410_37507 = state_36395__$1;
(statearr_36410_37507[(2)] = null);

(statearr_36410_37507[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (4))){
var inst_36265 = (state_36395[(10)]);
var inst_36265__$1 = (state_36395[(2)]);
var inst_36266 = (inst_36265__$1 == null);
var state_36395__$1 = (function (){var statearr_36411 = state_36395;
(statearr_36411[(10)] = inst_36265__$1);

return statearr_36411;
})();
if(cljs.core.truth_(inst_36266)){
var statearr_36412_37508 = state_36395__$1;
(statearr_36412_37508[(1)] = (5));

} else {
var statearr_36413_37509 = state_36395__$1;
(statearr_36413_37509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (15))){
var inst_36277 = (state_36395[(13)]);
var inst_36275 = (state_36395[(14)]);
var inst_36274 = (state_36395[(15)]);
var inst_36276 = (state_36395[(16)]);
var inst_36292 = (state_36395[(2)]);
var inst_36293 = (inst_36277 + (1));
var tmp36407 = inst_36275;
var tmp36408 = inst_36274;
var tmp36409 = inst_36276;
var inst_36274__$1 = tmp36408;
var inst_36275__$1 = tmp36407;
var inst_36276__$1 = tmp36409;
var inst_36277__$1 = inst_36293;
var state_36395__$1 = (function (){var statearr_36414 = state_36395;
(statearr_36414[(13)] = inst_36277__$1);

(statearr_36414[(14)] = inst_36275__$1);

(statearr_36414[(15)] = inst_36274__$1);

(statearr_36414[(16)] = inst_36276__$1);

(statearr_36414[(18)] = inst_36292);

return statearr_36414;
})();
var statearr_36415_37511 = state_36395__$1;
(statearr_36415_37511[(2)] = null);

(statearr_36415_37511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (21))){
var inst_36319 = (state_36395[(2)]);
var state_36395__$1 = state_36395;
var statearr_36419_37512 = state_36395__$1;
(statearr_36419_37512[(2)] = inst_36319);

(statearr_36419_37512[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (31))){
var inst_36345 = (state_36395[(9)]);
var inst_36349 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36345);
var state_36395__$1 = state_36395;
var statearr_36420_37513 = state_36395__$1;
(statearr_36420_37513[(2)] = inst_36349);

(statearr_36420_37513[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (32))){
var inst_36339 = (state_36395[(19)]);
var inst_36337 = (state_36395[(20)]);
var inst_36340 = (state_36395[(11)]);
var inst_36338 = (state_36395[(12)]);
var inst_36351 = (state_36395[(2)]);
var inst_36352 = (inst_36340 + (1));
var tmp36416 = inst_36339;
var tmp36417 = inst_36337;
var tmp36418 = inst_36338;
var inst_36337__$1 = tmp36417;
var inst_36338__$1 = tmp36418;
var inst_36339__$1 = tmp36416;
var inst_36340__$1 = inst_36352;
var state_36395__$1 = (function (){var statearr_36421 = state_36395;
(statearr_36421[(19)] = inst_36339__$1);

(statearr_36421[(20)] = inst_36337__$1);

(statearr_36421[(11)] = inst_36340__$1);

(statearr_36421[(21)] = inst_36351);

(statearr_36421[(12)] = inst_36338__$1);

return statearr_36421;
})();
var statearr_36422_37514 = state_36395__$1;
(statearr_36422_37514[(2)] = null);

(statearr_36422_37514[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (40))){
var inst_36364 = (state_36395[(22)]);
var inst_36368 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36364);
var state_36395__$1 = state_36395;
var statearr_36423_37515 = state_36395__$1;
(statearr_36423_37515[(2)] = inst_36368);

(statearr_36423_37515[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (33))){
var inst_36355 = (state_36395[(23)]);
var inst_36357 = cljs.core.chunked_seq_QMARK_(inst_36355);
var state_36395__$1 = state_36395;
if(inst_36357){
var statearr_36424_37516 = state_36395__$1;
(statearr_36424_37516[(1)] = (36));

} else {
var statearr_36425_37517 = state_36395__$1;
(statearr_36425_37517[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (13))){
var inst_36286 = (state_36395[(24)]);
var inst_36289 = cljs.core.async.close_BANG_(inst_36286);
var state_36395__$1 = state_36395;
var statearr_36426_37518 = state_36395__$1;
(statearr_36426_37518[(2)] = inst_36289);

(statearr_36426_37518[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (22))){
var inst_36309 = (state_36395[(8)]);
var inst_36312 = cljs.core.async.close_BANG_(inst_36309);
var state_36395__$1 = state_36395;
var statearr_36427_37519 = state_36395__$1;
(statearr_36427_37519[(2)] = inst_36312);

(statearr_36427_37519[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (36))){
var inst_36355 = (state_36395[(23)]);
var inst_36359 = cljs.core.chunk_first(inst_36355);
var inst_36360 = cljs.core.chunk_rest(inst_36355);
var inst_36361 = cljs.core.count(inst_36359);
var inst_36337 = inst_36360;
var inst_36338 = inst_36359;
var inst_36339 = inst_36361;
var inst_36340 = (0);
var state_36395__$1 = (function (){var statearr_36428 = state_36395;
(statearr_36428[(19)] = inst_36339);

(statearr_36428[(20)] = inst_36337);

(statearr_36428[(11)] = inst_36340);

(statearr_36428[(12)] = inst_36338);

return statearr_36428;
})();
var statearr_36429_37520 = state_36395__$1;
(statearr_36429_37520[(2)] = null);

(statearr_36429_37520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (41))){
var inst_36355 = (state_36395[(23)]);
var inst_36370 = (state_36395[(2)]);
var inst_36371 = cljs.core.next(inst_36355);
var inst_36337 = inst_36371;
var inst_36338 = null;
var inst_36339 = (0);
var inst_36340 = (0);
var state_36395__$1 = (function (){var statearr_36430 = state_36395;
(statearr_36430[(19)] = inst_36339);

(statearr_36430[(20)] = inst_36337);

(statearr_36430[(11)] = inst_36340);

(statearr_36430[(25)] = inst_36370);

(statearr_36430[(12)] = inst_36338);

return statearr_36430;
})();
var statearr_36431_37521 = state_36395__$1;
(statearr_36431_37521[(2)] = null);

(statearr_36431_37521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (43))){
var state_36395__$1 = state_36395;
var statearr_36432_37522 = state_36395__$1;
(statearr_36432_37522[(2)] = null);

(statearr_36432_37522[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (29))){
var inst_36379 = (state_36395[(2)]);
var state_36395__$1 = state_36395;
var statearr_36433_37523 = state_36395__$1;
(statearr_36433_37523[(2)] = inst_36379);

(statearr_36433_37523[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (44))){
var inst_36388 = (state_36395[(2)]);
var state_36395__$1 = (function (){var statearr_36434 = state_36395;
(statearr_36434[(26)] = inst_36388);

return statearr_36434;
})();
var statearr_36435_37524 = state_36395__$1;
(statearr_36435_37524[(2)] = null);

(statearr_36435_37524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (6))){
var inst_36329 = (state_36395[(27)]);
var inst_36328 = cljs.core.deref(cs);
var inst_36329__$1 = cljs.core.keys(inst_36328);
var inst_36330 = cljs.core.count(inst_36329__$1);
var inst_36331 = cljs.core.reset_BANG_(dctr,inst_36330);
var inst_36336 = cljs.core.seq(inst_36329__$1);
var inst_36337 = inst_36336;
var inst_36338 = null;
var inst_36339 = (0);
var inst_36340 = (0);
var state_36395__$1 = (function (){var statearr_36436 = state_36395;
(statearr_36436[(19)] = inst_36339);

(statearr_36436[(20)] = inst_36337);

(statearr_36436[(27)] = inst_36329__$1);

(statearr_36436[(28)] = inst_36331);

(statearr_36436[(11)] = inst_36340);

(statearr_36436[(12)] = inst_36338);

return statearr_36436;
})();
var statearr_36437_37525 = state_36395__$1;
(statearr_36437_37525[(2)] = null);

(statearr_36437_37525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (28))){
var inst_36337 = (state_36395[(20)]);
var inst_36355 = (state_36395[(23)]);
var inst_36355__$1 = cljs.core.seq(inst_36337);
var state_36395__$1 = (function (){var statearr_36438 = state_36395;
(statearr_36438[(23)] = inst_36355__$1);

return statearr_36438;
})();
if(inst_36355__$1){
var statearr_36439_37526 = state_36395__$1;
(statearr_36439_37526[(1)] = (33));

} else {
var statearr_36440_37527 = state_36395__$1;
(statearr_36440_37527[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (25))){
var inst_36339 = (state_36395[(19)]);
var inst_36340 = (state_36395[(11)]);
var inst_36342 = (inst_36340 < inst_36339);
var inst_36343 = inst_36342;
var state_36395__$1 = state_36395;
if(cljs.core.truth_(inst_36343)){
var statearr_36441_37528 = state_36395__$1;
(statearr_36441_37528[(1)] = (27));

} else {
var statearr_36442_37529 = state_36395__$1;
(statearr_36442_37529[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (34))){
var state_36395__$1 = state_36395;
var statearr_36443_37530 = state_36395__$1;
(statearr_36443_37530[(2)] = null);

(statearr_36443_37530[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (17))){
var state_36395__$1 = state_36395;
var statearr_36444_37531 = state_36395__$1;
(statearr_36444_37531[(2)] = null);

(statearr_36444_37531[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (3))){
var inst_36393 = (state_36395[(2)]);
var state_36395__$1 = state_36395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36395__$1,inst_36393);
} else {
if((state_val_36396 === (12))){
var inst_36324 = (state_36395[(2)]);
var state_36395__$1 = state_36395;
var statearr_36445_37532 = state_36395__$1;
(statearr_36445_37532[(2)] = inst_36324);

(statearr_36445_37532[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (2))){
var state_36395__$1 = state_36395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36395__$1,(4),ch);
} else {
if((state_val_36396 === (23))){
var state_36395__$1 = state_36395;
var statearr_36446_37533 = state_36395__$1;
(statearr_36446_37533[(2)] = null);

(statearr_36446_37533[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (35))){
var inst_36377 = (state_36395[(2)]);
var state_36395__$1 = state_36395;
var statearr_36447_37534 = state_36395__$1;
(statearr_36447_37534[(2)] = inst_36377);

(statearr_36447_37534[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (19))){
var inst_36296 = (state_36395[(7)]);
var inst_36300 = cljs.core.chunk_first(inst_36296);
var inst_36301 = cljs.core.chunk_rest(inst_36296);
var inst_36302 = cljs.core.count(inst_36300);
var inst_36274 = inst_36301;
var inst_36275 = inst_36300;
var inst_36276 = inst_36302;
var inst_36277 = (0);
var state_36395__$1 = (function (){var statearr_36448 = state_36395;
(statearr_36448[(13)] = inst_36277);

(statearr_36448[(14)] = inst_36275);

(statearr_36448[(15)] = inst_36274);

(statearr_36448[(16)] = inst_36276);

return statearr_36448;
})();
var statearr_36449_37535 = state_36395__$1;
(statearr_36449_37535[(2)] = null);

(statearr_36449_37535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (11))){
var inst_36274 = (state_36395[(15)]);
var inst_36296 = (state_36395[(7)]);
var inst_36296__$1 = cljs.core.seq(inst_36274);
var state_36395__$1 = (function (){var statearr_36450 = state_36395;
(statearr_36450[(7)] = inst_36296__$1);

return statearr_36450;
})();
if(inst_36296__$1){
var statearr_36451_37536 = state_36395__$1;
(statearr_36451_37536[(1)] = (16));

} else {
var statearr_36452_37537 = state_36395__$1;
(statearr_36452_37537[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (9))){
var inst_36326 = (state_36395[(2)]);
var state_36395__$1 = state_36395;
var statearr_36453_37540 = state_36395__$1;
(statearr_36453_37540[(2)] = inst_36326);

(statearr_36453_37540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (5))){
var inst_36272 = cljs.core.deref(cs);
var inst_36273 = cljs.core.seq(inst_36272);
var inst_36274 = inst_36273;
var inst_36275 = null;
var inst_36276 = (0);
var inst_36277 = (0);
var state_36395__$1 = (function (){var statearr_36454 = state_36395;
(statearr_36454[(13)] = inst_36277);

(statearr_36454[(14)] = inst_36275);

(statearr_36454[(15)] = inst_36274);

(statearr_36454[(16)] = inst_36276);

return statearr_36454;
})();
var statearr_36455_37544 = state_36395__$1;
(statearr_36455_37544[(2)] = null);

(statearr_36455_37544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (14))){
var state_36395__$1 = state_36395;
var statearr_36456_37545 = state_36395__$1;
(statearr_36456_37545[(2)] = null);

(statearr_36456_37545[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (45))){
var inst_36385 = (state_36395[(2)]);
var state_36395__$1 = state_36395;
var statearr_36457_37546 = state_36395__$1;
(statearr_36457_37546[(2)] = inst_36385);

(statearr_36457_37546[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (26))){
var inst_36329 = (state_36395[(27)]);
var inst_36381 = (state_36395[(2)]);
var inst_36382 = cljs.core.seq(inst_36329);
var state_36395__$1 = (function (){var statearr_36458 = state_36395;
(statearr_36458[(29)] = inst_36381);

return statearr_36458;
})();
if(inst_36382){
var statearr_36459_37548 = state_36395__$1;
(statearr_36459_37548[(1)] = (42));

} else {
var statearr_36460_37549 = state_36395__$1;
(statearr_36460_37549[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (16))){
var inst_36296 = (state_36395[(7)]);
var inst_36298 = cljs.core.chunked_seq_QMARK_(inst_36296);
var state_36395__$1 = state_36395;
if(inst_36298){
var statearr_36461_37550 = state_36395__$1;
(statearr_36461_37550[(1)] = (19));

} else {
var statearr_36462_37551 = state_36395__$1;
(statearr_36462_37551[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (38))){
var inst_36374 = (state_36395[(2)]);
var state_36395__$1 = state_36395;
var statearr_36463_37552 = state_36395__$1;
(statearr_36463_37552[(2)] = inst_36374);

(statearr_36463_37552[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (30))){
var state_36395__$1 = state_36395;
var statearr_36464_37554 = state_36395__$1;
(statearr_36464_37554[(2)] = null);

(statearr_36464_37554[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (10))){
var inst_36277 = (state_36395[(13)]);
var inst_36275 = (state_36395[(14)]);
var inst_36285 = cljs.core._nth(inst_36275,inst_36277);
var inst_36286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36285,(0),null);
var inst_36287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36285,(1),null);
var state_36395__$1 = (function (){var statearr_36465 = state_36395;
(statearr_36465[(24)] = inst_36286);

return statearr_36465;
})();
if(cljs.core.truth_(inst_36287)){
var statearr_36466_37556 = state_36395__$1;
(statearr_36466_37556[(1)] = (13));

} else {
var statearr_36467_37557 = state_36395__$1;
(statearr_36467_37557[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (18))){
var inst_36322 = (state_36395[(2)]);
var state_36395__$1 = state_36395;
var statearr_36468_37558 = state_36395__$1;
(statearr_36468_37558[(2)] = inst_36322);

(statearr_36468_37558[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (42))){
var state_36395__$1 = state_36395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36395__$1,(45),dchan);
} else {
if((state_val_36396 === (37))){
var inst_36265 = (state_36395[(10)]);
var inst_36364 = (state_36395[(22)]);
var inst_36355 = (state_36395[(23)]);
var inst_36364__$1 = cljs.core.first(inst_36355);
var inst_36365 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36364__$1,inst_36265,done);
var state_36395__$1 = (function (){var statearr_36469 = state_36395;
(statearr_36469[(22)] = inst_36364__$1);

return statearr_36469;
})();
if(cljs.core.truth_(inst_36365)){
var statearr_36470_37559 = state_36395__$1;
(statearr_36470_37559[(1)] = (39));

} else {
var statearr_36471_37560 = state_36395__$1;
(statearr_36471_37560[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36396 === (8))){
var inst_36277 = (state_36395[(13)]);
var inst_36276 = (state_36395[(16)]);
var inst_36279 = (inst_36277 < inst_36276);
var inst_36280 = inst_36279;
var state_36395__$1 = state_36395;
if(cljs.core.truth_(inst_36280)){
var statearr_36472_37561 = state_36395__$1;
(statearr_36472_37561[(1)] = (10));

} else {
var statearr_36473_37562 = state_36395__$1;
(statearr_36473_37562[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__35689__auto__ = null;
var cljs$core$async$mult_$_state_machine__35689__auto____0 = (function (){
var statearr_36474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36474[(0)] = cljs$core$async$mult_$_state_machine__35689__auto__);

(statearr_36474[(1)] = (1));

return statearr_36474;
});
var cljs$core$async$mult_$_state_machine__35689__auto____1 = (function (state_36395){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_36395);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e36475){var ex__35692__auto__ = e36475;
var statearr_36476_37563 = state_36395;
(statearr_36476_37563[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_36395[(4)]))){
var statearr_36477_37564 = state_36395;
(statearr_36477_37564[(1)] = cljs.core.first((state_36395[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37565 = state_36395;
state_36395 = G__37565;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35689__auto__ = function(state_36395){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35689__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35689__auto____1.call(this,state_36395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35689__auto____0;
cljs$core$async$mult_$_state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35689__auto____1;
return cljs$core$async$mult_$_state_machine__35689__auto__;
})()
})();
var state__35783__auto__ = (function (){var statearr_36478 = f__35782__auto__();
(statearr_36478[(6)] = c__35781__auto___37496);

return statearr_36478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__36480 = arguments.length;
switch (G__36480) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_37571 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_37571(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_37576 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_37576(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_37577 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_37577(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_37585 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_37585(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_37592 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_37592(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___37593 = arguments.length;
var i__4830__auto___37594 = (0);
while(true){
if((i__4830__auto___37594 < len__4829__auto___37593)){
args__4835__auto__.push((arguments[i__4830__auto___37594]));

var G__37595 = (i__4830__auto___37594 + (1));
i__4830__auto___37594 = G__37595;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36485){
var map__36486 = p__36485;
var map__36486__$1 = cljs.core.__destructure_map(map__36486);
var opts = map__36486__$1;
var statearr_36487_37596 = state;
(statearr_36487_37596[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_36488_37597 = state;
(statearr_36488_37597[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_36489_37598 = state;
(statearr_36489_37598[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36481){
var G__36482 = cljs.core.first(seq36481);
var seq36481__$1 = cljs.core.next(seq36481);
var G__36483 = cljs.core.first(seq36481__$1);
var seq36481__$2 = cljs.core.next(seq36481__$1);
var G__36484 = cljs.core.first(seq36481__$2);
var seq36481__$3 = cljs.core.next(seq36481__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36482,G__36483,G__36484,seq36481__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36490 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36490 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36491){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36491 = meta36491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36492,meta36491__$1){
var self__ = this;
var _36492__$1 = this;
return (new cljs.core.async.t_cljs$core$async36490(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36491__$1));
}));

(cljs.core.async.t_cljs$core$async36490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36492){
var self__ = this;
var _36492__$1 = this;
return self__.meta36491;
}));

(cljs.core.async.t_cljs$core$async36490.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36490.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async36490.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36490.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36490.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36490.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36490.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36490.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36490.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36491","meta36491",1831441640,null)], null);
}));

(cljs.core.async.t_cljs$core$async36490.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36490");

(cljs.core.async.t_cljs$core$async36490.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async36490");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36490.
 */
cljs.core.async.__GT_t_cljs$core$async36490 = (function cljs$core$async$mix_$___GT_t_cljs$core$async36490(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36491){
return (new cljs.core.async.t_cljs$core$async36490(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36491));
});

}

return (new cljs.core.async.t_cljs$core$async36490(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35781__auto___37605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = (function (state_36560){
var state_val_36561 = (state_36560[(1)]);
if((state_val_36561 === (7))){
var inst_36520 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
if(cljs.core.truth_(inst_36520)){
var statearr_36562_37606 = state_36560__$1;
(statearr_36562_37606[(1)] = (8));

} else {
var statearr_36563_37607 = state_36560__$1;
(statearr_36563_37607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (20))){
var inst_36513 = (state_36560[(7)]);
var state_36560__$1 = state_36560;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36560__$1,(23),out,inst_36513);
} else {
if((state_val_36561 === (1))){
var inst_36496 = calc_state();
var inst_36497 = cljs.core.__destructure_map(inst_36496);
var inst_36498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36497,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36497,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36497,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36501 = inst_36496;
var state_36560__$1 = (function (){var statearr_36564 = state_36560;
(statearr_36564[(8)] = inst_36499);

(statearr_36564[(9)] = inst_36501);

(statearr_36564[(10)] = inst_36500);

(statearr_36564[(11)] = inst_36498);

return statearr_36564;
})();
var statearr_36565_37608 = state_36560__$1;
(statearr_36565_37608[(2)] = null);

(statearr_36565_37608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (24))){
var inst_36504 = (state_36560[(12)]);
var inst_36501 = inst_36504;
var state_36560__$1 = (function (){var statearr_36566 = state_36560;
(statearr_36566[(9)] = inst_36501);

return statearr_36566;
})();
var statearr_36567_37609 = state_36560__$1;
(statearr_36567_37609[(2)] = null);

(statearr_36567_37609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (4))){
var inst_36515 = (state_36560[(13)]);
var inst_36513 = (state_36560[(7)]);
var inst_36512 = (state_36560[(2)]);
var inst_36513__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36512,(0),null);
var inst_36514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36512,(1),null);
var inst_36515__$1 = (inst_36513__$1 == null);
var state_36560__$1 = (function (){var statearr_36568 = state_36560;
(statearr_36568[(13)] = inst_36515__$1);

(statearr_36568[(14)] = inst_36514);

(statearr_36568[(7)] = inst_36513__$1);

return statearr_36568;
})();
if(cljs.core.truth_(inst_36515__$1)){
var statearr_36569_37610 = state_36560__$1;
(statearr_36569_37610[(1)] = (5));

} else {
var statearr_36570_37611 = state_36560__$1;
(statearr_36570_37611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (15))){
var inst_36505 = (state_36560[(15)]);
var inst_36534 = (state_36560[(16)]);
var inst_36534__$1 = cljs.core.empty_QMARK_(inst_36505);
var state_36560__$1 = (function (){var statearr_36571 = state_36560;
(statearr_36571[(16)] = inst_36534__$1);

return statearr_36571;
})();
if(inst_36534__$1){
var statearr_36572_37618 = state_36560__$1;
(statearr_36572_37618[(1)] = (17));

} else {
var statearr_36573_37619 = state_36560__$1;
(statearr_36573_37619[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (21))){
var inst_36504 = (state_36560[(12)]);
var inst_36501 = inst_36504;
var state_36560__$1 = (function (){var statearr_36574 = state_36560;
(statearr_36574[(9)] = inst_36501);

return statearr_36574;
})();
var statearr_36575_37620 = state_36560__$1;
(statearr_36575_37620[(2)] = null);

(statearr_36575_37620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (13))){
var inst_36527 = (state_36560[(2)]);
var inst_36528 = calc_state();
var inst_36501 = inst_36528;
var state_36560__$1 = (function (){var statearr_36576 = state_36560;
(statearr_36576[(17)] = inst_36527);

(statearr_36576[(9)] = inst_36501);

return statearr_36576;
})();
var statearr_36577_37621 = state_36560__$1;
(statearr_36577_37621[(2)] = null);

(statearr_36577_37621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (22))){
var inst_36554 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
var statearr_36578_37622 = state_36560__$1;
(statearr_36578_37622[(2)] = inst_36554);

(statearr_36578_37622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (6))){
var inst_36514 = (state_36560[(14)]);
var inst_36518 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36514,change);
var state_36560__$1 = state_36560;
var statearr_36579_37623 = state_36560__$1;
(statearr_36579_37623[(2)] = inst_36518);

(statearr_36579_37623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (25))){
var state_36560__$1 = state_36560;
var statearr_36580_37624 = state_36560__$1;
(statearr_36580_37624[(2)] = null);

(statearr_36580_37624[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (17))){
var inst_36514 = (state_36560[(14)]);
var inst_36506 = (state_36560[(18)]);
var inst_36536 = (inst_36506.cljs$core$IFn$_invoke$arity$1 ? inst_36506.cljs$core$IFn$_invoke$arity$1(inst_36514) : inst_36506.call(null,inst_36514));
var inst_36537 = cljs.core.not(inst_36536);
var state_36560__$1 = state_36560;
var statearr_36581_37625 = state_36560__$1;
(statearr_36581_37625[(2)] = inst_36537);

(statearr_36581_37625[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (3))){
var inst_36558 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36560__$1,inst_36558);
} else {
if((state_val_36561 === (12))){
var state_36560__$1 = state_36560;
var statearr_36582_37626 = state_36560__$1;
(statearr_36582_37626[(2)] = null);

(statearr_36582_37626[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (2))){
var inst_36501 = (state_36560[(9)]);
var inst_36504 = (state_36560[(12)]);
var inst_36504__$1 = cljs.core.__destructure_map(inst_36501);
var inst_36505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36504__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36504__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36504__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36560__$1 = (function (){var statearr_36583 = state_36560;
(statearr_36583[(15)] = inst_36505);

(statearr_36583[(12)] = inst_36504__$1);

(statearr_36583[(18)] = inst_36506);

return statearr_36583;
})();
return cljs.core.async.ioc_alts_BANG_(state_36560__$1,(4),inst_36507);
} else {
if((state_val_36561 === (23))){
var inst_36545 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
if(cljs.core.truth_(inst_36545)){
var statearr_36584_37627 = state_36560__$1;
(statearr_36584_37627[(1)] = (24));

} else {
var statearr_36585_37628 = state_36560__$1;
(statearr_36585_37628[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (19))){
var inst_36540 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
var statearr_36586_37629 = state_36560__$1;
(statearr_36586_37629[(2)] = inst_36540);

(statearr_36586_37629[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (11))){
var inst_36514 = (state_36560[(14)]);
var inst_36524 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_36514);
var state_36560__$1 = state_36560;
var statearr_36587_37630 = state_36560__$1;
(statearr_36587_37630[(2)] = inst_36524);

(statearr_36587_37630[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (9))){
var inst_36505 = (state_36560[(15)]);
var inst_36514 = (state_36560[(14)]);
var inst_36531 = (state_36560[(19)]);
var inst_36531__$1 = (inst_36505.cljs$core$IFn$_invoke$arity$1 ? inst_36505.cljs$core$IFn$_invoke$arity$1(inst_36514) : inst_36505.call(null,inst_36514));
var state_36560__$1 = (function (){var statearr_36588 = state_36560;
(statearr_36588[(19)] = inst_36531__$1);

return statearr_36588;
})();
if(cljs.core.truth_(inst_36531__$1)){
var statearr_36589_37631 = state_36560__$1;
(statearr_36589_37631[(1)] = (14));

} else {
var statearr_36590_37632 = state_36560__$1;
(statearr_36590_37632[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (5))){
var inst_36515 = (state_36560[(13)]);
var state_36560__$1 = state_36560;
var statearr_36591_37633 = state_36560__$1;
(statearr_36591_37633[(2)] = inst_36515);

(statearr_36591_37633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (14))){
var inst_36531 = (state_36560[(19)]);
var state_36560__$1 = state_36560;
var statearr_36592_37634 = state_36560__$1;
(statearr_36592_37634[(2)] = inst_36531);

(statearr_36592_37634[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (26))){
var inst_36550 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
var statearr_36593_37635 = state_36560__$1;
(statearr_36593_37635[(2)] = inst_36550);

(statearr_36593_37635[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (16))){
var inst_36542 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
if(cljs.core.truth_(inst_36542)){
var statearr_36594_37642 = state_36560__$1;
(statearr_36594_37642[(1)] = (20));

} else {
var statearr_36595_37643 = state_36560__$1;
(statearr_36595_37643[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (10))){
var inst_36556 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
var statearr_36596_37644 = state_36560__$1;
(statearr_36596_37644[(2)] = inst_36556);

(statearr_36596_37644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (18))){
var inst_36534 = (state_36560[(16)]);
var state_36560__$1 = state_36560;
var statearr_36597_37645 = state_36560__$1;
(statearr_36597_37645[(2)] = inst_36534);

(statearr_36597_37645[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (8))){
var inst_36513 = (state_36560[(7)]);
var inst_36522 = (inst_36513 == null);
var state_36560__$1 = state_36560;
if(cljs.core.truth_(inst_36522)){
var statearr_36598_37646 = state_36560__$1;
(statearr_36598_37646[(1)] = (11));

} else {
var statearr_36599_37647 = state_36560__$1;
(statearr_36599_37647[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__35689__auto__ = null;
var cljs$core$async$mix_$_state_machine__35689__auto____0 = (function (){
var statearr_36600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36600[(0)] = cljs$core$async$mix_$_state_machine__35689__auto__);

(statearr_36600[(1)] = (1));

return statearr_36600;
});
var cljs$core$async$mix_$_state_machine__35689__auto____1 = (function (state_36560){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_36560);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e36601){var ex__35692__auto__ = e36601;
var statearr_36602_37648 = state_36560;
(statearr_36602_37648[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_36560[(4)]))){
var statearr_36603_37649 = state_36560;
(statearr_36603_37649[(1)] = cljs.core.first((state_36560[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37650 = state_36560;
state_36560 = G__37650;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35689__auto__ = function(state_36560){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35689__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35689__auto____1.call(this,state_36560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35689__auto____0;
cljs$core$async$mix_$_state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35689__auto____1;
return cljs$core$async$mix_$_state_machine__35689__auto__;
})()
})();
var state__35783__auto__ = (function (){var statearr_36604 = f__35782__auto__();
(statearr_36604[(6)] = c__35781__auto___37605);

return statearr_36604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_37651 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_37651(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37652 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_37652(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37653 = (function() {
var G__37654 = null;
var G__37654__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__37654__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__37654 = function(p,v){
switch(arguments.length){
case 1:
return G__37654__1.call(this,p);
case 2:
return G__37654__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37654.cljs$core$IFn$_invoke$arity$1 = G__37654__1;
G__37654.cljs$core$IFn$_invoke$arity$2 = G__37654__2;
return G__37654;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36606 = arguments.length;
switch (G__36606) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37653(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37653(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__36609 = arguments.length;
switch (G__36609) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__36607_SHARP_){
if(cljs.core.truth_((p1__36607_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36607_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__36607_SHARP_.call(null,topic)))){
return p1__36607_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36607_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36610 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36610 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36611){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36611 = meta36611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36612,meta36611__$1){
var self__ = this;
var _36612__$1 = this;
return (new cljs.core.async.t_cljs$core$async36610(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36611__$1));
}));

(cljs.core.async.t_cljs$core$async36610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36612){
var self__ = this;
var _36612__$1 = this;
return self__.meta36611;
}));

(cljs.core.async.t_cljs$core$async36610.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36610.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36610.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36610.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async36610.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async36610.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async36610.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async36610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36611","meta36611",940677664,null)], null);
}));

(cljs.core.async.t_cljs$core$async36610.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36610");

(cljs.core.async.t_cljs$core$async36610.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async36610");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36610.
 */
cljs.core.async.__GT_t_cljs$core$async36610 = (function cljs$core$async$__GT_t_cljs$core$async36610(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36611){
return (new cljs.core.async.t_cljs$core$async36610(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36611));
});

}

return (new cljs.core.async.t_cljs$core$async36610(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35781__auto___37662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = (function (state_36684){
var state_val_36685 = (state_36684[(1)]);
if((state_val_36685 === (7))){
var inst_36680 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36686_37663 = state_36684__$1;
(statearr_36686_37663[(2)] = inst_36680);

(statearr_36686_37663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (20))){
var state_36684__$1 = state_36684;
var statearr_36687_37664 = state_36684__$1;
(statearr_36687_37664[(2)] = null);

(statearr_36687_37664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (1))){
var state_36684__$1 = state_36684;
var statearr_36688_37665 = state_36684__$1;
(statearr_36688_37665[(2)] = null);

(statearr_36688_37665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (24))){
var inst_36663 = (state_36684[(7)]);
var inst_36672 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_36663);
var state_36684__$1 = state_36684;
var statearr_36689_37666 = state_36684__$1;
(statearr_36689_37666[(2)] = inst_36672);

(statearr_36689_37666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (4))){
var inst_36615 = (state_36684[(8)]);
var inst_36615__$1 = (state_36684[(2)]);
var inst_36616 = (inst_36615__$1 == null);
var state_36684__$1 = (function (){var statearr_36690 = state_36684;
(statearr_36690[(8)] = inst_36615__$1);

return statearr_36690;
})();
if(cljs.core.truth_(inst_36616)){
var statearr_36691_37667 = state_36684__$1;
(statearr_36691_37667[(1)] = (5));

} else {
var statearr_36692_37668 = state_36684__$1;
(statearr_36692_37668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (15))){
var inst_36657 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36693_37669 = state_36684__$1;
(statearr_36693_37669[(2)] = inst_36657);

(statearr_36693_37669[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (21))){
var inst_36677 = (state_36684[(2)]);
var state_36684__$1 = (function (){var statearr_36694 = state_36684;
(statearr_36694[(9)] = inst_36677);

return statearr_36694;
})();
var statearr_36695_37670 = state_36684__$1;
(statearr_36695_37670[(2)] = null);

(statearr_36695_37670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (13))){
var inst_36639 = (state_36684[(10)]);
var inst_36641 = cljs.core.chunked_seq_QMARK_(inst_36639);
var state_36684__$1 = state_36684;
if(inst_36641){
var statearr_36696_37671 = state_36684__$1;
(statearr_36696_37671[(1)] = (16));

} else {
var statearr_36697_37672 = state_36684__$1;
(statearr_36697_37672[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (22))){
var inst_36669 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
if(cljs.core.truth_(inst_36669)){
var statearr_36698_37673 = state_36684__$1;
(statearr_36698_37673[(1)] = (23));

} else {
var statearr_36699_37674 = state_36684__$1;
(statearr_36699_37674[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (6))){
var inst_36663 = (state_36684[(7)]);
var inst_36665 = (state_36684[(11)]);
var inst_36615 = (state_36684[(8)]);
var inst_36663__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_36615) : topic_fn.call(null,inst_36615));
var inst_36664 = cljs.core.deref(mults);
var inst_36665__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36664,inst_36663__$1);
var state_36684__$1 = (function (){var statearr_36700 = state_36684;
(statearr_36700[(7)] = inst_36663__$1);

(statearr_36700[(11)] = inst_36665__$1);

return statearr_36700;
})();
if(cljs.core.truth_(inst_36665__$1)){
var statearr_36701_37675 = state_36684__$1;
(statearr_36701_37675[(1)] = (19));

} else {
var statearr_36702_37676 = state_36684__$1;
(statearr_36702_37676[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (25))){
var inst_36674 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36703_37678 = state_36684__$1;
(statearr_36703_37678[(2)] = inst_36674);

(statearr_36703_37678[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (17))){
var inst_36639 = (state_36684[(10)]);
var inst_36648 = cljs.core.first(inst_36639);
var inst_36649 = cljs.core.async.muxch_STAR_(inst_36648);
var inst_36650 = cljs.core.async.close_BANG_(inst_36649);
var inst_36651 = cljs.core.next(inst_36639);
var inst_36625 = inst_36651;
var inst_36626 = null;
var inst_36627 = (0);
var inst_36628 = (0);
var state_36684__$1 = (function (){var statearr_36704 = state_36684;
(statearr_36704[(12)] = inst_36628);

(statearr_36704[(13)] = inst_36625);

(statearr_36704[(14)] = inst_36626);

(statearr_36704[(15)] = inst_36627);

(statearr_36704[(16)] = inst_36650);

return statearr_36704;
})();
var statearr_36705_37680 = state_36684__$1;
(statearr_36705_37680[(2)] = null);

(statearr_36705_37680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (3))){
var inst_36682 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36684__$1,inst_36682);
} else {
if((state_val_36685 === (12))){
var inst_36659 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36706_37681 = state_36684__$1;
(statearr_36706_37681[(2)] = inst_36659);

(statearr_36706_37681[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (2))){
var state_36684__$1 = state_36684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36684__$1,(4),ch);
} else {
if((state_val_36685 === (23))){
var state_36684__$1 = state_36684;
var statearr_36707_37682 = state_36684__$1;
(statearr_36707_37682[(2)] = null);

(statearr_36707_37682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (19))){
var inst_36665 = (state_36684[(11)]);
var inst_36615 = (state_36684[(8)]);
var inst_36667 = cljs.core.async.muxch_STAR_(inst_36665);
var state_36684__$1 = state_36684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36684__$1,(22),inst_36667,inst_36615);
} else {
if((state_val_36685 === (11))){
var inst_36639 = (state_36684[(10)]);
var inst_36625 = (state_36684[(13)]);
var inst_36639__$1 = cljs.core.seq(inst_36625);
var state_36684__$1 = (function (){var statearr_36708 = state_36684;
(statearr_36708[(10)] = inst_36639__$1);

return statearr_36708;
})();
if(inst_36639__$1){
var statearr_36709_37684 = state_36684__$1;
(statearr_36709_37684[(1)] = (13));

} else {
var statearr_36710_37686 = state_36684__$1;
(statearr_36710_37686[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (9))){
var inst_36661 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36711_37687 = state_36684__$1;
(statearr_36711_37687[(2)] = inst_36661);

(statearr_36711_37687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (5))){
var inst_36622 = cljs.core.deref(mults);
var inst_36623 = cljs.core.vals(inst_36622);
var inst_36624 = cljs.core.seq(inst_36623);
var inst_36625 = inst_36624;
var inst_36626 = null;
var inst_36627 = (0);
var inst_36628 = (0);
var state_36684__$1 = (function (){var statearr_36712 = state_36684;
(statearr_36712[(12)] = inst_36628);

(statearr_36712[(13)] = inst_36625);

(statearr_36712[(14)] = inst_36626);

(statearr_36712[(15)] = inst_36627);

return statearr_36712;
})();
var statearr_36713_37688 = state_36684__$1;
(statearr_36713_37688[(2)] = null);

(statearr_36713_37688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (14))){
var state_36684__$1 = state_36684;
var statearr_36717_37689 = state_36684__$1;
(statearr_36717_37689[(2)] = null);

(statearr_36717_37689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (16))){
var inst_36639 = (state_36684[(10)]);
var inst_36643 = cljs.core.chunk_first(inst_36639);
var inst_36644 = cljs.core.chunk_rest(inst_36639);
var inst_36645 = cljs.core.count(inst_36643);
var inst_36625 = inst_36644;
var inst_36626 = inst_36643;
var inst_36627 = inst_36645;
var inst_36628 = (0);
var state_36684__$1 = (function (){var statearr_36718 = state_36684;
(statearr_36718[(12)] = inst_36628);

(statearr_36718[(13)] = inst_36625);

(statearr_36718[(14)] = inst_36626);

(statearr_36718[(15)] = inst_36627);

return statearr_36718;
})();
var statearr_36719_37690 = state_36684__$1;
(statearr_36719_37690[(2)] = null);

(statearr_36719_37690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (10))){
var inst_36628 = (state_36684[(12)]);
var inst_36625 = (state_36684[(13)]);
var inst_36626 = (state_36684[(14)]);
var inst_36627 = (state_36684[(15)]);
var inst_36633 = cljs.core._nth(inst_36626,inst_36628);
var inst_36634 = cljs.core.async.muxch_STAR_(inst_36633);
var inst_36635 = cljs.core.async.close_BANG_(inst_36634);
var inst_36636 = (inst_36628 + (1));
var tmp36714 = inst_36625;
var tmp36715 = inst_36626;
var tmp36716 = inst_36627;
var inst_36625__$1 = tmp36714;
var inst_36626__$1 = tmp36715;
var inst_36627__$1 = tmp36716;
var inst_36628__$1 = inst_36636;
var state_36684__$1 = (function (){var statearr_36720 = state_36684;
(statearr_36720[(12)] = inst_36628__$1);

(statearr_36720[(17)] = inst_36635);

(statearr_36720[(13)] = inst_36625__$1);

(statearr_36720[(14)] = inst_36626__$1);

(statearr_36720[(15)] = inst_36627__$1);

return statearr_36720;
})();
var statearr_36721_37691 = state_36684__$1;
(statearr_36721_37691[(2)] = null);

(statearr_36721_37691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (18))){
var inst_36654 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36722_37692 = state_36684__$1;
(statearr_36722_37692[(2)] = inst_36654);

(statearr_36722_37692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (8))){
var inst_36628 = (state_36684[(12)]);
var inst_36627 = (state_36684[(15)]);
var inst_36630 = (inst_36628 < inst_36627);
var inst_36631 = inst_36630;
var state_36684__$1 = state_36684;
if(cljs.core.truth_(inst_36631)){
var statearr_36723_37693 = state_36684__$1;
(statearr_36723_37693[(1)] = (10));

} else {
var statearr_36724_37694 = state_36684__$1;
(statearr_36724_37694[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35689__auto__ = null;
var cljs$core$async$state_machine__35689__auto____0 = (function (){
var statearr_36725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36725[(0)] = cljs$core$async$state_machine__35689__auto__);

(statearr_36725[(1)] = (1));

return statearr_36725;
});
var cljs$core$async$state_machine__35689__auto____1 = (function (state_36684){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_36684);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e36726){var ex__35692__auto__ = e36726;
var statearr_36727_37695 = state_36684;
(statearr_36727_37695[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_36684[(4)]))){
var statearr_36728_37696 = state_36684;
(statearr_36728_37696[(1)] = cljs.core.first((state_36684[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37697 = state_36684;
state_36684 = G__37697;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
cljs$core$async$state_machine__35689__auto__ = function(state_36684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35689__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35689__auto____1.call(this,state_36684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35689__auto____0;
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35689__auto____1;
return cljs$core$async$state_machine__35689__auto__;
})()
})();
var state__35783__auto__ = (function (){var statearr_36729 = f__35782__auto__();
(statearr_36729[(6)] = c__35781__auto___37662);

return statearr_36729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__36731 = arguments.length;
switch (G__36731) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__36733 = arguments.length;
switch (G__36733) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__36735 = arguments.length;
switch (G__36735) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__35781__auto___37703 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = (function (state_36778){
var state_val_36779 = (state_36778[(1)]);
if((state_val_36779 === (7))){
var state_36778__$1 = state_36778;
var statearr_36780_37704 = state_36778__$1;
(statearr_36780_37704[(2)] = null);

(statearr_36780_37704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (1))){
var state_36778__$1 = state_36778;
var statearr_36781_37705 = state_36778__$1;
(statearr_36781_37705[(2)] = null);

(statearr_36781_37705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (4))){
var inst_36738 = (state_36778[(7)]);
var inst_36739 = (state_36778[(8)]);
var inst_36741 = (inst_36739 < inst_36738);
var state_36778__$1 = state_36778;
if(cljs.core.truth_(inst_36741)){
var statearr_36782_37706 = state_36778__$1;
(statearr_36782_37706[(1)] = (6));

} else {
var statearr_36783_37707 = state_36778__$1;
(statearr_36783_37707[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (15))){
var inst_36764 = (state_36778[(9)]);
var inst_36769 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36764);
var state_36778__$1 = state_36778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36778__$1,(17),out,inst_36769);
} else {
if((state_val_36779 === (13))){
var inst_36764 = (state_36778[(9)]);
var inst_36764__$1 = (state_36778[(2)]);
var inst_36765 = cljs.core.some(cljs.core.nil_QMARK_,inst_36764__$1);
var state_36778__$1 = (function (){var statearr_36784 = state_36778;
(statearr_36784[(9)] = inst_36764__$1);

return statearr_36784;
})();
if(cljs.core.truth_(inst_36765)){
var statearr_36785_37708 = state_36778__$1;
(statearr_36785_37708[(1)] = (14));

} else {
var statearr_36786_37709 = state_36778__$1;
(statearr_36786_37709[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (6))){
var state_36778__$1 = state_36778;
var statearr_36787_37710 = state_36778__$1;
(statearr_36787_37710[(2)] = null);

(statearr_36787_37710[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (17))){
var inst_36771 = (state_36778[(2)]);
var state_36778__$1 = (function (){var statearr_36789 = state_36778;
(statearr_36789[(10)] = inst_36771);

return statearr_36789;
})();
var statearr_36790_37711 = state_36778__$1;
(statearr_36790_37711[(2)] = null);

(statearr_36790_37711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (3))){
var inst_36776 = (state_36778[(2)]);
var state_36778__$1 = state_36778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36778__$1,inst_36776);
} else {
if((state_val_36779 === (12))){
var _ = (function (){var statearr_36791 = state_36778;
(statearr_36791[(4)] = cljs.core.rest((state_36778[(4)])));

return statearr_36791;
})();
var state_36778__$1 = state_36778;
var ex36788 = (state_36778__$1[(2)]);
var statearr_36792_37712 = state_36778__$1;
(statearr_36792_37712[(5)] = ex36788);


if((ex36788 instanceof Object)){
var statearr_36793_37713 = state_36778__$1;
(statearr_36793_37713[(1)] = (11));

(statearr_36793_37713[(5)] = null);

} else {
throw ex36788;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (2))){
var inst_36737 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36738 = cnt;
var inst_36739 = (0);
var state_36778__$1 = (function (){var statearr_36794 = state_36778;
(statearr_36794[(11)] = inst_36737);

(statearr_36794[(7)] = inst_36738);

(statearr_36794[(8)] = inst_36739);

return statearr_36794;
})();
var statearr_36795_37715 = state_36778__$1;
(statearr_36795_37715[(2)] = null);

(statearr_36795_37715[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (11))){
var inst_36743 = (state_36778[(2)]);
var inst_36744 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36778__$1 = (function (){var statearr_36796 = state_36778;
(statearr_36796[(12)] = inst_36743);

return statearr_36796;
})();
var statearr_36797_37716 = state_36778__$1;
(statearr_36797_37716[(2)] = inst_36744);

(statearr_36797_37716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (9))){
var inst_36739 = (state_36778[(8)]);
var _ = (function (){var statearr_36798 = state_36778;
(statearr_36798[(4)] = cljs.core.cons((12),(state_36778[(4)])));

return statearr_36798;
})();
var inst_36750 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36739) : chs__$1.call(null,inst_36739));
var inst_36751 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36739) : done.call(null,inst_36739));
var inst_36752 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36750,inst_36751);
var ___$1 = (function (){var statearr_36799 = state_36778;
(statearr_36799[(4)] = cljs.core.rest((state_36778[(4)])));

return statearr_36799;
})();
var state_36778__$1 = state_36778;
var statearr_36800_37717 = state_36778__$1;
(statearr_36800_37717[(2)] = inst_36752);

(statearr_36800_37717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (5))){
var inst_36762 = (state_36778[(2)]);
var state_36778__$1 = (function (){var statearr_36801 = state_36778;
(statearr_36801[(13)] = inst_36762);

return statearr_36801;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36778__$1,(13),dchan);
} else {
if((state_val_36779 === (14))){
var inst_36767 = cljs.core.async.close_BANG_(out);
var state_36778__$1 = state_36778;
var statearr_36802_37722 = state_36778__$1;
(statearr_36802_37722[(2)] = inst_36767);

(statearr_36802_37722[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (16))){
var inst_36774 = (state_36778[(2)]);
var state_36778__$1 = state_36778;
var statearr_36803_37723 = state_36778__$1;
(statearr_36803_37723[(2)] = inst_36774);

(statearr_36803_37723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (10))){
var inst_36739 = (state_36778[(8)]);
var inst_36755 = (state_36778[(2)]);
var inst_36756 = (inst_36739 + (1));
var inst_36739__$1 = inst_36756;
var state_36778__$1 = (function (){var statearr_36804 = state_36778;
(statearr_36804[(14)] = inst_36755);

(statearr_36804[(8)] = inst_36739__$1);

return statearr_36804;
})();
var statearr_36805_37724 = state_36778__$1;
(statearr_36805_37724[(2)] = null);

(statearr_36805_37724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (8))){
var inst_36760 = (state_36778[(2)]);
var state_36778__$1 = state_36778;
var statearr_36806_37725 = state_36778__$1;
(statearr_36806_37725[(2)] = inst_36760);

(statearr_36806_37725[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35689__auto__ = null;
var cljs$core$async$state_machine__35689__auto____0 = (function (){
var statearr_36807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36807[(0)] = cljs$core$async$state_machine__35689__auto__);

(statearr_36807[(1)] = (1));

return statearr_36807;
});
var cljs$core$async$state_machine__35689__auto____1 = (function (state_36778){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_36778);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e36808){var ex__35692__auto__ = e36808;
var statearr_36809_37726 = state_36778;
(statearr_36809_37726[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_36778[(4)]))){
var statearr_36810_37727 = state_36778;
(statearr_36810_37727[(1)] = cljs.core.first((state_36778[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37728 = state_36778;
state_36778 = G__37728;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
cljs$core$async$state_machine__35689__auto__ = function(state_36778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35689__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35689__auto____1.call(this,state_36778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35689__auto____0;
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35689__auto____1;
return cljs$core$async$state_machine__35689__auto__;
})()
})();
var state__35783__auto__ = (function (){var statearr_36811 = f__35782__auto__();
(statearr_36811[(6)] = c__35781__auto___37703);

return statearr_36811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__36814 = arguments.length;
switch (G__36814) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35781__auto___37730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = (function (state_36846){
var state_val_36847 = (state_36846[(1)]);
if((state_val_36847 === (7))){
var inst_36825 = (state_36846[(7)]);
var inst_36826 = (state_36846[(8)]);
var inst_36825__$1 = (state_36846[(2)]);
var inst_36826__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36825__$1,(0),null);
var inst_36827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36825__$1,(1),null);
var inst_36828 = (inst_36826__$1 == null);
var state_36846__$1 = (function (){var statearr_36848 = state_36846;
(statearr_36848[(9)] = inst_36827);

(statearr_36848[(7)] = inst_36825__$1);

(statearr_36848[(8)] = inst_36826__$1);

return statearr_36848;
})();
if(cljs.core.truth_(inst_36828)){
var statearr_36849_37731 = state_36846__$1;
(statearr_36849_37731[(1)] = (8));

} else {
var statearr_36850_37732 = state_36846__$1;
(statearr_36850_37732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (1))){
var inst_36815 = cljs.core.vec(chs);
var inst_36816 = inst_36815;
var state_36846__$1 = (function (){var statearr_36851 = state_36846;
(statearr_36851[(10)] = inst_36816);

return statearr_36851;
})();
var statearr_36852_37737 = state_36846__$1;
(statearr_36852_37737[(2)] = null);

(statearr_36852_37737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (4))){
var inst_36816 = (state_36846[(10)]);
var state_36846__$1 = state_36846;
return cljs.core.async.ioc_alts_BANG_(state_36846__$1,(7),inst_36816);
} else {
if((state_val_36847 === (6))){
var inst_36842 = (state_36846[(2)]);
var state_36846__$1 = state_36846;
var statearr_36853_37741 = state_36846__$1;
(statearr_36853_37741[(2)] = inst_36842);

(statearr_36853_37741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (3))){
var inst_36844 = (state_36846[(2)]);
var state_36846__$1 = state_36846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36846__$1,inst_36844);
} else {
if((state_val_36847 === (2))){
var inst_36816 = (state_36846[(10)]);
var inst_36818 = cljs.core.count(inst_36816);
var inst_36819 = (inst_36818 > (0));
var state_36846__$1 = state_36846;
if(cljs.core.truth_(inst_36819)){
var statearr_36855_37742 = state_36846__$1;
(statearr_36855_37742[(1)] = (4));

} else {
var statearr_36856_37743 = state_36846__$1;
(statearr_36856_37743[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (11))){
var inst_36816 = (state_36846[(10)]);
var inst_36835 = (state_36846[(2)]);
var tmp36854 = inst_36816;
var inst_36816__$1 = tmp36854;
var state_36846__$1 = (function (){var statearr_36857 = state_36846;
(statearr_36857[(11)] = inst_36835);

(statearr_36857[(10)] = inst_36816__$1);

return statearr_36857;
})();
var statearr_36858_37747 = state_36846__$1;
(statearr_36858_37747[(2)] = null);

(statearr_36858_37747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (9))){
var inst_36826 = (state_36846[(8)]);
var state_36846__$1 = state_36846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36846__$1,(11),out,inst_36826);
} else {
if((state_val_36847 === (5))){
var inst_36840 = cljs.core.async.close_BANG_(out);
var state_36846__$1 = state_36846;
var statearr_36859_37748 = state_36846__$1;
(statearr_36859_37748[(2)] = inst_36840);

(statearr_36859_37748[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (10))){
var inst_36838 = (state_36846[(2)]);
var state_36846__$1 = state_36846;
var statearr_36860_37752 = state_36846__$1;
(statearr_36860_37752[(2)] = inst_36838);

(statearr_36860_37752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (8))){
var inst_36827 = (state_36846[(9)]);
var inst_36825 = (state_36846[(7)]);
var inst_36816 = (state_36846[(10)]);
var inst_36826 = (state_36846[(8)]);
var inst_36830 = (function (){var cs = inst_36816;
var vec__36821 = inst_36825;
var v = inst_36826;
var c = inst_36827;
return (function (p1__36812_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36812_SHARP_);
});
})();
var inst_36831 = cljs.core.filterv(inst_36830,inst_36816);
var inst_36816__$1 = inst_36831;
var state_36846__$1 = (function (){var statearr_36861 = state_36846;
(statearr_36861[(10)] = inst_36816__$1);

return statearr_36861;
})();
var statearr_36862_37753 = state_36846__$1;
(statearr_36862_37753[(2)] = null);

(statearr_36862_37753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35689__auto__ = null;
var cljs$core$async$state_machine__35689__auto____0 = (function (){
var statearr_36863 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36863[(0)] = cljs$core$async$state_machine__35689__auto__);

(statearr_36863[(1)] = (1));

return statearr_36863;
});
var cljs$core$async$state_machine__35689__auto____1 = (function (state_36846){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_36846);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e36864){var ex__35692__auto__ = e36864;
var statearr_36865_37757 = state_36846;
(statearr_36865_37757[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_36846[(4)]))){
var statearr_36866_37758 = state_36846;
(statearr_36866_37758[(1)] = cljs.core.first((state_36846[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37759 = state_36846;
state_36846 = G__37759;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
cljs$core$async$state_machine__35689__auto__ = function(state_36846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35689__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35689__auto____1.call(this,state_36846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35689__auto____0;
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35689__auto____1;
return cljs$core$async$state_machine__35689__auto__;
})()
})();
var state__35783__auto__ = (function (){var statearr_36867 = f__35782__auto__();
(statearr_36867[(6)] = c__35781__auto___37730);

return statearr_36867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36869 = arguments.length;
switch (G__36869) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35781__auto___37765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = (function (state_36893){
var state_val_36894 = (state_36893[(1)]);
if((state_val_36894 === (7))){
var inst_36875 = (state_36893[(7)]);
var inst_36875__$1 = (state_36893[(2)]);
var inst_36876 = (inst_36875__$1 == null);
var inst_36877 = cljs.core.not(inst_36876);
var state_36893__$1 = (function (){var statearr_36895 = state_36893;
(statearr_36895[(7)] = inst_36875__$1);

return statearr_36895;
})();
if(inst_36877){
var statearr_36896_37766 = state_36893__$1;
(statearr_36896_37766[(1)] = (8));

} else {
var statearr_36897_37767 = state_36893__$1;
(statearr_36897_37767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (1))){
var inst_36870 = (0);
var state_36893__$1 = (function (){var statearr_36898 = state_36893;
(statearr_36898[(8)] = inst_36870);

return statearr_36898;
})();
var statearr_36899_37768 = state_36893__$1;
(statearr_36899_37768[(2)] = null);

(statearr_36899_37768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (4))){
var state_36893__$1 = state_36893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36893__$1,(7),ch);
} else {
if((state_val_36894 === (6))){
var inst_36888 = (state_36893[(2)]);
var state_36893__$1 = state_36893;
var statearr_36900_37769 = state_36893__$1;
(statearr_36900_37769[(2)] = inst_36888);

(statearr_36900_37769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (3))){
var inst_36890 = (state_36893[(2)]);
var inst_36891 = cljs.core.async.close_BANG_(out);
var state_36893__$1 = (function (){var statearr_36901 = state_36893;
(statearr_36901[(9)] = inst_36890);

return statearr_36901;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36893__$1,inst_36891);
} else {
if((state_val_36894 === (2))){
var inst_36870 = (state_36893[(8)]);
var inst_36872 = (inst_36870 < n);
var state_36893__$1 = state_36893;
if(cljs.core.truth_(inst_36872)){
var statearr_36902_37771 = state_36893__$1;
(statearr_36902_37771[(1)] = (4));

} else {
var statearr_36903_37772 = state_36893__$1;
(statearr_36903_37772[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (11))){
var inst_36870 = (state_36893[(8)]);
var inst_36880 = (state_36893[(2)]);
var inst_36881 = (inst_36870 + (1));
var inst_36870__$1 = inst_36881;
var state_36893__$1 = (function (){var statearr_36904 = state_36893;
(statearr_36904[(10)] = inst_36880);

(statearr_36904[(8)] = inst_36870__$1);

return statearr_36904;
})();
var statearr_36905_37774 = state_36893__$1;
(statearr_36905_37774[(2)] = null);

(statearr_36905_37774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (9))){
var state_36893__$1 = state_36893;
var statearr_36906_37775 = state_36893__$1;
(statearr_36906_37775[(2)] = null);

(statearr_36906_37775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (5))){
var state_36893__$1 = state_36893;
var statearr_36907_37776 = state_36893__$1;
(statearr_36907_37776[(2)] = null);

(statearr_36907_37776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (10))){
var inst_36885 = (state_36893[(2)]);
var state_36893__$1 = state_36893;
var statearr_36908_37777 = state_36893__$1;
(statearr_36908_37777[(2)] = inst_36885);

(statearr_36908_37777[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (8))){
var inst_36875 = (state_36893[(7)]);
var state_36893__$1 = state_36893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36893__$1,(11),out,inst_36875);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35689__auto__ = null;
var cljs$core$async$state_machine__35689__auto____0 = (function (){
var statearr_36909 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36909[(0)] = cljs$core$async$state_machine__35689__auto__);

(statearr_36909[(1)] = (1));

return statearr_36909;
});
var cljs$core$async$state_machine__35689__auto____1 = (function (state_36893){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_36893);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e36910){var ex__35692__auto__ = e36910;
var statearr_36911_37778 = state_36893;
(statearr_36911_37778[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_36893[(4)]))){
var statearr_36912_37779 = state_36893;
(statearr_36912_37779[(1)] = cljs.core.first((state_36893[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37780 = state_36893;
state_36893 = G__37780;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
cljs$core$async$state_machine__35689__auto__ = function(state_36893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35689__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35689__auto____1.call(this,state_36893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35689__auto____0;
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35689__auto____1;
return cljs$core$async$state_machine__35689__auto__;
})()
})();
var state__35783__auto__ = (function (){var statearr_36913 = f__35782__auto__();
(statearr_36913[(6)] = c__35781__auto___37765);

return statearr_36913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36915 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36915 = (function (f,ch,meta36916){
this.f = f;
this.ch = ch;
this.meta36916 = meta36916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36917,meta36916__$1){
var self__ = this;
var _36917__$1 = this;
return (new cljs.core.async.t_cljs$core$async36915(self__.f,self__.ch,meta36916__$1));
}));

(cljs.core.async.t_cljs$core$async36915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36917){
var self__ = this;
var _36917__$1 = this;
return self__.meta36916;
}));

(cljs.core.async.t_cljs$core$async36915.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36915.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36915.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36915.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36915.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36918 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36918 = (function (f,ch,meta36916,_,fn1,meta36919){
this.f = f;
this.ch = ch;
this.meta36916 = meta36916;
this._ = _;
this.fn1 = fn1;
this.meta36919 = meta36919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36920,meta36919__$1){
var self__ = this;
var _36920__$1 = this;
return (new cljs.core.async.t_cljs$core$async36918(self__.f,self__.ch,self__.meta36916,self__._,self__.fn1,meta36919__$1));
}));

(cljs.core.async.t_cljs$core$async36918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36920){
var self__ = this;
var _36920__$1 = this;
return self__.meta36919;
}));

(cljs.core.async.t_cljs$core$async36918.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36918.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36918.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36918.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36914_SHARP_){
var G__36921 = (((p1__36914_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36914_SHARP_) : self__.f.call(null,p1__36914_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36921) : f1.call(null,G__36921));
});
}));

(cljs.core.async.t_cljs$core$async36918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36916","meta36916",538893711,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36915","cljs.core.async/t_cljs$core$async36915",473010273,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36919","meta36919",-954050766,null)], null);
}));

(cljs.core.async.t_cljs$core$async36918.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36918");

(cljs.core.async.t_cljs$core$async36918.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async36918");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36918.
 */
cljs.core.async.__GT_t_cljs$core$async36918 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36918(f__$1,ch__$1,meta36916__$1,___$2,fn1__$1,meta36919){
return (new cljs.core.async.t_cljs$core$async36918(f__$1,ch__$1,meta36916__$1,___$2,fn1__$1,meta36919));
});

}

return (new cljs.core.async.t_cljs$core$async36918(self__.f,self__.ch,self__.meta36916,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36922 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36922) : self__.f.call(null,G__36922));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36915.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36915.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36916","meta36916",538893711,null)], null);
}));

(cljs.core.async.t_cljs$core$async36915.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36915");

(cljs.core.async.t_cljs$core$async36915.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async36915");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36915.
 */
cljs.core.async.__GT_t_cljs$core$async36915 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36915(f__$1,ch__$1,meta36916){
return (new cljs.core.async.t_cljs$core$async36915(f__$1,ch__$1,meta36916));
});

}

return (new cljs.core.async.t_cljs$core$async36915(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36923 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36923 = (function (f,ch,meta36924){
this.f = f;
this.ch = ch;
this.meta36924 = meta36924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36925,meta36924__$1){
var self__ = this;
var _36925__$1 = this;
return (new cljs.core.async.t_cljs$core$async36923(self__.f,self__.ch,meta36924__$1));
}));

(cljs.core.async.t_cljs$core$async36923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36925){
var self__ = this;
var _36925__$1 = this;
return self__.meta36924;
}));

(cljs.core.async.t_cljs$core$async36923.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36923.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36923.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36923.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36923.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36923.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36924","meta36924",665230858,null)], null);
}));

(cljs.core.async.t_cljs$core$async36923.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36923");

(cljs.core.async.t_cljs$core$async36923.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async36923");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36923.
 */
cljs.core.async.__GT_t_cljs$core$async36923 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36923(f__$1,ch__$1,meta36924){
return (new cljs.core.async.t_cljs$core$async36923(f__$1,ch__$1,meta36924));
});

}

return (new cljs.core.async.t_cljs$core$async36923(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36926 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36926 = (function (p,ch,meta36927){
this.p = p;
this.ch = ch;
this.meta36927 = meta36927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36928,meta36927__$1){
var self__ = this;
var _36928__$1 = this;
return (new cljs.core.async.t_cljs$core$async36926(self__.p,self__.ch,meta36927__$1));
}));

(cljs.core.async.t_cljs$core$async36926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36928){
var self__ = this;
var _36928__$1 = this;
return self__.meta36927;
}));

(cljs.core.async.t_cljs$core$async36926.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36926.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36926.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36926.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36926.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36926.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36926.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36927","meta36927",-1891111962,null)], null);
}));

(cljs.core.async.t_cljs$core$async36926.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36926");

(cljs.core.async.t_cljs$core$async36926.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async36926");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36926.
 */
cljs.core.async.__GT_t_cljs$core$async36926 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36926(p__$1,ch__$1,meta36927){
return (new cljs.core.async.t_cljs$core$async36926(p__$1,ch__$1,meta36927));
});

}

return (new cljs.core.async.t_cljs$core$async36926(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36930 = arguments.length;
switch (G__36930) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35781__auto___37791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = (function (state_36951){
var state_val_36952 = (state_36951[(1)]);
if((state_val_36952 === (7))){
var inst_36947 = (state_36951[(2)]);
var state_36951__$1 = state_36951;
var statearr_36953_37792 = state_36951__$1;
(statearr_36953_37792[(2)] = inst_36947);

(statearr_36953_37792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36952 === (1))){
var state_36951__$1 = state_36951;
var statearr_36954_37793 = state_36951__$1;
(statearr_36954_37793[(2)] = null);

(statearr_36954_37793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36952 === (4))){
var inst_36933 = (state_36951[(7)]);
var inst_36933__$1 = (state_36951[(2)]);
var inst_36934 = (inst_36933__$1 == null);
var state_36951__$1 = (function (){var statearr_36955 = state_36951;
(statearr_36955[(7)] = inst_36933__$1);

return statearr_36955;
})();
if(cljs.core.truth_(inst_36934)){
var statearr_36956_37795 = state_36951__$1;
(statearr_36956_37795[(1)] = (5));

} else {
var statearr_36957_37796 = state_36951__$1;
(statearr_36957_37796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36952 === (6))){
var inst_36933 = (state_36951[(7)]);
var inst_36938 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36933) : p.call(null,inst_36933));
var state_36951__$1 = state_36951;
if(cljs.core.truth_(inst_36938)){
var statearr_36958_37797 = state_36951__$1;
(statearr_36958_37797[(1)] = (8));

} else {
var statearr_36959_37798 = state_36951__$1;
(statearr_36959_37798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36952 === (3))){
var inst_36949 = (state_36951[(2)]);
var state_36951__$1 = state_36951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36951__$1,inst_36949);
} else {
if((state_val_36952 === (2))){
var state_36951__$1 = state_36951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36951__$1,(4),ch);
} else {
if((state_val_36952 === (11))){
var inst_36941 = (state_36951[(2)]);
var state_36951__$1 = state_36951;
var statearr_36960_37800 = state_36951__$1;
(statearr_36960_37800[(2)] = inst_36941);

(statearr_36960_37800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36952 === (9))){
var state_36951__$1 = state_36951;
var statearr_36961_37804 = state_36951__$1;
(statearr_36961_37804[(2)] = null);

(statearr_36961_37804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36952 === (5))){
var inst_36936 = cljs.core.async.close_BANG_(out);
var state_36951__$1 = state_36951;
var statearr_36962_37805 = state_36951__$1;
(statearr_36962_37805[(2)] = inst_36936);

(statearr_36962_37805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36952 === (10))){
var inst_36944 = (state_36951[(2)]);
var state_36951__$1 = (function (){var statearr_36963 = state_36951;
(statearr_36963[(8)] = inst_36944);

return statearr_36963;
})();
var statearr_36964_37806 = state_36951__$1;
(statearr_36964_37806[(2)] = null);

(statearr_36964_37806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36952 === (8))){
var inst_36933 = (state_36951[(7)]);
var state_36951__$1 = state_36951;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36951__$1,(11),out,inst_36933);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35689__auto__ = null;
var cljs$core$async$state_machine__35689__auto____0 = (function (){
var statearr_36965 = [null,null,null,null,null,null,null,null,null];
(statearr_36965[(0)] = cljs$core$async$state_machine__35689__auto__);

(statearr_36965[(1)] = (1));

return statearr_36965;
});
var cljs$core$async$state_machine__35689__auto____1 = (function (state_36951){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_36951);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e36966){var ex__35692__auto__ = e36966;
var statearr_36967_37807 = state_36951;
(statearr_36967_37807[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_36951[(4)]))){
var statearr_36968_37808 = state_36951;
(statearr_36968_37808[(1)] = cljs.core.first((state_36951[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37809 = state_36951;
state_36951 = G__37809;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
cljs$core$async$state_machine__35689__auto__ = function(state_36951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35689__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35689__auto____1.call(this,state_36951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35689__auto____0;
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35689__auto____1;
return cljs$core$async$state_machine__35689__auto__;
})()
})();
var state__35783__auto__ = (function (){var statearr_36969 = f__35782__auto__();
(statearr_36969[(6)] = c__35781__auto___37791);

return statearr_36969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36971 = arguments.length;
switch (G__36971) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__35781__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = (function (state_37033){
var state_val_37034 = (state_37033[(1)]);
if((state_val_37034 === (7))){
var inst_37029 = (state_37033[(2)]);
var state_37033__$1 = state_37033;
var statearr_37035_37811 = state_37033__$1;
(statearr_37035_37811[(2)] = inst_37029);

(statearr_37035_37811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (20))){
var inst_36999 = (state_37033[(7)]);
var inst_37010 = (state_37033[(2)]);
var inst_37011 = cljs.core.next(inst_36999);
var inst_36985 = inst_37011;
var inst_36986 = null;
var inst_36987 = (0);
var inst_36988 = (0);
var state_37033__$1 = (function (){var statearr_37036 = state_37033;
(statearr_37036[(8)] = inst_36985);

(statearr_37036[(9)] = inst_37010);

(statearr_37036[(10)] = inst_36987);

(statearr_37036[(11)] = inst_36988);

(statearr_37036[(12)] = inst_36986);

return statearr_37036;
})();
var statearr_37037_37812 = state_37033__$1;
(statearr_37037_37812[(2)] = null);

(statearr_37037_37812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (1))){
var state_37033__$1 = state_37033;
var statearr_37038_37813 = state_37033__$1;
(statearr_37038_37813[(2)] = null);

(statearr_37038_37813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (4))){
var inst_36974 = (state_37033[(13)]);
var inst_36974__$1 = (state_37033[(2)]);
var inst_36975 = (inst_36974__$1 == null);
var state_37033__$1 = (function (){var statearr_37039 = state_37033;
(statearr_37039[(13)] = inst_36974__$1);

return statearr_37039;
})();
if(cljs.core.truth_(inst_36975)){
var statearr_37040_37814 = state_37033__$1;
(statearr_37040_37814[(1)] = (5));

} else {
var statearr_37041_37815 = state_37033__$1;
(statearr_37041_37815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (15))){
var state_37033__$1 = state_37033;
var statearr_37045_37816 = state_37033__$1;
(statearr_37045_37816[(2)] = null);

(statearr_37045_37816[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (21))){
var state_37033__$1 = state_37033;
var statearr_37046_37817 = state_37033__$1;
(statearr_37046_37817[(2)] = null);

(statearr_37046_37817[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (13))){
var inst_36985 = (state_37033[(8)]);
var inst_36987 = (state_37033[(10)]);
var inst_36988 = (state_37033[(11)]);
var inst_36986 = (state_37033[(12)]);
var inst_36995 = (state_37033[(2)]);
var inst_36996 = (inst_36988 + (1));
var tmp37042 = inst_36985;
var tmp37043 = inst_36987;
var tmp37044 = inst_36986;
var inst_36985__$1 = tmp37042;
var inst_36986__$1 = tmp37044;
var inst_36987__$1 = tmp37043;
var inst_36988__$1 = inst_36996;
var state_37033__$1 = (function (){var statearr_37047 = state_37033;
(statearr_37047[(8)] = inst_36985__$1);

(statearr_37047[(14)] = inst_36995);

(statearr_37047[(10)] = inst_36987__$1);

(statearr_37047[(11)] = inst_36988__$1);

(statearr_37047[(12)] = inst_36986__$1);

return statearr_37047;
})();
var statearr_37048_37818 = state_37033__$1;
(statearr_37048_37818[(2)] = null);

(statearr_37048_37818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (22))){
var state_37033__$1 = state_37033;
var statearr_37049_37819 = state_37033__$1;
(statearr_37049_37819[(2)] = null);

(statearr_37049_37819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (6))){
var inst_36974 = (state_37033[(13)]);
var inst_36983 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36974) : f.call(null,inst_36974));
var inst_36984 = cljs.core.seq(inst_36983);
var inst_36985 = inst_36984;
var inst_36986 = null;
var inst_36987 = (0);
var inst_36988 = (0);
var state_37033__$1 = (function (){var statearr_37050 = state_37033;
(statearr_37050[(8)] = inst_36985);

(statearr_37050[(10)] = inst_36987);

(statearr_37050[(11)] = inst_36988);

(statearr_37050[(12)] = inst_36986);

return statearr_37050;
})();
var statearr_37051_37820 = state_37033__$1;
(statearr_37051_37820[(2)] = null);

(statearr_37051_37820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (17))){
var inst_36999 = (state_37033[(7)]);
var inst_37003 = cljs.core.chunk_first(inst_36999);
var inst_37004 = cljs.core.chunk_rest(inst_36999);
var inst_37005 = cljs.core.count(inst_37003);
var inst_36985 = inst_37004;
var inst_36986 = inst_37003;
var inst_36987 = inst_37005;
var inst_36988 = (0);
var state_37033__$1 = (function (){var statearr_37052 = state_37033;
(statearr_37052[(8)] = inst_36985);

(statearr_37052[(10)] = inst_36987);

(statearr_37052[(11)] = inst_36988);

(statearr_37052[(12)] = inst_36986);

return statearr_37052;
})();
var statearr_37053_37821 = state_37033__$1;
(statearr_37053_37821[(2)] = null);

(statearr_37053_37821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (3))){
var inst_37031 = (state_37033[(2)]);
var state_37033__$1 = state_37033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37033__$1,inst_37031);
} else {
if((state_val_37034 === (12))){
var inst_37019 = (state_37033[(2)]);
var state_37033__$1 = state_37033;
var statearr_37054_37823 = state_37033__$1;
(statearr_37054_37823[(2)] = inst_37019);

(statearr_37054_37823[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (2))){
var state_37033__$1 = state_37033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37033__$1,(4),in$);
} else {
if((state_val_37034 === (23))){
var inst_37027 = (state_37033[(2)]);
var state_37033__$1 = state_37033;
var statearr_37055_37824 = state_37033__$1;
(statearr_37055_37824[(2)] = inst_37027);

(statearr_37055_37824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (19))){
var inst_37014 = (state_37033[(2)]);
var state_37033__$1 = state_37033;
var statearr_37056_37828 = state_37033__$1;
(statearr_37056_37828[(2)] = inst_37014);

(statearr_37056_37828[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (11))){
var inst_36985 = (state_37033[(8)]);
var inst_36999 = (state_37033[(7)]);
var inst_36999__$1 = cljs.core.seq(inst_36985);
var state_37033__$1 = (function (){var statearr_37057 = state_37033;
(statearr_37057[(7)] = inst_36999__$1);

return statearr_37057;
})();
if(inst_36999__$1){
var statearr_37058_37829 = state_37033__$1;
(statearr_37058_37829[(1)] = (14));

} else {
var statearr_37059_37830 = state_37033__$1;
(statearr_37059_37830[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (9))){
var inst_37021 = (state_37033[(2)]);
var inst_37022 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_37033__$1 = (function (){var statearr_37060 = state_37033;
(statearr_37060[(15)] = inst_37021);

return statearr_37060;
})();
if(cljs.core.truth_(inst_37022)){
var statearr_37061_37831 = state_37033__$1;
(statearr_37061_37831[(1)] = (21));

} else {
var statearr_37062_37832 = state_37033__$1;
(statearr_37062_37832[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (5))){
var inst_36977 = cljs.core.async.close_BANG_(out);
var state_37033__$1 = state_37033;
var statearr_37063_37833 = state_37033__$1;
(statearr_37063_37833[(2)] = inst_36977);

(statearr_37063_37833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (14))){
var inst_36999 = (state_37033[(7)]);
var inst_37001 = cljs.core.chunked_seq_QMARK_(inst_36999);
var state_37033__$1 = state_37033;
if(inst_37001){
var statearr_37064_37834 = state_37033__$1;
(statearr_37064_37834[(1)] = (17));

} else {
var statearr_37065_37835 = state_37033__$1;
(statearr_37065_37835[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (16))){
var inst_37017 = (state_37033[(2)]);
var state_37033__$1 = state_37033;
var statearr_37066_37836 = state_37033__$1;
(statearr_37066_37836[(2)] = inst_37017);

(statearr_37066_37836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (10))){
var inst_36988 = (state_37033[(11)]);
var inst_36986 = (state_37033[(12)]);
var inst_36993 = cljs.core._nth(inst_36986,inst_36988);
var state_37033__$1 = state_37033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37033__$1,(13),out,inst_36993);
} else {
if((state_val_37034 === (18))){
var inst_36999 = (state_37033[(7)]);
var inst_37008 = cljs.core.first(inst_36999);
var state_37033__$1 = state_37033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37033__$1,(20),out,inst_37008);
} else {
if((state_val_37034 === (8))){
var inst_36987 = (state_37033[(10)]);
var inst_36988 = (state_37033[(11)]);
var inst_36990 = (inst_36988 < inst_36987);
var inst_36991 = inst_36990;
var state_37033__$1 = state_37033;
if(cljs.core.truth_(inst_36991)){
var statearr_37067_37837 = state_37033__$1;
(statearr_37067_37837[(1)] = (10));

} else {
var statearr_37068_37838 = state_37033__$1;
(statearr_37068_37838[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35689__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35689__auto____0 = (function (){
var statearr_37069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37069[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35689__auto__);

(statearr_37069[(1)] = (1));

return statearr_37069;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35689__auto____1 = (function (state_37033){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_37033);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e37070){var ex__35692__auto__ = e37070;
var statearr_37071_37839 = state_37033;
(statearr_37071_37839[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_37033[(4)]))){
var statearr_37072_37840 = state_37033;
(statearr_37072_37840[(1)] = cljs.core.first((state_37033[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37841 = state_37033;
state_37033 = G__37841;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35689__auto__ = function(state_37033){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35689__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35689__auto____1.call(this,state_37033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35689__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35689__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35689__auto__;
})()
})();
var state__35783__auto__ = (function (){var statearr_37073 = f__35782__auto__();
(statearr_37073[(6)] = c__35781__auto__);

return statearr_37073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
}));

return c__35781__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37075 = arguments.length;
switch (G__37075) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__37077 = arguments.length;
switch (G__37077) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__37079 = arguments.length;
switch (G__37079) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35781__auto___37846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = (function (state_37103){
var state_val_37104 = (state_37103[(1)]);
if((state_val_37104 === (7))){
var inst_37098 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
var statearr_37105_37847 = state_37103__$1;
(statearr_37105_37847[(2)] = inst_37098);

(statearr_37105_37847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (1))){
var inst_37080 = null;
var state_37103__$1 = (function (){var statearr_37106 = state_37103;
(statearr_37106[(7)] = inst_37080);

return statearr_37106;
})();
var statearr_37107_37848 = state_37103__$1;
(statearr_37107_37848[(2)] = null);

(statearr_37107_37848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (4))){
var inst_37083 = (state_37103[(8)]);
var inst_37083__$1 = (state_37103[(2)]);
var inst_37084 = (inst_37083__$1 == null);
var inst_37085 = cljs.core.not(inst_37084);
var state_37103__$1 = (function (){var statearr_37108 = state_37103;
(statearr_37108[(8)] = inst_37083__$1);

return statearr_37108;
})();
if(inst_37085){
var statearr_37109_37849 = state_37103__$1;
(statearr_37109_37849[(1)] = (5));

} else {
var statearr_37110_37850 = state_37103__$1;
(statearr_37110_37850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (6))){
var state_37103__$1 = state_37103;
var statearr_37111_37851 = state_37103__$1;
(statearr_37111_37851[(2)] = null);

(statearr_37111_37851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (3))){
var inst_37100 = (state_37103[(2)]);
var inst_37101 = cljs.core.async.close_BANG_(out);
var state_37103__$1 = (function (){var statearr_37112 = state_37103;
(statearr_37112[(9)] = inst_37100);

return statearr_37112;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37103__$1,inst_37101);
} else {
if((state_val_37104 === (2))){
var state_37103__$1 = state_37103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37103__$1,(4),ch);
} else {
if((state_val_37104 === (11))){
var inst_37083 = (state_37103[(8)]);
var inst_37092 = (state_37103[(2)]);
var inst_37080 = inst_37083;
var state_37103__$1 = (function (){var statearr_37113 = state_37103;
(statearr_37113[(7)] = inst_37080);

(statearr_37113[(10)] = inst_37092);

return statearr_37113;
})();
var statearr_37114_37856 = state_37103__$1;
(statearr_37114_37856[(2)] = null);

(statearr_37114_37856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (9))){
var inst_37083 = (state_37103[(8)]);
var state_37103__$1 = state_37103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37103__$1,(11),out,inst_37083);
} else {
if((state_val_37104 === (5))){
var inst_37083 = (state_37103[(8)]);
var inst_37080 = (state_37103[(7)]);
var inst_37087 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37083,inst_37080);
var state_37103__$1 = state_37103;
if(inst_37087){
var statearr_37116_37858 = state_37103__$1;
(statearr_37116_37858[(1)] = (8));

} else {
var statearr_37117_37859 = state_37103__$1;
(statearr_37117_37859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (10))){
var inst_37095 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
var statearr_37118_37860 = state_37103__$1;
(statearr_37118_37860[(2)] = inst_37095);

(statearr_37118_37860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (8))){
var inst_37080 = (state_37103[(7)]);
var tmp37115 = inst_37080;
var inst_37080__$1 = tmp37115;
var state_37103__$1 = (function (){var statearr_37119 = state_37103;
(statearr_37119[(7)] = inst_37080__$1);

return statearr_37119;
})();
var statearr_37120_37861 = state_37103__$1;
(statearr_37120_37861[(2)] = null);

(statearr_37120_37861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35689__auto__ = null;
var cljs$core$async$state_machine__35689__auto____0 = (function (){
var statearr_37121 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37121[(0)] = cljs$core$async$state_machine__35689__auto__);

(statearr_37121[(1)] = (1));

return statearr_37121;
});
var cljs$core$async$state_machine__35689__auto____1 = (function (state_37103){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_37103);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e37122){var ex__35692__auto__ = e37122;
var statearr_37123_37862 = state_37103;
(statearr_37123_37862[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_37103[(4)]))){
var statearr_37124_37863 = state_37103;
(statearr_37124_37863[(1)] = cljs.core.first((state_37103[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37865 = state_37103;
state_37103 = G__37865;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
cljs$core$async$state_machine__35689__auto__ = function(state_37103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35689__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35689__auto____1.call(this,state_37103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35689__auto____0;
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35689__auto____1;
return cljs$core$async$state_machine__35689__auto__;
})()
})();
var state__35783__auto__ = (function (){var statearr_37125 = f__35782__auto__();
(statearr_37125[(6)] = c__35781__auto___37846);

return statearr_37125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37127 = arguments.length;
switch (G__37127) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35781__auto___37867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = (function (state_37165){
var state_val_37166 = (state_37165[(1)]);
if((state_val_37166 === (7))){
var inst_37161 = (state_37165[(2)]);
var state_37165__$1 = state_37165;
var statearr_37167_37869 = state_37165__$1;
(statearr_37167_37869[(2)] = inst_37161);

(statearr_37167_37869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37166 === (1))){
var inst_37128 = (new Array(n));
var inst_37129 = inst_37128;
var inst_37130 = (0);
var state_37165__$1 = (function (){var statearr_37168 = state_37165;
(statearr_37168[(7)] = inst_37129);

(statearr_37168[(8)] = inst_37130);

return statearr_37168;
})();
var statearr_37169_37873 = state_37165__$1;
(statearr_37169_37873[(2)] = null);

(statearr_37169_37873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37166 === (4))){
var inst_37133 = (state_37165[(9)]);
var inst_37133__$1 = (state_37165[(2)]);
var inst_37134 = (inst_37133__$1 == null);
var inst_37135 = cljs.core.not(inst_37134);
var state_37165__$1 = (function (){var statearr_37170 = state_37165;
(statearr_37170[(9)] = inst_37133__$1);

return statearr_37170;
})();
if(inst_37135){
var statearr_37171_37874 = state_37165__$1;
(statearr_37171_37874[(1)] = (5));

} else {
var statearr_37172_37875 = state_37165__$1;
(statearr_37172_37875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37166 === (15))){
var inst_37155 = (state_37165[(2)]);
var state_37165__$1 = state_37165;
var statearr_37173_37876 = state_37165__$1;
(statearr_37173_37876[(2)] = inst_37155);

(statearr_37173_37876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37166 === (13))){
var state_37165__$1 = state_37165;
var statearr_37174_37877 = state_37165__$1;
(statearr_37174_37877[(2)] = null);

(statearr_37174_37877[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37166 === (6))){
var inst_37130 = (state_37165[(8)]);
var inst_37151 = (inst_37130 > (0));
var state_37165__$1 = state_37165;
if(cljs.core.truth_(inst_37151)){
var statearr_37175_37878 = state_37165__$1;
(statearr_37175_37878[(1)] = (12));

} else {
var statearr_37176_37879 = state_37165__$1;
(statearr_37176_37879[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37166 === (3))){
var inst_37163 = (state_37165[(2)]);
var state_37165__$1 = state_37165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37165__$1,inst_37163);
} else {
if((state_val_37166 === (12))){
var inst_37129 = (state_37165[(7)]);
var inst_37153 = cljs.core.vec(inst_37129);
var state_37165__$1 = state_37165;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37165__$1,(15),out,inst_37153);
} else {
if((state_val_37166 === (2))){
var state_37165__$1 = state_37165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37165__$1,(4),ch);
} else {
if((state_val_37166 === (11))){
var inst_37145 = (state_37165[(2)]);
var inst_37146 = (new Array(n));
var inst_37129 = inst_37146;
var inst_37130 = (0);
var state_37165__$1 = (function (){var statearr_37177 = state_37165;
(statearr_37177[(7)] = inst_37129);

(statearr_37177[(8)] = inst_37130);

(statearr_37177[(10)] = inst_37145);

return statearr_37177;
})();
var statearr_37178_37880 = state_37165__$1;
(statearr_37178_37880[(2)] = null);

(statearr_37178_37880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37166 === (9))){
var inst_37129 = (state_37165[(7)]);
var inst_37143 = cljs.core.vec(inst_37129);
var state_37165__$1 = state_37165;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37165__$1,(11),out,inst_37143);
} else {
if((state_val_37166 === (5))){
var inst_37138 = (state_37165[(11)]);
var inst_37129 = (state_37165[(7)]);
var inst_37130 = (state_37165[(8)]);
var inst_37133 = (state_37165[(9)]);
var inst_37137 = (inst_37129[inst_37130] = inst_37133);
var inst_37138__$1 = (inst_37130 + (1));
var inst_37139 = (inst_37138__$1 < n);
var state_37165__$1 = (function (){var statearr_37179 = state_37165;
(statearr_37179[(11)] = inst_37138__$1);

(statearr_37179[(12)] = inst_37137);

return statearr_37179;
})();
if(cljs.core.truth_(inst_37139)){
var statearr_37180_37881 = state_37165__$1;
(statearr_37180_37881[(1)] = (8));

} else {
var statearr_37181_37882 = state_37165__$1;
(statearr_37181_37882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37166 === (14))){
var inst_37158 = (state_37165[(2)]);
var inst_37159 = cljs.core.async.close_BANG_(out);
var state_37165__$1 = (function (){var statearr_37183 = state_37165;
(statearr_37183[(13)] = inst_37158);

return statearr_37183;
})();
var statearr_37184_37883 = state_37165__$1;
(statearr_37184_37883[(2)] = inst_37159);

(statearr_37184_37883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37166 === (10))){
var inst_37149 = (state_37165[(2)]);
var state_37165__$1 = state_37165;
var statearr_37185_37884 = state_37165__$1;
(statearr_37185_37884[(2)] = inst_37149);

(statearr_37185_37884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37166 === (8))){
var inst_37138 = (state_37165[(11)]);
var inst_37129 = (state_37165[(7)]);
var tmp37182 = inst_37129;
var inst_37129__$1 = tmp37182;
var inst_37130 = inst_37138;
var state_37165__$1 = (function (){var statearr_37186 = state_37165;
(statearr_37186[(7)] = inst_37129__$1);

(statearr_37186[(8)] = inst_37130);

return statearr_37186;
})();
var statearr_37187_37885 = state_37165__$1;
(statearr_37187_37885[(2)] = null);

(statearr_37187_37885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35689__auto__ = null;
var cljs$core$async$state_machine__35689__auto____0 = (function (){
var statearr_37188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37188[(0)] = cljs$core$async$state_machine__35689__auto__);

(statearr_37188[(1)] = (1));

return statearr_37188;
});
var cljs$core$async$state_machine__35689__auto____1 = (function (state_37165){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_37165);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e37189){var ex__35692__auto__ = e37189;
var statearr_37190_37886 = state_37165;
(statearr_37190_37886[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_37165[(4)]))){
var statearr_37191_37887 = state_37165;
(statearr_37191_37887[(1)] = cljs.core.first((state_37165[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37888 = state_37165;
state_37165 = G__37888;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
cljs$core$async$state_machine__35689__auto__ = function(state_37165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35689__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35689__auto____1.call(this,state_37165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35689__auto____0;
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35689__auto____1;
return cljs$core$async$state_machine__35689__auto__;
})()
})();
var state__35783__auto__ = (function (){var statearr_37192 = f__35782__auto__();
(statearr_37192[(6)] = c__35781__auto___37867);

return statearr_37192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37194 = arguments.length;
switch (G__37194) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35781__auto___37890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35782__auto__ = (function (){var switch__35688__auto__ = (function (state_37239){
var state_val_37240 = (state_37239[(1)]);
if((state_val_37240 === (7))){
var inst_37235 = (state_37239[(2)]);
var state_37239__$1 = state_37239;
var statearr_37241_37891 = state_37239__$1;
(statearr_37241_37891[(2)] = inst_37235);

(statearr_37241_37891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37240 === (1))){
var inst_37195 = [];
var inst_37196 = inst_37195;
var inst_37197 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37239__$1 = (function (){var statearr_37242 = state_37239;
(statearr_37242[(7)] = inst_37196);

(statearr_37242[(8)] = inst_37197);

return statearr_37242;
})();
var statearr_37243_37892 = state_37239__$1;
(statearr_37243_37892[(2)] = null);

(statearr_37243_37892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37240 === (4))){
var inst_37200 = (state_37239[(9)]);
var inst_37200__$1 = (state_37239[(2)]);
var inst_37201 = (inst_37200__$1 == null);
var inst_37202 = cljs.core.not(inst_37201);
var state_37239__$1 = (function (){var statearr_37244 = state_37239;
(statearr_37244[(9)] = inst_37200__$1);

return statearr_37244;
})();
if(inst_37202){
var statearr_37245_37893 = state_37239__$1;
(statearr_37245_37893[(1)] = (5));

} else {
var statearr_37246_37895 = state_37239__$1;
(statearr_37246_37895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37240 === (15))){
var inst_37196 = (state_37239[(7)]);
var inst_37227 = cljs.core.vec(inst_37196);
var state_37239__$1 = state_37239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37239__$1,(18),out,inst_37227);
} else {
if((state_val_37240 === (13))){
var inst_37222 = (state_37239[(2)]);
var state_37239__$1 = state_37239;
var statearr_37247_37896 = state_37239__$1;
(statearr_37247_37896[(2)] = inst_37222);

(statearr_37247_37896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37240 === (6))){
var inst_37196 = (state_37239[(7)]);
var inst_37224 = inst_37196.length;
var inst_37225 = (inst_37224 > (0));
var state_37239__$1 = state_37239;
if(cljs.core.truth_(inst_37225)){
var statearr_37248_37897 = state_37239__$1;
(statearr_37248_37897[(1)] = (15));

} else {
var statearr_37249_37898 = state_37239__$1;
(statearr_37249_37898[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37240 === (17))){
var inst_37232 = (state_37239[(2)]);
var inst_37233 = cljs.core.async.close_BANG_(out);
var state_37239__$1 = (function (){var statearr_37250 = state_37239;
(statearr_37250[(10)] = inst_37232);

return statearr_37250;
})();
var statearr_37251_37902 = state_37239__$1;
(statearr_37251_37902[(2)] = inst_37233);

(statearr_37251_37902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37240 === (3))){
var inst_37237 = (state_37239[(2)]);
var state_37239__$1 = state_37239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37239__$1,inst_37237);
} else {
if((state_val_37240 === (12))){
var inst_37196 = (state_37239[(7)]);
var inst_37215 = cljs.core.vec(inst_37196);
var state_37239__$1 = state_37239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37239__$1,(14),out,inst_37215);
} else {
if((state_val_37240 === (2))){
var state_37239__$1 = state_37239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37239__$1,(4),ch);
} else {
if((state_val_37240 === (11))){
var inst_37196 = (state_37239[(7)]);
var inst_37204 = (state_37239[(11)]);
var inst_37200 = (state_37239[(9)]);
var inst_37212 = inst_37196.push(inst_37200);
var tmp37252 = inst_37196;
var inst_37196__$1 = tmp37252;
var inst_37197 = inst_37204;
var state_37239__$1 = (function (){var statearr_37253 = state_37239;
(statearr_37253[(7)] = inst_37196__$1);

(statearr_37253[(12)] = inst_37212);

(statearr_37253[(8)] = inst_37197);

return statearr_37253;
})();
var statearr_37254_37903 = state_37239__$1;
(statearr_37254_37903[(2)] = null);

(statearr_37254_37903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37240 === (9))){
var inst_37197 = (state_37239[(8)]);
var inst_37208 = cljs.core.keyword_identical_QMARK_(inst_37197,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_37239__$1 = state_37239;
var statearr_37255_37904 = state_37239__$1;
(statearr_37255_37904[(2)] = inst_37208);

(statearr_37255_37904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37240 === (5))){
var inst_37205 = (state_37239[(13)]);
var inst_37204 = (state_37239[(11)]);
var inst_37197 = (state_37239[(8)]);
var inst_37200 = (state_37239[(9)]);
var inst_37204__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37200) : f.call(null,inst_37200));
var inst_37205__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37204__$1,inst_37197);
var state_37239__$1 = (function (){var statearr_37256 = state_37239;
(statearr_37256[(13)] = inst_37205__$1);

(statearr_37256[(11)] = inst_37204__$1);

return statearr_37256;
})();
if(inst_37205__$1){
var statearr_37257_37905 = state_37239__$1;
(statearr_37257_37905[(1)] = (8));

} else {
var statearr_37258_37906 = state_37239__$1;
(statearr_37258_37906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37240 === (14))){
var inst_37204 = (state_37239[(11)]);
var inst_37200 = (state_37239[(9)]);
var inst_37217 = (state_37239[(2)]);
var inst_37218 = [];
var inst_37219 = inst_37218.push(inst_37200);
var inst_37196 = inst_37218;
var inst_37197 = inst_37204;
var state_37239__$1 = (function (){var statearr_37259 = state_37239;
(statearr_37259[(7)] = inst_37196);

(statearr_37259[(14)] = inst_37217);

(statearr_37259[(15)] = inst_37219);

(statearr_37259[(8)] = inst_37197);

return statearr_37259;
})();
var statearr_37260_37907 = state_37239__$1;
(statearr_37260_37907[(2)] = null);

(statearr_37260_37907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37240 === (16))){
var state_37239__$1 = state_37239;
var statearr_37261_37908 = state_37239__$1;
(statearr_37261_37908[(2)] = null);

(statearr_37261_37908[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37240 === (10))){
var inst_37210 = (state_37239[(2)]);
var state_37239__$1 = state_37239;
if(cljs.core.truth_(inst_37210)){
var statearr_37262_37909 = state_37239__$1;
(statearr_37262_37909[(1)] = (11));

} else {
var statearr_37263_37910 = state_37239__$1;
(statearr_37263_37910[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37240 === (18))){
var inst_37229 = (state_37239[(2)]);
var state_37239__$1 = state_37239;
var statearr_37264_37911 = state_37239__$1;
(statearr_37264_37911[(2)] = inst_37229);

(statearr_37264_37911[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37240 === (8))){
var inst_37205 = (state_37239[(13)]);
var state_37239__$1 = state_37239;
var statearr_37265_37912 = state_37239__$1;
(statearr_37265_37912[(2)] = inst_37205);

(statearr_37265_37912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35689__auto__ = null;
var cljs$core$async$state_machine__35689__auto____0 = (function (){
var statearr_37266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37266[(0)] = cljs$core$async$state_machine__35689__auto__);

(statearr_37266[(1)] = (1));

return statearr_37266;
});
var cljs$core$async$state_machine__35689__auto____1 = (function (state_37239){
while(true){
var ret_value__35690__auto__ = (function (){try{while(true){
var result__35691__auto__ = switch__35688__auto__(state_37239);
if(cljs.core.keyword_identical_QMARK_(result__35691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35691__auto__;
}
break;
}
}catch (e37267){var ex__35692__auto__ = e37267;
var statearr_37268_37914 = state_37239;
(statearr_37268_37914[(2)] = ex__35692__auto__);


if(cljs.core.seq((state_37239[(4)]))){
var statearr_37269_37915 = state_37239;
(statearr_37269_37915[(1)] = cljs.core.first((state_37239[(4)])));

} else {
throw ex__35692__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37916 = state_37239;
state_37239 = G__37916;
continue;
} else {
return ret_value__35690__auto__;
}
break;
}
});
cljs$core$async$state_machine__35689__auto__ = function(state_37239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35689__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35689__auto____1.call(this,state_37239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35689__auto____0;
cljs$core$async$state_machine__35689__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35689__auto____1;
return cljs$core$async$state_machine__35689__auto__;
})()
})();
var state__35783__auto__ = (function (){var statearr_37270 = f__35782__auto__();
(statearr_37270[(6)] = c__35781__auto___37890);

return statearr_37270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35783__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
