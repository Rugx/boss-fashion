import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import Colors from '../../styles/colors';
import { globals } from '../../styles';

import Contacts from './Contacts';

class PrivateView extends Component{
  render(){
    let titleConfig = { title: 'Private', tintColor: 'white' };
    return (
      <View style={globals.flexContainer}>
        <NavigationBar
          title={titleConfig}
          tintColor={Colors.brandPrimary}
        />
        <ScrollView>
        <Contacts/>
        </ScrollView>
    </View>
    )
  }
}

export default PrivateView;
