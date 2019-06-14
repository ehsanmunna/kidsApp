import React, {Component} from 'react';
import {Text, View, TouchableHighlight, Image} from 'react-native';
import ImojiNotify from './ImojiNotify';

const styles = {
    TextBold: {
      fontWeight: '700'
    }
  }

  
export default class MatchingQuestion extends Component {
    state = {
        correctAns: this.props.correctAns,
        givenAns: 0
      }
    render() {
      return (
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          {/* <View>
            <Text>{this.state.correctAns} and {this.state.givenAns}</Text>
          </View> */}
            <View>
              <Image source={ this.props.ImagePathMain } style={{width: 130, height: 35}}/>
            </View>

            <View>
              <Text style={{fontSize: 30}}>=> </Text>
            </View>
            
            <View style={{flex: 1}}>
                <TouchableHighlight onPress={ () => { this.setState({givenAns: this.props.Image1.Value })} }>
                    <Image source={ this.props.Image1.Path } style={{width: 130, height: 35}}/>
                </TouchableHighlight>
                
                <TouchableHighlight onPress={ () => { this.setState({givenAns: this.props.Image2.Value })} }>
                    <Image source={ this.props.Image2.Path } style={{width: 130, height: 70}}/>
                </TouchableHighlight>
                
                <TouchableHighlight onPress={ () => { this.setState({givenAns: this.props.Image3.Value })} }>
                    <Image source={ this.props.Image3.Path } style={{width: 130, height: 70}}/>
                </TouchableHighlight>
                
            </View>
            <ImojiNotify givenAns={this.state.givenAns} correctAns={this.state.correctAns}/>
        </View>
      );
    }
  }