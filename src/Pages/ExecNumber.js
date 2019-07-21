import { PageTitle } from "../Services/titletext";
import React, {Component} from 'react';
import {View, ImageBackground } from 'react-native';
const with100 = {width: '100%', height: '100%'}
export default class ExecNumberScreen extends Component {

    static navigationOptions = {
      title: PageTitle.Numbers
    };

    render() {
      return (
          <View style={{flex: 1}}>
            <ImageBackground source={require('../image/Count.jpg')} style={with100}>
                {/* <Text style={[{lineHeight: sqSize, textAlign: "center", fontWeight: "700"}, textColor]}>{this.props.Label}</Text> */}
            </ImageBackground>
          </View>
      );
    }
  }