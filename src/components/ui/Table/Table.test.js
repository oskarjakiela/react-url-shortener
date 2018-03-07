import React from 'react';
import renderer from 'react-test-renderer';

import Table from './Table';


it('<Table /> renders correctly', () => {
  const tree = renderer
    .create(<Table
      headers={['Foo']}
      rows={[
        [<span>Bar</span>]
      ]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
