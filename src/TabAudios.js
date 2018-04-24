import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Switch,
  Slider,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Share,
  Image,
  Alert
} from 'react-native';
import Button from 'react-native-button';
import firebase from './firebaseConn';
import {
  Player,
  Recorder,
  MediaStates
} from 'react-native-audio-toolkit';
import styles from './styles.js';
import {
    BarIndicator,
} from 'react-native-indicators';



export default class TabAudios extends Component {

	static navigationOptions = {
        tabBarIcon:({tintColor,focused}) => {
        	if (focused) {
        	return(
        		<Image source={require('../img/audio_on.png')} style={styles.tab_icon} />);
        		} else {
        	return(
        		<Image source={require('../img/audio_off.png')} style={styles.tab_icon} />);	
        	}
        },
       tabBarLabel: 'Áudio'
     };

  constructor(props) {
    super(props);

    this.state = {
		audio: "" ,	
		playPauseButton: 'Preparing...',
		stopButtonDisabled: false,
    playButtonDisabled: false,
    shareButton: false,
    progress: 0,
    status:true,
		error: null
				};
    
		let capit =  this.props.screenProps.chapter;
		let livro = this.props.screenProps.book.toString().replace(/\s/g, "");
		var texto = "";
    
    firebase.database().ref(`${livro}/${capit}/audio/link`).once('value', (snapshot) =>{
    let state = this.state;
    var stringDate = snapshot.val();
    var tempDate= stringDate.split("-");
    var date = new Date(tempDate[2],tempDate[1]-1,tempDate[0],0,0,0,0);
    var pointDate = new Date(2018,3,1,0,0,0,0);
    if(date >= pointDate){state.audio ="http://vod.novotempo.org.br/mp3/ReavivadosA/Reavivados" + snapshot.val() + ".mp3"} else {state.audio ="http://vod.novotempo.org.br/mp3/Reavivados/Reavivados" + snapshot.val() + ".mp3"}
    if(snapshot.val() == null){this.state.shareButton = true}
    this.player = new Player(this.state.audio)
    
    });	
  }


  componentWillMount() {
 
    this.player = null; 
    this.recorder = null;
    this.lastSeek = 0;
    this._reloadPlayer();
    this._progressInterval = setInterval(() => {
      if (this.player && this._shouldUpdateProgressBar()) {// && !this._dragging) {
        this.setState({progress: Math.max(0, this.player.currentTime) / this.player.duration});
      }
    }, 100);
    
  }

  componentWillUnmount() {
    //console.log('unmount');
    // TODO
    clearInterval(this._progressInterval);
  }

  componentDidMount() {
    this.status = this.player.isPlaying;
  }
  
  _shouldUpdateProgressBar() {
    // Debounce progress bar update by 200 ms
    return Date.now() - this.lastSeek > 200;
  }

  _updateState(err) {
    this.setState({
      playPauseButton:      this.player    && this.player.isPlaying     ? 'Pause' : 'Play',
      stopButtonDisabled:   !this.player   || !this.player.canStop,
    
    
    });
  }
 
  _playPause() {
   this.setState({status: true})
    this.player.playPause((err, playing) => {
      if (err) {
        this.setState({
          error: "Nenhum áudio foi gravado para este capítulo.",          
        });
      }
      this._updateState();
      
    });
  }

  _stop() {
    this.player.stop(() => {
      this._updateState();
    });
  }

  _seek(percentage) {
    if (!this.player) {
      return;
    }

    this.lastSeek = Date.now();

    let position = percentage * this.player.duration;

    this.player.seek(position, () => {
      this._updateState();
    });
  }

  _status(status) {
    if (!this.player) {
      return;
  }
  }
  
  _reloadPlayer() {

    if (this.player) {
      this.player.stop();
    }

    this.player = new Player(this.state.audio).prepare();

    this._updateState();

    this.player.on('ended', () => {
      this._updateState();
    });
    this.player.on('pause', () => {
      this._updateState();
    });
  }



 
  render() {

    return (
    <View style={styles.container}>
			<ImageBackground source={require('../img/bkg.jpg')} style={styles.bg}>
    
      <View style={{flexDirection: 'row'}}>
      
	  	<View style={styles.chapterHead}>
         <Text style={styles.txtHeader}>{this.props.screenProps.book} {this.props.screenProps.chapter}</Text>
      </View>
      </View>
      <ScrollView> 
        <View style={styles.audioHeader}>
          <Text style={styles.title}>Comentário em áudio</Text>
        </View>
        
        <View style={styles.logoImgAudio}>
          <View style={styles.audioIcons}>
              <TouchableOpacity disabled ={this.state.playButtonDisabled}  style={styles.button} onPress={()=>this._playPause()}>
                <Image source={require ('../img/play.png')} />
                <Text style={styles.chargeAudio}>Play/Pause</Text>
              </TouchableOpacity>
              
          </View>
        </View>
        
        <View style={styles.slider}>
        <Slider step={0.0001} disabled={this.state.playButtonDisabled} onValueChange={(percentage) => this._seek(percentage)} value={this.state.progress}/>
        </View>
 
        <View style={styles.barAnimator}>
        <BarIndicator animating={true} count={15} color="#333333" />
        
          <Text style={styles.errorMessage}>{this.state.error}</Text>
        </View>
       
   
      <View style = {{marginTop:25}}>
          <TouchableOpacity disabled = {this.state.shareButton} onPress = {()=> Share.share(
                {
                  title: "Audio " + this.props.screenProps.book + " " + this.props.screenProps.chapter,
                  message: this.props.screenProps.book + " " + this.props.screenProps.chapter + "\r\nComentário em áudio: \r\n" + this.state.audio + "\r\n\r\nEnviado de Reavivados_app.\r\nDisponível na Google Play\r\n\r\nhttps://play.google.com/store/apps/details?id=com.reavivados_app",
                  url: this.state.audio
                })}>
            <View style={styles.buttonShare}>
              <Text style={styles.buttonShareText}>Compartilhar</Text>
            </View>
          </TouchableOpacity>
      </View>
      </ScrollView> 

        </ImageBackground>
    </View>
    );
  }
}


  


