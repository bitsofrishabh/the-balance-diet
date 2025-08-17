'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How quickly will I see results?",
      answer: "Most clients start seeing noticeable changes within the first 2-3 weeks. Significant weight loss and health improvements typically occur within 4-6 weeks when following our personalized program consistently."
    },
    {
      question: "Is the program suitable for people with medical conditions?",
      answer: "Yes, our programs are designed to accommodate various health conditions including diabetes, PCOS, thyroid issues, and high blood pressure. We work closely with your healthcare provider and create meal plans that support your medical needs."
    },
    {
      question: "What makes your approach different from other diet programs?",
      answer: "We focus on Indian foods and realistic lifestyle changes rather than restrictive diets. Our approach includes personalized nutrition plans, regular coaching, habit formation, and ongoing support - not just a meal chart."
    },
    {
      question: "Do I need to buy special foods or supplements?",
      answer: "No, our meal plans use common Indian ingredients available in any local market. We may recommend basic supplements based on your individual needs, but expensive specialty foods are never required."
    },
    {
      question: "How much time do I need to dedicate daily?",
      answer: "The program is designed for busy lifestyles. You'll need about 15-20 minutes daily for meal prep planning and tracking. Weekly check-ins take 10-15 minutes. Everything is designed to fit into your existing routine."
    },
    {
      question: "What if I travel frequently for work?",
      answer: "We specialize in creating flexible plans for busy professionals. You'll get restaurant eating guidelines, travel-friendly meal options, and strategies for maintaining your progress regardless of your schedule."
    },
    {
      question: "Is there ongoing support after I reach my goal?",
      answer: "Absolutely! We provide maintenance guidance to help you sustain your results long-term. Many clients continue with our maintenance programs to ensure lasting success."
    },
    {
      question: "What's included in the money-back guarantee?",
      answer: "If you follow our program exactly as prescribed for 30 days and don't see measurable results, we'll refund 100% of your investment. No questions asked - your success is our commitment."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-primary-600 mr-2" />
            <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about our transformation programs and approach.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-primary-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-4">
              Our team is here to help you understand how our program can work for your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="https://wa.me/+1234567890?text=Hi! I have some questions about The Balance Diet programs."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
              >
                Ask on WhatsApp
              </a>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-primary-200 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors">
                Book Free Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}