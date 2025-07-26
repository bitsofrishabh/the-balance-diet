import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Check, 
  Star, 
  Users,
  Clock,
  Target,
  Heart,
  Award,
  Phone,
  ArrowRight,
  Shield
} from 'lucide-react';

export const metadata = {
  title: 'Programs & Pricing - Choose Your Health Transformation Plan',
  description: 'Explore our comprehensive health transformation programs designed to fit your goals, lifestyle, and budget. Transparent pricing with proven results.',
};

export default function ProgramsPage() {
  const programs = [
    {
      name: 'Essential Transform',
      price: 297,
      originalPrice: 397,
      duration: '8 weeks',
      description: 'Perfect for those ready to start their health journey with essential tools and guidance.',
      featured: false,
      features: [
        'Personalized nutrition plan',
        'Weekly group coaching calls',
        'Basic meal planning templates',
        'Progress tracking tools',
        'Private community access',
        'Email support',
        'Recipe database access',
        'Basic health assessments'
      ],
      bonus: ['Free recipe book', 'Meal prep guide'],
      ideal: 'Beginners ready to start their transformation',
      results: 'Average 15-20 lbs weight loss',
      testimonial: {
        name: 'Lisa M.',
        text: 'Lost 18 lbs and feel amazing!',
        rating: 5
      }
    },
    {
      name: 'Complete Transform',
      price: 597,
      originalPrice: 797,
      duration: '12 weeks',
      description: 'Our most popular program with comprehensive support and personalized coaching.',
      featured: true,
      features: [
        'Everything in Essential Transform',
        'Bi-weekly 1-on-1 coaching sessions',
        'Custom meal plans & shopping lists',
        'Exercise program design',
        'Supplement recommendations',
        'Priority support & chat access',
        'Advanced health assessments',
        'Habit tracking & accountability',
        'Stress management techniques',
        'Sleep optimization guide'
      ],
      bonus: ['Free discovery call', 'Bonus recipe collection', '30-day meal plans', 'Exercise video library'],
      ideal: 'Serious about transformation with dedicated support',
      results: 'Average 25-30 lbs weight loss',
      testimonial: {
        name: 'Michael R.',
        text: 'Best investment I\'ve made in my health!',
        rating: 5
      }
    },
    {
      name: 'Premium Transform',
      price: 997,
      originalPrice: 1297,
      duration: '16 weeks',
      description: 'Premium program with maximum support, advanced testing, and lifetime access.',
      featured: false,
      features: [
        'Everything in Complete Transform',
        'Weekly 1-on-1 coaching sessions',
        'Advanced metabolic testing',
        'Functional health assessments',
        'Custom supplement protocols',
        'Unlimited messaging support',
        'Emergency coaching calls',
        'Lifestyle optimization plan',
        'Maintenance program included',
        'Lifetime community access',
        'Annual check-in sessions'
      ],
      bonus: ['Free health panel testing', 'Premium supplement starter kit', 'Lifetime recipe updates', 'VIP community access'],
      ideal: 'Those wanting maximum results and support',
      results: 'Average 35+ lbs weight loss',
      testimonial: {
        name: 'Sarah K.',
        text: 'Transformed my entire life, not just my weight!',
        rating: 5
      }
    }
  ];

  const addOns = [
    {
      name: 'Metabolic Testing',
      price: 197,
      description: 'Comprehensive metabolic analysis to optimize your nutrition plan'
    },
    {
      name: 'Supplement Protocol',
      price: 97,
      description: 'Personalized supplement recommendations based on your needs'
    },
    {
      name: 'Meal Prep Service',
      price: 147,
      description: 'Pre-made meals delivered to your door (monthly)'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary-100 text-primary-700">
              <Award className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Choose Your
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"> Transformation </span>
              Program
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Select the program that best fits your goals, lifestyle, and budget. 
              All programs include our proven methodology and dedicated support.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-primary-500 mr-2" />
                30-Day Money Back Guarantee
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-primary-500 mr-2" />
                10,000+ Success Stories
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-primary-500 mr-2" />
                4.9/5 Average Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className={`relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${program.featured ? 'ring-2 ring-primary-500 scale-105' : ''}`}>
                {/* Featured Badge */}
                {program.featured && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {program.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {program.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-4xl font-bold text-gray-900">
                          ${program.price}
                        </span>
                        <div className="text-left">
                          <div className="text-sm text-gray-500 line-through">
                            ${program.originalPrice}
                          </div>
                          <div className="text-sm text-primary-600 font-semibold">
                            {program.duration}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 mt-2">
                        One-time payment • No recurring fees
                      </div>
                    </div>

                    {/* Ideal For */}
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <div className="text-sm font-semibold text-gray-700 mb-1">Ideal for:</div>
                      <div className="text-sm text-gray-600">{program.ideal}</div>
                    </div>

                    {/* Expected Results */}
                    <div className="bg-primary-50 rounded-lg p-3 mb-6">
                      <div className="text-sm font-semibold text-primary-700 mb-1">Expected Results:</div>
                      <div className="text-sm text-primary-600">{program.results}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-gray-900">What's Included:</h4>
                    <ul className="space-y-3">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bonus */}
                  <div className="bg-accent-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-accent-700 mb-2">Bonus Included:</h4>
                    <ul className="space-y-1">
                      {program.bonus.map((bonus, bonusIndex) => (
                        <li key={bonusIndex} className="text-sm text-accent-600 flex items-center">
                          <Star className="h-4 w-4 mr-2 fill-current" />
                          {bonus}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex space-x-1">
                        {[...Array(program.testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 italic mb-2">
                      "{program.testimonial.text}"
                    </p>
                    <div className="text-sm font-semibold text-gray-600">
                      - {program.testimonial.name}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full py-3 ${program.featured 
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700' 
                      : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                    size="lg"
                  >
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <div className="text-center mt-4">
                    <button className="text-sm text-primary-600 hover:text-primary-700 underline">
                      Questions? Book a free call
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Optional Add-Ons
            </h2>
            <p className="text-gray-600">
              Enhance your transformation with these additional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold text-primary-600 mb-3">
                  ${addon.price}
                </div>
                <p className="text-sm text-gray-600 mb-4">{addon.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Add to Program
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "What if I'm not satisfied with my program?",
                answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied within the first 30 days, we'll refund your investment in full."
              },
              {
                question: "Can I upgrade my program later?",
                answer: "Absolutely! You can upgrade to a higher tier program at any time and only pay the difference."
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes, we offer 3-month and 6-month payment plans for all programs. Contact us for details."
              },
              {
                question: "What makes your programs different?",
                answer: "Our programs are based on proven science, personalized to your unique needs, and include ongoing support throughout your journey."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Book a free discovery call to discuss which program is right for you and get all your questions answered.
          </p>
          <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4">
            <Phone className="mr-2 h-5 w-5" />
            Book Free Discovery Call
          </Button>
        </div>
      </section>
    </div>
  );
}