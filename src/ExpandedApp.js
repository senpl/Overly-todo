import React, {Component,Icon,TextInput,View} from 'react';
import TaskList from './TaskList'
// import styles from './Styles.css'


class ExpandedApp extends Component {
  handleClick = () => {
    //import('./moduleA')
    console.log("test");
  };

  render() {
    return (<div className="ExpandedApp">
      {/* <View style={styles.searchSection}>
          <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
          <TextInput
              style={styles.input}
              placeholder="User Nickname"
              onChangeText={(searchString) => {this.setState({searchString})}}
              underlineColorAndroid="transparent"
          />
      </View> */}
      <TaskList/>
      <button onClick={this.handleClick} style={{
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          width: 100,
          height: 100,
          backgroundColor: '#fff',
          borderRadius: 100
        }}></button>

    </div>);
  }
}

export default ExpandedApp;
