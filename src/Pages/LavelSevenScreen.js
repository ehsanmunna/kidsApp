import React, {Component} from 'react';
import {Text, View} from 'react-native';
import HeadLine from '../Components/HeadLine';

export default class LavelSevenScreen extends Component {

  static navigationOptions = {
    title: 'Lavel_7',
  };

    render() {
      return (
        <View style={{flex: 1, padding: 10}}>
            <HeadLine Color="red" Label="বিয়োগ করি"/>
            
            
            
        </View>
      );
    }
  }