import React, { Component } from 'react';
import './App.css';
import PersonProfile from './PersonProfile';

class App extends Component {
  constructor() {
  super()
  this.state = {show : false}
  }
  Toggle = () => {this.setState({show : !this.state.show});}
  
 
render() {
  return (
    <div className="App"> 
      <button className="Profile" onClick= {this.Toggle}> {this.state.show ? "Hide" : "Show"} </button>
      {this.state.show ? <PersonProfile/> : null} 
    </div>
  );
 }
}

export default App;
