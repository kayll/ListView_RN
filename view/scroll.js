import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions, } from 'react-native';
const  window = Dimensions.get ('window');
class Scrolls extends Component{
  constructor( props ) {
    super( props );
    this.state = {
      currentScroll:0
    }
  }


  render(){
    return(
      <ScrollView style={styles.Page}>
        <Scroll page = "1"></Scroll>
        <Scroll page = "2"></Scroll>
        <Scroll page = "3"></Scroll>
        <Scroll page = "4"></Scroll>
      </ScrollView>
    )
  }
}

class Scroll extends Component {
  constructor( props ) {
    super( props );
  }
  render(){
    return(
      <View style={styles.Step}><Text>{this.props.page}</Text></View>
    )
  }
}
const styles = {
  Page:{
    flex:1,
  },
  Step:{
    width:window.width,
    height:window.height,
    alignItems:'center',
    justifyContent:'center',
  }
}
module.exports = Scrolls;
