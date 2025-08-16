'use client';

import { useState } from 'react';
import { 
  Phone, 
  FileText, 
  MessageSquare, 
  BarChart3,
  Calendar,
  Trophy,
  CheckCircle,
  Sparkles
} from 'lucide-react';

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: 1,
      icon: Phone,
      title: 'Health Consultation Call',
      description: 'Comprehensive health assessment and goal setting session with our expert nutritionists.',
      details: [
        'Complete health history and lifestyle assessment',
        'Discussion of your health goals and challenges',
        'Body composition analysis and measurements',
        'Dietary preferences and restrictions evaluation',
        'Medical conditions and medication review',
        'Personalized goal setting and timeline planning'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      step: 2,
      icon: FileText,
      title: 'Diet Plan Creation',
      description: 'Custom nutrition plan designed specifically for your goals, preferences, and lifestyle.',
      details: [
        'Personalized meal plans with Indian foods',
        'Calorie and macro-nutrient calculations',
        'Recipe suggestions and meal prep guides',
        'Shopping lists and ingredient substitutions',
        'Portion control guidelines and timing',
        'Special dietary accommodations included'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200'
    },
    {
      step: 3,
      icon: MessageSquare,
      title: 'Diet & Workout Explanation Call',
      description: 'Detailed walkthrough of your personalized plan with exercise recommendations.',
      details: [
        'Step-by-step diet plan explanation',
        'Customized workout routine presentation',
        'Exercise demonstrations and modifications',
        'Q&A session for plan clarification',
        'Tips for successful implementation',
        'Resource sharing and app setup guidance'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      step: 4,
      icon: BarChart3,
      title: 'Daily Meal & Habit Tracking',
      description: 'Continuous monitoring of your daily meals, habits, and progress metrics.',
      details: [
        'Daily food intake logging and analysis',
        'Habit tracking and streak monitoring',
        'Weight and measurement recording',
        'Energy levels and mood tracking',
        'Water intake and sleep quality monitoring',
        'Photo progress documentation'
      ],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-200'
    },
    {
      step: 5,
      icon: Calendar,
      title: 'Follow-up Calls Every Week',
      description: 'Regular check-ins with your coach for support, adjustments, and motivation.',
      details: [
        'Weekly progress review and analysis',
        'Plan adjustments based on results',
        'Challenge identification and solutions',
        'Motivation and accountability support',
        'New goal setting and milestone planning',
        'Continuous education and tips sharing'
      ],
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600',
      borderColor: 'border-primary-200'
    },
    {
      step: 6,
      icon: Trophy,
      title: 'Results & Celebrate',
      description: 'Achievement of your health goals and celebration of your transformation success.',
      details: [
        'Goal achievement assessment and documentation',
        'Before and after transformation photos',
        'Success story creation and sharing',
        'Maintenance plan development',
        'Celebration of milestones reached',
        'Continued support for long-term success'
      ],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      borderColor: 'border-pink-200'
    }
  ];

  const currentStep = steps[activeStep];

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
            Our proven 6-step process has helped thousands achieve lasting health transformation. 
            Here's exactly how we'll help you succeed.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Step Cards */}
          <div className="space-y-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div key={index} className="relative">
                  {/* Mobile Content - Shows below card on mobile when active */}
                  <div 
                    onClick={() => setActiveStep(index)}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? `${step.bgColor} ${step.borderColor} shadow-lg` 
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    {/* Connecting Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-8 top-full w-0.5 h-4 bg-gray-200 hidden lg:block" />
                    )}
                    
                    <div className="flex items-center space-x-4">
                      {/* Icon */}
                      <div className={`p-3 rounded-xl transition-all duration-300 ${
                        isActive ? step.bgColor : 'bg-gray-100'
                      }`}>
                        <IconComponent className={`h-6 w-6 transition-all duration-300 ${
                          isActive ? step.iconColor : 'text-gray-600'
                        }`} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                          isActive ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {step.title}
                        </h3>
                      </div>
                      
                      {/* Step Number */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        isActive 
                          ? `bg-gradient-to-r ${step.color} text-white shadow-lg` 
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {step.step}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Content Panel - Shows below active card */}
                  <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
                    isActive ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}>
                    <div className={`${currentStep.bgColor} rounded-2xl p-6 border-2 ${currentStep.borderColor}`}>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {currentStep.description}
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                        {currentStep.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start">
                            <CheckCircle className={`h-5 w-5 ${currentStep.iconColor} mt-0.5 mr-3 flex-shrink-0`} />
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Active Step Details (Desktop Only) */}
          <div className="hidden lg:block">
            <div className="sticky top-8">
              <div className={`${currentStep.bgColor} rounded-3xl p-8 shadow-xl border-2 ${currentStep.borderColor}`}>
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-4 rounded-2xl ${currentStep.bgColor}`}>
                    <currentStep.icon className={`h-8 w-8 ${currentStep.iconColor}`} />
                  </div>
                  <div>
                    <div className={`text-sm font-semibold ${currentStep.iconColor} mb-1`}>
                      Step {currentStep.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {currentStep.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  {currentStep.description}
                </p>

                {/* Details List */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  {currentStep.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start">
                      <CheckCircle className={`h-5 w-5 ${currentStep.iconColor} mt-0.5 mr-3 flex-shrink-0`} />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Visual Element */}
                <div className="mt-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${currentStep.color} text-white text-2xl font-bold shadow-lg`}>
                    {currentStep.step}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="relative bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
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