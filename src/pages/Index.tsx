import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import AIToolCard from '@/components/AIToolCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { aiTools, categories } from '@/data/aiTools';
import { TrendingUp, Star, Users, Zap, ArrowRight, Sparkles } from 'lucide-react';

const Index = () => {
  const [featuredTools, setFeaturedTools] = useState(aiTools.slice(0, 6));
  const [popularCategories, setPopularCategories] = useState(categories.slice(1, 7));

  // Get trending tools (high rating and popular tag)
  const trendingTools = aiTools
    .filter(tool => tool.rating >= 4.5 || tool.tags.includes('popular'))
    .slice(0, 8);

  // Get recently added tools
  const recentTools = aiTools.slice(-4);

  // Statistics
  const stats = [
    {
      icon: Sparkles,
      label: 'AI Tools',
      value: '50+',
      description: 'Curated collection'
    },
    {
      icon: Star,
      label: 'Average Rating',
      value: '4.5',
      description: 'User satisfaction'
    },
    {
      icon: Users,
      label: 'Categories',
      value: '12',
      description: 'Different use cases'
    },
    {
      icon: TrendingUp,
      label: 'Updated',
      value: 'Daily',
      description: 'Fresh content'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center group animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              ⭐ Featured Tools
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Most Popular AI Tools
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the AI tools that are transforming how people work, create, and innovate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredTools.map((tool, index) => (
              <div 
                key={tool.id}
                className="animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AIToolCard tool={tool} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link to="/ai-tools">
                View All Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
              🎯 Categories
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Explore by Category
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the perfect AI tool for your specific needs and use case
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {popularCategories.map((category, index) => {
              const categoryTools = aiTools.filter(tool => tool.category === category);
              const categoryIcon = getCategoryIcon(category);
              
              return (
                <Link
                  key={category}
                  to={`/categories?category=${encodeURIComponent(category)}`}
                  className="group block animate-in fade-in slide-in-from-bottom-6 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">{categoryIcon}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                        {category}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {categoryTools.length} tools available
                      </p>
                      <div className="flex items-center text-blue-600 font-medium">
                        Explore tools
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg rounded-xl border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
              asChild
            >
              <Link to="/categories">
                View All Categories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trending Tools Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-emerald-50 dark:from-purple-900/20 dark:to-emerald-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
              🔥 Trending Now
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                What's Hot in AI
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay ahead of the curve with the most talked-about AI tools
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingTools.map((tool, index) => (
              <div 
                key={tool.id}
                className="animate-in fade-in slide-in-from-bottom-6 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AIToolCard tool={tool} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of professionals who are already using AI to boost their productivity and creativity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link to="/ai-tools">
                  Explore All Tools
                  <Sparkles className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg rounded-xl transition-all duration-300"
                asChild
              >
                <Link to="/categories">
                  Browse Categories
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Helper function to get category icons
const getCategoryIcon = (category: string): string => {
  const icons: Record<string, string> = {
    'Writing & Content': '✍️',
    'Image Generation': '🎨',
    'Video Generation': '🎬',
    'Code Generation': '💻',
    'Audio & Music': '🎵',
    'Business & Productivity': '📊',
    'Design & Creative': '🎭',
    'Data & Analytics': '📈',
    'Customer Service': '🤝',
    'Marketing & SEO': '📱',
    'Research & Analysis': '🔍',
    'Entertainment': '🎮'
  };
  return icons[category] || '🤖';
};

export default Index;