'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Heart,
  Award
} from 'lucide-react';

export function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      age: 34,
      weightLoss: '28 lbs',
      timeframe: '4 months',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      quote: "The Balance Diet didn't just help me lose weight - it completely changed my relationship with food and my body. I now have energy I haven't felt in years!",
      results: ['Lost 28 lbs', 'Increased energy', 'Better sleep', 'Improved confidence']
    },
    {
      name: 'Michael Chen',
      age: 42,
      weightLoss: '35 lbs',
      timeframe: '6 months',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
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
      rating: 5,
      quote: "I was skeptical at first, but the results speak for themselves. I've never felt healthier or more confident in my life.",
      results: ['Lost 31 lbs', 'Improved stamina', 'Better mood', 'Healthier habits']
    },
    {
      name: 'Lisa Martinez',
      age: 31,
      weightLoss: '26 lbs',
      timeframe: '4 months',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      quote: "The Balance Diet team understood my busy lifestyle and created a plan that actually worked for me. I'm so grateful for this transformation!",
      results: ['Lost 26 lbs', 'Better work-life balance', 'Increased productivity', 'Happier mindset']
    },
    {
      name: 'James Wilson',
      age: 45,
      weightLoss: '40 lbs',
      timeframe: '7 months',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      quote: "This program saved my health and probably my life. The comprehensive approach addressed not just weight loss but overall wellness.",
      results: ['Lost 40 lbs', 'Reversed pre-diabetes', 'Improved heart health', 'Active lifestyle']
    }
  ];

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
  };

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Award className="h-8 w-8 text-primary-600 mr-2" />
            <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from real people who have transformed their lives 
            with The Balance Diet's personalized approach to health and wellness.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden mb-8">
            <div className="flex space-x-6 overflow-x-auto pb-4 px-4 -mx-4 scrollbar-hide">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Client Image */}
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-primary-100"
                    />
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">Age {testimonial.age}</p>
                      <div className="flex items-center mt-1">
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-4">
                    <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary-200" />
                    <p className="text-gray-700 leading-relaxed italic pl-4">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Results */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">-{testimonial.weightLoss}</div>
                        <div className="text-xs text-gray-500">Weight Lost</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary-600">{testimonial.timeframe}</div>
                        <div className="text-xs text-gray-500">Duration</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {testimonial.results.slice(0, 4).map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-xs text-gray-600">
                          <Heart className="h-3 w-3 text-primary-400 mr-1 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Mobile Navigation Arrows */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => document.querySelector('.overflow-x-auto').scrollBy({ left: -320, behavior: 'smooth' })}
                className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={() => document.querySelector('.overflow-x-auto').scrollBy({ left: 320, behavior: 'smooth' })}
                className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div 
                key={`${currentIndex}-${index}`}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Client Image */}
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-primary-100"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">Age {testimonial.age}</p>
                    <div className="flex items-center mt-1">
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary-200" />
                  <p className="text-gray-700 leading-relaxed italic pl-4">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Results */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">-{testimonial.weightLoss}</div>
                      <div className="text-xs text-gray-500">Weight Lost</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary-600">{testimonial.timeframe}</div>
                      <div className="text-xs text-gray-500">Duration</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {testimonial.results.slice(0, 4).map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-xs text-gray-600">
                        <Heart className="h-3 w-3 text-primary-400 mr-1 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonials}
              className="p-3 rounded-full hover:bg-primary-50 hover:border-primary-200 transition-all group"
            >
              <ChevronLeft className="h-5 w-5 group-hover:text-primary-600" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 3)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    Math.floor(currentIndex / 3) === index 
                      ? 'bg-primary-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonials}
              className="p-3 rounded-full hover:bg-primary-50 hover:border-primary-200 transition-all group"
            >
              <ChevronRight className="h-5 w-5 group-hover:text-primary-600" />
            </Button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6">
              Your transformation story could be next. Start your journey with a free consultation 
              and discover how we can help you achieve your health goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700">
                Start Your Transformation
              </Button>
              <Button variant="outline" size="lg">
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}