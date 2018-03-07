import PropTypes from 'prop-types';
import React from 'react';

import './ShortcodesHeader.css';
import { Heading, Link } from 'components/ui';


const displayName = 'Shorty-ShortcodesHeader';

const ShortcodesHeader = ({
  onClear
}) => (
  <div className={displayName}>
    <Heading className={`${displayName}__heading`}>Previously shortened by you</Heading>
    <Link className={`${displayName}__link`} onClick={onClear}>Clear history</Link>
  </div>
);

ShortcodesHeader.displayName = displayName;

ShortcodesHeader.propTypes = {
  onClear: PropTypes.func.isRequired,
};

export default ShortcodesHeader;
