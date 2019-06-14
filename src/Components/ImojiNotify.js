import React, {Component} from 'react';
import {View, Image} from 'react-native';


export default class ImojiNotify extends Component {
    render() {
      return (
        <View>
          {
            this.props.givenAns != 0 ? 
            this.props.givenAns == this.props.correctAns ? 
              <Image source={require('../image/happy.jpg')} style={{width: 60, height: 50}}/>
              : <Image source={require('../image/unhappy.jpg')} style={{width: 50, height: 50}}/>
            : null
          }
        </View>
      );
    }
  }