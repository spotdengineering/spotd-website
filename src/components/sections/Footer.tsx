import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { LuFacebook } from 'react-icons/lu';
import { FaInstagram } from 'react-icons/fa6';
import Link from 'next/link';
import CustomInput from '../custom-comp/CustomInput';
import CustomButton from '../custom-comp/CustomButton';

const Footer = () => {
  const navs = [
    { name: 'How Spot’d works', link: '/' },
    { name: 'Features', link: '/' },
    { name: 'Contact us', link: '/' },
    { name: 'FAQ’s', link: '/' },
  ];

  const social = [
    { icon: <FaXTwitter />, link: '/' },
    { icon: <AiOutlineLinkedin />, link: '/' },
    { icon: <LuFacebook />, link: '/' },
    { icon: <FaInstagram />, link: '/' },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-10 2xl:px-0 relative py-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:flex-wrap xl:flex-nowrap justify-between gap-6">
          <div className="min-w-[200px] flex-shrink-0">
            <img src="/landing-page-images/logo.png" alt="logo" />
            <p className="max-w-[300px] text-black font-medium text-lg">
              We are connecting creatives, influencers and brands.
            </p>
          </div>

          {/* navs */}
          <div className="flex flex-col sm:flex-wrap sm:flex-row gap-4 sm:gap-8 sm:items-center font-semibold">
            {navs?.map((n: any, index: number) => (
              <p
                key={index}
                className="text-black cursor-pointer hover:text-black/60 transition-all ease-in-out duration-300"
              >
                {n?.name}
              </p>
            ))}
          </div>

          {/* social */}
          <div className="flex gap-3 items-center font-semibold">
            {social?.map((n: any, index: number) => (
              <Link href={n?.link} key={index}>
                <div className="bg-gradient-to-br from-brandLemon via-brandOrange to-brandPink p-2 rounded-xl">
                  <p className="text-2xl text-white">{n?.icon}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <form action="" className="flex flex-col gap-3 w-full max-w-xs mt-10">
          <CustomInput
            className="rounded-full bg-gray-400/10 p-6 placeholder:text-gray-500 "
            placeholder="Email address"
          />
          <CustomButton
            name="Subscribe"
            className="bg-gradient-to-r from-brandLemon via-brandOrange to-brandPink rounded-full text-white w-fit py-6 px-9 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Footer;
