import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../card';
import Image from 'next/image';
import clsx from 'clsx';

export const Card_Global = ({
  img,
  title,
  children,
  className,
}: {
  img: string;
  className: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Card
      className={clsx(
        'border-none h-fit absolute rounded-xl md:rounded-3xl w-[130px] md:w-[210px] sm:py-4 sm:px-4 p-3 *:p-0 gap-0.5 md:gap-1.5',
        className
      )}
    >
      <Image
        src={img}
        alt="lady"
        width={50}
        height={50}
        className="object-contain max-sm:size-6"
      />
      <CardHeader>
        <CardTitle className="font-medium text-xs md:text-[28px]">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="font-normal text-[10px] md:text-base">
          {children}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
