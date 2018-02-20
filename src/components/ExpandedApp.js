import {AppRegistry, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {Component} from 'react';
import TaskTree from './TaskTree'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { Button } from 'react-native';

class ExpandedApp extends React.Component {
  handleClick = () => {
    //import('./moduleA')
    console.log("test");
  };

  render() {
    return (<TaskTree />);
  }
}

export default ExpandedApp;
