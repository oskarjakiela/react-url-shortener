import React from 'react';

import './ShortcodeForm.css';
import { Button, Input } from 'components/ui';


const displayName = 'Shorty-ShortcodeForm';

const ShortcodeForm = () => (
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

ShortcodeForm.displayName = displayName;

export default ShortcodeForm;
