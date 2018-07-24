import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, Image, View, Alert, Button, ImageBackground, TouchableOpacity} from 'react-native';
import { TabNavigator } from 'react-navigation';

import TabVersiculos from './TabVersiculos';
import TabComentarios from './TabComentarios';
import MainTabVideos from './MainTabVideos';
import TabAudios from './TabAudios';
//import TabImages from './TabImages';
import styles from './styles.js';


const Tabs = TabNavigator({
  TabVersiculos: { screen: TabVersiculos},
  TabComentarios: { screen: TabComentarios},
  MainTabVideos: { screen: MainTabVideos},
  TabAudios: { screen: TabAudios},
  //TabImages: { screen: TabImages}
},
  {tabBarPosition: 'top', animationEnable: true,
  tabBarOptions: {
    showIcon:true,
    showLabel:false,
    style: {
      backgroundColor:'#d8d8d8'
    },
    labelStyle:{
      fontSize:10,
      lineHeight:12
    },
    activeTintColor:'#333333',
    inactiveTintColor:'#CCCCCC'
  },


});

export default class TelaTabs extends Component {

  static navigationOptions = ({navigation}) => ({
        header: null,
     });

  constructor(props) {
    super(props);
  
    this.state = {

    };

  }

render() {
	return(
    <View style={styles.container}>
      <Tabs screenProps = {this.props.navigation.state.params} />
    </View>
    	)
	}
}
