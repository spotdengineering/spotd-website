'use client';
import { useState } from 'react';
import CustomInput from '../custom-comp/CustomInput';
import CustomTextarea from '../custom-comp/CustomTextarea';
import CustomButton from '../custom-comp/CustomButton';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const createMailtoLink = () => {
    const mailto = 'contact@bestspoted.com';
    const subjectParam = encodeURIComponent(
      formData.subject || "Contact from Spot'd Website"
    );
    const bodyParam = encodeURIComponent(
      `Hello, I'm ${formData.fullName}.\n\n${formData.message}`
    );

    return `mailto:${mailto}?subject=${subjectParam}&body=${bodyParam}`;
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = createMailtoLink();
    window.open(mailtoLink, '_blank', 'noopener');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };
  return (
    <div
      className="px-4 sm:px-6 lg:px-10 2xl:px-0 relative scroll-mt-[100px] lg:scroll-mt-[140px]"
      id="contact"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="relative pt-12 sm:pt-20">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: 'easeOut',
              duration: 0.5,
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className=" text-center text-6xl sm:text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-linear-to-r from-brandPink via-brandOrange to-brandLemon">
              Contact Us
            </p>
          </motion.div>

          <div className="absolute top-0 left-0 right-0 mx-auto w-fit">
            <img
              src="/landing-page-images/phone.png"
              className="w-14 sm:w-24 md:h-60 object-contain sm:object-cover"
              alt="phone"
            />
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: 'easeOut',
              duration: 0.5,
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-black text-lg lg:text-2xl text-center max-w-xl w-fit mx-auto mt-6 sm:mt-16 md:mt-8">
              We’re just a message away, ready to answer your questions, explore
              ideas, and help you connect seamlessly on Spot’d
            </p>
          </motion.div>
        </div>
        {/* form */}
        <div className="relative">
          <form
            onSubmit={submitHandler}
            className="bg-[#F4F4F480] p-6 rounded-2xl max-w-md w-full flex-col flex gap-5 mt-10 mx-auto"
          >
            {/* name */}
            <CustomInput
              required
              placeholder="Full name"
              className="!text-base py-[26px] rounded-xl pl-4 bg-white"
              type="text"
              value={formData.fullName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange('fullName', e.target.value)
              }
            />

            {/* email */}
            <CustomInput
              required
              placeholder="Email Address"
              className="!text-base py-[26px] rounded-xl pl-4  bg-white"
              type="email"
              value={formData.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange('email', e.target.value)
              }
            />

            {/* subject */}
            <CustomInput
              required
              placeholder="Subject/Reason for Contact"
              className="!text-base py-[26px] rounded-xl pl-4  bg-white"
              type="text"
              value={formData.subject}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange('subject', e.target.value)
              }
            />
            <CustomTextarea
              required
              placeholder="Message"
              className="!text-base rounded-xl pl-4 h-[150px] resize-none  bg-white"
              value={formData.message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleInputChange('message', e.target.value)
              }
            />

            <CustomButton
              name="Send message"
              className="bg-gradient-to-r mx-auto"
            />
          </form>
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
