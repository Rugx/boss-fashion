Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _firebase=require('firebase');var _firebase2=babelHelpers.interopRequireDefault(_firebase);
var _common=require('../../components/common');var

LoginForm=function(_Component){babelHelpers.inherits(LoginForm,_Component);function LoginForm(){var _ref;var _temp,_this,_ret;babelHelpers.classCallCheck(this,LoginForm);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=babelHelpers.possibleConstructorReturn(this,(_ref=LoginForm.__proto__||Object.getPrototypeOf(LoginForm)).call.apply(_ref,[this].concat(args))),_this),_this.
state={email:'',password:'',error:'',loading:false},_temp),babelHelpers.possibleConstructorReturn(_this,_ret);}babelHelpers.createClass(LoginForm,[{key:'onButtonPress',value:function onButtonPress()

{var _this2=this;var _state=
this.state,email=_state.email,password=_state.password;

this.setState({error:'',loading:true});

_firebase2.default.auth().signInWithEmailAndPassword(email,password).
then(this.onLoginSuccess.bind(this)).
catch(function(){
_firebase2.default.auth().createUserWithEmailAndPassword(email,password).
then(_this2.onLoginSuccess.bind(_this2)).
catch(_this2.onLoginFail.bind(_this2));
});
}},{key:'onLoginFail',value:function onLoginFail()

{
this.setState({error:'Authentication Failed',loading:false});
}},{key:'onLoginSuccess',value:function onLoginSuccess()

{
this.setState({
email:'',
password:'',
loading:false,
error:''});

}},{key:'renderButton',value:function renderButton()

{
if(this.state.loading){
return _react2.default.createElement(_common.Spinner,{size:'small'});
}

return(
_react2.default.createElement(_common.Button,{onPress:this.onButtonPress.bind(this)},'Log in'));



}},{key:'render',value:function render()

{var _this3=this;
return(
_react2.default.createElement(_common.Card,{style:styles.cardStyle},
_react2.default.createElement(_common.CardSection,null,
_react2.default.createElement(_common.Input,{
placeholder:'user@gmail.com',
label:'Email',
value:this.state.email,
onChangeText:function onChangeText(email){return _this3.setState({email:email});}})),



_react2.default.createElement(_common.CardSection,null,
_react2.default.createElement(_common.Input,{
secureTextEntry:true,
placeholder:'password',
label:'Password',
value:this.state.password,
onChangeText:function onChangeText(password){return _this3.setState({password:password});}})),



_react2.default.createElement(_reactNative.Text,{style:styles.errorTextStyle},
this.state.error),


_react2.default.createElement(_common.CardSection,null,
this.renderButton())));



}}]);return LoginForm;}(_react.Component);


var styles={
errorTextStyle:{
fontSize:20,
alignSelf:'center',
color:'red'},

cardStyle:{
justifyContent:'flex-end'}};exports.default=




LoginForm;