import React, { Component } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Share,
  Linking,
  ScrollView
} from 'react-native';
import styles from './styles.js';
import { StackNavigator } from 'react-navigation';
import YouTube from 'react-native-youtube';
//import RNFetchBlob from 'react-native-fetch-blob';
export default class TelaVideos extends Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Voltar',
    headerStyle:{
        backgroundColor:'#d8d8d8',
        height: 25},
 });

    state = {
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: true
    }


//    _download() {
//      let dirs = RNFetchBlob.fs.dirs
//RNFetchBlob
//.config({addAndroidDownloads : {
//      useDownloadManager : true,
//      title : this.props.navigation.state.params.autor + " - " + this.props.navigation.state.params.book + " " + this.props.navigation.state.params.chapter,
//      description : 'Baixando video',
//      mime : 'video/mp4',
//      mediaScannable : true,
//      notification : true,
//    }
//  })

//.fetch('GET', 'https://mdfh1hostxyz.000webhostapp.com/videos/' + this.props.navigation.state.params.link + '.mp4', {
//.fetch('GET', 'http://videos.rpspapp.com/' + this.props.navigation.state.params.link + '.mp4', {
  
//})
//.then((res) => {

//console.log('The file saved to ', res.path())
//})
//    }

    render() {
       return (
         <View style={styles.container}>
          <ImageBackground source={require('../img/bkg.jpg')} style={styles.bg}>
          <ScrollView>
            <View>
              <Text style={styles.textoVideoAuthor}>
                {this.props.navigation.state.params.autor}
              </Text>
              <Text style={styles.textoVideoBook}>
              {this.props.navigation.state.params.book} {this.props.navigation.state.params.chapter}
              </Text>
            </View>
            <View>
                  <TouchableOpacity onPress = {()=> Share.share(
                        {
                          title: "Vídeo do " + this.props.navigation.state.params.autor + " - " + this.props.navigation.state.params.book + " " + this.props.navigation.state.params.chapter,
                          message: "Vídeo do " + this.props.navigation.state.params.autor + " - " + this.props.navigation.state.params.book + " " + this.props.navigation.state.params.chapter + "\r\n" + "https://youtu.be/" + this.props.navigation.state.params.link  + "\r\n" + "\r\n" + "Enviado de Reavivadospsp_app." +  "\r\n" + "Em breve na Play Store para seu dispositivo Android!" ,
                          url: "https://youtu.be/" + this.props.navigation.state.params.link
                        })}>
                    <View style={styles.buttonShare}>
                      <Text style={styles.buttonShareText}>Compartilhar</Text>
                    </View>
                  </TouchableOpacity>
              </View>
              <View style={styles.containervideo}>
                <YouTube
                  videoId={this.props.navigation.state.params.link}
                  play={this.state.isPlaying}
                  hidden={false}
                  fullscreen={false}
                  apiKey="AIzaSyAeo6lVsliOArCKmzS-W_KCr7PjOYrl_zk"
                  
                  style={{alignSelf: 'stretch', height: 250, backgroundColor: 'black', marginVertical: 10}}
                />
              </View> 
              <View>
                {/* <TouchableOpacity onPress={()=>this._download()}> */}
                <TouchableOpacity onPress={()=>{Linking.openURL("http://rpspapp.com/video/download/reavivados_app_downloader/getvideo.php?videoid="+ this.props.navigation.state.params.link +"&type=Download")}}>
                <Text style={styles.videoDownload}>Download</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </ImageBackground>
          
         </View>
       );

       <TabStack screenProps={this.props.screenProps} />

     }
}