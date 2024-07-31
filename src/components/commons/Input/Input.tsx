import React, { ChangeEvent, FC } from 'react';

type InputItems = {
  className: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
  onBlur: () => void;
  autoFocus?: boolean;
};

const Input: FC<InputItems> = React.memo(
  ({
    className,
    placeholder,
    type,
    value,
    onBlur,
    onChange,
    onKeyDown,
    autoFocus,
  }) => {
    return (
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        autoFocus={autoFocus}
      />
    );
  }
);
export default Input;
