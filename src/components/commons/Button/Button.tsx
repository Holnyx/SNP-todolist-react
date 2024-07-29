import React, { FC, memo } from 'react';

type ButtonFilteredType = {
  href?: string;
  getTitle: string;
  className: string;
  onClick?: () => void;
};

const Button: FC<ButtonFilteredType> = ({
  getTitle,
  className,
  onClick,
  href,
}) => {
  return href ? (
    <a
      href={href}
      className={className}
      onClick={onClick}
    >
      {getTitle}
    </a>
  ) : (
    <button
      className={className}
      onClick={onClick}
    >
      {getTitle}
    </button>
  );
};

export default memo(Button);
