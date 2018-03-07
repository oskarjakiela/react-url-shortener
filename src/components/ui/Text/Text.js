import classnames from 'classnames';
import PropTypes from 'prop-types';
import { all, equals, head } from 'ramda';
import React from 'react';

import './Text.css';


const displayName = 'Shorty-Text';

const isPrimary = (value) => {
  if (head(value)) {
    return true;
  }

  return all(equals(false), value)
}

const Text = ({
  children,
  className,
  primary,
  secondary,
  unimportant,
  ...props,
}) => (
  <span
    className={classnames(displayName, {
      [`${displayName}--primary`]: isPrimary([primary, secondary, unimportant]),
      [`${displayName}--secondary`]: secondary,
      [`${displayName}--unimportant`]: unimportant,
    }, className)}
    {...props}
  >
    {children}
  </span>
);

Text.displayName = displayName;

Text.defaultProps = {
  primary: false,
  secondary: false,
  unimportant: false,
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  primiary: PropTypes.bool,
  secondary: PropTypes.bool,
  unimportant: PropTypes.bool,
};

export default Text;
