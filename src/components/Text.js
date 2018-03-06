import classnames from 'classnames';
import PropTypes from 'prop-types';
import { all, equals, head } from 'ramda';
import React from 'react';

import './Text.css';


const isPrimary = (value) => {
  if (head(value)) {
    return true;
  }

  return all(equals(false), value)
}

const Text = ({
  children,
  primary,
  secondary,
  unimportant,
}) => (
  <span className={classnames('Text', {
    'Text--primary': isPrimary([primary, secondary, unimportant]),
    'Text--secondary': secondary,
    'Text--unimportant': unimportant,
  })}>{children}</span>
);

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
