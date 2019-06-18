import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import SmallThumbButton from './SmallThumbButton';
import ImojiNotify from './ImojiNotify';
import ImageContainer from '../Components/ImageContainer';
import { Sound } from "../Services/Sound";
import { TextCSS } from "../css/Text";
import { LayoutCSS } from "../css/Layout";
import { Color } from '../css/_veriables';


const styles = StyleSheet.create({
    LayoutRow: Object.assign({}, LayoutCSS.LayoutRow, {alignItems: 'center'}),
    LayoutColumn: LayoutCSS.LayoutColumn
})

export default class LavelOneQuestion extends Component {
  state = {
    correctAns: this.props.correctAns,
    givenAns: 0
  }


  componentWillMount(){
    Sound.Init();
  }
  

  SetAnsware = (_item) => {

    Sound.Play(this.state.correctAns == _item);

    this.setState( {givenAns: _item} )
    // console.log(_item)
    
  }
    render() {
      const buttonValue = this.props.BtnValue || [1, 2, 3, 4]
      return (
        <View style={{flex:1}}>
          <View style={styles.LayoutRow}>
            <View style={{flex: 1}}>
              <View style={styles.LayoutRow}>
                {/* <Image source={ this.props.ImagePath } style={{width: 100, height: 60}}/> */}
                <ImageContainer ImagePath={ this.props.ImagePath } />
                {/* <Text>কয়টি পতাকা?</Text> */}
                <Text style={ TextCSS.QuestionText }>{this.props.Label}</Text>
                {/* <Text style={ Object.assign({}, TextCSS.TextBold, {padding: 5}) }>{this.props.Label}</Text> */}
              </View>
            </View>
            <View style={{flex: 1, height: 150, flexDirection: "row" }}>
              <View style={styles.LayoutColumn}>
                <View style={styles.LayoutRow}>
                  <SmallThumbButton Label={buttonValue[0]} Color={Color.pinkLight} onPress={()=>{ this.SetAnsware(buttonValue[0]) }} />
                  <SmallThumbButton Label={buttonValue[1]} Color={Color.greenLight} onPress={()=>{ this.SetAnsware(buttonValue[1]) }} />
                </View>
                <View style={styles.LayoutRow}>
                  <SmallThumbButton Label={buttonValue[2]} Color={Color.orange} onPress={()=>{ this.SetAnsware(buttonValue[2]) }} />
                  <SmallThumbButton Label={buttonValue[3]} Color={Color.purpleLight} onPress={()=>{ this.SetAnsware(buttonValue[3]) }} />
                </View>
              </View>
              <ImojiNotify givenAns={this.state.givenAns} correctAns={this.state.correctAns} />
            </View>

            
          </View>
        </View>
      );
    }
  }