Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');




var _Ionicons=require('react-native-vector-icons/Ionicons');var _Ionicons2=babelHelpers.interopRequireDefault(_Ionicons);
var _reactNativeNavbar=require('react-native-navbar');var _reactNativeNavbar2=babelHelpers.interopRequireDefault(_reactNativeNavbar);
var _colors=require('../../styles/colors');var _colors2=babelHelpers.interopRequireDefault(_colors);
var _styles=require('../../styles');var

GroupsView=function(_Component){babelHelpers.inherits(GroupsView,_Component);function GroupsView(){babelHelpers.classCallCheck(this,GroupsView);return babelHelpers.possibleConstructorReturn(this,(GroupsView.__proto__||Object.getPrototypeOf(GroupsView)).apply(this,arguments));}babelHelpers.createClass(GroupsView,[{key:'render',value:function render()
{
var titleConfig={title:'Home',tintColor:'white'};
return(
_react2.default.createElement(_reactNative.View,{style:_styles.globals.flexContainer},
_react2.default.createElement(_reactNativeNavbar2.default,{
title:titleConfig,
tintColor:_colors2.default.brandPrimary}),

_react2.default.createElement(_reactNative.View,{style:_styles.globals.flexCenter},
_react2.default.createElement(_reactNative.Text,{style:_styles.globals.h2},'This is the GroupsView'))));





}}]);return GroupsView;}(_react.Component);exports.default=


GroupsView;