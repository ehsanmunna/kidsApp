import React, {Component} from 'react';
import {Text, View} from 'react-native';
import HeadLine from '../Components/HeadLine';
import MathComponent from '../Components/MathComponent';

export default class LavelNineScreen extends Component {

  static navigationOptions = {
    title: 'Level_9',
  };

    render() {
      return (
        <View style={{flex: 1, padding: 10}}>
            <HeadLine Color="red" Label="বিয়োগ করি"/>
            
            <MathComponent subtract 
              Button1={{Label: "৪", Color: "orange"}} 
              Button2={{Label: "১", Color: "#AC9DDE"}} 
              correctAns="3"/>

            <MathComponent subtract 
              Button1={{Label: "৩", Color: "green"}} 
              Button2={{Label: "২", Color: "yellow"}} 
              correctAns="1"/>

            <MathComponent subtract 
              Button1={{Label: "৬", Color: "pink"}}
              Button2={{Label: "১", Color: "green"}}
              correctAns="5"/>
            
            <MathComponent subtract 
              Button1={{Label: "৫", Color: "yellow"}} 
              Button2={{Label: "৩", Color: "#AC9DDE"}}
              correctAns="2"/>
            
        </View>
      );
    }
  }