import './globals.css';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'The Balance Diet - Your Journey to Wellness Starts Here',
    template: '%s | The Balance Diet'
  },
  description: 'Transform your health with personalized nutrition plans, expert guidance, and proven weight loss strategies. Start your wellness journey today with our science-based approach.',
  keywords: 'weight loss, nutrition, health coaching, diet plans, wellness, fitness, healthy eating, transformation, balance diet',
  authors: [{ name: 'The Balance Diet Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thebalancediet.com',
    siteName: 'The Balance Diet',
    title: 'The Balance Diet - Your Journey to Wellness Starts Here',
    description: 'Transform your health with personalized nutrition plans, expert guidance, and proven weight loss strategies.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Balance Diet - Your Journey to Wellness Starts Here',
    description: 'Transform your health with personalized nutrition plans, expert guidance, and proven weight loss strategies.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen mt-1">
          {children}
        </main>
        <Footer />
        
    
      </body>
    </html>
  );
}