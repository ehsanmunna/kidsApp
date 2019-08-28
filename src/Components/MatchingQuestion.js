import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import ImojiNotify from './ImojiNotify';
import ImageContainer from '../Components/ImageContainer';
import { Sound } from "../Services/Sound";
import { LayoutCSS } from '../css/Layout';
import AsyncStorage from '@react-native-community/async-storage';

const styles = {
    TextBold: {
      fontWeight: '700'
    },
    ImgTouch: {
      width: 100,
      marginBottom: 5
    }
  }

  
export default class MatchingQuestion extends Component {

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
        <View style={ Object.assign({}, LayoutCSS.LayoutRow, {alignItems: 'center'} )}>
          {/* <View>
            <Text>{this.state.correctAns} and {this.state.givenAns}</Text>
          </View> */}
            <View>
              {/* <Image source={ this.props.ImagePathMain } style={{width: 130, height: 35}}/> */}
              <ImageContainer ImagePath={ this.props.ImagePathMain } />
            </View>

            <View>
              <Text style={{fontSize: 30}}>=> </Text>
            </View>
            
            <View style={{flex: 1}}>
                <TouchableOpacity style={styles.ImgTouch} onPress={ () => { this.PressImage(this.props.Image1.Value)} }>
                    {/* <Image source={ this.props.Image1.Path } style={{width: 130, height: 35}}/> */}
                    <ImageContainer ImagePath={ this.props.Image1.Path } />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.ImgTouch} onPress={ () => { this.PressImage(this.props.Image2.Value)} }>
                    {/* <Image source={ this.props.Image2.Path } style={{width: 130, height: 70}}/> */}
                    <ImageContainer ImagePath={ this.props.Image2.Path } />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.ImgTouch} onPress={ () => { this.PressImage(this.props.Image3.Value)} }>
                    {/* <Image source={ this.props.Image3.Path } style={{width: 130, height: 70}}/> */}
                    <ImageContainer ImagePath={ this.props.Image3.Path } />
                </TouchableOpacity>
                
            </View>
            <ImojiNotify givenAns={this.state.givenAns} correctAns={this.state.correctAns}/>
        </View>
      );
    }
  }