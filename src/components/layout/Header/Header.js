import React from 'react';

import './Header.css';
import { Logo, Text } from 'components/ui';


const displayName = 'Shorty-Header';

const Header = () => (
  <header className={displayName}>
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
