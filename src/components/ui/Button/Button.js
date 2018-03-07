import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Button.css';


const displayName = 'Shorty-Button';

const Button = ({
  children,
  className,
  ...props
}) => (
  <button className={classnames(displayName, className, {
    [`${displayName}--disabled`]: props.disabled,
  })} {...props}>
    {children}
  </button>
);

Button.displayName = displayName;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
