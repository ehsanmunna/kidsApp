import React, {Component} from 'react';
import {Text, View} from 'react-native';
import SmallThumbButton from './SmallThumbButton';
import { TextInput } from 'react-native-gesture-handler';
import IconNotify from './IconNotify';
import { Sound } from "../Services/Sound";
import { TextCSS } from '../css/Text';
import AsyncStorage from '@react-native-community/async-storage';

// const styles = {
//   fontStyle: {fontSize: 24, fontWeight: '700'}
// }

export default class MathComponent extends Component {
  state = {
    correctAns: this.props.correctAns,
    givenAns: 0
  }

  componentWillMount(){
    Sound.Init();
  }

  PressImage = async (value) => {
    Sound.Play(this.state.correctAns == value);
    this.setState({givenAns: value})

      var maindata = await AsyncStorage.getItem('user');
      var data = JSON.parse(maindata)
      if (this.state.correctAns == value) {
        data.RightScore += 1;
      } else {
        data.WrongScore += 1;
      }
      await AsyncStorage.setItem('user', JSON.stringify(data))
      console.log(data)
  }

    render() {
      return (
        <View style={{flex: 1, flexDirection: 'row'}}>
          <SmallThumbButton Color={this.props.Button1.Color} Label={this.props.Button1.Label}/>
          {
            this.props.subtract ? <Text style={TextCSS.TextSymbol}>-</Text> : <Text style={TextCSS.TextSymbol}>+</Text>
          }
          
          <SmallThumbButton Color={this.props.Button2.Color} Label={this.props.Button2.Label}/>
          <Text style={TextCSS.TextSymbol}>=</Text>
          <View>
            <TextInput keyboardType={'numeric'} style={{borderColor: 'gray', borderWidth:1, width: 150}}
            onChangeText={(e) => { this.PressImage(e) }}/>
          </View>
          <IconNotify givenAns={this.state.givenAns} correctAns={this.state.correctAns}/>
        </View>
      );
    }
  }