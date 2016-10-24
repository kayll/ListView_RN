import React, { Component } from 'react';
import { View, ListView, Text, StyleSheet  } from 'react-native';


class ListViews extends Component {
  constructor(props) {
  super(props);
  var MyData = new ListView.DataSource({rowHasChanged: (r1, r2,)=>r1 !== r2});
  this.state = {
    dataSource: MyData.cloneWithRows(props.dataSource),
  };
}
render() {
  return (
    <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => {
        return this.props.renderRow === undefined
                ?
                null
                :
                this.props.renderRow(rowData)
      }}
      renderHeader = {()=>{
        return this.props.renderHeader === undefined
                ?
                null
                :
                this.props.renderHeader()
      }}
    />
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop : 44,
    alignItems:'center',
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:'#001f3f',
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


module.exports=ListViews;
