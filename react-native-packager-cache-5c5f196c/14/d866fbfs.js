Object.defineProperty(exports,"__esModule",{value:true});



var _reactNative=require('react-native');





var _RNFetchBlobSession=require('./class/RNFetchBlobSession');var _RNFetchBlobSession2=babelHelpers.interopRequireDefault(_RNFetchBlobSession);
var _RNFetchBlobWriteStream=require('./class/RNFetchBlobWriteStream');var _RNFetchBlobWriteStream2=babelHelpers.interopRequireDefault(_RNFetchBlobWriteStream);
var _RNFetchBlobReadStream=require('./class/RNFetchBlobReadStream');var _RNFetchBlobReadStream2=babelHelpers.interopRequireDefault(_RNFetchBlobReadStream);
var _RNFetchBlobFile=require('./class/RNFetchBlobFile');var _RNFetchBlobFile2=babelHelpers.interopRequireDefault(_RNFetchBlobFile);






var RNFetchBlob=_reactNative.NativeModules.RNFetchBlob;
var emitter=_reactNative.DeviceEventEmitter;
var dirs={
DocumentDir:RNFetchBlob.DocumentDir,
CacheDir:RNFetchBlob.CacheDir,
PictureDir:RNFetchBlob.PictureDir,
MusicDir:RNFetchBlob.MusicDir,
MovieDir:RNFetchBlob.MovieDir,
DownloadDir:RNFetchBlob.DownloadDir,
DCIMDir:RNFetchBlob.DCIMDir,
SDCardDir:RNFetchBlob.SDCardDir,
MainBundleDir:RNFetchBlob.MainBundleDir};







function session(name){
var s=_RNFetchBlobSession2.default.getSession(name);
if(s)
return new _RNFetchBlobSession2.default(name);else
{
_RNFetchBlobSession2.default.setSession(name,[]);
return new _RNFetchBlobSession2.default(name,[]);
}
}

