Object.defineProperty(exports,"__esModule",{value:true});



var _fs=require('../fs.js');var _fs2=babelHelpers.interopRequireDefault(_fs);
var _Blob2=require('./Blob.js');var _Blob3=babelHelpers.interopRequireDefault(_Blob2);var

File=function(_Blob){babelHelpers.inherits(File,_Blob);babelHelpers.createClass(File,null,[{key:'build',value:function build(



name,data,cType){
return new Promise(function(resolve,reject){
new File(data,cType).onCreated(function(f){
f.name=name;
resolve(f);
});
});
}}]);

function File(data,cType){babelHelpers.classCallCheck(this,File);var _this=babelHelpers.possibleConstructorReturn(this,(File.__proto__||Object.getPrototypeOf(File)).call(this,
data,cType));_this.name='';return _this;
}return File;}(_Blob3.default);exports.default=File;