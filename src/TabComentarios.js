import React, { Component } from 'react';
import { StyleSheet, 
          Text, 
          Image, 
          Share,
          View, 
          ScrollView, 
          FlatList, 
          ImageBackground, 
          TouchableOpacity, 
          Linking
        } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './styles.js';

import firebase from './firebaseConn';


export default class TabComentarios extends Component {



	static navigationOptions = {
        tabBarIcon:({tintColor,focused}) => {
        	if (focused) {
        	return(
        		<Image source={require('../img/coment_on.png')} style={styles.tab_icon} />);
        		} else {
        	return(
        		<Image source={require('../img/coment_off.png')} style={styles.tab_icon} />);	
        	}
        },
       tabBarLabel: 'Notas'
     };

  
	constructor(props) {
  super(props);
  this.state = {lista: [], _livro : ""};

  let capit =  this.props.screenProps.chapter;
  let livro = this.props.screenProps.book.toString().replace(/\s/g, "");
 
  var texto = "";
  firebase.database().ref(`${livro}/${capit}/comentario/`).on('value', (snapshot) =>{
  let state = this.state;
  state.lista = [];

    snapshot.forEach((childItem) =>{
      state.lista.push({
        key:childItem.key,
        autor:childItem.val().autor,
        texto:childItem.val().texto
      });
    });

  this.setState(state);
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
              <View>
                <FlatList
                  data = {this.state.lista}
                  renderItem = {({item}) => {
                    return (
                      <Coment data={item} book = {this.props.screenProps.book} chapter = {this.props.screenProps.chapter} />
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



class Coment extends Component {

  componentDidMount() {
   
    var word = "";
    for(var i = 0; i < this.props.data.texto.length; i ++) {
      var word = word + this.props.data.texto[i].replace("¬", "\r\n");}
    
    this.props.data.texto = word;
  }

  render() {   
     
      return(      
          <View>
            <View>
              <Text style={styles.textoTitle}>{this.props.data.autor}</Text>
              <Text allowFontScaling = {true} selectable = {true} style={styles.texto_comment}>{this.props.data.texto}</Text>
            </View>
            <View>
              <TouchableOpacity onPress = {()=> Share.share(
            {
              title: this.props.data.autor,
              message: this.props.book + " " + this.props.chapter + "\r\n" + "\r\n" + this.props.data.autor + "\r\n" + "\r\n" + this.props.data.texto + "\r\n\r\nEnviado de Reavivados_app.\r\nDisponível na Google Play\r\n\r\nhttps://play.google.com/store/apps/details?id=com.reavivados_app",
              url: "www.facebook.com/reavivadosporsuapalavra"
            })}>
                <View style={styles.buttonShare}>
                  <Text style={styles.buttonShareText}>Compartilhar</Text>
                </View>
              </TouchableOpacity>
            </View>
           </View>
      )
  }
}
