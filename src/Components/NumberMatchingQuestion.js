import React, {Component} from 'react';
import {Text, View, TouchableHighlight, ScrollView} from 'react-native';
import ImojiNotify from './ImojiNotify';
import ImageContainer from '../Components/ImageContainer';
import { Sound } from "../Services/Sound";

const styles = {
    TextBold: {
      fontWeight: '700'
    },
    ImgTouch: {
      marginBottom: 5
    }
  }

  
export default class NumberMatchingQuestion extends Component {
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
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderWidth: 1, padding: 5}}>
        
            <View style={{width: '10%'}}>
              <Text style={{fontSize: 35}}>{this.props.Question}</Text>
            </View>

            <View style={{width: '10%'}}>
              <Text style={{fontSize: 30}}>=> </Text>
            </View>
            
            <View style={{width: '60%', flexDirection: 'column', alignItems: 'center'}}>
                <TouchableHighlight style={styles.ImgTouch} onPress={ () => { this.PressImage(this.props.Image1.Value)} }>
                    {/* <Image source={ this.props.Image1.Path } style={{width: 130, height: 35}}/> */}
                    <ImageContainer ImagePath={ this.props.Image1.Path } />
                </TouchableHighlight>
                
                <TouchableHighlight style={styles.ImgTouch} onPress={ () => { this.PressImage(this.props.Image2.Value)} }>
                    {/* <Image source={ this.props.Image2.Path } style={{width: 130, height: 70}}/> */}
                    <ImageContainer ImagePath={ this.props.Image2.Path } />
                </TouchableHighlight>
                
                <TouchableHighlight style={styles.ImgTouch} onPress={ () => { this.PressImage(this.props.Image3.Value)} }>
                    {/* <Image source={ this.props.Image3.Path } style={{width: 130, height: 70}}/> */}
                    <ImageContainer ImagePath={ this.props.Image3.Path } />
                </TouchableHighlight>
                
            </View>
            <View style={{width: '20%'}}>
              <ImojiNotify givenAns={this.state.givenAns} correctAns={this.state.correctAns}/>
            </View>
            
            
        </View>
      );
    }
  }