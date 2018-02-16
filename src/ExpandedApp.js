import {AppRegistry, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {Component} from 'react';
import ContextSelect from './ContextSelect';
import SearchableTasks from './SearchableTasks';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {Button} from 'react-native';

class ExpandedApp extends React.Component {

  state = {
    visibility: "FullScreen", // FullScreen ToSelecterdSize Hidden
    presentedDataState: 'All',
    filterText: ''
  }

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
      <View style={styles.searchSection}>
        <ContextSelect/>
        <Button onPress="" title="Sort by priority" color="#841584" accessibilityLabel="Learn more about this purple button"/>
        <Button onPress="" title="Sort by date" color="#841584" accessibilityLabel="Learn more about this purple button"/>
      </View>
      <SearchableTasks/>
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
