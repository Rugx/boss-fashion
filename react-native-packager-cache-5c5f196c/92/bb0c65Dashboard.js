Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _Ionicons=require('react-native-vector-icons/Ionicons');var _Ionicons2=babelHelpers.interopRequireDefault(_Ionicons);

var _PrivateView=require('./private/PrivateView');var _PrivateView2=babelHelpers.interopRequireDefault(_PrivateView);
var _SearchView=require('./search/SearchView');var _SearchView2=babelHelpers.interopRequireDefault(_SearchView);
var _ProfileView=require('./profile/ProfileView');var _ProfileView2=babelHelpers.interopRequireDefault(_ProfileView);
var _CameraView=require('./camera/CameraView');var _CameraView2=babelHelpers.interopRequireDefault(_CameraView);
var _GroupsView=require('./groups/GroupsView');var _GroupsView2=babelHelpers.interopRequireDefault(_GroupsView);var

Dashboard=function(_Component){babelHelpers.inherits(Dashboard,_Component);
function Dashboard(){babelHelpers.classCallCheck(this,Dashboard);var _this=babelHelpers.possibleConstructorReturn(this,(Dashboard.__proto__||Object.getPrototypeOf(Dashboard)).call(this));

_this.state={
selectedTab:'Camera'};return _this;

}babelHelpers.createClass(Dashboard,[{key:'render',value:function render()
{var _this2=this;
return(
_react2.default.createElement(_reactNative.TabBarIOS,null,
_react2.default.createElement(_Ionicons2.default.TabBarItemIOS,{
title:'Profile',
selected:this.state.selectedTab==='Profile',
iconName:'ios-person',
onPress:function onPress(){return _this2.setState({selectedTab:'Profile'});}},

_react2.default.createElement(_ProfileView2.default,null)),

_react2.default.createElement(_Ionicons2.default.TabBarItemIOS,{
title:'Search',
selected:this.state.selectedTab==='Search',
iconName:'ios-search',
onPress:function onPress(){return _this2.setState({selectedTab:'Search'});}},

_react2.default.createElement(_SearchView2.default,null)),


_react2.default.createElement(_Ionicons2.default.TabBarItemIOS,{
title:'',
selected:this.state.selectedTab==='Camera',
iconName:'ios-camera',
onPress:function onPress(){return _this2.setState({selectedTab:'Camera'});}},

_react2.default.createElement(_CameraView2.default,null)),


_react2.default.createElement(_Ionicons2.default.TabBarItemIOS,{
title:'Private',
selected:this.state.selectedTab==='Private',
iconName:'ios-body',
onPress:function onPress(){return _this2.setState({selectedTab:'Private'});}},

_react2.default.createElement(_PrivateView2.default,null)),


_react2.default.createElement(_Ionicons2.default.TabBarItemIOS,{
title:'Public',
selected:this.state.selectedTab==='Groups',
iconName:'ios-people',
onPress:function onPress(){return _this2.setState({selectedTab:'Groups'});}},

_react2.default.createElement(_GroupsView2.default,null))));




}}]);return Dashboard;}(_react.Component);exports.default=


Dashboard;