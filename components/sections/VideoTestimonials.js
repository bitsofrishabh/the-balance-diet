'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ChevronLeft, 
  ChevronRight,
  Users,
  Play
} from 'lucide-react';

export function VideoTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videoTestimonials = [
    {
      id: 'ToOadnCWCAw',
      embedUrl: 'https://www.youtube.com/embed/ToOadnCWCAw',
      title: 'Subham from Australia Feedback',
      caption: 'Amazing transformation journey from Australia with sustainable results and lifestyle changes.'
    },
    {
      id: 'HADe4ofvRzM',
      embedUrl: 'https://www.youtube.com/embed/HADe4ofvRzM',
      title: 'Gaurav\'s Weight Loss Success',
      caption: 'Gaurav shares his incredible weight loss journey and how it changed his life completely.'
    },
    {
      id: 'INAB1JiTcII',
      embedUrl: 'https://www.youtube.com/embed/INAB1JiTcII',
      title: 'Sushabhaym Lost 12kg in 50 Days',
      caption: 'Remarkable 12kg weight loss in just 50 days with our personalized nutrition program.'
    },
    {
      id: 'i7ddAvcIUZQ',
      embedUrl: 'https://www.youtube.com/embed/i7ddAvcIUZQ',
      title: 'Client Success Story',
      caption: 'Real client feedback showcasing the effectiveness of our balanced approach to health.'
    },
    {
      id: '8xAncuqjPAU',
      embedUrl: 'https://www.youtube.com/embed/8xAncuqjPAU',
      title: 'Trupti Lost 1.5kg in 7 Days',
      caption: 'Quick and healthy start to weight loss journey with immediate visible results.'
    },
    {
      id: 'tbCamkAMt8o',
      embedUrl: 'https://www.youtube.com/embed/tbCamkAMt8o',
      title: 'Neha From Dehradun - 7kg Loss',
      caption: 'Neha from Dehradun achieved 7kg weight loss in 3 months with our guidance.'
    },
    {
      id: 'AhKWsc2f-fk',
      embedUrl: 'https://www.youtube.com/embed/AhKWsc2f-fk',
      title: 'Uma Lost 8kg in 2 Months',
      caption: 'Uma\'s inspiring 8kg transformation in just 2 months with sustainable habits.'
    },
    {
      id: 'lcW6oskuIx0',
      embedUrl: 'https://www.youtube.com/embed/lcW6oskuIx0',
      title: 'Pooja - 6kg & 10 Inches Lost',
      caption: 'Pooja lost 6kg weight and 10 inches from belly with our targeted approach.'
    }
  ];

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % videoTestimonials.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 4 + videoTestimonials.length) % videoTestimonials.length);
  };

  const nextSingleVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoTestimonials.length);
  };

  const prevSingleVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  const getVisibleVideos = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(videoTestimonials[(currentIndex + i) % videoTestimonials.length]);
    }
    return visible;
  };

  const visibleVideos = getVisibleVideos();
  const currentVideo = videoTestimonials[currentIndex];

  return (
    <section className="py-12 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-primary-400 mr-2" />
            <span className="bg-primary-900/50 text-primary-300 px-4 py-2 rounded-full text-sm font-semibold">
              Video Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transformations That Inspire
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch real transformation stories from our clients. See how The Balance Diet 
            has changed lives and discover what's possible for you.
          </p>
        </div>

        {/* Desktop - 4 Videos Grid */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {visibleVideos.map((video, index) => (
              <div key={`${currentIndex}-${index}`} className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Video Container */}
                <div className="aspect-[9/16] relative">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                
                {/* Caption Area */}
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-white mb-2 line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                    {video.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center justify-center space-x-6">
            <Button
              variant="outline"
              size="sm"
              onClick={prevVideo}
              className="p-3 rounded-full bg-gray-800 border-gray-700 text-white hover:bg-gray-700 hover:border-gray-600 transition-all group"
            >
              <ChevronLeft className="h-5 w-5 group-hover:text-primary-400" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(videoTestimonials.length / 4) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 4)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    Math.floor(currentIndex / 4) === index 
                      ? 'bg-primary-400 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextVideo}
              className="p-3 rounded-full bg-gray-800 border-gray-700 text-white hover:bg-gray-700 hover:border-gray-600 transition-all group"
            >
              <ChevronRight className="h-5 w-5 group-hover:text-primary-400" />
            </Button>
          </div>
        </div>

        {/* Mobile - Single Video */}
        <div className="lg:hidden">
          <div className="max-w-sm mx-auto">
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
              {/* Video Container */}
              <div className="aspect-[9/16] relative">
                <iframe
                  src={currentVideo.embedUrl}
                  title={currentVideo.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              
              {/* Caption Area */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {currentVideo.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {currentVideo.caption}
                </p>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-6">
              <button
                onClick={prevSingleVideo}
                className="bg-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-700 transition-all"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </button>
              
              {/* Mobile Dots */}
              <div className="flex space-x-1 overflow-x-auto max-w-48">
                {videoTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all flex-shrink-0 ${
                      currentIndex === index 
                        ? 'bg-primary-400 scale-125' 
                        : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSingleVideo}
                className="bg-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-700 transition-all"
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}