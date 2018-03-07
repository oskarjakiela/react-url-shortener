import PropTypes from 'prop-types';
import React from 'react';

import './Main.css';


const displayName = 'Shorty-Main';

const Main = ({
  children,
}) => (
  <main className={displayName}>
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
