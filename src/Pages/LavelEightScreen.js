import React, {Component} from 'react';
import {View} from 'react-native';
import HeadLine from '../Components/HeadLine';
import MathComponent from '../Components/MathComponent';
import { Color } from '../css/_veriables';
import { PageTitle } from '../Services/titletext';



export default class LavelEightScreen extends Component {

  static navigationOptions = {
    title: PageTitle.level3Lesson2
  };


    render() {
      return (
        <View style={{flex: 1, padding: 10}}>
            <HeadLine Color={Color.red} Label="যোগ করি"/>
            
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