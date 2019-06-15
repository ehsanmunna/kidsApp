import React, {Component} from 'react';
import {View, Image} from 'react-native';


export default class ImageContainer extends Component {
    render() {
      return (
        <View style={{height: 70, width: 100, justifyContent: 'center', borderColor: 'gray', borderWidth: 1, padding: 5}}>
            <Image resizeMode="contain" source={ this.props.ImagePath } style={{width: '100%', height: '100%' }}/>
        </View>
      );
    }
  }