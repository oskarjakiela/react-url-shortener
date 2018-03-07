import PropTypes from 'prop-types';
import { map } from 'ramda';
import React from 'react';
import timeago from 'timeago.js';

import './ShortcodesTable.css';
import { Shortcode } from 'components/containers';
import { Table, Text } from 'components/ui';


const displayName = 'Shorty-ShortcodesTable';

const headers = ['Link', 'Visits', 'Last Visited'];

const mapItemsToRows = (items, onCopy) => map(({
  copied = false,
  lastSeenDate,
  redirectCount = 0,
  shortcode,
  url,
}) => {
  return [
    <Shortcode
      copied={copied}
      value={shortcode}
      url={url}
      onCopy={onCopy}
    />,
    <Text>{redirectCount}</Text>,
    <Text>{timeago().format(lastSeenDate)}</Text>,
  ];
}, items);

const ShortcodesTable = ({
  items,
  onCopyItem
}) => (
  <div className={displayName}>
    <Table
      headers={headers}
      rows={mapItemsToRows(items, onCopyItem)}
    />
  </div>
);

ShortcodesTable.displayName = displayName;

ShortcodesTable.propTypes = {
  items: PropTypes.array.isRequired,
  onCopyItem: PropTypes.func.isRequired,
};

export default ShortcodesTable;
