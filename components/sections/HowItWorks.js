'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  UserCheck, 
  Target, 
  Calendar, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Sparkles,
  MapPin,
  Flag,
  Play
} from 'lucide-react';

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(null);
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const observerRef = useRef();

  const steps = [
    {
      step: 1,
      icon: UserCheck,
      title: 'Discovery Call',
      shortTitle: 'Start Here',
      description: 'We start with a comprehensive assessment of your current health, goals, and lifestyle to create your personalized roadmap.',
      details: ['Health & lifestyle assessment', 'Goal setting session', 'Program recommendation', 'Q&A with our experts'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      isStart: true
    },
    {
      step: 2,
      icon: Target,
      title: 'Create Plan',
      shortTitle: 'Custom Plan',
      description: 'Our experts design a tailored nutrition and wellness plan specifically for your body, preferences, and schedule.',
      details: ['Personalized meal plans', 'Custom workout routines', 'Supplement recommendations', 'Habit-building strategies'],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      step: 3,
      icon: Calendar,
      title: 'Implementation',
      shortTitle: 'Take Action',
      description: 'Start your transformation with daily support, weekly check-ins, and adjustments to keep you on track.',
      details: ['Daily coaching support', 'Weekly progress reviews', 'Plan adjustments', 'Motivation & accountability'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      step: 4,
      icon: TrendingUp,
      title: 'Track Progress',
      shortTitle: 'Monitor Results',
      description: 'Monitor your transformation with regular assessments, body composition analysis, and health improvements.',
      details: ['Body composition tracking', 'Health marker improvements', 'Energy level monitoring', 'Habit consistency tracking'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      step: 5,
      icon: CheckCircle,
      title: 'Fitness Goal Achieved',
      shortTitle: 'Success!',
      description: 'Reach your goals and learn to maintain your results with lifelong healthy habits and ongoing support.',
      details: ['Goal achievement', 'Maintenance strategies', 'Lifestyle integration', 'Continued support'],
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600',
      isEnd: true
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleSteps(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const stepElements = document.querySelectorAll('.step-card');
    stepElements.forEach(step => observerRef.current.observe(step));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleStepClick = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  const handleStepHover = (index) => {
    setActiveStep(index);
  };

  const handleStepLeave = () => {
    setActiveStep(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Your Journey to Success</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our proven roadmap to transformation. Each step is designed to build upon the last, 
            creating sustainable change that lasts a lifetime.
          </p>
        </div>

        {/* Road Design - Desktop Horizontal */}
        <div className="hidden lg:block relative mb-16">
          {/* Road Background */}
          <div className="relative">
            {/* Main Road */}
            <div className="absolute top-1/2 left-0 right-0 h-16 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-full transform -translate-y-1/2 shadow-inner">
              {/* Road Lines */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-white transform -translate-y-1/2 opacity-60">
                <div className="flex justify-between items-center h-full px-8">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="w-8 h-1 bg-white rounded-full opacity-80" />
                  ))}
                </div>
              </div>
            </div>

            {/* Steps on Road */}
            <div className="relative flex justify-between items-center px-8 py-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isVisible = visibleSteps.has(index);
                const isActive = activeStep === index;
                
                return (
                  <div 
                    key={index}
                    data-index={index}
                    className={`step-card relative transition-all duration-700 cursor-pointer ${
                      isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                    onClick={() => handleStepClick(index)}
                    onMouseEnter={() => handleStepHover(index)}
                    onMouseLeave={handleStepLeave}
                  >
                    {/* Step Marker */}
                    <div className={`relative ${step.isStart || step.isEnd ? 'mb-8' : 'mb-4'}`}>
                      {/* Special markers for start and end */}
                      {step.isStart && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                            <Play className="w-3 h-3 mr-1" />
                            START
                          </div>
                        </div>
                      )}
                      
                      {step.isEnd && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                          <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                            <Flag className="w-3 h-3 mr-1" />
                            FINISH
                          </div>
                        </div>
                      )}

                      {/* Main Step Circle */}
                      <div className={`relative bg-white rounded-full p-4 shadow-lg border-4 transition-all duration-300 ${
                        isActive ? 'border-primary-400 scale-110 shadow-2xl' : 'border-gray-200 hover:border-gray-300'
                      } ${step.isStart || step.isEnd ? 'w-20 h-20' : 'w-16 h-16'}`}>
                        <div className={`${step.bgColor} p-2 rounded-full transition-all duration-300 ${
                          isActive ? 'scale-110' : ''
                        }`}>
                          <IconComponent className={`${step.isStart || step.isEnd ? 'h-6 w-6' : 'h-5 w-5'} ${step.iconColor}`} />
                        </div>
                        
                        {/* Step Number */}
                        <div className={`absolute -bottom-2 -right-2 bg-gradient-to-r ${step.color} text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold`}>
                          {step.step}
                        </div>
                      </div>
                    </div>

                    {/* Step Title */}
                    <div className="text-center mb-4">
                      <h3 className={`font-semibold transition-colors duration-300 ${
                        isActive ? 'text-primary-600 text-lg' : 'text-gray-900'
                      }`}>
                        {step.shortTitle}
                      </h3>
                    </div>

                    {/* Expandable Details */}
                    <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 transition-all duration-500 z-10 ${
                      isActive ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4 pointer-events-none'
                    }`}>
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />
                      
                      <h4 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h4>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{step.description}</p>
                      
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-xs text-gray-500">
                            <CheckCircle className="w-3 h-3 text-primary-400 mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Road Design - Mobile Vertical */}
        <div className="lg:hidden relative mb-16">
          <div className="relative max-w-sm mx-auto">
            {/* Vertical Road */}
            <div className="absolute left-1/2 top-0 bottom-0 w-16 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 rounded-full transform -translate-x-1/2 shadow-inner">
              {/* Road Lines */}
              <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white transform -translate-x-1/2 opacity-60">
                <div className="flex flex-col justify-between items-center h-full py-8">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="w-1 h-8 bg-white rounded-full opacity-80" />
                  ))}
                </div>
              </div>
            </div>

            {/* Steps on Vertical Road */}
            <div className="relative flex flex-col space-y-16 py-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isVisible = visibleSteps.has(index);
                const isActive = activeStep === index;
                const isLeft = index % 2 === 0;
                
                return (
                  <div 
                    key={index}
                    data-index={index}
                    className={`step-card relative transition-all duration-700 cursor-pointer ${
                      isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
                    } ${isLeft ? 'self-start' : 'self-end'}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                    onClick={() => handleStepClick(index)}
                  >
                    <div className={`flex items-center space-x-4 ${isLeft ? '' : 'flex-row-reverse space-x-reverse'}`}>
                      {/* Step Content */}
                      <div className={`${isLeft ? 'text-left' : 'text-right'} ${isActive ? 'w-64' : 'w-32'} transition-all duration-300`}>
                        {/* Special markers for start and end */}
                        {step.isStart && (
                          <div className={`mb-2 ${isLeft ? '' : 'flex justify-end'}`}>
                            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold inline-flex items-center">
                              <Play className="w-2 h-2 mr-1" />
                              START
                            </div>
                          </div>
                        )}
                        
                        {step.isEnd && (
                          <div className={`mb-2 ${isLeft ? '' : 'flex justify-end'}`}>
                            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold inline-flex items-center">
                              <Flag className="w-2 h-2 mr-1" />
                              FINISH
                            </div>
                          </div>
                        )}

                        <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                          isActive ? 'text-primary-600 text-lg' : 'text-gray-900'
                        }`}>
                          {step.shortTitle}
                        </h3>

                        {/* Expandable Details */}
                        {isActive && (
                          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 animate-fade-in">
                            <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                            <p className="text-gray-600 text-sm mb-3 leading-relaxed">{step.description}</p>
                            
                            <ul className="space-y-1">
                              {step.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-center text-xs text-gray-500">
                                  <CheckCircle className="w-3 h-3 text-primary-400 mr-2 flex-shrink-0" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Step Circle */}
                      <div className={`relative bg-white rounded-full p-3 shadow-lg border-4 transition-all duration-300 ${
                        isActive ? 'border-primary-400 scale-110 shadow-2xl' : 'border-gray-200'
                      } ${step.isStart || step.isEnd ? 'w-16 h-16' : 'w-12 h-12'} flex-shrink-0`}>
                        <div className={`${step.bgColor} p-1 rounded-full transition-all duration-300 ${
                          isActive ? 'scale-110' : ''
                        }`}>
                          <IconComponent className={`${step.isStart || step.isEnd ? 'h-4 w-4' : 'h-3 w-3'} ${step.iconColor}`} />
                        </div>
                        
                        {/* Step Number */}
                        <div className={`absolute -bottom-1 -right-1 bg-gradient-to-r ${step.color} text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold`}>
                          {step.step}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="relative bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white overflow-hidden group hover:from-primary-600 hover:to-primary-700 transition-all duration-500">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">
                Ready to Start Your Journey?
              </h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Your transformation journey starts with a simple conversation. 
                Book your free discovery call today and let's create your personalized success plan.
              </p>
              <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Book Your Free Discovery Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}