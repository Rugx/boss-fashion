import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import Colors from '../../styles/colors';
import { globals } from '../../styles';

class PlayView extends Component{
  render(){
    let titleConfig = { title: 'Home', tintColor: 'white' };
    return (
      <View style={globals.flexContainer}>
        <NavigationBar
          title={titleConfig}
          tintColor={Colors.brandPrimary}
        />
        <View style={globals.flexCenter}>
          <Text style={globals.h2}>
            This will be a video streaming to get dressed up together!!!
            WoW
          </Text>
        </View>
      </View>
    )
  }
}

export default PlayView;
