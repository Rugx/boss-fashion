var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');




var _Landing=require('./application/components/Landing');var _Landing2=babelHelpers.interopRequireDefault(_Landing);
var _Dashboard=require('./application/components/Dashboard');var _Dashboard2=babelHelpers.interopRequireDefault(_Dashboard);
var _styles=require('./application/styles');var

boss=function(_Component){babelHelpers.inherits(boss,_Component);function boss(){babelHelpers.classCallCheck(this,boss);return babelHelpers.possibleConstructorReturn(this,(boss.__proto__||Object.getPrototypeOf(boss)).apply(this,arguments));}babelHelpers.createClass(boss,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.Navigator,{
style:_styles.globals.flex,
initialRoute:{name:'Landing'},
renderScene:function renderScene(route,navigator){
switch(route.name){
case'Landing':
return(
_react2.default.createElement(_Landing2.default,{navigator:navigator}));

case'Dashboard':
return(
_react2.default.createElement(_Dashboard2.default,{navigator:navigator}));}


}}));


}}]);return boss;}(_react.Component);


_reactNative.AppRegistry.registerComponent('boss',function(){return boss;});