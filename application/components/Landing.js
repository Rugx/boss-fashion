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
      <View>

        <ScrollView>

        <View>

          <Text>
            BoBo
          </Text>

          <Text>
            Wear your style with CONFIDENCE.
          </Text>

        </View>


        <TouchableOpacity>

          <RenderLogin childDashboard={this.visitDashboard} />
        </TouchableOpacity>

        </ScrollView>
      </View>

    );
  }
}

export default Landing;
