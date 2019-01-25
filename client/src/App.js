import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock'; // Custom Clock element
import socketIOClient from "socket.io-client";

let time = new Date().toLocaleString();

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001"
    };
  }
  componentDidMount() {
    const {endpoint} = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("Date", data => this.setState({ response: data }));
  }
  render() {
    const { response } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Clock> </Clock>
          <p>
              Server Time: {response}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
