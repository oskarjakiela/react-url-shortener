import React from 'react';
import renderer from 'react-test-renderer';

import Logo from './Logo';


it('<Logo /> renders correctly', () => {
  const tree = renderer
    .create(<Logo>Lorem ipsum</Logo>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('<Logo className="foo-bar" /> renders correctly', () => {
  const tree = renderer
    .create(<Logo className="foo-bar">Lorem ipsum</Logo>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('<Logo title="foo-bar" disabled /> renders correctly', () => {
  const tree = renderer
    .create(<Logo className="foo-bar">Lorem ipsum</Logo>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
