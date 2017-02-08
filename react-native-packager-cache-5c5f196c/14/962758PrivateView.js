Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');





var _Ionicons=require('react-native-vector-icons/Ionicons');var _Ionicons2=babelHelpers.interopRequireDefault(_Ionicons);
var _reactNativeNavbar=require('react-native-navbar');var _reactNativeNavbar2=babelHelpers.interopRequireDefault(_reactNativeNavbar);
var _colors=require('../../styles/colors');var _colors2=babelHelpers.interopRequireDefault(_colors);
var _styles=require('../../styles');

var _Contacts=require('./Contacts');var _Contacts2=babelHelpers.interopRequireDefault(_Contacts);var

PrivateView=function(_Component){babelHelpers.inherits(PrivateView,_Component);function PrivateView(){babelHelpers.classCallCheck(this,PrivateView);return babelHelpers.possibleConstructorReturn(this,(PrivateView.__proto__||Object.getPrototypeOf(PrivateView)).apply(this,arguments));}babelHelpers.createClass(PrivateView,[{key:'render',value:function render()
{
var titleConfig={title:'Private',tintColor:'white'};
return(
_react2.default.createElement(_reactNative.View,{style:_styles.globals.flexContainer},
_react2.default.createElement(_reactNativeNavbar2.default,{
title:titleConfig,
tintColor:_colors2.default.brandPrimary}),

_react2.default.createElement(_reactNative.ScrollView,null,
_react2.default.createElement(_Contacts2.default,null))));



}}]);return PrivateView;}(_react.Component);exports.default=


PrivateView;