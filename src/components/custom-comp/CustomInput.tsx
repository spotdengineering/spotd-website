import React from 'react';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';

const base =
  'focus:border-[1px] focus:ring-0 border-white focus:border-white placeholder:text-base placeholder:text-black transition-all duration-300 focus-visible:ring-gray-400 shadow-none focus-visible:ring-[1px]';

const CustomInput = ({ type = 'text', className, ...rest }: any) => {
  return <Input type={type} {...rest} className={cn(base, className)} />;
};

export default CustomInput;
