import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import ReviewsAndFaqs from '@/components/sections/Reviews _& _Faqs';
import About_Spotd from '@/components/containers/about-spotd';
import Game_Changer from '@/components/containers/game-changer';
import { Hero_Section } from '@/components/containers/hero-section';

export default function Home() {
  return (
    <main className="flex flex-col  gap-20 size-full lg:max-m1:px-12.5 md:px-12.5 px-3.5 mt-20">
      <Hero_Section />
      <About_Spotd />
      <Game_Changer />
      <ReviewsAndFaqs />
      <Contact />
      <Footer />
    </main>
  );
}
