import React, {Component} from 'react';
import {Text, View} from 'react-native';
import NumberMatchingQuestion from '../Components/NumberMatchingQuestion';
import HeadLine from '../Components/HeadLine';

export default class LavelFiveScreen extends Component {
    render() {
      return (
        <View style={{flex: 1, padding: 10, flexDirection: 'column', alignItems: 'center'}}>
            <HeadLine Color="red" Label="সংখ্যার সাথে ছবি মিল করি"/>
            
            <NumberMatchingQuestion 
              correctAns="1"
              Question="১"
              Image1={{Path: require( "../image/313.jpg" ), Value: 3}}
              Image2={{Path: require( "../image/222.jpg" ), Value: 2}}
              Image3={{Path: require( "../image/1.jpg" ), Value: 1}}
            />

            <NumberMatchingQuestion 
              correctAns="2"
              Question="২"
              Image1={{Path: require( "../image/55.jpg" ), Value: 5}}
              Image2={{Path: require( "../image/7.jpg" ), Value: 9}}
              Image3={{Path: require( "../image/212.jpg" ), Value: 2}}
            />

            <NumberMatchingQuestion 
              correctAns="3"
              Question="৩"
              Image1={{Path: require( "../image/22.jpg" ), Value: 2}}
              Image2={{Path: require( "../image/33.jpg" ), Value: 3}}
              Image3={{Path: require( "../image/8.jpg" ), Value: 7}}
            />
            
        </View>
      );
    }
  }