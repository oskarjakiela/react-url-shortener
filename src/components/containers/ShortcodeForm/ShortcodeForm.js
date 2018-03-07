import debounce from 'debounce';
import isUrl from 'is-url';
import React from 'react';
import PropTypes from 'prop-types';

import './ShortcodeForm.css';
import { Button, Input } from 'components/ui';


const displayName = 'Shorty-ShortcodeForm';

const ShortcodeForm = ({
  value,
  onChange,
  onSubmit,
}) => {
  const debouncedChange = debounce(onChange, 300);
  const isDisabled = !isUrl(value);

  const handleChange = (event) => {
    event.preventDefault();
    debouncedChange(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <form className={displayName}>
      <Input
        className={`${displayName}__input`}
        defaultValue={value}
        placeholder="Paste the link you want to shorten here"
        onChange={handleChange}
      />

      <Button
        className={`${displayName}__button`}
        disabled={isDisabled}
        onClick={handleSubmit}
      >
        Shorten this link
      </Button>
    </form>
  );
}

ShortcodeForm.displayName = displayName;

ShortcodeForm.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ShortcodeForm;
