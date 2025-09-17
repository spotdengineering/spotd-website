import React, { ReactNode } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

// BUTTON TYPES
type Props = {
  className: string;
  name: string;
  disabled?: boolean;
  children?: ReactNode;
};
const CustomButton = ({
  className,
  name,
  disabled,
  children,
  ...rest
}: Props) => {
  return (
    <Button
      disabled={disabled}
      className={cn(
        'from-brandLemon via-brandOrange to-brandPink rounded-full text-white w-fit py-6 px-9 cursor-pointer text-lg',
        className
      )}
      {...rest}
    >
      {disabled ? children : name}
    </Button>
  );
};

export default CustomButton;
