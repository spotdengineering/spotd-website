'use client';
import { SlArrowRight } from 'react-icons/sl';
import { SlArrowLeft } from 'react-icons/sl';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { TbListSearch } from 'react-icons/tb';
import { FaEye } from 'react-icons/fa';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ReviewsAndFaqs = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Arrow handlers
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const testimonies = [
    {
      name: 'John Doe',
      role: 'Artiste',
      note: '“The work is delivered, quickly approved, and payment released,making the process fast, seamless, and transparent. I really love the work here”',
      img: '/landing-page-images/caro 1.jpg',
    },
    {
      name: 'Jane Doe',
      role: 'Designer',
      note: '“The work is delivered, quickly approved, and payment released,making the process fast, seamless, and transparent. I really love the work here”',
      img: '/landing-page-images/caro 3.jpg',
    },
    {
      name: 'John Doe',
      role: 'Producer',
      note: '“The work is delivered, quickly approved, and payment released,making the process fast, seamless, and transparent. I really love the work here”',
      img: '/landing-page-images/caro 2.jpg',
    },
  ];

  const join = [
    { name: 'Join as a Creator', color: '#D42554' },
    { name: 'Join as an Influencer', color: '#D42554' },
    { name: 'Join as a Brand', color: '#D9671C' },
  ];

  const faq = [
    {
      q: 'What exactly is Spot’d?',
      a: 'Spot’d is a platform for brands to connect with creatives.',
    },
    {
      q: 'Who can join Spot’d?',
      a: 'Spot’d is a platform for brands to connect with creatives.',
    },
    {
      q: 'I’m new. How do I get started?',
      a: 'Spot’d is a platform for brands to connect with creatives.',
    },
    {
      q: 'How are collaborations managed?',
      a: 'Spot’d is a platform for brands to connect with creatives.',
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-10 2xl:px-0">
      <div className="max-w-[1440px] mx-auto">
        {/* ------------------------------reviews -------------------------------- */}
        <p className="text-black text-[35px] sm:text-[50px] text-center w-fit mx-auto font-medium">
          Results that Speak
        </p>
        <p className="text-[35px] sm:text-[50px] text-center w-fit mx-auto font-medium italic bg-clip-text text-transparent bg-linear-to-r from-brandPink via-brandOrange to-brandLemon mt-[-8px]">
          Louder Than Words
        </p>
        <p className="text-black text-center max-w-md w-fit mx-auto mt-2 text-xl">
          From discovery to delivery, Spot’d ensures clarity, security, and
          results.
        </p>
        <div className="flex w-full flex-col lg:flex-row items-stretch mt-8 sm:mt-16">
          {/* Carousel */}
          <div
            className="relative overflow-hidden md:max-w-[100%] lg:max-w-[70%] xl:max-w-[75%] 2xl:max-w-[80%]"
            ref={emblaRef}
          >
            {/* slides */}
            <div className="flex">
              {testimonies.map((t, index: number) => (
                <div className="flex-[0_0_100%]" key={index}>
                  <div className="flex items-stretch py-6 ">
                    {/* reviewer image */}
                    <div className="w-[25%] overflow-hidden rounded-3xl hidden md:flex ">
                      <img
                        className="h-[350px] w-full object-cover"
                        alt="reviewer-image"
                        src={t?.img}
                      />
                    </div>

                    {/* review */}
                    <div className="w-full md:w-[75%] flex flex-col md:gap-0 md:px-5 xl:px-10">
                      <p className="text-2xl sm:text-3xl text-black/80 w-full text-center md:text-start xl:max-w-[600px]">
                        {t?.note}
                      </p>

                      {/* reviewer name, role, avi */}
                      <div className="flex items-center gap-3 w-fit mx-auto md:w-full mt-5 md:mt-10">
                        <img
                          src={t?.img}
                          alt="avi"
                          className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-black font-semibold text-lg sm:text-xl">
                            {t?.name}
                          </p>
                          <p className="text-black/60 font-medium text-md sm:text-lg -mt-1">
                            {t?.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* static buttons */}
            <div className="mx-auto w-fit mb-10 md:mb-0 md:mx-0 md:w-fit md:absolute gap-4 md:bottom-10 md:right-10 flex items-center">
              <button
                onClick={scrollPrev}
                className="border-2 border-black rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
              >
                <SlArrowLeft className="text-xl sm:text-2xl" />
              </button>
              <button
                onClick={scrollNext}
                className="border-2 border-black rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
              >
                <SlArrowRight className="text-xl sm:text-2xl" />
              </button>
            </div>
          </div>

          <div className="lg:max-w-[30%] xl:max-w-[25%] 2xl:max-w-[20%] w-full rounded-3xl bg-gradient-to-tr from-brandPink via-brandOrange to-brandLemon p-6 flex flex-col">
            <div>
              <div className="text-white font-semibold text-7xl sm:text-8xl sm:font-medium text-center lg:text-start">
                24k
              </div>
              <div className="text-white text-lg sm:text-xl font-medium text-center lg:text-start">
                pain points solved
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:flex-col lg:items-start lg:justify-start gap-2 mt-6 lg:mt-auto">
              {join?.map((j, index: number) => (
                <div
                  className="bg-[#FDF1E9] p-3 px-6 rounded-full w-fit"
                  key={index}
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
        </div>

        {/* --------------------------- FAQs ------------------------------------- */}
        <div
          className="mt-20 flex flex-col space-y-8 lg:space-y-0 lg:flex-row justify-between items-center scroll-mt-[100px] lg:scroll-mt-[140px]"
          id="faq"
        >
          <div>
            <p className="text-black text-[35px] sm:text-[40px] mx-auto text-center lg:mx-0 lg:text-start w-fit font-medium">
              Got Questions?
            </p>
            <p className="text-[35px] sm:text-[40px] text-center lg:text-start w-fit font-medium italic mx-auto  lg:mx-0 bg-clip-text text-transparent bg-linear-to-r from-brandPink via-brandOrange to-brandLemon mt-[-5px]">
              We’ve Got Answers
            </p>
            <p className="text-black text-center mx-auto lg:mx-0 lg:text-start max-w-md w-fit mt-2 text-xl">
              Here are some frequently asked questions to get you up to speed
              with Spot’d
            </p>
          </div>
          <div className="bg-[#F4F4F4] px-6 py-10 rounded-4xl w-full lg:w-fit">
            <Accordion
              type="single"
              // collapsible
              className="w-full"
              defaultValue={faq?.[0]?.q}
            >
              {faq?.map((f: any, index: number) => (
                <AccordionItem
                  value={f?.q}
                  key={index}
                  className="cursor-pointer bg-[#ececec] rounded-3xl py-2 px-4 border-b-0 mb-4"
                >
                  <AccordionTrigger className="text-md text-black/80 font-semibold cursor-pointer hover:no-underline">
                    {f?.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-balance">
                    <p className="text-lg font-medium w-full lg:max-w-xs">
                      {f?.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* -------------------------- Info --------------------------------------- */}
        <div className="flex items-stretch w-full gap-4 mt-20 flex-col lg:flex-row">
          <div className="bg-[url(/landing-page-images/find-creators.png)] rounded-4xl p-4 lg:max-w-[70%] bg-no-repeat bg-cover flex flex-col w-full ">
            {/* info 1 */}
            <div className="bg-[rgba(255,255,255,0.2)] rounded-4xl p-2 w-fit backdrop-blur-xs mb-5 lg:mb-0">
              <div className="bg-white/90 p-6 rounded-4xl w-fit">
                <div className="max-w-[300px]">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full aspect-square w-16 flex justify-center items-center bg-gradient-to-r from-brandPink via-brandOrange to-brandLemon">
                      <p className="text-white text-4xl">
                        <TbListSearch />
                      </p>
                    </div>
                    <p className="text-black text-2xl font-medium max">
                      Find Creators That Truly Fit
                    </p>
                  </div>
                  <p className="text-[#606060] text-lg mt-3">
                    Use smart filters to discover authentic creators who align
                    with your brand’s style, values, and audience—making
                    collaborations seamless and impactful.
                  </p>
                </div>
              </div>
            </div>

            {/* info 2 */}
            <div className="bg-[rgba(255,255,255,0.2)] rounded-4xl p-2 w-fit backdrop-blur-xs mt-auto ml-auto">
              <div className="bg-white/90 p-6 rounded-4xl w-fit">
                <div className="max-w-[280px]">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full aspect-square w-14 flex justify-center items-center bg-gradient-to-t from-brandPink via-brandOrange to-brandLemon">
                      <p className="text-white text-4xl">
                        <FaEye />
                      </p>
                    </div>
                    <p className="text-black text-2xl font-medium max-w-[150px]">
                      Showcase Your Talent
                    </p>
                  </div>
                  <p className="text-[#606060] text-lg mt-3">
                    Build a portfolio that gets you noticed. Spot’d helps you
                    gain visibility, connect with the right brands, and grow
                    your influence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-tl from-brandPink via-brandOrange to-brandLemon p-6 rounded-4xl lg:max-w-[30%] w-full flex flex-col justify-center">
            <p className="text-white text-3xl lg:text-4xl font-bold text-center">
              Where creators get visibility and value. And brands finally find
              their people.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-12 lg:mt-8 ">
              {join?.map((j, index: number) => (
                <div
                  className="bg-[#FDF1E9] p-3 px-6 rounded-full w-fit"
                  key={index}
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
        </div>
      </div>
    </div>
  );
};

export default ReviewsAndFaqs;
