import React, {Component} from 'react';
import {Text, View} from 'react-native';
import HeadLine from '../Components/HeadLine';

export default class LavelSixScreen extends Component {

  static navigationOptions = {
    title: 'Lavel_6',
  };

    render() {
      return (
        <View style={{flex: 1, padding: 10}}>
            <HeadLine Color="red" Label="যোগ করি"/>
            
            
            
        </View>
      );
    }
  }