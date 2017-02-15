import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from '../../components/common';
import LoginForm from './LoginForm';

class RenderLogin extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBdJLyhvkbK2bTI5iCF8mtn8v_sUaEzpaQ',
    authDomain: 'boss-c66f4.firebaseapp.com',
    databaseURL: 'https://boss-c66f4.firebaseio.com',
    storageBucket: 'boss-c66f4.appspot.com',
    messagingSenderId: '30797380237'
  });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
        this.props.childDashboard(this.state.loggedIn)
      } else {
        this.setState({ loggedIn: false });
        this.props.childDashboard(this.state.loggedIn);
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
        <View>
         <Text>
         Put some cool clothes on
         Not your sisters
         </Text>
         </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        {this.renderContent()}
      </View>
    );
  }
}

export default RenderLogin;
