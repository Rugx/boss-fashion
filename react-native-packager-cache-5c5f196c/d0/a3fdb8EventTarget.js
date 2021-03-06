Object.defineProperty(exports,"__esModule",{value:true});



var _log=require('../utils/log.js');var _log2=babelHelpers.interopRequireDefault(_log);

var log=new _log2.default('EventTarget');

log.disable();var

EventTarget=function(){



function EventTarget(){babelHelpers.classCallCheck(this,EventTarget);
log.info('constructor called');
this.listeners={};
}babelHelpers.createClass(EventTarget,[{key:'addEventListener',value:function addEventListener(






type,cb){
log.info('add event listener',type,cb);
if(!(type in this.listeners)){
this.listeners[type]=[];
}
this.listeners[type].push(cb);
}},{key:'removeEventListener',value:function removeEventListener(







type,cb){
log.info('remove event listener',type,cb);
if(!(type in this.listeners))
return;
var handlers=this.listeners[type];
for(var i in handlers){
if(cb===handlers[i]){
handlers.splice(i,1);
return this.removeEventListener(type,cb);
}
}
}},{key:'dispatchEvent',value:function dispatchEvent(






type,event){
log.info('dispatch event',event);
if(!(type in this.listeners))
return;
var handlers=this.listeners[type];
for(var i in handlers){
handlers[i].call(this,event);
}

}},{key:'clearEventListeners',value:function clearEventListeners()






{
for(var i in this.listeners){
delete this.listeners[i];
}
}}]);return EventTarget;}();exports.default=EventTarget;