import SuccessStoryClientContent from '@/components/SuccessStoryClientContent';

export function generateStaticParams() {
  // Generate static params for all story slugs
  const slugs = [
    'priya-lost-25kg',
    'rahul-lost-30kg',
    'sneha-lost-18kg',
    'amit-lost-22kg',
    'kavya-lost-20kg',
    'vikram-lost-28kg',
    'meera-lost-15kg',
    'arjun-lost-35kg',
    'ritu-lost-24kg'
  ];

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function SuccessStoryDetailPage() {
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
    }
  ]
  return (
    <SuccessStoryClientContent 
      currentStory={storyData['priya-lost-25kg']} // Default story for now
      moreTestimonials={moreTestimonials}
    />
  );
}