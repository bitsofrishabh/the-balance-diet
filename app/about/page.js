import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Users, 
  Heart,
  Target,
  BookOpen,
  CheckCircle,
  MessageCircle,
  Phone,
  Star,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react';

export const metadata = {
  title: 'About Us - Meet Our Expert Team',
  description: 'Learn about The Balance Diet team of certified nutritionists and health coaches dedicated to transforming lives through personalized nutrition.',
};

export default function AboutPage() {
  const whatsappNumber = '+1234567890';
  const whatsappMessage = 'Hi! I would like to know more about The Balance Diet programs.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary-100 text-primary-700">
              <Heart className="w-4 h-4 mr-2" />
              About The Balance Diet
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Meet the Expert Behind
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent block"> Your Transformation </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dedicated to helping you achieve lasting health transformation through personalized nutrition, 
              expert guidance, and proven wellness strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Dr. Sarah Johnson - Lead Nutritionist"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">500+</div>
                    <div className="text-xs text-gray-600">Success Stories</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary-600">8+</div>
                    <div className="text-xs text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Dr. Sarah Johnson
                </h2>
                <p className="text-lg text-primary-600 font-semibold mb-4">
                  Lead Nutritionist & Wellness Coach
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  With over 8 years of experience in clinical nutrition and wellness coaching, 
                  Dr. Sarah Johnson has dedicated her career to helping people achieve sustainable 
                  health transformations. Her evidence-based approach combines the latest nutritional 
                  science with personalized care to deliver results that last.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  After witnessing countless people struggle with restrictive diets and quick fixes, 
                  Dr. Johnson founded The Balance Diet to provide a different approach - one that 
                  focuses on balance, sustainability, and long-term health rather than short-term results.
                </p>
              </div>

              {/* Credentials */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Credentials & Expertise</h3>
                <div className="space-y-3">
                  {[
                    'Ph.D. in Clinical Nutrition, Harvard University',
                    'Certified Nutrition Specialist (CNS)',
                    'Registered Dietitian Nutritionist (RDN)',
                    'Certified Diabetes Educator (CDE)',
                    'Functional Medicine Certified Practitioner',
                    'Member, Academy of Nutrition and Dietetics'
                  ].map((credential, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{credential}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specializations */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Areas of Specialization</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Weight Management',
                    'Diabetes Care',
                    'PCOS/PCOD',
                    'Thyroid Disorders',
                    'Women\'s Health',
                    'Sports Nutrition',
                    'Digestive Health',
                    'Heart Health'
                  ].map((specialization, index) => (
                    <div key={index} className="bg-primary-50 text-primary-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
                      {specialization}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide our approach to health and wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Personalized Approach',
                description: 'Every individual is unique, and so should be their nutrition plan. We create customized solutions based on your specific needs, preferences, and lifestyle.'
              },
              {
                icon: BookOpen,
                title: 'Evidence-Based Methods',
                description: 'All our recommendations are backed by the latest scientific research and proven methodologies in nutrition science and behavioral psychology.'
              },
              {
                icon: Heart,
                title: 'Sustainable Results',
                description: 'We focus on creating lasting lifestyle changes rather than quick fixes. Our goal is to help you maintain your results for life.'
              }
            ].map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="bg-primary-100 p-3 rounded-xl inline-flex mb-4">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <div className="bg-primary-500 p-3 rounded-xl inline-flex mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower individuals to achieve lasting health transformation through personalized 
                nutrition guidance, evidence-based strategies, and compassionate support. We believe 
                that everyone deserves to feel confident, energetic, and healthy in their own body.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-8">
              <div className="bg-secondary-500 p-3 rounded-xl inline-flex mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To create a world where sustainable health and wellness is accessible to everyone, 
                regardless of their starting point. We envision a future where people have the 
                knowledge, tools, and support they need to live their healthiest, happiest lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These numbers represent real people whose lives have been transformed through our programs.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                number: '500+',
                label: 'Lives Transformed',
                description: 'People who achieved their health goals'
              },
              {
                icon: Award,
                number: '98%',
                label: 'Success Rate',
                description: 'Clients who reach their target'
              },
              {
                icon: Clock,
                number: '12 weeks',
                label: 'Average Time',
                description: 'To see significant results'
              },
              {
                icon: Star,
                number: '4.9/5',
                label: 'Client Rating',
                description: 'Average satisfaction score'
              }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-primary-50 p-3 rounded-xl inline-flex mb-3 group-hover:bg-primary-100 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-gray-700 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards your health goals with a free discovery call. 
            Let's discuss how we can help you achieve lasting transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4">
                <MessageCircle className="mr-2 h-5 w-5" />
                Claim Your Free Discovery Call Today
              </Button>
            </a>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-sm text-primary-100">
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              100% Confidential
            </div>
            <div className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              Certified Expert
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              500+ Success Stories
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}