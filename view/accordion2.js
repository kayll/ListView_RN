import React, {Component} from 'react';
import {View, Text, ScrollView,StyleSheet,Dimensions,Alert} from 'react-native';
const window = Dimensions.get ('window');

class Accordion2  extends Component{
  constructor(props) {
    super(props);
    this.state = {
      current:{
        iden:'',
        show:true
      }
    }

  }


  render(){
    return(
      <ScrollView style={styles.scroll} contentContainerStyle={styles.con}>
      <View style={styles.title}>
      <Text style={styles.txt} onPress={e => {
        this.setState({
           current:{
            iden:1,
            show:this.state.current.iden ===1 ? !this.state.current.show : true
          }
        })
        this.props.navigator.push({iden:'home1'})
      }}>测试一</Text></View>
            {this.state.current.iden ===1&&this.state.current.show?(<View style={styles.content}><Text>内容集锦，这是内容一一一一一一一一</Text></View>):null}
      <View style={styles.title}>
      <Text style={styles.txt} onPress={e => {
        this.setState({
           current:{
            iden:2,
            show:this.state.current.iden ===2 ?!this.state.current.show:true
          }
        })
      }}>测试二</Text></View>
            {this.state.current.iden ===2&&this.state.current.show?(<View style={styles.content}><Text>内容集锦，这是内容二二二二二二二二</Text></View>):null}
      <View style={styles.title}>
      <Text style={styles.txt} onPress={e => {
        this.setState({
           current:{
            iden:3,
            show:this.state.current.iden ===3 ?!this.state.current.show:true
          }
        })
      }}>测试三</Text></View>
            {this.state.current.iden ===3&&this.state.current.show?(<View style={styles.content}><Text>内容集锦，这是内容三三三三三三三三</Text></View>):null}
      <View style={styles.title}>
      <Text style={styles.txt} onPress={e => {
        this.setState({
           current:{
            iden:4,
            show:this.state.current.iden ===4 ?!this.state.current.show:true
          }
        })
      }}>测试四</Text></View>
            {this.state.current.iden ===4&&this.state.current.show?(<View style={styles.content}><Text>内容集锦，这是内容四四四四四四四四</Text></View>):null}
      <View style={styles.title}>
      <Text style={styles.txt} onPress={e => {
        this.setState({
           current:{
            iden:5,
            show:this.state.current.iden ===5 ?!this.state.current.show:true
          }
        })
      }}>测试五</Text></View>
            {this.state.current.iden ===5&&this.state.current.show?(<View style={styles.content}><Text>内容集锦，这是内容五五五五五五五五</Text></View>):null}
      </ScrollView>
    )
  }
}
const styles ={
  scroll:{
    marginTop:50,
  },title:{
    borderBottomWidth:1,
    borderColor:'#AAAAAA',
    width:(window.width-40),
    paddingVertical:10,
  },txt:{
    textAlign:'center',
  },content:{
    backgroundColor:'#39CCCC',
    width:(window.width-40),
    paddingVertical:10,
    paddingHorizontal:20,
    marginTop:5,
  },con:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column'
  }
}
module.exports=Accordion2;
