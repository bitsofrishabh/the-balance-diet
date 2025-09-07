'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ChevronLeft, 
  ChevronRight,
  Award
} from 'lucide-react';

export function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Client feedback images from Cloudinary
  const feedbackImages = [
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


  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [feedbackImages.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackImages.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + feedbackImages.length) % feedbackImages.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    e.preventDefault(); // Prevent scrolling while swiping
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextTestimonial();
    }
    if (isRightSwipe) {
      prevTestimonial();
    }
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(feedbackImages[(currentIndex + i) % feedbackImages.length]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-12 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Award className="h-8 w-8 text-primary-600 mr-2" />
            <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See real feedback from people who have transformed their lives 
            with The Balance Diet's personalized approach to health and wellness.
          </p>
        </div>

        {/* Desktop - 3 Cards Layout */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="grid grid-cols-3 gap-8 mb-8">
              {visibleTestimonials.map((image, index) => (
                <div 
                  key={`${currentIndex}-${index}`}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <img
                    src={image}
                    alt={`Client feedback ${currentIndex + index + 1}`}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="p-3 rounded-full hover:bg-primary-50 hover:border-primary-200 transition-all group"
              >
                <ChevronLeft className="h-5 w-5 group-hover:text-primary-600" />
              </Button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(feedbackImages.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index * 3)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      Math.floor(currentIndex / 3) === index 
                        ? 'bg-primary-500 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="p-3 rounded-full hover:bg-primary-50 hover:border-primary-200 transition-all group"
              >
                <ChevronRight className="h-5 w-5 group-hover:text-primary-600" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile - Single Card with Swipe */}
        <div className="md:hidden">
          <div className="relative">
            <div 
              className="bg-white rounded-2xl shadow-lg overflow-hidden touch-pan-y"
              style={{ touchAction: 'pan-y pinch-zoom' }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={feedbackImages[currentIndex]}
                alt={`Client feedback ${currentIndex + 1}`}
                className="w-full h-auto object-contain select-none"
                loading="lazy"
                draggable="false"
              />
            </div>

            {/* Mobile Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              
              {/* Mobile Dots */}
              <div className="flex space-x-1 overflow-x-auto max-w-48">
                {feedbackImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all flex-shrink-0 ${
                      currentIndex === index 
                        ? 'bg-primary-500 scale-125' 
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            {/* Swipe Indicator */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500">
                Swipe left or right to see more feedback
              </p>
            </div>
          </div>
        </div>

     
      </div>
    </section>
  );
}