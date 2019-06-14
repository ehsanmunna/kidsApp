import React, {Component} from 'react';
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
  render() {
    return (
      // <View style={{flex: 1}}>
      //   <HomeScreen/>
      // </View>
      <AppContainer/>
    );
  }
}




