Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');





var _styles=require('./styles');var _styles2=babelHelpers.interopRequireDefault(_styles);var

NavbarButton=function(_Component){babelHelpers.inherits(NavbarButton,_Component);function NavbarButton(){babelHelpers.classCallCheck(this,NavbarButton);return babelHelpers.possibleConstructorReturn(this,(NavbarButton.__proto__||Object.getPrototypeOf(NavbarButton)).apply(this,arguments));}babelHelpers.createClass(NavbarButton,[{key:'render',value:function render()
{var _props=
this.props,style=_props.style,tintColor=_props.tintColor,margin=_props.margin,title=_props.title,handler=_props.handler,disabled=_props.disabled;

return(
_react2.default.createElement(_reactNative.TouchableOpacity,{style:_styles2.default.navBarButton,onPress:handler,disabled:disabled},
_react2.default.createElement(_reactNative.View,{style:style},
_react2.default.createElement(_reactNative.Text,{style:[_styles2.default.navBarButtonText,{color:tintColor}]},title))));



}}]);return NavbarButton;}(_react.Component);NavbarButton.

propTypes={
style:_react.PropTypes.oneOfType([
_react.PropTypes.object,
_react.PropTypes.array]),

tintColor:_react.PropTypes.string,
title:_react.PropTypes.string,
handler:_react.PropTypes.func,
disabled:_react.PropTypes.bool};NavbarButton.


defaultProps={
style:{},
title:'',
tintColor:'#0076FF',
onPress:function onPress(){return{};}};exports.default=NavbarButton;