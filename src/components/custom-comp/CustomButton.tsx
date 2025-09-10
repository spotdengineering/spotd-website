import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const CustomButton = ({ className, name, variant, ...rest }: any) => {
  return (
    <Button variant={variant} className={cn(className)} {...rest}>
      {name}
    </Button>
  );
};

export default CustomButton;
