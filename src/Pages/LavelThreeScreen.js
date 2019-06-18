import React, {Component} from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import HeadLine from '../Components/HeadLine';
import ImojiNotify from '../Components/ImojiNotify';
import CompareQuestion from '../Components/CompareQuestion';
import { Color } from '../css/_veriables';



export default class LavelThreeScreen extends Component {

  static navigationOptions = {
    title: 'Level_3',
  };

    render() {
      return (
        <View style={{flex: 1, padding: 10}}>
          <HeadLine Color={Color.red} Label="তুলনা কর"/>
          
          <CompareQuestion
            Label="কেনটি বেশি?"
            correctAns="2"
            ImagePath1={ require('../image/3Bird.jpg') }
            ImagePath2={ require('../image/5Bird.jpg') }
          />

          <CompareQuestion
            Label="কেনটি বড়?"
            correctAns="1"
            ImagePath1={ require('../image/Big.jpg') }
            ImagePath2={ require('../image/Small.jpg') }
          />

          <CompareQuestion
            Label="কেনটি লম্বা?"
            correctAns="2"
            ImagePath1={ require('../image/Khato.jpg') }
            ImagePath2={ require('../image/Lomba.jpg') }
          />
        </View>
      );
    }
  }