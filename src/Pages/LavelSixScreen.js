import React, {Component} from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import HeadLine from '../Components/HeadLine';
import ImojiNotify from '../Components/ImojiNotify';
import ImageContainer from '../Components/ImageContainer';

const styles = {
  fontStyle: {fontSize: 24, fontWeight: '700'}
  , imageTouch: {
    width: 100
    , marginBottom: 5
  }
}

export default class LavelSixScreen extends Component {

  static navigationOptions = {
    title: 'Lavel_6',
  };

  state = {
    correctAns: 6,
    givenAns: 0
  }

  

    render() {
      return (
        <View style={{flex: 1, padding: 10}}>
            <HeadLine Color="red" Label="যোগ করি"/>
            
            <View style={{flex: 1, flexDirection: "row", justifyContent: 'center'}}>
              <View style={{width: '40%'}}>
                <View style={{flex: 1, flexDirection: "column", alignItems: 'center'}}>
                  <ImageContainer ImagePath={require( "../image/2+.jpg" )} />
                  <Text style={styles.fontStyle}>+</Text>
                  <ImageContainer ImagePath={require( "../image/4+.jpg" )} />
                </View>
                
              </View>
              <View style={{width: '10%'}}>
                <Text style={styles.fontStyle}>=></Text>
              </View>
              <View style={{width: '30%'}}>
                <TouchableHighlight style={styles.imageTouch} onPress={ () => { this.setState({givenAns: 6})} }>
                    <ImageContainer ImagePath={require( "../image/6+.jpg" )} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.imageTouch} onPress={ () => { this.setState({givenAns: 4})} }>
                    <ImageContainer ImagePath={require( "../image/4+.jpg" )} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.imageTouch} onPress={ () => { this.setState({givenAns: 5})} }>
                    <ImageContainer ImagePath={require( "../image/5+.jpg" )} />
                </TouchableHighlight>
              </View>
              <View style={{width: '10%'}}>
                <ImojiNotify givenAns={this.state.givenAns} correctAns={this.state.correctAns} />
              </View>

            </View>

            
        </View>
      );
    }
  }