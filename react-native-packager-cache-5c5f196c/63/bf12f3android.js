Object.defineProperty(exports,"__esModule",{value:true});



var _reactNative=require('react-native');






var RNFetchBlob=_reactNative.NativeModules.RNFetchBlob;







function actionViewIntent(path){var mime=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'text/plain';
if(_reactNative.Platform.OS==='android')
return RNFetchBlob.actionViewIntent(path,mime);else

return Promise.reject('RNFetchBlob.actionViewIntent only supports Android.');
}exports.default=


{
actionViewIntent:actionViewIntent};