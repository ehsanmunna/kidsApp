import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const sqSize = 100;
// const styles = {
//     buttonArea: {
//         //height: sqSize,
//          //width: '100%'
//     }
// }

export default class ThumbButton extends Component {
    render() {
        const extColor = {backgroundColor: this.props.Color}
        const textColor = {color: this.props.fontColor != undefined ? this.props.fontColor : '#fff'}

      return (
        <View style={{flex: 1}}>
            <TouchableOpacity style={[extColor, {flex: 1, justifyContent: "center"}]}
              onPress={this.props.onPress}>
                <Text style={[{lineHeight: sqSize, textAlign: "center", fontWeight: "700"}, textColor]}>{this.props.Label}</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }