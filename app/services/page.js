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
  Zap
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
      price: 'From ₹4,999/month',
      popular: true,
      results: 'Average 2-4 lbs per week',
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
      price: 'From ₹6,999/month',
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
      price: 'From ₹5,499/month',
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
      price: 'Custom pricing',
      popular: false,
      results: 'Improved employee wellness',
      color: 'bg-blue-100 text-blue-600',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Dumbbell,
      title: 'Sports & Fitness Nutrition',
      subtitle: 'Performance Optimization',
      description: 'Tailored nutrition strategies for athletes, fitness enthusiasts, and active individuals to optimize performance and recovery.',
      services: ['Athletic Performance', 'Fitness Goals', 'Recovery Nutrition', 'Body Composition'],
      features: [
        'Pre/post workout nutrition',
        'Performance meal timing',
        'Hydration strategies',
        'Supplement protocols',
        'Body composition optimization'
      ],
      duration: '3-6 months',
      price: 'From ₹5,999/month',
      popular: false,
      results: 'Enhanced performance',
      color: 'bg-orange-100 text-orange-600',
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  const quizQuestions = [
    {
      id: 'goal',
      question: 'What is your primary health goal?',
      type: 'single',
      options: [
        { value: 'weight_loss', label: 'Weight Loss', icon: Scale },
        { value: 'weight_gain', label: 'Weight Gain', icon: TrendingUp },
        { value: 'disease_management', label: 'Manage Health Condition', icon: Heart },
        { value: 'women_care', label: 'Women\'s Health Support', icon: Baby },
        { value: 'fitness', label: 'Improve Fitness Performance', icon: Dumbbell },
        { value: 'corporate', label: 'Corporate Wellness', icon: Briefcase }
      ]
    },
    {
      id: 'health_condition',
      question: 'Do you have any of these health conditions?',
      type: 'multiple',
      condition: (answers) => answers.goal === 'disease_management',
      options: [
        { value: 'thyroid', label: 'Thyroid Issues' },
        { value: 'pcos', label: 'PCOS/PCOD' },
        { value: 'diabetes', label: 'Diabetes' },
        { value: 'bp', label: 'High Blood Pressure' },
        { value: 'cholesterol', label: 'High Cholesterol' },
        { value: 'none', label: 'None of the above' }
      ]
    },
    {
      id: 'women_stage',
      question: 'Which stage best describes your current situation?',
      type: 'single',
      condition: (answers) => answers.goal === 'women_care',
      options: [
        { value: 'pregnancy', label: 'Pregnancy' },
        { value: 'postpartum', label: 'Postpartum (After delivery)' },
        { value: 'lactation', label: 'Breastfeeding/Lactation' },
        { value: 'menopause', label: 'Menopause' }
      ]
    },
    {
      id: 'activity_level',
      question: 'How would you describe your current activity level?',
      type: 'single',
      options: [
        { value: 'sedentary', label: 'Sedentary (little to no exercise)' },
        { value: 'light', label: 'Light (1-3 days/week)' },
        { value: 'moderate', label: 'Moderate (3-5 days/week)' },
        { value: 'active', label: 'Active (6-7 days/week)' },
        { value: 'very_active', label: 'Very Active (2x/day or intense training)' }
      ]
    },
    {
      id: 'timeline',
      question: 'What is your preferred timeline for seeing results?',
      type: 'single',
      options: [
        { value: '1_month', label: '1 Month' },
        { value: '3_months', label: '3 Months' },
        { value: '6_months', label: '6 Months' },
        { value: '12_months', label: '12+ Months' }
      ]
    },
    {
      id: 'support_level',
      question: 'How much support do you prefer?',
      type: 'single',
      options: [
        { value: 'minimal', label: 'Minimal - Just give me a plan' },
        { value: 'moderate', label: 'Moderate - Weekly check-ins' },
        { value: 'intensive', label: 'Intensive - Daily support and guidance' }
      ]
    }
  ];

  const getRecommendation = () => {
    const { goal, health_condition, women_stage, activity_level, timeline, support_level } = answers;
    
    // Logic to determine recommended service and program
    let recommendedService = '';
    let recommendedProgram = '';
    let price = '';
    let duration = '';
    
    switch (goal) {
      case 'weight_loss':
      case 'weight_gain':
        recommendedService = 'Weight Management';
        if (support_level === 'intensive') {
          recommendedProgram = 'Premium Transform';
          price = '₹8,999/month';
          duration = '6 months';
        } else if (support_level === 'moderate') {
          recommendedProgram = 'Complete Transform';
          price = '₹6,999/month';
          duration = '4 months';
        } else {
          recommendedProgram = 'Essential Transform';
          price = '₹4,999/month';
          duration = '3 months';
        }
        break;
        
      case 'disease_management':
        recommendedService = 'Disease Management';
        recommendedProgram = 'Medical Nutrition Therapy';
        price = '₹7,999/month';
        duration = '6-12 months';
        break;
        
      case 'women_care':
        recommendedService = 'Women Care';
        recommendedProgram = 'Women\'s Health Program';
        price = '₹6,499/month';
        duration = '6-9 months';
        break;
        
      case 'fitness':
        recommendedService = 'Sports & Fitness Nutrition';
        recommendedProgram = 'Performance Optimization';
        price = '₹7,499/month';
        duration = '4-6 months';
        break;
        
      case 'corporate':
        recommendedService = 'Corporate Wellness';
        recommendedProgram = 'Employee Wellness Program';
        price = 'Custom pricing';
        duration = '12 months';
        break;
        
      default:
        recommendedService = 'Weight Management';
        recommendedProgram = 'Complete Transform';
        price = '₹6,999/month';
        duration = '4 months';
    }
    
    return { recommendedService, recommendedProgram, price, duration };
  };

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const nextQuestion = () => {
    const currentQ = quizQuestions[currentQuestion];
    const nextIndex = currentQuestion + 1;
    
    // Skip conditional questions that don't apply
    if (nextIndex < quizQuestions.length) {
      const nextQ = quizQuestions[nextIndex];
      if (nextQ.condition && !nextQ.condition(answers)) {
        setCurrentQuestion(nextIndex + 1);
      } else {
        setCurrentQuestion(nextIndex);
      }
    } else {
      setShowResult(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const whatsappNumber = '+1234567890';
  const whatsappMessage = 'Hi! I would like to know more about The Balance Diet services.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const currentQ = quizQuestions[currentQuestion];
  const isAnswered = currentQ && answers[currentQ.id];
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

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="text-2xl font-bold text-primary-600">{service.price}</div>
                    <Button className={`bg-gradient-to-r ${service.gradient} hover:opacity-90`}>
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
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
              <User className="w-4 h-4 mr-2" />
              Personalized Assessment
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect Program
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take our quick health assessment to get a personalized program recommendation 
              tailored to your specific needs and goals.
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
                      {currentQuestion + 1} of {quizQuestions.length}
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  {currentQ && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">
                        {currentQ.question}
                      </h3>

                      <div className="space-y-3">
                        {currentQ.options.map((option, index) => {
                          const IconComponent = option.icon;
                          const isSelected = currentQ.type === 'single' 
                            ? answers[currentQ.id] === option.value
                            : answers[currentQ.id]?.includes(option.value);

                          return (
                            <button
                              key={index}
                              onClick={() => {
                                if (currentQ.type === 'single') {
                                  handleAnswer(currentQ.id, option.value);
                                } else {
                                  const current = answers[currentQ.id] || [];
                                  if (option.value === 'none') {
                                    handleAnswer(currentQ.id, ['none']);
                                  } else {
                                    const filtered = current.filter(v => v !== 'none');
                                    if (current.includes(option.value)) {
                                      handleAnswer(currentQ.id, filtered.filter(v => v !== option.value));
                                    } else {
                                      handleAnswer(currentQ.id, [...filtered, option.value]);
                                    }
                                  }
                                }
                              }}
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

                      <div className="flex justify-between pt-6">
                        <Button
                          variant="outline"
                          onClick={prevQuestion}
                          disabled={currentQuestion === 0}
                          className="px-6"
                        >
                          Previous
                        </Button>
                        <Button
                          onClick={nextQuestion}
                          disabled={!isAnswered}
                          className="px-6 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600"
                        >
                          {currentQuestion === quizQuestions.length - 1 ? 'Get Recommendation' : 'Next'}
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
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Your Personalized Recommendation
                  </h3>
                  <p className="text-gray-600">
                    Based on your responses, here's the perfect program for you:
                  </p>
                </div>

                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 mb-6">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {recommendation.recommendedProgram}
                    </h4>
                    <p className="text-primary-600 font-semibold">
                      {recommendation.recommendedService}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">{recommendation.price}</div>
                      <div className="text-sm text-gray-600">Investment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary-600">{recommendation.duration}</div>
                      <div className="text-sm text-gray-600">Duration</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Get Started on WhatsApp
                      </Button>
                    </a>
                    <Button variant="outline" className="px-6 py-3">
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
                    Take Quiz Again
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
                title: 'Book Consultation',
                description: 'Schedule your initial consultation through WhatsApp or our booking system.'
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
            Choose the service that best fits your needs, or let us help you create a custom combination 
            of services for optimal results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Consultation
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