import React, { Component } from 'react';
import { StyleSheet, Text, StatusBar, Image, View, TouchableOpacity, ImageBackground} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './styles.js';




//*********************************Exibe tela inicial*******************************//




export default class TelaInicial extends Component {

  

  static navigationOptions = ({navigation}) => ({
   header: null
  })

  render () {      
      return ( 
              <View style={styles.container}>
                <ImageBackground source={require('../img/bg.jpg')} style={styles.bg}>               
                   
                    <View style={styles.navIcons}>
                        <View style={styles.buttonNav}>
                          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Biblia')}}>
                            <Image source={require ('../img/logo_pb_GDbr.png')} style={styles.iconImg} />
                            <Text  style={styles.customFont}>
                              Clique para iniciar
                          </Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{marginTop: 100}}onPress={()=>{this.props.navigation.navigate('WhoWeAre')}}>
                             <Text  style={{textDecorationLine: 'underline', color: '#fff'}}>
                                Quem somos
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </ImageBackground>
              </View>
            )
    }
}


