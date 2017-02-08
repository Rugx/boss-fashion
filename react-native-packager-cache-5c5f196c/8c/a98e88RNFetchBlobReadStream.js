Object.defineProperty(exports,"__esModule",{value:true});



var _reactNative=require('react-native');




var _uuid=require('../utils/uuid');var _uuid2=babelHelpers.interopRequireDefault(_uuid);

var RNFetchBlob=_reactNative.NativeModules.RNFetchBlob;
var emitter=_reactNative.DeviceEventEmitter;var

RNFetchBlobReadStream=function(){







function RNFetchBlobReadStream(path,encoding,bufferSize,tick){var _this=this;babelHelpers.classCallCheck(this,RNFetchBlobReadStream);this.tick=10;
if(!path)
throw Error('RNFetchBlob could not open file stream with empty `path`');
this.encoding=encoding||'utf8';
this.bufferSize=bufferSize;
this.path=path;
this.closed=false;
this.tick=tick;
this._onData=function(){};
this._onEnd=function(){};
this._onError=function(){};
this.streamId='RNFBRS'+(0,_uuid2.default)();


var subscription=emitter.addListener(this.streamId,function(e){var
event=e.event,detail=e.detail;
if(_this._onData&&event==='data'){
_this._onData(detail);
return;
}else
if(_this._onEnd&&event==='end'){
_this._onEnd(detail);
}else
{
if(_this._onError)
_this._onError(detail);else

throw new Error(detail);
}

if(event==='error'||event==='end'){
subscription.remove();
_this.closed=true;
}
});

}babelHelpers.createClass(RNFetchBlobReadStream,[{key:'open',value:function open()

{
if(!this.closed)
RNFetchBlob.readStream(this.path,this.encoding,this.bufferSize||10240,this.tick||-1,this.streamId);else

throw new Error('Stream closed');
}},{key:'onData',value:function onData(

fn){
this._onData=fn;
}},{key:'onError',value:function onError(

fn){
this._onError=fn;
}},{key:'onEnd',value:function onEnd(

fn){
this._onEnd=fn;
}}]);return RNFetchBlobReadStream;}();exports.default=RNFetchBlobReadStream;