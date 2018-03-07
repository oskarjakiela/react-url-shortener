import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Heading.css';


const displayName = 'Shorty-Heading';

const Heading = ({
  children,
  className,
  ...props
}) => (
  <h2 className={classnames(displayName, className)} {...props}>
    {children}
  </h2>
);

Heading.displayName = displayName;

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Heading;
