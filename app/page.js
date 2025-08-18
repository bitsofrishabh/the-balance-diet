import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ClientTestimonials } from '@/components/sections/ClientTestimonials';
import { WeightLossServices } from '@/components/sections/WeightLossServices';
import { Features } from '@/components/sections/Features';
import { VideoTestimonials } from '@/components/sections/VideoTestimonials';
import { Stats } from '@/components/sections/Stats';
import { TransformationSection } from '@/components/sections/TransformationSection';
import { FAQ } from '@/components/sections/FAQ';

export const metadata = {
  title: 'The Balance Diet - Transform Your Health Journey',
  description: 'Start your personalized weight loss and wellness journey with expert guidance, proven strategies, and sustainable nutrition plans.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ClientTestimonials />
      <WeightLossServices />
      <Features />
      <Stats />
      <VideoTestimonials />
      <TransformationSection />
      <FAQ />
    </>
  );
}