import React, {Component} from 'react';
import {Text, View} from 'react-native';
import HeadLine from '../Components/HeadLine';
import SmallThumbButton from '../Components/SmallThumbButton';
import { TextInput } from 'react-native-gesture-handler';
import MathComponent from '../Components/MathComponent';



export default class LavelEightScreen extends Component {

  static navigationOptions = {
    title: 'Level_8',
  };


    render() {
      return (
        <View style={{flex: 1, padding: 10}}>
            <HeadLine Color="red" Label="যোগ করি"/>
            
            <MathComponent 
              Button1={{Label: "১", Color: "orange"}} 
              Button2={{Label: "৪", Color: "#AC9DDE"}} 
              correctAns="5"/>

            <MathComponent 
              Button1={{Label: "২", Color: "green"}} 
              Button2={{Label: "৩", Color: "yellow"}} 
              correctAns="5"/>

            <MathComponent 
              Button1={{Label: "১", Color: "pink"}} 
              Button2={{Label: "২", Color: "green"}} 
              correctAns="3"/>
            
            <MathComponent 
              Button1={{Label: "৩", Color: "yellow"}} 
              Button2={{Label: "৪", Color: "#AC9DDE"}} 
              correctAns="7"/>
        </View>
      );
    }
  }