import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Users, 
  Heart,
  Target,
  BookOpen,
  CheckCircle,
  MessageCircle,
  Phone,
  Star,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react';

export const metadata = {
  title: 'About Us - Meet Our Expert Team',
  description: 'Learn about The Balance Diet team of certified nutritionists and health coaches dedicated to transforming lives through personalized nutrition.',
};

export default function AboutPage() {
  const whatsappNumber = '+1234567890';
  const whatsappMessage = 'Hi! I would like to know more about The Balance Diet programs.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-primary-100 text-primary-700">
              <Heart className="w-4 h-2 mr-2" />
              About The Balance Diet
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
              About Us
            </h1>
          
          </div>
        </div>
      </section>

      {/* About Us Full Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              At The Balance Diet, we make weight loss simple, personalized, and sustainable. No crash diets, no "detox" gimmicks—just science-backed nutrition, habit coaching, and full accountability. Our plans are built around Indian meals—roti, rice, dal, sabzi, paneer, eggs/fish/chicken (if you eat them)—so you never feel deprived or socially restricted.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mt-6">
              We pair clear weekly targets with WhatsApp check-ins, progress tracking, and course-corrections to fit your lifestyle, travel, and work schedules. Whether your goal is fat loss, better energy, reversing poor eating habits, or managing conditions like PCOS or cholesterol, we meet you where you are and guide you step by step.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert team combines scientific knowledge with practical experience to guide you on your health journey.
            </p>
          </div>

          <div className="space-y-12">
            {/* Founder - Rishabh Singh */}
            <div className="grid lg:grid-cols-10 gap-8 items-center">
              {/* Image - 30% */}
              <div className="lg:col-span-3">
                <div className="relative">
                  <img
                    src="https://res.cloudinary.com/djdej77pl/image/upload/v1755150648/2_pezirx.png"
                    alt="Rishabh Singh - Founder"
                    className="w-64 h-64 mx-auto rounded-full object-cover shadow-2xl border-4 border-primary-100"
                  />
                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-lg border border-primary-200">
                    <span className="text-primary-600 font-semibold text-sm">Founder</span>
                  </div>
                </div>
              </div>
              
              {/* Content - 70% */}
              <div className="lg:col-span-7">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Rishabh Singh
                </h2>
                <p className="text-lg text-primary-600 font-semibold mb-4">
                  Founder & Head Coach
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Rishabh is a Precision Nutrition–certified coach who blends practical habit coaching with data-driven nutrition. A problem-solver at heart, he simplifies complex concepts into step-by-step routines you can follow even on hectic days. His approach: keep meals familiar, make goals measurable, review weekly, and adjust quickly. Clients appreciate his clarity, accountability, and the no-drama path to real, sustainable results.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Quick Facts:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      Precision Nutrition certification (PN)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      Special focus: sustainable fat loss, habit building, Indian meal planning
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      Coaching style: structured goals, weekly reviews, WhatsApp accountability
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Co-Founder - Dt. Savita Choudhary */}
            <div className="grid lg:grid-cols-10 gap-8 items-center">
              {/* Content - 70% */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Dt. Savita Choudhary
                </h2>
                <p className="text-lg text-secondary-600 font-semibold mb-4">
                  Co-Founder & Lead Nutritionist
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Savita is a results-oriented dietitian and coach who designs balanced, enjoyable meal plans using everyday Indian ingredients. She focuses on creating variety without complicating your kitchen—prioritizing health markers, satiety, and taste. Her clients value her gentle guidance, practical swaps, and consistent follow-through that make lifestyle change actually stick.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Quick Facts:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" />
                      Clinical nutrition & weight-management expertise
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" />
                      Strengths: Indian meal design, smart substitutions, behavior change
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" />
                      Approach: food you enjoy, plans you can maintain, results you can measure
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Image - 30% */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                <div className="relative">
                  <img
                    src="https://res.cloudinary.com/djdej77pl/image/upload/v1755134495/1_n4riao.png"
                    alt="Dt. Savita Choudhary - Co-founder"
                    className="w-64 h-64 mx-auto rounded-full object-cover shadow-2xl border-4 border-secondary-100"
                  />
                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-lg border border-secondary-200">
                    <span className="text-secondary-600 font-semibold text-sm">Co-Founder</span>
                  </div>
                </div>
              </div>
          </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-600">
              Balance wins over extremes. We coach you to eat well, move more, sleep better, and manage stress—because real change sticks only when it fits real life.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Core Principles</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">Food first, science first:</span>
                  <span className="text-gray-700"> Evidence-based nutrition, not fads.</span>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">Indian & practical:</span>
                  <span className="text-gray-700"> Plans around your home food, culture, and routine.</span>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">Habits over hacks:</span>
                  <span className="text-gray-700"> Small, consistent changes beat short bursts.</span>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">Progress, not perfection:</span>
                  <span className="text-gray-700"> We adjust, iterate, and keep you moving.</span>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">Accountability matters:</span>
                  <span className="text-gray-700"> Clear targets, weekly reviews, honest feedback.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <div className="bg-primary-500 p-3 rounded-xl inline-flex mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To help people achieve healthy, sustainable weight loss with simple, personalized coaching built on Indian foods and evidence-based practices.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  Personalize plans to each client's health, taste, and routine.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  Provide clear guidance, tracking, and compassionate accountability.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  Replace confusion and fads with clarity, skills, and confidence.
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-8">
              <div className="bg-secondary-500 p-3 rounded-xl inline-flex mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A world where balanced eating is effortless, Indian meals are celebrated—not feared—and sustainable weight management becomes the norm, not the exception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Philosophy Section - Keeping for visual consistency */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            ]
            }
      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Ready to start your transformation journey? Contact us today to learn more about our personalized programs.
          </p>
        </div>
      </section>
    </div>
  );
}