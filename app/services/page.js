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
  Stethoscope
} from 'lucide-react';

export const metadata = {
  title: 'Our Services - Comprehensive Health & Nutrition Solutions',
  description: 'Discover our range of personalized health services including nutrition counseling, meal planning, health coaching, and wellness programs designed for lasting transformation.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: Target,
      title: 'Personalized Nutrition Planning',
      description: 'Custom meal plans designed specifically for your body type, goals, and lifestyle preferences.',
      features: [
        'Comprehensive nutritional assessment',
        'Customized meal plans & recipes',
        'Macro and micronutrient optimization',
        'Food sensitivity considerations',
        'Regular plan adjustments'
      ],
      duration: 'Ongoing',
      price: 'From ₹2,999/month'
    },
    {
      icon: Users,
      title: 'One-on-One Health Coaching',
      description: 'Personal guidance from certified nutritionists and health coaches to support your transformation journey.',
      features: [
        'Weekly coaching sessions',
        'Goal setting and tracking',
        'Behavioral change support',
        'Motivation and accountability',
        '24/7 chat support'
      ],
      duration: '3-12 months',
      price: 'From ₹4,999/month'
    },
    {
      icon: Utensils,
      title: 'Meal Prep & Planning',
      description: 'Take the guesswork out of healthy eating with our comprehensive meal preparation services.',
      features: [
        'Weekly meal prep guides',
        'Shopping lists included',
        'Batch cooking strategies',
        'Storage and reheating tips',
        'Recipe modifications'
      ],
      duration: 'Weekly',
      price: 'From ₹1,999/month'
    },
    {
      icon: Activity,
      title: 'Fitness Integration',
      description: 'Combine nutrition with exercise for optimal results with our integrated fitness programs.',
      features: [
        'Custom workout plans',
        'Exercise-nutrition timing',
        'Recovery meal planning',
        'Performance optimization',
        'Progress tracking'
      ],
      duration: '3-6 months',
      price: 'From ₹3,999/month'
    },
    {
      icon: Stethoscope,
      title: 'Medical Nutrition Therapy',
      description: 'Specialized nutrition support for managing health conditions like diabetes, PCOS, thyroid issues.',
      features: [
        'Condition-specific meal plans',
        'Medical history review',
        'Lab report analysis',
        'Supplement recommendations',
        'Doctor collaboration'
      ],
      duration: '6-12 months',
      price: 'From ₹5,999/month'
    },
    {
      icon: Brain,
      title: 'Mindful Eating Coaching',
      description: 'Develop a healthy relationship with food through mindfulness and behavioral psychology techniques.',
      features: [
        'Emotional eating support',
        'Mindfulness techniques',
        'Stress management',
        'Habit formation',
        'Psychology-based approach'
      ],
      duration: '3-6 months',
      price: 'From ₹3,499/month'
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
              Our
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"> Expert </span>
              Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From personalized nutrition planning to comprehensive health coaching, we offer a complete range of services to support your wellness journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    {[
                      'Certified nutrition experts',
                      'Personalized approach',
                      'Science-based methods',
                      'Ongoing support'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-3">
                    {[
                      'Flexible scheduling',
                      'Proven track record',
                      'Holistic wellness focus',
                      'Affordable pricing'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
              <p className="text-primary-100 mb-6">
                Book a free consultation to discuss your goals and find the perfect service for your needs.
              </p>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 w-full">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Free Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of health and nutrition services, each designed to address specific aspects of your wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-primary-100 p-3 rounded-xl">
                      <IconComponent className="h-8 w-8 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
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
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div>
                      <div className="text-sm text-gray-500">Duration: {service.duration}</div>
                      <div className="text-lg font-bold text-primary-600">{service.price}</div>
                    </div>
                    <Button className="bg-primary-600 hover:bg-primary-700">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'We assess your health status, goals, and preferences through a comprehensive consultation.'
              },
              {
                step: '02',
                title: 'Custom Plan Creation',
                description: 'Our experts design a personalized plan tailored specifically to your needs and lifestyle.'
              },
              {
                step: '03',
                title: 'Implementation Support',
                description: 'We guide you through implementing your plan with ongoing support and adjustments.'
              },
              {
                step: '04',
                title: 'Progress Monitoring',
                description: 'Regular check-ins and plan refinements ensure you stay on track to achieve your goals.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
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
            Choose the service that best fits your needs, or let us help you create a custom combination of services for optimal results.
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
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}