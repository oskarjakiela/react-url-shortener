import React from 'react';
import renderer from 'react-test-renderer';

import ShortcodesHeader from './ShortcodesHeader';


it('<ShortcodesHeader /> renders correctly', () => {
  const tree = renderer
    .create(<ShortcodesHeader />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
