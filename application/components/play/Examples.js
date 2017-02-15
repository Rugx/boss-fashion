import React, { Component } from 'react';
import {
    View,
    Text,
    Platform,
    PixelRatio,
    TouchableOpacity,
    Image,
    StyleSheet,
    ActivityIndicator,
    AsyncStorage
} from 'react-native';

const image1 = require('../../images/image1.jpeg');
const image2 = require('../../images/image2.jpeg');
const image3 = require('../../images/image3.jpeg');
const image4 = require('../../images/image4.jpeg');
const image5 = require('../../images/image5.jpeg');
const image6 = require('../../images/image6.jpeg');
const image7 = require('../../images/image7.jpeg');
const image8 = require('../../images/image8.jpeg');
const image9 = require('../../images/image9.jpeg');
const image10 = require('../../images/image10.jpeg');
const image11 = require('../../images/image11.jpeg');
const image12 = require('../../images/image12.jpeg');
const image13 = require('../../images/image13.jpeg');
const image14 = require('../../images/image14.jpeg');

class localCards extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'Cards': ''
        };
    }

componentDidMount() {
    console.log('this is componentdidmount:');

    const Cards = [{
      "id": 1,
      "image": image1
    }, {
      "id": 2,
      "image": image2
    }, {
      "id": 3,
      "image": image3
    }, {
      "id": 4,
      "image": image4
    }, {
      "id": 5,
      "image": image5
    }, {
      "id": 6,
      "image": image6
    }, {
      "id": 7,
      "image": image7
    }, {
      "id": 8,
      "image": image8
    }, {
      "id": 9,
      "image": image9
    }, {
      "id": 10,
      "image": image10
    }, {
      "id": 11,
      "image": image11
    }, {
      "id": 12,
      "image": image12
    }, {
      "id": 13,
      "image": image13
    }, {
      "id": 14,
      "image": image14
    }];

    this.getCards(Cards);

    };

    async getCards() {
        try {
            console.log('this is getcards: ');
        await AsyncStorage.getItem('Cards').then((value) => {
               this.setState({ 'Cards': value });
        });
    } catch (error) {
           console.log(error);
       }
   }

   async storeCards(value) {
       try {
           console.log('this is storecards: ');
           await AsyncStorage.setItem('Cards', value);
               this.setState({ 'Cards': value });
       } catch (error) {
           console.log(error);
       }
   }

render() {
    return (

        <View>
            <TouchableOpacity onPress={this.storeCards.bind(this)}>
                <View>
                { this.state.Cards === '' ? <Text>Press here</Text> :
                <Image source={this.state.Cards} />
            }
                </View>
            </TouchableOpacity>
        </View>
    )
    }
}

export default localCards;
