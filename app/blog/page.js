import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Calendar, 
  User,
  ArrowRight,
  MessageCircle,
  Clock,
  Tag,
  TrendingUp,
  Heart,
  Apple,
  Dumbbell
} from 'lucide-react';

export const metadata = {
  title: 'Health & Nutrition Blog - Expert Tips & Insights',
  description: 'Discover expert health and nutrition tips, weight loss strategies, and wellness insights from our certified nutritionists.',
};

export default function BlogPage() {
  const whatsappNumber = '+919149081034';
  const whatsappMessage = 'Hi! I would like to know more about The Balance Diet programs.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const blogPosts = [
    {
      id: 1,
      title: '10 Science-Backed Tips for Sustainable Weight Loss',
      excerpt: 'Discover proven strategies that help you lose weight and keep it off for good, backed by the latest nutrition research.',
      author: 'Dt. Savita Choudhary',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Weight Loss',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      id: 2,
      title: 'PCOS Diet: Foods to Eat and Avoid for Better Health',
      excerpt: 'A comprehensive guide to managing PCOS symptoms through proper nutrition and lifestyle changes.',
      author: 'Dt. Savita Choudhary',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Women\'s Health',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 3,
      title: 'The Complete Guide to Intermittent Fasting',
      excerpt: 'Everything you need to know about intermittent fasting, including different methods and their benefits.',
      author: 'Rishabh Singh',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Nutrition',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 4,
      title: 'Thyroid Diet: Best Foods for Optimal Thyroid Function',
      excerpt: 'Learn which foods support thyroid health and which ones to avoid for better hormone balance.',
      author: 'Dt. Savita Choudhary',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Health Conditions',
      image: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 5,
      title: 'Meal Prep Made Easy: A Beginner\'s Guide',
      excerpt: 'Simple strategies to meal prep like a pro and save time while eating healthy throughout the week.',
      author: 'Rishabh Singh',
      date: '2024-01-05',
      readTime: '5 min read',
      category: 'Meal Planning',
      image: 'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 6,
      title: 'Understanding Macronutrients: Carbs, Proteins, and Fats',
      excerpt: 'A detailed breakdown of macronutrients and how to balance them for optimal health and weight management.',
      author: 'Dt. Savita Choudhary',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Nutrition',
      image: 'https://images.pexels.com/photos/1640778/pexels-photo-1640778.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    }
  ];

  const categories = [
    { name: 'All', count: blogPosts.length, icon: BookOpen },
    { name: 'Weight Loss', count: 1, icon: TrendingUp },
    { name: 'Women\'s Health', count: 1, icon: Heart },
    { name: 'Nutrition', count: 2, icon: Apple },
    { name: 'Health Conditions', count: 1, icon: Heart },
    { name: 'Meal Planning', count: 1, icon: Dumbbell }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary-100 text-primary-700">
              <BookOpen className="w-4 h-4 mr-2" />
              Health & Nutrition Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Expert Health &
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent block"> Nutrition Insights </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover evidence-based nutrition tips, weight loss strategies, and wellness insights 
              from our certified nutritionists and health experts.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={index}
                  className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all hover:bg-primary-50 hover:text-primary-600"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{category.name}</span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
              <p className="text-gray-600">Our most popular and impactful content</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary-500 text-white">
                      <Tag className="w-3 h-3 mr-1" />
                      {featuredPost.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <Button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Articles</h2>
            <p className="text-gray-600">Stay updated with our latest health and nutrition insights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-700">
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <Button variant="outline" size="sm" className="text-primary-600 border-primary-200 hover:bg-primary-50">
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with Our Latest Articles
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Get expert health and nutrition tips delivered straight to your inbox. 
              Join our community of health-conscious individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-primary-600 hover:bg-gray-100 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get personalized nutrition guidance from our expert team. 
            Start your transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4">
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Expert Guidance
              </Button>
            </a>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4">
              View Our Programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}