'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Award
} from 'lucide-react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      age: 34,
      weightLoss: '28 lbs',
      timeframe: '4 months',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      video: '#',
      rating: 5,
      quote: "HealthTransform didn't just help me lose weight - it completely changed my relationship with food and my body. I now have energy I haven't felt in years!",
      results: ['Lost 28 lbs', 'Increased energy', 'Better sleep', 'Improved confidence']
    },
    {
      name: 'Michael Chen',
      age: 42,
      weightLoss: '35 lbs',
      timeframe: '6 months',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
      video: '#',
      rating: 5,
      quote: "After years of failed diets, I finally found a sustainable approach. The personalized coaching made all the difference in my success.",
      results: ['Lost 35 lbs', 'Lowered blood pressure', 'Gained muscle', 'Lifestyle transformation']
    },
    {
      name: 'Emily Rodriguez',
      age: 29,
      weightLoss: '22 lbs',
      timeframe: '3 months',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      video: '#',
      rating: 5,
      quote: "The support and guidance I received was incredible. I learned to love healthy food and my body feels amazing. This isn't just a diet - it's a lifestyle.",
      results: ['Lost 22 lbs', 'Reduced anxiety', 'Better digestion', 'Newfound confidence']
    },
    {
      name: 'David Thompson',
      age: 38,
      weightLoss: '31 lbs',
      timeframe: '5 months',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300',
      video: '#',
      rating: 5,
      quote: "I was skeptical at first, but the results speak for themselves. I've never felt healthier or more confident in my life.",
      results: ['Lost 31 lbs', 'Improved stamina', 'Better mood', 'Healthier habits']
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Award className="h-8 w-8 text-primary-600 mr-2" />
            <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
              Real Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transformations That Inspire
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See how real people have transformed their lives 
            with our personalized approach to health and wellness.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left - Image/Video */}
              <div className="relative">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:bg-white group-hover:scale-110 transition-all">
                    <Play className="h-8 w-8 text-primary-600 ml-1" />
                  </div>
                </button>
                
                {/* Results Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">-{currentTestimonial.weightLoss}</div>
                    <div className="text-xs text-gray-600">in {currentTestimonial.timeframe}</div>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="p-8 lg:p-12">
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary-200" />
                  <p className="text-lg text-gray-700 leading-relaxed italic pl-6">
                    "{currentTestimonial.quote}"
                  </p>
                </div>

                {/* Name and Details */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-gray-600">Age {currentTestimonial.age}</p>
                </div>

                {/* Results */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {currentTestimonial.results.map((result, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentIndex ? 'bg-primary-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevTestimonial}
                      className="p-2"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextTestimonial}
                      className="p-2"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands who have already transformed their lives. Your journey starts with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700">
              Start Your Transformation
            </Button>
            <Button variant="outline" size="lg">
              View More Success Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}