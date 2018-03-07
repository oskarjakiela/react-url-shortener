import { map } from 'ramda';
import React from 'react';
import timeago from 'timeago.js';

import './ShortcodesTable.css';
import { Shortcode } from 'components/containers';
import { Table, Text } from 'components/ui';


const displayName = 'Shorty-ShortcodesTable';

const headers = ['Link', 'Visits', 'Last Visited'];

const mapItemsToRows = (items) => map(({
  lastSeenDate,
  redirectCount,
  shortcode,
  url,
}) => {
  return [
    <Shortcode
      value={shortcode}
      url={url}
    />,
    <Text>{redirectCount}</Text>,
    <Text>{timeago().format(lastSeenDate)}</Text>,
  ];
}, items);

const ShortcodesTable = ({ items }) => (
  <div className={displayName}>
    <Table
      headers={headers}
      rows={mapItemsToRows(items)}
    />
  </div>
);

ShortcodesTable.displayName = displayName;

export default ShortcodesTable;
