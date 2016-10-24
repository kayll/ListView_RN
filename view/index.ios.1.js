/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Scrolls from './view/scroll'
import Accordion2 from './view/accordion2'
const  window = Dimensions.get ('window');
// import
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Navigator
} from 'react-native';

class Demo_RN extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Navigator
      renderScene={(route, navigator) =>{
        // console.log(route.iden)
        if(route==undefined){
          return  <View style={{flex:1,backgroundColor:'skyblue'}} navigator = {this.navigator}>
            <Accordion2 navigator = {navigator}></Accordion2>
          </View>
        }else {
          return <View style = {{backgroundColor :'red',flex:1}}></View>
        }

      }
}
  />);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop : 44,
    alignItems:'center',
  },txt:{
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:'#001f3f'
  },title:{
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    width:window.width,
    textAlign:'center',
    fontSize:20,
    lineHeight:20,
  }
});

AppRegistry.registerComponent('Demo_RN', () => Demo_RN);
