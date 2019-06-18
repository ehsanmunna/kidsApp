import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const sqSize = 100;
const styles = {
    buttonArea: {
        height: sqSize, width: sqSize
    }
}

export default class ThumbButton extends Component {
    render() {
        //const {navigate} = this.props.navigation;
        const extColor = {backgroundColor:  this.props.Color}
        const buttons = Object.assign({}, styles.buttonArea, extColor);
      return (
        <View>
            <TouchableOpacity style={buttons} onPress={this.props.onPress} >
                <Text style={{lineHeight: sqSize, textAlign: "center"}}>{this.props.Label}</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }