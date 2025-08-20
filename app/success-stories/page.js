'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Award,
  Star,
  TrendingDown,
  Calendar,
  Target,
  Users,
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function SuccessStoriesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const successStories = [
    {
      id: 'priya-lost-25kg',
      name: 'Saeed Khan',
      weightLoss: '25 kg',
      timeframe: '7 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755342356/Before-After/1_d4fprb.png',
      shortDescription: 'Saeed dropped 25 kg in 7 months by swapping desk snacks for smart plates, adding quick home workouts, and sticking to a simple routine that fit long coding hours.',
      age: 28,
      occupation: 'Software Engineer',
      location: 'Lucknow',
      beforeWeight: 85,
      afterWeight: 60,
      program: 'Complete Transform Program'
    },
    {
      id: 'rahul-lost-30kg',
      name: 'Jyoti',
      weightLoss: '16 kg',
      timeframe: '4 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755623211/Before-After/2_qc3myg.png',
      shortDescription: 'Jyoti lost 16 kg in just 4 months by portion-balancing family meals, daily walks, and gentle strength work—no separate “diet food” required.',
      age: 42,
      occupation: 'Housewife',
      location: 'Maharashtra',
      beforeWeight: 95,
      afterWeight: 65,
      program: 'Premium Transform Program'
    },
    {
      id: 'sneha-lost-18kg',
      name: 'Shubham Kumar',
      weightLoss: '12 kg',
      timeframe: '3 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755342359/Before-After/10_kr7dzl.png',
      shortDescription: 'Shubham shed 12 kg in 3 months while juggling campaigns and late nights—leaning on meal timing, higher protein, and travel-friendly options.',
      age: 25,
      occupation: 'Digital Marketer',
      location: 'Kashipur',
      beforeWeight: 78,
      afterWeight: 60,
      program: 'Women Care Program'
    },
    {
      id: 'amit-lost-22kg',
      name: 'Rushikesh Jare',
      weightLoss: '8.5 kg',
      timeframe: '3 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755342359/Before-After/5_zc4maw.png',
      shortDescription: 'Bengaluru-based software developer, 26, who brought sugars under control and lost 8.5 kg in 3 months using office-friendly meals, step goals, and simple strength training.',
      age: 26,
      occupation: 'Software Developer',
      location: 'Bangalore',
      beforeWeight: 88,
      afterWeight: 66,
      program: 'Disease Management Program'
    },
    {
      id: 'kavya-lost-20kg',
      name: 'Vaishali Upadhyay',
      weightLoss: '7 kg',
      timeframe: '3 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755342358/Before-After/4_alxia4.png',
      shortDescription: 'At 25, an NGO worker from Delhi, Vaishali dropped 7 kg in 3 months with tiffin-ready menus, field-visit hacks, and weekend batch-cooking to keep weekdays effortless.',
      age: 25,
      occupation: 'NGO worker',
      location: 'Delhi',
      beforeWeight: 75,
      afterWeight: 55,
      program: 'Essential Transform Program'
    },
    {
      id: 'vikram-lost-28kg',
      name: 'Priya Bansal',
      weightLoss: '7 kg',
      timeframe: '3 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755342357/Before-After/3_ug1tse.png',
      shortDescription: 'Priya, software developer from Gurgaon who navigated thyroid issues and still lost 7 kg in 3 months through protein-forward plates, sleep fixes, and steady steps.',
      age: 27,
      occupation: 'Software Developer',
      location: 'Gurgaon',
      beforeWeight: 98,
      afterWeight: 70,
      program: 'Disease Management Program'
    },
    {
      id: 'meera-lost-15kg',
      name: 'Neha Goyal',
      weightLoss: '7 kg',
      timeframe: '3 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755342359/Before-After/7_gbfnq9.png',
      shortDescription: 'A 35-year-old banker in Dehradun who balanced long branch hours with structured meals and short workouts—dropping 7 kg in 3 months without extremes.',
      age: 35,
      occupation: 'Banker',
      location: 'Dehradun',
      beforeWeight: 70,
      afterWeight: 55,
      program: 'Complete Transform Program'
    },
    {
      id: 'arjun-lost-35kg',
      name: 'Vishves Ravi',
      weightLoss: '8 kg',
      timeframe: '2 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755623211/Before-After/6_gowz5z.png',
      shortDescription: 'A 29-year-old civil engineer from Surat who lost 8 kg in 2 months while working on sites—using canteen swaps, hydration, and portable high-protein snacks.',
      age: 29,
      occupation: 'Civil Engineer',
      location: 'Surat',
      beforeWeight: 105,
      afterWeight: 70,
      program: 'Premium Transform Program'
    },
    {
      id: 'ritu-lost-24kg',
      name: 'Savita Chaudhary',
      weightLoss: '12 kg',
      timeframe: '3 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755342360/Before-After/9_j68upl.png',
      shortDescription: 'A 26-year-old dietitian in Delhi who led by example—losing 12 kg in 3 months with consistent logging, mindful portions, and a realistic training split.',
      age: 26,
      occupation: 'Dietian',
      location: 'Delhi',
      beforeWeight: 82,
      afterWeight: 58,
      program: 'Women Care Program'
    },
    {
      id: 'ritu-lost-24kg',
      name: 'Nisha Pandey',
      weightLoss: '8 kg',
      timeframe: '3 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755623211/Before-After/8_oh5mn1.png',
      shortDescription: 'A 36-year-old dentist from Lucknow who trimmed 8 kg in 3 months by taming chair-side snacking, planning clinic-friendly lunches, and adding short evening walks.',
      age: 36,
      occupation: 'Dentist',
      location: 'Lucknow',
      beforeWeight: 82,
      afterWeight: 58,
      program: 'Women Care Program'
    }
  ];

  // Calculate pagination
  const totalPages = Math.ceil(successStories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStories = successStories.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const whatsappNumber = '+919149081034';
  const whatsappMessage = 'Hi! I would like to claim my free discovery call for The Balance Diet programs.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary-100 text-primary-700">
              <Award className="w-4 h-4 mr-2" />
              Real Transformations
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Success Stories That
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent block"> Inspire Change </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover real transformation stories from our clients who achieved their health goals.
              Their journeys prove that lasting change is possible with the right guidance and support.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { number: '300+', label: 'Transformations', icon: Users },
              { number: '500+', label: 'Kg Lost Collectively', icon: TrendingDown },
              { number: '98%', label: 'Success Rate', icon: Target },
              { number: '4.9/5', label: 'Client Rating', icon: Star }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary-100 p-3 rounded-xl inline-flex mb-3">
                    <IconComponent className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real People, Real Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each story represents a unique journey of transformation, dedication, and success.
              Click on any story to read the complete transformation journey.
            </p>
          </div>

          {/* 3x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentStories.map((story, index) => (
              <div key={story.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={story.image}
                    alt={`${story.name} transformation`}
                    className="w-full h-80 object-contain bg-gradient-to-br from-primary-50 to-secondary-50"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Name and Weight Loss */}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {story.name}
                    </h3>
                    <div className="flex items-center text-primary-600 font-semibold">
                      <TrendingDown className="w-4 h-4 mr-1" />
                      Lost {story.weightLoss} in {story.timeframe}
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {story.shortDescription}
                  </p>

                  {/* Client Details */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{story.age} years • {story.occupation}</span>
                    <span>{story.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-4 mt-12">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg transition-colors ${currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-lg font-medium transition-colors ${currentPage === page
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                    }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg transition-colors ${currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of people who have already transformed their lives. Your journey to better health
            starts with a simple conversation.
          </p>
          <div className="flex justify-center">
            <a
              href="https://calendly.com/the-balance-diet/health-assessment-call-with-rishabh-savita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
            >
              Book Your Free Call Today
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-primary-100">
            <div className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              300+ Success Stories
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-2" />
              4.9/5 Average Rating
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              98% Success Rate
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}