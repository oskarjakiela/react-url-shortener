import classnames from 'classnames';
import PropTypes from 'prop-types';
import { addIndex, map } from 'ramda';
import React from 'react';

import './Table.css';


const mapIndexed = addIndex(map);
const displayName = 'Shorty-Table';

const Table = ({
  className,
  headers,
  rows,
  ...props
}) => (
  <table className={classnames(displayName, className)} {...props}>
    <thead>
      <tr>
        {map(header => (
          <th key={header}>{header}</th>
        ), headers)}
      </tr>
    </thead>

    <tbody>
      {mapIndexed((values, row) => (
        <tr key={row}>
          {mapIndexed((value, cell) => (
            <td key={`${row}-${cell}`}>{value}</td>
          ), values)}
        </tr>
      ), rows)}
    </tbody>
  </table>
);

Table.displayName = displayName;

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)).isRequired,
};

export default Table;
