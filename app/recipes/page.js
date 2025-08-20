import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChefHat, 
  Clock, 
  Users,
  Star,
  ArrowRight,
  MessageCircle,
  Filter,
  Search,
  Utensils,
  Leaf,
  Zap,
  Heart,
  Apple,
  Salad
} from 'lucide-react';

export const metadata = {
  title: 'Healthy Recipes - Nutritious & Delicious Meal Ideas',
  description: 'Discover healthy, nutritious recipes designed by our expert nutritionists. Perfect for weight loss, wellness, and balanced living.',
};

export default function RecipesPage() {
  const whatsappNumber = '+919149081034';
  const whatsappMessage = 'Hi! I would like to know more about The Balance Diet programs and recipes.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const recipes = [
    {
      id: 1,
      title: 'Quinoa Buddha Bowl with Tahini Dressing',
      description: 'A nutrient-packed bowl with quinoa, roasted vegetables, and creamy tahini dressing.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      cookTime: '25 mins',
      servings: 2,
      difficulty: 'Easy',
      category: 'Lunch',
      tags: ['Vegan', 'High Protein', 'Gluten-Free'],
      calories: 420,
      rating: 4.8,
      featured: true
    },
    {
      id: 2,
      title: 'Grilled Salmon with Lemon Herb Vegetables',
      description: 'Omega-3 rich salmon paired with colorful, antioxidant-packed vegetables.',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
      cookTime: '20 mins',
      servings: 4,
      difficulty: 'Medium',
      category: 'Dinner',
      tags: ['High Protein', 'Low Carb', 'Heart Healthy'],
      calories: 380,
      rating: 4.9,
      featured: false
    },
    {
      id: 3,
      title: 'Green Smoothie Power Bowl',
      description: 'Energizing smoothie bowl packed with spinach, fruits, and superfood toppings.',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600',
      cookTime: '10 mins',
      servings: 1,
      difficulty: 'Easy',
      category: 'Breakfast',
      tags: ['Vegan', 'Raw', 'Antioxidant Rich'],
      calories: 280,
      rating: 4.7,
      featured: false
    },
    {
      id: 4,
      title: 'Mediterranean Chickpea Salad',
      description: 'Fresh and filling salad with chickpeas, vegetables, and Mediterranean flavors.',
      image: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=600',
      cookTime: '15 mins',
      servings: 3,
      difficulty: 'Easy',
      category: 'Lunch',
      tags: ['Vegetarian', 'High Fiber', 'Mediterranean'],
      calories: 320,
      rating: 4.6,
      featured: false
    },
    {
      id: 5,
      title: 'Sweet Potato and Black Bean Tacos',
      description: 'Nutritious plant-based tacos with roasted sweet potato and seasoned black beans.',
      image: 'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&w=600',
      cookTime: '30 mins',
      servings: 4,
      difficulty: 'Medium',
      category: 'Dinner',
      tags: ['Vegan', 'High Fiber', 'Mexican'],
      calories: 350,
      rating: 4.8,
      featured: false
    },
    {
      id: 6,
      title: 'Overnight Chia Pudding with Berries',
      description: 'Make-ahead breakfast rich in omega-3s, fiber, and antioxidants.',
      image: 'https://images.pexels.com/photos/1640778/pexels-photo-1640778.jpeg?auto=compress&cs=tinysrgb&w=600',
      cookTime: '5 mins prep',
      servings: 2,
      difficulty: 'Easy',
      category: 'Breakfast',
      tags: ['Vegan', 'Make Ahead', 'High Fiber'],
      calories: 240,
      rating: 4.5,
      featured: false
    }
  ];

  const categories = [
    { name: 'All Recipes', count: recipes.length, icon: ChefHat },
    { name: 'Breakfast', count: 2, icon: Utensils },
    { name: 'Lunch', count: 2, icon: Salad },
    { name: 'Dinner', count: 2, icon: Heart },
    { name: 'Vegan', count: 4, icon: Leaf },
    { name: 'High Protein', count: 2, icon: Zap }
  ];

  const featuredRecipe = recipes.find(recipe => recipe.featured);
  const regularRecipes = recipes.filter(recipe => !recipe.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary-100 text-primary-700">
              <ChefHat className="w-4 h-4 mr-2" />
              Healthy Recipes
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nutritious &
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent block"> Delicious Recipes </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover healthy, chef-approved recipes designed by our nutritionists. 
              Perfect for weight loss, wellness, and balanced living.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search recipes..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <Button variant="outline" className="px-6 py-3">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
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

      {/* Featured Recipe */}
      {featuredRecipe && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Recipe</h2>
              <p className="text-gray-600">Our most popular and nutritious recipe</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredRecipe.image}
                    alt={featuredRecipe.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary-500 text-white">
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-semibold">{featuredRecipe.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredRecipe.tags.map((tag, index) => (
                      <span key={index} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredRecipe.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {featuredRecipe.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Clock className="w-5 h-5 text-primary-500 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-gray-900">{featuredRecipe.cookTime}</div>
                      <div className="text-xs text-gray-500">Cook Time</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-5 h-5 text-primary-500 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-gray-900">{featuredRecipe.servings}</div>
                      <div className="text-xs text-gray-500">Servings</div>
                    </div>
                    <div className="text-center">
                      <Zap className="w-5 h-5 text-primary-500 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-gray-900">{featuredRecipe.calories}</div>
                      <div className="text-xs text-gray-500">Calories</div>
                    </div>
                  </div>

                  <Button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700">
                    View Full Recipe
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recipe Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">All Recipes</h2>
            <p className="text-gray-600">Healthy and delicious recipes for every meal</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularRecipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-700">
                      {recipe.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-1">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                      <span className="text-xs font-semibold">{recipe.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {recipe.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-primary-50 text-primary-600 px-2 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight hover:text-primary-600 transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {recipe.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {recipe.cookTime}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {recipe.servings} servings
                    </div>
                    <div className="flex items-center">
                      <Zap className="w-3 h-3 mr-1" />
                      {recipe.calories} cal
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full text-primary-600 border-primary-200 hover:bg-primary-50">
                    View Recipe
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Newsletter */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 text-center text-white">
            <ChefHat className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Get Weekly Recipe Updates
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Receive new healthy recipes, meal planning tips, and nutrition insights 
              delivered to your inbox every week.
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
            Want Personalized Meal Plans?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get custom meal plans and recipes tailored to your specific health goals, 
            dietary preferences, and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4">
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Custom Meal Plans
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