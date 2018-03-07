import React from 'react';
import renderer from 'react-test-renderer';

import Link from './Link';


it('<Link /> renders correctly', () => {
  const tree = renderer
    .create(<Link>Lorem ipsum</Link>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('<Link className="foo-bar" /> renders correctly', () => {
  const tree = renderer
    .create(<Link className="foo-bar">Lorem ipsum</Link>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('<Link href="foo-bar" /> renders correctly', () => {
  const tree = renderer
    .create(<Link href="/">Lorem ipsum</Link>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
