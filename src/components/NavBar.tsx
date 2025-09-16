'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import CustomButton from './custom-comp/CustomButton';
import { motion, AnimatePresence } from 'framer-motion';
import CustomButtonOutline from './custom-comp/CustomButtonOutline';
import LogoColored from './custom-comp/LogoColored';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navs = [
    { name: 'Why Us', link: '#whyus' },
    { name: 'Contact Us', link: '#contact' },
    { name: 'FAQs', link: '#faq' },
  ];
  return (
    <motion.header
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-5 w-full fixed top-0 left-0 right-0 mx-auto z-20 px-3 sm:px-5 lg:px-10 2xl:px-0 bg-white">
        <div className="max-w-[1440px] mx-auto w-full flex justify-between items-center">
          <LogoColored />

          <div className="items-center gap-8 hidden lg:flex">
            {navs?.map((n: any, index: number) => (
              <Link key={index} href={n?.link}>
                <p className="text-lg font-semibold hover:text-black/60 text-black transition-all duration-300">
                  {n?.name}
                </p>
              </Link>
            ))}
          </div>

          <Link href="#">
            <CustomButton
              name="Get Started"
              className="bg-gradient-to-r lg:flex hidden"
            />
          </Link>
          <div className="flex lg:hidden" onClick={handleMenu}>
            <img
              alt=""
              src="/landing-page-images/menu open.svg"
              className="w-6 h-6 sm:w-8 sm:h-8 object-cover"
            />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                }}
                className="p-6 bg-white fixed top-0 right-0 w-full sm:w-[500px] min-h-[100%] z-20 flex flex-col"
                style={{ zIndex: 'overlay' }}
              >
                <div className="w-fit ml-auto" onClick={handleMenu}>
                  <img
                    alt=""
                    src="/landing-page-images/menu close.svg"
                    className="w-8 h-8 sm:w-10 sm:h-10 object-cover"
                  />
                </div>
                <div className="items-start gap-8 flex-col flex mt-10">
                  {navs?.map((n: any, index: number) => (
                    <Link key={index} href={n?.link}>
                      <p className="text-lg font-semibold hover:text-black/60 text-black transition-all duration-300">
                        {n?.name}
                      </p>
                    </Link>
                  ))}
                </div>

                <div className="flex items-start flex-wrap mt-10 gap-4 sm:gap-8">
                  <Link href="#">
                    <CustomButton
                      name="Get Spot’d"
                      className="bg-gradient-to-l !px-4"
                    />
                  </Link>
                  <Link href="#">
                    <CustomButtonOutline name="Find out more" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default NavBar;
