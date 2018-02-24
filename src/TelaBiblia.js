import React, { Component } from 'react';
import { StyleSheet, FlatList, StatusBar, Text, Image, ImageBackground, View, Alert, Button, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './styles.js';


export default class TelaBiblia extends Component {
  

  static navigationOptions = ({navigation}) => ({
        title: 'Bíblia',
        headerStyle:{
            backgroundColor:'#d8d8d8',
            height: 25},
     });

  constructor(props)
  {
   super(props);
    this.state = {
   
    livros:[
{key: "1", abrev:"gen", name : "Gênesis", en_name: "Genesis"},
{key: "2", abrev:"exo", name : "Êxodo", en_name: "Exodus"},
{key: "3", abrev:"lev", name : "Levítico", en_name: "Leviticus"},
{key: "4", abrev:"num", name : "Números", en_name: "Numbers"},
{key: "5", abrev:"deu", name : "Deuteronômio", en_name: "Deuteronomy"},
{key: "6", abrev:"jos", name : "Josué", en_name: "Joshua"},
{key: "7", abrev:"jdg", name : "Juízes", en_name: "Judges"},
{key: "8", abrev:"rut", name : "Rute", en_name: "Ruth"},
{key: "9", abrev:"1sa", name : "1 Samuel", en_name: "1 Samuel"},
{key: "10", abrev:"2sa", name : "2 Samuel", en_name: "2 Samuel"},
{key: "11", abrev:"1ki", name : "1 Reis", en_name: "1 Kings"},
{key: "12", abrev:"2ki", name : "2 Reis", en_name: "2 Kings"},
{key: "13", abrev:"1ch", name : "1 Crônicas", en_name: "1 Chronicles"},
{key: "14", abrev:"2ch", name : "2 Crônicas", en_name: "2 Chronicles"},
{key: "15", abrev:"ezr", name : "Esdras", en_name: "Ezra"},
{key: "16", abrev:"neh", name : "Neemias", en_name: "Nehemiah"},
{key: "17", abrev:"est", name : "Ester", en_name: "Esther"},
{key: "18", abrev:"job", name : "Jó", en_name: "Job"},
{key: "19", abrev:"psa", name : "Salmos", en_name: "Psalms"},
{key: "20", abrev:"pro", name : "Provérbios", en_name: "Proverbs"},
{key: "21", abrev:"ecl", name : "Eclesiastes", en_name: "Ecclesiastes"},
{key: "22", abrev:"sng", name : "Cantares", en_name: "Song of Solomon"},
{key: "23", abrev:"isa", name : "Isaías", en_name: "Isaiah"},
{key: "24", abrev:"jer", name : "Jeremias", en_name: "Jeremiah"},
{key: "25", abrev:"lam", name : "Lamentações", en_name: "Lamentations"},
{key: "26", abrev:"eze", name : "Ezequiel", en_name: "Ezekiel"},
{key: "27", abrev:"dan", name : "Daniel", en_name: "Daniel"},
{key: "28", abrev:"hos", name : "Oseias", en_name: "Hosea"},
{key: "29", abrev:"jol", name : "Joel", en_name: "Joel"},
{key: "30", abrev:"amo", name : "Amós", en_name: "Amos"},
{key: "31", abrev:"oba", name : "Obadias", en_name: "Obadiah"},
{key: "32", abrev:"jon", name : "Jonas", en_name: "Jonah"},
{key: "33", abrev:"mic", name : "Miqueias", en_name: "Micah"},
{key: "34", abrev:"nam", name : "Naum", en_name: "Nahum"},
{key: "35", abrev:"hab", name : "Habacuque", en_name: "Habakkuk"},
{key: "36", abrev:"zep", name : "Sofonias", en_name: "Zephaniah"},
{key: "37", abrev:"hag", name : "Ageu", en_name: "Haggai"},
{key: "38", abrev:"zec", name : "Zacarias", en_name: "Zechariah"},
{key: "39", abrev:"mal", name : "Malaquias", en_name: "Malachi"},
{key: "40", abrev:"mat", name : "Mateus", en_name: "Matthew"},
{key: "41", abrev:"mrk", name : "Marcos", en_name: "Mark"},
{key: "42", abrev:"luk", name : "Lucas", en_name: "Luke"},
{key: "43", abrev:"jhn", name : "João", en_name: "John"},
{key: "44", abrev:"act", name : "Atos", en_name: "Acts"},
{key: "45", abrev:"rom", name : "Romanos", en_name: "Romans"},
{key: "46", abrev:"1co", name : "1 Coríntios", en_name: "1 Corinthians"},
{key: "47", abrev:"2co", name : "2 Coríntios", en_name: "2 Corinthians"},
{key: "48", abrev:"gal", name : "Gálatas", en_name: "Galatians"},
{key: "49", abrev:"eph", name : "Efésios", en_name: "Ephesians"},
{key: "50", abrev:"php", name : "Filipenses", en_name: "Philippians"},
{key: "51", abrev:"col", name : "Colossenses", en_name: "Colossians"},
{key: "52", abrev:"1th", name : "1 Tessalonicenses", en_name: "1 Thessalonians"},
{key: "53", abrev:"2th", name : "2 Tessalonicenses", en_name: "2 Thessalonians"},
{key: "54", abrev:"1ti", name : "1 Timóteo", en_name: "1 Timothy"},
{key: "55", abrev:"2ti", name : "2 Timóteo", en_name: "2 Timothy"},
{key: "56", abrev:"tit", name : "Tito", en_name: "Titus"},
{key: "57", abrev:"phm", name : "Filêmon", en_name: "Philemon"},
{key: "58", abrev:"heb", name : "Hebreus", en_name: "Hebrews"},
{key: "59", abrev:"jas", name : "Tiago", en_name: "James"},
{key: "60", abrev:"1pe", name : "1 Pedro", en_name: "1 Peter"},
{key: "61", abrev:"2pe", name : "2 Pedro", en_name: "2 Peter"},
{key: "62", abrev:"1jn", name : "1 João", en_name: "1 John"},
{key: "63", abrev:"2jn", name : "2 João", en_name: "2 John"},
{key: "64", abrev:"3jn", name : "3 João", en_name: "3 John"},
{key: "65", abrev:"jud", name : "Judas", en_name: "Jude",},
{key: "66", abrev:"rev", name : "Apocalipse", en_name: "Revelation"}  
]

  
  
  }}
 
  render() { 
    return (
    <View style={styles.container}>
      <ImageBackground source={require('../img/bkg.jpg')} style={styles.bg}>
      <StatusBar
                       
                    />

        <View>
            <FlatList
                data={ this.state.livros } //livros
                renderItem={({item}) => <Lista data={item} navigation={this.props.navigation} /> }
                keyExtractor={(item, index) => item.abrev}   
            />
        </View>
      </ImageBackground>  
    </View>
            
    );
  }
}

class Lista extends Component {

  constructor(props) {
    super(props);
    this.state = {
       
    };
    this.click = this.click.bind(this);
   
  }

  click() {

    <View style={styles.container}>      
        <View>
         <FlatList
                data={ this.state.capitulos }
                renderItem={({item}) => <ListaCap cap={item} navigation={this.props.navigation} /> }     
            />
        </View>
      
    </View>

   };

  render() {
    return (
      <View style={styles.container}>  
          <View style={styles.listaLivros}>
            <View style={styles.navTitle}>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Capitulo', {book: this.props.data.name, en_book: this.props.data.en_name, key: this.props.data.key, abrev: this.props.data.abrev} ) } }>     
                <Text style={styles.navTxt}>{this.props.data.name}</Text>
              </TouchableOpacity>
            </View>
          </View>      
      </View>
      ) 
  }
}

class ListaCap extends Component {
  render () {
    return  (
      <View style={styles.listaCapitulos}>
        <View>
          <Text>
            {this.props.cap}
          </Text>
        </View>
      </View> 
    )
  }
}
 

