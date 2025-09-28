'use client';
import React from 'react';
import {
  Chat_Card,
  Game_Card,
  Game_Content,
  Game_Image,
  Mini_Card,
  Person_Card,
} from '../ui/custom/cards/game-card-container';
import { motion } from 'framer-motion';

const Game_Changer = () => {
  return (
    <div
      className="px-4 sm:px-6 lg:px-10 2xl:px-0 scroll-mt-[100px] lg:scroll-mt-[140px]"
      id="whyus"
    >
      <div className="flex items-center flex-col gap-10 size-full max-w-[1440px] mx-auto relative ">
        <div className="flex flex-col gap-4 sm:gap-6 items-center">
          <div>
            <p className="text-black text-[35px] sm:text-[50px] text-center w-fit mx-auto font-medium">
              Spot&apos;d is a Total
            </p>
            <p className="text-[35px] sm:text-[50px] text-center w-fit mx-auto font-medium italic bg-clip-text text-transparent bg-linear-to-r from-brandPink via-brandOrange to-brandLemon -mt-[10px] -mb-[12px]">
              Game Changer
            </p>
          </div>
          <p className="max-w-xl text-2xl text-center">
            From discovery to delivery, Spot&apos;d ensures clarity, security,
            and results and heres how
          </p>
        </div>

        {/* CARDS */}
        <Game_Card className="bg-green-100 !flex !flex-col lg:!flex-row">
          <div className="">
            <Game_Image src="/img1.png" imgStyle="object-cover">
              <Mini_Card className="absolute top-[20px] -right-[5%] lg:right-[-10%] 2xl:right-[-30%]" />
              <Person_Card
                img="/mini_guy.png"
                text="Fashion Influence"
                head="Olumide Egbe"
                star
                className="absolute whitespace-nowrap -left-3 sm:-left-5 bottom-[20] !pr-4 sm:pr-8"
              />
            </Game_Image>
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: 'easeOut',
              duration: 0.3,
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <Game_Content
              head="Browse real, curated creative’s portfolios."
              text="On Spot’d, brands can explore curated creative’s portfolios that showcase unique style, audience, and expertise, making it easy to find the right match."
              className="lg:!max-w-sm xl:!max-w-lg 2xl:!max-w-xl !text-center lg:!text-start"
            />
          </motion.div>
        </Game_Card>

        {/* CARD 2 */}
        <Game_Card className="bg-org !flex !flex-col lg:!flex-row-reverse">
          <Game_Image src="/img3.png" imgStyle={'object-cover'}>
            <Person_Card
              img="/mini_creator.png"
              text="5,000 Matches"
              head="Content Creator"
              className="absolute whitespace-nowrap -left-5 sm:-left-10 sm:bottom-10 bottom-5 pr-5 lg:-left-5"
            />
            <Person_Card
              img="/mini_creator.png"
              text="5,000 Matches"
              head="UI/UX Design"
              className="absolute whitespace-nowrap sm:-right-10 -right-5 top-7 pr-2"
            />
          </Game_Image>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: 'easeOut',
              duration: 0.3,
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <Game_Content
              className="lg:!max-w-sm xl:!max-w-lg 2xl:!max-w-xl !text-center lg:!text-start"
              head="Use smart filters to find your fit."
              text="Easily navigate through Spot’d with smart filters that help you refine your search and connect with creators whose skills, style, and audience perfectly align with your brand’s goals."
            />
          </motion.div>
        </Game_Card>

        {/* CARD 3 */}

        <Game_Card className="bg-green-100 !flex !flex-col lg:!flex-row">
          <Game_Image src="/img2.png" imgStyle="object-cover">
            <Chat_Card />
            <Person_Card
              img="/mini_guy.png"
              text="Fashion Influence"
              head="Olumide Egbe"
              star
              className="absolute whitespace-nowrap sm:bottom-10  bottom-5 !pr-4 sm:pr-8 -left-5"
            />
          </Game_Image>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: 'easeOut',
              duration: 0.3,
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <Game_Content
              className="lg:!max-w-sm xl:!max-w-lg 2xl:!max-w-xl !text-center lg:!text-start"
              head="Connect directly, with clarity, no guesswork."
              text="On Spot’d, set clear expectations through honest conversations—building transparency, understanding, and eliminating gray areas from the start."
            />
          </motion.div>
        </Game_Card>

        {/* CARD 4 */}

        <Game_Card className="bg-org !flex !flex-col lg:!flex-row-reverse">
          <Game_Image src="/img4.png" imgStyle="object-cover !relative">
            <Person_Card
              img="/Vector.png"
              head="Work Delivered & Approved"
              className="absolute -left-3 sm:-left-8 md:-left-16 lg:-left-12 xl:-left-16 top-8 pr-4 sm:w-[225px] w-[170px] !text-start"
            />{' '}
            <Person_Card
              img="/payment.png"
              head="Payment Released"
              text="Funds have been securely transferred to you."
              className="absolute [&_article]:text-[#525252] w-full md:max-w-[350px] !p-2 !-left-[5%] md:!-left-[15%] lg:!-left-[10%] xl:!-left-[50%] !bottom-[10%]"
            />
          </Game_Image>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: 'easeOut',
              duration: 0.3,
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <Game_Content
              className="lg:!max-w-sm xl:!max-w-lg 2xl:!max-w-xl !text-center lg:!text-start"
              head="Escrow payment safe ensures delivery."
              text="The work is delivered, quickly approved, and payment released,making the process fast, seamless, and transparent."
            />
          </motion.div>
        </Game_Card>
      </div>
    </div>
  );
};

export default Game_Changer;
