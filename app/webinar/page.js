import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Calendar, 
  Clock,
  Users,
  CheckCircle,
  Star,
  Award,
  MessageCircle,
  Phone,
  Gift,
  Target,
  Heart,
  TrendingUp,
  Shield
} from 'lucide-react';

export const metadata = {
  title: 'Free Health Transformation Webinar - The Balance Diet',
  description: 'Join our exclusive free webinar and discover the secrets to sustainable weight loss and health transformation. Limited seats available.',
};

export default function WebinarPage() {
  const razorpayUrl = 'https://razorpay.me/@thebalancediet';
  const whatsappNumber = '+919149081034';
  const whatsappMessage = 'Hi! I would like to register for the free health transformation webinar.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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
                <Play className="w-4 h-4 mr-2" />
                Free Live Webinar
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Health in
                <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent block"> 90 Days or Less </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Join our exclusive free webinar and discover the proven system that has helped 500+ people 
                achieve sustainable weight loss and optimal health without restrictive diets or extreme workouts.
              </p>

              {/* Webinar Details */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="font-semibold">Every Saturday</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="font-semibold">7:00 PM IST</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="font-semibold">Limited Seats</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 px-8 py-4">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Register for Free Webinar
                  </Button>
                </a>
                <Button variant="outline" size="lg" className="px-8 py-4">
                  <Phone className="mr-2 h-5 w-5" />
                  Book Personal Call
                </Button>
              </div>
            </div>

            {/* Right Column - Webinar Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://res.cloudinary.com/djdej77pl/image/upload/v1755572982/Grey_and_Yellow_Modern_Geometric_Online_Business_Webinar_Instagram_Post_t4rgi1.png"
                  alt="Health Transformation Webinar"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">500+</div>
                    <div className="text-xs text-gray-600">Attendees</div>
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

      {/* What You'll Learn */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Discover in This Webinar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get exclusive insights and actionable strategies that you won't find anywhere else
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'The 3-Step Weight Loss Formula',
                description: 'Discover the exact system we use to help clients lose 15-30 kg sustainably without crash diets.'
              },
              {
                icon: Heart,
                title: 'Indian Food Weight Loss Secrets',
                description: 'Learn how to eat roti, rice, and dal while still losing weight and improving your health.'
              },
              {
                icon: Shield,
                title: 'Overcome Weight Loss Plateaus',
                description: 'The proven strategies to break through stubborn weight loss plateaus that keep you stuck.'
              },
              {
                icon: TrendingUp,
                title: 'Boost Your Metabolism Naturally',
                description: 'Simple daily habits that can increase your metabolic rate by up to 25% without supplements.'
              },
              {
                icon: CheckCircle,
                title: 'PCOS & Thyroid Solutions',
                description: 'Specific nutrition protocols for managing hormonal conditions while losing weight.'
              },
              {
                icon: Award,
                title: 'Mindset for Success',
                description: 'The psychological strategies that separate successful transformations from failed attempts.'
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-primary-100 p-3 rounded-xl inline-flex mb-4">
                    <IconComponent className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real transformation stories from people who attended our webinars and joined our programs
            </p>
          </div>

          {/* Client Feedback Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              'https://res.cloudinary.com/djdej77pl/image/upload/v1755342245/Faceless%20Feedback/18_lnkgus.png',
              'https://res.cloudinary.com/djdej77pl/image/upload/v1755342245/Faceless%20Feedback/26_bjuggp.png',
              'https://res.cloudinary.com/djdej77pl/image/upload/v1755342245/Faceless%20Feedback/3_ehvb1y.png',
              'https://res.cloudinary.com/djdej77pl/image/upload/v1755342245/Faceless%20Feedback/20_h7xzck.png',
              'https://res.cloudinary.com/djdej77pl/image/upload/v1755342247/Faceless%20Feedback/24_z2vd1g.png',
              'https://res.cloudinary.com/djdej77pl/image/upload/v1755342245/Faceless%20Feedback/1_cpbkjw.png'
            ].map((image, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <img
                  src={image}
                  alt={`Client feedback ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Before/After Transformations */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Real Transformation Results
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'https://res.cloudinary.com/djdej77pl/image/upload/v1755342360/Before-After/2_oernfq.png',
                'https://res.cloudinary.com/djdej77pl/image/upload/v1755342360/Before-After/9_j68upl.png',
                'https://res.cloudinary.com/djdej77pl/image/upload/v1755342359/Before-After/10_kr7dzl.png',
                'https://res.cloudinary.com/djdej77pl/image/upload/v1755342359/Before-After/7_gbfnq9.png',
                'https://res.cloudinary.com/djdej77pl/image/upload/v1755342359/Before-After/5_zc4maw.png',
                'https://res.cloudinary.com/djdej77pl/image/upload/v1755342358/Before-After/8_tzzijq.png'
              ].map((image, index) => (
                <div key={index} className="overflow-hidden hover:scale-105 transition-all duration-300">
                  <img
                    src={image}
                    alt={`Transformation ${index + 1}`}
                    className="w-full h-48 object-contain bg-gradient-to-br from-primary-50 to-secondary-50"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Exclusive Webinar Bonus
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Attend the full webinar and get our comprehensive Health Transformation E-book 
              plus a free 30-minute consultation call with our expert nutritionists.
            </p>
            
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Bonus Includes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Complete Health Transformation E-book</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">30-minute personal consultation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Personalized meal planning guide</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Access to private community group</span>
                </div>
              </div>
            </div>
            
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 px-8 py-4 text-lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Register for Free Webinar
              </Button>
            </a>
            
            <p className="text-sm text-gray-500 mt-4">
              ⏰ Limited seats available - Register now to secure your spot
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don't Miss This Life-Changing Opportunity
          </h2>
          <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
            Join hundreds of people who have already transformed their health. 
            Your journey to better health starts with this free webinar.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4">
              <MessageCircle className="mr-2 h-5 w-5" />
              Register Now - It's Free
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}