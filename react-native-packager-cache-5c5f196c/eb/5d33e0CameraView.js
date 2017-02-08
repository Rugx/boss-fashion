Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');










var _firebase=require('firebase');var _firebase2=babelHelpers.interopRequireDefault(_firebase);
var _reactNativeImagePicker=require('react-native-image-picker');var _reactNativeImagePicker2=babelHelpers.interopRequireDefault(_reactNativeImagePicker);
var _reactNativeFetchBlob=require('react-native-fetch-blob');var _reactNativeFetchBlob2=babelHelpers.interopRequireDefault(_reactNativeFetchBlob);
var _Ionicons=require('react-native-vector-icons/Ionicons');var _Ionicons2=babelHelpers.interopRequireDefault(_Ionicons);
var _reactNativeNavbar=require('react-native-navbar');var _reactNativeNavbar2=babelHelpers.interopRequireDefault(_reactNativeNavbar);
var _colors=require('../../styles/colors');var _colors2=babelHelpers.interopRequireDefault(_colors);
var _styles=require('../../styles');

var _common=require('../../components/common');

var config={
apiKey:'AIzaSyBdJLyhvkbK2bTI5iCF8mtn8v_sUaEzpaQ',
authDomain:'boss-c66f4.firebaseapp.com',
storageBucket:'boss-c66f4.appspot.com'};



var storage=void 0;


var Blob=_reactNativeFetchBlob2.default.polyfill.Blob;
var fs=_reactNativeFetchBlob2.default.fs;
window.XMLHttpRequest=_reactNativeFetchBlob2.default.polyfill.XMLHttpRequest;
window.Blob=Blob;var

CameraView=function(_Component){babelHelpers.inherits(CameraView,_Component);

function CameraView(props){babelHelpers.classCallCheck(this,CameraView);var _this=babelHelpers.possibleConstructorReturn(this,(CameraView.__proto__||Object.getPrototypeOf(CameraView)).call(this,
props));

state={
avatarSource:{image:'ciao'}};return _this;

}babelHelpers.createClass(CameraView,[{key:'uploadImage',value:function uploadImage(

uri){var mime=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'application/octet-stream';
return new Promise(function(resolve,reject){
var uploadUri=_reactNative.Platform.OS==='ios'?uri.replace('file://',''):uri;
var sessionId=new Date().getTime();
var uploadBlob=null;
storage=storage||_firebase2.default.storage();
var imageRef=storage.ref('images').child(''+sessionId);

fs.readFile(uploadUri,'base64').
then(function(data){
return Blob.build(data,{type:mime+';BASE64'});
}).
then(function(blob){
uploadBlob=blob;
return imageRef.put(blob,{contentType:mime});
}).
then(function(){
uploadBlob.close();
return imageRef.getDownloadURL();
}).
then(function(url){
resolve(url);
}).
catch(function(error){
reject(error);
});
});
}},{key:'_pickImage',value:function _pickImage()


{var _this2=this;
console.log("this is the pick image:");
this.setState({uploadURL:''});

_reactNativeImagePicker2.default.launchImageLibrary({},function(response){
uploadImage(response.uri).
then(function(url){return _this2.setState({uploadURL:url});}).
catch(function(error){return console.log(error);});
});
}},{key:'selectShot',value:function selectShot()

{var _this3=this;
_reactNativeImagePicker2.default.showImagePicker(function(response){
console.log('Response = ',response);

if(response.didCancel){
console.log('User cancelled image picker');
}else
if(response.error){
console.log('ImagePicker Error: ',response.error);
}else
if(response.customButton){
console.log('User tapped custom button: ',response.customButton);
}else
{
var source=void 0;


source={uri:'data:image/jpeg;base64,'+response.data};


if(_reactNative.Platform.OS==='android'){
source={uri:response.uri};
}else{
source={uri:response.uri.replace('file://','')};
}
uploadImage(uri);
_this3.setState({
avatarSource:source});


}
});
}},{key:'render',value:function render()

{
console.log(_reactNativeImagePicker2.default);
var titleConfig={title:'Camera',tintColor:'white'};

return(
_react2.default.createElement(_reactNative.View,{style:_styles.globals.flexContainer},
_react2.default.createElement(_reactNativeNavbar2.default,{
title:titleConfig,
tintColor:_colors2.default.brandPrimary}),

_react2.default.createElement(_reactNative.View,{style:_styles.globals.flexCenter},

_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:this.selectShot.bind(this)},
_react2.default.createElement(_reactNative.View,{style:[styles.avatar,styles.avatarContainer,{marginBottom:20}]})))));






}}]);return CameraView;}(_react.Component);


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#F5FCFF'},

avatarContainer:{
borderColor:'#9B9B9B',
borderWidth:1/_reactNative.PixelRatio.get(),
justifyContent:'center',
alignItems:'center'},

avatar:{
borderRadius:75,
width:150,
height:150}});exports.default=



CameraView;