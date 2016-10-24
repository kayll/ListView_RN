import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions,Alert } from 'react-native';
const  window = Dimensions.get ('window');
class Scrolls extends Component{
  constructor( props ) {
    super( props );
    this.state = {
      currentScroll:0
    }
    this.next=this.next.bind(this);
    this.previous=this.previous.bind(this);
  }
  next(){
    if (this.state.currentScroll==3) {
      return;
    }
    this.refs.scrollNext.scrollTo({
      x:window.width*(this.state.currentScroll+1),
      animated:true,
    })
    this.setState({
      currentScroll:this.state.currentScroll+1,
    })
  }
  previous(){
    if (this.state.currentScroll==0) {
      return;
    }
    this.refs.scrollNext.scrollTo({
      x:window.width*(this.state.currentScroll-1),
      animated:true,
    })
   this.setState({
     currentScroll:this.state.currentScroll-1,
   })
 }
  render(){
    return(
      <ScrollView
        style={styles.Page}
        ref="scrollNext"
        horizontal={true}
        pagingEnabled={true}
        >
        <Scroll page = "1" next={ this.next} previous={ this.previous }></Scroll>
        <Scroll page = "2" next={ this.next} previous={ this.previous }></Scroll>
        <Scroll page = "3" next={ this.next} previous={ this.previous }></Scroll>
        <Scroll page = "4" next={ this.next} previous={ this.previous }></Scroll>
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
      <View style={styles.Step}>
        <Text>{this.props.page}</Text>
        <Text onPress={e => {this.props.next()}}>next</Text>
        <Text onPress={e => {this.props.previous()}}>previous</Text>
      </View>
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
