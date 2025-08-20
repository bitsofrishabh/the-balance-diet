import { 
  Users, 
  Trophy, 
  Clock, 
  Star,
  TrendingUp,
  Heart
} from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Users,
      number: '300+',
      label: 'Lives Transformed',
      description: 'People who achieved their health goals'
    },
    {
      icon: Trophy,
      number: '95%',
      label: 'Success Rate',
      description: 'Clients who reach their target weight'
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
    },
    {
      icon: TrendingUp,
      number: '15kg ',
      label: 'Average Loss',
      description: 'Weight lost by participants'
    },
    {
      icon: Heart,
      number: '99%',
      label: 'Feel Better',
      description: 'Report improved energy levels'
    }
  ];

  return (
    <section className="py-10 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Proven Results You Can Trust
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our numbers speak for themselves. Join a community of successful transformations.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => {
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
  );
}