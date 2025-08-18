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
  const whatsappNumber = '+1234567890'; // Replace with actual WhatsApp number
  const whatsappMessage = 'Hi! I would like to know more about The Balance Diet programs.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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

          {/* Get In Touch & Email Signup */}
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
            
            {/* Email Signup */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3 text-primary-300">Get Free Healthy Recipes E-Book</h4>
              <p className="text-gray-300 text-sm mb-4">
                Need healthy recipes for your weight loss journey? Enter your email and we'll send you our free e-book!
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                />
                <Button className="bg-primary-500 hover:bg-primary-600 px-4 py-2 text-sm">
                  Send E-Book
                </Button>
              </div>
            </div>
            
            <div className="mt-6">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white w-full">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} The Balance Diet. All rights reserved. Designed with ❤️ for your wellness journey.</p>
        </div>
      </div>
    </footer>
  );
}