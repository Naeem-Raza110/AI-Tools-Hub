import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI Writing: How ChatGPT and Claude Are Changing Content Creation',
      excerpt: 'Explore how AI writing tools are revolutionizing content creation, from blog posts to marketing copy, and what this means for writers and businesses.',
      category: 'AI Writing',
      author: 'Alex Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      image: '/api/placeholder/400/250',
      featured: true,
      tags: ['ChatGPT', 'Claude', 'Content Creation', 'Writing']
    },
    {
      id: 2,
      title: 'Midjourney vs DALL-E 3: The Ultimate AI Art Generator Comparison',
      excerpt: 'A comprehensive comparison of the two leading AI art generators, including features, pricing, and which one is best for different use cases.',
      category: 'AI Art',
      author: 'Sarah Chen',
      date: '2024-01-12',
      readTime: '12 min read',
      image: '/api/placeholder/400/250',
      featured: true,
      tags: ['Midjourney', 'DALL-E', 'AI Art', 'Comparison']
    },
    {
      id: 3,
      title: '10 AI Tools Every Developer Should Know in 2024',
      excerpt: 'Discover the essential AI coding assistants and development tools that are boosting programmer productivity and code quality.',
      category: 'Development',
      author: 'Mike Rodriguez',
      date: '2024-01-10',
      readTime: '10 min read',
      image: '/api/placeholder/400/250',
      featured: false,
      tags: ['GitHub Copilot', 'Development', 'Coding', 'Productivity']
    },
    {
      id: 4,
      title: 'AI Video Generation: From Text to Hollywood-Quality Content',
      excerpt: 'How AI video generators like Runway and Pika are democratizing video creation and what this means for content creators.',
      category: 'AI Video',
      author: 'Sarah Chen',
      date: '2024-01-08',
      readTime: '7 min read',
      image: '/api/placeholder/400/250',
      featured: false,
      tags: ['Runway', 'Pika', 'Video Generation', 'Content Creation']
    },
    {
      id: 5,
      title: 'The Rise of AI Voice Cloning: ElevenLabs and the Future of Audio',
      excerpt: 'Exploring the capabilities and implications of AI voice synthesis technology and its applications across industries.',
      category: 'AI Audio',
      author: 'Alex Johnson',
      date: '2024-01-05',
      readTime: '9 min read',
      image: '/api/placeholder/400/250',
      featured: false,
      tags: ['ElevenLabs', 'Voice Cloning', 'Audio AI', 'Synthesis']
    },
    {
      id: 6,
      title: 'Building Your AI-Powered Business: A Complete Guide',
      excerpt: 'Step-by-step guide to integrating AI tools into your business workflow and maximizing productivity and efficiency.',
      category: 'Business',
      author: 'Mike Rodriguez',
      date: '2024-01-03',
      readTime: '15 min read',
      image: '/api/placeholder/400/250',
      featured: false,
      tags: ['Business AI', 'Productivity', 'Workflow', 'Integration']
    }
  ];

  const categories = ['All', 'AI Writing', 'AI Art', 'Development', 'AI Video', 'AI Audio', 'Business'];
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-emerald-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
              📝 AI Insights Blog
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Stay Ahead of the
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Revolution
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Get the latest insights, reviews, and tutorials on AI tools. Learn from experts and discover 
              how to leverage artificial intelligence to transform your work and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Subscribe to Newsletter
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg rounded-xl border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
              >
                Browse Categories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <TrendingUp className="h-6 w-6 text-emerald-600" />
            <h2 className="text-3xl font-bold">Featured Articles</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="group overflow-hidden border-0 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-800 dark:to-emerald-900/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900/20 dark:to-blue-900/20 flex items-center justify-center">
                  <Sparkles className="h-16 w-16 text-emerald-600" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
                      {post.category}
                    </Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? "default" : "outline"}
                className={`transition-all duration-200 ${
                  category === 'All'
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="group overflow-hidden border-0 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                  <Sparkles className="h-12 w-12 text-blue-600" />
                </div>
                <CardHeader>
                  <Badge className="w-fit bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 mb-3">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-6 text-lg rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with AI Trends
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Get weekly insights, tool reviews, and expert tips delivered to your inbox. 
              Join 10,000+ AI enthusiasts who trust our newsletter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl border-0 text-lg focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <Button 
                size="lg" 
                className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Subscribe
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;