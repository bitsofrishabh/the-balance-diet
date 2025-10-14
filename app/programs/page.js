'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Navigation } from '@/components/Navigation';
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
  Shield,
  Video,
  MessageCircle,
  BookOpen,
  Dumbbell,
  Gift,
  Zap,
  TrendingUp,
  Calendar,
  Sparkles
} from 'lucide-react';

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-0">
              <Sparkles className="w-4 h-4 mr-2" />
              The Grand Slam Offer
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Complete
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Health Transformation </span>
              Package
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Everything you need to lose 10-15 kg in 3 months with unlimited support,
              expert guidance, and our groundbreaking 50% refund guarantee.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-emerald-500 mr-2" />
                50% Money Back on Success
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-emerald-500 mr-2" />
                5,000+ Transformations
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-emerald-500 mr-2" />
                Results Guaranteed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Programs Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included in Your Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive transformation system designed to help you achieve lasting results
            </p>
          </div>

          {/* New layout with Video and Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: YouTube Video */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="aspect-[9/16] relative">
                <iframe
                  src="https://www.youtube.com/embed/I1OaG-R3uAw"
                  title="Program Features"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full aspect-video rounded-t-3xl"
                ></iframe>
              </div>
              <div className="p-6 bg-gray-50">
                 <h3 className="text-lg font-bold text-gray-900">Watch Our Program Features</h3>
                 <p className="text-sm text-gray-600 mt-1">See what makes our program so effective for real people.</p>
              </div>
            </div>

            {/* Right Column: Core Deliverables */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 to-blue-600 px-8 py-6">
                    <h3 className="text-2xl font-bold text-white flex items-center">
                        <Gift className="mr-3 h-7 w-7" />
                        Core Transformation Package
                    </h3>
                </div>
                <div className="p-8">
                    <div className="space-y-4">
                        {[
                            { title: 'Daily Personal Support', description: 'Stay motivated and accountable with check-ins every single day', icon: MessageCircle },
                            { title: 'Unlimited Zoom Consultations', description: 'Book as many video calls as needed through our scheduling system', icon: Video },
                            { title: 'Travelling Diet Plan', description: 'Stay on track even when on the road with flexible meal options', icon: Calendar },
                            { title: '100+ Recipe Guide Book', description: 'Delicious, easy-to-make recipes for every meal and occasion', icon: BookOpen },
                            { title: 'Workout Reference Videos', description: 'Complete exercise library with form guides and modifications', icon: Dumbbell },
                            { title: 'Diwali Detox Guide', description: 'Special protocols for festivals and celebrations without derailing progress', icon: Sparkles },
                            { title: '1-Month Maintenance Plan', description: 'Keep the weight off with structured maintenance after goal achievement', icon: TrendingUp },
                            { title: 'Community Support', description: 'Private group access with peers on the same transformation journey', icon: Users },
                            { title: 'Access to 3 Expert Coaches', description: 'Multiple specialists ensuring all your questions are answered quickly', icon: Award }
                        ].map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 pt-1">
                                      <div className="p-2 rounded-lg bg-emerald-100">
                                        <IconComponent className="h-5 w-5 text-emerald-600" />
                                      </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
          </div>

          {/* The Grand Slam Guarantee */}
          <div className="mt-16 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl shadow-xl overflow-hidden border-2 border-yellow-200">
            <div className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    The Grand Slam Guarantee
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    We're so confident in our program that we put our money where our mouth is.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 mb-6">
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-2">
                      Lose 10-15 kg in 3 Months = Get 50% Back
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      When you achieve your goal of losing 10-15 kg within the first 3 months by following the program,
                      we'll refund 50% of your program fee. That means you get half your money back simply for succeeding.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Why This Works:</h4>
                <ul className="space-y-2">
                  {[
                    'It removes all the risk from your decision',
                    'It shows our absolute confidence in the program',
                    'It gives you extra motivation to stick with the plan',
                    'You either transform your body OR get your money back'
                  ].map((point, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0 fill-current" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-gray-600 mt-4 text-center">
                No gimmicks. No fine print. Just results.
              </p>
            </div>
          </div>
        </div>
      </section>

    

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real People, Real Results
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands who have transformed their lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya S.',
                role: 'Bride Transformation',
                result: 'Lost 14 kg in 10 weeks',
                image: '👰',
                quote: 'I looked absolutely stunning on my wedding day. The program was worth every penny, and getting 50% back was the cherry on top!'
              },
              {
                name: 'Anjali M.',
                role: 'PCOS Journey',
                result: 'Lost 12 kg, cycles regulated',
                image: '💪',
                quote: 'Not only did I lose weight, but my PCOS symptoms improved dramatically. The daily support kept me going when I wanted to quit.'
              },
              {
                name: 'Neha K.',
                role: 'Thyroid Success',
                result: 'Lost 15 kg, energy restored',
                image: '⚡',
                quote: 'I thought my thyroid would always hold me back. This program proved me wrong. I have more energy than I did 10 years ago!'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="bg-emerald-100 rounded-lg px-3 py-2 mb-4 inline-block">
                  <p className="text-sm font-semibold text-emerald-700">{testimonial.result}</p>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
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
                question: "How does the 50% refund guarantee work?",
                answer: "Simple: Follow the program, achieve your 10-15 kg weight loss goal within 3 months, and we'll refund 50% of your program fee. No complicated terms, no video testimonial required (though we'd love to hear your story!)."
              },
              {
                question: "What if I don't lose 10-15 kg in 3 months?",
                answer: "That's okay! You keep all the resources, continue with unlimited support, and keep working toward your goal. The program doesn't end - we're with you until you succeed."
              },
              {
                question: "Is unlimited Zoom really unlimited?",
                answer: "Yes, but with fair use. Book calls through our scheduling system whenever you need guidance, accountability, or have questions. We've never had a client abuse this, because they see results and don't need excessive calls."
              },
              {
                question: "Which specialization should I choose?",
                answer: "During your onboarding call, we'll assess your specific situation and recommend the best program track for you - whether that's our Bride, PCOS/PCOD, or Thyroid specialization."
              },
              {
                question: "Can I really eat during festivals and celebrations?",
                answer: "Absolutely! Our Diwali Detox Guide and flexible meal plans are designed for real life. We teach you how to enjoy celebrations without derailing your progress."
              },
              {
                question: "Do I need special equipment for the workouts?",
                answer: "No expensive equipment needed. Our workout videos include bodyweight exercises and modifications using common household items. Gym access is optional."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-red-500 text-white border-0">
            <Clock className="w-4 h-4 mr-2" />
            Limited Availability
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Only 10 Spots Available This Month
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Due to the high-touch nature of our unlimited support model, we can only accept
            10 new clients per month to maintain quality. Don't miss your chance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg">
              <ArrowRight className="mr-2 h-5 w-5" />
              Claim Your Spot Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Book Free Call
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            7 spots remaining as of today
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            This is the last weight loss program you'll ever need.
            With our Grand Slam Guarantee, you have nothing to lose except the weight.
          </p>
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Here's What Happens Next:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                {
                  step: '1',
                  title: 'Book Your Call',
                  description: 'Schedule a free discovery call to see if you qualify for the program'
                },
                {
                  step: '2',
                  title: 'Get Your Plan',
                  description: 'Receive your personalized transformation plan and start immediately'
                },
                {
                  step: '3',
                  title: 'Transform & Win',
                  description: 'Lose 10-15 kg in 3 months and get 50% of your investment back'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-blue-600 text-white flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-12 py-6 text-xl">
            Yes, I Want The Grand Slam Offer
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required for discovery call
          </p>
        </div>
      </section>
    </div>
  );
}
