import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import Colors from '../../styles/colors';
import { globals } from '../../styles';

import localCards from './Examples';

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
          <localCards />
        </View>
      </View>
    )
  }
}

export default PlayView;
