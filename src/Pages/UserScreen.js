import React, {Component} from 'react';
import {View, ImageBackground, Image, Text } from 'react-native';
import { Color } from "../css/_veriables";
import { PageTitle } from '../Services/titletext';
import ImageThumbButton from '../Components/ImageButton';
import { Ratio } from '../Services/Ratio';
import axios from "axios";
import { NavigationEvents } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

const styles = {
  buttonRow: {flex: 1, flexDirection: "row",backgroundColor: 'rgba(0,0,0,.5)'}
  , whiteFont: {color: 'white'}
}
const imageWidth = 150;
const imageRatio1 = Ratio(323, 125, imageWidth);
const imageRatio2 = Ratio(242, 81, imageWidth);
//SoundPlayer.MAIN_BUNDLE
export default class UserScreen extends Component {

  centerContainer = {flex: 1, alignItems: "center", justifyContent: 'center'};
  
    static navigationOptions = {
      title: PageTitle.mainTitle + " : Choose your player",
      headerStyle: {
        // backgroundColor: '#efe196',
        backgroundColor: '#e2d488',
      },
    };

    state = {
      SuperMan: {},
      IronMan: {},
      SpiderMan: {},
      BatMan: {}
    }
    
    // constructor(){
    //   this.state = {
    //     scorelist: []
    //   }
    // }

    GetData(){
      axios.get('http://203.190.9.108/api.tuitionwaiver/api/Score')
        // .then(function(response){
        //   return response.json();
        // })
        .then((res)=>{
          this.setState({SuperMan: res.data[0]});
          this.setState({IronMan: res.data[1]});
          this.setState({SpiderMan: res.data[2]});
          this.setState({BatMan: res.data[3]});
        })
        // .then(()=>{
        //   console.log(this.state.SuperMan.RightScore)
        // })
    }

    componentDidMount(){
      this.GetData();
    }

    async navigateToHome(_id){
      const {navigate} = this.props.navigation;
      navigate('Home', {params: {
        Id: _id
        , RightScore: 0
        , WrongScore: 0
      }});
      await AsyncStorage.setItem('user', JSON.stringify({ Id: _id, RightScore: 0, WrongScore: 0 }))
        
    }

    // ScoreById(id){
    //   // console.log(items);
      
    //   // const item = this.state.scorelist.filter(item => {return item.Id == id})[0];
    //   // //console.log(item);
    //   // return item;
    //   axios.get('http://203.190.9.108/api.tuitionwaiver/api/Score')
    //     // .then(function(response){
    //     //   return response.json();
    //     // })
    //     .then((res)=>{
    //       console.log(this.ScoreById(res.data, 1));
    //       // this.setState({SuperMan: ScoreById(res.data, 1)});
    //       // this.setState({IronMan: ScoreById(res.data, 2)});
    //       // this.setState({SpiderMan: ScoreById(res.data, 3)});
    //       // this.setState({BatMan: ScoreById(res.data, 4)});
    //     })
    // }
      

    render() {
    //  const {navigate} = this.props.navigation;
    
      return (
        <ImageBackground source={require('../image/back.jpg')} style={{width: '100%', height: '100%'}}>
          <NavigationEvents
              onDidFocus={payload => {
                this.GetData();
              }}
              
            />
          {/* <View style={{flex: 1, flexDirection: "row"}}>
            <View style={[{backgroundColor: 'rgba(0,0,0,.5)'}, this.centerContainer]}>
              <Image style={{width: imageRatio1.width, height: imageRatio1.height, }} source={require('../image/Lesson.jpg')}/>
            </View>
            <View style={[{backgroundColor: 'rgba(0,0,0,.5)'}, this.centerContainer]}>
              <Image style={{width: imageRatio1.width, height: imageRatio1.height, }} source={require('../image/Excercise.jpg')}/>
            </View>
          </View> */}

          <View style={styles.buttonRow}>
            <View style={this.centerContainer}>
              <ImageThumbButton image={require('../image/superman.jpg')}
                    Label="Level 2" Color={Color.green} onPress={() => this.navigateToHome(1) }/>
                {/* <Text style={styles.whiteFont}>{this.ScoreById(this.state.scorelist, 1).RightScore} / {this.ScoreById(this.state.scorelist, 1).WrongScore}</Text> */}
                <Text style={styles.whiteFont}>Right: {this.state.SuperMan.RightScore}, Wrong: {this.state.SuperMan.WrongScore}</Text>
              
            </View>
            <View style={this.centerContainer}>
              <ImageThumbButton image={require('../image/ironman.jpg')}
                      Label="Level 2" Color={Color.green} onPress={() => this.navigateToHome(2) }/>
              <Text style={styles.whiteFont}>Right: {this.state.IronMan.RightScore}, Wrong: {this.state.IronMan.WrongScore}</Text>
              
            </View>
          </View>

          
          <View style={styles.buttonRow}>
            <View style={this.centerContainer}>
              <ImageThumbButton image={require('../image/spiderman.jpg')}
                     Label="Level 1" Color={Color.red} onPress={() => this.navigateToHome(3) }/>
                     <Text style={styles.whiteFont}>Right: {this.state.SpiderMan.RightScore}, Wrong: {this.state.SpiderMan.WrongScore}</Text>
            </View>
            <View style={this.centerContainer}>
              <ImageThumbButton image={require('../image/batman.jpg')}
                     Label="Level 1" Color={Color.red} onPress={() => this.navigateToHome(4) }/>
                     <Text style={styles.whiteFont}>Right: {this.state.BatMan.RightScore}, Wrong: {this.state.BatMan.WrongScore}</Text>
            </View>
          </View>

          {/* <View style={{flex: 1, flexDirection: "row"}}>
            <View style={[{backgroundColor: 'rgba(0,0,0,.3)'}, this.centerContainer]}>
              <ImageThumbButton image={require('../image/Sub.jpg')}
                     Label="Level 3" Color={Color.blue} onPress={() => navigate('ExecSub') }/>
            </View>
            <View style={[{backgroundColor: 'rgba(255,255,255,.3)'}, this.centerContainer]}>
              <ImageThumbButton image={require('../image/hard.png')}
                     Label="Level 3" Color={Color.blue} onPress={() => navigate('Label3Home') }/>
            </View>
          </View> */}
        </ImageBackground>
        
      );
    }
  }