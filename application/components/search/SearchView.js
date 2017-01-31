import React, { Component } from 'react';
import {
    StyleSheet,
     Image,
     Text,
     TouchableOpacity,
     View,
     ScrollView
  } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import Colors from '../../styles/colors';
import { globals } from '../../styles';

import Swipe from './Swipe';

class SearchView extends Component{
  render(){
    let titleConfig = { title: 'Search', tintColor: 'white' };
    return (
      <View style={globals.flexContainer}>
        <NavigationBar
          title={titleConfig}
          tintColor={Colors.brandPrimary}
        />
        <ScrollView>
          <Swipe />
        </ScrollView>
      </View>
    )
  }
}

export default SearchView;
