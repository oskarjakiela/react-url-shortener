import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Text from './components/Text';



const { REACT_APP_API_URL } = process.env;

class App extends Component {
  render() {
    return (
      <div className="Shorty-App">
        <Header />

        <main className="Shorty-Main">
          <Text>
            {REACT_APP_API_URL}
          </Text>
        </main>
      </div>
    );
  }
}

export default App;
