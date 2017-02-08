Object.defineProperty(exports,"__esModule",{value:true});



var _reactNative=require('react-native');





var RNFetchBlob=_reactNative.NativeModules.RNFetchBlob;
var emitter=_reactNative.DeviceEventEmitter;var

RNFetchBlobWriteStream=function(){





function RNFetchBlobWriteStream(streamId,encoding,append){babelHelpers.classCallCheck(this,RNFetchBlobWriteStream);
this.id=streamId;
this.encoding=encoding;
this.append=append;
}babelHelpers.createClass(RNFetchBlobWriteStream,[{key:'write',value:function write(

data){var _this=this;
return new Promise(function(resolve,reject){
try{
var method=_this.encoding==='ascii'?'writeArrayChunk':'writeChunk';
if(_this.encoding.toLocaleLowerCase()==='ascii'&&!Array.isArray(data)){
reject('ascii input data must be an Array');
return;
}
RNFetchBlob[method](_this.id,data,function(error){
if(error)
reject(error);else

resolve();
});
}catch(err){
reject(err);
}
});
}},{key:'close',value:function close()

{var _this2=this;
return new Promise(function(resolve,reject){
try{
RNFetchBlob.closeStream(_this2.id,function(){
resolve();
});
}catch(err){
reject(err);
}
});
}}]);return RNFetchBlobWriteStream;}();exports.default=RNFetchBlobWriteStream;