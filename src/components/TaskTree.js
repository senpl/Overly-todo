import React, { Component } from 'react';
import {Card, CardItem, Body, Alert, Button, AppRegistry, StyleSheet, Text, TextInput, View, TouchableHighlight} from 'react-native';
import SortableTree, { addNodeUnderParent, removeNodeAtPath, changeNodeAtPath} from 'react-sortable-tree';
import App from './App';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app

export default class TaskTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      searchFocusIndex: 0,
      searchFoundCount: null,
      treeData: [],
    };

  }
  getData() {
    return fetch('http://localhost:3000/data.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({treeData: responseJson.data});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
       this.getData();
   }

  render() {
    const getNodeKey = ({ treeIndex }) => treeIndex;
    const { searchString, searchFocusIndex, searchFoundCount } = this.state;

    // Case insensitive search of `node.title`
    const customSearchMethod = ({ node, searchQuery }) =>
      searchQuery &&
      node.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;

    const selectPrevMatch = () =>
      this.setState({
        searchFocusIndex:
          searchFocusIndex !== null
            ? (searchFoundCount + searchFocusIndex - 1) % searchFoundCount
            : searchFoundCount - 1,
      });

    const selectNextMatch = () =>
      this.setState({
        searchFocusIndex:
          searchFocusIndex !== null
            ? (searchFocusIndex + 1) % searchFoundCount
            : 0,
      });

    return (
      <div>
        <View style={styles.searchSection}>
          <Button
            onPress=""
            title="Switch task context"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress=""
            title="Sort by priority"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress=""
            title="Sort by date"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.searchSection}>
          <TextInput style={styles.input} placeholder="Add Task"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            underlineColorAndroid="transparent"/>
          <Button
            onPress={() =>
              this.setState(state => ({
                treeData: state.treeData.concat({
                  title: `${this.state.text}`,
                  subtitle: ''
                }),
              }))
            }
            title="Add"
          >
          </Button>
        </View>
        <div style={{ height: 300 }}>
          <SortableTree
            treeData={this.state.treeData}
            onChange={treeData => this.setState({ treeData })}
            //
            // Custom comparison for matching during search.
            // This is optional, and defaults to a case sensitive search of
            // the title and subtitle values.
            // see `defaultSearchMethod` in https://github.com/fritz-c/react-sortable-tree/blob/master/src/utils/default-handlers.js
            searchMethod={customSearchMethod}
            //
            // The query string used in the search. This is required for searching.
            searchQuery={searchString}
            //
            // When matches are found, this property lets you highlight a specific
            // match and scroll to it. This is optional.
            searchFocusOffset={searchFocusIndex}
            //
            // This callback returns the matches from the search,
            // including their `node`s, `treeIndex`es, and `path`s
            // Here I just use it to note how many matches were found.
            // This is optional, but without it, the only thing searches
            // do natively is outline the matching nodes.
            searchFinishCallback={matches =>
              this.setState({
                searchFoundCount: matches.length,
                searchFocusIndex:
                  matches.length > 0 ? searchFocusIndex % matches.length : 0,
              })
            }
            generateNodeProps={({ node, path }) => ({
              buttons: [
                <Button
                  title="Add"
                  onPress={() =>
                    this.setState(state => ({
                      treeData: addNodeUnderParent({
                        treeData: state.treeData,
                        parentKey: path[path.length - 1],
                        expandParent: true,
                        getNodeKey,
                        newNode: {
                          title: '',
                          subtitle: ''
                        },
                      }).treeData,
                    }))
                  }
                >
                </Button>,
                <Button
                  title="Remove"
                  onPress={() =>
                    this.setState(state => ({
                      treeData: removeNodeAtPath({
                        treeData: state.treeData,
                        path,
                        getNodeKey,
                      }),
                    }))
                  }
                >
                </Button>,
              ],
            })}
          />
        </div>
        <form
          style={{ display: 'inline-block' }}
          onSubmit={event => {
            event.preventDefault();
          }}
        >
          <View style={styles.searchSection}>
            <TextInput style={styles.input}
            id="find-box"
            type="text"
            placeholder="Search..."
            style={{ fontSize: '1rem' }}
            value={searchString}
            onChange={event =>
              this.setState({ searchString: event.target.value })
            }
          />

          <Button
            title= "<"
            type="button"
            disabled={!searchFoundCount}
            onPress={selectPrevMatch}
          >
          </Button>

          <Button
            title= ">"
            type="submit"
            disabled={!searchFoundCount}
            onClick={selectNextMatch}
          >
          </Button>
          </View>
          <span>
            &nbsp;
            {searchFoundCount > 0 ? searchFocusIndex + 1 : 0}
            &nbsp;/&nbsp;
            {searchFoundCount || 0}
          </span>
        </form>
      </div>
    );
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
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
