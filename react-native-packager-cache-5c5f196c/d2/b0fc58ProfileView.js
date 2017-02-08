Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');






var _firebase=require('firebase');var _firebase2=babelHelpers.interopRequireDefault(_firebase);
var _Ionicons=require('react-native-vector-icons/Ionicons');var _Ionicons2=babelHelpers.interopRequireDefault(_Ionicons);
var _reactNativeNavbar=require('react-native-navbar');var _reactNativeNavbar2=babelHelpers.interopRequireDefault(_reactNativeNavbar);
var _colors=require('../../styles/colors');var _colors2=babelHelpers.interopRequireDefault(_colors);
var _fixtures=require('../../fixtures');
var _styles=require('../../styles');

var _common=require('../common');

var styles=_styles.profileStyles;var


ProfileView=function(_Component){babelHelpers.inherits(ProfileView,_Component);function ProfileView(){babelHelpers.classCallCheck(this,ProfileView);return babelHelpers.possibleConstructorReturn(this,(ProfileView.__proto__||Object.getPrototypeOf(ProfileView)).apply(this,arguments));}babelHelpers.createClass(ProfileView,[{key:'render',value:function render()
{
var titleConfig={title:'Profile',tintColor:'white'};
return(
_react2.default.createElement(_reactNative.View,{style:[_styles.globals.flexContainer,_styles.globals.inactive]},
_react2.default.createElement(_reactNativeNavbar2.default,{
title:titleConfig,
tintColor:_colors2.default.brandPrimary}),

_react2.default.createElement(_reactNative.ScrollView,{style:_styles.globals.flex},
_react2.default.createElement(_reactNative.View,{style:styles.flexRow},
_react2.default.createElement(_reactNative.TouchableOpacity,{style:[_styles.globals.flexCenter,_styles.globals.pv1]},
_react2.default.createElement(_reactNative.Image,{
source:{uri:_fixtures.currentUser.avatar},
style:styles.avatar})),


_react2.default.createElement(_reactNative.View,{style:styles.infoContainer},
_react2.default.createElement(_reactNative.Text,{style:_styles.globals.h4},
_fixtures.currentUser.firstName,' ',_fixtures.currentUser.lastName),

_react2.default.createElement(_reactNative.Text,{style:_styles.globals.h5},
_fixtures.currentUser.location.city.long_name,', ',_fixtures.currentUser.location.state.short_name))),



_react2.default.createElement(_reactNative.TouchableOpacity,{style:styles.formButton},
_react2.default.createElement(_reactNative.Text,{style:_styles.globals.h4},'My Outfits'),


_react2.default.createElement(_Ionicons2.default,{name:'ios-arrow-forward',size:30,color:'#ccc'})),


_react2.default.createElement(_reactNative.TouchableOpacity,{style:styles.formButton},
_react2.default.createElement(_reactNative.Text,{style:_styles.globals.h4},'Outfits from the World'),


_react2.default.createElement(_Ionicons2.default,{name:'ios-arrow-forward',size:30,color:'#ccc'})),


_react2.default.createElement(_reactNative.TouchableOpacity,{style:styles.formButton},
_react2.default.createElement(_reactNative.Text,{style:_styles.globals.h4},'Settings'),


_react2.default.createElement(_Ionicons2.default,{name:'ios-arrow-forward',size:30,color:'#ccc'})),


_react2.default.createElement(_common.Button,{onPress:function onPress(){return _firebase2.default.auth().signOut();}},'Log Out'))));






}}]);return ProfileView;}(_react.Component);
;exports.default=

ProfileView;