'use strict';Object.defineProperty(exports,"__esModule",{value:true});

var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);

var _reactNative=require('react-native');var






NoMoreCards=function(_Component){babelHelpers.inherits(NoMoreCards,_Component);
function NoMoreCards(props){babelHelpers.classCallCheck(this,NoMoreCards);return babelHelpers.possibleConstructorReturn(this,(NoMoreCards.__proto__||Object.getPrototypeOf(NoMoreCards)).call(this,
props));
}babelHelpers.createClass(NoMoreCards,[{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.Text,{style:styles.noMoreCardsText},'No more cards')));


}}]);return NoMoreCards;}(_react.Component);exports.default=


{
NoMoreCards:NoMoreCards};


var styles=_reactNative.StyleSheet.create({
noMoreCardsText:{
fontSize:22}});