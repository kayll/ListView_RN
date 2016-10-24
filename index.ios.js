/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Details from './view/ListViewDetail';
// import Scrolls from './view/scroll'
// import Accordion2 from './view/accordion2'
import Lists from './view/List'
const  window = Dimensions.get ('window');
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Navigator,
  ListView,
  Image,
  TouchableOpacity,
} from 'react-native';

class Demo_RN extends Component {
  render() {
      return (
      <Navigator
        /*configureScene={(route) => {
              return Navigator.SceneConfigs.VerticalDownSwipeJump;
            }}*/
        renderScene={(route, navigator) => {
          if(route){
            if(route.name == "Details"){
              return <Details navigator={navigator}/>
            }
          }else {
            return <Lists navigator={navigator}/>
          }
        }} />
      )
  }
}

AppRegistry.registerComponent('Demo_RN', () => Demo_RN);
