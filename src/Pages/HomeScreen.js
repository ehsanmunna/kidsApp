import React, {Component} from 'react';
import {View, ImageBackground } from 'react-native';
import ThumbButton from '../Components/ThumbButton';
import HeadLine from '../Components/HeadLine'
import { Color } from "../css/_veriables";
import { PageTitle } from '../Services/titletext';
import ImageThumbButton from '../Components/ImageButton';

const styles = {
    buttonRow: {flex: 1, flexDirection: "row", justifyContent: "space-between"}
  }
//SoundPlayer.MAIN_BUNDLE
export default class HomeScreen extends Component {
  
  static navigationOptions = {
        title: PageTitle.mainTitle,
        headerStyle: {
          // backgroundColor: '#efe196',
          backgroundColor: '#e2d488',
        },
      };

      

    render() {
     const {navigate} = this.props.navigation;
      return (
        <ImageBackground source={require('../image/back.jpg')} style={{width: '100%', height: '100%'}}>
          <View style={{flex: 1}}>

            {/* <View>
                <Text style={{fontSize: 20, margin: 10, textAlign: 'center'}}>Welcome to Interactive Lesson for Kids</Text>
            </View> */}
            {/* <HeadLine Color={Color.green} Label="Welcome to Interactive Lesson for Kids"/> */}
            <View style={{flex: 1}}>

            </View>
            <View style={{flex: 1}}>
              <View style={{flex: 1, flexDirection: "column", justifyContent: "flex-end", alignItems: 'flex-end'}}>
                {/* <View style={styles.buttonRow}> */}
                  {/* <ImageBackground source={require('../image/easy.jpg')} style={{width: '100%', height: '100%'}}> */}
                    <ImageThumbButton image={require('../image/easy.png')}
                     Label="Level 1" Color={Color.red} onPress={() => navigate('Label1Home') }/>
                  {/* </ImageBackground> */}
                {/* </View> */}
                {/* <View style={styles.buttonRow}> */}
                  <ImageThumbButton image={require('../image/medium.png')}
                    Label="Level 2" Color={Color.green} onPress={() => navigate('Label2Home') }/>
                {/* </View>
                <View style={styles.buttonRow}> */}
                  <ImageThumbButton image={require('../image/hard.png')}
                     Label="Level 3" Color={Color.blue} onPress={() => navigate('Label3Home') }/>
                {/* </View> */}
              </View>
            </View>
        </View>
        </ImageBackground>
        
      );
    }
  }