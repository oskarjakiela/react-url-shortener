import classnames from 'classnames';
import React from 'react';

import './Header.css';
import Logo from './Logo';
import Text from './Text';


const displayName = 'Shorty-Header';

const Header = ({
  className,
  ...props
}) => (
  <header className={classnames(displayName, className)} {...props}>
    <Logo className={`${displayName}__logo`}>
      Shooooort
    </Logo>
    
    <Text className={`${displayName}__slogan`} secondary>
      The link shortener with a long name
    </Text>
  </header>
);

Header.displayName = displayName;

export default Header;
