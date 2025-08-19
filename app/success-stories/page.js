import Link from 'next/link';
import { useState } from 'react';
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

export const metadata = {
  title: 'Success Stories - Real Transformations That Inspire',
  description: 'Discover inspiring weight loss and health transformation stories from our clients. See real results and get motivated for your own journey.',
};

export default function SuccessStoriesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const successStories = [
    {
      id: 'priya-lost-25kg',
      name: 'Priya Sharma',
      weightLoss: '25 kg',
      timeframe: '6 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755342356/Before-After/1_d4fprb.png',
      shortDescription: 'From struggling with PCOS to achieving her dream weight, Priya transformed her life completely.',
      age: 28,
      occupation: 'Software Engineer',
      location: 'Mumbai',
      beforeWeight: 85,
      afterWeight: 60,
      program: 'Complete Transform Program'
    },
    {
      id: 'rahul-lost-30kg',
      name: 'Rahul Gupta',
      weightLoss: '30 kg',
      timeframe: '8 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755342360/Before-After/2_oernfq.png',
      shortDescription: 'Busy corporate executive who lost weight without compromising his demanding work schedule.',
      age: 35,
      occupation: 'Marketing Director',
      location: 'Delhi',
      beforeWeight: 95,
      afterWeight: 65,
      program: 'Premium Transform Program'
    },
    {
      id: 'sneha-lost-18kg',
      name: 'Sneha Patel',
      weightLoss: '18 kg',
      timeframe: '4 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755342359/Before-After/10_kr7dzl.png',
      shortDescription: 'New mother who regained her confidence and energy after postpartum weight struggles.',
      age: 31,
      occupation: 'Teacher',
      location: 'Pune',
      beforeWeight: 78,
      afterWeight: 60,
      program: 'Women Care Program'
    },
    {
      id: 'amit-lost-22kg',
      name: 'Amit Singh',
      weightLoss: '22 kg',
      timeframe: '5 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755342359/Before-After/5_zc4maw.png',
      shortDescription: 'Diabetes management along with sustainable weight loss through personalized nutrition.',
      age: 42,
      occupation: 'Bank Manager',
      location: 'Bangalore',
      beforeWeight: 88,
      afterWeight: 66,
      program: 'Disease Management Program'
    },
    {
      id: 'kavya-lost-20kg',
      name: 'Kavya Reddy',
      weightLoss: '20 kg',
      timeframe: '5 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755342358/Before-After/4_alxia4.png',
      shortDescription: 'College student who transformed her lifestyle and achieved her fitness goals sustainably.',
      age: 22,
      occupation: 'Student',
      location: 'Hyderabad',
      beforeWeight: 75,
      afterWeight: 55,
      program: 'Essential Transform Program'
    },
    {
      id: 'vikram-lost-28kg',
      name: 'Vikram Joshi',
      weightLoss: '28 kg',
      timeframe: '7 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755342357/Before-After/3_ug1tse.png',
      shortDescription: 'IT professional who overcame thyroid issues and achieved remarkable transformation.',
      age: 38,
      occupation: 'Software Architect',
      location: 'Chennai',
      beforeWeight: 98,
      afterWeight: 70,
      program: 'Disease Management Program'
    },
    {
      id: 'meera-lost-15kg',
      name: 'Meera Agarwal',
      weightLoss: '15 kg',
      timeframe: '3 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755342359/Before-After/7_gbfnq9.png',
      shortDescription: 'Busy entrepreneur who found balance between work and health with our guidance.',
      age: 33,
      occupation: 'Business Owner',
      location: 'Jaipur',
      beforeWeight: 70,
      afterWeight: 55,
      program: 'Complete Transform Program'
    },
    {
      id: 'arjun-lost-35kg',
      name: 'Arjun Mehta',
      weightLoss: '35 kg',
      timeframe: '10 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755342357/Before-After/6_nicj27.png',
      shortDescription: 'Incredible transformation journey from obesity to fitness enthusiast and marathon runner.',
      age: 29,
      occupation: 'Graphic Designer',
      location: 'Ahmedabad',
      beforeWeight: 105,
      afterWeight: 70,
      program: 'Premium Transform Program'
    },
    {
      id: 'ritu-lost-24kg',
      name: 'Ritu Sharma',
      weightLoss: '24 kg',
      timeframe: '6 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755342360/Before-After/9_j68upl.png',
      shortDescription: 'Working mother who balanced family life while achieving her health and fitness goals.',
      age: 36,
      occupation: 'HR Manager',
      location: 'Kolkata',
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

  const whatsappNumber = '+1234567890';
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
              { number: '500+', label: 'Transformations', icon: Users },
              { number: '2000+', label: 'Kg Lost Collectively', icon: TrendingDown },
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
              className={`p-2 rounded-lg transition-colors ${
                currentPage === 1
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
                  className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                    currentPage === page
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
        </div>
      </section>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg transition-colors ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
      {/* CTA Section */}
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
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4">
              Book Your Call Now
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-primary-100">
            <div className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              500+ Success Stories
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
'use client';
}