import React, {Component} from 'react';
import {Text, View} from 'react-native';
import SmallThumbButton from './SmallThumbButton';
import { TextInput } from 'react-native-gesture-handler';
import IconNotify from './IconNotify';
import { Sound } from "../Services/Sound";

const styles = {
  fontStyle: {fontSize: 24, fontWeight: '700'}
}

export default class MathComponent extends Component {
  state = {
    correctAns: this.props.correctAns,
    givenAns: 0
  }

  componentWillMount(){
    Sound.Init();
  }

  PressImage = (value) => {
    Sound.Play(this.state.correctAns == value);
    this.setState({givenAns: value})
  }

    render() {
      return (
        <View style={{flex: 1, flexDirection: 'row'}}>
          <SmallThumbButton Color={this.props.Button1.Color} Label={this.props.Button1.Label}/>
          {
            this.props.subtract ? <Text style={styles.fontStyle}>-</Text> : <Text style={styles.fontStyle}>+</Text>
          }
          
          <SmallThumbButton Color={this.props.Button2.Color} Label={this.props.Button2.Label}/>
          <Text style={styles.fontStyle}>=</Text>
          <View>
            <TextInput style={{borderColor: 'gray', borderWidth:1, width: 150}}
            onChangeText={(e) => { this.PressImage(e) }}/>
          </View>
          <IconNotify givenAns={this.state.givenAns} correctAns={this.state.correctAns}/>
        </View>
      );
    }
  }