import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class HeadLine extends Component {
    render() {
      return (
        <View>
            <Text style={{fontSize: 20, margin: 10, textAlign: 'center', color: this.props.Color}}>{this.props.Label}</Text>
        </View>
      );
    }
  }