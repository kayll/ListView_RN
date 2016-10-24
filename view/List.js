import React, { Component } from 'react';
import ListViews from './ListView'
import Details from './ListViewDetail'
const  window = Dimensions.get ('window');
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Navigator,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';

class Lists extends Component {
  constructor(props) {
  super(props);
  this._onPress = this._onPress.bind(this)
  }
  _onPress(){
    const {navigator} = this.props;
    console.log(navigator)
    if (navigator) {
      navigator.push({
        name:'Details',
        component:Details,
      })
    }
  }
render() {
  var ds =[
    {imgSrc:'http://img.careerfore.com/aware.png',title:'自我认知',content:'The ancient Greeks and early originators of organized education in the west recognized that true education was ultimately about self-knowledge, or to "know thyself." '},
    {imgSrc:'http://img.careerfore.com/motivation.png',title:'自我驱动',content:'The ancient Greeks and early originators of organized education in the west recognized that true education was ultimately about self-knowledge, or to "know thyself." '},
    {imgSrc:'http://img.careerfore.com/fast.png',title:'快速学习',content:'The ancient Greeks and early originators of organized education in the west recognized that true education was ultimately about self-knowledge, or to "know thyself." '},
    {imgSrc:'http://img.careerfore.com/team.png',title:'团队合作与沟通',content:'The ancient Greeks and early originators of organized education in the west recognized that true education was ultimately about self-knowledge, or to "know thyself." '},
    {imgSrc:'http://img.careerfore.com/problem.png',title:'分析能力',content:'The ancient Greeks and early originators of organized education in the west recognized that true education was ultimately about self-knowledge, or to "know thyself." '},
    {imgSrc:'http://img.careerfore.com/assess.png',title:'联合面试',content:'The ancient Greeks and early originators of organized education in the west recognized that true education was ultimately about self-knowledge, or to "know thyself." '},
    {imgSrc:'http://img.careerfore.com/aware.png',title:'自我认知',content:'The ancient Greeks and early originators of organized education in the west recognized that true education was ultimately about self-knowledge, or to "know thyself." '},
    {imgSrc:'http://img.careerfore.com/motivation.png',title:'自我驱动',content:'The ancient Greeks and early originators of organized education in the west recognized that true education was ultimately about self-knowledge, or to "know thyself." '},
    {imgSrc:'http://img.careerfore.com/fast.png',title:'快速学习',content:'The ancient Greeks and early originators of organized education in the west recognized that true education was ultimately about self-knowledge, or to "know thyself." '},
    {imgSrc:'http://img.careerfore.com/team.png',title:'团队合作与沟通',content:'The ancient Greeks and early originators of organized education in the west recognized that true education was ultimately about self-knowledge, or to "know thyself." '},
    {imgSrc:'http://img.careerfore.com/problem.png',title:'分析能力',content:'The ancient Greeks and early originators of organized education in the west recognized that true education was ultimately about self-knowledge, or to "know thyself." '},
    {imgSrc:'http://img.careerfore.com/assess.png',title:'联合面试',content:'The ancient Greeks and early originators of organized education in the west recognized that true education was ultimately about self-knowledge, or to "know thyself." '},
  ]
  console.log(ds)
  return (
    <ListViews
      dataSource={ds}
      renderRow = {(rowData)=>{
          return <TouchableOpacity
           onPress={e => this._onPress()}
           activeOpacity={0.8}
           style={styles.cards}>
            <Image
              style={styles.img}
              source={{url: rowData.imgSrc}}
            />
            <View style={styles.right}>
              <Text style={styles.txtTitle}>{rowData.title}</Text>
              <Text numberOfLines={3} style={styles.txtContent}>{rowData.content}</Text>
            </View>
          </TouchableOpacity>
        }
      }
      renderHeader = {() =>{
        return <View style={styles.top}>
                 <Text style={styles.txtHeader} >MyList</Text>
               </View>
      }}
    />
    )
  }
}
const styles={
  cards:{
    width:window.width,
    borderBottomWidth:1,
    borderColor:'#AAAAAA',
    paddingVertical:10,
    paddingHorizontal:20,
    marginTop:5,
    flexDirection:'row'
  },img:{
    width:160,
    height:100,
  },right:{
    flex:1,
    flexDirection:'column'
  },txtTitle:{
    textAlign:'center',
    fontSize:20,
    marginLeft:5,
    fontWeight: 'bold',
  },txtContent:{
    marginLeft:5,
    height:70,
    paddingTop:8,
    lineHeight:20,
  },top:{
    marginTop:22,
    height:44,
    width:window.width,
    justifyContent:'center'
  },txtHeader:{
    textAlign:'center',
    fontSize:20,
    marginTop:22,
    textAlign:'center',
    fontWeight: 'bold',
  }
}

module.exports=Lists;
