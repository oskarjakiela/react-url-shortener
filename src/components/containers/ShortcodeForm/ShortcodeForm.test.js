import React from 'react';
import renderer from 'react-test-renderer';

import ShortcodeForm from './ShortcodeForm';


it('<ShortcodeForm /> renders correctly', () => {
  const tree = renderer
    .create(<ShortcodeForm />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
