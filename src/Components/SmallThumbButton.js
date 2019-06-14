import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

const sqSize = 50;
const styles = {
    buttonArea: {
        height: sqSize, width: sqSize
    }
}

export default class SmallThumbButton extends Component {
    render() {
        //const {navigate} = this.props.navigation;
        const extColor = {backgroundColor:  this.props.Color}
        const buttons = Object.assign({}, styles.buttonArea, extColor);
      return (
        <View>
            <TouchableHighlight style={buttons} onPress={this.props.onPress} >
                <Text style={{lineHeight: sqSize, textAlign: "center"}}>{this.props.Label}</Text>
            </TouchableHighlight>
        </View>
      );
    }
  }