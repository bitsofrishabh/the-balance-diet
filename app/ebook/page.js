'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Script from 'next/script';
import {
  BookOpen,
  Download,
  CheckCircle,
  Star,
  Users,
  Gift,
  Clock,
  Target,
  Heart,
  TrendingUp,
  Shield,
  Award,
  Phone,
  ArrowRight,
} from 'lucide-react';

export default function EbookPage() {
  // Razorpay payment link
  const razorpayUrl = 'https://rzp.io/rzp/14wcSgkB';

  // All testimonial images
  const allTestimonialImages = [
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342360/Before-After/2_oernfq.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342360/Before-After/9_j68upl.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342359/Before-After/10_kr7dzl.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342359/Before-After/7_gbfnq9.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342359/Before-After/5_zc4maw.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342358/Before-After/8_tzzijq.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342358/Before-After/4_alxia4.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342357/Before-After/3_ug1tse.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342357/Before-After/6_nicj27.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342356/Before-After/1_d4fprb.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342245/Faceless%20Feedback/18_lnkgus.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342245/Faceless%20Feedback/26_bjuggp.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342245/Faceless%20Feedback/3_ehvb1y.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342245/Faceless%20Feedback/20_h7xzck.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342247/Faceless%20Feedback/24_z2vd1g.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342245/Faceless%20Feedback/1_cpbkjw.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342247/Faceless%20Feedback/4_cpg0mo.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342244/Faceless%20Feedback/17_dbftrk.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342247/Faceless%20Feedback/8_qpm5sj.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342246/Faceless%20Feedback/25_znaonj.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342248/Faceless%20Feedback/9_ebylbc.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342246/Faceless%20Feedback/5_ipj1fd.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342248/Faceless%20Feedback/7_qicf3v.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342247/Faceless%20Feedback/6_rcounj.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342248/Faceless%20Feedback/10_vvhrjn.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342248/Faceless%20Feedback/14_jeabde.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342249/Faceless%20Feedback/15_rlwmql.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342249/Faceless%20Feedback/13_j8hdmk.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342248/Faceless%20Feedback/11_rqoigu.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342244/Faceless%20Feedback/19_fhq2r6.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342244/Faceless%20Feedback/21_acyun9.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342244/Faceless%20Feedback/22_jkoupj.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342244/Faceless%20Feedback/23_pzfnzl.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342249/Faceless%20Feedback/12_nsws6o.png',
  ];

  const [currentImages, setCurrentImages] = useState([]);

  // Shuffle and select 6 random images
  const shuffleImages = () => {
    const shuffled = [...allTestimonialImages].sort(() => Math.random() - 0.5);
    setCurrentImages(shuffled.slice(0, 4));
  };

  // Initialize and auto-shuffle every 5 seconds
  useEffect(() => {
    shuffleImages();
    const interval = setInterval(shuffleImages, 3000);
    return () => clearInterval(interval);
  }, []);

  const chapters = [
    { number: '01', title: 'Understanding Your Body', description: 'Learn about metabolism, hormones, and how your body processes food.', icon: Heart },
    { number: '02', title: 'Nutrition Fundamentals', description: 'Master the basics of macronutrients, micronutrients, and balanced eating.', icon: BookOpen },
    { number: '03', title: 'Meal Planning Made Easy', description: 'Step-by-step guide to planning and preparing healthy meals.', icon: Target },
    { number: '04', title: 'Exercise & Movement', description: 'Effective workout routines that complement your nutrition plan.', icon: TrendingUp },
    { number: '05', title: 'Mindset & Habits', description: 'Build lasting habits and overcome mental barriers to success.', icon: Shield },
    { number: '06', title: 'Maintaining Your Results', description: 'Strategies to keep the weight off and maintain your healthy lifestyle.', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-white">
      <>
  <Script id="fb-pixel" strategy="afterInteractive">
    {`!function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1085557582642393');
    fbq('track', 'PageView');`}
  </Script>

  <noscript>
    <img
      height="1"
      width="1"
      style={{ display: 'none' }}
      src="https://www.facebook.com/tr?id=1085557582642393&ev=PageView&noscript=1"
      alt=""
    />
  </noscript>

  {/* existing page content */}
</>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <Badge className="bg-primary-100 text-primary-700">
                <Gift className="w-4 h-4 mr-2" />
                Free Download
              </Badge>

              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  The Complete Guide to
                  <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent block">
                    Healthy Weight Loss
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Download our comprehensive 80-page e-book packed with proven strategies,
                  meal plans, recipes, and expert tips for sustainable weight loss.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: BookOpen, text: '80+ Pages of Expert Content' },
                  { icon: Users, text: '10,000+ Downloads' },
                  { icon: Star, text: '4.9/5 Average Rating' },
                  { icon: Clock, text: 'Lifetime Access' },
                ].map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-primary-100 p-2 rounded-lg">
                        <IconComponent className="w-5 h-5 text-primary-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={razorpayUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 px-8 py-4">
                    Yes, I want to get fit in just ₹99/-
                  </Button>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-primary-500" />
                  100% Free
                </div>
                <div className="flex items-center">
                  <Download className="w-4 h-4 mr-2 text-primary-500" />
                  Instant Download
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-primary-500" />
                  No Spam
                </div>
              </div>
            </div>

            {/* Right Column - E-book Preview */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 shadow-2xl">
                <div className="transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="https://res.cloudinary.com/djdej77pl/image/upload/v1755538875/Green_Illustrated_Healthy_Eating_eBook_Cover_1_aqtcdq.png"
                    alt="The Balance Diet E-book Cover"
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">2K+</div>
                    <div className="text-xs text-gray-600">Downloads</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-lg font-bold text-gray-900 ml-1">4.9</span>
                    </div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What's Inside the E-Book</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive content designed to guide you through every step of your weight loss journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapters.map((chapter, index) => {
              const IconComponent = chapter.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-100 p-3 rounded-xl mr-4">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {chapter.number}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{chapter.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{chapter.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Free Consultation Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get a Free 30-Minute Zoom Video Call Consultation
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              With the purchase of this e-book, get a personalized 30-minute consultation with our expert nutritionists.
              Discuss your health goals, get personalized advice, and create your transformation roadmap.
            </p>

            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What You'll Get:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {[
                  'Personalized health assessment',
                  'Custom nutrition recommendations',
                  'Goal-setting and planning session',
                  'Q&A with certified nutritionist',
                ].map((item) => (
                  <div key={item} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href={razorpayUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 px-8 py-4 text-lg"
              >
                Yes, I want to get fit
              </Button>
            </a>

            <p className="text-sm text-gray-500 mt-4">💡 Consultation will be scheduled within 24 hours of purchase</p>
          </div>
        </div>
      </section>

      {/* Final CTA & Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            See real transformation results from people who have changed their lives with our guidance.
          </p>

          {/* Testimonial Images Grid (rotating) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {currentImages.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Client transformation ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* More Testimonials Button */}
          <Link href="/success-stories">
            <Button variant="outline" size="lg" className="px-8 py-4 mb-8">
              View More Success Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          {/* Purchase CTA */}
       
        </div>
      </section>
    </div>
  );
}
