import React, {Component} from 'react';
import {Text, View} from 'react-native';
import LavelOneQuestion from '../Components/LavelOneQuestion';
import HeadLine from '../Components/HeadLine';

const styles = {
  TextBold: {
    fontWeight: '700'
  }
}

export default class LavelTwoScreen extends Component {

  static navigationOptions = {
    title: 'Lavel_2',
  };


    render() {
      return (
        <View style={{flex: 1, padding: 10}}>
            {/* <View>
              <Text style={styles.TextBold}>গননা কর</Text>
            </View> */}
            <HeadLine Color="red" Label="গননা কর"/>
            <LavelOneQuestion 
              correctAns="4" 
              ImagePath={require( "../image/Four4.jpg" )}
              Label="কয়টি মাছ?"
              />

            <LavelOneQuestion 
              correctAns="5" 
              ImagePath={require( "../image/Five.jpg" )}
              Label="কয়টি ফুল?"
              BtnValue={[5, 2, 3, 4]}
              />

            <LavelOneQuestion 
              correctAns="6" 
              ImagePath={require( "../image/Six.jpg" )}
              Label="কয়টি পাখী?"
              BtnValue={[6, 2, 3, 4]}
              />
            
        </View>
      );
    }
  }