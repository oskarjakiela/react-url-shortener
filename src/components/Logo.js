import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Logo.css';


const displayName = 'Shorty-Logo';

const Logo = ({
  children,
  className,
  ...props
}) => (
  <h1 className={classnames(displayName, className)} {...props}>
    <a href="/" title={`${children} Logo`}>
      {children}
    </a>
  </h1>
);

Logo.displayName = displayName;

Logo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Logo;
