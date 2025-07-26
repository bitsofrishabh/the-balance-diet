import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { Stats } from '@/components/sections/Stats';

export const metadata = {
  title: 'The Balance Diet - Transform Your Health Journey',
  description: 'Start your personalized weight loss and wellness journey with expert guidance, proven strategies, and sustainable nutrition plans.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
}