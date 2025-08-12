'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  UserCheck, 
  Target, 
  Calendar, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(null); // Start with no step active

  const steps = [
    {
      step: 1,
      icon: UserCheck,
      title: 'Discovery Call',
      description: 'We start with a comprehensive assessment of your current health, goals, and lifestyle to create your personalized roadmap.',
      details: ['Health & lifestyle assessment', 'Goal setting session', 'Program recommendation', 'Q&A with our experts'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      step: 2,
      icon: Target,
      title: 'Create Plan',
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
      description: 'Monitor your transformation with regular assessments, body composition analysis, and health improvements.',
      details: ['Body composition tracking', 'Health marker improvements', 'Energy level monitoring', 'Habit consistency tracking'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      step: 5,
      icon: CheckCircle,
      title: 'Achieve Goals',
      description: 'Reach your goals and learn to maintain your results with lifelong healthy habits and ongoing support.',
      details: ['Goal achievement', 'Maintenance strategies', 'Lifestyle integration', 'Continued support'],
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600'
    }
  ];

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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

        {/* Desktop Horizontal Stepper */}
        <div className="hidden lg:block mb-16">
          {/* Horizontal Stepper */}
          <div className="flex items-center justify-between mb-12 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center flex-1">
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="flex-1 h-0.5 bg-gray-300 ml-8" />
                  )}
                  
                  {/* Step Circle */}
                  <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-lg cursor-pointer transition-colors ${
                    activeStep === index 
                      ? 'border-primary-500 bg-primary-500 text-white' 
                      : 'border-gray-300 bg-white text-gray-600 hover:border-primary-300'
                  }`}
                  onClick={() => handleStepClick(index)}>
                    {step.step}
                  </div>
                  
                  {/* Step Title */}
                  <div className="text-center mt-4 absolute top-16 left-1/2 transform -translate-x-1/2 w-32">
                    <h4 className="text-sm font-semibold text-gray-700">{step.title}</h4>
                  </div>
                </div>
              ))}
          </div>

          {/* Active Step Content */}
          {activeStep !== null && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                {(() => {
                  const step = steps[activeStep];
                  const IconComponent = step.icon;
                  return (
                    <>
                      {/* Icon */}
                      <div className={`${step.bgColor} p-4 rounded-xl inline-flex mb-6`}>
                        <IconComponent className={`h-8 w-8 ${step.iconColor}`} />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                      
                      {/* Details */}
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-gray-700">
                            <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </>
                  );
                })()}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Vertical Stepper */}
        <div className="lg:hidden mb-16">
          <div className="max-w-2xl mx-auto">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div key={index} className="relative">
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-20 bg-gray-300" />
                  )}
                  
                  <div className="flex items-start space-x-4 mb-12">
                    {/* Step Circle */}
                    <div className={`relative z-10 w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-lg flex-shrink-0 cursor-pointer ${
                      isActive 
                        ? 'border-primary-500 bg-primary-500 text-white' 
                        : 'border-gray-300 bg-white text-gray-600'
                    }`}
                    onClick={() => handleStepClick(index)}>
                      {step.step}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 pt-2">
                      <h4 className={`text-lg font-bold mb-2 cursor-pointer ${
                        isActive ? 'text-primary-600' : 'text-gray-900'
                      }`} onClick={() => handleStepClick(index)}>
                        {step.title}
                      </h4>
                      
                      {/* Show content only when active */}
                      {isActive && (
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mt-4">
                          {/* Icon */}
                          <div className={`${step.bgColor} p-3 rounded-xl inline-flex mb-4`}>
                            <IconComponent className={`h-6 w-6 ${step.iconColor}`} />
                          </div>

                          {/* Description */}
                          <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                          
                          {/* Details */}
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                                <CheckCircle className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="relative bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Your transformation journey starts with a simple conversation. 
                Book your free discovery call today and let's create your personalized success plan.
              </p>
              <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100">
                Book Your Free Discovery Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}