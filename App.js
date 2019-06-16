import React, {Component} from 'react';
import { View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/Pages/HomeScreen';
import LavelOneScreen from './src/Pages/LavelOneScreen';
import LavelTwoScreen from './src/Pages/LavelTwoScreen';
import LavelThreeScreen from './src/Pages/LavelThreeScreen';
import LavelFourScreen from './src/Pages/LavelFourScreen';
import LavelFiveScreen from './src/Pages/LavelFiveScreen';
import LavelSixScreen from './src/Pages/LavelSixScreen';
import LavelSevenScreen from './src/Pages/LavelSevenScreen';
import LavelEightScreen from './src/Pages/LavelEightScreen';
import LavelNineScreen from './src/Pages/LavelNineScreen';

var SoundPlayer = require('react-native-sound');
var song = null;

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },

  LavelOne: { screen: LavelOneScreen },
  LavelTwo: { screen: LavelTwoScreen },
  LavelThree: { screen: LavelThreeScreen },

  LavelFour: { screen: LavelFourScreen },
  LavelFive: { screen: LavelFiveScreen },
  LavelSix: { screen: LavelSixScreen },

  LavelSeven: {screen: LavelSevenScreen },
  LavelEight: {screen: LavelEightScreen },
  LavelNine: { screen: LavelNineScreen }
},
{
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

  componentWillMount(){
    song = new SoundPlayer('my_success.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if(error){
        console.log('error when init sound: ', error)
      }
    })
  }

  onPressLearnMore = () => {
    console.log(song)
    if(song != null){
      song.play((success)=>{
        if (!success) {
          console.log('error when play')
        } else {
          console.log('play')
        }
      })
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <AppContainer/>
      </View>
      
    );
  }
}




