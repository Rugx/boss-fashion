Object.defineProperty(exports,"__esModule",{value:true});



var _EventTarget2=require('./EventTarget.js');var _EventTarget3=babelHelpers.interopRequireDefault(_EventTarget2);
var _log=require('../utils/log.js');var _log2=babelHelpers.interopRequireDefault(_log);

var log=new _log2.default('XMLHttpRequestEventTarget');

log.disable();var


XMLHttpRequestEventTarget=function(_EventTarget){babelHelpers.inherits(XMLHttpRequestEventTarget,_EventTarget);









function XMLHttpRequestEventTarget(){babelHelpers.classCallCheck(this,XMLHttpRequestEventTarget);var _this=babelHelpers.possibleConstructorReturn(this,(XMLHttpRequestEventTarget.__proto__||Object.getPrototypeOf(XMLHttpRequestEventTarget)).call(this));_this._onabort=function(){};_this._onerror=function(){};_this._onload=function(){};_this._onloadstart=function(){};_this._onprogress=function(){};_this._ontimeout=function(){};_this._onloadend=function(){};

log.info('constructor called');return _this;
}babelHelpers.createClass(XMLHttpRequestEventTarget,[{key:'dispatchEvent',value:function dispatchEvent(

event,e){
log.debug('dispatch event',event,e);
babelHelpers.get(XMLHttpRequestEventTarget.prototype.__proto__||Object.getPrototypeOf(XMLHttpRequestEventTarget.prototype),'dispatchEvent',this).call(this,event,e);
switch(event){
case'abort':
this._onabort(e);
break;
case'error':
this._onerror(e);
break;
case'load':
this._onload(e);
break;
case'loadstart':
this._onloadstart(e);
break;
case'loadend':
this._onloadend(e);
break;
case'progress':
this._onprogress(e);
break;
case'timeout':
this._ontimeout(e);
break;}

}},{key:'onabort',set:function set(

fn){
log.info('set onabort');
this._onabort=fn;
},get:function get()

{
return this._onabort;
}},{key:'onerror',set:function set(
fn){
log.info('set onerror');
this._onerror=fn;
},get:function get()

{
return this._onerror;
}},{key:'onload',set:function set(

fn){
log.info('set onload',fn);
this._onload=fn;
},get:function get()

{
return this._onload;
}},{key:'onloadstart',set:function set(

fn){
log.info('set onloadstart');
this._onloadstart=fn;
},get:function get()

{
return this._onloadstart;
}},{key:'onprogress',set:function set(

fn){
log.info('set onprogress');
this._onprogress=fn;
},get:function get()

{
return this._onprogress;
}},{key:'ontimeout',set:function set(

fn){
log.info('set ontimeout');
this._ontimeout=fn;
},get:function get()

{
return this._ontimeout;
}},{key:'onloadend',set:function set(

fn){
log.info('set onloadend');
this._onloadend=fn;
},get:function get()

{
return this._onloadend;
}}]);return XMLHttpRequestEventTarget;}(_EventTarget3.default);exports.default=XMLHttpRequestEventTarget;