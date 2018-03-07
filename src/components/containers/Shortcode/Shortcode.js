import React from 'react';

import './Shortcode.css';
import { Link, Text } from 'components/ui';


const displayName = 'Shorty-Shortcode';
const domain = 'shooooort.com/';

const Shortcode = ({
  url,
  value,
}) => (
  <div className={displayName}>
    <span className={`${displayName}__url-body`}>
      <span className={`${displayName}__domain`}>
        {domain}
      </span>

      <span className={`${displayName}__value`}>
        {value}
      </span>
    </span>

    <Link className={`${displayName}__copy-link`}>
      Click to copy this link
    </Link>

    <br />

    <Text className={`${displayName}__url`} unimportant>
      {url}
    </Text>
  </div>
);

Shortcode.displayName = displayName;

export default Shortcode;
