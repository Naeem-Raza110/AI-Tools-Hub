import { useState, useMemo } from 'react';
import { AITool } from '@/data/aiTools';

export const useSearch = (tools: AITool[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTools = useMemo(() => {
    let filtered = tools;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query) ||
        tool.features.some(feature => feature.toLowerCase().includes(query)) ||
        tool.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Apply additional filters
    if (activeFilters.length > 0) {
      filtered = filtered.filter(tool => {
        return activeFilters.every(filter => {
          switch (filter) {
            case 'free':
              return tool.pricing === 'Free';
            case 'freemium':
              return tool.pricing === 'Freemium';
            case 'popular':
              return tool.tags.includes('popular');
            case 'new':
              return tool.tags.includes('new');
            case 'high-rated':
              return tool.rating >= 4.5;
            case 'open-source':
              return tool.tags.includes('open-source');
            case 'enterprise':
              return tool.tags.includes('enterprise');
            case 'api':
              return tool.tags.includes('api');
            default:
              return true;
          }
        });
      });
    }

    return filtered;
  }, [tools, searchQuery, activeFilters, selectedCategory]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filters: string[]) => {
    setActiveFilters(filters);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setActiveFilters([]);
    setSelectedCategory('All');
  };

  return {
    searchQuery,
    activeFilters,
    selectedCategory,
    filteredTools,
    handleSearch,
    handleFilterChange,
    handleCategoryChange,
    clearAllFilters,
    totalResults: filteredTools.length,
    hasActiveFilters: searchQuery.trim() !== '' || activeFilters.length > 0 || selectedCategory !== 'All'
  };
};