import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <div className="App">

{/* <button >test2</button> */}
{/* <TouchableOpacity */}
<button onClick={this.handleClick}
   style={{
       borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       //alignItems:'center',
       //justifyContent:'center',
       width:100,
       height:100,
       backgroundColor:'#fff',
       borderRadius:100,
     }}
 >Load
   {/* <Icon name={"chevron-right"}  size={30} color="#01a699" /> */}
</button>
 {/* </TouchableOpacity> */}
        {/* <text>Test</text> */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: 'bold' }
});

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });

export default App;
