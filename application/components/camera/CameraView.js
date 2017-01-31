import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  PixelRatio,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import Colors from '../../styles/colors';
import { globals } from '../../styles';
import ImagePicker from 'react-native-image-picker';


class CameraView extends Component{
    //console.log(ImagePicker);

    state = {
    avatarSource: null
    };

    selectShot () {


    ImagePicker.showImagePicker((response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  }
  else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }
  else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  }
  else {
    let source;

    // You can display the image using either data...
    source = { uri: 'data:image/jpeg;base64,' + response.data };

    // Or a reference to the platform specific asset location
    if (Platform.OS === 'android') {
      source = { uri: response.uri };
    } else {
      source = { uri: response.uri.replace('file://', '') };
    }

    this.setState({
      avatarSource: source
    });
  }
});
}

render(){
    console.log(ImagePicker);
    let titleConfig = { title: 'Camera', tintColor: 'white' };
    return (
      <View style={globals.flexContainer}>
        <NavigationBar
          title={titleConfig}
          tintColor={Colors.brandPrimary}
        />
        <View style={globals.flexCenter}>
         <TouchableOpacity onPress={this.selectShot.bind(this)}>
         <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
         { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
           <Image style={styles.avatar} source={this.state.avatarSource} />
         }
         </View>
       </TouchableOpacity>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});

export default CameraView;
