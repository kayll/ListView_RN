import React, { Component } from 'react';
import { Text, View, ScrollView , Dimensions,Alert,TouchableHighlight } from 'react-native';
const  window = Dimensions.get ('window');

class Accordion extends Component {
  constructor(props){
    super(props);
    this.state={
      show:null
    }
  }

  Toggle(index){
    this.setState({
      show:this.state.show==index?null:index
    })
  }
  render(){
    return(
      <View style={{marginTop:50,marginLeft:50}}>
        <View>
          <Text onPress={e =>{this.Toggle(1)}}>title1</Text>
          {
            this.state.show==1?
            <Text>content1</Text>
            :null
          }
        </View>
        <View>
          <Text onPress={e =>{this.Toggle(2)}}>title2</Text>
          {
            this.state.show==2?
            <Text>content2</Text>
            :null
          }
        </View>
        <View>
          <Text onPress={e =>{this.Toggle(3)}}>title3</Text>
          {
            this.state.show==3?
            <Text>content3</Text>
            :null
          }
        </View>
      </View>
    )
  }
}
const styles = {
  Page:{
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
    marginTop:50,
  },content:{
    backgroundColor:'#2ECC40',
    alignItems:'center',
    justifyContent:'center',
    width:window.width,
    padding:20,
  }
}
module.exports = Accordion;
