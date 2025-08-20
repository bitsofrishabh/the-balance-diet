'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

const faqs = [
  {
    question: "How quickly will I see results?",
    answer:
      "Most people feel changes in energy, appetite and bloating within 7–10 days. Visible inch loss usually shows up in 2–3 weeks. Meaningful, steady progress typically comes in 4–6 weeks when you follow the plan, sleep well, and stay consistent. On an average our clients lost 3-5kg in a month if you follow the program and guidance even at 80% also."
  },
  {
    question: "Is the program suitable for people with medical conditions?",
    answer:
      "Yes. We regularly coach clients with diabetes, PCOS, thyroid issues and high BP. We’ll ask about your meds, labs and doctor’s advice, then tailor meals and activity to support your condition. We complement (not replace) your medical care."
  },
  {
    question: "What makes your approach different from other diet programs?",
    answer:
      "No crash diets. We build plans around everyday Indian food and your routine, then coach the habits that make results stick. You’ll get personalized meals, weekly reviews, WhatsApp support and course-corrections—more than just a one-time ‘chart’."
  },
  {
    question: "Do I need to buy special foods or supplements?",
    answer:
      "No. Your plan uses simple, local ingredients from any kirana or supermarket. Supplements are optional and suggested only if your diet/labs show a gap (e.g., vitamin D, B12). We don’t push expensive powders or sell products."
  },
  {
    question: "How much time do I need to dedicate daily?",
    answer:
      "About 15–20 minutes a day for meal planning, logging and small habits. A quick weekly review (10–15 minutes) helps us adjust your plan. If you batch-cook, 60–90 minutes once a week can make weekdays effortless."
  },
  {
    question: "What if I travel frequently for work?",
    answer:
      "We’ll give you hotel/restaurant plate guides, airport/snack options and no-cook meal ideas. Share your schedule and we’ll plan around flights and time zones. Even on the road, you’ll have simple choices to stay on track."
  },
  {
    question: "Is there ongoing support after I reach my goal?",
    answer:
      "Yes. We create a maintenance plan with portion ranges, flexible ‘off’ days and a relapse-recovery playbook. You can keep monthly/quarterly check-ins or come back for tune-ups before festivals, trips or events."
  },
  {
    question: "What's included in the money-back guarantee?",
    answer:
      "Follow your personalized plan for 30 days (daily logs + weekly check-ins). If you don’t see measurable progress—on weight, inches or agreed markers—we’ll refund 100% of your fee. No arguments. Your effort + our coaching = our responsibility."
  }
];


  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
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
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
              >
                <h3 className="text-xl font-semibold text-gray-900 pr-4 leading-relaxed">
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
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed text-base">
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
                href="https://wa.me/919149081034?text=Hi! I have some questions about The Balance Diet programs."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
              >
                Ask on WhatsApp
              </a>
              
             <a
  href="https://calendly.com/the-balance-diet/health-assessment-call-with-rishabh-savita"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
>
  Book Free Call
</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}