import { MapPin, Users, Award, Clock, Phone } from 'lucide-react';
import { NAP, NAP_DATA } from './NAP';

export function LocalContent() {
  const serviceAreas = [
    {
      name: "Delhi",
      description: "Serving Central Delhi, South Delhi, and North Delhi with personalized nutrition coaching",
      landmarks: ["Connaught Place", "India Gate", "Red Fort", "Lotus Temple"]
    },
    {
      name: "Gurgaon", 
      description: "Professional nutrition services for Gurgaon's corporate professionals and families",
      landmarks: ["Cyber City", "DLF Phase 1-5", "Golf Course Road", "Sohna Road"]
    },
    {
      name: "Noida",
      description: "Comprehensive health and nutrition programs for Noida residents",
      landmarks: ["Sector 18", "Greater Noida", "Noida Extension", "Film City"]
    },
    {
      name: "Faridabad",
      description: "Expert dietary guidance and weight management services in Faridabad",
      landmarks: ["Sector 15", "NIT Faridabad", "Ballabhgarh", "Palwal Road"]
    }
  ];

  const localStats = [
    { number: "300+", label: "Delhi NCR Clients Served" },
    { number: "4.9★", label: "Average Rating" },
    { number: "95%", label: "Client Success Rate" },
    { number: "5+", label: "Years Serving Delhi" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Local Hero */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Delhi NCR's Trusted Nutrition Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Serving Delhi, Gurgaon, Noida, and Faridabad with personalized nutrition coaching 
            and proven weight loss programs tailored for Indian lifestyles.
          </p>
          
          {/* NAP Information */}
          <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
            <NAP layout="horizontal" showEmail={true} />
          </div>
        </div>

        {/* Local Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {localStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Service Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Areas We Serve in Delhi NCR
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Nutrition Services in {area.name}
                    </h4>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.landmarks.map((landmark, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {landmark}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Local Testimonials */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What Delhi NCR Clients Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya S.",
                location: "South Delhi",
                text: "Lost 15kg in 4 months with their personalized Indian meal plans. Perfect for Delhi lifestyle!",
                rating: 5
              },
              {
                name: "Rahul M.", 
                location: "Gurgaon",
                text: "As a working professional in Cyber City, their flexible approach helped me stay consistent.",
                rating: 5
              },
              {
                name: "Sneha K.",
                location: "Noida",
                text: "Finally found nutritionists who understand North Indian food preferences. Excellent results!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Local CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Health Journey in Delhi NCR?
          </h3>
          <p className="text-gray-600 mb-8">
            Join hundreds of satisfied clients across Delhi, Gurgaon, Noida, and Faridabad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${NAP_DATA.phone}`}
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: {NAP_DATA.phone}
            </a>
            <a 
              href="#health-assessment"
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}