Object.defineProperty(exports,"__esModule",{value:true});var _MaterialIcons=require('react-native-vector-icons/MaterialIcons');var _MaterialIcons2=babelHelpers.interopRequireDefault(_MaterialIcons);
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');







var _colors=require('../styles/colors');var _colors2=babelHelpers.interopRequireDefault(_colors);
var _styles=require('../styles');
var _RenderLogin=require('./login/RenderLogin');var _RenderLogin2=babelHelpers.interopRequireDefault(_RenderLogin);

var BackgroundImage=require('../images/asianfashion.jpeg');
var styles=_styles.landingStyles;var

Landing=function(_Component){babelHelpers.inherits(Landing,_Component);
function Landing(){babelHelpers.classCallCheck(this,Landing);var _this=babelHelpers.possibleConstructorReturn(this,(Landing.__proto__||Object.getPrototypeOf(Landing)).call(this));

_this.visitDashboard=_this.visitDashboard.bind(_this);return _this;
}babelHelpers.createClass(Landing,[{key:'visitDashboard',value:function visitDashboard(
loggedIn){
if(loggedIn===true){
this.props.navigator.push({name:'Dashboard'});
}
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.Image,{
style:styles.backgroundImage,
source:BackgroundImage})),



_react2.default.createElement(_reactNative.ScrollView,null,

_react2.default.createElement(_reactNative.View,{style:_styles.globals.flexCenter},

_react2.default.createElement(_reactNative.Text,{style:[_styles.globals.lightText,_styles.globals.h2,_styles.globals.mb2]},'BoBo'),



_react2.default.createElement(_reactNative.Text,{style:[_styles.globals.lightText,_styles.globals.h4]},'Wear your style with CONFIDENCE.')),






_react2.default.createElement(_reactNative.TouchableOpacity,{
style:_styles.globals.button},

_react2.default.createElement(_MaterialIcons2.default,{name:'ios-person',size:36,color:'white'}),
_react2.default.createElement(_RenderLogin2.default,{childDashboard:this.visitDashboard})))));






}}]);return Landing;}(_react.Component);
;exports.default=

Landing;