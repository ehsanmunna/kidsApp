import SoundPlayer from "react-native-sound";
var songSuccess = null;
var songError = null;

const InitializeSound = () =>{
    songSuccess = new SoundPlayer('my_success.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if(error){
        console.log('error when init sound: ', error)
      }
    })
    songError = new SoundPlayer('my_error.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if(error){
        console.log('error when init sound: ', error)
      }
    })
  }

const Play = (canPlay)=> {
    if (canPlay) {
        if(songSuccess != null){
            songSuccess.stop(() => {
              songSuccess.play();
            });
          }
      } else {
        if(songError != null){
          songError.stop(() => {
            songError.play();
          });
        }
      }
}

const Sound = {
    Init: InitializeSound
    , Play: Play
}

export { Sound }