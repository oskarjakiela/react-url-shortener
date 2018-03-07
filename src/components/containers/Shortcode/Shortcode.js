import PropTypes from 'prop-types';
import React from 'react';

import './Shortcode.css';
import { Link, Text } from 'components/ui';


const displayName = 'Shorty-Shortcode';

const Shortcode = ({
  domain,
  url,
  value,
}) => (
  <div className={displayName}>
    <span className={`${displayName}__url-body`}>
      <span className={`${displayName}__domain`}>
        {`${domain}/`}
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

Shortcode.defaultProps = {
  domain: 'shooooort.com',
};

Shortcode.propTypes = {
  domain: PropTypes.string,
  url: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Shortcode;
