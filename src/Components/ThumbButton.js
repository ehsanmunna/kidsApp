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
        //const {navigate} = this.props.navigation;
        const extColor = {backgroundColor:  this.props.Color}
        //const buttons = Object.assign({}, styles.buttonArea, extColor);
      return (
        <View style={{flex: 1}}>
            <TouchableOpacity style={[extColor, {flex: 1, justifyContent: "center"}]} onPress={this.props.onPress}>
                <Text style={{lineHeight: sqSize, textAlign: "center", color: '#fff', fontWeight: "700"}}>{this.props.Label}</Text>
                {/* {
                  this.props.subtext
                  ? <Text style={{lineHeight: sqSize, textAlign: "center", color: '#fff'}}>{this.props.subtext}</Text>
                  : null
                } */}
            </TouchableOpacity>
        </View>
      );
    }
  }