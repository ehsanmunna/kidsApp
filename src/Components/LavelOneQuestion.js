import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import SmallThumbButton from './SmallThumbButton';
import ImojiNotify from './ImojiNotify';

const styles = {
  TextBold: {
    fontWeight: '700'
  },
  LayoutRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  LayoutColumn: {
    flex: 1,
    flexDirection: 'column'
  }
}

export default class LavelOneQuestion extends Component {
  state = {
    correctAns: this.props.correctAns,
    givenAns: 0
  }

  componentDidMount(){
    console.log('img path', this.props.ImagePath)
  }

  SetAnsware = (_item) => {
    
    this.setState( {givenAns: _item} )
    // console.log(_item)
    
  }
    render() {
      const buttonValue = this.props.BtnValue || [1, 2, 3, 4]
      return (
        <View style={{flex:1}}>
          {/* <View>
            <Text>{this.state.correctAns} and {this.state.givenAns}</Text>
          </View> */}
          <View style={styles.LayoutRow}>
            <View style={{flex: 1}}>
              <View style={styles.LayoutRow}>
                <Image source={ this.props.ImagePath } style={{width: 100, height: 60}}/>
                {/* <Text>কয়টি পতাকা?</Text> */}
                <Text style={ Object.assign({}, styles.TextBold, {padding: 5}) }>{this.props.Label}</Text>
              </View>
            </View>
            <View style={{flex: 1, height: 150, flexDirection: "row" }}>
              <View style={styles.LayoutColumn}>
                <View style={styles.LayoutRow}>
                  <SmallThumbButton Label={buttonValue[0]} Color="pink" onPress={()=>{ this.SetAnsware(buttonValue[0]) }} />
                  <SmallThumbButton Label={buttonValue[1]} Color="green" onPress={()=>{ this.SetAnsware(buttonValue[1]) }} />
                </View>
                <View style={styles.LayoutRow}>
                  <SmallThumbButton Label={buttonValue[2]} Color="yellow" onPress={()=>{ this.SetAnsware(buttonValue[2]) }} />
                  <SmallThumbButton Label={buttonValue[3]} Color="purple" onPress={()=>{ this.SetAnsware(buttonValue[3]) }} />
                </View>
              </View>
              <ImojiNotify givenAns={this.state.givenAns} correctAns={this.state.correctAns} />
            </View>

            
          </View>
        </View>
      );
    }
  }