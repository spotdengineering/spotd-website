import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../card';
import { CheckCheck } from 'lucide-react';
import { Skeleton } from '../../skeleton';
import clsx from 'clsx';

export const Glass_Card = ({
  title,
  content,
}: {
  title: string;
  content?: boolean;
}) => {
  return (
    <Card
      className={clsx(
        'flex md:pt-2 pt-1 gap-1 px-1 md:px-[11px] *:p-0 md:space-y-2 border-none rounded-2xl md:rounded-3xl backdrop-blur-sm backdrop-red-500 bg-black/10 w-[140px] sm:w-[250px] md:w-[302px]',
        !content && 'md:pb-2 pb-1 rounded-full',
        content && 'max-md:pb-2 max-md:!rounded-lg'
      )}
    >
      <CardHeader className="flex gap-1.5 md:gap-3 justify-start items-center relative">
        <span className="w-8 h-7 sm:w-10 sm:h-10 sm:size-10.5 rounded-full bg-black/50 flex items-center justify-center">
          <span className="w-5 h-5 sm:w-7 sm:h-7 bg-white rounded-full flex items-center justify-center ">
            <CheckCheck strokeWidth={'3px'} size={'18px'} />
          </span>
        </span>
        <CardTitle className="sm:text-black text-white/50 font-medium text-xs sm:text-base">
          {title}
        </CardTitle>

        {!content && (
          <span className="rounded-full flex justify-center items-center text-sm bg-round-red md:size-6.5 size-3.5 text-white font-medium absolute right-0 p-2 -top-2 md:-top-4 max-md:text-[8px]">
            1
          </span>
        )}
      </CardHeader>
      {content && (
        <CardContent className="md:gap-2 gap-1 flex flex-col md:*:h-2.5 *:h-1 odd:w-full w-full *:bg-white/50">
          <Skeleton />
          <Skeleton className="sm:w-[242px]" />
          <Skeleton />
          <Skeleton className="md:blur-[1px] sm:w-[219px]" />
        </CardContent>
      )}
    </Card>
  );
};
