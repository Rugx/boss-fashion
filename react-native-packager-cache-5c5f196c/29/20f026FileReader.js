Object.defineProperty(exports,"__esModule",{value:true});



var _index=require('../index.js');var _index2=babelHelpers.interopRequireDefault(_index);
var _ProgressEvent=require('./ProgressEvent.js');var _ProgressEvent2=babelHelpers.interopRequireDefault(_ProgressEvent);
var _EventTarget2=require('./EventTarget');var _EventTarget3=babelHelpers.interopRequireDefault(_EventTarget2);
var _Blob=require('./Blob');var _Blob2=babelHelpers.interopRequireDefault(_Blob);
var _log=require('../utils/log.js');var _log2=babelHelpers.interopRequireDefault(_log);
var _fs=require('../fs');var _fs2=babelHelpers.interopRequireDefault(_fs);

var log=new _log2.default('FileReader');

log.level(3);var

FileReader=function(_EventTarget){babelHelpers.inherits(FileReader,_EventTarget);babelHelpers.createClass(FileReader,[{key:'isRNFBPolyFill',get:function get()
















{return true;}}],[{key:'EMPTY',get:function get(){return 0;}},{key:'LOADING',get:function get(){return 1;}},{key:'DONE',get:function get(){return 2;}}]);









function FileReader(){babelHelpers.classCallCheck(this,FileReader);var _this=babelHelpers.possibleConstructorReturn(this,(FileReader.__proto__||Object.getPrototypeOf(FileReader)).call(this));_this._readState=0;

log.verbose('file reader const');
_this._result=null;return _this;
}babelHelpers.createClass(FileReader,[{key:'abort',value:function abort()

{
log.verbose('abort',b,label);
}},{key:'readAsArrayBuffer',value:function readAsArrayBuffer(

b){
log.verbose('readAsArrayBuffer',b,label);
}},{key:'readAsBinaryString',value:function readAsBinaryString(

b){
log.verbose('readAsBinaryString',b,label);
}},{key:'readAsText',value:function readAsText(

b,label){
log.verbose('readAsText',b,label);
}},{key:'readAsDataURL',value:function readAsDataURL(

b){
log.verbose('readAsDataURL',b,label);
}},{key:'dispatchEvent',value:function dispatchEvent(

event,e){
log.verbose('dispatch event',event,e);
babelHelpers.get(FileReader.prototype.__proto__||Object.getPrototypeOf(FileReader.prototype),'dispatchEvent',this).call(this,event,e);
if(typeof this['on'+event]==='function'){
this['on'+event](e);
}
}},{key:'readState',get:function get()





{
return this._readyState;
}},{key:'result',get:function get()

{
return this._result;
}}]);return FileReader;}(_EventTarget3.default);exports.default=FileReader;