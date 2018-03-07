import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';


it('<Button /> renders correctly', () => {
  const tree = renderer
    .create(<Button>Lorem ipsum</Button>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('<Button className="foo-bar" /> renders correctly', () => {
  const tree = renderer
    .create(<Button className="foo-bar">Lorem ipsum</Button>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('<Button disabled /> renders correctly', () => {
  const tree = renderer
    .create(<Button disabled>Lorem ipsum</Button>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
