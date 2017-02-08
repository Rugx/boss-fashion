Object.defineProperty(exports,"__esModule",{value:true});exports.Spinner=undefined;var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');

var Spinner=function Spinner(_ref){var size=_ref.size;
return(
_react2.default.createElement(_reactNative.View,{style:styles.spinnerStyle},
_react2.default.createElement(_reactNative.ActivityIndicator,{size:size||'large'})));


};

var styles={
spinnerStyle:{
flex:1,
justifyContent:'center',
alignItems:'center'}};exports.



Spinner=Spinner;