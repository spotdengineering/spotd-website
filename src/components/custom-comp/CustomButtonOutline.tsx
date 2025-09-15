import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const CustomButtonOutline = ({ className, name, ...rest }: any) => {
  return (
    <div className="p-[1px] rounded-full bg-gradient-to-r from-brandLemon via-brandOrange to-brandPink w-fit">
      <Button
        className={cn(
          'rounded-full py-6 px-9 cursor-pointer text-lg !bg-white',
          className
        )}
        {...rest}
      >
        <p className="bg-gradient-to-r from-brandLemon via-brandOrange to-brandPink bg-clip-text text-transparent">
          {name}
        </p>
      </Button>
    </div>
  );
};

export default CustomButtonOutline;
