'use strict';var _require=

require('react-native'),NativeModules=_require.NativeModules;var
ImagePickerManager=NativeModules.ImagePickerManager;
var DEFAULT_OPTIONS={
title:'Select a Photo',
cancelButtonTitle:'Cancel',
takePhotoButtonTitle:'Take Photo…',
chooseFromLibraryButtonTitle:'Choose from Library…',
quality:1.0,
allowsEditing:false};


module.exports=babelHelpers.extends({},
ImagePickerManager,{
showImagePicker:function showImagePicker(options,callback){
if(typeof options==='function'){
callback=options;
options={};
}
return ImagePickerManager.showImagePicker(babelHelpers.extends({},DEFAULT_OPTIONS,options),callback);
}});