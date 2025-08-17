'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Play, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  Award,
  Users
} from 'lucide-react';

export function VideoTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);

  // You can replace these with your actual YouTube video IDs
  const videoTestimonials = [
    {
      id: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
      title: 'Sarah\'s 30lb Weight Loss Journey',
      name: 'Sarah Johnson',
      result: '30 lbs lost',
      timeframe: '4 months',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      rating: 5
    },
    {
      id: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
      title: 'Michael\'s Health Transformation',
      name: 'Michael Chen',
      result: '35 lbs lost',
      timeframe: '6 months',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      rating: 5
    },
    {
      id: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
      title: 'Emily\'s Lifestyle Change',
      name: 'Emily Rodriguez',
      result: '22 lbs lost',
      timeframe: '3 months',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      rating: 5
    },
    {
      id: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
      title: 'David\'s Complete Transformation',
      name: 'David Thompson',
      result: '31 lbs lost',
      timeframe: '5 months',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      rating: 5
    }
  ];

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoTestimonials.length);
    setPlayingVideo(null);
  };

  const prevVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videoTestimonials.length) % videoTestimonials.length);
    setPlayingVideo(null);
  };

  const playVideo = (videoId) => {
    setPlayingVideo(videoId);
  };

  const currentVideo = videoTestimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
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

        {/* Main Video Player */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-video relative">
              {playingVideo === currentVideo.id ? (
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1`}
                  title={currentVideo.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full group cursor-pointer" onClick={() => playVideo(currentVideo.id)}>
                  <img
                    src={currentVideo.thumbnail}
                    alt={currentVideo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-2xl">
                      <Play className="h-12 w-12 text-gray-900 ml-1" />
                    </div>
                  </div>

                  {/* Video Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{currentVideo.title}</h3>
                        <p className="text-gray-300">{currentVideo.name}</p>
                        <div className="flex items-center mt-2">
                          <div className="flex space-x-1 mr-4">
                            {[...Array(currentVideo.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-primary-300 font-semibold">{currentVideo.result}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-400">{currentVideo.result}</div>
                        <div className="text-sm text-gray-300">{currentVideo.timeframe}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Video Navigation */}
        <div className="flex items-center justify-center space-x-6 mb-12">
          <Button
            variant="outline"
            size="sm"
            onClick={prevVideo}
            className="p-3 rounded-full bg-gray-800 border-gray-700 text-white hover:bg-gray-700 hover:border-gray-600 transition-all group"
          >
            <ChevronLeft className="h-5 w-5 group-hover:text-primary-400" />
          </Button>

          {/* Video Thumbnails */}
          <div className="flex space-x-4 overflow-hidden">
            {videoTestimonials.map((video, index) => (
              <button
                key={video.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setPlayingVideo(null);
                }}
                className={`relative w-24 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-2 ring-primary-400 scale-110' 
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                {index === currentIndex && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <Play className="w-2 h-2 text-gray-900 ml-0.5" />
                    </div>
                  </div>
                )}
              </button>
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

        {/* Bottom CTA */}
      </div>
    </section>
  );
}