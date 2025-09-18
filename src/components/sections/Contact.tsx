import React from 'react';
import CustomInput from '../custom-comp/CustomInput';
import CustomTextarea from '../custom-comp/CustomTextarea';
import CustomButton from '../custom-comp/CustomButton';
const Contact = () => {
  return (
    <div
      className="px-4 sm:px-6 lg:px-10 2xl:px-0 relative scroll-mt-[100px] lg:scroll-mt-[140px]"
      id="contact"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="relative pt-12 sm:pt-20">
          <p className=" text-center text-6xl sm:text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-linear-to-r from-brandPink via-brandOrange to-brandLemon">
            Contact Us
          </p>

          <div className="absolute top-0 left-0 right-0 mx-auto w-fit">
            <img
              src="/landing-page-images/phone.png"
              className="w-14 sm:w-24 md:h-60 object-contain sm:object-cover"
              alt="phone"
            />
          </div>
          <p className="text-black text-lg lg:text-2xl text-center max-w-xl w-fit mx-auto mt-6 sm:mt-16 md:mt-8">
            We’re just a message away, ready to answer your questions, explore
            ideas, and help you connect seamlessly on Spot’d
          </p>
        </div>
        {/* form */}
        <div className="relative">
          <div className="bg-gray-200/30 p-6 py-10 rounded-4xl max-w-md w-full flex-col flex gap-5 mt-10  mx-auto">
            {/* name */}
            <CustomInput
              placeholder="Full name"
              className="!text-base py-[26px] rounded-xl pl-4  bg-white"
              type="text"
            />

            {/* email */}
            <CustomInput
              placeholder="Email Address"
              className="!text-base py-[26px] rounded-xl pl-4  bg-white"
              type="email"
            />

            {/* subject */}
            <CustomInput
              placeholder="Subject/Reason for Contact"
              className="!text-base py-[26px] rounded-xl pl-4  bg-white"
              type="text"
            />
            <CustomTextarea
              placeholder="Message"
              className="!text-base rounded-xl pl-4 h-[150px] resize-none  bg-white"
            />

            <CustomButton
              name="Send Message"
              className="bg-gradient-to-r mx-auto"
            />
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none  hidden lg:block">
          {/* spiral left */}
          <div className="absolute top-1/2 left-[-100px] w-[600px]">
            <img
              src="/landing-page-images/spiral-left.png"
              alt="spiral-left"
              className="object-cover"
            />
          </div>

          {/* spiral right */}
          <div className="absolute top-0 right-[-100px] w-[600px]">
            <img
              src="/landing-page-images/spiral-right.png"
              alt="spiral-right"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
