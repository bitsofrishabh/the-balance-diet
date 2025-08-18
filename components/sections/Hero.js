'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Users,
  Trophy,
  Heart,
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Client testimonial images from Cloudinary
  const heroImages = [
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342356/Before-After/1_d4fprb.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342360/Before-After/2_oernfq.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342359/Before-After/10_kr7dzl.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342359/Before-After/5_zc4maw.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342358/Before-After/4_alxia4.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342357/Before-After/3_ug1tse.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342359/Before-After/7_gbfnq9.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342357/Before-After/6_nicj27.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342360/Before-After/9_j68upl.png',
    'https://res.cloudinary.com/djdej77pl/image/upload/v1755342358/Before-After/8_tzzijq.png'
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate images every 4 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const whatsappNumber = '+1234567890';
  const whatsappMessage = 'Hi! I would like to know more about The Balance Diet programs.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary-200 rounded-full blur-xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-secondary-200 rounded-full blur-xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-6 lg:space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Badge */}
            <Badge className="bg-primary-100 text-primary-700 hover:bg-primary-200 px-4 py-2 mt-4">
              <Trophy className="w-4 h-4 mr-2" />
              #1 Personalized Nutrition Program
            </Badge>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Diets Don't Work
                <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent block">
                  Balance Does
                </span>
                
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Experience a total health transformation with expert coaching, science-backed nutrition, and real accountability—personalized for you. Take the first step to a happier, healthier you—start your transformation now!
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Personalized nutrition plans',
                'Expert health coaching',
                'Sustainable weight management',
                'Science-based approach'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all group h-12 sm:h-14 px-6 md:px-8 text-sm sm:text-base md:text-lg w-full sm:w-auto"
                onClick={() => {
                  const healthAssessmentSection = document.getElementById('health-assessment');
                  if (healthAssessmentSection) {
                    healthAssessmentSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Start Your Transformation Journey Now!
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
             
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-4 sm:space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full border-2 border-white flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">300+ transformations</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image Carousel */}
          <div className={`relative ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main Image Container with Carousel */}
              <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-1 shadow-2xl overflow-hidden max-w-sm sm:max-w-md md:max-w-lg mx-auto">
                <div className="relative h-[500px] rounded-2xl overflow-hidden border-4 border-white">
                  {/* Image Carousel */}
                  <div className="relative w-full h-full">
                    {heroImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Client testimonial ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${
                          index === currentImageIndex 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-105'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all group"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-primary-600" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all group"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-primary-600" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex 
                            ? 'bg-white scale-125' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}