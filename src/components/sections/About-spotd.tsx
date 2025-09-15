import React from 'react';
import { Filled_Btn } from '../ui/custom/buttons/filled-btn';
import { ChevronLeftCircleIcon, ChevronRightCircleIcon } from 'lucide-react';
import { Card_Global } from '../ui/custom/cards/card-global';
import Image from 'next/image';
import Paragraph from '../ui/paragraph';
import CustomButton from '../custom-comp/CustomButton';

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
    { name: 'Join as a Creator', bg: '#f2f8cf', color: '#59622A' },
    { name: 'Join as an Influencer', bg: '#fad3ba', color: '#D9671C' },
  ];

  return (
    <>
      {/* <section className="flex font-plusjakarta  flex-col gap-20 size-full "> */}
      {/* <section className="text-left flex-col flex bg-[url('/circle.svg')] bg-no-repeat bg- bg-top relative gap-15"> */}
      {/* <div className="flex flex-col w-full gap-13 "> */}
      {/* <div className="flex duo:-mb-60 flex-col gap-8 duo:w-[760px]">
            <Filled_Btn className="text-base px-8 sm:px-9.5 py-4.5 rounded-sm w-fit">
              The problem
            </Filled_Btn>
            <article className="font-semibold text-black sm:text-3xl *:text-grey-80">
              Finding the right influencer or creative shouldn’t feel like
              guesswork. Brands struggle to discover authentic influencers.
              <span>
                Creatives lack visibility to the right opportunities.
                Influencers often get mismatched with campaigns that don’t fit
                their voice.
              </span>
            </article>
          </div> */}
      {/* <div className="flex sm:gap-13 gap-6 size-full items-end justify-end w-full  ">
            <div className="flex gap-5 flex-col size-full">
              <div className="flex  fold:flex-row flex-col fold:flex-wrap duo:flex-nowrap gap-4 fold:gap-10 duo:justify-between *:static duo*:py-0 *:py-10 duo:*:h-[280px] sm:*:h-[220px] minMax:*:h-[135px] *:h-[110px]  *:!w-full fold:*:!w-[40%] fold:[&_br]:block [&_br]:hidden max-fold:*:px-8 max-sm:*:px-3">
                <Card_Global
                  img="/solar.svg"
                  className="bg-ash  justify-center "
                  title="Many"
                >
                  Pitch, not enough <br /> right fits.
                </Card_Global>
                <Card_Global
                  img="/solar.svg"
                  className="bg-ash  justify-center "
                  title="Talent"
                >
                  Stays hidden in <br /> the noise.
                </Card_Global>

                <Card_Global
                  img="/solar.svg"
                  className="bg-ash  justify-center "
                  title="Campaigns"
                >
                  Miss the mark without <br /> real connection.
                </Card_Global>
              </div>
              <div className=" hidden sm:flex  justify-between">
                <span className="flex gap-2 items-center *:rounded-full *:size-3 *:first:bg-black *:bg-ash">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className="flex items-center gap-2">
                  <ChevronLeftCircleIcon size={'52px'} strokeWidth={'1px'} />
                  <ChevronRightCircleIcon
                    fill="black"
                    color="white"
                    size={'55px'}
                    strokeWidth={'1px'}
                  />
                </span>
              </div>
            </div>

            <Image
              src="/iMax.png"
              alt="iphone 12 pro max"
              width={317}
              height={643}
              className="fold:object-contain max-fold:size-fit h-fit max-sm:w-[220px]     max-minMax:!w-[180px] duo:h-[600px]"
            />
          </div> */}
      {/* </div> */}
      {/* </section> */}

      {/* <section className="fold:rounded-[200px] rounded-[70px] sm:rounded-[150px] flex justify-center items-center w-full bg-[url('/bg.png')]  bg-center bg-cover bg-no-repeat text-white relative fold:px-[100px] fold:!h-115 sm:h-[430px] sm:px-[50px] h-[330px] px-6">
          <Image
            src={'/leftHand.png'}
            alt="business-hand-shake"
            width={350}
            height={100}
            className="object-contain absolute left-0 z-20 -top-5  hidden fold:block"
          />
          <div className="flex flex-col gap-10.5 items-center text-center z-10">
            <div className="flex items-center gap-5 flex-col max-sm:*:last:text-xs sm:[&_br]:block [&_br]:hidden">
              <h2 className="fold:font-extrabold font-black sm:text-3xl text-lg fold:!text-[46px] fold:leading-14 ">
                With Spot’d its different. Creators get visibility{' '}
                <br className="hidden duo:block" /> and value. And brands
                finally find their people.
              </h2>
              <Paragraph>
                Join a trusted space where creators showcase their work and
                brands. <br />
                connect with the right talent effortlessly.
              </Paragraph>
            </div>
            <div className="flex gap-5.5">
              <Filled_Btn className="bg-org2 text-dark-green">
                Join as a Creator
              </Filled_Btn>
              <Filled_Btn className="bg-org text-dark-orange">
                Join as a Brand
              </Filled_Btn>
            </div>
          </div>
          <Image
            src={'/rightHand.png'}
            alt="business-hand-shake"
            width={350}
            height={100}
            className="object-contain absolute right-[1px] top-4 hidden fold:-top-5 fold:block"
          />
        </section> */}
      {/* </section> */}

      <div className="px-4 sm:px-6 lg:px-10 2xl:px-0">
        <div className="max-w-[1440px] mx-auto relative">
          <div className="mx-auto w-fit lg:w-full lg:mx-0">
            <CustomButton
              name="The problem"
              className="!rounded-sm bg-gradient-to-r mb-5"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center  flex-1 w-fit gap-8 lg:gap-0">
            {/* texts */}
            <div className="w-full bg-[url('/circle.svg')] bg-no-repeat bg-contain flex flex-col">
              <div className="w-full">
                <p className="font-medium text-black text-2xl sm:text-3xl max-w-5xl mb-10 lg:mb-12 text-center lg:text-start">
                  Finding the right influencer or creative shouldn’t feel like
                  guesswork. Brands struggle to discover authentic influencers.
                  <span className="text-black/60">
                    Creatives lack visibility to the right opportunities.
                    Influencers often get mismatched with campaigns that don’t
                    fit their voice.
                  </span>
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start lg:items-stretch flex-1 gap-4 mt-auto">
                  {info?.map((i, index) => (
                    <div
                      className="p-6 bg-[#F5F5F5] rounded-2xl max-w-[300px] w-full sm:w-fit flex flex-col justify-center items-center lg:items-start text-center lg:text-start"
                      key={index}
                    >
                      <img src={i?.icon} alt="" className="w-10 h-10 mb-2" />
                      <p className="text-xl font-semibold">{i?.name}</p>
                      <p className="text-lg">{i?.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* phone */}
            <div className="">
              <img
                className="h-[350px] lg:h-[450px] w-[500px] object-contain"
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
              <p className="text-white font-bold text-center mx-auto text-3xl sm:text-4xl max-w-4xl">
                With Spot’d its different. Creators get visibility and value.
                And brands finally find their people.
              </p>
              <p className="text-white text-xl text-center max-w-2xl w-fit mx-auto mt-4">
                Join a trusted space where creators showcase their work and
                brands. connect with the right talent effortlessly.
              </p>

              <div className="flex flex-wrap gap-4 w-fit mx-auto justify-center sm:justify-start mt-6">
                {join?.map((j, index: number) => (
                  <div
                    className={`p-3 px-6 rounded-full w-fit`}
                    key={index}
                    style={{ backgroundColor: j?.bg }}
                  >
                    <p
                      className="font-semibold 2xl:text-xl"
                      style={{ color: j?.color }}
                    >
                      {j?.name}
                    </p>
                  </div>
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
