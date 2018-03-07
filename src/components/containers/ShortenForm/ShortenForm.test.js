import React from 'react';
import renderer from 'react-test-renderer';

import ShortenForm from './ShortenForm';


it('<ShortenForm /> renders correctly', () => {
  const tree = renderer
    .create(<ShortenForm />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
