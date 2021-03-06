Object.defineProperty(exports,"__esModule",{value:true});var _oboeBrowserMin=require('./lib/oboe-browser.min.js');var _oboeBrowserMin2=babelHelpers.interopRequireDefault(_oboeBrowserMin);
var _XMLHttpRequest=require('./polyfill/XMLHttpRequest');var _XMLHttpRequest2=babelHelpers.interopRequireDefault(_XMLHttpRequest);
var _uri=require('./utils/uri');var _uri2=babelHelpers.interopRequireDefault(_uri);

var OboeExtended=function OboeExtended(arg){


window.location='';

if(!window.XMLHttpRequest.isRNFBPolyfill){
window.XMLHttpRequest=_XMLHttpRequest2.default;
console.warn('Use JSONStream will automatically replace window.XMLHttpRequest with RNFetchBlob.polyfill.XMLHttpRequest. You are seeing this warning because you did not replace it maually.');
}

if(typeof arg==='string'){
if(_uri2.default.isFileURI(arg)){
arg={
url:'JSONStream://'+arg,
headers:{noCache:true}};

}else

arg='JSONStream://'+arg;

}else
if(typeof arg==='object'){
var headers=arg.headers||{};
if(_uri2.default.isFileURI(arg.url)){
headers.noCache=true;
}
arg=babelHelpers.extends(arg,{
url:'JSONStream://'+arg.url,
headers:headers});

}
return(0,_oboeBrowserMin2.default)(arg);
};exports.default=

OboeExtended;