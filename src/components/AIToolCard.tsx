import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ExternalLink, Heart, Share2 } from 'lucide-react';
import { AITool } from '@/data/aiTools';

interface AIToolCardProps {
  tool: AITool;
  featured?: boolean;
}

const AIToolCard = ({ tool, featured = false }: AIToolCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Free':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Freemium':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Paid':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const cardSize = featured ? 'lg:col-span-2' : '';

  return (
    <Card 
      className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 ${cardSize}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Popular Badge */}
      {tool.tags.includes('popular') && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
            🔥 Popular
          </Badge>
        </div>
      )}

      <CardHeader className="relative pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
              {tool.name}
            </CardTitle>
            <CardDescription className="text-base leading-relaxed">
              {tool.description}
            </CardDescription>
          </div>
          
          {/* Tool Image/Icon */}
          <div className="ml-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
            {tool.name.charAt(0)}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(tool.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium">{tool.rating}</span>
          <Badge variant="outline" className={getPricingColor(tool.pricing)}>
            {tool.pricing}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="relative">
        {/* Category */}
        <div className="mb-4">
          <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700">
            {tool.category}
          </Badge>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wide">
            Key Features
          </h4>
          <div className="space-y-1">
            {tool.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center text-sm">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tool.tags.slice(0, 3).map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="text-xs bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsLiked(!isLiked)}
              className={`transition-colors ${isLiked ? 'text-red-500' : 'text-muted-foreground'}`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
          
          <Button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open(tool.website, '_blank')}
          >
            Try Now
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>

      {/* Hover Effect */}
      <div className={`absolute inset-0 border-2 border-blue-600/20 rounded-lg transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </Card>
  );
};

export default AIToolCard;