'use client';
import React from 'react';
import CustomButton from '../custom-comp/CustomButton';
import { motion } from 'framer-motion';
const About_Spotd = () => {
  const info = [
    {
      name: 'Many',
      sub: 'Pitches, not enough right fits.',
      icon: '/solar.svg',
    },
    { name: 'Talent', sub: 'Stays hidden in the noise.', icon: '/solar.svg' },
    {
      name: 'Campaigns',
      sub: 'Miss the mark without real connection.',
      icon: '/solar.svg',
    },
  ];

  const join = [
    { name: 'Join as a Creative', bg: '#f2f8cf', color: '#59622A' },
    { name: 'Join as a Brand', bg: '#fad3ba', color: '#D9671C' },
  ];

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-10 2xl:px-0">
        <div className="max-w-[1440px] mx-auto relative">
          <div className="w-full">
            <CustomButton
              name="The problem"
              className="!rounded-sm bg-gradient-to-r mb-5 cursor-text"
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center  flex-1 w-fit gap-8 lg:gap-0">
            {/* texts */}
            <div className="w-full bg-[url('/circle.svg')] bg-no-repeat bg-contain flex flex-col">
              <div className="w-full">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    ease: 'easeOut',
                    duration: 0.3,
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <p className="font-medium text-black text-2xl sm:text-3xl max-w-5xl mb-10 lg:mb-12 text-start ">
                    Finding the right influencer or creative shouldn’t feel like
                    guesswork. Brands struggle to discover authentic
                    influencers.
                    <br className="lg:hidden" />
                    <span className="text-black/60">
                      Creatives lack visibility to the right opportunities.
                      Influencers often get mismatched with campaigns that don’t
                      fit their voice.
                    </span>
                  </p>
                </motion.div>
                <div className="flex flex-wrap justify-start lg:items-stretch flex-1 gap-4 mt-auto">
                  {info?.map((i, index) => (
                    <motion.div
                      className="p-6 bg-[#F5F5F5] rounded-2xl sm:max-w-[300px] w-full sm:w-fit flex flex-col justify-center items-center lg:items-start text-center lg:text-start"
                      key={index}
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        ease: 'easeOut',
                        duration: 0.5,
                        delay: index * 0.2,
                      }}
                      viewport={{ once: false, amount: 0.5 }}
                    >
                      <img src={i?.icon} alt="" className="w-10 h-10 mb-2" />
                      <p className="text-xl font-semibold">{i?.name}</p>
                      <p className="text-lg">{i?.sub}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            {/* phone */}
            <div className="hidden lg:flex">
              <img
                className="h-[350px] lg:h-[450px] lg:w-[500px] object-contain"
                alt=""
                src="/iMax.png"
              />
            </div>
          </div>

          <div className="bg-[url('/bg.png')] bg-center bg-cover bg-no-repeat rounded-2xl lg:rounded-full w-full sm:h-[400px] flex flex-col justify-center mt-20 overflow-hidden relative">
            <img
              src="/rightHand.png"
              className="h-60 w-60 ml-auto object-cover hidden lg:flex"
            />
            <div className="sm:absolute h-full w-full flex flex-col justify-center align-middle p-6 lg:px-10 2xl:p-0">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  ease: 'easeOut',
                  duration: 0.3,
                }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <p className="text-white font-bold text-center mx-auto text-3xl sm:text-4xl max-w-4xl">
                  With Spot’d its different. Creators get visibility and value.
                  And brands finally find their people.
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  ease: 'easeOut',
                  duration: 0.3,
                }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <p className="text-white text-xl text-center max-w-2xl w-fit mx-auto mt-4">
                  Join a trusted space where the work of creatives are showcased
                  and brands connect with the right talent effortlessly.
                </p>
              </motion.div>

              <div className="flex flex-wrap gap-4 w-fit mx-auto justify-center sm:justify-start mt-6">
                {join?.map((j, index: number) => (
                  <motion.div
                    className={`p-3 px-6 rounded-full w-fit`}
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.2,
                      ease: 'easeOut',
                    }}
                    style={{ backgroundColor: j?.bg }}
                  >
                    <p
                      className="font-semibold 2xl:text-xl"
                      style={{ color: j?.color }}
                    >
                      {j?.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="absolute h-full flex-col justify-center hidden lg:flex">
              <img src="/leftHand.png" className="h-60 w-60 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About_Spotd;
