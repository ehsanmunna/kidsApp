import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/Pages/HomeScreen2';
import LavelOneScreen from './src/Pages/LavelOneScreen';
import LavelTwoScreen from './src/Pages/LavelTwoScreen';
import LavelThreeScreen from './src/Pages/LavelThreeScreen';
import LavelFourScreen from './src/Pages/LavelFourScreen';
import LavelFiveScreen from './src/Pages/LavelFiveScreen';
import LavelSixScreen from './src/Pages/LavelSixScreen';
import LavelSevenScreen from './src/Pages/LavelSevenScreen';
import LavelEightScreen from './src/Pages/LavelEightScreen';
import LavelNineScreen from './src/Pages/LavelNineScreen';
import Label1HomeScreen from './src/Pages/Lable1Home';
import Label3HomeScreen from './src/Pages/Lable3Home';
import Label2HomeScreen from './src/Pages/Lable2Home';
import ExecNumberScreen from './src/Pages/ExecNumber';
import ExecSumScreen from './src/Pages/ExecSum';
import ExecSubScreen from './src/Pages/ExecSub';

var SQLite = require('react-native-sqlite-storage');

// var SoundPlayer = require('react-native-sound');
// var song = null;

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Label1Home: { screen: Label1HomeScreen },
  Label2Home: { screen: Label2HomeScreen },
  Label3Home: { screen: Label3HomeScreen },

  LavelOne: { screen: LavelOneScreen },
  LavelTwo: { screen: LavelTwoScreen },
  LavelThree: { screen: LavelThreeScreen },

  LavelFour: { screen: LavelFourScreen },
  LavelFive: { screen: LavelFiveScreen },
  LavelSix: { screen: LavelSixScreen },

  LavelSeven: {screen: LavelSevenScreen },
  LavelEight: {screen: LavelEightScreen },
  LavelNine: { screen: LavelNineScreen },
  Number: { screen: ExecNumberScreen },
  ExecSum: { screen: ExecSumScreen },
  ExecSub: { screen: ExecSubScreen },
},
{
  initialRouteName: "Home"
});
const db = SQLite.openDatabase({name: 'test', createFromLocation: '~sqliteexample.db'})
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  
  constructor(){
    db.transaction((tx)=>{
      tx.executeSql('SELECT * FROM Score', [], (tx,result)=>{
        console.log('data: ', result);
      })
    })
  }
  

  render() {
    return (
      // <View style={{flex: 1}}>
      //   <Button
      //     onPress={this.onPressLearnMore}
      //     title="Learn More"
      //     color="#841584"
      //     accessibilityLabel="Learn more about this purple button"
      //   />
      // </View>
      <AppContainer/>
      
    );
  }
}




