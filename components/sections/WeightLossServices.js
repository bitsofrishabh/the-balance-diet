'use client';

import { 
  GraduationCap, 
  Heart, 
  Activity, 
  Shield, 
  Users, 
  Stethoscope, 
  Baby,
  MessageCircle
} from 'lucide-react';

export function WeightLossServices() {
  const whatsappNumber = '+1234567890';
  const whatsappMessage = 'Hi! I would like to know more about your weight loss services.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const services = [
    {
      icon: GraduationCap,
      title: 'College/Busy Professional Plan',
      description: 'Minimal-cook meals, tiffin ideas, and budget-friendly shopping list. Structure for irregular schedules, late nights, and hostel/PG realities.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Heart,
      title: 'Wedding / Event Transformation (8–12 Weeks)',
      description: 'Time-bound plan for visible change before your big day. Structured weekly milestones, outfit-friendly measurements, and travel/eating-out strategies.',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      icon: Activity,
      title: 'Diabetes/Prediabetes Weight Loss',
      description: 'Balanced plates with carb timing, SMBG-friendly swaps, and step goals to improve insulin sensitivity. Practical dal-sabzi-roti strategies you can actually follow.',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: Shield,
      title: 'Thyroid-Friendly Fat Loss',
      description: 'Thyroid-supportive nutrition, fiber and protein targets, and fatigue-aware workouts. We focus on consistency and realistic pacing—no extreme deficits.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Users,
      title: 'PCOS/PCOD Weight Management',
      description: 'Low-GI, high-protein Indian meals with cycle-wise tweaks, strength training guidance, and symptom tracking (cravings, energy, skin). Sustainable, not restrictive.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Stethoscope,
      title: 'Heart-Healthy & Cholesterol Control',
      description: 'Smarter fats, high-fiber Indian staples, and portion guidance. Progress tracked via inches, energy, and (optionally) lipid panels with your physician\'s advice.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      icon: Baby,
      title: 'Post-Partum Slim & Strong',
      description: 'Gentle, nourishing meal plans and regain-strength routines. Focus on energy, lactation-safe options (if applicable), and realistic weight pacing with sleep constraints.',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Weight Loss Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized programs designed for your unique health needs and lifestyle. 
            Choose the service that best fits your situation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className={`${service.bgColor} p-3 rounded-xl inline-flex mb-4`}>
                  <IconComponent className={`h-8 w-8 ${service.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not Sure Which Service is Right for You?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our experts will help you choose the perfect program based on your health goals, 
              lifestyle, and specific needs. Get personalized recommendations today.
            </p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg inline-flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Expert Guidance
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}