import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  View
} from 'react-native';

import Colors from '../styles/colors';
import { landingStyles, globals } from '../styles';

const BackgroundImage = require('../images/fungirls.jpg');
const Logo = 'https://s3-us-west-2.amazonaws.com/assembliesapp/logo.png';
const styles = landingStyles;

class Landing extends Component{
  constructor(){
    super();
    this.visitDashboard = this.visitDashboard.bind(this);
  }
  visitDashboard(){
    this.props.navigator.push({ name: 'Dashboard' })
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            style={styles.backgroundImage}
            source={{ uri: '../images/fungirls.jpg' }}
          />
        </View>
        <View style={globals.flexCenter}>
          <Image
            style={styles.logo}
            source={{ uri: Logo }}
          />
          <Text style={[globals.lightText, globals.h2, globals.mb2]}>
            SoBo
          </Text>
          <Text style={[globals.lightText, globals.h4]}>
            Wear your style with CONFIDENCE.
          </Text>
        </View>
        <TouchableOpacity
          style={globals.button}
          onPress={this.visitDashboard}
        >
          <Icon name='ios-person' size={36} color='white' />
          <Text style={globals.buttonText}>
            {" "} Go to Dashboard
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default Landing;