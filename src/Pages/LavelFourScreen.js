import React, {Component} from 'react';
import {Text, View} from 'react-native';
import MatchingQuestion from '../Components/MatchingQuestion';
import HeadLine from '../Components/HeadLine';
import { Color } from '../css/_veriables';
import { PageTitle } from '../Services/titletext';

export default class LavelFourScreen extends Component {

  static navigationOptions = {
    title: PageTitle.level2Lesson1
  };

    render() {
      return (
        <View style={{flex: 1, padding: 10}}>
            <HeadLine Color={Color.red} Label="সমান সংখ্যক ছবি মিল করি"/>
            
            {/* <MatchingQuestion 
              correctAns="2"
              ImagePathMain={require( "../image/2.jpg" )}
              Image1={{Path: require( "../image/22.jpg" ), Value: 2}}
              Image2={{Path: require( "../image/5.jpg" ), Value: 5}}
              Image3={{Path: require( "../image/Halka.jpg" ), Value: 1}}
            />

            <MatchingQuestion 
              correctAns="3"
              ImagePathMain={require( "../image/3.jpg" )}
              Image1={{Path: require( "../image/55.jpg" ), Value: 5}}
              Image2={{Path: require( "../image/7.jpg" ), Value: 9}}
              Image3={{Path: require( "../image/33.jpg" ), Value: 3}}
            /> */}
            
        </View>
      );
    }
  }