import { 
  UserCheck, 
  Target, 
  Calendar, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      step: 1,
      icon: UserCheck,
      title: 'Free Discovery Call',
      description: 'We start with a comprehensive assessment of your current health, goals, and lifestyle to create your personalized roadmap.',
      details: ['Health & lifestyle assessment', 'Goal setting session', 'Program recommendation', 'Q&A with our experts']
    },
    {
      step: 2,
      icon: Target,
      title: 'Custom Plan Creation',
      description: 'Our experts design a tailored nutrition and wellness plan specifically for your body, preferences, and schedule.',
      details: ['Personalized meal plans', 'Custom workout routines', 'Supplement recommendations', 'Habit-building strategies']
    },
    {
      step: 3,
      icon: Calendar,
      title: 'Guided Implementation',
      description: 'Start your transformation with daily support, weekly check-ins, and adjustments to keep you on track.',
      details: ['Daily coaching support', 'Weekly progress reviews', 'Plan adjustments', 'Motivation & accountability']
    },
    {
      step: 4,
      icon: TrendingUp,
      title: 'Achieve & Maintain',
      description: 'Reach your goals and learn to maintain your results with lifelong healthy habits and ongoing support.',
      details: ['Goal achievement', 'Maintenance strategies', 'Lifestyle integration', 'Continued support']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process has helped thousands achieve lasting health transformation with The Balance Diet. 
            Here's exactly how we'll help you succeed.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center">
              {steps.slice(0, -1).map((_, index) => (
                <div key={index} className="flex-1 h-0.5 bg-gradient-to-r from-primary-200 to-primary-300 mx-8" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8 mb-4">
                      <ArrowRight className="h-6 w-6 text-primary-400" />
                    </div>
                  )}

                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative z-10">
                    {/* Step Number */}
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto lg:mx-0">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className="bg-primary-50 p-3 rounded-xl inline-flex mb-4">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Take the First Step?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Your transformation journey starts with a simple conversation. 
              Book your free discovery call today and let's create your personalized success plan.
            </p>
            <button className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl">
              Book Your Free Discovery Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}