'use client';

import { 
  Scale, 
  Heart, 
  Activity, 
  Baby,
  MessageCircle
} from 'lucide-react';

export function WeightLossServices() {
  const whatsappNumber = '+919149081034';
  const whatsappMessage = 'Hi! I would like to know more about your weight loss services.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const serviceCategories = [
    {
      title: 'Weight Management',
      description: 'Our customized programs support you in finding healthy habits that optimize both physical and mental well-being.',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755512661/6_cegyzc.png',
      bgColor: 'bg-gradient-to-br from-orange-400 to-orange-500',
      services: ['Weight Loss', 'Weight Gain']
    },
    {
      title: 'Disease Management',
      description: 'Our team offers personalised disease management creating customised nutrition plans, incorporating healthy habits, and empowering you with knowledge to manage your condition and live a full, active life.',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755512661/7_dblzdh.png',
      bgColor: 'bg-gradient-to-br from-teal-400 to-teal-500',
      services: ['Thyroid', 'PCOS', 'Diabetes', 'Cardiac',]
    },
    {
      title: 'Women Care Diet',
      description: 'We provide personalised dietary plans specifically designed for pregnancy, lactation, postpartum, and even menopause. Let us guide you with the right nutrition to feel your best and support your body throughout life\'s precious milestones.',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1755512661/8_tyeqdf.png',
      bgColor: 'bg-gradient-to-br from-pink-400 to-pink-500',
      services: ['Pregnancy', 'Lactation', 'Postpartum', 'Menopause']
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Programs offered by The Balance Diet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand that weight loss is a personal journey. Our customized programs support you in finding healthy habits that optimize both physical and mental well-being.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-12">
          {serviceCategories.map((category, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
              {/* Image Section */}
              <div className="lg:w-1/3">
                <div className={`${category.bgColor} rounded-2xl p-6 text-white relative overflow-hidden`}>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 text-center">
                      {category.title}
                    </h3>
                  </div>
                  <div className="mt-4">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-2/3">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {category.description}
                </p>
                
                {/* Service Buttons */}
                <div className="flex flex-wrap gap-3">
                  {category.services.map((service, serviceIndex) => (
                    <a
                      key={serviceIndex}
                      href="#health-assessment"
                      onClick={(e) => {
                        e.preventDefault();
                        const healthAssessmentSection = document.getElementById('health-assessment');
                        if (healthAssessmentSection) {
                          healthAssessmentSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="inline-block px-6 py-3 border-2 border-gray-300 rounded-full text-gray-700 hover:border-primary-500 hover:text-primary-600 transition-all duration-300 font-medium cursor-pointer"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}