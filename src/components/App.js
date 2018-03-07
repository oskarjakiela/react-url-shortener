import React, { Component } from 'react';

import './App.css';
import {
    ShortcodeForm,
    ShortcodesHeader,
    ShortcodesTable
} from 'components/containers';
import { Header, Main } from 'components/layout';


class App extends Component {
  render() {
    const items = [{
      lastSeenDate: '2018-02-02T18:25:43.511Z',
      redirectCount: 1140,
      shortcode: 'fca1ec3fe',
      startDate: '2018-02-01T11:49:02.283Z',
      url: 'https://jlongster.com/Radical-Statements-about-the-Mobile-Web',
    }];

    return (
      <div className="Shorty-App">
        <Header />

        <Main>
          <ShortcodeForm />

          <ShortcodesHeader />

          <ShortcodesTable
            items={items}
          />
        </Main>
      </div>
    );
  }
}

export default App;
