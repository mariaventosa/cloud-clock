import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let time = new Date().toLocaleString();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> The time is {time} </p>
        </header>
      </div>
    );
  }
}

export default App;
