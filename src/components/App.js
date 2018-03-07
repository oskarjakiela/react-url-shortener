import React, { Component } from 'react';

import './App.css';
import { ShortcodeForm } from 'components/containers';
import { Header, Main } from 'components/layout';


class App extends Component {
  render() {
    return (
      <div className="Shorty-App">
        <Header />

        <Main>
          <ShortcodeForm />
        </Main>
      </div>
    );
  }
}

export default App;
