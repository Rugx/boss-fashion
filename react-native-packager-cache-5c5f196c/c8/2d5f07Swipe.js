Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');









var _reactNativeSwipeCards=require('react-native-swipe-cards');var _reactNativeSwipeCards2=babelHelpers.interopRequireDefault(_reactNativeSwipeCards);
var _Ionicons=require('react-native-vector-icons/Ionicons');var _Ionicons2=babelHelpers.interopRequireDefault(_Ionicons);


var image1=require('../../images/image1.jpeg');
var image2=require('../../images/image2.jpeg');
var image3=require('../../images/image3.jpeg');
var image4=require('../../images/image4.jpeg');

var Cards=[{
"id":1,
"first_name":'Denise',
"city":'Paris',
"image":image1},
{
"id":2,
"first_name":"Cynthia",
"city":'Los Angeles',
"image":image2},
{
"id":3,
"first_name":"Maria",
"city":'New York',
"image":image3},
{
"id":4,
"first_name":"Jessica",
"city":'Milan',
"image":image4}];var


Swipe=function(_Component){babelHelpers.inherits(Swipe,_Component);
function Swipe(props){babelHelpers.classCallCheck(this,Swipe);var _this=babelHelpers.possibleConstructorReturn(this,(Swipe.__proto__||Object.getPrototypeOf(Swipe)).call(this,
props));
_this.state={
cards:Cards};return _this;

}babelHelpers.createClass(Swipe,[{key:'Card',value:function Card(
x){
return(
_react2.default.createElement(_reactNative.View,{style:styles.card},
_react2.default.createElement(_reactNative.Image,{source:x.image,resizeMode:'contain',style:{width:350,height:350}}),
_react2.default.createElement(_reactNative.View,{style:{width:350,height:70,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}},
_react2.default.createElement(_reactNative.View,{style:{flexDirection:'row',margin:15,marginTop:25}},
_react2.default.createElement(_reactNative.Text,{style:{fontSize:20,fontWeight:'300',color:'#444'}},x.first_name,', '),
_react2.default.createElement(_reactNative.Text,{style:{fontSize:21,fontWeight:'200',color:'#444'}},x.city)))));





}},{key:'handleYup',value:function handleYup(
card){
console.log('Yup for '+card.text);
}},{key:'handleNope',value:function handleNope(

card){
console.log('Nope for '+card.text);
}},{key:'noMore',value:function noMore()
{
return(
_react2.default.createElement(_reactNative.View,{style:styles.card},
_react2.default.createElement(_reactNative.Text,null,'No More Cards')));


}},{key:'yup',value:function yup()

{
console.log(this.refs['swiper']);
this.refs['swiper']._goToNextCard();}},{key:'nope',value:function nope()

{
console.log(this.refs['swiper']);
this.refs['swiper']._goToNextCard();}},{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},

_react2.default.createElement(_reactNativeSwipeCards2.default,{
ref:'swiper',
cards:this.state.cards,
containerStyle:{backgroundColor:'#f7f7f7',alignItems:'center',margin:20},
renderCard:function renderCard(cardData){return _this2.Card(cardData);},
renderNoMoreCards:function renderNoMoreCards(){return _this2.noMore();},
handleYup:this.handleYup,
handleNope:this.handleNope}),
_react2.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'center'}},
_react2.default.createElement(_reactNative.TouchableOpacity,{style:styles.buttons,onPress:function onPress(){return _this2.nope();}},
_react2.default.createElement(_Ionicons2.default,{name:'ios-close',size:45,color:'#888',style:{}})),

_react2.default.createElement(_reactNative.TouchableOpacity,{style:styles.buttonSmall},
_react2.default.createElement(_Ionicons2.default,{name:'ios-information',size:25,color:'#888',style:{}})),

_react2.default.createElement(_reactNative.TouchableOpacity,{style:styles.buttons,onPress:function onPress(){return _this2.yup();}},
_react2.default.createElement(_Ionicons2.default,{name:'ios-heart-outline',size:36,color:'#888',style:{marginTop:5}})))));




}}]);return Swipe;}(_react.Component);



var styles=_reactNative.StyleSheet.create({
container:{
flex:1,

backgroundColor:'#f7f7f7'},

buttons:{
width:80,
height:80,
borderWidth:10,
borderColor:'#e7e7e7',
justifyContent:'center',
alignItems:'center',
borderRadius:40},

buttonSmall:{
width:50,
height:50,
borderWidth:10,
borderColor:'#e7e7e7',
justifyContent:'center',
alignItems:'center',
borderRadius:25},

card:{
flex:1,
alignItems:'center',
alignSelf:'center',
borderWidth:2,
borderColor:'#e3e3e3',
width:350,
height:420}});exports.default=




Swipe;