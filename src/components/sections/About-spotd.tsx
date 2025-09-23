import React from 'react';
import CustomButton from '../custom-comp/CustomButton';
import { Phone } from '../ui/phone';

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
      <div className="px-4 sm:px-6 lg:px-10 2xl:px-0">
        <div className="max-w-[1440px] mx-auto relative">
          <div>
            <CustomButton
              name="The problem"
              className="!rounded-sm bg-gradient-to-r mb-5 cursor-text"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center  flex-1 w-fit gap-8 lg:gap-0">
            {/* texts */}
            <div className="w-full bg-[url('/circle.svg')] bg-no-repeat bg-contain flex flex-col">
              <div className="w-full">
                <p className="font-medium text-black text-2xl sm:text-3xl !w-full  mb-10 lg:mb-12 text-left lg:text-start">
                  Finding the right influencer or creative shouldn’t feel like
                  guesswork. Brands struggle to discover authentic influencers.
                  <span className="text-black/60">
                    Creatives lack visibility to the right opportunities.
                    Influencers often get mismatched with campaigns that don’t
                    fit their voice.
                  </span>
                </p>
                <div className="flex gap-10 sm:flex-row flex-col items-center">
                  <div className="flex max-lg:flex-wrap justify-start w-full lg:items-stretch flex-1 gap-4 mt-auto">
                    {info?.map((i, index) => (
                      <div
                        className="p-6 bg-[#F5F5F5] h-50 sm:h-62.5 rounded-2xl gap-2 w-full flex flex-col justify-center items-start  text-left"
                        key={index}
                      >
                        <img
                          src={i?.icon}
                          alt=""
                          className="sm:size-16 size-13 mb-2"
                        />
                        <p className="text-xl font-semibold">{i?.name}</p>
                        <p className="text-lg ">{i?.sub}</p>
                      </div>
                    ))}
                  </div>

                  <Phone
                    className=" block lg:hidden"
                    image_style="w-[350px] sm:w-[400px] object-contain"
                  />
                </div>
              </div>
            </div>

            {/* phone */}
            <Phone
              className=" hidden lg:block"
              image_style="h-[600px] sm:h-[350px] lg:h-[500px] sm:w-[500px] object-contain"
            />
          </div>

          <div className="bg-[url('/bg.png')] bg-center bg-cover bg-no-repeat rounded-2xl lg:rounded-full w-full sm:h-[400px] flex flex-col justify-center mt-20 overflow-hidden relative">
            <img
              src="/rightHand.png"
              className="h-60 w-60 ml-auto object-cover hidden lg:flex"
            />
            <div className="sm:absolute h-full w-full flex flex-col justify-center align-middle py-10 px-6 lg:px-10 2xl:p-0">
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
