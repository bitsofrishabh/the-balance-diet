'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  User,
  Calendar,
  MapPin,
  Ruler,
  Scale,
  Target,
  Briefcase,
  Heart,
  Phone,
  CheckCircle,
  Loader2,
  MessageCircle,
  Shield,
  Award,
  Star,
} from 'lucide-react';

export function TransformationSection() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    height: '',
    weight: '',
    goalWeight: '',
    profession: '',
    mobile: '',
    healthGoals: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    if (name === 'mobile') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (formData.mobile.length !== 10) {
      setError('Please enter a valid 10-digit mobile number.');
      setIsSubmitting(false);
      return;
    }

    try {
      // TODO: replace with your deployed Apps Script URL
      const GOOGLE_SCRIPT_URL =
        'https://script.google.com/macros/s/AKfycbw5hp-urd3G7-kEquq721b2JjP0S4r5_UjMAwR17YXupLl8veqLdt_HK27kVqKUBVulOQ/exec';

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'Website Lead Form',
        }),
      });

      setIsSubmitted(true);
      setFormData({
        name: '',
        age: '',
        city: '',
        height: '',
        weight: '',
        goalWeight: '',
        profession: '',
        mobile: '',
        healthGoals: '',
      });
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was an error submitting your information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = '+919149081034';
  const whatsappMessage = `Hi! I just filled out the health assessment form. My details: Name: ${formData.name}, Age: ${formData.age}, Mobile: ${formData.mobile}, Goal: ${formData.healthGoals}. I'd like to discuss my transformation journey.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Success Message */}
            <div className="bg-white rounded-3xl p-8 shadow-xl flex items-center justify-center">
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full inline-flex mb-6">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You for Your Interest!</h3>
                <p className="text-gray-600 mb-6">
                  We've received your health information and our expert team will review it shortly.
                  Get ready to start your transformation journey!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-green-500 hover:bg-green-600 px-8 py-3">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Continue on WhatsApp
                    </Button>
                  </a>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)} className="px-8 py-3">
                    Submit Another Form
                  </Button>
                </div>
              </div>
            </div>

            {/* Money Back Guarantee Poster */}
            <div className="bg-white rounded-3xl p-6 shadow-xl flex flex-col">
              <div className="flex-1 flex flex-col">
                {/* Poster */}
                <div className="relative mb-6">
                  <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-3 shadow-lg">
                    <img
                      src="https://res.cloudinary.com/djdej77pl/image/upload/v1755436075/Ad_Creative_For_Rishab_Sir_1_pytidb.png"
                      alt="The Balance Diet Transformation Program"
                      className="w-full h-auto rounded-2xl shadow-lg max-h-48 object-contain"
                    />
                    {/* Floating Badge */}
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-lg transform rotate-12">
                      <div className="text-center">
                        <div className="text-xs font-bold">100% GUARANTEED</div>
                        <div className="text-xs">Money Back</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-green-500 mr-3" />
                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                      Risk-Free Guarantee
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    100% Money-Back
                    <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent block">
                      Guarantee
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    We're so confident in our proven transformation system that we offer a complete money-back guarantee.
                    Your success is our commitment.
                  </p>

                  {/* Trust Indicators */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 mb-6">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-xl font-bold text-green-600 mb-1">500+</div>
                        <div className="text-xs text-gray-600">Success Stories</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-green-600 mb-1">98%</div>
                        <div className="text-xs text-gray-600">Success Rate</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center mb-1">
                          <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                          <span className="text-xl font-bold text-green-600 ml-1">4.9</span>
                        </div>
                        <div className="text-xs text-gray-600">Client Rating</div>
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-3 mt-auto">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 py-3 text-base font-semibold">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Claim Your Risk-Free Transformation
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="h-full flex flex-col">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Get Your Free Health Assessment
                </h2>
                <p className="text-gray-600">
                  Fill out this quick form to get personalized recommendations for your transformation journey.
                </p>
              </div>

              {/* Row 1: Name, Age, City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <User className="h-4 w-4 text-primary-600" />
                    <span>📝 Name</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    placeholder="Enter your full name"
                  />
                </div>


                {/* City */}
                <div>
                  <label htmlFor="city" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="h-4 w-4 text-primary-600" />
                    <span>🏠 City</span>
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    placeholder="Enter your city"
                  />
                </div>
              </div>

              {/* Row 2: Age, Height, Weight, Goal Weight */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                {/* Age */}
                <div>
                  <label htmlFor="age" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="h-4 w-4 text-primary-600" />
                    <span>🎂 Age</span>
                  </label>
                  <input
                    id="age"
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    min={18}
                    max={80}
                    inputMode="numeric"
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    placeholder="Enter your age"
                  />
                </div>

                {/* Height */}
                <div>
                  <label htmlFor="height" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Ruler className="h-4 w-4 text-primary-600" />
                    <span>⬆️ Height (cm)</span>
                  </label>
                  <input
                    id="height"
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    required
                    min={120}
                    max={220}
                    inputMode="numeric"
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    placeholder="Enter height in cm"
                  />
                </div>

                {/* Weight */}
                <div>
                  <label htmlFor="weight" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Scale className="h-4 w-4 text-primary-600" />
                    <span>⚖️ Weight (kg)</span>
                  </label>
                  <input
                    id="weight"
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    required
                    min={30}
                    max={200}
                    inputMode="numeric"
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    placeholder="Enter current weight in kg"
                  />
                </div>

                {/* Goal Weight */}
                <div>
                  <label htmlFor="goalWeight" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Target className="h-4 w-4 text-primary-600" />
                    <span>🔥 Goal Weight (kg)</span>
                  </label>
                  <input
                    id="goalWeight"
                    type="number"
                    name="goalWeight"
                    value={formData.goalWeight}
                    onChange={handleInputChange}
                    required
                    min={30}
                    max={200}
                    inputMode="numeric"
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    placeholder="Enter goal weight in kg"
                  />
                </div>
              </div>

              {/* Row 3: Profession, Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Profession */}
                <div>
                  <label htmlFor="profession" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Briefcase className="h-4 w-4 text-primary-600" />
                    <span>💼 Work/Profession</span>
                  </label>
                  <input
                    id="profession"
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                    required
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    placeholder="Enter your profession or work"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="mobile" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Phone className="h-4 w-4 text-primary-600" />
                    <span>📱 Mobile Number</span>
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    maxLength={10}
                    inputMode="numeric"
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    placeholder="Enter 10-digit mobile number"
                  />
                  {formData.mobile && formData.mobile.length < 10 && (
                    <p className="text-red-500 text-xs mt-1">Mobile number must be 10 digits</p>
                  )}
                </div>
              </div>

              {/* Row 4: Health Goals */}
              <div className="mb-6">
                <label htmlFor="healthGoals" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <Heart className="h-4 w-4 text-primary-600" />
                  <span>🏥 Health Issues / Fitness Goals</span>
                </label>
                <textarea
                  id="healthGoals"
                  name="healthGoals"
                  value={formData.healthGoals}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-sm"
                  placeholder="Tell us about any health issues you have or your specific fitness goals..."
                />
              </div>

              {/* Error */}
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              {/* Submit */}
              <div className="mt-auto">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 px-8 py-3 text-base font-semibold w-full"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Get My Free Consultation'
                  )}
                </Button>

                <p className="text-xs text-gray-500 mt-3 text-center">
                  🔒 Your information is secure and will only be used to provide you with personalized health guidance.
                </p>
              </div>
            </form>
          </div>

          {/* Money Back Guarantee Poster */}
          <div className="bg-white rounded-3xl p-6 shadow-xl flex flex-col">
            <div className="flex-1 flex flex-col">
              {/* Poster */}
             

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-green-500 mr-3" />
                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                    Risk-Free Guarantee
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  100% Money-Back
                  <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent block">
                    Guarantee
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We're so confident in our proven transformation system that we offer a complete money-back guarantee.
                  Your success is our commitment.
                </p>

                {/* Guarantee Features */}
                <div className="space-y-3 mb-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-3">Our Promise to You:</h3>
                  {[
                    "If you don't see results in 30 days, get 100% money back",
                    'Follow our program exactly as prescribed',
                    'Get personalized support throughout your journey',
                    'No questions asked refund policy',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Trust Indicators */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 mb-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-green-600 mb-1">500+</div>
                      <div className="text-xs text-gray-600">Success Stories</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-green-600 mb-1">98%</div>
                      <div className="text-xs text-gray-600">Success Rate</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-1">
                        <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                        <span className="text-xl font-bold text-green-600 ml-1">4.9</span>
                      </div>
                      <div className="text-xs text-gray-600">Client Rating</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}