import React, {Component} from 'react';
import {View} from 'react-native';
import ThumbButton from '../Components/ThumbButton';
import HeadLine from '../Components/HeadLine'
import { Color } from "../css/_veriables";

const styles = {
    buttonRow: {flex: 1, flexDirection: "row", justifyContent: "space-between"}
  }
//SoundPlayer.MAIN_BUNDLE
export default class Label2HomeScreen extends Component {
  
  static navigationOptions = {
        title: 'Kids Lesson',
      };

      

    render() {
     const {navigate} = this.props.navigation;
      return (
        <View style={{flex: 1}}>
            {/* <View>
                <Text style={{fontSize: 20, margin: 10, textAlign: 'center'}}>Welcome to Interactive Lesson for Kids</Text>
            </View> */}
            <HeadLine Color={Color.green} Label="Welcome to Interactive Lesson for Kids"/>
            
            <View style={{flex: 1, padding: 10}}>
            <View style={{flex: 1, flexDirection: "column", justifyContent: "space-between"}}>
              
              <ThumbButton Label="Lesson 4" Color={Color.yellow} onPress={() => navigate('LavelFour')}/>
              <ThumbButton Label="Lesson 5" Color={Color.pink} onPress={() => navigate('LavelFive')}/>
              <ThumbButton Label="Lesson 6" Color={Color.orange} onPress={() => navigate('LavelSix')}/>
                
            </View>
            
            </View>
        </View>
      );
    }
  }