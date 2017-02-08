Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');










var _MaterialIcons=require('react-native-vector-icons/MaterialIcons');var _MaterialIcons2=babelHelpers.interopRequireDefault(_MaterialIcons);

var image1=require('../../images/geasy.jpg');
var image2=require('../../images/eminem.jpg');
var image3=require('../../images/kyle.jpg');
var image4=require('../../images/devon.jpg');
var data=[{
"id":1,
"first_name":"G Eazy",
"image":image1},
{
"id":2,
"first_name":"Mark",
"image":image2},
{
"id":2,
"first_name":"Kyle",
"image":image3},
{
"id":2,
"first_name":"Devon Baldwin",
"image":image4}];

var ds=new _reactNative.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});var

Contacts=function(_Component){babelHelpers.inherits(Contacts,_Component);
function Contacts(props){babelHelpers.classCallCheck(this,Contacts);var _this=babelHelpers.possibleConstructorReturn(this,(Contacts.__proto__||Object.getPrototypeOf(Contacts)).call(this,
props));

_this.state={
dataSource:ds.cloneWithRows(data)};return _this;

}babelHelpers.createClass(Contacts,[{key:'eachMessage',value:function eachMessage(

x){
return(
_react2.default.createElement(_reactNative.TouchableOpacity,null,
_react2.default.createElement(_reactNative.View,{
style:{alignItems:'center',
padding:10,
flexDirection:'row',
borderBottomWidth:1,
borderColor:'#f7f7f7'}},
_react2.default.createElement(_reactNative.Image,{
source:x.image,style:{borderRadius:30,width:60,height:60},
resizeMode:'contain'}),
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.View,{style:{flexDirection:'row',justifyContent:'space-between',width:280}},
_react2.default.createElement(_reactNative.Text,{style:{marginLeft:15,fontWeight:'600',color:'#222',fontSize:15}},
x.first_name),
_react2.default.createElement(_reactNative.Text,{style:{fontWeight:'200',color:'#777',fontSize:13}},'MOBILE')),

_react2.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center'}},
_react2.default.createElement(_reactNative.Text,{style:{fontWeight:'400',color:'#666',fontSize:12,marginLeft:15}},
x.message))))));





}},{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(_reactNative.View,{style:{flex:1}},
_react2.default.createElement(_reactNative.ListView,{
dataSource:this.state.dataSource,
renderRow:function renderRow(rowData){return _this2.eachMessage(rowData);}})));



}}]);return Contacts;}(_react.Component);


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#F5FCFF'},

welcome:{
fontSize:20,
textAlign:'center',
margin:10},

instructions:{
textAlign:'center',
color:'#333333',
marginBottom:5}});exports.default=



Contacts;