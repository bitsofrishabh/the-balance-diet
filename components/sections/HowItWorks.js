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
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const [activeStep, setActiveStep] = useState(0);
  const observerRef = useRef();

  const steps = [
    {
      step: 1,
      icon: UserCheck,
      title: 'Free Discovery Call',
      description: 'We start with a comprehensive assessment of your current health, goals, and lifestyle to create your personalized roadmap.',
      details: ['Health & lifestyle assessment', 'Goal setting session', 'Program recommendation', 'Q&A with our experts'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      step: 2,
      icon: Target,
      title: 'Custom Plan Creation',
      description: 'Our experts design a tailored nutrition and wellness plan specifically for your body, preferences, and schedule.',
      details: ['Personalized meal plans', 'Custom workout routines', 'Supplement recommendations', 'Habit-building strategies'],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      step: 3,
      icon: Calendar,
      title: 'Guided Implementation',
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
      title: 'Achieve & Maintain',
      description: 'Reach your goals and learn to maintain your results with lifelong healthy habits and ongoing support.',
      details: ['Goal achievement', 'Maintenance strategies', 'Lifestyle integration', 'Continued support'],
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600'
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

  // Auto-advance active step
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Our Proven Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 5-step process has helped thousands achieve lasting health transformation. 
            Here's exactly how we'll help you succeed.
          </p>
        </div>

        {/* Interactive Steps */}
        <div className="relative">
          {/* Animated Connection Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0">
            <div className="flex justify-between items-center max-w-5xl mx-auto px-12">
              {steps.slice(0, -1).map((_, index) => (
                <div key={index} className="flex-1 relative">
                  <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${steps[index].color} transition-all duration-1000 ease-out ${
                        activeStep > index ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Horizontal Scroll Container */}
          <div className="md:hidden">
            <div className="flex space-x-6 overflow-x-auto pb-4 px-4 -mx-4 scrollbar-hide">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isVisible = visibleSteps.has(index);
                const isActive = activeStep === index;
                
                return (
                  <div 
                    key={index}
                    data-index={index}
                    className={`step-card flex-shrink-0 w-80 transition-all duration-700 ${
                      isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 relative overflow-hidden group h-full ${
                      isActive ? 'border-primary-200 scale-105' : 'border-gray-100 hover:border-gray-200'
                    }`}>
                      {/* Animated Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 transition-opacity duration-500 ${
                        isActive ? 'opacity-5' : 'group-hover:opacity-5'
                      }`} />
                      
                      {/* Floating Particles */}
                      {isActive && (
                        <>
                          <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full animate-ping" />
                          <div className="absolute top-8 right-8 w-1 h-1 bg-secondary-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                        </>
                      )}

                      {/* Step Number with Pulse */}
                      <div className={`relative bg-gradient-to-r ${step.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto transition-all duration-500 ${
                        isActive ? 'scale-110 shadow-lg' : 'group-hover:scale-105'
                      }`}>
                        {step.step}
                        {isActive && (
                          <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full animate-ping opacity-30`} />
                        )}
                      </div>

                      {/* Icon with Bounce */}
                      <div className={`${step.bgColor} p-3 rounded-xl inline-flex mb-4 transition-all duration-300 ${
                        isActive ? 'animate-bounce-subtle' : 'group-hover:scale-110'
                      }`}>
                        <IconComponent className={`h-6 w-6 ${step.iconColor} transition-all duration-300`} />
                      </div>

                      {/* Content */}
                      <h3 className={`text-lg font-semibold text-gray-900 mb-3 transition-colors duration-300 ${
                        isActive ? 'text-gray-800' : ''
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-gray-600 mb-4 leading-relaxed text-sm transition-colors duration-300 ${
                        isActive ? 'text-gray-700' : ''
                      }`}>
                        {step.description}
                      </p>

                      {/* Details with Stagger Animation */}
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li 
                            key={detailIndex} 
                            className={`flex items-center text-xs text-gray-500 transition-all duration-300 ${
                              isActive ? 'translate-x-1' : ''
                            }`}
                            style={{ 
                              transitionDelay: isActive ? `${detailIndex * 100}ms` : '0ms' 
                            }}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0 transition-all duration-300 ${
                              isActive ? 'bg-primary-400 scale-125' : 'bg-gray-400'
                            }`} />
                            {detail}
                          </li>
                        ))}
                      </ul>

                      {/* Progress Bar */}
                      <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${step.color} transition-all duration-1000 ${
                        isActive ? 'w-full' : 'w-0'
                      }`} />
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Mobile Navigation Arrows */}
            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={() => document.querySelector('.overflow-x-auto').scrollBy({ left: -320, behavior: 'smooth' })}
                className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={() => document.querySelector('.overflow-x-auto').scrollBy({ left: 320, behavior: 'smooth' })}
                className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isVisible = visibleSteps.has(index);
              const isActive = activeStep === index;
              
              return (
                <div 
                  key={index}
                  data-index={index}
                  className={`step-card relative transition-all duration-700 ${
                    isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8 mb-4">
                      <ArrowRight className="h-6 w-6 text-primary-400 animate-bounce" />
                    </div>
                  )}

                  <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 relative overflow-hidden group ${
                    isActive ? 'border-primary-200 scale-105' : 'border-gray-100 hover:border-gray-200'
                  }`}>
                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 transition-opacity duration-500 ${
                      isActive ? 'opacity-5' : 'group-hover:opacity-5'
                    }`} />
                    
                    {/* Floating Particles */}
                    {isActive && (
                      <>
                        <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full animate-ping" />
                        <div className="absolute top-8 right-8 w-1 h-1 bg-secondary-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                      </>
                    )}

                    {/* Step Number with Pulse */}
                    <div className={`relative bg-gradient-to-r ${step.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto transition-all duration-500 ${
                      isActive ? 'scale-110 shadow-lg' : 'group-hover:scale-105'
                    }`}>
                      {step.step}
                      {isActive && (
                        <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full animate-ping opacity-30`} />
                      )}
                    </div>

                    {/* Icon with Bounce */}
                    <div className={`${step.bgColor} p-3 rounded-xl inline-flex mb-4 transition-all duration-300 ${
                      isActive ? 'animate-bounce-subtle' : 'group-hover:scale-110'
                    }`}>
                      <IconComponent className={`h-6 w-6 ${step.iconColor} transition-all duration-300`} />
                    </div>

                    {/* Content */}
                    <h3 className={`text-lg font-semibold text-gray-900 mb-3 transition-colors duration-300 ${
                      isActive ? 'text-gray-800' : ''
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-gray-600 mb-4 leading-relaxed text-sm transition-colors duration-300 ${
                      isActive ? 'text-gray-700' : ''
                    }`}>
                      {step.description}
                    </p>

                    {/* Details with Stagger Animation */}
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li 
                          key={detailIndex} 
                          className={`flex items-center text-xs text-gray-500 transition-all duration-300 ${
                            isActive ? 'translate-x-1' : ''
                          }`}
                          style={{ 
                            transitionDelay: isActive ? `${detailIndex * 100}ms` : '0ms' 
                          }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0 transition-all duration-300 ${
                            isActive ? 'bg-primary-400 scale-125' : 'bg-gray-400'
                          }`} />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Progress Bar */}
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${step.color} transition-all duration-1000 ${
                      isActive ? 'w-full' : 'w-0'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>

        {/* Bottom CTA with Animation */}
        <div className="text-center mt-16">
          <div className="relative bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white overflow-hidden group hover:from-primary-600 hover:to-primary-700 transition-all duration-500">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse-soft" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">
                Ready to Take the First Step?
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