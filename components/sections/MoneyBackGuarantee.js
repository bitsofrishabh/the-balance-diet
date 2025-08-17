import { Button } from '@/components/ui/button';
import { 
  Shield, 
  CheckCircle, 
  Award,
  MessageCircle,
  Phone,
  Star
} from 'lucide-react';

export function MoneyBackGuarantee() {
  const whatsappNumber = '+1234567890';
  const whatsappMessage = 'Hi! I saw your money-back guarantee offer and would like to know more about The Balance Diet programs.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Poster Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-4 shadow-2xl">
              <img
                src="https://res.cloudinary.com/djdej77pl/image/upload/v1755419517/Ad_Creative_For_Rishab_Sir_sajqyg.png"
                alt="The Balance Diet Transformation Program"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full shadow-lg transform rotate-12">
                <div className="text-center">
                  <div className="text-sm font-bold">100% GUARANTEED</div>
                  <div className="text-xs">Money Back</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-green-500 mr-3" />
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Risk-Free Guarantee
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                100% Money-Back
                <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent block">
                  Guarantee
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're so confident in our proven transformation system that we offer a 
                complete money-back guarantee. Your success is our commitment.
              </p>
            </div>

            {/* Guarantee Features */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Our Promise to You:
              </h3>
              {[
                'If you don\'t see results in 30 days, get 100% money back',
                'Follow our program exactly as prescribed',
                'Get personalized support throughout your journey',
                'No questions asked refund policy',
                'Risk-free transformation guarantee'
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Success Stories</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600 mb-1">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-2xl font-bold text-green-600 ml-1">4.9</span>
                  </div>
                  <div className="text-sm text-gray-600">Client Rating</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 py-4 text-lg font-semibold">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Claim Your Risk-Free Transformation
                </Button>
              </a>
              <Button variant="outline" className="w-full py-4 text-lg border-green-200 text-green-700 hover:bg-green-50">
                <Phone className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
            </div>

            {/* Additional Trust Elements */}
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 pt-4">
              <div className="flex items-center">
                <Award className="h-4 w-4 text-green-500 mr-2" />
                Certified Experts
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 text-green-500 mr-2" />
                Secure & Confidential
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}