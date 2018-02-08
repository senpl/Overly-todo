import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MainButton extends Component {
  handleClick = () => {
    //import('./moduleA')
console.log("test");
      // .then(({ console.log("test2") }) => {
      //   // Use moduleA
      //   console.log("test3")
      //
      // })
      // .catch(err => {
      //   // Handle failure
      // });
  };

  // function Greeting(props) {
  //   const isLoggedIn = props.isLoggedIn;
  //   if (isLoggedIn) {
  //     return <UserGreeting />;
  //   }
  //   return <GuestGreeting />;
  // }
  //
  // function UserGreeting(props) {
  //   return <h1>Welcome back!</h1>;
  // }
  //
  // function GuestGreeting(props) {
  //   return <h1>Please sign up.</h1>;
  // }



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
 >
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

export default MainButton;