function asset(path){
if(_reactNative.Platform.OS==='ios'){

if(/^assets-library\:\/\//.test(path))
return path;
}
return'bundle-assets://'+path;
}

function createFile(path,data,encoding){
encoding=encoding||'utf8';
return new Promise(function(resolve,reject){
var handler=function handler(err){
if(err)
reject(new Error(err));else

resolve();
};
if(encoding.toLowerCase()==='ascii'){
if(Array.isArray(data))
RNFetchBlob.createFileASCII(path,data,handler);else

reject(new Error('`data` of ASCII file must be an array contains numbers'));
}else
{
RNFetchBlob.createFile(path,data,encoding,handler);
}
});
}








function writeStream(
path,
encoding,
append)
{
if(!path)
throw Error('RNFetchBlob could not open file stream with empty `path`');
encoding=encoding||'utf8';
append=append||false;
return new Promise(function(resolve,reject){
RNFetchBlob.writeStream(path,encoding||'base64',append||false,function(err,streamId){
if(err)
reject(new Error(err));else

resolve(new _RNFetchBlobWriteStream2.default(streamId,encoding));
});
});
}








function readStream(
path,
encoding,
bufferSize)

{var tick=arguments.length>3&&arguments[3]!==undefined?arguments[3]:10;
return Promise.resolve(new _RNFetchBlobReadStream2.default(path,encoding,bufferSize,tick));
}






function mkdir(path){

return new Promise(function(resolve,reject){
RNFetchBlob.mkdir(path,function(err,res){
if(err)
reject(new Error(err));else

resolve();
});
});

}







function readFile(path,encoding,bufferSize){
if(typeof path!=='string')
return Promise.reject(new Error('Invalid argument "path" '));
return RNFetchBlob.readFile(path,encoding);
}








function writeFile(path,data,encoding){
encoding=encoding||'utf8';
if(typeof path!=='string')
return Promise.reject('Invalid argument "path" ');
if(encoding.toLocaleLowerCase()==='ascii'){
if(!Array.isArray(data))
Promise.reject(new Error('Expected "data" is an Array when encoding is "ascii", however got '+typeof data));else

return RNFetchBlob.writeFileArray(path,data,false);
}else{
if(typeof data!=='string')
Promise.reject(new Error('Expected "data" is a String when encoding is "utf8" or "base64", however got '+typeof data));else

return RNFetchBlob.writeFile(path,encoding,data,false);
}
}

function appendFile(path,data,encoding){
encoding=encoding||'utf8';
if(typeof path!=='string')
return Promise.reject('Invalid argument "path" ');
if(encoding.toLocaleLowerCase()==='ascii'){
if(!Array.isArray(data))
Promise.reject(new Error('Expected "data" is an Array when encoding is "ascii", however got '+typeof data));else

return RNFetchBlob.writeFileArray(path,data,true);
}else{
if(typeof data!=='string')
Promise.reject(new Error('Expected "data" is a String when encoding is "utf8" or "base64", however got '+typeof data));else

return RNFetchBlob.writeFile(path,encoding,data,true);
}
}






function stat(path){
return new Promise(function(resolve,reject){
RNFetchBlob.stat(path,function(err,stat){
if(err)
reject(new Error(err));else
{
if(stat)
stat.lastModified=parseInt(stat.lastModified);
resolve(stat);
}
});
});
}






function scanFile(pairs){
return new Promise(function(resolve,reject){
RNFetchBlob.scanFile(pairs,function(err){
if(err)
reject(new Error(err));else

resolve();
});
});
}

function cp(path,dest){
return new Promise(function(resolve,reject){
RNFetchBlob.cp(path,dest,function(err,res){
if(err)
reject(new Error(err));else

resolve(res);
});
});
}

function mv(path,dest){
return new Promise(function(resolve,reject){
RNFetchBlob.mv(path,dest,function(err,res){
if(err)
reject(new Error(err));else

resolve(res);
});
});
}

function lstat(path){
return new Promise(function(resolve,reject){
RNFetchBlob.lstat(path,function(err,stat){
if(err)
reject(new Error(err));else

resolve(stat);
});
});
}

function ls(path){
return new Promise(function(resolve,reject){
RNFetchBlob.ls(path,function(err,res){
if(err)
reject(new Error(err));else

resolve(res);
});
});
}






function unlink(path){
return new Promise(function(resolve,reject){
RNFetchBlob.unlink(path,function(err){
if(err){
reject(new Error(err));
}else

resolve();
});
});
}






function exists(path){

return new Promise(function(resolve,reject){
try{
RNFetchBlob.exists(path,function(exist){
resolve(exist);
});
}catch(err){
reject(new Error(err));
}
});

}

function slice(src,dest,start,end){
var p=Promise.resolve();
var size=0;
function normalize(num,size){
if(num<0)
return Math.max(0,size+num);
if(!num&&num!==0)
return size;
return num;
}
if(start<0||end<0||!start||!end){
p=p.then(function(){return stat(src);}).
then(function(stat){
size=Math.floor(stat.size);
start=normalize(start||0,size);
end=normalize(end,size);
return Promise.resolve();
});
}
return p.then(function(){return RNFetchBlob.slice(src,dest,start,end);});
}

function isDir(path){

return new Promise(function(resolve,reject){
try{
RNFetchBlob.exists(path,function(exist,isDir){
resolve(isDir);
});
}catch(err){
reject(new Error(err));
}
});

}

function df(){
return new Promise(function(resolve,reject){
RNFetchBlob.df(function(err,stat){
if(err)
reject(err);else

resolve(stat);
});
});
}exports.default=

{
RNFetchBlobSession:_RNFetchBlobSession2.default,
unlink:unlink,
mkdir:mkdir,
session:session,
ls:ls,
readStream:readStream,
mv:mv,
cp:cp,
writeStream:writeStream,
writeFile:writeFile,
appendFile:appendFile,
readFile:readFile,
exists:exists,
createFile:createFile,
isDir:isDir,
stat:stat,
lstat:lstat,
scanFile:scanFile,
dirs:dirs,
slice:slice,
asset:asset,
df:df};