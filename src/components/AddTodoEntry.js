
import React from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, View} from 'react-native';

const AddTodoEntry = ({onClick}) => {
  let input;

  return (
    <div>
      {/* <input style={styles.input} placeholder="Add Task"
        ref={node => {
            input = node;
          }}
        //onChangeText={(searchString) => {this.setState({searchString})}}
        underlineColorAndroid="transparent"/> */}
      <input ref={node => {
          input = node;
        }}/>
      <button onClick={() => {
        onClick(input.value);
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};

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

export default AddTodoEntry;
