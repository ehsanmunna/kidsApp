import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import ImojiNotify from './ImojiNotify';
import ImageContainer from '../Components/ImageContainer';
import { Sound } from "../Services/Sound";
import { TextCSS } from '../css/Text';
import { LayoutCSS } from '../css/Layout';
import AsyncStorage from '@react-native-community/async-storage';

const styles = {
    ImgTouch: {
      height: 70,
      margin: 5
    }
  }

  

  
export default class CompareQuestion extends Component {
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
        <View style={LayoutCSS.LayoutRow}>
            <View>
              <Text style={TextCSS.QuestionText}>{this.props.Label}</Text>
            </View>
            <View style={LayoutCSS.LayoutRow}>
                <TouchableOpacity style={styles.ImgTouch} onPress={ () => { this.PressImage(1) } }>
                    {/* <Image source={ this.props.ImagePath1 } style={{width: 130, height: 35}}/> */}
                    <ImageContainer ImagePath={ this.props.ImagePath1 } />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.ImgTouch} onPress={ () => { this.PressImage(2) } }>
                    {/* <Image source={ this.props.ImagePath2 } style={{width: 130, height: 70}}/> */}
                    <ImageContainer ImagePath={ this.props.ImagePath2 } />
                </TouchableOpacity>
                <ImojiNotify givenAns={this.state.givenAns} correctAns={this.state.correctAns}/>
            </View>
        </View>
      );
    }
  }