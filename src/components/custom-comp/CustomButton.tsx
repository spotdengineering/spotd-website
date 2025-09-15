import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const CustomButton = ({ className, name, ...rest }: any) => {
  return (
    <Button
      className={cn(
        'from-brandLemon via-brandOrange to-brandPink rounded-full text-white w-fit py-6 px-9 cursor-pointer text-lg',
        className
      )}
      {...rest}
    >
      {name}
    </Button>
  );
};

export default CustomButton;
