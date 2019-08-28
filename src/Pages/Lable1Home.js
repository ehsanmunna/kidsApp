import React, {Component} from 'react';
import {View} from 'react-native';
import ThumbButton from '../Components/ThumbButton';
import HeadLine from '../Components/HeadLine'
import { Color } from "../css/_veriables";
import { PageTitle } from '../Services/titletext';
import { NavigationEvents } from 'react-navigation';

const styles = {
    buttonRow: {flex: 1, flexDirection: "row", justifyContent: "space-between"}
  }
//SoundPlayer.MAIN_BUNDLE
export default class Label1HomeScreen extends Component {
  
  static navigationOptions = {
    title: PageTitle.level1,
    };

    constructor(props){
      super(props);
      const { navigation } = this.props;
      this.state = {
        params: navigation.getParam('params')
      }
    }

      

    render() {
    console.log(this.state)
     const {navigate} = this.props.navigation;
      return (
        <View style={{flex: 1}}>
          <NavigationEvents
            onWillFocus={payload => {
              
     //console.log('check user from home ', global.User)
            }}
          /> 
            {/* <View>
                <Text style={{fontSize: 20, margin: 10, textAlign: 'center'}}>Welcome to Interactive Lesson for Kids</Text>
            </View> */}
            <HeadLine Color={Color.green} Label="Very Easy Lesson for Kids"/>
            
            <View style={{flex: 1, padding: 10}}>
            <View style={{flex: 1, flexDirection: "column", justifyContent: "space-between"}}>
                
                <ThumbButton Label="Lesson 1" subtext="তুলনা কর" Color={Color.red} onPress={() => navigate('LavelOne') }/>
                <ThumbButton Label="Lesson 2" Color={Color.blue} onPress={() => navigate('LavelTwo') }/>
                <ThumbButton Label="Lesson 3" Color={Color.green} onPress={() => navigate('LavelThree') }/>
                
            </View>
            
            </View>
        </View>
      );
    }
  }