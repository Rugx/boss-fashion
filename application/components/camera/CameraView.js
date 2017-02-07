import React, { Component } from 'react';
import {
    View,
    Text,
    Platform,
    PixelRatio,
    TouchableOpacity,
    Image,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

import firebase  from 'firebase';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import Colors from '../../styles/colors';
import { globals } from '../../styles';

import { Button } from '../../components/common';

const config = {
apiKey: 'AIzaSyBdJLyhvkbK2bTI5iCF8mtn8v_sUaEzpaQ',
authDomain: 'boss-c66f4.firebaseapp.com',
storageBucket: 'boss-c66f4.appspot.com',
};


let storage;


const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob;

class CameraView extends Component {
    //console.log(ImagePicker);
    constructor(props) {
        super(props)

        state = {
            avatarSource: null
        };
    }

    uploadImage(uri, mime = 'application/octet-stream') {
      return new Promise((resolve, reject) => {
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
          const sessionId = new Date().getTime();
          let uploadBlob = null;
          storage = storage || firebase.storage();
          const imageRef = storage.ref('images').child(`${sessionId}`);

          fs.readFile(uploadUri, 'base64')
          .then((data) => {
            return Blob.build(data, { type: `${mime};BASE64` })
          })
          .then((blob) => {
            uploadBlob = blob
            return imageRef.put(blob, { contentType: mime })
          })
          .then(() => {
            uploadBlob.close()
            return imageRef.getDownloadURL()
          })
          .then((url) => {
            resolve(url)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }


    _pickImage() {
        console.log("this is the pick image:");
    this.setState({ uploadURL: '' })

    ImagePicker.launchImageLibrary({}, response  => {
      uploadImage(response.uri)
        .then(url => this.setState({ uploadURL: url }))
        .catch(error => console.log(error))
    })
  }

    selectShot() {
        ImagePicker.showImagePicker((response) => {
            console.log( 'Response = ', response);

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
                uploadImage(uri);
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
