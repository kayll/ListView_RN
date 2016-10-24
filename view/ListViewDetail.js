import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, Text, Image, Dimensions, TouchableOpacity, LayoutAnimation } from 'react-native';
import {Lists} from './List';
const  window = Dimensions.get ('window');

class Details extends Component {
  constructor(props) {
    super(props);
    this.state={
      showNewWord : false,
      w: 300,
      h: 20,
    }
    this._onPress = this._onPress.bind(this)
    this.changeColor = this.changeColor.bind(this)
  }
  _onPress(){
    this.changeColor()
    this.props.navigator.pop();

  }
  _onClick(){
    LayoutAnimation.configureNext({
      duration:1200,
      create:{
        type:'linear',
        property:'opacity',
      },
      update:{
        type:'spring',
        springDamping:0.4
      }
    });
    this.setState({
      showNewWord:true,
      h:this.state.h+30,
      w:this.state.w+30,
    })
  }
 changeColor() {
    this.refs.btn.setNativeProps({
      style:{
        backgroundColor:'#FFE4E1',
        borderColor:'#FFE4E1',
      }
    })
  }

  render(){
    var newWord = this.state.showNewWord ?(
      <View style={[styles.content, {width: this.state.w, height: this.state.h}]}>
        <Text style={[{textAlign: 'center'}]}>that is a New word !</Text>
      </View>) : null;
    return(
      <ScrollView
        style={styles.scrolls}
      >
        <View style={styles.details}>
          <Image
            style={styles.img}
            blurRadius={.9}
            resizeMode='contain'
            defaultSource={require('../image/blog-img-1.jpg')}
            source={{uri:'http://img.careerfore.com/aware.png'}}
          />
            <Text style={styles.title}>自我认知</Text>
            <Text style={styles.txt}>that is a word very long......
              The ancient Greeks and early originators of organized education in the west recognized that true education was ultimately about self-knowledge, or to know thyself.
            </Text>
          <View style={styles.container}>
            <View style={[styles.content,{width:this.state.w,height:this.state.h}]}>
              <Text style={{textAlign:'left'}}>It is amazing effect,my first Animation...</Text>
            </View>
            {newWord}
            <TouchableOpacity onPress={e => this._onClick()}>
              <View style={styles.btn}>
                <Text style={styles.btnTxt}>clickAnimation</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View ref="btn" style={styles.btn} >
            <Text style={styles.btnTxt} onPress={e => this._onPress()}>Back</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}
const styles ={
  scrolls:{
    backgroundColor:'#F8F8FF',
  },details:{
    flex:1,
    marginTop:44,
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    flexDirection:'column',
  },img:{
    width:window.width,
    height:300,
  },title:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
  },txt:{
    textAlign:'left',
    fontSize:25,
    width:(window.width-20),
    marginTop:10,
  },btn:{
    width:200,
    height:50,
    marginTop:20,
    padding:10,
    borderColor:'#00ded0',
    borderWidth:1,
    borderRadius:9,
  },btnTxt:{
    fontSize:20,
    textAlign:'center',
  },content:{
    backgroundColor:'#F3F1E0',
    marginVertical:20,
    padding:20,
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center',
  }
}
module.exports = Details;
