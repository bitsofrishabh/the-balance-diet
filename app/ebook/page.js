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
import { serverEvent, event as fpixelEvent } from '@/lib/fpixel';
import { v4 as uuidv4 } from 'uuid';

export default function EbookPage() {
  // Razorpay payment link
  const razorpayUrl = 'https://rzp.io/rzp/14wcSgkB';

  // All testimonial images
  const allTestimonialImages = [
  'https://ik.imagekit.io/5b8rploye/Client%20Before-After%20Collection/7.png?updatedAt=1757225608028',
  'https://ik.imagekit.io/5b8rploye/Client%20Before-After%20Collection/9.png?updatedAt=1757225607978',
  'https://ik.imagekit.io/5b8rploye/Client%20Before-After%20Collection/5.png?updatedAt=1757225607925',
  'https://ik.imagekit.io/5b8rploye/Client%20Before-After%20Collection/4.png?updatedAt=1757225607892',
  'https://ik.imagekit.io/5b8rploye/Client%20Before-After%20Collection/6.png?updatedAt=1757225607851',
  'https://ik.imagekit.io/5b8rploye/Client%20Before-After%20Collection/Client%20Before-After%20Collection.png?updatedAt=1757225607813',
  'https://ik.imagekit.io/5b8rploye/Client%20Before-After%20Collection/10.png?updatedAt=1757225607404',
  'https://ik.imagekit.io/5b8rploye/Client%20Before-After%20Collection/8.png?updatedAt=1757225607323',
  'https://ik.imagekit.io/5b8rploye/Client%20Before-After%20Collection/3.png?updatedAt=1757225606337',
  'https://ik.imagekit.io/5b8rploye/Client%20Before-After%20Collection/1.png?updatedAt=1757225607681',
 'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/26.png?updatedAt=1757225637713',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/22.png?updatedAt=1757225637530',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/9.png?updatedAt=1757225642903',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/6.png?updatedAt=1757225642856',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/7.png?updatedAt=1757225642830',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/8.png?updatedAt=1757225642812',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/4.png?updatedAt=1757225642215',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/5.png?updatedAt=1757225642200',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/24.png?updatedAt=1757225638303',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/3.png?updatedAt=1757225638284',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/25.png?updatedAt=1757225638278',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/23.png?updatedAt=1757225638053',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/21.png?updatedAt=1757225637458',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/2.png?updatedAt=1757225637195',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/19.png?updatedAt=1757225637417',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/20.png?updatedAt=1757225637174',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/18.png?updatedAt=1757225631704',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/15.png?updatedAt=1757225631681',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/13.png?updatedAt=1757225631661',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/11.png?updatedAt=1757225631634',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/12.png?updatedAt=1757225631615',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/10.png?updatedAt=1757225631627',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/1.png?updatedAt=1757225631593',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/17.png?updatedAt=1757225631619',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/14.png?updatedAt=1757225631596',
  'https://ik.imagekit.io/5b8rploye/Client%20Face-Less%20Feedback/16.png?updatedAt=1757225631584',
];

  const [currentImages, setCurrentImages] = useState([]);

  // Shuffle and select 6 random images
  const shuffleImages = () => {
    const shuffled = [...allTestimonialImages].sort(() => Math.random() - 0.5);
    setCurrentImages(shuffled.slice(0, 4));
  };

    const handlePurchaseClick = () => {
    const eventId = uuidv4();
    const eventData = {
        currency: 'INR',
        value: 99.00,
        content_name: 'The Complete Guide to Healthy Weight Loss E-book',
    };
    
    // Facebook Pixel Event (Client-side)
    fpixelEvent('Purchase', eventData, { eventID: eventId });

    // Facebook Conversions API Event (Server-side)
    serverEvent('Purchase', {
        eventId,
        customData: {
            currency: 'INR',
            value: 99.00,
        }
    });

    // Redirect to payment link
    window.open(razorpayUrl, '_blank');
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
        fbq('init', '1376781100285727');
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
                <Button onClick={handlePurchaseClick} size="lg" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 px-8 py-4">
                    Yes, I want to get fit in just ₹99/-
                </Button>
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
                    src="https://ik.imagekit.io/5b8rploye/Green%20Illustrated%20Healthy%20Eating%20eBook%20Cover.png?updatedAt=1757233895012"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What&apos;s Inside the E-Book</h2>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What You&apos;ll Get:</h3>
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

            <Button
                onClick={handlePurchaseClick}
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 px-8 py-4 text-lg"
              >
                Yes, I want to get fit
            </Button>

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

