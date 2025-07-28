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

  // Cloudinary images for the carousel
  const heroImages = [
    'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg',
    'https://res.cloudinary.com/demo/image/upload/v1312461204/sample2.jpg',
    'https://res.cloudinary.com/demo/image/upload/v1312461204/sample3.jpg'
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
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Badge */}
            <Badge className="bg-primary-100 text-primary-700 hover:bg-primary-200 px-4 py-2">
              <Trophy className="w-4 h-4 mr-2" />
              #1 Personalized Nutrition Program
            </Badge>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Diets Don’t Work
                <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent block">
                  Balance Does
                </span>
                
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
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
              <Link href="/programs">
                <Button size="lg" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-xl transition-all group h-14 px-8 text-lg">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
             
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 pt-4">
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
              <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 shadow-2xl overflow-hidden">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  {/* Image Carousel */}
                  <div className="relative w-full h-full">
                    {heroImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Health transformation ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                          index === currentImageIndex 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-105'
                        }`}
                      />
                    ))}
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
                
                {/* Floating Stats Cards */}
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-lg animate-bounce-subtle">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-100 p-2 rounded-lg">
                      <Heart className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Health Score</div>
                      <div className="text-2xl font-bold text-primary-600">95%</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary-100 p-2 rounded-lg">
                      <Trophy className="w-6 h-6 text-secondary-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Weight Lost</div>
                      <div className="text-2xl font-bold text-secondary-600">25 lbs</div>
                    </div>
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