import clsx from 'clsx';
import React from 'react';

export const Phone = ({
  className,
  image_style,
}: {
  className: string;
  image_style: string;
}) => {
  return (
    <div className={clsx('max-sm:mt-5', className)}>
      <img className={image_style} alt="stopd" src="/iMax.png" />
    </div>
  );
};
