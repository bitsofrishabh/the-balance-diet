// Location-specific landing pages for local SEO
import { MapPin, Phone, Star, Users, Award, MessageCircle } from 'lucide-react';
import { NAP } from './NAP';

export function LocationLandingPage({ 
  city = "Delhi",
  landmarks = ["Connaught Place", "India Gate", "Red Fort"],
  description = "Expert nutrition coaching and weight loss programs",
  testimonials = []
}) {
  const pageTitle = `Best Nutritionist in ${city} | Weight Loss Expert | The Balance Diet`;
  const pageDescription = `Top-rated nutritionist in ${city}. Personalized weight loss programs, PCOS management, diabetes diet plans. Book your consultation today!`;

  return (
    <div className="min-h-screen bg-white">
      {/* Local Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Best Nutritionist in {city}
              <span className="block text-primary-600">Transform Your Health Today</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {description} in {city}. Serving {landmarks.join(', ')} and surrounding areas 
              with personalized nutrition plans and proven weight loss strategies.
            </p>

            {/* Local Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">50+</div>
                <div className="text-gray-600">{city} Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">4.9★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+91-9149081034"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91-9149081034
              </a>
              <a 
                href="#consultation"
                className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services in City */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nutrition Services in {city}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: `Weight Loss Programs in ${city}`,
                description: `Personalized weight loss coaching for ${city} residents with sustainable results.`,
                icon: TrendingDown
              },
              {
                title: `PCOS Management in ${city}`,
                description: `Specialized PCOS diet plans designed for women in ${city} and surrounding areas.`,
                icon: Heart
              },
              {
                title: `Diabetes Diet Planning in ${city}`,
                description: `Expert diabetes nutrition counseling for ${city} patients with proven results.`,
                icon: Shield
              }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-primary-100 p-3 rounded-xl inline-flex mb-4">
                    <IconComponent className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What {city} Clients Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.length > 0 ? testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            )) : (
              // Default testimonials if none provided
              [
                {
                  name: "Priya S.",
                  text: `Amazing results with personalized nutrition plans. Perfect for ${city} lifestyle!`,
                  location: city
                },
                {
                  name: "Rahul M.",
                  text: `Professional and effective approach. Highly recommend for ${city} residents.`,
                  location: city
                },
                {
                  name: "Sneha K.",
                  text: `Finally found a nutritionist who understands local food preferences in ${city}.`,
                  location: city
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Local Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Health Journey in {city}?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of satisfied clients in {city} who have transformed their health with our expert guidance.
          </p>
          
          {/* Contact Info */}
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
            <NAP layout="horizontal" showEmail={true} className="justify-center" />
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/919149081034?text=Hi! I'm from ${city} and interested in your nutrition services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Now
            </a>
            <a 
              href="#consultation"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Book Free Assessment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Pre-built location pages
export const DelhiNutritionistPage = () => (
  <LocationLandingPage 
    city="Delhi"
    landmarks={["Connaught Place", "India Gate", "Red Fort", "Lotus Temple"]}
    description="Expert nutrition coaching and weight loss programs"
  />
);

export const GurgaonNutritionistPage = () => (
  <LocationLandingPage 
    city="Gurgaon"
    landmarks={["Cyber City", "DLF Phase 1-5", "Golf Course Road", "Sohna Road"]}
    description="Professional nutrition services for corporate professionals and families"
  />
);

export const NoidaNutritionistPage = () => (
  <LocationLandingPage 
    city="Noida"
    landmarks={["Sector 18", "Greater Noida", "Noida Extension", "Film City"]}
    description="Comprehensive health and nutrition programs"
  />
);

export const FaridabadNutritionistPage = () => (
  <LocationLandingPage 
    city="Faridabad"
    landmarks={["Sector 15", "NIT Faridabad", "Ballabhgarh", "Palwal Road"]}
    description="Expert dietary guidance and weight management services"
  />
);