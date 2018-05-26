import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ImageBackground, ScrollView} from 'react-native';
import styles from './styles.js';
import YouTube from 'react-native-youtube';
import firebase from './firebaseConn';
var youtubeThumbnail = require('youtube-thumbnail');


export default class TabVideos extends Component {

	static navigationOptions = ({navigation}) => ({
		header: null
	 });

	 constructor(props) {
		super(props);
		this.state = {
			listavideo: [],
		};
	  
		let capit =  this.props.screenProps.chapter;
		let livro = this.props.screenProps.book.toString().replace(/\s/g, "");
		var texto = "";

		firebase.database().ref(`${livro}/${capit}/video/`).on('value', (snapshot) =>{
		let state = this.state;
		state.listavideo = [];
	  
		  snapshot.forEach((childItem) =>{
			state.listavideo.push({
			  key:childItem.key,
			  autorvideo:childItem.val().autor,
			  linkvideo:childItem.val().link
			});
		  });
	  
		this.setState(state);
	  });
	  
	  };

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
					<View>
					<FlatList
						data = {this.state.listavideo}
						
						renderItem = {({item}) => {
						return (
							<YTvideo data={item} navigation={this.props.navigation} _book = {this.props.screenProps.book} _chapter = {this.props.screenProps.chapter}/>
								);
						}}
					/>		     
					</View>
				</ScrollView>			
			</ImageBackground>
		</View> 
		)
	}
}	

class YTvideo extends Component {
		
		render() {
			
			return (
			<View style={styles.textVideoAutor}>
				{/* <View style={styles.boxVideo}> */}
				
				
						<View style={styles.logoImg} >
							<TouchableOpacity onPress={()=>this.props.navigation.navigate('TelaVideos', {link: this.props.data.linkvideo, autor: this.props.data.autorvideo, book: this.props._book, chapter: this.props._chapter})}>
							<Image style={styles.thumbVideo} source={{uri: 'http://img.youtube.com/vi/' + this.props.data.linkvideo + '/default.jpg'}} />				
								{/* <Image source={require ('../img/play-icon.png')} />					 */}
							</TouchableOpacity>
						</View>
						<View style={styles.alinhaTextoCentro}>
						<Text style={styles.textoAuthorVideo}>{this.props.data.autorvideo}</Text>
						</View>
				</View>
				
		
			);
			
		}
	}






