import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import HeadLine from '../Components/HeadLine';
import ImojiNotify from '../Components/ImojiNotify';
import ImageContainer from '../Components/ImageContainer';
import { Sound } from "../Services/Sound";
import { Color } from '../css/_veriables';
import { TextCSS } from '../css/Text';
import { PageTitle } from '../Services/titletext';

const styles = {
  //fontStyle: {fontSize: 24, fontWeight: '700'}
  imageTouch: {
    width: 100
    , marginBottom: 5
  }
}

export default class LavelSixScreen extends Component {

  static navigationOptions = {
    title: PageTitle.level2Lesson3
  };

  state = {
    correctAns: 6,
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
            <HeadLine Color={Color.red} Label="যোগ করি"/>
            
            <View style={{flex: 1, flexDirection: "row", justifyContent: 'center'}}>
              <View style={{width: '40%'}}>
                <View style={{flex: 1, flexDirection: "column", alignItems: 'center'}}>
                  <ImageContainer ImagePath={require( "../image/2+.jpg" )} />
                  <Text style={TextCSS.TextSymbol}>+</Text>
                  <ImageContainer ImagePath={require( "../image/4+.jpg" )} />
                </View>
                
              </View>
              <View style={{width: '10%'}}>
                <Text style={TextCSS.TextSymbol}>=></Text>
              </View>
              <View style={{width: '30%'}}>
                <TouchableOpacity style={styles.imageTouch} onPress={ () => { this.PressImage(6)} }>
                    <ImageContainer ImagePath={require( "../image/6+.jpg" )} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageTouch} onPress={ () => { this.PressImage(4)} }>
                    <ImageContainer ImagePath={require( "../image/4+.jpg" )} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageTouch} onPress={ () => { this.PressImage(5)} }>
                    <ImageContainer ImagePath={require( "../image/5+.jpg" )} />
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