import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {HexToRGBA} from '../Services/HexToRGB';

const sqSize = 100;
// const styles = {
//     buttonArea: {
//         //height: sqSize,
//          //width: '100%'
//     }
// }

export default class ThumbButton extends Component {
    render() {
        // const extColor = {backgroundColor: this.props.Color}
        const color = HexToRGBA(this.props.Color, 85);
        const extColor = {backgroundColor: 'rgba(' + color.red + ', ' + color.green + ', ' + color.blue + ', '+ color.alfa + ')' }
        console.log('bg color is : ', extColor);
        const textColor = {color: this.props.fontColor != undefined ? this.props.fontColor : '#fff'}

      return (
        <View style={{flex: 1}}>
            <TouchableOpacity style={[ extColor, {flex: 1, justifyContent: "center"}]}
              onPress={this.props.onPress}>
                <Text style={[{lineHeight: sqSize, textAlign: "center", fontWeight: "700", fontSize: 40}, textColor]}>{this.props.Label}</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }