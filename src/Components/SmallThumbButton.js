import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { Button } from '../css/_veriables';
import { ButtonStyle } from '../css/Button';

// const sqSize = 50;
// const styles = {
//     buttonArea: {
//         height: sqSize, width: sqSize
//     }
// }

export default class SmallThumbButton extends Component {
    render() {
        //const {navigate} = this.props.navigation;
        const extColor = {backgroundColor:  this.props.Color, margin: 5}
        const buttons = Object.assign({}, ButtonStyle.ButtonSize, extColor);
      return (
        <View>
            <TouchableOpacity style={buttons} onPress={this.props.onPress} >
                <Text style={{lineHeight: Button.SquarSize, textAlign: "center"}}>{this.props.Label}</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }