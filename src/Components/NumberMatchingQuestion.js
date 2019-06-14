import React, {Component} from 'react';
import {Text, View, TouchableHighlight, Image} from 'react-native';
import ImojiNotify from './ImojiNotify';

const styles = {
    TextBold: {
      fontWeight: '700'
    }
  }

  
export default class NumberMatchingQuestion extends Component {
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
            <View style={{width: '10%'}}>
              <Text style={{fontSize: 35}}>{this.props.Question}</Text>
            </View>

            <View style={{width: '10%'}}>
              <Text style={{fontSize: 30}}>=> </Text>
            </View>
            
            <View style={{width: '60%', justifyContent: 'center'}}>
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
            <View style={{width: '20%'}}>
              <ImojiNotify givenAns={this.state.givenAns} correctAns={this.state.correctAns}/>
            </View>
            
            
        </View>
      );
    }
  }