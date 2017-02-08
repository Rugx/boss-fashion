Object.defineProperty(exports,"__esModule",{value:true});exports.globals=exports.formStyles=exports.landingStyles=exports.autocompleteStyles=exports.overlayStyles=exports.optionTextStyles=exports.selectStyles=exports.activityStyles=exports.calendarStyles=exports.messagesStyles=exports.groupsStyles=exports.profileStyles=undefined;var _colors=require('./colors');var _colors2=babelHelpers.interopRequireDefault(_colors);
var _reactNative=require('react-native');var _Dimensions$get=

_reactNative.Dimensions.get('window'),deviceHeight=_Dimensions$get.height,deviceWidth=_Dimensions$get.width;

var profileStyles=exports.profileStyles=_reactNative.StyleSheet.create({
flexRow:{
backgroundColor:'white',
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
marginBottom:10,
paddingHorizontal:30},

avatar:{
width:100,
height:100,
borderRadius:50,
borderWidth:1,
borderColor:'#777'},

avatarContainer:{
height:120,
alignItems:'center'},

infoContainer:{
flex:1.2,
justifyContent:'center',
alignItems:'stretch',
paddingHorizontal:12},

formButton:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
paddingHorizontal:30,
paddingVertical:12,
backgroundColor:'white',
marginVertical:10},

logoutButton:{
position:'absolute',
left:30},


logoutText:{
paddingTop:15,
fontSize:18,
fontWeight:'300',
color:'red'}});



var groupsStyles=exports.groupsStyles=_reactNative.StyleSheet.create({
h1:{
fontSize:22,
color:'white',
fontWeight:'500',
textAlign:'center'},

h2:{
fontSize:20,
fontWeight:'500',
paddingHorizontal:20,
paddingVertical:5},

h4:{
fontSize:16,
fontWeight:'300'},

boxContainer:{
alignItems:'center',
flexWrap:'wrap',
flexDirection:'row',
justifyContent:'center'},

groupImage:{
height:deviceWidth/2-25,
width:deviceWidth/2-25,
opacity:0.8,
margin:5},

groupBackground:{
opacity:0.9,
flex:1,
padding:15,
height:deviceWidth/2-25,
width:deviceWidth/2-25},

groupText:{
color:'white',
fontSize:20,
position:'absolute',
fontWeight:'500'},

groupTopImage:{
width:deviceWidth,
height:200,
flexDirection:'column'},

overlayBlur:{
backgroundColor:'#333',
opacity:0.5,
justifyContent:'center',
alignItems:'center',
flex:1},

bottomPanel:{
flex:0.3,
backgroundColor:'white',
opacity:0.8,
justifyContent:'center',
alignItems:'center'},

eventContainer:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
paddingHorizontal:20,
paddingVertical:10},

joinButton:{
flex:1,
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
borderRadius:4,
backgroundColor:_colors2.default.brandPrimary},

joinButtonContainer:{
paddingHorizontal:20,
height:50},

joinButtonText:{
fontSize:22,
color:'white',
fontWeight:'bold',
paddingHorizontal:10,
paddingVertical:10,
textAlign:'center'},

infoContainer:{
marginHorizontal:10,
paddingVertical:5}});



var messagesStyles=exports.messagesStyles=_reactNative.StyleSheet.create({
h5:{
fontSize:12,
fontWeight:'700'},

h6:{
color:_colors2.default.bodyTextGray,
fontSize:12,
fontWeight:'300',
fontWeight:'300',
marginLeft:10,
marginLeft:10},

h4:{
fontSize:16,
color:'#9B9B9B',
fontStyle:'italic',
fontWeight:'300'},

messageText:{
fontSize:16,
fontWeight:'300'},

arrowContainer:{
flex:0.5,
alignItems:'flex-end',
paddingRight:25},

divider:{
borderBottomColor:_colors2.default.inactive,
borderBottomWidth:1,
height:0,
width:deviceWidth*0.95},

navContainer:{
position:'absolute',
top:0,
right:0,
left:0,
height:50},

inputBox:{
marginBottom:50,
height:60,
left:0,
right:0,
backgroundColor:'#F3EFEF',
backgroundColor:_colors2.default.inactive,
flexDirection:'row'},

input:{
height:40,
padding:8,
flex:1,
marginRight:5,
fontSize:14,
borderColor:'#E0E0E0',
margin:10,
borderColor:'#b4b4b4',
borderRadius:8,
color:_colors2.default.bodyText,
backgroundColor:'white'},

buttonActive:{
flex:0.4,
backgroundColor:"#E0514B",
backgroundColor:_colors2.default.brandPrimary,
borderRadius:6,
justifyContent:'center',
margin:10},

buttonInactive:{
flex:0.4,
backgroundColor:"#eeeeee",
borderWidth:1,
borderColor:'#ffffff',
borderRadius:6,
justifyContent:'center',
margin:10},

buttonText:{
textAlign:'center',
color:'white',
fontSize:16},

submitButtonText:{
textAlign:'center',
fontSize:18,
fontWeight:'400',
color:'white'},

inactiveButtonText:{
textAlign:'center',
fontSize:18,
fontWeight:'400',
color:'#999'},

flexCentered:{
flex:1,
justifyContent:'center',
marginTop:8}});



