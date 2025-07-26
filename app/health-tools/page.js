'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calculator, 
  Target, 
  Activity,
  Heart,
  TrendingUp,
  Scale,
  Zap,
  Calendar,
  Info
} from 'lucide-react';

export default function HealthToolsPage() {
  const [activeCalculator, setActiveCalculator] = useState('bmi');
  
  // BMI Calculator State
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('metric');
  
  // BMR Calculator State
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');

  // Calculate BMI
  const calculateBMI = () => {
    if (!height || !weight) return null;
    
    let heightInM = unit === 'metric' ? parseFloat(height) / 100 : parseFloat(height) * 0.0254;
    let weightInKg = unit === 'metric' ? parseFloat(weight) : parseFloat(weight) * 0.453592;
    
    const bmi = weightInKg / (heightInM * heightInM);
    return bmi.toFixed(1);
  };

  // Get BMI Category
  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return { category: 'Underweight', color: 'text-blue-600' };
    if (bmi < 25) return { category: 'Normal weight', color: 'text-green-600' };
    if (bmi < 30) return { category: 'Overweight', color: 'text-yellow-600' };
    return { category: 'Obese', color: 'text-red-600' };
  };

  // Calculate BMR
  const calculateBMR = () => {
    if (!height || !weight || !age) return null;
    
    let heightInCm = unit === 'metric' ? parseFloat(height) : parseFloat(height) * 2.54;
    let weightInKg = unit === 'metric' ? parseFloat(weight) : parseFloat(weight) * 0.453592;
    
    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weightInKg) + (4.799 * heightInCm) - (5.677 * parseFloat(age));
    } else {
      bmr = 447.593 + (9.247 * weightInKg) + (3.098 * heightInCm) - (4.330 * parseFloat(age));
    }
    
    return Math.round(bmr);
  };

  // Calculate TDEE
  const calculateTDEE = () => {
    const bmr = calculateBMR();
    if (!bmr) return null;
    
    const multipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9
    };
    
    return Math.round(bmr * multipliers[activityLevel]);
  };

  const tools = [
    {
      id: 'bmi',
      name: 'BMI Calculator',
      icon: Scale,
      description: 'Calculate your Body Mass Index to assess if you\'re at a healthy weight',
      color: 'bg-primary-100 text-primary-600'
    },
    {
      id: 'bmr',
      name: 'BMR Calculator',
      icon: Zap,
      description: 'Find your Basal Metabolic Rate - calories burned at rest',
      color: 'bg-secondary-100 text-secondary-600'
    },
    {
      id: 'tdee',
      name: 'TDEE Calculator',
      icon: Activity,
      description: 'Calculate Total Daily Energy Expenditure including activities',
      color: 'bg-accent-100 text-accent-600'
    },
    {
      id: 'ideal',
      name: 'Ideal Weight',
      icon: Target,
      description: 'Determine your ideal weight range based on height and frame',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const bmi = calculateBMI();
  const bmiCategory = bmi ? getBMICategory(parseFloat(bmi)) : null;
  const bmr = calculateBMR();
  const tdee = calculateTDEE();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary-100 text-primary-700">
              <Calculator className="w-4 h-4 mr-2" />
              Free Health Tools
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Health
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"> Calculator </span>
              Tools
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our scientifically-backed calculators to understand your body better and 
              make informed decisions about your health journey.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Tool Selection */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Choose a Calculator</h2>
              <div className="space-y-3">
                {tools.map((tool) => {
                  const IconComponent = tool.icon;
                  return (
                    <button
                      key={tool.id}
                      onClick={() => setActiveCalculator(tool.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all ${
                        activeCalculator === tool.id
                          ? 'bg-white shadow-lg border-2 border-primary-200'
                          : 'bg-white hover:shadow-md border border-gray-200'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg ${tool.color}`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm">{tool.name}</h3>
                          <p className="text-xs text-gray-600 mt-1">{tool.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Calculator Interface */}
            <div className="lg:col-span-3">
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-primary-50 to-secondary-50">
                  <CardTitle className="flex items-center space-x-2">
                    {(() => {
                      const tool = tools.find(t => t.id === activeCalculator);
                      const IconComponent = tool.icon;
                      return (
                        <>
                          <div className={`p-2 rounded-lg ${tool.color}`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <span>{tool.name}</span>
                        </>
                      );
                    })()}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  {/* Unit Selection */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Unit System
                    </label>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => setUnit('metric')}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          unit === 'metric'
                            ? 'bg-primary-100 text-primary-700 border-2 border-primary-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Metric (cm, kg)
                      </button>
                      <button
                        onClick={() => setUnit('imperial')}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          unit === 'imperial'
                            ? 'bg-primary-100 text-primary-700 border-2 border-primary-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Imperial (in, lbs)
                      </button>
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Height ({unit === 'metric' ? 'cm' : 'inches'})
                      </label>
                      <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder={unit === 'metric' ? 'e.g., 170' : 'e.g., 67'}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Weight ({unit === 'metric' ? 'kg' : 'lbs'})
                      </label>
                      <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder={unit === 'metric' ? 'e.g., 70' : 'e.g., 154'}
                      />
                    </div>

                    {(activeCalculator === 'bmr' || activeCalculator === 'tdee') && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Age (years)
                          </label>
                          <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="e.g., 30"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Gender
                          </label>
                          <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                      </>
                    )}

                    {activeCalculator === 'tdee' && (
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Activity Level
                        </label>
                        <select
                          value={activityLevel}
                          onChange={(e) => setActivityLevel(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="sedentary">Sedentary (little or no exercise)</option>
                          <option value="light">Light (light exercise 1-3 days/week)</option>
                          <option value="moderate">Moderate (moderate exercise 3-5 days/week)</option>
                          <option value="active">Active (hard exercise 6-7 days/week)</option>
                          <option value="very_active">Very Active (very hard exercise, physical job)</option>
                        </select>
                      </div>
                    )}
                  </div>

                  {/* Results */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Results</h3>
                    
                    {activeCalculator === 'bmi' && (
                      <div className="space-y-4">
                        {bmi ? (
                          <>
                            <div className="text-center">
                              <div className="text-4xl font-bold text-primary-600 mb-2">{bmi}</div>
                              <div className={`text-lg font-semibold ${bmiCategory.color}`}>
                                {bmiCategory.category}
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-4">
                              <h4 className="font-semibold text-gray-900 mb-2">BMI Categories:</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span>Underweight</span>
                                  <span className="text-blue-600">Below 18.5</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Normal weight</span>
                                  <span className="text-green-600">18.5 - 24.9</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Overweight</span>
                                  <span className="text-yellow-600">25 - 29.9</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Obese</span>
                                  <span className="text-red-600">30 and above</span>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <p className="text-gray-500 text-center">Enter your height and weight to calculate BMI</p>
                        )}
                      </div>
                    )}

                    {activeCalculator === 'bmr' && (
                      <div className="space-y-4">
                        {bmr ? (
                          <>
                            <div className="text-center">
                              <div className="text-4xl font-bold text-secondary-600 mb-2">{bmr}</div>
                              <div className="text-lg text-gray-700">calories per day</div>
                            </div>
                            <div className="bg-white rounded-lg p-4">
                              <p className="text-sm text-gray-600">
                                Your BMR represents the minimum number of calories your body needs to function at rest.
                                This includes basic functions like breathing, circulation, and cell production.
                              </p>
                            </div>
                          </>
                        ) : (
                          <p className="text-gray-500 text-center">Enter all fields to calculate BMR</p>
                        )}
                      </div>
                    )}

                    {activeCalculator === 'tdee' && (
                      <div className="space-y-4">
                        {tdee ? (
                          <>
                            <div className="text-center">
                              <div className="text-4xl font-bold text-accent-600 mb-2">{tdee}</div>
                              <div className="text-lg text-gray-700">calories per day</div>
                            </div>
                            <div className="bg-white rounded-lg p-4 space-y-3">
                              <div>
                                <div className="text-sm font-semibold text-gray-900">For Weight Loss:</div>
                                <div className="text-sm text-gray-600">{Math.round(tdee * 0.8)} - {Math.round(tdee * 0.9)} calories/day</div>
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-900">For Maintenance:</div>
                                <div className="text-sm text-gray-600">{tdee} calories/day</div>
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-900">For Weight Gain:</div>
                                <div className="text-sm text-gray-600">{Math.round(tdee * 1.1)} - {Math.round(tdee * 1.2)} calories/day</div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <p className="text-gray-500 text-center">Enter all fields to calculate TDEE</p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Disclaimer */}
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Info className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-yellow-800">
                        <strong>Disclaimer:</strong> These calculators provide estimates based on general formulas. 
                        Results may vary based on individual factors. Consult with healthcare professionals for 
                        personalized advice.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Personalized Guidance?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            These tools are just the beginning. Get a personalized health plan designed specifically 
            for your body, goals, and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4">
              Get Your Personal Plan
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}