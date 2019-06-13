/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import ThumbButton from './src/Components/ThumbButton';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const styles = {
  buttonRow: {flex: 1, flexDirection: "row", justifyContent: "space-between"}
}

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View>
          <Text style={{fontSize: 20, margin: 10, textAlign: 'center'}}>Welcome to Interactive Lesson for Kids</Text>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <View style={{flex: 1, flexDirection: "column", justifyContent: "space-between"}}>
            <View style={styles.buttonRow}>
              <ThumbButton Label="Lesson 1" Color="red"/>
              <ThumbButton Label="Lesson 2" Color="blue"/>
              <ThumbButton Label="Lesson 3" Color="green"/>
            </View>
            <View style={styles.buttonRow}>
              <ThumbButton Label="Lesson 4" Color="yellow"/>
              <ThumbButton Label="Lesson 5" Color="pink"/>
              <ThumbButton Label="Lesson 6" Color="orange"/>
            </View>
            <View style={styles.buttonRow}>
              <ThumbButton Label="Lesson 7" Color="purple"/>
              <ThumbButton Label="Lesson 8" Color="limegreen"/>
              <ThumbButton Label="Lesson 9" Color="darkred"/>
            </View>
          </View>
          
        </View>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
