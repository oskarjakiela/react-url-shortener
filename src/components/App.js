import React, { Component } from 'react';

import './App.css';
import { ShortenForm } from 'components/containers';
import { Header, Main } from 'components/layout';


class App extends Component {
  render() {
    return (
      <div className="Shorty-App">
        <Header />

        <Main>
          <ShortenForm />
        </Main>
      </div>
    );
  }
}

export default App;
