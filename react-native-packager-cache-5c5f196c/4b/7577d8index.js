var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');







var _NavbarButton=require('./NavbarButton');var _NavbarButton2=babelHelpers.interopRequireDefault(_NavbarButton);
var _styles=require('./styles');var _styles2=babelHelpers.interopRequireDefault(_styles);

var ButtonShape={
title:_react.PropTypes.string.isRequired,
style:_react.PropTypes.any,
handler:_react.PropTypes.func,
disabled:_react.PropTypes.bool};


var TitleShape={
title:_react.PropTypes.string.isRequired,
style:_react.PropTypes.oneOfType([_react.PropTypes.object,_react.PropTypes.array,_react.PropTypes.number]),
tintColor:_react.PropTypes.string};


var StatusBarShape={
style:_react.PropTypes.oneOf(['light-content','default']),
hidden:_react.PropTypes.bool,
tintColor:_react.PropTypes.string,
animated:_react.PropTypes.bool,
hideAnimation:_react.PropTypes.oneOf(['fade','slide','none']),
showAnimation:_react.PropTypes.oneOf(['fade','slide','none'])};


function customizeStatusBar(data){
if(_reactNative.Platform.OS==='ios'){
var animated=data.animated||NavigationBar.defaultProps.statusBar.animated;
if(data.style){
_reactNative.StatusBar.setBarStyle(data.style,animated);
}
if(data.hidden!==undefined){
var showHideTransition='none';
if(animated){
showHideTransition=data.hidden?
data.hideAnimation||NavigationBar.defaultProps.statusBar.hideAnimation:
data.showAnimation||NavigationBar.defaultProps.statusBar.showAnimation;
}
_reactNative.StatusBar.setHidden(data.hidden,showHideTransition);
}
}
}var

NavigationBar=function(_Component){babelHelpers.inherits(NavigationBar,_Component);function NavigationBar(){babelHelpers.classCallCheck(this,NavigationBar);return babelHelpers.possibleConstructorReturn(this,(NavigationBar.__proto__||Object.getPrototypeOf(NavigationBar)).apply(this,arguments));}babelHelpers.createClass(NavigationBar,[{key:'componentDidMount',value:function componentDidMount()
{
customizeStatusBar(this.props.statusBar);
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

props){
customizeStatusBar(props.statusBar);
}},{key:'getButtonElement',value:function getButtonElement()

{var data=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var style=arguments[1];
return(
_react2.default.createElement(_reactNative.View,{style:_styles2.default.navBarButtonContainer},
!!data.props?data:
_react2.default.createElement(_NavbarButton2.default,{
title:data.title,
style:[data.style,style],
tintColor:data.tintColor,
handler:data.handler,
disabled:data.disabled})));




}},{key:'getTitleElement',value:function getTitleElement(

data){
if(!!data.props){
return _react2.default.createElement(_reactNative.View,{style:_styles2.default.customTitle},data);
}

var colorStyle=data.tintColor?{color:data.tintColor}:null;
var style=data.style?data.style:_styles2.default.navBarTitleText;

return(
_react2.default.createElement(_reactNative.View,{style:_styles2.default.navBarTitleContainer},
_react2.default.createElement(_reactNative.Text,{
style:[style,colorStyle]},
data.title)));



}},{key:'render',value:function render()

{
var customTintColor=this.props.tintColor?
{backgroundColor:this.props.tintColor}:null;

var customStatusBarTintColor=this.props.statusBar.tintColor?
{backgroundColor:this.props.statusBar.tintColor}:null;

var statusBar=null;

if(_reactNative.Platform.OS==='ios'){
statusBar=!this.props.statusBar.hidden?
_react2.default.createElement(_reactNative.View,{style:[_styles2.default.statusBar,customStatusBarTintColor]}):null;
}

return(
_react2.default.createElement(_reactNative.View,{style:[_styles2.default.navBarContainer,customTintColor]},
statusBar,
_react2.default.createElement(_reactNative.View,{style:[_styles2.default.navBar,this.props.style]},
this.getTitleElement(this.props.title),
this.getButtonElement(this.props.leftButton,{marginLeft:8}),
this.getButtonElement(this.props.rightButton,{marginRight:8}))));



}}]);return NavigationBar;}(_react.Component);NavigationBar.

propTypes={
tintColor:_react.PropTypes.string,
statusBar:_react.PropTypes.shape(StatusBarShape),
leftButton:_react.PropTypes.oneOfType([
_react.PropTypes.shape(ButtonShape),
_react.PropTypes.element]),

rightButton:_react.PropTypes.oneOfType([
_react.PropTypes.shape(ButtonShape),
_react.PropTypes.element]),

title:_react.PropTypes.oneOfType([
_react.PropTypes.shape(TitleShape),
_react.PropTypes.element])};NavigationBar.



defaultProps={
statusBar:{
style:'default',
hidden:false,
animated:false,
hideAnimation:'slide',
showAnimation:'slide'},

title:{
title:''}};



module.exports=NavigationBar;