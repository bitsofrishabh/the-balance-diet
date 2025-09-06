import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ClientTestimonials } from '@/components/sections/ClientTestimonials';
import { WeightLossServices } from '@/components/sections/WeightLossServices';
import { Features } from '@/components/sections/Features';
import { VideoTestimonials } from '@/components/sections/VideoTestimonials';
import { Stats } from '@/components/sections/Stats';
import { TransformationSection } from '@/components/sections/TransformationSection';
import { FAQ } from '@/components/sections/FAQ';
import { LocalContent } from '@/components/LocalContent';

export const metadata = {
  title: 'Best Nutritionist in Delhi NCR | Weight Loss Expert | The Balance Diet',
  description: 'Top-rated nutritionist in Delhi, Gurgaon, Noida & Faridabad. Personalized weight loss programs, PCOS management, diabetes diet plans. 300+ success stories. Book free consultation!',
  keywords: 'best nutritionist Delhi, weight loss coach Delhi NCR, dietitian near me, PCOS diet specialist, diabetes nutritionist Delhi, thyroid diet expert Gurgaon',
};

export default function Home() {
  return (
    <>
      <Hero />
      {/* <LocalContent /> */}
      <HowItWorks />
      <ClientTestimonials />
      <WeightLossServices />
      <Features />
      <Stats />
      <VideoTestimonials />
      <TransformationSection id="health-assessment" />
      <FAQ />
    </>
  );
}