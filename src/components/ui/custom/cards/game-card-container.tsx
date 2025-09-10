import clsx from 'clsx';
import React from 'react';
import Paragraph from '../../paragraph';
import Image from 'next/image';
import { Filled_Btn } from '../buttons/filled-btn';
import { ArrowRightIcon, Star } from 'lucide-react';

export const Game_Card = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        'w-full flex sm:px-[51px] fold:px-7.5 fold:flex-row flex-col justify-between fold:h-[539px] fold:py-6 py-8 px-8 sm:py-15 fold:gap-40 sm:gap-16 gap-10 items-center sm:*:text-left *:text-center rounded-[47px]',
        className
      )}
    >
      {children}
    </div>
  );
};

// Fn for card text content
export const Game_Content = ({
  head,
  className,
  text,
}: {
  head: string;
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        'flex fold:w-[556px] flex-col text-left fold:gap-9 gap-4',
        className
      )}
    >
      <h1 className="font-semibold text-2xl sm:text-[45px] sm:leading-15">
        {head}
      </h1>
      <Paragraph>{text}</Paragraph>
    </div>
  );
};

// Card Image container
export const Game_Image = ({
  src,
  children,
  imgStyle,
}: {
  src: string;
  imgStyle?: string;
  children: React.ReactNode;
}) => {
  return (
    <fieldset className="flex h-fit items-center justify-center relative  ">
      <Image
        src={src}
        alt="spotd"
        width={478}
        height={492}
        className={clsx(
          'object-contain lg:h-fit max-sm:object-cover max-sm:h-[384px] max-sm:!w-screen relative h-full rounded-[47px]',
          imgStyle
        )}
      />
      <span>{children}</span>
    </fieldset>
  );
};

//SMALLER ELEMENTS

export const Mini_Card = ({ className }: { className: string }) => {
  return (
    <div
      className={clsx(
        'flex w-[170px] sm:w-[200px] py-3 px-2.5 flex-col gap-3 rounded-[30px] bg-[#FAFAFA]',
        className
      )}
    >
      <Image
        src={'/mini.png'}
        alt="video Editing"
        width={202}
        height={104}
        className="object-cover"
      />
      <span className="flex justify-between items-center semibold font-semibold *:first:text-back sm:*:last:text-xs *:last:text-[7px] *:last:text-red-600 sm:*:first:text-sm *:first:text-[10px]">
        <span>Video Editing</span>
        <span>#50,000</span>
      </span>
      <p className="text-grey-80 text-[8px] sm:text-xs">
        Polished edits, smooth transitions, and engaging visuals tailored to
        your brand.
      </p>
      <Filled_Btn disabled className="max-sm:text-[8px]">
        View Details
      </Filled_Btn>
    </div>
  );
};

//

export const Person_Card = ({
  className,
  head,
  img,
  star,
  text,
}: {
  head: string;
  img: string;
  text?: string;
  star?: boolean;
  className: string;
}) => {
  return (
    <div
      className={clsx(
        'shadow-lg border max-sm:pr-3 bg-white border-white p-1 sm:p-2 gap-2.5 flex items-center rounded-4xl sm:rounded-[60px] ',
        className
      )}
    >
      <Image
        src={img}
        alt="guy"
        width={68}
        height={68}
        className=" object-contain max-sm:size-9"
      />
      <div className="flex flex-col items-start gap-0.5">
        <span className="font-extrabold text-xs sm:text-base text-black">
          {head}
        </span>
        <article className="font-normal text-orange-400 text-[10px] sm:text-[13px]">
          {text}
        </article>
        {star && (
          <span className="flex gap-0.5 *:size-2.5 sm:*:size-4">
            <Star fill="#ffa600" strokeWidth={0} />
            <Star fill="#ffa600" strokeWidth={0} />
            <Star fill="#ffa600" strokeWidth={0} />
            <Star fill="#ffa600" strokeWidth={0} />
            <Star fill="#ffa600" strokeWidth={0} />
          </span>
        )}
      </div>
    </div>
  );
};

//CHAT

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../card';

export const Chat_Card = () => {
  return (
    <Card className="sm:w-[224px] md:-right-10 max-sm:gap-3 w-[200px] absolute top-5 sm:top-10 lg:-right-20 -right-5 sm:-right-13 *:p-0 flex flex-col bg-white border-none rounded-[30px] p-4">
      <CardHeader className="flex items-center gap-2">
        <Image
          src={'/mini_guy.png'}
          alt="guy"
          width={29}
          height={29}
          className=" object-contain"
        />
        <CardTitle className="font-semibold text-[9px] text-grey-90 whitespace-nowrap">
          Joseph Thomson
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col [&_br]:hidden sm:[&_br]:block gap-3 sm:gap-5 items-end">
        <div className="  bg-red-50 font-light p-3 rounded-[10px] text-[7px]">
          <span className="sm:text-center text-right ">
            Hello, Joseph, I trust you <br />
            are doing well
          </span>
        </div>{' '}
        <div className=" sm:mr-20 sm:text-center text-left max-sm:mr-10 bg-red-50 font-light p-3 rounded-[10px] text-[7px]">
          <span>
            Hello, Thanks for <br /> contacting me for the gig
          </span>
        </div>
      </CardContent>
      <CardFooter className="!p-3 h-[31px] flex items-center justify-between rounded-[18px] bg-ash text-[7px]">
        <span>Type Message</span>
        <Filled_Btn className="!p-1.5 size-[21px]">
          <ArrowRightIcon />
        </Filled_Btn>
      </CardFooter>
    </Card>
  );
};
