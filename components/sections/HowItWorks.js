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
  Sparkles,
} from 'lucide-react';

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

const steps = [
  {
    step: 1,
    icon: Phone,
    title: 'Free Consultation & Goal Setting',
    description:
      'A quick conversation to understand your lifestyle, health history, and set clear, realistic targets.',
    details: [
      'Health history, meds & recent labs (if any)',
      'Work schedule, routines & constraints',
      'Food preferences (veg/non-veg), likes & dislikes',
      'Measurements and current activity',
      '4-week targets and realistic timeline',
      'Onboarding checklist so you know what’s next',
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-200',
  },
  {
    step: 2,
    icon: FileText,
    title: 'Your Custom Diet + Workout Plan',
    description:
      'Simple, Indian-food-first plan tailored to your routine, goals, and medical needs.',
    details: [
      'Personalized meals with roti/rice/dal/sabzi',
      'Calories & macros with easy portion guides',
      'Recipes, prep shortcuts & shopping list',
      'Special accommodations (PCOS, cholesterol, IBS, post-partum)',
      'Home/gym workout split with substitutions',
      'Clear weekly milestones and do’s/don’ts',
    ],
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    borderColor: 'border-green-200',
  },
  {
    step: 3,
    icon: MessageSquare,
    title: 'Kickoff: Plan Walkthrough & Setup',
    description:
      'We explain everything step-by-step and set up your tools so execution is easy.',
    details: [
      'Diet plan walkthrough & timing made simple',
      'Workout overview, form cues & modifications',
      'Your questions answered—no confusion left',
      'Tracker/app/WhatsApp flow set up',
      'First-week game plan so you start strong',
      'How to reach us for quick help anytime',
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-200',
  },
  {
    step: 4,
    icon: BarChart3,
    title: 'Daily Tracking & Real-Time Support',
    description:
      'You log meals & habits; we guide, nudge, and problem-solve in real time.',
    details: [
      'Daily meal photos/logs with quick feedback',
      'Habit streaks: water, steps, sleep, mindfulness',
      'Weight & measurements on a set schedule',
      'Energy/mood check-ins to spot patterns',
      'Restaurant/travel swaps when you’re outside',
      'Mid-week tweaks if progress stalls',
    ],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-200',
  },
  {
    step: 5,
    icon: Calendar,
    title: 'Weekly Review, Adjust & Maintain',
    description:
      'Short review call/voice note to tune your plan, celebrate wins, and build long-term consistency.',
    details: [
      'Weekly progress report & insights',
      'Adjust calories, portions or workouts',
      'Troubleshoot cravings, plateaus & schedules',
      'Celebrate milestones & non-scale victories',
      'Monthly photo/measure comparisons',
      'Maintenance roadmap as you hit your goal',
    ],
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    borderColor: 'border-indigo-200',
  },
];


  const currentStep = steps[activeStep];
  const ActiveIcon = currentStep.icon;

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Our Proven Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 6-step process has helped thousands achieve lasting
            health transformation. Here's exactly how we'll help you succeed.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Step Cards */}
          <div className="flex flex-col h-full space-y-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeStep === index;

              return (
                <div key={index} className="relative">
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

                    <div className="flex items-center space-x-4 w-full">
                      {/* Icon */}
                      <div
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          isActive ? step.bgColor : 'bg-gray-100'
                        }`}
                      >
                        <IconComponent
                          className={`h-6 w-6 transition-all duration-300 ${
                            isActive ? step.iconColor : 'text-gray-600'
                          }`}
                        />
                      </div>

                      {/* Title */}
                      <div className="flex-1">
                        <h3
                          className={`text-lg font-semibold transition-colors duration-300 ${
                            isActive ? 'text-gray-900' : 'text-gray-700'
                          }`}
                        >
                          {step.title}
                        </h3>
                      </div>

                      {/* Step Number */}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          isActive
                            ? `bg-gradient-to-r ${step.color} text-white shadow-lg`
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {step.step}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Content Panel - Shows below active card */}
                  <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${
                      isActive ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div
                      className={`${currentStep.bgColor} rounded-2xl p-6 border-2 ${currentStep.borderColor}`}
                    >
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {currentStep.description}
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          What&apos;s Included:
                        </h4>
                        {currentStep.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start">
                            <CheckCircle
                              className={`h-5 w-5 ${currentStep.iconColor} mt-0.5 mr-3 flex-shrink-0`}
                            />
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
            <div className="sticky top-8 h-full">
              <div
                className={`${currentStep.bgColor} rounded-3xl p-8 shadow-xl border-2 ${currentStep.borderColor}`}
              >
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-4 rounded-2xl ${currentStep.bgColor}`}>
                    <ActiveIcon className={`h-8 w-8 ${currentStep.iconColor}`} />
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
                <div className="space-y-3 flex-1">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    What&apos;s Included:
                  </h4>
                  {currentStep.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start">
                      <CheckCircle
                        className={`h-5 w-5 ${currentStep.iconColor} mt-0.5 mr-3 flex-shrink-0`}
                      />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Visual Element */}
                <div className="mt-auto pt-8 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${currentStep.color} text-white text-2xl font-bold shadow-lg`}
                  >
                    {currentStep.step}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    
      </div>
    </section>
  );
}
