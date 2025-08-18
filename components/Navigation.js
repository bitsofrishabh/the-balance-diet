'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  ChevronDown,
  MessageCircle
} from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resourcesItems = [
    { 
      name: 'Free Resources', 
      subItems: [
        { name: 'Blog', href: '/blog' },
        { name: 'Recipes', href: '/recipes' },
        { name: 'Health Tools', href: '/health-tools' }
      ]
    },
    { name: 'E-Book', href: '/ebook' },
  ];

  const whatsappNumber = '+1234567890'; // Replace with actual WhatsApp number
  const whatsappMessage = 'Hi! I would like to know more about The Balance Diet programs.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <img
              src="https://res.cloudinary.com/djdej77pl/image/upload/v1755451382/Brand_Logo_j7zn4t.png"
              alt="The Balance Diet Logo"
              className="h-10 w-10 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              The Balance Diet
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-gray-900'
              }`}
            >
              About Us
            </Link>
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-gray-900'
              }`}
              Services
              Services
            </Link>
            <Link
              href="/success-stories"
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-gray-900'
              }`}
            >
              Success Stories
            </Link>
            
            <Link
              href="/ebook"
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-gray-900'
              }`}
            >
              E-Book
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full transition-colors"
            >
              <MessageCircle className="h-5 w-5 text-white" />
            </a>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
              onClick={() => {
                if (typeof window !== 'undefined' && window.Calendly) {
                  window.Calendly.initPopupWidget({
                    url: 'https://calendly.com/the-balance-diet/health-assessment-call-with-rishabh-savita'
                  });
                }
              }}
            >
              Book Now
            </Button>
          </div>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              <Link
                href="/about"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Services
              </Link>
              <Link
                href="/success-stories"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Success Stories
              </Link>
              
              {/* Mobile Resources */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-gray-900 mb-2">Resources</div>
                <div className="pl-4 space-y-1">
                  {resourcesItems.map((item) => (
                    <div key={item.name}>
                      {item.subItems ? (
                        <div>
                          <div className="py-1 text-sm text-gray-700 font-medium">{item.name}</div>
                          <div className="pl-4 space-y-1">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block py-1 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
            <Link
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600"
                onClick={() => {
                  setIsMenuOpen(false);
                  if (typeof window !== 'undefined' && window.Calendly) {
                    window.Calendly.initPopupWidget({
                      url: 'https://calendly.com/the-balance-diet/health-assessment-call-with-rishabh-savita'
                    });
                  }
                }}
              >
                Book Now
              </Button>
            </Link>
          </div>
        )}
      </div>
      
      {/* Calendly Widget Script */}
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
    </nav>
  );
}