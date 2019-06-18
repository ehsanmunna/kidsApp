import React, {Component} from 'react';
import {View} from 'react-native';
import ThumbButton from '../Components/ThumbButton';
import HeadLine from '../Components/HeadLine'
import { Color } from "../css/_veriables";

const styles = {
    buttonRow: {flex: 1, flexDirection: "row", justifyContent: "space-between"}
  }
//SoundPlayer.MAIN_BUNDLE
export default class HomeScreen extends Component {
  
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
                <View style={styles.buttonRow}>
                    <ThumbButton Label="Lesson 1" Color={Color.red} onPress={() => navigate('LavelOne') }/>
                    <ThumbButton Label="Lesson 2" Color={Color.blue} onPress={() => navigate('LavelTwo') }/>
                    <ThumbButton Label="Lesson 3" Color={Color.green} onPress={() => navigate('LavelThree') }/>
                </View>
                <View style={styles.buttonRow}>
                    <ThumbButton Label="Lesson 4" Color={Color.yellow} onPress={() => navigate('LavelFour')}/>
                    <ThumbButton Label="Lesson 5" Color={Color.pink} onPress={() => navigate('LavelFive')}/>
                    <ThumbButton Label="Lesson 6" Color={Color.orange} onPress={() => navigate('LavelSix')}/>
                </View>
                <View style={styles.buttonRow}>
                    <ThumbButton Label="Lesson 7" Color={Color.purple} onPress={() => navigate('LavelSeven')}/>
                    <ThumbButton Label="Lesson 8" Color={Color.greenLime} onPress={() => navigate('LavelEight')}/>
                    <ThumbButton Label="Lesson 9" Color={Color.red} onPress={() => navigate('LavelNine')}/>
                </View>
            </View>
            
            </View>
        </View>
      );
    }
  }