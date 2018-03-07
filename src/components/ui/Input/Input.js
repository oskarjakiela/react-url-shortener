import classnames from 'classnames';
import React from 'react';

import './Input.css';


const displayName = 'Shorty-Input';

const Input = ({
  className,
  ...props
}) => (
  <input className={classnames(displayName, className)} {...props} />
);

Input.displayName = displayName;

export default Input;
