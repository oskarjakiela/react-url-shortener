import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import {
    ShortcodeForm,
    ShortcodesHeader,
    ShortcodesTable
} from 'components/containers';
import { Header, Main } from 'components/layout';
import {
  changeNewUrl,
  clearShortcodes,
  copyShortcode,
  createShortcode,
} from 'core/actions';


class App extends Component {
  render() {
    const { dispatch, items, newUrl } = this.props;
    const isEmpty = items.length === 0;

    return (
      <div className="Shorty-App">
        <Header />

        <Main>
          <ShortcodeForm
            value={newUrl}
            onChange={(url) => { dispatch(changeNewUrl(url)); }}
            onSubmit={(url) => { dispatch(createShortcode(url)); }}
          />

          {isEmpty ? null : (
            <ShortcodesHeader
              onClear={() => { dispatch(clearShortcodes()); }}
            />
          )}

          {isEmpty ? null : (
            <ShortcodesTable
              items={items}
              onCopyItem={(shortcode, link) => { dispatch(copyShortcode(shortcode, link)); }}
            />
          )}
        </Main>
      </div>
    );
  }
}

App.propTypes = {
  items: PropTypes.array.isRequired,
  newUrl: PropTypes.string.isRequired,
};

function mapStateToProps({ shortcodes }) {
  const { items, newUrl } = shortcodes;

  return {
    items,
    newUrl,
  };
}

export default connect(mapStateToProps)(App);
