import React, {Component} from 'react';
import {View} from 'react-native';
import ThumbButton from '../Components/ThumbButton';
import HeadLine from '../Components/HeadLine'
import { Color } from "../css/_veriables";
import { PageTitle } from '../Services/titletext';

const styles = {
    buttonRow: {flex: 1, flexDirection: "row", justifyContent: "space-between"}
  }
//SoundPlayer.MAIN_BUNDLE
export default class HomeScreen extends Component {
  
  static navigationOptions = {
        title: PageTitle.mainTitle,
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
                  <ThumbButton Label="Level 1" Color={Color.red} onPress={() => navigate('Label1Home') }/>
                </View>
                <View style={styles.buttonRow}>
                  <ThumbButton Label="Level 2" Color={Color.green} onPress={() => navigate('Label2Home') }/>
                </View>
                <View style={styles.buttonRow}>
                  <ThumbButton Label="Level 3" Color={Color.blue} onPress={() => navigate('Label3Home') }/>
                </View>
              </View>
            </View>
        </View>
      );
    }
  }