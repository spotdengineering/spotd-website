import React from 'react';
import Paragraph from '../ui/paragraph';
import {
  Chat_Card,
  Game_Card,
  Game_Content,
  Game_Image,
  Mini_Card,
  Person_Card,
} from '../ui/custom/cards/game-card-container';

const Game_Changer = () => {
  return (
    <section className="flex pb-10 font-plusjakarta  items-center flex-col gap-10 size-full ">
      <div className="flex flex-col gap-4 sm:gap-6 items-center">
        <h1 className="font-medium text-[29px] sm:text-[60px] sm:leading-18">
          Spot’d is a Total
          <br />
          <span className=" bg-gradient-to-r from-pink via-orange to-lemon bg-clip-text text-transparent">
            Game Changer.
          </span>
        </h1>
        <Paragraph>
          From discovery to delivery, Spot&apos;d ensures <br /> clarity,
          security, and results and heres how
        </Paragraph>
      </div>

      {/* CARDS */}
      <Game_Card className="bg-green-100  fold:!gap-45 ">
        <Game_Image src="/img1.png" imgStyle="object-cover max-fold:w-full">
          <Mini_Card className="fold:-right-28 lg:-right-28 -right-5 fold:top-10 md:-right-10 max-fold:bottom-10 max-sm:bottom-5 absolute" />
          <Person_Card
            img="/mini_guy.png"
            text="Fashion Influence"
            head="Olumide Egbe"
            star
            className="absolute whitespace-nowrap fold:!-left-10 md:-left-10 -left-5 sm:-left-15 fold:bottom-10 max-fold:top-10  max-sm:top-5 !pr-4 sm:pr-8"
          />
        </Game_Image>
        <Game_Content
          head="Browse real, curated creative’s portfolios."
          text="On Spot’d, brands can explore curated creative’s portfolios that showcase unique style, audience, and expertise, making it easy to find the right match."
        />
      </Game_Card>

      {/* CARD 2 */}
      <Game_Card className="bg-org fold:pl-24 lg:max-xl:pl-20 lg:max-xl:gap-40 fold:gap-55 ">
        <Game_Content
          className="hidden fold:block fold:[&_h1]:pb-9 "
          head="Use smart filters to find your fit."
          text="Easily navigate through Spot’d with smart filters that help you refine your search and connect with creators whose skills, style, and audience perfectly align with your brand’s goals."
        />
        <Game_Image
          src="/img3.png"
          imgStyle={'object-cover max-fold:w-screen max-fold:h-150 sm:h-full'}
        >
          <Person_Card
            img="/mini_creator.png"
            text="5,000 Matches"
            head="Content Creator"
            className="absolute whitespace-nowrap -left-5 sm:-left-10 sm:bottom-10 bottom-5 pr-5 lg:-left-15"
          />
          <Person_Card
            img="/mini_creator.png"
            text="5,000 Matches"
            head="UI/UX Design"
            className="absolute whitespace-nowrap sm:-right-10 -right-5 top-7 pr-2"
          />
        </Game_Image>

        <Game_Content
          className="block fold:hidden "
          head="Use smart filters to find your fit."
          text="Easily navigate through Spot’d with smart filters that help you refine your search and connect with creators whose skills, style, and audience perfectly align with your brand’s goals."
        />
      </Game_Card>

      {/* CARD 3 */}

      <Game_Card className="bg-green-100 fold:pr-10 fold:!gap-30">
        <Game_Image
          src="/img2.png"
          imgStyle="object-cover fold:w-[450px] w-full"
        >
          <Chat_Card />
          <Person_Card
            img="/mini_guy.png"
            text="Fashion Influence"
            head="Olumide Egbe"
            star
            className="absolute whitespace-nowrap fold:!-left-10 sm:bottom-10 md:-left-10 bottom-5 !pr-4 sm:pr-8 sm:-left-15 -left-5"
          />
        </Game_Image>
        <Game_Content
          head="Connect directly, with clarity, no guesswork."
          text="On Spot’d, set clear expectations through honest conversations—building transparency, understanding, and eliminating gray areas from the start."
        />
      </Game_Card>

      {/* CARD 4 */}

      <Game_Card className="bg-org fold:pl-24  fold:!gap-40">
        <Game_Content
          className="hidden fold:block fold:[&_h1]:pb-9"
          head="Escrow payment safe ensures delivery."
          text="The work is delivered, quickly approved, and payment released,making the process fast, seamless, and transparent."
        />
        <Game_Image src="/img4.png" imgStyle="object-cover max-fold:w-full">
          <Person_Card
            img="/Vector.png"
            head="Work Delivered & Approved"
            className="absolute fold:-left-25 -left-5 sm:-left-15 top-8 pr-4 md:-left-10 sm:w-[225px] w-[170px]"
          />{' '}
          <Person_Card
            img="/payment.png"
            head="Payment Released"
            text="Funds have been securely transferred to you."
            className="absolute w-fit  md:-right-10 fold:-left-50 text-left max-fold:-right-15 max-sm:-right-5 bottom-10 pl-4 [&_article]:text-[#525252] sm:[&_article]:w-[200px] [&_article]:w-[140px]"
          />
        </Game_Image>

        <Game_Content
          className="block fold:hidden"
          head="Escrow payment safe ensures delivery."
          text="The work is delivered, quickly approved, and payment released,making the process fast, seamless, and transparent."
        />
      </Game_Card>
    </section>
  );
};

export default Game_Changer;
