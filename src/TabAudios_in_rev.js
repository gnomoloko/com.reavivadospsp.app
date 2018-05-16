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

import styles from './styles.js';

import MusicPlayer from 'react-responsive-music-player';




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
      audio: ""
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
    if(snapshot.val() == null){this.state.shareButton = true};
    var url_valdeci =  'http://rpspapp.com/audio_rosana/Atos1.mp3';

    
    });	
    console.log(activeMusic.url);
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
        
        <MusicPlayer playlist={this.playlist} />
       
   
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





