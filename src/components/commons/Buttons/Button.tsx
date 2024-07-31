import React, { FC, memo } from 'react';

type ButtonItem = {
  href?: string;
  getTitle: string;
  className: string;
  onClick?: () => void;
};

const Button: FC<ButtonItem> = ({
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
