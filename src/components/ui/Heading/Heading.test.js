import React from 'react';
import renderer from 'react-test-renderer';

import Heading from './Heading';


it('<Heading /> renders correctly', () => {
  const tree = renderer
    .create(<Heading>Lorem ipsum</Heading>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('<Heading className="foo-bar" /> renders correctly', () => {
  const tree = renderer
    .create(<Heading className="foo-bar">Lorem ipsum</Heading>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('<Heading id="foo-bar" /> renders correctly', () => {
  const tree = renderer
    .create(<Heading id="foo-bar">Lorem ipsum</Heading>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
