import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, Image, View, Alert, Button, TouchableOpacity, ImageBackground} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './styles.js';

export default class TelaCapitulo extends Component {

  static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.book,
        headerStyle:{
            backgroundColor:'#d8d8d8',
          height: 25},
     });

   constructor(props) {
    super(props);
    this.state = {
       capitulos: [
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
[1,2,3,4],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],
[1,2,3,4,5,6,7,8,9,10],
[1,2,3,4,5,6,7,8,9,10,11,12,13],
[1,2,3,4,5,6,7,8,9,10],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
[1,2,3,4,5,6,7,8,9,10,11,12],
[1,2,3,4,5,6,7,8],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],
[1,2,3,4,5],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],
[1,2,3,4,5,6,7,8,9,10,11,12],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
[1,2,3],
[1,2,3,4,5,6,7,8,9],
[1],
[1,2,3,4],
[1,2,3,4,5,6,7],
[1,2,3],
[1,2,3],
[1,2,3],
[1,2],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
[1,2,3,4],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
[1,2,3,4,5,6,7,8,9,10,11,12,13],
[1,2,3,4,5,6],
[1,2,3,4,5,6],
[1,2,3,4],
[1,2,3,4],
[1,2,3,4,5],
[1,2,3],
[1,2,3,4,5,6],
[1,2,3,4],
[1,2,3],
[1],
[1,2,3,4,5,6,7,8,9,10,11,12,13],
[1,2,3,4,5],
[1,2,3,4,5],
[1,2,3],
[1,2,3,4,5],
[1],
[1],
[1],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]]

    };
    //this.click = this.click.bind(this);
   
  }

  render() {
   
  //this.props.navigation.navigate('Capitulo', {book:this.props.data.name, indice:this.props.data.key});
  	return(
    <View style={styles.container}>
      <ImageBackground source={require('../img/bkg.jpg')} style={styles.bg}>
        <View style={styles.listachapters}>
         <FlatList
                data={this.state.capitulos[(this.props.navigation.state.params.key-1)] }
                renderItem={({item}) => <ListaCap data={item} navigation={this.props.navigation} /> }             	  	
            />
        </View>
      </ImageBackground>
    </View>
    )
  }
}
 

class ListaCap extends Component {
	render () {
	    return (
	  <View style={styles.container}>
      
        <View style={styles.navIcon}>
          <View style={styles.navTitle}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Tabs', {book: this.props.navigation.state.params.book,  en_book: this.props.navigation.state.params.en_book, abrev: this.props.navigation.state.params.abrev, book_ID: this.props.navigation.state.params.key, chapter: this.props.data} )}}>     
              <Text style={styles.navTxt}>{this.props.data}</Text>
            </TouchableOpacity>
          </View>
        </View>                                                      
    </View>
  		) 
	}
}

const totalCapitulos = [50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,5,48,12,14,3,9,1,4,7,3,3,3,2,14,4,28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22];
