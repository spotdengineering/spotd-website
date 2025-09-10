import React from 'react';
import { Filled_Btn } from '../ui/custom/buttons/filled-btn';
import { Card, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import { Card_Global } from '../ui/custom/cards/card-global';
import { Glass_Card } from '../ui/custom/cards/glass-card';
import { Btn } from '../ui/custom/buttons/btn';
import Paragraph from '../ui/paragraph';
export const Hero_Section = () => {
  return (
    <section className="flex items-center justify-center flex-col w-full font-plusjakarta py-5 sm:py-10 gap-25 ">
      <div className="flex flex-col w-full items-center relative">
        <div className="flex flex-col gap-6  text-center items-center">
          <h1 className="font-medium text-[27px] minMax:text-[29px] sm:text-[68px] sm:leading-20">
            Spot’d helps brands find <br className="sm:max-fold:hidden" />
            creatives who{' '}
            <span className="italic bg-gradient-to-r from-pink via-orange to-lemon bg-clip-text text-transparent">
              truly get it.
            </span>
          </h1>
          <span className=" max-w-[500px]">
            <Paragraph>
              No random DMs. No ghosting. Just real portfolios, smart
              matchmaking, and escrow-secured collabs.
            </Paragraph>
          </span>
          <div className="flex items-center gap-3.5">
            <Filled_Btn className="py-6 px-5">Start getting visible</Filled_Btn>
            <Btn>Find out more</Btn>
          </div>
        </div>
        <Card className="border-grey hidden fold:block w-fit gap-0 *:p-0 py-0 p-2.5 absolute bg-white -bottom-25 right-0">
          <Image
            src="/her.png"
            alt="lady"
            width={134}
            height={132}
            className="object-cover"
          />
          <CardHeader>
            <CardTitle className="font-semibold text-sm ">Top 1%</CardTitle>
          </CardHeader>
          <CardFooter>
            <p className="font-medium text-xs">Available for bookings</p>
          </CardFooter>
        </Card>
      </div>

      <div className="flex relative size-full items-center justify-center">
        <Card_Global
          className="bg-lemon z-10 max-minMax:top-10 left-0 sm:top-45 fold:top-0"
          img="/solar.svg"
          title="Globally"
        >
          Connecting brands with the right{' '}
          <span className="underline italic font-semibold text-dark-green">
            creatives
          </span>
        </Card_Global>
        <fieldset className="flex justify-center items-center fold:relative w-full">
          <Image
            src={'/eclips.svg'}
            alt="ellipse"
            width={895}
            height={841}
            className="object-contain hidden fold:block"
          />

          {/* DESKTOP */}
          <Image
            src="/girl.png"
            alt="girl_on_phone"
            width={767}
            height={766}
            className="fold:block absolute hidden  left-45 max-duo:left-10  duo:max-m1:left-35 bottom-0 z-10 object-contain "
          />
          <Image
            src="/iPhone.png"
            width={317}
            height={318}
            alt="iphone"
            className="absolute fold:block hidden object-contain duo:max-m1:right-93 max-duo:right-80  right-110 bottom-0 "
          />

          {/* TABLET-MOBILE */}

          <Image
            src="/girlPhone.png"
            alt="girl_on_phone"
            width={278}
            height={278}
            className="fold:hidden block bottom-0 object-cover sm:h-140 w-fit sm:w-full z-10"
          />
          <Image
            src="/max.png"
            width={317}
            height={318}
            alt="iphone"
            className="block  object-top sm:w-90 tab:w-100 tab:right-25 sm:right-30 right-18 object-cover minMax:h-70 w-35 h-60 minMax:w-45 sm:h-110 absolute fold:hidden bottom-0"
          />
          <div className="flex flex-col absolute gap-3.5 items-center justify-center z-20 duo:max-m1:right-55 fold:right-60 max-duo:right-45 max-fold:-right-5  max-sm:right-0">
            <Glass_Card title="You’ve been spotted!" />{' '}
            <Glass_Card content title="New Request Accepted" />
          </div>
        </fieldset>
        <Card_Global
          className="bg-pink text-white right-0 fold:bottom-5 max-sm:-top-10  max-fold:-top-20"
          img="/solar_white.svg"
          title="Connecting"
        >
          Creatives, brands and influencers
        </Card_Global>
      </div>
    </section>
  );
};
