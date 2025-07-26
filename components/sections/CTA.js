import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Phone, 
  CheckCircle,
  Sparkles
} from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-white mr-2" />
            <span className="text-white text-sm font-semibold">Limited Time Offer</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Start Your Health Transformation
            <span className="block text-primary-200">Risk-Free Today</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands who have already transformed their lives with our proven system. 
            Get personalized coaching, custom meal plans, and ongoing support.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            {[
              'Personalized nutrition plan',
              'Expert coaching support',
              '30-day money-back guarantee'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start">
                <CheckCircle className="h-5 w-5 text-primary-200 mr-3 flex-shrink-0" />
                <span className="text-white">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/programs">
              <Button 
                size="lg" 
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all group"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/discovery-call">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 text-lg font-semibold transition-all group"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Free Discovery Call
              </Button>
            </Link>
          </div>

          {/* Guarantee */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-2">
              💯 100% Satisfaction Guarantee
            </h3>
            <p className="text-primary-100 text-sm">
              We're so confident in our program that if you're not completely satisfied within 30 days, 
              we'll refund every penny. No questions asked.
            </p>
          </div>

          {/* Urgency */}
          <div className="mt-8">
            <p className="text-primary-200 text-sm">
              ⏰ Limited spots available this month • Don't wait, your health can't wait
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}