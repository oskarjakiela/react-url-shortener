import React from 'react';
import renderer from 'react-test-renderer';

import Text from './Text';


it('<Text /> renders correctly', () => {
  const tree = renderer
    .create(<Text>Lorem ipsum</Text>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('<Text className="foo-bar" /> renders correctly', () => {
  const tree = renderer
    .create(<Text className="foo-bar">Lorem ipsum</Text>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('<Text title="foo-bar" disabled /> renders correctly', () => {
  const tree = renderer
    .create(<Text title="foo-bar" disabled>Lorem ipsum</Text>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('<Text primary /> renders correctly', () => {
  const tree = renderer
    .create(<Text primary>Lorem ipsum</Text>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('<Text secondary /> renders correctly', () => {
  const tree = renderer
    .create(<Text secondary>Lorem ipsum</Text>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('<Text unimportant /> renders correctly', () => {
  const tree = renderer
    .create(<Text unimportant>Lorem ipsum</Text>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});


