import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from '../../components/common';
import LoginForm from './LoginForm';

class RenderLogin extends Component {
  state = { loggedIn: null };

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
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
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
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default RenderLogin;
