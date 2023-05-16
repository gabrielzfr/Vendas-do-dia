import classNames from "classnames";
import React from "react";

interface PixIcon {
    size?: number
    isAquaBlue?: boolean
    className?: string
}
export function PixIcon({size = 50, isAquaBlue = false, className}: PixIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      width={size}
      height={size}
      enableBackground="new 0 0 194 194"
      version="1.1"
      viewBox="0 0 194 194"
      xmlSpace="preserve"
      className={classNames(`stroke-[6.3px] fill-transparent ${className}`, {
        'stroke-white': !isAquaBlue,
        'stroke-aquaBlue': isAquaBlue
      })}
    >
      <path 
      
      
      d="M147.04 144.34c-7.02 0-13.6-2.7-18.57-7.67L101.7 109.9c-1.84-1.84-5.18-1.84-7.02 0L67.8 136.78c-4.97 4.97-11.55 7.67-18.57 7.67h-5.29l34.01 34.01c10.58 10.58 27.85 10.58 38.43 0l34.11-34.11-3.45-.01z"></path>
      <path
      d="M49.12 49.55c7.02 0 13.6 2.7 18.57 7.67L94.57 84.1a4.961 4.961 0 007.02 0l26.88-26.77c4.97-4.97 11.55-7.67 18.57-7.67h3.24l-34.11-34.11c-10.58-10.58-27.85-10.58-38.43 0l-34.02 34h5.4z"></path>
      <path 

      d="M178.45 77.84l-20.62-20.62c-.43.22-.97.32-1.51.32h-9.39c-4.86 0-9.61 1.94-12.95 5.4L107.2 89.71c-2.48 2.48-5.83 3.78-9.07 3.78-3.35 0-6.59-1.3-9.07-3.78L62.18 62.83c-3.45-3.45-8.2-5.4-12.95-5.4H37.68c-.54 0-.97-.11-1.4-.32L15.55 77.84c-10.58 10.58-10.58 27.85 0 38.43l20.62 20.62c.43-.22.86-.32 1.4-.32h11.55c4.86 0 9.61-1.94 12.95-5.4l26.88-26.88c4.86-4.86 13.39-4.86 18.24 0l26.77 26.77c3.45 3.45 8.2 5.4 12.95 5.4h9.39c.54 0 .97.11 1.51.32l20.62-20.62c10.6-10.58 10.6-27.74.02-38.32"></path>
    </svg>
  );
}
