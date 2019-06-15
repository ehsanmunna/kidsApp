import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import HeadLine from '../Components/HeadLine';
import ImageContainerPortrait from '../Components/ImageContainerPortrait';
import ImojiNotify from '../Components/ImojiNotify';

const styles = {
  fontStyle: {fontSize: 24, fontWeight: '700'}
  , imageTouch: {
    width: 70
    , marginBottom: 5
  }
}

export default class LavelSevenScreen extends Component {

  static navigationOptions = {
    title: 'Lavel_7',
  };

  state = {
    correctAns: 4,
    givenAns: 0
  }


    render() {
      return (
        <View style={{flex: 1, padding: 10}}>
            <HeadLine Color="red" Label="বিয়োগ করি"/>
            
            <View style={{flex: 1, flexDirection: "row", justifyContent: 'center'}}>
              <View style={{width: '40%'}}>
                <View style={{flex: 1, flexDirection: "column", alignItems: 'center'}}>
                  <ImageContainerPortrait ImagePath={require( "../image/4-.jpg" )} />
                  <Text style={styles.fontStyle}>+</Text>
                  <ImageContainerPortrait ImagePath={require( "../image/1-.jpg" )} />
                </View>
                
              </View>
              <View style={{width: '10%'}}>
                <Text style={styles.fontStyle}>=></Text>
              </View>
              <View style={{width: '30%'}}>
                <TouchableHighlight style={styles.imageTouch} onPress={ () => { this.setState({givenAns: 4})} }>
                    <ImageContainerPortrait ImagePath={require( "../image/4-.jpg" )} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.imageTouch} onPress={ () => { this.setState({givenAns: 3})} }>
                    <ImageContainerPortrait ImagePath={require( "../image/3-.jpg" )} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.imageTouch} onPress={ () => { this.setState({givenAns: 5})} }>
                    <ImageContainerPortrait ImagePath={require( "../image/5-.jpg" )} />
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