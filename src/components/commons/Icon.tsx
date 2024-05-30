import React, { FC } from 'react';

type IconType ={
    className?: string
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon: FC<IconType> = ({className, iconId, width, height, viewBox}) => {
    return (
      <svg className={className} width={width || "112"} height={height || "112"} viewBox={viewBox || "0 0 112 112"} fill="none" xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={`${'/img/icons-sprite.svg'}#${iconId}`}></use>
      </svg>
    );
};