var calendarStyles=exports.calendarStyles=_reactNative.StyleSheet.create({
h2:{
fontSize:18,
fontWeight:'300',
textAlign:'center'},

h4:{
fontSize:18,
fontWeight:'500',
marginLeft:10,
paddingVertical:4},

h5:{
fontSize:12,
fontWeight:'300',
paddingHorizontal:5},

emptyText:{
padding:20,
flexDirection:'column'},

textContainer:{
flexDirection:'row',
alignItems:'center'},

row:{
alignItems:'center',
backgroundColor:'white',
borderBottomColor:_colors2.default.inactive,
borderBottomWidth:1,
flex:1,
flexDirection:'row',
justifyContent:'space-between',
marginHorizontal:8,
paddingVertical:15},

arrow:{
marginLeft:20},

sectionHeader:{
alignItems:'center',
backgroundColor:_colors2.default.inactive,
borderBottomColor:'#f7f7f7',
borderBottomWidth:1,
flexDirection:'row',
justifyContent:'center',
paddingVertical:12},

sectionHeaderText:{
color:_colors2.default.brandPrimaryDark,
fontSize:18,
fontWeight:'300'}});



var activityStyles=exports.activityStyles=_reactNative.StyleSheet.create({
h4:{
color:_colors2.default.bodyText,
fontSize:16,
fontWeight:'400',
paddingHorizontal:10},

h5:{
color:_colors2.default.bodyText,
fontSize:15,
fontWeight:'300',
paddingHorizontal:10},

dateText:{
fontSize:14,
paddingBottom:4,
paddingHorizontal:10,
fontWeight:'300',
fontStyle:'italic',
color:_colors2.default.bodyText},

messageText:{
color:_colors2.default.bodyText,
marginLeft:50,
fontSize:14,
fontStyle:'italic',
fontWeight:'300'},

circle:{
backgroundColor:_colors2.default.brandPrimary,
borderRadius:7.5,
height:15,
marginHorizontal:10,
width:15}});



var selectStyles=exports.selectStyles={
backgroundColor:'white',
borderBottomWidth:0,
borderTopWidth:0,
justifyContent:'center',
paddingLeft:10};


var optionTextStyles=exports.optionTextStyles={
fontSize:18,
fontWeight:'300'};


var overlayStyles=exports.overlayStyles={
alignItems:"center",
backgroundColor:'transparent',
flex:1,
height:deviceHeight,
justifyContent:"flex-start",
position:'relative',
width:deviceWidth};


var autocompleteStyles=exports.autocompleteStyles=_reactNative.StyleSheet.create({
container:{
flex:1,
backgroundColor:'white'},

textInputContainer:{
backgroundColor:'white',
height:44,
borderTopColor:'white',
borderBottomColor:'white'},

textInput:{
backgroundColor:'white',
borderRadius:5,
fontSize:18,
height:28,
marginLeft:8,
marginRight:8,
marginTop:7.5,
paddingBottom:4.5,
paddingLeft:10,
paddingRight:10,
paddingTop:4.5},

poweredContainer:{
alignItems:'center',
backgroundColor:_colors2.default.inactive,
justifyContent:'center'},

powered:{
marginTop:15},

listView:{
flex:1},

row:{
padding:13,
height:44,
flexDirection:'row'},

separator:{
height:1,
backgroundColor:'white'},

loader:{
flexDirection:'row',
justifyContent:'flex-end',
height:20}});



var landingStyles=exports.landingStyles=_reactNative.StyleSheet.create({
container:{
bottom:0,
flex:1,
left:0,
position:'absolute',
right:0,
top:0},

loginButton:{
bottom:80},

backgroundImage:{
height:deviceHeight,
width:deviceWidth},

logo:{
height:90,
width:90}});



