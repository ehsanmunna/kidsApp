import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import SmallThumbButton from '../Components/SmallThumbButton';
import ImojiNotify from '../Components/ImojiNotify';
import LavelOneQuestion from '../Components/LavelOneQuestion';
import HeadLine from '../Components/HeadLine';
import { Color } from '../css/_veriables';

const styles = {
  TextBold: {
    fontWeight: '700'
  }
}


export default class LavelOneScreen extends Component {
    
  static navigationOptions = {
    title: 'Level_1',
  };

    render() {
      return (
        <View style={{flex: 1, padding: 10}}>
            <HeadLine Color={Color.red} Label="তুলনা কর"/>
            <LavelOneQuestion 
              correctAns="1" 
              ImagePath={require( "../image/Flag.jpg" )}
              Label="কয়টি পতাকা?"
              />

            <LavelOneQuestion 
              correctAns="2" 
              ImagePath={require( "../image/Two1.jpg" )}
              Label="কয়টি যোদ্ধা?"
              />

            <LavelOneQuestion 
              correctAns="3" 
              ImagePath={require( "../image/Three.jpg" )}
              Label="কয়টি কাঁঠাল?"
              />
            
        </View>
      );
    }
  }