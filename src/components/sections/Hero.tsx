'use client';
import React from 'react';
import { Card_Global } from '../ui/custom/cards/card-global';
import { Glass_Card } from '../ui/custom/cards/glass-card';
import CustomButton from '../custom-comp/CustomButton';
import CustomButtonOutline from '../custom-comp/CustomButtonOutline';
import { motion } from 'framer-motion';
export const Hero = () => {
  const sentence = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, duration: 0.5 },
    },
  };

  const word = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const text = 'Spot’d helps brands find creatives who truly get it.';
  const words = text.split(' ');
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-10 2xl:px-0">
        <div className="max-w-[1440px] mx-auto py-6 relative">
          <div className="flex flex-col items-center gap-7">
            <motion.h1
              className="font-medium text-5xl sm:text-7xl text-center max-w-4xl"
              variants={sentence}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  variants={word}
                  style={{ display: 'inline-block', marginRight: '8px' }}
                >
                  {w === 'truly' || w === 'get' || w === 'it.' ? (
                    <span className="italic bg-gradient-to-r from-pink via-orange to-lemon bg-clip-text text-transparent">
                      {w}
                    </span>
                  ) : (
                    w
                  )}
                </motion.span>
              ))}
            </motion.h1>

            <div>
              <p className="text-xl sm:text-2xl font-normal max-w-xl text-center">
                No random DMs. No ghosting. Just real portfolios, smart
                matchmaking, and escrow-secured collabs.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 w-fit mx-auto mt-6">
                <CustomButton
                  name="Start getting visible"
                  className="bg-gradient-to-r"
                />
                <CustomButtonOutline name="Find out more" />
              </div>
            </div>

            <div className="hidden xl:block border-grey bg-white h-fit p-2 rounded-2xl shadow w-[200px] absolute right-0 translate-y-3/4">
              <img
                src="/her.png"
                alt="lady"
                className="object-cover height-[132px]"
              />
              <p className="font-semibold text-sm my-1">Top 1%</p>
              <p className="font-medium text-sm">Available for bookings</p>
            </div>
            <div className="w-full mx-auto relative sm:overflow-hidden mt-16 lg:mt-20">
              <Card_Global
                className="bg-lemon z-10 bottom-0 xl:translate-y-0  xl:top-0"
                img="/solar.svg"
                title="Globally"
              >
                Connecting brands with the right{' '}
                <span className="underline italic font-semibold text-dark-green">
                  creatives
                </span>
              </Card_Global>

              <Card_Global
                className="bg-pink text-white xl:bottom-0 right-0 z-10"
                img="/solar_white.svg"
                title="Connecting"
              >
                Creatives, brands and influencers
              </Card_Global>

              <div className="absolute flex items-center flex-col justify-center h-full inset-0 mx-auto">
                {/* phone */}
                <div className="absolute inset-x-0 bottom-0 h-[200px] sm:h-[350px] md:h-[380px] lg:h-[450px] xl:h-80 mx-auto flex items-center flex-col justify-center w-fit">
                  <img
                    src="/iPhone.png"
                    className="object-cover h-[200px] sm:h-[350px] md:h-[380px] lg:h-[450px] xl:h-96"
                  />
                </div>
                {/* girl with phone */}
                <div className="absolute left-0 right-40 sm:right-64 xl:right-52 xl:top-[-56] h-full mx-auto flex items-center flex-col justify-center w-full sm:w-fit">
                  <img
                    src="/girl.png"
                    className="object-cover xl:h-[500px] hidden xl:flex"
                  />
                  <img
                    src="/girlPhone.png"
                    className="object-cover mr-38 sm:mr-0 h-[400px] sm:h-[500px] flex xl:hidden"
                  />
                </div>
                {/* glass morphism */}
                <div className="absolute h-full xl:h-[50%] top-12 sm:top-24 right-[-170px] sm:right-[-300px] lg:right-[-500px] xl:top-32 xl:right-[-400px] left-0 mx-auto flex items-center flex-col justify-center lg:align-bottom xl:align-middle w-fit gap-4">
                  <Glass_Card title="You’ve been spotted!" />{' '}
                  <Glass_Card content title="New Request Accepted" />
                </div>
              </div>

              <div className="h-[400px] sm:h-[500px] xl:h-96 mx-auto">
                <img
                  src="/eclips.svg"
                  className="hidden sm:flex sm:h-[500px] xl:h-96 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
