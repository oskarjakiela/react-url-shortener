import React from 'react';

import './ShortenForm.css';
import { Button, Input } from 'components/ui';


const displayName = 'Shorty-ShortenForm';

const ShortenForm = () => (
  <form className={displayName}>
    <Input
      className={`${displayName}__input`}
      placeholder="Paste the link you want to shorten here"
    />

    <Button
      className={`${displayName}__button`}
      disabled
    >
      Shorten this link
    </Button>
  </form>
);

ShortenForm.displayName = displayName;

export default ShortenForm;
