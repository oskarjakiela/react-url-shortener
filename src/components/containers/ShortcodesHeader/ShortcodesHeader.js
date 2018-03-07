import React from 'react';

import './ShortcodesHeader.css';
import { Heading, Link } from 'components/ui';


const displayName = 'Shorty-ShortcodesHeader';

const ShortcodesHeader = () => (
  <div className={displayName}>
    <Heading className={`${displayName}__heading`}>Previously shortened by you</Heading>
    <Link className={`${displayName}__link`}>Clear history</Link>
  </div>
);

ShortcodesHeader.displayName = displayName;

export default ShortcodesHeader;
