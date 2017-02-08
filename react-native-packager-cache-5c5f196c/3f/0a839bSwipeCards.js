
'use strict';Object.defineProperty(exports,"__esModule",{value:true});

var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);

var _reactNative=require('react-native');








var _clamp=require('clamp');var _clamp2=babelHelpers.interopRequireDefault(_clamp);

var _Defaults=require('./Defaults.js');var _Defaults2=babelHelpers.interopRequireDefault(_Defaults);

var SWIPE_THRESHOLD=120;

var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'transparent'},

yup:{
borderColor:'green',
borderWidth:2,
position:'absolute',
padding:20,
bottom:20,
borderRadius:5,
right:20},

yupText:{
fontSize:16,
color:'green'},

nope:{
borderColor:'red',
borderWidth:2,
position:'absolute',
bottom:20,
padding:20,
borderRadius:5,
left:20},

nopeText:{
fontSize:16,
color:'red'}});




var currentIndex={};
var guid=0;var

SwipeCards=function(_Component){babelHelpers.inherits(SwipeCards,_Component);














































function SwipeCards(props){babelHelpers.classCallCheck(this,SwipeCards);var _this=babelHelpers.possibleConstructorReturn(this,(SwipeCards.__proto__||Object.getPrototypeOf(SwipeCards)).call(this,
props));


_this.guid=_this.props.guid||guid++;
if(!currentIndex[_this.guid])currentIndex[_this.guid]=0;

_this.state={
pan:new _reactNative.Animated.ValueXY(),
enter:new _reactNative.Animated.Value(0.5),
cards:[].concat(_this.props.cards),
card:_this.props.cards[currentIndex[_this.guid]]};


_this.lastX=0;
_this.lastY=0;

_this.cardAnimation=null;

_this._panResponder=_reactNative.PanResponder.create({
onStartShouldSetPanResponderCapture:function onStartShouldSetPanResponderCapture(e,gestureState){
_this.lastX=gestureState.moveX;
_this.lastY=gestureState.moveY;
return false;
},
onMoveShouldSetPanResponderCapture:function onMoveShouldSetPanResponderCapture(e,gestureState){
return Math.abs(_this.lastX-gestureState.moveX)>5||Math.abs(_this.lastY-gestureState.moveY)>5;
},

onPanResponderGrant:function onPanResponderGrant(e,gestureState){
_this.state.pan.setOffset({x:_this.state.pan.x._value,y:_this.state.pan.y._value});
_this.state.pan.setValue({x:0,y:0});
},

onPanResponderTerminationRequest:function onPanResponderTerminationRequest(evt,gestureState){return _this.props.allowGestureTermination;},

onPanResponderMove:_reactNative.Animated.event([
null,{dx:_this.state.pan.x,dy:_this.props.dragY?_this.state.pan.y:0}]),


onPanResponderRelease:function onPanResponderRelease(e,_ref){var vx=_ref.vx,vy=_ref.vy,dx=_ref.dx,dy=_ref.dy;
_this.state.pan.flattenOffset();
var velocity=void 0;
if(dx===0&&dy===0)
{
_this.props.onClickHandler(_this.state.card);
}

if(vx>0){
velocity=(0,_clamp2.default)(vx,3,5);
}else if(vx<0){
velocity=(0,_clamp2.default)(vx*-1,3,5)*-1;
}

if(Math.abs(_this.state.pan.x._value)>SWIPE_THRESHOLD){

var cancelled=false;

if(_this.state.pan.x._value>0){
cancelled=_this.props.handleYup(_this.state.card);
}else{
cancelled=_this.props.handleNope(_this.state.card);
}


if(cancelled){
_this._resetPan();
return;
};

_this.props.cardRemoved(currentIndex[_this.guid]);

_this.cardAnimation=_reactNative.Animated.decay(_this.state.pan,{
velocity:{x:velocity,y:vy},
deceleration:0.98});

_this.cardAnimation.start(function(status){
if(status.finished)_this._advanceState();else
_this._resetState();

_this.cardAnimation=null;
});


}else{
_this._resetPan();
}
}});return _this;

}babelHelpers.createClass(SwipeCards,[{key:'_forceLeftSwipe',value:function _forceLeftSwipe()

{var _this2=this;
this.cardAnimation=_reactNative.Animated.timing(this.state.pan,{
toValue:{x:-500,y:0}}).
start(function(status){
if(status.finished)_this2._advanceState();else
_this2._resetState();

_this2.cardAnimation=null;
});

this.props.cardRemoved(currentIndex[this.guid]);
}},{key:'_forceRightSwipe',value:function _forceRightSwipe()

{var _this3=this;
this.cardAnimation=_reactNative.Animated.timing(this.state.pan,{
toValue:{x:500,y:0}}).
start(function(status){
if(status.finished)_this3._advanceState();else
_this3._resetState();

_this3.cardAnimation=null;
});

this.props.cardRemoved(currentIndex[this.guid]);
}},{key:'_goToNextCard',value:function _goToNextCard()

{
currentIndex[this.guid]++;



if(currentIndex[this.guid]>this.state.cards.length-1&&this.props.loop){
currentIndex[this.guid]=0;
}

this.setState({
card:this.state.cards[currentIndex[this.guid]]});

}},{key:'_goToPrevCard',value:function _goToPrevCard()

{
this.state.pan.setValue({x:0,y:0});
this.state.enter.setValue(0);
this._animateEntrance();

currentIndex[this.guid]--;

if(currentIndex[this.guid]<0){
currentIndex[this.guid]=0;
}

this.setState({
card:this.state.cards[currentIndex[this.guid]]});

}},{key:'componentDidMount',value:function componentDidMount()

{
this._animateEntrance();
}},{key:'_animateEntrance',value:function _animateEntrance()

{
_reactNative.Animated.spring(
this.state.enter,
{toValue:1,friction:8}).
start();
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
if(nextProps.cards!==this.props.cards){

if(this.cardAnimation){
this.cardAnimation.stop();
this.cardAnimation=null;
}

currentIndex[this.guid]=0;
this.setState({
cards:[].concat(nextProps.cards),
card:nextProps.cards[0]});

}
}},{key:'_resetPan',value:function _resetPan()

{
_reactNative.Animated.spring(this.state.pan,{
toValue:{x:0,y:0},
friction:4}).
start();
}},{key:'_resetState',value:function _resetState()

{
this.state.pan.setValue({x:0,y:0});
this.state.enter.setValue(0);
this._animateEntrance();
}},{key:'_advanceState',value:function _advanceState()

{
this.state.pan.setValue({x:0,y:0});
this.state.enter.setValue(0);
this._animateEntrance();
this._goToNextCard();
}},{key:'getCurrentCard',value:function getCurrentCard()




{
return this.state.cards[currentIndex[this.guid]];
}},{key:'renderNoMoreCards',value:function renderNoMoreCards()

{
if(this.props.renderNoMoreCards){
return this.props.renderNoMoreCards();
}

return _react2.default.createElement(_Defaults2.default.NoMoreCards,null);
}},{key:'renderStack',value:function renderStack()




{var _this4=this;
if(!this.state.card){
return this.renderNoMoreCards();
}


var cards=this.state.cards.slice(currentIndex[this.guid],currentIndex[this.guid]+this.props.stackDepth).reverse();

return cards.map(function(card,i){

var offsetX=_this4.props.stackOffsetX*cards.length-i*_this4.props.stackOffsetX;
var lastOffsetX=offsetX+_this4.props.stackOffsetX;

var offsetY=_this4.props.stackOffsetY*cards.length-i*_this4.props.stackOffsetY;
var lastOffsetY=offsetY+_this4.props.stackOffsetY;

var opacity=0.25+0.75/cards.length*(i+1);
var lastOpacity=0.25+0.75/cards.length*i;

var scale=0.85+0.15/cards.length*(i+1);
var lastScale=0.85+0.15/cards.length*i;

var style={
position:'absolute',
top:_this4.state.enter.interpolate({inputRange:[0,1],outputRange:[lastOffsetY,offsetY]}),
left:_this4.state.enter.interpolate({inputRange:[0,1],outputRange:[lastOffsetX,offsetX]}),
opacity:_this4.state.enter.interpolate({inputRange:[0,1],outputRange:[lastOpacity,opacity]}),
transform:[{scale:_this4.state.enter.interpolate({inputRange:[0,1],outputRange:[lastScale,scale]})}],
elevation:i*10};



if(i+1===cards.length){var
pan=_this4.state.pan;var _ref2=
[pan.x,pan.y],translateX=_ref2[0],translateY=_ref2[1];

var rotate=pan.x.interpolate({inputRange:[-200,0,200],outputRange:["-30deg","0deg","30deg"]});
var _opacity=pan.x.interpolate({inputRange:[-200,0,200],outputRange:[0.5,1,0.5]});

var animatedCardStyles=babelHelpers.extends({},
style,{
transform:[
{translateX:translateX},
{translateY:translateY},
{rotate:rotate},
{scale:_this4.state.enter.interpolate({inputRange:[0,1],outputRange:[lastScale,scale]})}]});



return _react2.default.createElement(_reactNative.Animated.View,babelHelpers.extends({key:card[_this4.props.cardKey],style:[styles.card,animatedCardStyles]},_this4._panResponder.panHandlers),
_this4.props.renderCard(_this4.state.card));

}

return _react2.default.createElement(_reactNative.Animated.View,{key:card[_this4.props.cardKey],style:style},_this4.props.renderCard(card));
});
}},{key:'renderCard',value:function renderCard()

{
if(!this.state.card){
return this.renderNoMoreCards();
}var _state=

this.state,pan=_state.pan,enter=_state.enter;var _ref3=
[pan.x,pan.y],translateX=_ref3[0],translateY=_ref3[1];

var rotate=pan.x.interpolate({inputRange:[-200,0,200],outputRange:["-30deg","0deg","30deg"]});
var opacity=pan.x.interpolate({inputRange:[-200,0,200],outputRange:[0.5,1,0.5]});

var scale=enter;

var animatedCardStyles={transform:[{translateX:translateX},{translateY:translateY},{rotate:rotate},{scale:scale}],opacity:opacity};

return _react2.default.createElement(_reactNative.Animated.View,babelHelpers.extends({key:"top",style:[styles.card,animatedCardStyles]},this._panResponder.panHandlers),
this.props.renderCard(this.state.card));

}},{key:'renderNope',value:function renderNope()

{var
pan=this.state.pan;

var nopeOpacity=pan.x.interpolate({inputRange:[-150,0],outputRange:[1,0]});
var nopeScale=pan.x.interpolate({inputRange:[-150,0],outputRange:[1,0.5],extrapolate:'clamp'});
var animatedNopeStyles={transform:[{scale:nopeScale}],opacity:nopeOpacity};

if(this.props.renderNope){
return this.props.renderNope(pan);
}

if(this.props.showNope){
return _react2.default.createElement(_reactNative.Animated.View,{style:[styles.nope,animatedNopeStyles]},
_react2.default.createElement(_reactNative.Text,{style:styles.nopeText},this.props.nopeText));

}

return null;
}},{key:'renderYup',value:function renderYup()

{var
pan=this.state.pan;

var yupOpacity=pan.x.interpolate({inputRange:[0,150],outputRange:[0,1]});
var yupScale=pan.x.interpolate({inputRange:[0,150],outputRange:[0.5,1],extrapolate:'clamp'});
var animatedYupStyles={transform:[{scale:yupScale}],opacity:yupOpacity};

if(this.props.renderYup){
return this.props.renderYup(pan);
}

if(this.props.showYup){
return _react2.default.createElement(_reactNative.Animated.View,{style:[styles.yup,animatedYupStyles]},
_react2.default.createElement(_reactNative.Text,{style:styles.yupText},this.props.yupText));

}

return null;
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
this.props.stack?this.renderStack():this.renderCard(),
this.renderNope(),
this.renderYup()));


}}]);return SwipeCards;}(_react.Component);SwipeCards.propTypes={cards:_react2.default.PropTypes.array,cardKey:_react2.default.PropTypes.string,loop:_react2.default.PropTypes.bool,allowGestureTermination:_react2.default.PropTypes.bool,stack:_react2.default.PropTypes.bool,stackGuid:_react2.default.PropTypes.string,stackDepth:_react2.default.PropTypes.number,stackOffsetX:_react2.default.PropTypes.number,stackOffsetY:_react2.default.PropTypes.number,renderNoMoreCards:_react2.default.PropTypes.func,showYup:_react2.default.PropTypes.bool,showNope:_react2.default.PropTypes.bool,handleYup:_react2.default.PropTypes.func,handleNope:_react2.default.PropTypes.func,yupText:_react2.default.PropTypes.string,noText:_react2.default.PropTypes.string,onClickHandler:_react2.default.PropTypes.func,renderCard:_react2.default.PropTypes.func,cardRemoved:_react2.default.PropTypes.func,dragY:_react2.default.PropTypes.bool};SwipeCards.defaultProps={cards:[],cardKey:'key',loop:false,allowGestureTermination:true,stack:false,stackDepth:5,stackOffsetX:25,stackOffsetY:0,showYup:true,showNope:true,handleYup:function handleYup(card){return null;},handleNope:function handleNope(card){return null;},nopeText:"Nope!",yupText:"Yup!",onClickHandler:function onClickHandler(){alert('tap');},cardRemoved:function cardRemoved(ix){return null;},renderCard:function renderCard(card){return null;},style:styles.container,dragY:true};exports.default=SwipeCards;