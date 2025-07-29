'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Briefcase,
  TrendingDown,
  Target,
  Star,
  Quote,
  MessageCircle,
  Phone,
  Award,
  CheckCircle,
  Heart,
  Users,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export async function generateStaticParams() {
  // Generate static params for all story slugs
  const slugs = [
    'priya-lost-25kg',
    'rahul-lost-30kg',
    'sneha-lost-18kg'
  ];

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function SuccessStoryDetailPage() {
  const params = useParams();
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Sample data - in real app, this would come from API/database
  const storyData = {
    'priya-lost-25kg': {
      name: 'Priya Sharma',
      weightLoss: '25 kg',
      timeframe: '6 months',
      age: 28,
      occupation: 'Software Engineer',
      location: 'Mumbai',
      beforeWeight: 85,
      afterWeight: 60,
      program: 'Complete Transform Program',
      images: [
        'https://res.cloudinary.com/djdej77pl/image/upload/v1753728765/3_fhiqje.png',
        'https://res.cloudinary.com/djdej77pl/image/upload/v1753728759/15_wwp1m1.png'
      ],
      story: `When I first contacted The Balance Diet team, I was struggling with PCOS and had tried countless diets without success. My weight had reached 85 kg, and I felt hopeless about ever achieving my health goals.

The team created a personalized plan that addressed my PCOS symptoms while focusing on sustainable weight loss. They didn't just give me a diet chart - they educated me about nutrition, helped me understand my body's needs, and provided constant support throughout my journey.

The first month was challenging as my body adjusted to the new eating patterns, but the results started showing by the second month. Not only did I start losing weight, but my PCOS symptoms improved significantly. My energy levels increased, my skin cleared up, and I felt more confident than ever.

By the end of 6 months, I had lost 25 kg and reached my goal weight of 60 kg. More importantly, I learned how to maintain this weight through healthy lifestyle choices. The Balance Diet team didn't just help me lose weight - they transformed my entire relationship with food and health.

Today, I'm not just lighter on the scale, but I'm also happier, more energetic, and confident. This journey has been life-changing, and I'm grateful for the expert guidance and support I received.`,
      results: [
        'Lost 25 kg in 6 months',
        'PCOS symptoms improved significantly',
        'Increased energy levels',
        'Better skin health',
        'Improved confidence',
        'Learned sustainable eating habits'
      ],
      beforeAfterStats: {
        weight: { before: 85, after: 60, unit: 'kg' },
        bmi: { before: 31.2, after: 22.0 },
        waist: { before: 38, after: 28, unit: 'inches' },
        energy: { before: 3, after: 9, unit: '/10' }
      }
    },
    'rahul-lost-30kg': {
      name: 'Rahul Gupta',
      weightLoss: '30 kg',
      timeframe: '8 months',
      age: 35,
      occupation: 'Marketing Director',
      location: 'Delhi',
      beforeWeight: 95,
      afterWeight: 65,
      program: 'Premium Transform Program',
      images: [
        'https://res.cloudinary.com/djdej77pl/image/upload/v1753728759/15_wwp1m1.png',
        'https://res.cloudinary.com/djdej77pl/image/upload/v1753728765/6_u49nfp.png'
      ],
      story: `As a busy marketing director, I was constantly traveling and eating irregular meals. My weight had ballooned to 95 kg, and I was experiencing health issues that were affecting my work performance and personal life.

The Balance Diet team understood my hectic schedule and created a flexible plan that worked around my travel and meeting schedules. They provided me with portable meal options, restaurant eating guidelines, and even helped me navigate airport food choices.

What impressed me most was their holistic approach. They didn't just focus on what I ate, but also helped me manage stress, improve my sleep quality, and incorporate physical activity into my busy routine. The weekly check-ins kept me accountable even during my busiest weeks.

The transformation was gradual but consistent. I lost 30 kg over 8 months without feeling deprived or compromising my work commitments. My colleagues noticed the change not just in my appearance, but in my energy and productivity levels.

This program taught me that being busy is not an excuse for poor health. With the right guidance and planning, anyone can achieve their health goals regardless of their schedule.`,
      results: [
        'Lost 30 kg in 8 months',
        'Improved work productivity',
        'Better stress management',
        'Enhanced sleep quality',
        'Increased stamina',
        'Sustainable lifestyle changes'
      ],
      beforeAfterStats: {
        weight: { before: 95, after: 65, unit: 'kg' },
        bmi: { before: 33.5, after: 22.9 },
        waist: { before: 42, after: 32, unit: 'inches' },
        energy: { before: 4, after: 9, unit: '/10' }
      }
    },
    'sneha-lost-18kg': {
      name: 'Sneha Patel',
      weightLoss: '18 kg',
      timeframe: '4 months',
      age: 31,
      occupation: 'Teacher',
      location: 'Pune',
      beforeWeight: 78,
      afterWeight: 60,
      program: 'Women Care Program',
      images: [
        'https://res.cloudinary.com/djdej77pl/image/upload/v1753728765/6_u49nfp.png',
        'https://res.cloudinary.com/djdej77pl/image/upload/v1753728765/3_fhiqje.png'
      ],
      story: `After giving birth to my second child, I struggled with postpartum weight gain and felt like I had lost myself. At 78 kg, I was the heaviest I had ever been, and my confidence was at an all-time low.

The Balance Diet team specialized in women's health understood exactly what I was going through. They created a plan that considered my breastfeeding needs, hormonal changes, and the challenges of being a new mother with limited time.

The program was incredibly supportive and realistic. They helped me meal prep efficiently, provided quick and nutritious recipes, and even gave me exercises I could do at home with my baby. The nutritionist was always available to answer my questions and adjust the plan as needed.

Within 4 months, I lost 18 kg and reached my pre-pregnancy weight of 60 kg. But more than the weight loss, I regained my confidence, energy, and sense of self. I felt like myself again - a strong, healthy mother who could take care of her family while also taking care of herself.

This journey taught me that motherhood doesn't mean sacrificing your own health and happiness. With the right support and guidance, you can be the best version of yourself for both you and your family.`,
      results: [
        'Lost 18 kg in 4 months',
        'Regained pre-pregnancy weight',
        'Improved energy for childcare',
        'Enhanced self-confidence',
        'Better hormonal balance',
        'Sustainable postpartum nutrition'
      ],
      beforeAfterStats: {
        weight: { before: 78, after: 60, unit: 'kg' },
        bmi: { before: 28.8, after: 22.2 },
        waist: { before: 36, after: 28, unit: 'inches' },
        energy: { before: 3, after: 8, unit: '/10' }
      }
    }
  };

  // Default to first story if slug not found
  const currentStory = storyData[params.slug] || storyData['priya-lost-25kg'];

  const moreTestimonials = [
    {
      name: 'Amit Singh',
      weightLoss: '22 kg',
      timeframe: '5 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1753728759/15_wwp1m1.png',
      quote: 'The Balance Diet helped me manage my diabetes while losing weight. My blood sugar levels are now completely normal!',
      rating: 5
    },
    {
      name: 'Kavya Reddy',
      weightLoss: '20 kg',
      timeframe: '5 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1753728765/6_u49nfp.png',
      quote: 'As a college student, I needed a plan that fit my budget and lifestyle. This program was perfect and the results speak for themselves!',
      rating: 5
    },
    {
      name: 'Vikram Joshi',
      weightLoss: '28 kg',
      timeframe: '7 months',
      image: 'https://res.cloudinary.com/djdej77pl/image/upload/v1753728765/3_fhiqje.png',
      quote: 'Thyroid issues made weight loss seem impossible, but the expert guidance helped me overcome all obstacles. Highly recommended!',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % moreTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + moreTestimonials.length) % moreTestimonials.length);
  };

  const whatsappNumber = '+1234567890';
  const whatsappMessage = `Hi! I was inspired by ${currentStory.name}'s transformation story and would like to claim my free discovery call.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/success-stories" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Success Stories
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-primary-100 text-primary-700">
              <Award className="w-4 h-4 mr-2" />
              Success Story
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentStory.name}'s Transformation Journey
            </h1>
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <TrendingDown className="w-5 h-5 mr-2 text-primary-600" />
                <span className="font-semibold">Lost {currentStory.weightLoss}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary-600" />
                <span>in {currentStory.timeframe}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary-600" />
                <span>{currentStory.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Images */}
            <div className="space-y-6">
              {currentStory.images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`${currentStory.name} transformation ${index + 1}`}
                    className="w-full rounded-2xl shadow-lg object-contain bg-gradient-to-br from-primary-50 to-secondary-50"
                    style={{ minHeight: '300px' }}
                  />
                  {index === 0 && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                      -{currentStory.weightLoss}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column - Details */}
            <div className="space-y-8">
              {/* Client Info */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Client Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-primary-600 mr-3" />
                    <div>
                      <div className="text-sm text-gray-500">Age</div>
                      <div className="font-semibold">{currentStory.age} years</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-5 h-5 text-primary-600 mr-3" />
                    <div>
                      <div className="text-sm text-gray-500">Occupation</div>
                      <div className="font-semibold">{currentStory.occupation}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-primary-600 mr-3" />
                    <div>
                      <div className="text-sm text-gray-500">Location</div>
                      <div className="font-semibold">{currentStory.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-primary-600 mr-3" />
                    <div>
                      <div className="text-sm text-gray-500">Program</div>
                      <div className="font-semibold">{currentStory.program}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Before/After Stats */}
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Transformation Results</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {currentStory.beforeAfterStats.weight.before} → {currentStory.beforeAfterStats.weight.after}
                    </div>
                    <div className="text-sm text-gray-600">Weight ({currentStory.beforeAfterStats.weight.unit})</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {currentStory.beforeAfterStats.bmi.before} → {currentStory.beforeAfterStats.bmi.after}
                    </div>
                    <div className="text-sm text-gray-600">BMI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {currentStory.beforeAfterStats.waist.before} → {currentStory.beforeAfterStats.waist.after}
                    </div>
                    <div className="text-sm text-gray-600">Waist ({currentStory.beforeAfterStats.waist.unit})</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {currentStory.beforeAfterStats.energy.before} → {currentStory.beforeAfterStats.energy.after}
                    </div>
                    <div className="text-sm text-gray-600">Energy Level {currentStory.beforeAfterStats.energy.unit}</div>
                  </div>
                </div>
              </div>

              {/* Key Results */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h3>
                <div className="space-y-3">
                  {currentStory.results.map((result, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 py-4">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Claim Your Free Discovery Call Today
                  </Button>
                </a>
                <Button variant="outline" className="w-full py-4">
                  <Phone className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Quote className="w-8 h-8 text-primary-400 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">
                {currentStory.name}'s Journey
              </h3>
            </div>
            
            <div className="prose prose-lg max-w-none">
              {currentStory.story.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center mt-8 pt-8 border-t border-gray-100">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "Life-changing experience with amazing results!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              More Success Stories
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover more inspiring transformation journeys from our community of successful clients.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative">
                  <img
                    src={moreTestimonials[currentTestimonialIndex].image}
                    alt={moreTestimonials[currentTestimonialIndex].name}
                    className="w-full h-64 md:h-full object-contain bg-gradient-to-br from-primary-50 to-secondary-50"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -{moreTestimonials[currentTestimonialIndex].weightLoss}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(moreTestimonials[currentTestimonialIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-primary-200 mb-4" />
                  
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{moreTestimonials[currentTestimonialIndex].quote}"
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {moreTestimonials[currentTestimonialIndex].name}
                    </h4>
                    <p className="text-primary-600 font-medium">
                      Lost {moreTestimonials[currentTestimonialIndex].weightLoss} in {moreTestimonials[currentTestimonialIndex].timeframe}
                    </p>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {moreTestimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonialIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentTestimonialIndex ? 'bg-primary-500' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={prevTestimonial} className="p-2">
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={nextTestimonial} className="p-2">
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* View All Stories Link */}
          <div className="text-center mt-8">
            <Link href="/success-stories">
              <Button variant="outline" size="lg">
                View All Success Stories
                <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Inspired by {currentStory.name}'s Story?
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Your transformation journey can start today. Get the same expert guidance and support 
            that helped {currentStory.name} achieve incredible results.
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
              <Heart className="mr-2 h-5 w-5" />
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}