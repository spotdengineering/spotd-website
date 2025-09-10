import React from 'react';
import { Button } from '../../button';
import clsx from 'clsx';

export const Filled_Btn = ({
  children,
  className,
  disabled,
}: {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}) => {
  return (
    <Button
      disabled={disabled}
      className={clsx(
        'disabled:opacity-100 flex items-center text-sm cursor-pointer  text-white font-semibold leading-4.5 text-center justify-center gap-2.5 px-4 py-5 bg-gradient-to-l from-lemon via-orange to-pink rounded-[40px]',
        className
      )}
    >
      {children}
    </Button>
  );
};
