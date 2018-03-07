import React from 'react';
import renderer from 'react-test-renderer';

import Input from './Input';


it('<Input /> renders correctly', () => {
  const tree = renderer
    .create(<Input />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('<Input className="foo-bar" /> renders correctly', () => {
  const tree = renderer
    .create(<Input className="foo-bar" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
