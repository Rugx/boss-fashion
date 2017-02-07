import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import Colors from '../../styles/colors';
import { currentUser } from '../../fixtures';
import { globals, profileStyles } from '../../styles';

import { Button } from '../common';

const styles = profileStyles;


class ProfileView extends Component{
  render() {
    let titleConfig = { title: 'Profile', tintColor: 'white' };
    return (
      <View style={[globals.flexContainer, globals.inactive]}>
        <NavigationBar
          title={titleConfig}
          tintColor={Colors.brandPrimary}
        />
        <ScrollView style={globals.flex}>
          <View style={styles.flexRow}>
            <TouchableOpacity style={[globals.flexCenter, globals.pv1]}>
              <Image
                source={{uri: currentUser.avatar}}
                style={styles.avatar}
              />
            </TouchableOpacity>
            <View style={styles.infoContainer}>
              <Text style={globals.h4}>
                {currentUser.firstName} {currentUser.lastName}
              </Text>
              <Text style={globals.h5}>
                {currentUser.location.city.long_name}, {currentUser.location.state.short_name}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.formButton}>
            <Text style={globals.h4}>
              My Outfits
            </Text>
            <Icon name='ios-arrow-forward' size={30} color='#ccc' />
          </TouchableOpacity>

          <TouchableOpacity style={styles.formButton}>
            <Text style={globals.h4}>
              Outfits from the World
            </Text>
            <Icon name='ios-arrow-forward' size={30} color='#ccc' />
          </TouchableOpacity>

          <TouchableOpacity style={styles.formButton}>
            <Text style={globals.h4}>
              Settings
            </Text>
            <Icon name='ios-arrow-forward' size={30} color='#ccc' />
          </TouchableOpacity>

          <Button onPress={() => firebase.auth().signOut()} >
            Log Out
          </Button>

          </ScrollView>
      </View>
    );
  }
};

export default ProfileView;
