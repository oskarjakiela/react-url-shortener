import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';


const { REACT_APP_API_URL } = process.env;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <p className="App-api-url">
          <code>
            {REACT_APP_API_URL}
          </code>
        </p>
      </div>
    );
  }
}

export default App;
