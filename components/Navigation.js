'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resourcesItems = [
    {
      name: 'Free Resources',
      subItems: [
        { name: 'Blog', href: '/blog' },
        { name: 'Recipes', href: '/recipes' },
        { name: 'Health Tools', href: '/health-tools' },
      ],
    },
    { name: 'E-Book', href: '/ebook' },
  ];

  const whatsappNumber = '+919149081034';
  const whatsappMessage = 'Hi! I would like to know more about The Balance Diet programs.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex items-center space-x-3">
              <img
                src="https://res.cloudinary.com/djdej77pl/image/upload/v1755451382/Brand_Logo_j7zn4t.png"
                alt="The Balance Diet Logo"
                className="h-12 md:h-16 w-12 md:w-16 object-contain group-hover:scale-105 transition-transform"
              />
              <img
                src="https://res.cloudinary.com/djdej77pl/image/upload/v1755451381/Logo_u51ucu.png"
                alt="The Balance Diet Text Logo"
                className="h-8 md:h-12 object-contain group-hover:scale-105 transition-transform"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-gray-900'
              }`}
            >
              <span className="mt-1">#1 Personalized Nutrition Program</span>
              About Us
            </Link>
            <Link
              href="/"
              className={\`text-sm font-medium transition-colors hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link
              href="/success-stories"
              className={\`text-sm font-medium transition-colors hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-gray-900'
              }`}
            >
              Success Stories
            </Link>
            <Link
              href="/ebook"
              className={\`text-sm font-medium transition-colors hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-gray-900'
              }`}
            >
              E-Book
            </Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://calendly.com/the-balance-diet/health-assessment-call-with-rishabh-savita"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3"
              >
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen((v) => !v)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-3 space-y-1">
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
                  {resourcesItems.map((item) =>
                    item.subItems ? (
                      <div key={item.name} className="mb-2">
                        <div className="py-1 text-sm text-gray-700 font-medium">{item.name}</div>
                        <div className="pl-4 space-y-1">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block py-1 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-1 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="px-3 pt-2 pb-3">
                <a
                  href="https://calendly.com/the-balance-diet/health-assessment-call-with-rishabh-savita"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button
                    size="lg"
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                  >
                    Book Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Calendly Widget Script (kept for your existing usage) */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <script
        src="https://assets.calendly.com/assets/external/widget.js"
        type="text/javascript"
        async
      ></script>
    </nav>
  );
}
