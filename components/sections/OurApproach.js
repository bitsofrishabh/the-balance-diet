import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Brain, 
  Heart, 
  Users,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  Microscope,
  BookOpen,
  Award
} from 'lucide-react';

export function OurApproach() {
  const principles = [
    {
      icon: Microscope,
      title: 'Science-Based Foundation',
      description: 'Every recommendation is backed by peer-reviewed research and proven methodologies in nutrition science and behavioral psychology.',
      details: ['Evidence-based nutrition protocols', 'Metabolic optimization techniques', 'Biomarker-driven adjustments', 'Clinical research validation']
    },
    {
      icon: Target,
      title: 'Personalized Precision',
      description: 'We analyze your unique metabolism, lifestyle, preferences, and goals to create a truly customized transformation plan.',
      details: ['Comprehensive health assessment', 'Metabolic typing analysis', 'Lifestyle integration', 'Personal preference mapping']
    },
    {
      icon: Brain,
      title: 'Behavioral Psychology',
      description: 'Sustainable change requires addressing the mind as well as the body. We use proven psychological techniques to build lasting habits.',
      details: ['Habit formation strategies', 'Mindset coaching', 'Stress management', 'Emotional eating solutions']
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'You\'re not alone in this journey. Our community of like-minded individuals provides motivation, accountability, and shared experiences.',
      details: ['Peer support groups', 'Success story sharing', 'Accountability partners', 'Expert-moderated forums']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary-100 text-primary-700">
            <Award className="w-4 h-4 mr-2" />
            Our Proven Approach
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"> Science-Based </span>
            Methodology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge nutrition science, behavioral psychology, and personalized coaching 
            to create sustainable health transformations that last a lifetime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Traditional Diets Fail</h3>
              <ul className="space-y-3">
                {[
                  'One-size-fits-all approach',
                  'Ignore individual metabolism',
                  'Focus on restriction, not nourishment',
                  'Lack of behavioral support',
                  'No long-term maintenance plan'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
              <ul className="space-y-3">
                {[
                  'Personalized for your unique body',
                  'Optimize your individual metabolism',
                  'Focus on nourishing your body',
                  'Comprehensive behavioral support',
                  'Lifetime maintenance strategies'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-primary-100">
                    <CheckCircle className="w-5 h-5 text-primary-200 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {principles.map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-xl">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {principle.description}
                    </p>
                    <ul className="space-y-2">
                      {principle.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience Our Proven Approach?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join thousands who have transformed their health with our science-based methodology. 
              Your journey starts with understanding your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4">
                View Our Programs
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}