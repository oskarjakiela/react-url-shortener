import React from 'react';
import renderer from 'react-test-renderer';

import ShortcodesTable from './ShortcodesTable';


it('<ShortcodesTable /> renders correctly', () => {
  const tree = renderer
    .create(<ShortcodesTable
      items={[{
        lastSeenDate: '2018-02-02T18:25:43.511Z',
        redirectCount: 1140,
        shortcode: 'fca1ec3fe',
        startDate: '2018-02-01T11:49:02.283Z',
        url: 'https://jlongster.com/Radical-Statements-about-the-Mobile-Web',
      }]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
