'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Filled_Btn } from '../ui/custom/buttons/filled-btn';
import { Btn } from '../ui/custom/buttons/btn';
import { motion, AnimatePresence } from 'framer-motion';
import { Nav } from '../ui/custom/nav';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.header
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white  flex items-center w-full justify-between fixed px-3.5 md:px-12.5 xl:px-20 top-0 z-50 "
    >
      <Image
        src="/spotd.png"
        alt="spotD Logo"
        width={100}
        height={100}
        className=" object-contain"
      />

      {isOpen === false && (
        <Image
          src={'/menu.svg'}
          width={44}
          height={44}
          alt="hamburger menu"
          className="object-fit size-[40px] block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      {isOpen && (
        <Image
          src={'/x.svg'}
          width={44}
          height={44}
          alt="hamburger menu"
          className="object-fit size-[40px] block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      <Nav className="hidden md:flex" />
      <Filled_Btn className="md:flex hidden">Get Started</Filled_Btn>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{
              opacity: { duration: 0.4 },
              x: { type: 'tween', stiffness: 60, damping: 12 },
            }}
            className="items-start bg-white  flex flex-col  top-25 pb-20 h-[90vh] w-full leading-6  justify-between  absolute z-30 px-6 py-7 left-0"
          >
            <Nav className=" items-start gap-10 font-medium text-xl md:hidden flex flex-col" />
            <div className="flex items-center justify-between w-full">
              <Filled_Btn className="py-6 px-5">
                Start getting visible
              </Filled_Btn>
              <Btn className="px-5">Find out more</Btn>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
