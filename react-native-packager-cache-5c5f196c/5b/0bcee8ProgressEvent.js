Object.defineProperty(exports,"__esModule",{value:true});



var _Event2=require('./Event');var _Event3=babelHelpers.interopRequireDefault(_Event2);var

ProgressEvent=function(_Event){babelHelpers.inherits(ProgressEvent,_Event);





function ProgressEvent(lengthComputable,loaded,total){babelHelpers.classCallCheck(this,ProgressEvent);var _this=babelHelpers.possibleConstructorReturn(this,(ProgressEvent.__proto__||Object.getPrototypeOf(ProgressEvent)).call(this));_this._lengthComputable=false;_this._loaded=-1;_this._total=-1;

_this._lengthComputable=lengthComputable;
_this._loaded=loaded;
_this._total=total;return _this;
}babelHelpers.createClass(ProgressEvent,[{key:'lengthComputable',get:function get()

{
return this._lengthComputable;
}},{key:'loaded',get:function get()

{
return this._loaded;
}},{key:'total',get:function get()

{
return this._total;
}}]);return ProgressEvent;}(_Event3.default);exports.default=ProgressEvent;