import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import ImojiNotify from './ImojiNotify';
import ImageContainer from '../Components/ImageContainer';
import { Sound } from "../Services/Sound";
import { TextCSS } from '../css/Text';

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

            <View style={{width: '20%'}}>
              <Text style={TextCSS.TextSymbol}>=> </Text>
            </View>
            
            <View style={{width: '50%', flexDirection: 'column', alignItems: 'center'}}>
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
            <View style={{width: '20%'}}>
              <ImojiNotify givenAns={this.state.givenAns} correctAns={this.state.correctAns}/>
            </View>
            
            
        </View>
      );
    }
  }