import React, { Component } from 'react'
import { Image, StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation'
import TelaVideos from './TelaVideos'
import TabVideos from './TabVideos'
import styles from './styles.js';
 
const RouteConfigs = {
    TabVideos: {screen: TabVideos},
    TelaVideos: {screen:TelaVideos}    
    }
 
const TabStack = StackNavigator(RouteConfigs)


 
export default class MainTabVideos extends Component {

  static navigationOptions = {
    tabBarIcon:({tintColor,focused}) => {
      if (focused) {
      return(
        <Image source={require('../img/video_on.png')} style={styles.tab_icon} />);
        } else {
      return(
        <Image source={require('../img/video_off.png')} style={styles.tab_icon} />);	
      }
    },
    tabBarLabel: 'Vídeos'
};
 
  render() {
 
    return (
      <TabStack screenProps={this.props.screenProps} />
    )
  }
}
