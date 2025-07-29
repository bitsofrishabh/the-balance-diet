import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Download, 
  CheckCircle,
  Star,
  Users,
  MessageCircle,
  Gift,
  Clock,
  Target,
  Heart,
  TrendingUp,
  Shield,
  Award
} from 'lucide-react';

export const metadata = {
  title: 'Free E-Book - Complete Guide to Healthy Weight Loss',
  description: 'Download our comprehensive free e-book with proven strategies for sustainable weight loss and healthy living.',
};

export default function EbookPage() {
  const whatsappNumber = '+1234567890';
  const whatsappMessage = 'Hi! I would like to download the free e-book and know more about The Balance Diet programs.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const ebookFeatures = [
    'Science-based weight loss strategies',
    'Meal planning templates and guides',
    '50+ healthy recipes with nutritional info',
    'Exercise routines for all fitness levels',
    'Habit formation and mindset techniques',
    'Common weight loss mistakes to avoid',
    'Supplement recommendations',
    'Progress tracking tools and worksheets'
  ];

  const chapters = [
    {
      number: '01',
      title: 'Understanding Your Body',
      description: 'Learn about metabolism, hormones, and how your body processes food.',
      icon: Heart
    },
    {
      number: '02',
      title: 'Nutrition Fundamentals',
      description: 'Master the basics of macronutrients, micronutrients, and balanced eating.',
      icon: BookOpen
    },
    {
      number: '03',
      title: 'Meal Planning Made Easy',
      description: 'Step-by-step guide to planning and preparing healthy meals.',
      icon: Target
    },
    {
      number: '04',
      title: 'Exercise & Movement',
      description: 'Effective workout routines that complement your nutrition plan.',
      icon: TrendingUp
    },
    {
      number: '05',
      title: 'Mindset & Habits',
      description: 'Build lasting habits and overcome mental barriers to success.',
      icon: Shield
    },
    {
      number: '06',
      title: 'Maintaining Your Results',
      description: 'Strategies to keep the weight off and maintain your healthy lifestyle.',
      icon: Award
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      result: 'Lost 15 kg',
      quote: 'This e-book gave me the foundation I needed to start my weight loss journey. The meal plans are so practical!',
      rating: 5
    },
    {
      name: 'Rahul Gupta',
      result: 'Lost 20 kg',
      quote: 'The mindset chapter was a game-changer for me. Finally understood why my previous diets failed.',
      rating: 5
    },
    {
      name: 'Sneha Patel',
      result: 'Lost 12 kg',
      quote: 'Easy to follow recipes and clear explanations. This book is worth its weight in gold!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <Badge className="bg-primary-100 text-primary-700">
                <Gift className="w-4 h-4 mr-2" />
                Free Download
              </Badge>

              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  The Complete Guide to
                  <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent block">
                    Healthy Weight Loss
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Download our comprehensive 80-page e-book packed with proven strategies, 
                  meal plans, recipes, and expert tips for sustainable weight loss.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: BookOpen, text: '80+ Pages of Expert Content' },
                  { icon: Users, text: '10,000+ Downloads' },
                  { icon: Star, text: '4.9/5 Average Rating' },
                  { icon: Clock, text: 'Lifetime Access' }
                ].map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-primary-100 p-2 rounded-lg">
                        <IconComponent className="w-5 h-5 text-primary-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 px-8 py-4">
                    <Download className="mr-2 h-5 w-5" />
                    Download Free E-Book
                  </Button>
                </a>
                <Button variant="outline" size="lg" className="px-8 py-4">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Expert Guidance
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-primary-500" />
                  100% Free
                </div>
                <div className="flex items-center">
                  <Download className="w-4 h-4 mr-2 text-primary-500" />
                  Instant Download
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-primary-500" />
                  No Spam
                </div>
              </div>
            </div>

            {/* Right Column - E-book Preview */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 shadow-2xl">
                {/* E-book Cover Mockup */}
                <div className="bg-white rounded-2xl shadow-xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="aspect-[3/4] bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white p-6">
                    <div className="text-center">
                      <BookOpen className="w-16 h-16 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">The Complete Guide</h3>
                      <p className="text-sm opacity-90">Healthy Weight Loss</p>
                      <div className="mt-4 text-xs opacity-75">
                        By The Balance Diet Team
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">10K+</div>
                    <div className="text-xs text-gray-600">Downloads</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-lg font-bold text-gray-900 ml-1">4.9</span>
                    </div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Inside the E-Book
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive content designed to guide you through every step of your weight loss journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapters.map((chapter, index) => {
              const IconComponent = chapter.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-100 p-3 rounded-xl mr-4">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {chapter.number}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {chapter.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {chapter.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Everything You Need to Succeed
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                This isn't just another diet book. It's a complete transformation guide 
                with practical tools and strategies you can implement immediately.
              </p>

              <div className="space-y-4">
                {ebookFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8">
              <div className="text-center mb-6">
                <div className="bg-primary-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Limited Time Bonus
                </h3>
                <p className="text-gray-600">
                  Download now and get exclusive access to our private community and weekly Q&A sessions!
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">FREE</div>
                  <div className="text-gray-500 line-through mb-2">Worth ₹2,999</div>
                  <div className="text-sm text-gray-600 mb-4">
                    No hidden costs, no credit card required
                  </div>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700">
                      <Download className="mr-2 h-4 w-4" />
                      Download Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Readers Are Saying
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands who have transformed their lives with our e-book
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-primary-600 font-medium">{testimonial.result}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Download your free copy now and take the first step towards a healthier, 
            happier you. No strings attached, just pure value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4">
                <Download className="mr-2 h-5 w-5" />
                Download Free E-Book Now
              </Button>
            </a>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4">
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Personal Guidance
            </Button>
          </div>
          
          {/* Final Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-sm text-primary-100">
            <div className="flex items-center">
              <Download className="h-5 w-5 mr-2" />
              10,000+ Downloads
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-2" />
              4.9/5 Rating
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              100% Free Forever
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}