import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import HeadLine from '../Components/HeadLine';
import ImageContainerPortrait from '../Components/ImageContainerPortrait';
import ImojiNotify from '../Components/ImojiNotify';
import { Sound } from "../Services/Sound";
import { Color } from '../css/_veriables';
import { TextCSS } from '../css/Text';
import { PageTitle } from '../Services/titletext';

const styles = {
  fontStyle: {fontSize: 24, fontWeight: '700'}
  , imageTouch: {
    width: 70
    , marginBottom: 5
  }
}

export default class LavelSevenScreen extends Component {

  static navigationOptions = {
    title: PageTitle.level3Lesson1
  };

  state = {
    correctAns: 4,
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
        <View style={{flex: 1, padding: 10}}>
            <HeadLine Color={Color.red} Label="বিয়োগ করি"/>
            
            <View style={{flex: 1, flexDirection: "row", justifyContent: 'center'}}>
              <View style={{width: '30%'}}>
                <View style={{flex: 1, flexDirection: "column", alignItems: 'center'}}>
                  <ImageContainerPortrait ImagePath={require( "../image/4-.jpg" )} />
                  <Text style={TextCSS.TextSymbol}>+</Text>
                  <ImageContainerPortrait ImagePath={require( "../image/1-.jpg" )} />
                </View>
                
              </View>
              <View style={{width: '20%'}}>
                <Text style={TextCSS.TextSymbol}>=></Text>
              </View>
              <View style={{width: '30%'}}>
                <TouchableOpacity style={styles.imageTouch} onPress={ () => { this.PressImage(4)} }>
                    <ImageContainerPortrait ImagePath={require( "../image/4-.jpg" )} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageTouch} onPress={ () => { this.PressImage(3)} }>
                    <ImageContainerPortrait ImagePath={require( "../image/3-.jpg" )} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageTouch} onPress={ () => { this.PressImage(5)} }>
                    <ImageContainerPortrait ImagePath={require( "../image/5-.jpg" )} />
                </TouchableOpacity>
              </View>
              <View style={{width: '10%'}}>
                <ImojiNotify givenAns={this.state.givenAns} correctAns={this.state.correctAns} />
              </View>

            </View>
            
        </View>
      );
    }
  }