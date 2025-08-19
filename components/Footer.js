'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    
    const email = e.target.email.value;
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('🎉 Thank you! Check your email for the free recipe e-book.');
        e.target.reset();
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
      
    } catch (error) {
      console.error('Subscription error:', error);
      setMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = '+919149081034';
  const whatsappMessage = 'Hi! I would like to know more about The Balance Diet programs.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="text-gray-300 hover:text-primary-400 transition-colors">Blog</Link></li>
              <li><Link href="/recipes" className="text-gray-300 hover:text-primary-400 transition-colors">Recipes</Link></li>
              <li><Link href="/health-tools" className="text-gray-300 hover:text-primary-400 transition-colors">Health Tools</Link></li>
              <li><Link href="/ebook" className="text-gray-300 hover:text-primary-400 transition-colors">E-Book</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link href="/success-stories" className="text-gray-300 hover:text-primary-400 transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-primary-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-primary-400" />
                <span>hello@thebalancediet.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-primary-400 mt-0.5" />
                <span>123 Wellness Street<br />Health City, HC 12345</span>
              </div>
            </div>
          </div>

          {/* Email Signup */}
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-primary-400 mr-2" />
              <h3 className="font-semibold text-primary-300">Get Free Healthy Recipes E-Book</h3>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Need healthy recipes for your weight loss journey? Enter your email and we'll send you our free e-book with delicious, nutritious recipes that support your goals!
            </p>
            
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                />
                <Button type="submit" className="bg-primary-500 hover:bg-primary-600 px-6 py-3 text-sm font-semibold whitespace-nowrap">
                  {isSubmitting ? 'Sending...' : 'Send E-Book'}
                </Button>
              </div>
              
              {message && (
                <div className={`text-sm p-3 rounded-lg ${
                  message.includes('🎉') 
                    ? 'bg-green-800 text-green-200 border border-green-700' 
                    : 'bg-red-800 text-red-200 border border-red-700'
                }`}>
                  {message}
                </div>
              )}
            </form>
            
            <p className="text-xs text-gray-400 mt-3">
              🔒 Your email is safe with us. We'll only send you the free e-book and occasional healthy tips.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} The Balance Diet. All rights reserved. Designed with ❤️ for your wellness journey.</p>
        </div>
      </div>
    </footer>
  );
}