var formStyles=exports.formStyles=_reactNative.StyleSheet.create({
container:{
backgroundColor:_colors2.default.inactive,
flex:1,
paddingVertical:15},

flexRow:{
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between'},

h3:{
color:_colors2.default.copyMedium,
fontSize:22,
fontWeight:'400',
paddingHorizontal:20,
paddingVertical:10,
textAlign:'center'},

h4:{
color:_colors2.default.copyDark,
fontSize:20,
fontWeight:'300',
paddingHorizontal:20,
paddingVertical:5},

h5:{
fontSize:16,
paddingHorizontal:20,
paddingVertical:10,
textAlign:'center'},

h6:{
fontSize:16,
fontWeight:'400'},

errorContainer:{
paddingHorizontal:15},

errorText:{
fontSize:16,
fontWeight:'300',
color:_colors2.default.red},

btnGroup:{
flexDirection:'row',
justifyContent:'center',
alignItems:'center'},

avatarContainer:{
backgroundColor:'white',
marginVertical:15,
marginHorizontal:(deviceWidth-250)/2,
width:250,
borderRadius:30,
paddingVertical:15,
paddingHorizontal:10,
flexDirection:'row',
justifyContent:'center',
alignItems:'center'},

avatarImageContainer:{
height:120,
alignItems:'center'},

avatarImage:{
width:120,
height:120,
borderRadius:60,
padding:20},

formField:{
backgroundColor:'white',
height:50,
paddingTop:5,
marginBottom:10},

input:{
color:_colors2.default.copyMedium,
fontSize:18,
fontWeight:'300',
height:40,
paddingHorizontal:20,
paddingVertical:5},

largeInput:{
color:'#777',
fontSize:18,
backgroundColor:'white',
fontWeight:'300',
height:120,
paddingHorizontal:20,
paddingVertical:5},

submitButton:{
alignItems:'center',
backgroundColor:_colors2.default.brandPrimary,
height:70,
justifyContent:'center'},

buttonMargin:{
marginBottom:50},

textContainer:{
paddingHorizontal:10,
paddingTop:10,
flexDirection:'row',
flexWrap:'wrap',
width:deviceWidth},

technology:{
marginHorizontal:4},

groupImageContainer:{
height:200,
alignItems:'center',
backgroundColor:'black'},

groupImage:{
height:200,
width:deviceWidth,
borderRadius:3,
padding:20},

colorsContainer:{
flex:1,
flexDirection:'row',
justifyContent:'center',
alignItems:'stretch',
flexWrap:'wrap'},

colorBox:{
flex:1,
height:deviceWidth/4-20,
width:deviceWidth/4-20,
margin:10,
borderWidth:4},

slider:{
marginHorizontal:20,
marginVertical:5},

modal:{
backgroundColor:'rgba(0, 0, 0, 0.7)',
flex:1,
justifyContent:'center',
padding:20},

datepicker:{
backgroundColor:'white',
padding:20,
borderRadius:3},

pickerButton:{
paddingHorizontal:15,
paddingVertical:8,
backgroundColor:'white',
marginHorizontal:5}});



var globals=exports.globals=_reactNative.StyleSheet.create({
flex:{
flex:1},

flexCenter:{
flex:1,
justifyContent:'center',
alignItems:'center'},

flexContainer:{
flex:1,
backgroundColor:'white'},

row:{
flexDirection:'row',
justifyContent:'center',
alignItems:'center'},

lightText:{
color:'white'},

h2:{
fontSize:28,
fontWeight:'700'},

h4:{
fontSize:20},

h5:{
fontSize:16},

pv1:{
paddingVertical:10},

ph1:{
paddingHorizontal:10},

pa1:{
padding:10},

pa2:{
padding:20},

ph2:{
paddingHorizontal:20},

ma1:{
margin:10},

mt1:{
marginTop:10},

mv2:{
marginVertical:20},

mb1:{
marginBottom:10},

mr1:{
marginRight:10},

mh1:{
marginHorizontal:10},

mh2:{
marginHorizontal:20},

mv1:{
marginVertical:10},

mb2:{
marginBottom:20},

button:{
alignItems:'center',
backgroundColor:_colors2.default.brandPrimary,
bottom:0,
flexDirection:'row',
height:80,
justifyContent:'center',
left:0,
position:'absolute',
right:0},

buttonText:{
color:'white',
fontSize:16,
fontWeight:'700'},

largeButtonText:{
fontSize:24,
fontWeight:'400',
color:'white'},

brandPrimary:{
backgroundColor:_colors2.default.brandPrimary},

primaryText:{
color:_colors2.default.brandPrimary},

inactive:{
backgroundColor:_colors2.default.inactive},

map:{
backgroundColor:_colors2.default.inactive,
height:deviceHeight/3,
width:deviceWidth},

flexRow:{
flexDirection:'row',
alignItems:'center'},

divider:{
borderWidth:1,
borderColor:'#ddd',
marginHorizontal:10},

lightDivider:{
height:1,
borderBottomWidth:1,
borderBottomColor:'#eee',
marginHorizontal:15,
marginVertical:5},

textContainer:{
paddingHorizontal:10,
flexDirection:'row'},

centerText:{
textAlign:'center'},

avatar:{
width:50,
height:50,
borderRadius:25,
marginHorizontal:10,
marginVertical:10},

centeredRow:{
flexDirection:'row',
flex:1,
justifyContent:'center',
alignItems:'center'}});