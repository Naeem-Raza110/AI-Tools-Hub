import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIToolCard from '@/components/AIToolCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { aiTools, categories } from '@/data/aiTools';
import { ArrowRight, Sparkles } from 'lucide-react';

const Categories = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const getCategoryTools = (category: string) => {
    return category === 'All' 
      ? aiTools 
      : aiTools.filter(tool => tool.category === category);
  };

  const getCategoryDescription = (category: string): string => {
    const descriptions: Record<string, string> = {
      'All': 'Explore our complete collection of AI tools across all categories',
      'Writing & Content': 'AI-powered writing assistants, content generators, and copywriting tools',
      'Image Generation': 'Create stunning visuals with AI image generators and art tools',
      'Video Generation': 'AI video creation, editing, and animation tools',
      'Code Generation': 'AI coding assistants and development tools for programmers',
      'Audio & Music': 'AI voice synthesis, music generation, and audio processing tools',
      'Business & Productivity': 'Streamline workflows with AI-powered business tools',
      'Design & Creative': 'AI design tools for graphics, logos, and creative projects',
      'Data & Analytics': 'AI-powered data analysis and visualization platforms',
      'Customer Service': 'AI chatbots and customer support automation tools',
      'Marketing & SEO': 'AI marketing tools for SEO, content, and campaign optimization',
      'Research & Analysis': 'AI research assistants and analytical tools',
      'Entertainment': 'AI-powered games, characters, and entertainment platforms'
    };
    return descriptions[category] || 'Discover AI tools in this category';
  };

  const getCategoryIcon = (category: string): string => {
    const icons: Record<string, string> = {
      'All': '🤖',
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

  const categoryTools = getCategoryTools(selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-purple-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
              🎯 Categories
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI Tools by Category
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find the perfect AI tool for your specific needs. Browse by category to discover tools tailored to your use case.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white dark:bg-slate-900 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const toolCount = getCategoryTools(category).length;
              return (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg'
                      : 'hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-300'
                  }`}
                >
                  <span className="mr-2">{getCategoryIcon(category)}</span>
                  {category}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {toolCount}
                  </Badge>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Category Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">{getCategoryIcon(selectedCategory)}</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              {selectedCategory}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              {getCategoryDescription(selectedCategory)}
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>{categoryTools.length} tools available</span>
              <span>•</span>
              <span>Updated regularly</span>
              <span>•</span>
              <span>Expert reviewed</span>
            </div>
          </div>

          {/* Tools Grid */}
          {categoryTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryTools.map((tool, index) => (
                <div 
                  key={tool.id}
                  className="animate-in fade-in slide-in-from-bottom-6 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AIToolCard tool={tool} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">No tools found</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                We're constantly adding new tools. Check back soon for updates in this category.
              </p>
              <Button onClick={() => setSelectedCategory('All')} variant="outline">
                View All Tools
              </Button>
            </div>
          )}

          {/* Category Stats */}
          {selectedCategory !== 'All' && categoryTools.length > 0 && (
            <div className="mt-16 p-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {categoryTools.length}
                  </div>
                  <div className="text-muted-foreground">Tools Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {(categoryTools.reduce((sum, tool) => sum + tool.rating, 0) / categoryTools.length).toFixed(1)}
                  </div>
                  <div className="text-muted-foreground">Average Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {categoryTools.filter(tool => tool.pricing === 'Free').length}
                  </div>
                  <div className="text-muted-foreground">Free Tools</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Explore Other Categories */}
      {selectedCategory !== 'All' && (
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Explore Other Categories</h3>
              <p className="text-muted-foreground">
                Discover more AI tools in different categories
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories
                .filter(cat => cat !== selectedCategory && cat !== 'All')
                .slice(0, 4)
                .map((category) => {
                  const toolCount = getCategoryTools(category).length;
                  return (
                    <Button
                      key={category}
                      variant="outline"
                      onClick={() => setSelectedCategory(category)}
                      className="h-auto p-6 flex flex-col items-center gap-3 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg transition-all duration-300"
                    >
                      <span className="text-2xl">{getCategoryIcon(category)}</span>
                      <div className="text-center">
                        <div className="font-semibold">{category}</div>
                        <div className="text-sm text-muted-foreground">
                          {toolCount} tools
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  );
                })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Categories;