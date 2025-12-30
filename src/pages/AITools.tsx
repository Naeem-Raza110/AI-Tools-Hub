import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIToolCard from '@/components/AIToolCard';
import SearchBar from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { aiTools, categories } from '@/data/aiTools';
import { useSearch } from '@/hooks/useSearch';
import { Grid, List, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

const AITools = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const {
    searchQuery,
    activeFilters,
    selectedCategory,
    filteredTools,
    handleSearch,
    handleFilterChange,
    handleCategoryChange,
    clearAllFilters,
    totalResults,
    hasActiveFilters
  } = useSearch(aiTools);

  // Sort tools
  const sortedTools = [...filteredTools].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'rating':
        comparison = a.rating - b.rating;
        break;
      case 'category':
        comparison = a.category.localeCompare(b.category);
        break;
      case 'pricing':
        const pricingOrder = { 'Free': 0, 'Freemium': 1, 'Paid': 2 };
        comparison = pricingOrder[a.pricing as keyof typeof pricingOrder] - pricingOrder[b.pricing as keyof typeof pricingOrder];
        break;
      default:
        comparison = 0;
    }
    
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  const toggleSortOrder = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Tools Directory
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover, compare, and choose from our comprehensive collection of 50+ AI tools. 
              Find the perfect solution for your needs.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto">
              <SearchBar
                onSearch={handleSearch}
                onFilterChange={handleFilterChange}
                placeholder="Search by name, category, features, or tags..."
                showFilters={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters and Controls */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Category Filter */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleCategoryChange(category)}
                    className={`transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
                    }`}
                  >
                    {category}
                    {category !== 'All' && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        {aiTools.filter(tool => tool.category === category).length}
                      </Badge>
                    )}
                  </Button>
                ))}
              </div>
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              {/* Sort Controls */}
              <div className="flex items-center gap-2">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="category">Category</SelectItem>
                    <SelectItem value="pricing">Pricing</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleSortOrder}
                  className="px-3"
                >
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="px-3"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="px-3"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold">
                {totalResults} {totalResults === 1 ? 'Tool' : 'Tools'}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </h2>
              
              {hasActiveFilters && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearAllFilters}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Clear Filters
                </Button>
              )}
            </div>

            <div className="text-sm text-muted-foreground">
              Showing {sortedTools.length} of {aiTools.length} tools
            </div>
          </div>

          {/* Tools Grid/List */}
          {sortedTools.length > 0 ? (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {sortedTools.map((tool, index) => (
                <div 
                  key={tool.id}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <AIToolCard tool={tool} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <SlidersHorizontal className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">No tools found</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                We couldn't find any tools matching your criteria. Try adjusting your search or filters.
              </p>
              <Button onClick={clearAllFilters} variant="outline">
                Clear All Filters
              </Button>
            </div>
          )}

          {/* Load More Button (if needed for pagination) */}
          {sortedTools.length >= 20 && (
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-6 text-lg rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
              >
                Load More Tools
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AITools;