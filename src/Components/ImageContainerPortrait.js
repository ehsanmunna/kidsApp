import React, {Component} from 'react';
import {View, Image} from 'react-native';


export default class ImageContainerPortrait extends Component {
    render() {
      return (
        <View style={{height: 100, width: 70, justifyContent: 'center', borderColor: 'gray', borderWidth: 1, padding: 5}}>
            <Image resizeMode="contain" source={ this.props.ImagePath } style={{width: '100%', height: '100%' }}/>
        </View>
      );
    }
  }