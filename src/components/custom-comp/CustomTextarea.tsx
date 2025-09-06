import React from 'react';
import { Textarea } from '../ui/textarea';
import { cn } from '@/lib/utils';

const base =
  'focus:border-[1px] focus:ring-0 focus:border-white border-white placeholder:text-base placeholder:text-black transition-all duration-300 focus-visible:ring-gray-400 focus-visible:ring-[1px] shadow-none';

const CustomTextarea = ({ className, ...rest }: any) => {
  return <Textarea className={cn(className, base)} {...rest} />;
};

export default CustomTextarea;
