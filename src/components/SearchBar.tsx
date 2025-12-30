import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: string[]) => void;
  placeholder?: string;
  showFilters?: boolean;
}

const SearchBar = ({ 
  onSearch, 
  onFilterChange, 
  placeholder = "Search AI tools...", 
  showFilters = true 
}: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showFilterPanel, setShowFilterPanel] = useState(false);

  const filterOptions = [
    { label: 'Free', value: 'free' },
    { label: 'Freemium', value: 'freemium' },
    { label: 'Popular', value: 'popular' },
    { label: 'New', value: 'new' },
    { label: 'High Rated', value: 'high-rated' },
    { label: 'Open Source', value: 'open-source' },
    { label: 'Enterprise', value: 'enterprise' },
    { label: 'API Available', value: 'api' },
  ];

  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(delayedSearch);
  }, [query, onSearch]);

  useEffect(() => {
    onFilterChange(activeFilters);
  }, [activeFilters, onFilterChange]);

  const handleClearSearch = () => {
    setQuery('');
    onSearch('');
  };

  const toggleFilter = (filterValue: string) => {
    setActiveFilters(prev => 
      prev.includes(filterValue)
        ? prev.filter(f => f !== filterValue)
        : [...prev, filterValue]
    );
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  return (
    <div className="w-full space-y-4">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl blur-xl" />
        <div className="relative flex items-center bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
          <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 pr-20 py-6 text-lg border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl"
          />
          
          {/* Clear Button */}
          {query && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearSearch}
              className="absolute right-16 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </Button>
          )}

          {/* Filter Toggle */}
          {showFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowFilterPanel(!showFilterPanel)}
              className={`absolute right-2 ${activeFilters.length > 0 ? 'text-blue-600' : 'text-muted-foreground'}`}
            >
              <Filter className="h-4 w-4" />
              {activeFilters.length > 0 && (
                <Badge className="ml-1 h-5 w-5 p-0 text-xs bg-blue-600 text-white">
                  {activeFilters.length}
                </Badge>
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {activeFilters.map((filter) => {
            const filterOption = filterOptions.find(f => f.value === filter);
            return (
              <Badge
                key={filter}
                variant="secondary"
                className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                onClick={() => toggleFilter(filter)}
              >
                {filterOption?.label}
                <X className="ml-1 h-3 w-3" />
              </Badge>
            );
          })}
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Clear all
          </Button>
        </div>
      )}

      {/* Filter Panel */}
      {showFilterPanel && showFilters && (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Filter Tools</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowFilterPanel(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {filterOptions.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilters.includes(filter.value) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleFilter(filter.value)}
                className={`justify-start ${
                  activeFilters.includes(filter.value)
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {activeFilters.length > 0 && (
            <div className="mt-4 pt-4 border-t">
              <Button
                variant="outline"
                size="sm"
                onClick={clearAllFilters}
                className="w-full"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;