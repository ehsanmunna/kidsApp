import React, {Component} from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import { HexToRGBA } from '../Services/HexToRGB';

const sqSize = 100;
// const styles = {
//     buttonArea: {
//         //height: sqSize,
//          //width: '100%'
//     }
// }
const with100 = {width: '100%', height: '100%'}

export default class ImageThumbButton extends Component {
    render() {
        // // const extColor = {backgroundColor: this.props.Color}
        // const color = HexToRGBA(this.props.Color, 85);
        // const extColor = {backgroundColor: 'rgba(' + color.red + ', ' + color.green + ', ' + color.blue + ', '+ color.alfa + ')' }
        // console.log('bg color is : ', extColor);
        //const textColor = {color: this.props.fontColor != undefined ? this.props.fontColor : '#fff'}

      return (
        <View>
          <TouchableOpacity style={{width: 140, height: 140, padding: 10}} onPress={this.props.onPress}>
            <ImageBackground source={this.props.image} style={with100}>
              {/* <Text style={[{lineHeight: sqSize, textAlign: "center", fontWeight: "700"}, textColor]}>{this.props.Label}</Text> */}
            </ImageBackground>
          </TouchableOpacity>
        </View>
      );
    }
  }