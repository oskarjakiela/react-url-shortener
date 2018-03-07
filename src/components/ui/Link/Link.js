import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Link.css';


const displayName = 'Shorty-Link';

const Link = ({
  children,
  className,
  ...props
}) => (
  <a className={classnames(displayName, className)} {...props}>
    {children}
  </a>
);

Link.displayName = displayName;

Link.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Link;
