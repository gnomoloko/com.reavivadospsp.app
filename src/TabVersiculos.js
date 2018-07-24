import React, { Component } from 'react';
import {  StyleSheet, 
          FlatList, 
          Text, 
          Image, 
          View, 
          Alert, 
          Button, 
          ImageBackground, 
          TouchableOpacity, 
          ScrollView,
          Share

        } from 'react-native';
import {StackNavigator, TabNavigator } from 'react-navigation';

import styles from './styles.js';
import TelaBiblia from './TelaBiblia';
export default class TabVersiculos extends Component {

  static navigationOptions = {
        
        tabBarIcon:({tintColor,focused}) => {
        	if (focused) {
        	return(
        		<Image source={require('../img/book_on.png')} style={styles.tab_icon} />);
        		} else {
        	return(
        		<Image source={require('../img/book_off.png')} style={styles.tab_icon} />);	
        	}
        },
        // tabBarLabel: 'Biblia',
        
      };



constructor(props) {
  super(props);

  this.state = {dataSource: []};
  
}

link = "https://bible-api.com/"+this.props.screenProps.abrev+this.props.screenProps.chapter+"?translation=almeida"

componentDidMount() {

      return fetch(this.link)
         .then((response) => response.json())
         .then((responseJson) => {

           this.setState({
                    dataSource: responseJson.verses                                                                                                                                                                
           }, function() {
             
           });
         })
         .catch((error) => {
           console.error(error);                           
         });
        
   }

_keyExtractor = (item, index) => item.verse;


render() {
 
	return(
    
    
    <View style={styles.container}>
	    
      
      <ImageBackground source={require('../img/bkg.jpg')} style={styles.bg}>
      <View style={{flexDirection: 'row'}}>
      
	  	<View style={styles.chapterHead}>
         <Text style={styles.txtHeader}>Bíblia - {this.props.screenProps.book} {this.props.screenProps.chapter}</Text>
      </View>
      </View>
      	
        <ScrollView>
         <FlatList
                data={this.state.dataSource}
                renderItem={({item}) => <ListaVerso data={item} navigation={this.props.navigation} /> }     
           	  	//keyExtractor={this._keyExtractor}
            />

   

        </ScrollView>
     
      </ImageBackground>
      
    </View>
    	)
	}
}

class ListaVerso extends Component {
  	render () {
    
	    return (
              <View style={{flexDirection:'row', flexWrap:'wrap'}}>
              <Text  allowFontScaling = {true} style={styles.txtLine}><Text style={styles.txtVerse}>{this.props.data.verse}</Text> - <Text style={styles.texto}>{this.props.data.text}</Text></Text>
          </View>
    ) 
    
	}
}

