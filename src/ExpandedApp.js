import {AppRegistry, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {Component} from 'react';
import TaskList from './TaskList'
import Icon from 'react-native-vector-icons/dist/Ionicons';

class ExpandedApp extends React.Component {
  handleClick = () => {
    //import('./moduleA')
    console.log("test");
  };

  render() {
    return (<div>
      <View style={styles.searchSection}>
        <TextInput style={styles.input} placeholder="Add Task"
          //onChangeText={(searchString) => {this.setState({searchString})}}
          underlineColorAndroid="transparent"/>
        <Icon.Button name="ios-eye"/>
      </View>
    </div>);
  }
}

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242'
  }
});

export default ExpandedApp;
