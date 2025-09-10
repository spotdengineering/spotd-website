import React from 'react';
import { Button } from '../../button';
import clsx from 'clsx';

export const Btn = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="bg-gradient-to-r from-pink via-orange to-lemon rounded-[40px] p-[1px]">
      <Button
        className={clsx(
          'flex items-center text-sm cursor-pointer px-4 font-semibold leading-4.5 text-center justify-center gap-2.5  py-5.5 bg-white rounded-[40px]',
          className
        )}
      >
        <span className="bg-gradient-to-r from-pink via-orange to-lemon bg-clip-text text-transparent">
          {children}
        </span>
      </Button>
    </div>
  );
};
