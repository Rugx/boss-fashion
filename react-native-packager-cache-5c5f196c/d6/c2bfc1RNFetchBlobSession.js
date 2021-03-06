Object.defineProperty(exports,"__esModule",{value:true});



var _reactNative=require('react-native');





var RNFetchBlob=_reactNative.NativeModules.RNFetchBlob;
var emitter=_reactNative.DeviceEventEmitter;

var sessions={};var

RNFetchBlobSession=function(){babelHelpers.createClass(RNFetchBlobSession,null,[{key:'getSession',value:function getSession(







name){
return sessions[name];
}},{key:'setSession',value:function setSession(

name,val){
sessions[name]=val;
}},{key:'removeSession',value:function removeSession(

name){
delete sessions[name];
}}]);

function RNFetchBlobSession(name,list){babelHelpers.classCallCheck(this,RNFetchBlobSession);
this.name=name;
if(!sessions[name]){
if(Array.isArray(list))
sessions[name]=list;else

sessions[name]=[];
}
}babelHelpers.createClass(RNFetchBlobSession,[{key:'add',value:function add(

path){
sessions[this.name].push(path);
return this;
}},{key:'remove',value:function remove(

path){
var list=sessions[this.name];
for(var i in list){
if(list[i]===path){
sessions[this.name].splice(i,1);
break;
}
}
return this;
}},{key:'list',value:function list()

{
return sessions[this.name];
}},{key:'dispose',value:function dispose()

{var _this=this;
return new Promise(function(resolve,reject){
RNFetchBlob.removeSession(sessions[_this.name],function(err){
if(err)
reject(err);else
{
delete sessions[_this.name];
resolve();
}
});
});
}}]);return RNFetchBlobSession;}();exports.default=RNFetchBlobSession;