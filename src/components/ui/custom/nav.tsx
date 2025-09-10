import clsx from 'clsx';
import React from 'react';

export const Nav = ({ className }: { className: string }) => {
  return (
    <nav
      className={clsx(
        'items-center font-plusjakarta  text-black gap-6',
        className
      )}
    >
      <span>How Spot’d works</span>
      <span>Contact Us</span>
      <span>FAQ's</span>
    </nav>
  );
};
