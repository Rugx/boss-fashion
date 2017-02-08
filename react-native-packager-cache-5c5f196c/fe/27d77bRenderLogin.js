Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _firebase=require('firebase');var _firebase2=babelHelpers.interopRequireDefault(_firebase);
var _common=require('../../components/common');
var _LoginForm=require('./LoginForm');var _LoginForm2=babelHelpers.interopRequireDefault(_LoginForm);var

RenderLogin=function(_Component){babelHelpers.inherits(RenderLogin,_Component);function RenderLogin(){var _ref;var _temp,_this,_ret;babelHelpers.classCallCheck(this,RenderLogin);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=babelHelpers.possibleConstructorReturn(this,(_ref=RenderLogin.__proto__||Object.getPrototypeOf(RenderLogin)).call.apply(_ref,[this].concat(args))),_this),_this.
state={loggedIn:false},_temp),babelHelpers.possibleConstructorReturn(_this,_ret);}babelHelpers.createClass(RenderLogin,[{key:'componentWillMount',value:function componentWillMount()

{var _this2=this;
_firebase2.default.initializeApp({
apiKey:'AIzaSyBdJLyhvkbK2bTI5iCF8mtn8v_sUaEzpaQ',
authDomain:'boss-c66f4.firebaseapp.com',
databaseURL:'https://boss-c66f4.firebaseio.com',
storageBucket:'boss-c66f4.appspot.com',
messagingSenderId:'30797380237'});


_firebase2.default.auth().onAuthStateChanged(function(user){
if(user){
_this2.setState({loggedIn:true});
_this2.props.childDashboard(_this2.state.loggedIn);
}else{
_this2.setState({loggedIn:false});
_this2.props.childDashboard(_this2.state.loggedIn);
}
});
}},{key:'renderContent',value:function renderContent()

{
switch(this.state.loggedIn){
case true:
return(
_react2.default.createElement(_common.Button,{onPress:function onPress(){return _firebase2.default.auth().signOut();}},'Log Out'));



case false:
return _react2.default.createElement(_LoginForm2.default,null);
default:
return _react2.default.createElement(_common.Spinner,{size:'large'});}

}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_common.Header,{headerText:'Authentication'}),
this.renderContent()));


}}]);return RenderLogin;}(_react.Component);exports.default=


RenderLogin;