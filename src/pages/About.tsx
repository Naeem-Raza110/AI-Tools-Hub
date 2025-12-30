import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Sparkles, Target, Users, Zap, Heart, Star, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Curated Selection',
      description: 'Every AI tool is carefully reviewed and tested by our expert team to ensure quality and reliability.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by the community, for the community. We listen to user feedback and continuously improve.'
    },
    {
      icon: Zap,
      title: 'Always Updated',
      description: 'Our database is constantly updated with the latest AI tools and features as they become available.'
    },
    {
      icon: Shield,
      title: 'Trusted Reviews',
      description: 'Honest, unbiased reviews and ratings from real users to help you make informed decisions.'
    }
  ];

  const stats = [
    { label: 'AI Tools', value: '50+', icon: Sparkles },
    { label: 'Categories', value: '12', icon: Target },
    { label: 'User Reviews', value: '1000+', icon: Star },
    { label: 'Monthly Users', value: '10K+', icon: TrendingUp }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & AI Researcher',
      description: 'Former AI researcher at Google with 10+ years of experience in machine learning and AI development.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      description: 'Product strategist with expertise in AI tools and user experience design.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Technical Lead',
      description: 'Full-stack developer specializing in AI integration and platform development.',
      image: '/api/placeholder/150/150'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              ✨ About Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Gateway to the
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
                AI Revolution
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We're on a mission to democratize access to AI tools and help everyone harness the power of artificial intelligence. 
              Our platform connects you with the best AI solutions to transform your work and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link to="/ai-tools">
                  Explore AI Tools
                  <Sparkles className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg rounded-xl border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that AI should be accessible to everyone, not just tech giants and researchers. 
              Our mission is to bridge the gap between cutting-edge AI technology and everyday users by providing 
              a comprehensive, easy-to-navigate platform that showcases the best AI tools available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="text-center border-0 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center text-white"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                How we started and where we're heading
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mb-6">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">The Beginning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    It all started when our founder, Alex, was overwhelmed by the sheer number of AI tools available. 
                    As an AI researcher, he knew the potential of these tools but struggled to find reliable information 
                    about which ones actually worked. That's when the idea for AI Tools Hub was born.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center">
                    <Sparkles className="h-24 w-24 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-emerald-600 rounded-3xl flex items-center justify-center mb-6">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Growing Community</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    What started as a personal project quickly grew into a community-driven platform. 
                    Users began sharing their experiences, rating tools, and helping others discover the perfect AI solutions. 
                    Today, we're proud to serve thousands of users worldwide.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-emerald-100 dark:from-purple-900/20 dark:to-emerald-900/20 rounded-2xl flex items-center justify-center">
                    <Users className="h-24 w-24 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're a passionate team of AI enthusiasts, developers, and researchers dedicated to making AI accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="text-center border-0 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-emerald-50 dark:from-purple-900/20 dark:to-emerald-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be part of the AI revolution. Discover tools that will transform your work, 
              contribute to our community, and help shape the future of AI accessibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link to="/ai-tools">
                  Start Exploring
                  <Sparkles className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg rounded-xl border-2 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Contact Us
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

export default About;