import React, { Component } from 'react';

import './App.css';
import { Header, Main } from 'components/layout';
import { Text } from 'components/ui';


const { REACT_APP_API_URL } = process.env;

class App extends Component {
  render() {
    return (
      <div className="Shorty-App">
        <Header />

        <Main>
          <Text>
            {REACT_APP_API_URL}
          </Text>
        </Main>
      </div>
    );
  }
}

export default App;
