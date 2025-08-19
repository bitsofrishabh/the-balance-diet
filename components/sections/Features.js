'use client';

import { useState } from 'react';
import { 
  Target, 
  BookOpen, 
  Users, 
  Smartphone,
  Clock,
  Award,
  Heart,
  TrendingUp
} from 'lucide-react';

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: Target,
      title: 'Personalized Plans',
      description: 'Custom nutrition and fitness plans tailored to your unique goals, lifestyle, and preferences.',
      color: 'bg-primary-100 text-primary-600',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      icon: Users,
      title: 'Expert Coaching',
      description: 'Work with certified nutritionists and health coaches who guide you every step of the way.',
      color: 'bg-secondary-100 text-secondary-600',
      gradient: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: BookOpen,
      title: 'Educational Resources',
      description: 'Access comprehensive guides, recipes, and tools to build lasting healthy habits.',
      color: 'bg-accent-100 text-accent-600',
      gradient: 'from-accent-500 to-accent-600'
    },
    {
      icon: Smartphone,
      title: 'Easy Tracking',
      description: 'Monitor your progress with our intuitive tracking tools and regular check-ins.',
      color: 'bg-purple-100 text-purple-600',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Programs that fit your busy lifestyle with flexible meal planning and workout options.',
      color: 'bg-pink-100 text-pink-600',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Join thousands who have achieved lasting transformation with our evidence-based approach.',
      color: 'bg-emerald-100 text-emerald-600',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Heart,
      title: 'Holistic Wellness',
      description: 'Focus on overall health including mental well-being, energy levels, and quality of life.',
      color: 'bg-red-100 text-red-600',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Growth',
      description: 'Build habits that last a lifetime, not just quick fixes that fade away.',
      color: 'bg-indigo-100 text-indigo-600',
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose The Balance Diet?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge science with personalized care to deliver results that last. 
            Here's what makes our approach different.
          </p>
        </div>

        {/* Interactive Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 cursor-pointer group ${
                  isHovered ? 'scale-105 shadow-2xl' : 'hover:shadow-xl hover:-translate-y-2'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 rounded-2xl transition-opacity duration-300 ${
                  isHovered ? 'opacity-10' : ''
                }`} />
                
                {/* Floating Icon */}
                <div className={`relative inline-flex p-3 rounded-xl mb-4 transition-all duration-300 ${
                  isHovered ? 'scale-110 rotate-3' : ''
                } ${feature.color}`}>
                  <IconComponent className={`h-6 w-6 transition-all duration-300 ${
                    isHovered ? 'scale-110' : ''
                  }`} />
                  
                  {/* Pulse Effect */}
                  {isHovered && (
                    <div className={`absolute inset-0 rounded-xl ${feature.color} animate-ping opacity-30`} />
                  )}
                </div>

                {/* Content */}
                <h3 className={`text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 ${
                  isHovered ? 'text-gray-800' : ''
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-gray-600 leading-relaxed transition-colors duration-300 ${
                  isHovered ? 'text-gray-700' : ''
                }`}>
                  {feature.description}
                </p>

                {/* Hover Indicator */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-2xl transition-all duration-300 ${
                  isHovered ? 'w-full' : 'w-0'
                }`} />

              </div>
            );
          })}
        </div>

        {/* Interactive Bottom CTA */}
        
      </div>
    </section>
  );
}