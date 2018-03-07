import PropTypes from 'prop-types';
import React from 'react';

import './Shortcode.css';
import { Link, Text } from 'components/ui';


const displayName = 'Shorty-Shortcode';

const Shortcode = ({
  apiHost,
  copied,
  displayHost,
  url,
  value,
  onCopy,
}) => {
  const copyLinkText = copied ? 'Copied!' : 'Click to copy this link';
  const link = `${apiHost}/${value}`;

  const handleCopy = (event) => {
    event.preventDefault();
    onCopy(value, link);
  };

  return (
    <div className={displayName}>
      <a className={`${displayName}__url-body`} href={link}>
        <span className={`${displayName}__domain`}>
          {`${displayHost}/`}
        </span>

        <span className={`${displayName}__value`}>
          {value}
        </span>
      </a>

      <Link
        className={`${displayName}__copy-link`}
        onClick={handleCopy}
      >
        {copyLinkText}
      </Link>

      <br />

      <Link className={`${displayName}__url`} href={url}>
        <Text unimportant>
          {url}
        </Text>
      </Link>
    </div>
  );
}

Shortcode.displayName = displayName;

Shortcode.defaultProps = {
  apiHost: process.env.REACT_APP_API_URL,
  displayHost: 'shooooorty.com',
};

Shortcode.propTypes = {
  apiHost: PropTypes.string,
  copied: PropTypes.bool.isRequired,
  displayHost: PropTypes.string,
  url: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default Shortcode;
