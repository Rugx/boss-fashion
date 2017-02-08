import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  ScrollView
} from 'react-native';

import Colors from '../styles/colors';
import { landingStyles, globals } from '../styles';
import RenderLogin from './login/RenderLogin';

const styles = landingStyles;

class Landing extends Component{
  constructor(){
    super();
    this.visitDashboard = this.visitDashboard.bind(this);
  }
  visitDashboard(loggedIn){
      if(loggedIn === true) {
    this.props.navigator.push({ name: 'Dashboard' });
      }
}

  render(){
    return (
      <View style={styles.container}>

        <ScrollView>

        <View style={globals.flexCenter}>

          <Text style={[globals.lightText, globals.h2, globals.mb2]}>
            BoBo
          </Text>

          <Text style={[globals.lightText, globals.h4]}>
            Wear your style with CONFIDENCE.
          </Text>

        </View>


        <TouchableOpacity
         style={globals.button}
        >
          <Icon name='ios-person' size={36} color='white' />
          <RenderLogin childDashboard={this.visitDashboard}/>
        </TouchableOpacity>

        </ScrollView>
      </View>

    );
  }
};

export default Landing;
