Object.defineProperty(exports,"__esModule",{value:true});var _index=require('../index.js');var _index2=babelHelpers.interopRequireDefault(_index);
var _log=require('../utils/log.js');var _log2=babelHelpers.interopRequireDefault(_log);
var _fs=require('../fs');var _fs2=babelHelpers.interopRequireDefault(_fs);
var _unicode=require('../utils/unicode');var _unicode2=babelHelpers.interopRequireDefault(_unicode);
var _Blob=require('./Blob');var _Blob2=babelHelpers.interopRequireDefault(_Blob);

var log=new _log2.default('FetchPolyfill');

log.disable();var


Fetch=

function Fetch(config){babelHelpers.classCallCheck(this,Fetch);
babelHelpers.extends(this,new RNFetchBlobFetchPolyfill(config));
};exports.default=Fetch;var



RNFetchBlobFetchPolyfill=

function RNFetchBlobFetchPolyfill(config){babelHelpers.classCallCheck(this,RNFetchBlobFetchPolyfill);
this.build=function(){return function(url){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

var body=options.body;
var promise=Promise.resolve();
var blobCache=null;

options.headers=options.headers||{};
var ctype=options['Content-Type']||options['content-type'];
var ctypeH=options.headers['Content-Type']||options.headers['content-type'];
options.headers['Content-Type']=ctype||ctypeH;
options.headers['content-type']=ctype||ctypeH;
options.method=options.method||'GET';

if(body){


if(body instanceof FormData){
log.verbose('convert FormData to blob body');
promise=_Blob2.default.build(body).then(function(b){
blobCache=b;
options.headers['Content-Type']='multipart/form-data;boundary='+b.multipartBoundary;
return Promise.resolve(_index2.default.wrap(b._ref));
});
}else

if(body.isRNFetchBlobPolyfill)
promise=Promise.resolve(_index2.default.wrap(body.blobPath));else
if(typeof body!=='object'&&options.headers['Content-Type']!=='application/json')
promise=Promise.resolve(JSON.stringify(body));else
if(typeof body!=='string')
promise=Promise.resolve(body.toString());else


promise=Promise.resolve(body);
}




var task=promise.
then(function(body){
return _index2.default.config(config).
fetch(options.method,url,options.headers,body);
});

var statefulPromise=task.then(function(resp){
log.verbose('response',resp);

if(blobCache!==null&&blobCache instanceof _Blob2.default)
blobCache.close();
return Promise.resolve(new RNFetchBlobFetchRepsonse(resp));
});


statefulPromise.cancel=task.cancel;
statefulPromise.progress=task.progress;
statefulPromise.uploadProgress=task.uploadProgress;

return statefulPromise;

};};
};var



RNFetchBlobFetchRepsonse=function(){

function RNFetchBlobFetchRepsonse(resp){babelHelpers.classCallCheck(this,RNFetchBlobFetchRepsonse);
var info=resp.info();
this.headers=info.headers;
this.ok=info.status>=200&&info.status<=299,
this.status=info.status;
this.type='basic';
this.bodyUsed=false;
this.resp=resp;
this.rnfbRespInfo=info;
this.rnfbResp=resp;
}babelHelpers.createClass(RNFetchBlobFetchRepsonse,[{key:'rawResp',value:function rawResp()

{
return Promise.resolve(this.rnfbResp);
}},{key:'arrayBuffer',value:function arrayBuffer()

{
log.verbose('to arrayBuffer',this.rnfbRespInfo);
this.bodyUsed=true;
return readArrayBuffer(this.rnfbResp,this.rnfbRespInfo);
}},{key:'text',value:function text()

{
log.verbose('to text',this.rnfbResp,this.rnfbRespInfo);
this.bodyUsed=true;
return readText(this.rnfbResp,this.rnfbRespInfo);
}},{key:'json',value:function json()

{
log.verbose('to json',this.rnfbResp,this.rnfbRespInfo);
this.bodyUsed=true;
return readJSON(this.rnfbResp,this.rnfbRespInfo);
}},{key:'blob',value:function blob()

{
log.verbose('to blob',this.rnfbResp,this.rnfbRespInfo);
this.bodyUsed=true;
return readBlob(this.rnfbResp,this.rnfbRespInfo);
}}]);return RNFetchBlobFetchRepsonse;}();








function readArrayBuffer(resp,info){
switch(info.rnfbEncode){
case'path':
return resp.readFile('ascii');
break;
default:
var buffer=[];
var str=resp.text();
for(var i in str){
buffer[i]=str.charCodeAt(i);
}
return Promise.resolve(buffer);
break;}

}







function readText(resp,info){
switch(info.rnfbEncode){
case'base64':
return Promise.resolve(resp.text());
break;
case'path':
return resp.text();
break;
default:
return Promise.resolve(resp.text());
break;}

}








function readBlob(resp,info){
log.verbose('readBlob',resp,info);
return resp.blob();
}







function readJSON(resp,info){
log.verbose('readJSON',resp,info);
switch(info.rnfbEncode){
case'base64':
return Promise.resolve(resp.json());
case'path':
return resp.json();
default:
return Promise.resolve(resp.json());}

}