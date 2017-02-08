Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');








var _Ionicons=require('react-native-vector-icons/Ionicons');var _Ionicons2=babelHelpers.interopRequireDefault(_Ionicons);
var _reactNativeNavbar=require('react-native-navbar');var _reactNativeNavbar2=babelHelpers.interopRequireDefault(_reactNativeNavbar);
var _colors=require('../../styles/colors');var _colors2=babelHelpers.interopRequireDefault(_colors);
var _styles=require('../../styles');

var _Swipe=require('./Swipe');var _Swipe2=babelHelpers.interopRequireDefault(_Swipe);var

SearchView=function(_Component){babelHelpers.inherits(SearchView,_Component);function SearchView(){babelHelpers.classCallCheck(this,SearchView);return babelHelpers.possibleConstructorReturn(this,(SearchView.__proto__||Object.getPrototypeOf(SearchView)).apply(this,arguments));}babelHelpers.createClass(SearchView,[{key:'render',value:function render()
{
var titleConfig={title:'Search',tintColor:'white'};
return(
_react2.default.createElement(_reactNative.View,{style:_styles.globals.flexContainer},
_react2.default.createElement(_reactNativeNavbar2.default,{
title:titleConfig,
tintColor:_colors2.default.brandPrimary}),

_react2.default.createElement(_reactNative.ScrollView,null,
_react2.default.createElement(_Swipe2.default,null))));



}}]);return SearchView;}(_react.Component);exports.default=


SearchView;