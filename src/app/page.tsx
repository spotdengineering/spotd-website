import Contact from '@/components/sections/Contact';
import ReviewsAndFaqs from '@/components/sections/Reviews _& _Faqs';
import About_Spotd from '@/components/sections/About-spotd';
import Game_Changer from '@/components/sections/GameChanger';
import { Hero } from '@/components/sections/Hero';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 overflow-x-hidden">
      <Hero />
      <About_Spotd />
      <Game_Changer />
      <ReviewsAndFaqs />
      <Contact />
    </div>
  );
}
