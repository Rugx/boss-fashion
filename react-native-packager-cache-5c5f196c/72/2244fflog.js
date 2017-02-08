Object.defineProperty(exports,"__esModule",{value:true});var Log=function(){





function Log(name){babelHelpers.classCallCheck(this,Log);this._isEnable=true;this._level=0;
this._name=name;
}babelHelpers.createClass(Log,[{key:'level',value:function level(

val){
this._isEnable=true;
this._level=val;
}},{key:'enable',value:function enable()

{
this._isEnable=true;
}},{key:'disable',value:function disable()

{
this._isEnable=false;
}},{key:'verbose',value:function verbose()

{var _console;for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}
this._isEnable&&this._level>2&&(_console=console).log.apply(_console,[this._name,'verbose:'].concat(args));
}},{key:'debug',value:function debug()

{var _console2;for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}
this._isEnable&&this._level>1&&(_console2=console).log.apply(_console2,[this._name,'debug:'].concat(args));
}},{key:'info',value:function info()

{var _console3;for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3];}
this._isEnable&&this._level>0&&(_console3=console).log.apply(_console3,[this._name,'info:'].concat(args));
}},{key:'error',value:function error()

{var _console4;for(var _len4=arguments.length,args=Array(_len4),_key4=0;_key4<_len4;_key4++){args[_key4]=arguments[_key4];}
this._isEnable&&this._level>-1&&(_console4=console).warn.apply(_console4,[this._name,'error:'].concat(args));
}}]);return Log;}();exports.default=Log;