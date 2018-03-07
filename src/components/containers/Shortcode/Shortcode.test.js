import React from 'react';
import renderer from 'react-test-renderer';

import Shortcode from './Shortcode';


it('<Shortcode /> renders correctly', () => {
  const tree = renderer
    .create(<Shortcode
      url="https://example.com"
      value="f00ba4"
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
