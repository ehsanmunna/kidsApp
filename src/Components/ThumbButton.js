import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

const sqSize = 100;
const styles = {
    buttonArea: {
        height: sqSize, width: sqSize
    }
}

export default class ThumbButton extends Component {
    render() {
        const extColor = {backgroundColor:  this.props.Color}
        const buttons = Object.assign({}, styles.buttonArea, extColor);
      return (
        <View>
            <TouchableHighlight style={buttons}>
                <Text style={{lineHeight: sqSize, textAlign: "center"}}>{this.props.Label}</Text>
            </TouchableHighlight>
        </View>
      );
    }
  }