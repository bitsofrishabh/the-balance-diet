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
  MessageCircle
} from 'lucide-react';

export function LeadGenerationForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    height: '',
    weight: '',
    goalWeight: '',
    profession: '',
    mobile: '',
    healthGoals: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Mobile number validation - only allow digits and limit to 10 digits
    if (name === 'mobile') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({
        ...prev,
        [name]: numericValue
      }));
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validate mobile number
    if (formData.mobile.length !== 10) {
      setError('Please enter a valid 10-digit mobile number.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Google Apps Script Web App URL - Replace with your actual URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw5hp-urd3G7-kEquq721b2JjP0S4r5_UjMAwR17YXupLl8veqLdt_HK27kVqKUBVulOQ/exec';
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'Website Lead Form'
        })
      });

      // Since we're using no-cors mode, we can't read the response
      // We'll assume success if no error is thrown
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        age: '',
        city: '',
        height: '',
        weight: '',
        goalWeight: '',
        profession: '',
        mobile: '',
        healthGoals: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setError('There was an error submitting your information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = '+1234567890';
  const whatsappMessage = `Hi! I just filled out the health assessment form. My details: Name: ${formData.name}, Age: ${formData.age}, Mobile: ${formData.mobile}, Goal: ${formData.healthGoals}. I'd like to discuss my transformation journey.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  if (isSubmitted) {
    return (
      <section className="py-12 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="bg-green-100 p-4 rounded-full inline-flex mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Thank You for Your Interest!
            </h3>
            <p className="text-gray-600 mb-6">
              We've received your health information and our expert team will review it shortly. 
              Get ready to start your transformation journey!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-500 hover:bg-green-600 px-8 py-3">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Continue on WhatsApp
                </Button>
              </a>
              <Button 
                variant="outline" 
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3"
              >
                Submit Another Form
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Free Health Assessment
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Share your health information with us and get a personalized consultation 
            to kickstart your wellness journey.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 text-white text-center">
            <h3 className="text-xl font-semibold mb-2">Free Health Assessment</h3>
            <p className="text-primary-100">Tell us about yourself and your goals</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            {/* Row 1: Name, Age, City */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4 mr-2 text-primary-600" />
                  📝 Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Age */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="h-4 w-4 mr-2 text-primary-600" />
                  🎂 Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  min="18"
                  max="80"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your age"
                />
              </div>

              {/* City */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="h-4 w-4 mr-2 text-primary-600" />
                  🏠 City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your city"
                />
              </div>
            </div>

            {/* Row 2: Height, Weight, Goal Weight */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Height */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Ruler className="h-4 w-4 mr-2 text-primary-600" />
                  ⬆️ Height (cm)
                </label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  required
                  min="120"
                  max="220"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter height in cm"
                />
              </div>

              {/* Weight */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Scale className="h-4 w-4 mr-2 text-primary-600" />
                  ⚖️ Current Weight (kg)
                </label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  required
                  min="30"
                  max="200"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter current weight in kg"
                />
              </div>

              {/* Goal Weight */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Target className="h-4 w-4 mr-2 text-primary-600" />
                  🔥 Goal Weight (kg)
                </label>
                <input
                  type="number"
                  name="goalWeight"
                  value={formData.goalWeight}
                  onChange={handleInputChange}
                  required
                  min="30"
                  max="200"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter goal weight in kg"
                />
              </div>
            </div>

            {/* Row 3: Profession, Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Profession */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Briefcase className="h-4 w-4 mr-2 text-primary-600" />
                  💼 Work/Profession
                </label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your profession or work"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Phone className="h-4 w-4 mr-2 text-primary-600" />
                  📱 Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  maxLength="10"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter 10-digit mobile number"
                />
                {formData.mobile && formData.mobile.length < 10 && (
                  <p className="text-red-500 text-xs mt-1">Mobile number must be 10 digits</p>
                )}
              </div>
            </div>

            {/* Row 4: Health Goals (Full Width) */}
            <div className="mb-6">
              {/* Health Goals */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Heart className="h-4 w-4 mr-2 text-primary-600" />
                  🏥 Health Issues/Fitness Goals
                </label>
                <textarea
                  name="healthGoals"
                  value={formData.healthGoals}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Tell us about any health issues you have or your specific fitness goals..."
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 px-12 py-4 text-lg font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Get My Free Consultation'
                )}
              </Button>
              
              <p className="text-sm text-gray-500 mt-4">
                🔒 Your information is secure and will only be used to provide you with personalized health guidance.
              </p>
            </div>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              Free Consultation
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              Expert Nutritionists
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              Personalized Plans
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}