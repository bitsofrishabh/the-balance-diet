'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Target, 
  Heart, 
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Phone,
  Shield,
  Scale,
  Activity,
  Baby,
  Briefcase,
  Dumbbell,
  ChevronRight,
  ChevronLeft,
  User,
  TrendingUp,
  Zap,
  Clock,
  Utensils,
  Moon,
  Droplets,
  AlertCircle,
  ThumbsUp,
  Calendar,
  BarChart3
} from 'lucide-react';

export default function ServicesPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const mainServices = [
    {
      icon: Scale,
      title: 'Weight Management',
      subtitle: 'Achieve Your Ideal Weight',
      description: 'Comprehensive programs for healthy weight loss and weight gain with personalized nutrition and lifestyle coaching.',
      services: ['Weight Loss', 'Weight Gain'],
      features: [
        'Customized calorie and macro planning',
        'Weekly body composition analysis',
        'Behavioral modification techniques',
        'Plateau-breaking strategies',
        'Maintenance phase planning'
      ],
      duration: '3-12 months',
      popular: true,
      results: 'Average 1-2 kg per week',
      color: 'bg-primary-100 text-primary-600',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      icon: Heart,
      title: 'Disease Management',
      subtitle: 'Condition-Specific Nutrition Plans',
      description: 'Specialized nutrition support for managing health conditions with evidence-based dietary interventions.',
      services: ['Thyroid', 'PCOS/PCOD', 'Diabetes', 'Blood Pressure', 'Cholesterol'],
      features: [
        'Disease-specific meal planning',
        'Lab report analysis & monitoring',
        'Medication-nutrition interactions',
        'Doctor collaboration & reports',
        'Supplement recommendations'
      ],
      duration: '6-12 months',
      popular: false,
      results: 'Improved health markers',
      color: 'bg-red-100 text-red-600',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: Baby,
      title: 'Women Care',
      subtitle: 'Specialized Women\'s Health Nutrition',
      description: 'Comprehensive nutrition support for women through all life stages with specialized care and guidance.',
      services: ['Pregnancy', 'Postpartum', 'Menopause', 'Lactation'],
      features: [
        'Life-stage specific nutrition planning',
        'Hormonal balance support',
        'Maternal and child health focus',
        'Breastfeeding nutrition guidance',
        'Menopause symptom management'
      ],
      duration: '3-9 months',
      popular: false,
      results: 'Optimal health through life stages',
      color: 'bg-pink-100 text-pink-600',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: Briefcase,
      title: 'Corporate Wellness',
      subtitle: 'Employee Health Programs',
      description: 'Comprehensive workplace wellness programs including nutrition workshops, health screenings, and group coaching.',
      services: ['Group Workshops', 'Health Screenings', 'Wellness Programs', 'Nutrition Consultations'],
      features: [
        'Group nutrition workshops',
        'Health screening camps',
        'Cafeteria menu planning',
        'Stress management sessions',
        'Wellness challenges'
      ],
      duration: '6-12 months',
      popular: false,
      results: 'Improved employee wellness',
      color: 'bg-blue-100 text-blue-600',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      title: 'Program Features',
      subtitle: 'Comprehensive Support System',
      description: 'Our programs include everything you need for successful transformation with comprehensive features and ongoing support.',
      services: ['All Programs Include', 'Premium Support', 'Expert Guidance', 'Proven Methods'],
      features: [
        'Personalized nutrition plans tailored to your needs',
        'Weekly one-on-one coaching sessions with experts',
        'Custom meal plans with shopping lists included',
        '24/7 support through chat and messaging',
        'Progress tracking tools and body composition analysis',
        'Recipe database with 500+ healthy recipes',
        'Supplement recommendations based on your goals',
        'Habit tracking and behavioral coaching support',
        'Group community access for motivation',
        'Lifetime access to educational resources'
      ],
      duration: 'All Programs',
      popular: false,
      results: 'Complete transformation support',
      color: 'bg-indigo-100 text-indigo-600',
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  const quizQuestions = [
    {
      id: 'goal',
      question: 'What is your primary health goal?',
      type: 'single',
      options: [
        { value: 'weight_loss', label: 'Lose Weight', icon: Scale },
        { value: 'weight_gain', label: 'Gain Weight', icon: TrendingUp },
        { value: 'disease_management', label: 'Manage Health Condition', icon: Heart },
        { value: 'women_care', label: 'Women\'s Health Support', icon: Baby },
        { value: 'fitness', label: 'Improve Fitness Performance', icon: Dumbbell },
        { value: 'general_wellness', label: 'General Health & Wellness', icon: Target }
      ]
    },
    {
      id: 'current_weight',
      question: 'What is your current weight?',
      type: 'input',
      inputType: 'number',
      placeholder: 'Enter weight in kg',
      unit: 'kg'
    },
    {
      id: 'height',
      question: 'What is your height?',
      type: 'input',
      inputType: 'number',
      placeholder: 'Enter height in cm',
      unit: 'cm'
    },
    {
      id: 'target_weight',
      question: 'What is your target weight?',
      type: 'input',
      inputType: 'number',
      placeholder: 'Enter target weight in kg',
      unit: 'kg',
      condition: (answers) => ['weight_loss', 'weight_gain'].includes(answers.goal)
    },
    {
      id: 'activity_level',
      question: 'How would you describe your current activity level?',
      type: 'single',
      options: [
        { value: 'sedentary', label: 'Sedentary (little to no exercise)', icon: Moon },
        { value: 'light', label: 'Light (1-3 days/week)', icon: Activity },
        { value: 'moderate', label: 'Moderate (3-5 days/week)', icon: Activity },
        { value: 'active', label: 'Active (6-7 days/week)', icon: Dumbbell },
        { value: 'very_active', label: 'Very Active (2x/day or intense training)', icon: Zap }
      ]
    },
    {
      id: 'eating_habits',
      question: 'How would you rate your current eating habits?',
      type: 'single',
      options: [
        { value: 'poor', label: 'Poor - Mostly processed/fast food', icon: AlertCircle },
        { value: 'fair', label: 'Fair - Mix of healthy and unhealthy', icon: Scale },
        { value: 'good', label: 'Good - Mostly healthy choices', icon: ThumbsUp },
        { value: 'excellent', label: 'Excellent - Very disciplined', icon: Award }
      ]
    },
    {
      id: 'water_intake',
      question: 'How much water do you drink daily?',
      type: 'single',
      options: [
        { value: 'less_1', label: 'Less than 1 liter', icon: Droplets },
        { value: '1_2', label: '1-2 liters', icon: Droplets },
        { value: '2_3', label: '2-3 liters', icon: Droplets },
        { value: 'more_3', label: 'More than 3 liters', icon: Droplets }
      ]
    },
    {
      id: 'sleep_quality',
      question: 'How would you rate your sleep quality?',
      type: 'single',
      options: [
        { value: 'poor', label: 'Poor (less than 5 hours)', icon: AlertCircle },
        { value: 'fair', label: 'Fair (5-6 hours)', icon: Moon },
        { value: 'good', label: 'Good (7-8 hours)', icon: ThumbsUp },
        { value: 'excellent', label: 'Excellent (8+ hours)', icon: Award }
      ]
    },
    {
      id: 'timeline',
      question: 'What is your preferred timeline for seeing results?',
      type: 'single',
      options: [
        { value: '1_month', label: '1 Month', icon: Calendar },
        { value: '3_months', label: '3 Months', icon: Calendar },
        { value: '6_months', label: '6 Months', icon: Calendar },
        { value: '12_months', label: '12+ Months', icon: Calendar }
      ]
    }
  ];

  const calculateBMI = (weight, height) => {
    if (!weight || !height) return null;
    const heightInM = height / 100;
    return (weight / (heightInM * heightInM)).toFixed(1);
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return { category: 'Underweight', color: 'text-blue-600', status: 'needs_attention' };
    if (bmi < 25) return { category: 'Normal', color: 'text-green-600', status: 'healthy' };
    if (bmi < 30) return { category: 'Overweight', color: 'text-yellow-600', status: 'needs_attention' };
    return { category: 'Obese', color: 'text-red-600', status: 'needs_attention' };
  };

  const getHealthScore = () => {
    let score = 0;
    const { activity_level, eating_habits, water_intake, sleep_quality } = answers;
    
    // Activity level scoring
    const activityScores = { sedentary: 1, light: 2, moderate: 3, active: 4, very_active: 5 };
    score += (activityScores[activity_level] || 0) * 2;
    
    // Eating habits scoring
    const eatingScores = { poor: 1, fair: 2, good: 4, excellent: 5 };
    score += (eatingScores[eating_habits] || 0) * 2;
    
    // Water intake scoring
    const waterScores = { less_1: 1, '1_2': 2, '2_3': 4, more_3: 5 };
    score += (waterScores[water_intake] || 0) * 1.5;
    
    // Sleep quality scoring
    const sleepScores = { poor: 1, fair: 2, good: 4, excellent: 5 };
    score += (sleepScores[sleep_quality] || 0) * 1.5;
    
    return Math.round((score / 35) * 100); // Convert to percentage
  };

  const getRecommendation = () => {
    const { goal, current_weight, height, target_weight } = answers;
    const currentBMI = calculateBMI(current_weight, height);
    const targetBMI = target_weight ? calculateBMI(target_weight, height) : null;
    const healthScore = getHealthScore();
    
    let recommendedService = '';
    let recommendedProgram = '';
    let duration = '';
    let weightChange = target_weight ? Math.abs(target_weight - current_weight) : 0;
    
    switch (goal) {
      case 'weight_loss':
      case 'weight_gain':
        recommendedService = 'Weight Management';
        recommendedProgram = 'Personalized Weight Management Program';
        duration = weightChange > 10 ? '6-12 months' : '3-6 months';
        break;
        
      case 'disease_management':
        recommendedService = 'Disease Management';
        recommendedProgram = 'Medical Nutrition Therapy';
        duration = '6-12 months';
        break;
        
      case 'women_care':
        recommendedService = 'Women Care';
        recommendedProgram = 'Women\'s Health Program';
        duration = '6-9 months';
        break;
        
      case 'fitness':
        recommendedService = 'Sports & Fitness Nutrition';
        recommendedProgram = 'Performance Optimization';
        duration = '4-6 months';
        break;
        
      default:
        recommendedService = 'Weight Management';
        recommendedProgram = 'Complete Health Transformation';
        duration = '4-6 months';
    }
    
    return { 
      recommendedService, 
      recommendedProgram, 
      duration, 
      currentBMI, 
      targetBMI, 
      healthScore,
      weightChange 
    };
  };

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const nextQuestion = () => {
    let nextIndex = currentQuestion + 1;
    
    // Skip conditional questions that don't apply
    while (nextIndex < quizQuestions.length) {
      const nextQ = quizQuestions[nextIndex];
      if (nextQ.condition && !nextQ.condition(answers)) {
        nextIndex++;
      } else {
        break;
      }
    }
    
    if (nextIndex < quizQuestions.length) {
      setCurrentQuestion(nextIndex);
    } else {
      setShowResult(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      let prevIndex = currentQuestion - 1;
      
      // Skip conditional questions that don't apply
      while (prevIndex >= 0) {
        const prevQ = quizQuestions[prevIndex];
        if (prevQ.condition && !prevQ.condition(answers)) {
          prevIndex--;
        } else {
          break;
        }
      }
      
      setCurrentQuestion(Math.max(0, prevIndex));
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const whatsappNumber = '+1234567890';
  const whatsappMessage = 'Hi! I would like to claim my free discovery call for The Balance Diet programs.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const currentQ = quizQuestions[currentQuestion];
  const isAnswered = currentQ && (
    currentQ.type === 'input' ? answers[currentQ.id] : answers[currentQ.id]
  );
  const recommendation = showResult ? getRecommendation() : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary-100 text-primary-700">
              <Award className="w-4 h-4 mr-2" />
              Comprehensive Health Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Health with
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent block"> Expert Guidance </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From weight management to specialized medical nutrition therapy, we offer comprehensive services 
              tailored to your unique health needs and lifestyle goals.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: '500+', label: 'Success Stories' },
              { number: '15+', label: 'Specialized Programs' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Specialized Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of evidence-based programs designed to address specific health goals and conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${service.popular ? 'ring-2 ring-primary-200' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary-500 text-white px-4 py-1">
                        <Award className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`p-3 rounded-xl ${service.color}`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-primary-600 font-medium mb-2">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        {service.description}
                      </p>
                      
                      {/* Service Types */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.services.map((serviceType, serviceIndex) => (
                          <span key={serviceIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                            {serviceType}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-semibold text-gray-900">{service.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Expected Results</div>
                      <div className="font-semibold text-gray-900">{service.results}</div>
                    </div>
                  </div>

                  <div className="flex justify-center pt-6 border-t border-gray-100">
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 px-8 py-3`}>
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Claim Your Free Discovery Call Today
                      </Button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Health Assessment Quiz */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary-100 text-secondary-700">
              <BarChart3 className="w-4 h-4 mr-2" />
              Health Assessment
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Discover Your Health Status
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take our comprehensive health assessment to understand your current situation 
              and visualize your transformation goals.
            </p>
          </div>

          <Card className="shadow-2xl border-0 overflow-hidden">
            {!showResult ? (
              <>
                <CardHeader className="bg-gradient-to-r from-secondary-50 to-primary-50 pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      Health Assessment Quiz
                    </CardTitle>
                    <div className="text-sm text-gray-500">
                      {currentQuestion + 1} of {quizQuestions.filter(q => !q.condition || q.condition(answers)).length}
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / quizQuestions.filter(q => !q.condition || q.condition(answers)).length) * 100}%` }}
                    />
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  {currentQ && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">
                        {currentQ.question}
                      </h3>

                      {currentQ.type === 'input' ? (
                        <div className="space-y-4">
                          <div className="relative">
                            <input
                              type={currentQ.inputType}
                              value={answers[currentQ.id] || ''}
                              onChange={(e) => handleAnswer(currentQ.id, e.target.value)}
                              placeholder={currentQ.placeholder}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none text-lg"
                            />
                            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                              {currentQ.unit}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {currentQ.options.map((option, index) => {
                            const IconComponent = option.icon;
                            const isSelected = answers[currentQ.id] === option.value;

                            return (
                              <button
                                key={index}
                                onClick={() => handleAnswer(currentQ.id, option.value)}
                                className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 hover:shadow-md ${
                                  isSelected 
                                    ? 'border-primary-500 bg-primary-50 shadow-md' 
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                <div className="flex items-center space-x-3">
                                  {IconComponent && (
                                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-primary-100' : 'bg-gray-100'}`}>
                                      <IconComponent className={`h-5 w-5 ${isSelected ? 'text-primary-600' : 'text-gray-600'}`} />
                                    </div>
                                  )}
                                  <span className={`font-medium ${isSelected ? 'text-primary-700' : 'text-gray-700'}`}>
                                    {option.label}
                                  </span>
                                  {isSelected && (
                                    <CheckCircle className="h-5 w-5 text-primary-500 ml-auto" />
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      <div className="flex justify-between pt-6">
                        <Button
                          variant="outline"
                          onClick={prevQuestion}
                          disabled={currentQuestion === 0}
                          className="px-6"
                        >
                          <ChevronLeft className="mr-2 h-4 w-4" />
                          Previous
                        </Button>
                        <Button
                          onClick={nextQuestion}
                          disabled={!isAnswered}
                          className="px-6 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600"
                        >
                          {currentQuestion === quizQuestions.filter(q => !q.condition || q.condition(answers)).length - 1 ? 'Get Results' : 'Next'}
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </>
            ) : (
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Your Health Assessment Results
                  </h3>
                  <p className="text-gray-600">
                    Here's your current health status and transformation potential:
                  </p>
                </div>

                {/* Current vs Goal Visualization */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Current Status */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <User className="h-5 w-5 mr-2 text-gray-600" />
                      Current Status
                    </h4>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Weight:</span>
                        <span className="font-semibold text-gray-900">{answers.current_weight} kg</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Height:</span>
                        <span className="font-semibold text-gray-900">{answers.height} cm</span>
                      </div>
                      
                      {recommendation.currentBMI && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">BMI:</span>
                          <div className="text-right">
                            <div className="font-semibold text-gray-900">{recommendation.currentBMI}</div>
                            <div className={`text-sm ${getBMICategory(recommendation.currentBMI).color}`}>
                              {getBMICategory(recommendation.currentBMI).category}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Health Score:</span>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">{recommendation.healthScore}%</div>
                          <div className="w-20 h-2 bg-gray-200 rounded-full">
                            <div 
                              className={`h-2 rounded-full ${
                                recommendation.healthScore >= 70 ? 'bg-green-500' : 
                                recommendation.healthScore >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${recommendation.healthScore}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Goal Status */}
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-primary-600" />
                      Goal Status
                    </h4>
                    
                    <div className="space-y-4">
                      {answers.target_weight && (
                        <>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Target Weight:</span>
                            <span className="font-semibold text-primary-700">{answers.target_weight} kg</span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Weight Change:</span>
                            <span className="font-semibold text-primary-700">
                              {answers.goal === 'weight_loss' ? '-' : '+'}{recommendation.weightChange} kg
                            </span>
                          </div>
                          
                          {recommendation.targetBMI && (
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Target BMI:</span>
                              <div className="text-right">
                                <div className="font-semibold text-primary-700">{recommendation.targetBMI}</div>
                                <div className={`text-sm ${getBMICategory(recommendation.targetBMI).color}`}>
                                  {getBMICategory(recommendation.targetBMI).category}
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Potential Health Score:</span>
                        <div className="text-right">
                          <div className="font-semibold text-primary-700">85-95%</div>
                          <div className="w-20 h-2 bg-gray-200 rounded-full">
                            <div className="h-2 rounded-full bg-green-500 w-full" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Timeline:</span>
                        <span className="font-semibold text-primary-700">{recommendation.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendation */}
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6 mb-6 text-white">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold mb-2">
                      Recommended Program
                    </h4>
                    <p className="text-lg font-semibold text-primary-100">
                      {recommendation.recommendedProgram}
                    </p>
                    <p className="text-primary-200 mt-1">
                      {recommendation.recommendedService}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Claim Your Free Discovery Call Today
                      </Button>
                    </a>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3">
                      <Phone className="mr-2 h-5 w-5" />
                      Book Free Consultation
                    </Button>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={resetQuiz}
                    className="text-primary-600 hover:text-primary-700 underline text-sm"
                  >
                    Take Assessment Again
                  </button>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work With You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures you get the most effective and personalized service experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                step: '01',
                title: 'Free Discovery Call',
                description: 'Claim your free consultation through WhatsApp or our booking system.'
              },
              {
                step: '02',
                title: 'Health Assessment',
                description: 'Comprehensive evaluation of your health status, goals, and lifestyle factors.'
              },
              {
                step: '03',
                title: 'Custom Plan Creation',
                description: 'Personalized nutrition and wellness plan designed specifically for your needs.'
              },
              {
                step: '04',
                title: 'Implementation Support',
                description: 'Guided implementation with regular check-ins and plan adjustments.'
              },
              {
                step: '05',
                title: 'Ongoing Monitoring',
                description: 'Continuous progress tracking and plan optimization for lasting results.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 transform translate-x-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards your health transformation with a free discovery call. 
            No commitments, just expert guidance tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4">
                <MessageCircle className="mr-2 h-5 w-5" />
                Claim Your Free Discovery Call Today
              </Button>
            </a>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Book Free Call
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-sm text-primary-100">
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              100% Confidential
            </div>
            <div className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              Certified Nutritionists
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              500+ Success Stories
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}