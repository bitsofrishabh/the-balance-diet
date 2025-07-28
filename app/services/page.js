import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Brain, 
  Heart, 
  Users,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  Microscope,
  BookOpen,
  Award,
  Calendar,
  MessageCircle,
  Utensils,
  Activity,
  Stethoscope,
  Clock,
  Star,
  Phone,
  Zap,
  Scale,
  Apple,
  Dumbbell,
  Baby,
  UserCheck
} from 'lucide-react';

export const metadata = {
  title: 'Our Services - Comprehensive Health & Nutrition Solutions',
  description: 'Discover our range of personalized health services including nutrition counseling, meal planning, health coaching, and wellness programs designed for lasting transformation.',
};

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Target,
      title: 'Weight Management Programs',
      subtitle: 'Sustainable Weight Loss & Maintenance',
      description: 'Comprehensive programs designed for healthy, sustainable weight loss with personalized nutrition and lifestyle coaching.',
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
      title: 'Medical Nutrition Therapy',
      subtitle: 'Condition-Specific Nutrition Plans',
      description: 'Specialized nutrition support for managing health conditions like diabetes, PCOS, thyroid, hypertension, and heart disease.',
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
      title: 'Maternal & Child Nutrition',
      subtitle: 'Pregnancy, Lactation & Pediatric Care',
      description: 'Specialized nutrition support for expecting mothers, new moms, and growing children with age-appropriate guidance.',
      features: [
        'Pregnancy nutrition planning',
        'Lactation support & meal plans',
        'Child nutrition (6 months - 18 years)',
        'Growth monitoring & assessment',
        'Family meal planning'
      ],
      duration: '3-9 months',
      price: 'From ₹3,999/month',
      popular: false,
      results: 'Healthy development',
      color: 'bg-pink-100 text-pink-600',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: Dumbbell,
      title: 'Sports & Fitness Nutrition',
      subtitle: 'Performance Optimization',
      description: 'Tailored nutrition strategies for athletes, fitness enthusiasts, and active individuals to optimize performance and recovery.',
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
    },
    {
      icon: Brain,
      title: 'Mindful Eating & Psychology',
      subtitle: 'Behavioral Change Support',
      description: 'Address emotional eating, food relationships, and develop a healthy mindset towards nutrition and body image.',
      features: [
        'Emotional eating counseling',
        'Mindfulness techniques',
        'Stress management strategies',
        'Body positivity coaching',
        'Habit formation support'
      ],
      duration: '3-6 months',
      price: 'From ₹4,499/month',
      popular: false,
      results: 'Improved relationship with food',
      color: 'bg-purple-100 text-purple-600',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Corporate Wellness',
      subtitle: 'Employee Health Programs',
      description: 'Comprehensive workplace wellness programs including nutrition workshops, health screenings, and group coaching.',
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
    }
  ];

  const consultationTypes = [
    {
      icon: UserCheck,
      title: 'Initial Consultation',
      duration: '60 minutes',
      price: '₹1,999',
      description: 'Comprehensive health assessment, goal setting, and personalized plan creation.',
      includes: ['Detailed health history', 'Body composition analysis', 'Goal setting session', 'Initial meal plan', 'Supplement recommendations']
    },
    {
      icon: Calendar,
      title: 'Follow-up Sessions',
      duration: '30 minutes',
      price: '₹999',
      description: 'Regular progress monitoring, plan adjustments, and ongoing support.',
      includes: ['Progress review', 'Plan modifications', 'Q&A session', 'Motivation support', 'Next steps planning']
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Support',
      duration: 'Daily',
      price: 'Included',
      description: '24/7 chat support for quick questions, motivation, and accountability.',
      includes: ['Daily check-ins', 'Quick queries', 'Motivation messages', 'Recipe suggestions', 'Emergency support']
    }
  ];

  const addOnServices = [
    {
      icon: Microscope,
      title: 'Advanced Health Testing',
      price: '₹2,999',
      description: 'Comprehensive blood work analysis including vitamins, minerals, and metabolic markers.'
    },
    {
      icon: Apple,
      title: 'Meal Prep Service',
      price: '₹4,999/week',
      description: 'Pre-prepared healthy meals delivered to your doorstep based on your nutrition plan.'
    },
    {
      icon: BookOpen,
      title: 'Recipe Development',
      price: '₹1,499',
      description: 'Custom recipe creation based on your preferences, restrictions, and nutritional needs.'
    },
    {
      icon: Scale,
      title: 'Body Composition Analysis',
      price: '₹799',
      description: 'Detailed body fat, muscle mass, and metabolic rate analysis using advanced equipment.'
    }
  ];

  const whatsappNumber = '+1234567890';
  const whatsappMessage = 'Hi! I would like to know more about The Balance Diet services.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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
                        <Star className="w-3 h-3 mr-1" />
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
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
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

      {/* Consultation Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Consultation Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible consultation formats to suit your schedule and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((consultation, index) => {
              const IconComponent = consultation.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="bg-primary-100 p-4 rounded-full inline-flex mb-4">
                      <IconComponent className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{consultation.title}</h3>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {consultation.duration}
                      </div>
                      <div className="text-2xl font-bold text-primary-600">{consultation.price}</div>
                    </div>
                    <p className="text-gray-600">{consultation.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {consultation.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your transformation journey with these specialized add-on services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((addon, index) => {
              const IconComponent = addon.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className="bg-secondary-100 p-3 rounded-xl inline-flex mb-4">
                    <IconComponent className="h-6 w-6 text-secondary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{addon.title}</h3>
                  <div className="text-xl font-bold text-secondary-600 mb-3">{addon.price}</div>
                  <p className="text-sm text-gray-600 mb-4">{addon.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Add to Plan
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
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
              <div key={index} className="text-center">
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