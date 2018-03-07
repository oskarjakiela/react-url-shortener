import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Main.css';


const displayName = 'Shorty-Main';

const Main = ({
  children,
  className,
  ...props
}) => (
  <main className={classnames(displayName, className)} {...props}>
    {children}
  </main>
);

Main.displayName = displayName;

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Main;
