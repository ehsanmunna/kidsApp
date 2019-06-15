import React, {Component} from 'react';
import {Text, View, TouchableHighlight, Image} from 'react-native';
import ImojiNotify from './ImojiNotify';
import ImageContainer from '../Components/ImageContainer';

const styles = {
    TextBold: {
      fontWeight: '700'
    },
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
    render() {
      return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View>
              <Text style={styles.TextBold}>{this.props.Label}</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableHighlight style={styles.ImgTouch} onPress={ () => { this.setState({givenAns: 1})} }>
                    {/* <Image source={ this.props.ImagePath1 } style={{width: 130, height: 35}}/> */}
                    <ImageContainer ImagePath={ this.props.ImagePath1 } />
                </TouchableHighlight>
                
                <TouchableHighlight style={styles.ImgTouch} onPress={ () => { this.setState({givenAns: 2})} }>
                    {/* <Image source={ this.props.ImagePath2 } style={{width: 130, height: 70}}/> */}
                    <ImageContainer ImagePath={ this.props.ImagePath2 } />
                </TouchableHighlight>
                <ImojiNotify givenAns={this.state.givenAns} correctAns={this.state.correctAns}/>
            </View>
        </View>
      );
    }
  }