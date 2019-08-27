import React, {Component} from 'react';
import {View, ImageBackground, Image, Text } from 'react-native';
import { Color } from "../css/_veriables";
import { PageTitle } from '../Services/titletext';
import ImageThumbButton from '../Components/ImageButton';
import { Ratio } from '../Services/Ratio';

const styles = {
  buttonRow: {flex: 1, flexDirection: "row", justifyContent: "space-between"}
}
const imageWidth = 150;
const imageRatio1 = Ratio(323, 125, imageWidth);
const imageRatio2 = Ratio(242, 81, imageWidth);
//SoundPlayer.MAIN_BUNDLE
export default class HomeScreen extends Component {

  centerContainer = {flex: 1, alignItems: "center", justifyContent: 'center'};
  
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

          <View style={{flex: 1, flexDirection: "row"}}>
            <View style={[{backgroundColor: 'rgba(0,0,0,.5)'}, this.centerContainer]}>
              <Image style={{width: imageRatio1.width, height: imageRatio1.height, }} source={require('../image/Lesson.jpg')}/>
            </View>
            <View style={[{backgroundColor: 'rgba(0,0,0,.5)'}, this.centerContainer]}>
              <Image style={{width: imageRatio1.width, height: imageRatio1.height, }} source={require('../image/Excercise.jpg')}/>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: "row"}}>
            <View style={[{backgroundColor: 'rgba(0,0,0,.3)'}, this.centerContainer]}>
              <ImageThumbButton image={require('../image/Count-btn.jpg')}
                     Label="Level 1" Color={Color.red} onPress={() => navigate('Number') }/>
            </View>
            <View style={[{backgroundColor: 'rgba(255,255,255,.3)'}, this.centerContainer]}>
              <ImageThumbButton image={require('../image/easy.png')}
                     Label="Level 1" Color={Color.red} onPress={() => navigate('Label1Home') }/>
            </View>
          </View>

          
          <View style={{flex: 1, flexDirection: "row"}}>
            <View style={[{backgroundColor: 'rgba(0,0,0,.3)'}, this.centerContainer]}>
              <ImageThumbButton image={require('../image/Sum.jpg')}
                    Label="Level 2" Color={Color.green} onPress={() => navigate('ExecSum') }/>
            </View>
            <View style={[{backgroundColor: 'rgba(255,255,255,.3)'}, this.centerContainer]}>
             <ImageThumbButton image={require('../image/medium.png')}
                    Label="Level 2" Color={Color.green} onPress={() => navigate('Label2Home') }/>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: "row"}}>
            <View style={[{backgroundColor: 'rgba(0,0,0,.3)'}, this.centerContainer]}>
              <ImageThumbButton image={require('../image/Sub.jpg')}
                     Label="Level 3" Color={Color.blue} onPress={() => navigate('ExecSub') }/>
            </View>
            <View style={[{backgroundColor: 'rgba(255,255,255,.3)'}, this.centerContainer]}>
              <ImageThumbButton image={require('../image/hard.png')}
                     Label="Level 3" Color={Color.blue} onPress={() => navigate('Label3Home') }/>
            </View>
          </View>
        </ImageBackground>
        
      );
    }
  }