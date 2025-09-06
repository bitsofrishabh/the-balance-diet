import { Star, MapPin, Clock, Phone, Globe, MessageCircle } from 'lucide-react';

export function GoogleBusinessProfile() {
  const businessData = {
    name: "The Balance Diet",
    rating: 4.9,
    reviewCount: 150,
    address: "Delhi, India",
    phone: "+91-9149081034",
    website: "https://thebalancediet.com",
    hours: "Mon-Fri: 9AM-6PM, Sat: 9AM-4PM",
    category: "Nutritionist"
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm">
      {/* Business Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          {businessData.name}
        </h3>
        <p className="text-gray-600 text-sm">{businessData.category}</p>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gray-900 mr-2">
            {businessData.rating}
          </span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-5 h-5 ${
                  i < Math.floor(businessData.rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
        </div>
        <span className="text-gray-600 ml-2">
          ({businessData.reviewCount} reviews)
        </span>
      </div>

      {/* Business Info */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-gray-700">
          <MapPin className="w-4 h-4 mr-3 text-gray-500" />
          <span className="text-sm">{businessData.address}</span>
        </div>
        
        <div className="flex items-center text-gray-700">
          <Clock className="w-4 h-4 mr-3 text-gray-500" />
          <span className="text-sm">{businessData.hours}</span>
        </div>
        
        <div className="flex items-center text-gray-700">
          <Phone className="w-4 h-4 mr-3 text-gray-500" />
          <a 
            href={`tel:${businessData.phone}`}
            className="text-sm hover:text-primary-600 transition-colors"
          >
            {businessData.phone}
          </a>
        </div>
        
        <div className="flex items-center text-gray-700">
          <Globe className="w-4 h-4 mr-3 text-gray-500" />
          <a 
            href={businessData.website}
            className="text-sm hover:text-primary-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2">
        <a
          href={`tel:${businessData.phone}`}
          className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
        >
          <Phone className="w-4 h-4 mr-2" />
          Call Now
        </a>
        
        <a
          href={`https://wa.me/919149081034?text=Hi! I found you on Google and would like to know more about your nutrition services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </a>
        
        <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors">
          Get Directions
        </button>
      </div>

      {/* Google Business Profile Integration Note */}
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-xs text-blue-800">
          <strong>Google Business Profile Tips:</strong>
          <br />• Keep business hours updated
          <br />• Respond to all reviews
          <br />• Post regular updates & photos
          <br />• Use relevant keywords in description
        </p>
      </div>
    </div>
  );
}

// Google Business Profile Integration Instructions Component
export function GBPIntegrationGuide() {
  const steps = [
    {
      title: "Claim Your Google Business Profile",
      description: "Go to business.google.com and claim your listing",
      action: "Verify your business address and phone number"
    },
    {
      title: "Complete Your Profile",
      description: "Add all business information, photos, and services",
      action: "Use keywords like 'nutritionist Delhi', 'weight loss coach'"
    },
    {
      title: "Optimize for Local SEO",
      description: "Add relevant categories and service areas",
      action: "Select 'Nutritionist' as primary category"
    },
    {
      title: "Encourage Reviews",
      description: "Ask satisfied clients to leave Google reviews",
      action: "Respond to all reviews professionally"
    },
    {
      title: "Post Regular Updates",
      description: "Share success stories, tips, and business updates",
      action: "Post 2-3 times per week for better visibility"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Google Business Profile Optimization Guide
      </h3>
      
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
              {index + 1}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
              <p className="text-gray-600 mb-2">{step.description}</p>
              <p className="text-sm text-primary-600 font-medium">{step.action}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">Pro Tips:</h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Use location-specific keywords in your business description</li>
          <li>• Upload high-quality photos of your office/consultation setup</li>
          <li>• Add your service areas (Delhi, Gurgaon, Noida, Faridabad)</li>
          <li>• Enable messaging to allow direct customer contact</li>
          <li>• Monitor insights to track profile performance</li>
        </ul>
      </div>
    </div>
  );
}