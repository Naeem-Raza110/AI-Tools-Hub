export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  pricing: 'Free' | 'Freemium' | 'Paid';
  website: string;
  features: string[];
  rating: number;
  image: string;
  tags: string[];
}

export const aiTools: AITool[] = [
  // Writing & Content
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Advanced AI chatbot for conversations, writing, coding, and problem-solving.',
    category: 'Writing & Content',
    pricing: 'Freemium',
    website: 'https://chat.openai.com',
    features: ['Natural language processing', 'Code generation', 'Creative writing', 'Problem solving'],
    rating: 4.8,
    image: '/api/placeholder/300/200',
    tags: ['chatbot', 'writing', 'coding', 'popular']
  },
  {
    id: '2',
    name: 'Claude',
    description: 'Anthropic\'s AI assistant for analysis, writing, math, coding, and creative tasks.',
    category: 'Writing & Content',
    pricing: 'Freemium',
    website: 'https://claude.ai',
    features: ['Long-form analysis', 'Code review', 'Creative writing', 'Research assistance'],
    rating: 4.7,
    image: '/api/placeholder/300/200',
    tags: ['assistant', 'analysis', 'writing']
  },
  {
    id: '3',
    name: 'Copy.ai',
    description: 'AI-powered copywriting tool for marketing content, emails, and social media.',
    category: 'Writing & Content',
    pricing: 'Freemium',
    website: 'https://copy.ai',
    features: ['Marketing copy', 'Email templates', 'Social media content', 'Blog posts'],
    rating: 4.5,
    image: '/api/placeholder/300/200',
    tags: ['copywriting', 'marketing', 'templates']
  },
  {
    id: '4',
    name: 'Jasper',
    description: 'Enterprise AI writing assistant for teams and businesses.',
    category: 'Writing & Content',
    pricing: 'Paid',
    website: 'https://jasper.ai',
    features: ['Brand voice', 'Team collaboration', 'Long-form content', 'SEO optimization'],
    rating: 4.6,
    image: '/api/placeholder/300/200',
    tags: ['enterprise', 'teams', 'seo']
  },
  {
    id: '5',
    name: 'Writesonic',
    description: 'AI writing tool for articles, ads, emails, and website copy.',
    category: 'Writing & Content',
    pricing: 'Freemium',
    website: 'https://writesonic.com',
    features: ['Article writing', 'Ad copy', 'Email marketing', 'Landing pages'],
    rating: 4.4,
    image: '/api/placeholder/300/200',
    tags: ['articles', 'ads', 'landing-pages']
  },

  // Image Generation
  {
    id: '6',
    name: 'DALL-E 3',
    description: 'OpenAI\'s advanced text-to-image generation model.',
    category: 'Image Generation',
    pricing: 'Paid',
    website: 'https://openai.com/dall-e-3',
    features: ['High-quality images', 'Text integration', 'Style variety', 'Commercial use'],
    rating: 4.8,
    image: '/api/placeholder/300/200',
    tags: ['text-to-image', 'high-quality', 'commercial']
  },
  {
    id: '7',
    name: 'Midjourney',
    description: 'AI art generator creating stunning visual content from text prompts.',
    category: 'Image Generation',
    pricing: 'Paid',
    website: 'https://midjourney.com',
    features: ['Artistic styles', 'High resolution', 'Community gallery', 'Discord integration'],
    rating: 4.9,
    image: '/api/placeholder/300/200',
    tags: ['art', 'creative', 'discord', 'popular']
  },
  {
    id: '8',
    name: 'Stable Diffusion',
    description: 'Open-source text-to-image model for generating detailed images.',
    category: 'Image Generation',
    pricing: 'Free',
    website: 'https://stability.ai',
    features: ['Open source', 'Customizable', 'Local deployment', 'Fine-tuning'],
    rating: 4.6,
    image: '/api/placeholder/300/200',
    tags: ['open-source', 'customizable', 'local']
  },
  {
    id: '9',
    name: 'Leonardo AI',
    description: 'AI image generator with focus on game assets and creative content.',
    category: 'Image Generation',
    pricing: 'Freemium',
    website: 'https://leonardo.ai',
    features: ['Game assets', 'Character design', 'Concept art', 'Multiple models'],
    rating: 4.5,
    image: '/api/placeholder/300/200',
    tags: ['gaming', 'characters', 'concept-art']
  },
  {
    id: '10',
    name: 'Adobe Firefly',
    description: 'Adobe\'s AI image generator integrated with Creative Cloud.',
    category: 'Image Generation',
    pricing: 'Freemium',
    website: 'https://firefly.adobe.com',
    features: ['Creative Cloud integration', 'Commercial safe', 'Style matching', 'Text effects'],
    rating: 4.4,
    image: '/api/placeholder/300/200',
    tags: ['adobe', 'creative-cloud', 'commercial']
  },

  // Video Generation
  {
    id: '11',
    name: 'Runway ML',
    description: 'AI-powered video editing and generation platform.',
    category: 'Video Generation',
    pricing: 'Freemium',
    website: 'https://runwayml.com',
    features: ['Text-to-video', 'Video editing', 'Motion graphics', 'Real-time generation'],
    rating: 4.6,
    image: '/api/placeholder/300/200',
    tags: ['video-editing', 'motion-graphics', 'real-time']
  },
  {
    id: '12',
    name: 'Pika Labs',
    description: 'AI video generator creating videos from text and images.',
    category: 'Video Generation',
    pricing: 'Freemium',
    website: 'https://pika.art',
    features: ['Text-to-video', 'Image-to-video', 'Style control', 'Short clips'],
    rating: 4.3,
    image: '/api/placeholder/300/200',
    tags: ['text-to-video', 'image-to-video', 'clips']
  },
  {
    id: '13',
    name: 'Synthesia',
    description: 'AI video platform for creating videos with AI avatars.',
    category: 'Video Generation',
    pricing: 'Paid',
    website: 'https://synthesia.io',
    features: ['AI avatars', 'Multiple languages', 'Custom avatars', 'Enterprise features'],
    rating: 4.5,
    image: '/api/placeholder/300/200',
    tags: ['avatars', 'multilingual', 'enterprise']
  },
  {
    id: '14',
    name: 'HeyGen',
    description: 'AI video generator with realistic avatars and voice cloning.',
    category: 'Video Generation',
    pricing: 'Freemium',
    website: 'https://heygen.com',
    features: ['Voice cloning', 'Avatar creation', 'Multi-language', 'API access'],
    rating: 4.4,
    image: '/api/placeholder/300/200',
    tags: ['voice-cloning', 'avatars', 'api']
  },
  {
    id: '15',
    name: 'Luma AI',
    description: '3D capture and AI video generation technology.',
    category: 'Video Generation',
    pricing: 'Freemium',
    website: 'https://lumalabs.ai',
    features: ['3D capture', 'NeRF technology', 'Mobile app', 'High quality'],
    rating: 4.2,
    image: '/api/placeholder/300/200',
    tags: ['3d-capture', 'nerf', 'mobile']
  },

  // Code Generation
  {
    id: '16',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps write code faster.',
    category: 'Code Generation',
    pricing: 'Paid',
    website: 'https://github.com/features/copilot',
    features: ['Code completion', 'Multiple languages', 'IDE integration', 'Context awareness'],
    rating: 4.7,
    image: '/api/placeholder/300/200',
    tags: ['github', 'ide', 'completion', 'popular']
  },
  {
    id: '17',
    name: 'Cursor',
    description: 'AI-powered code editor built for productivity.',
    category: 'Code Generation',
    pricing: 'Freemium',
    website: 'https://cursor.sh',
    features: ['AI chat', 'Code generation', 'Refactoring', 'Multi-file editing'],
    rating: 4.6,
    image: '/api/placeholder/300/200',
    tags: ['editor', 'chat', 'refactoring']
  },
  {
    id: '18',
    name: 'Replit Ghostwriter',
    description: 'AI coding assistant integrated with Replit IDE.',
    category: 'Code Generation',
    pricing: 'Freemium',
    website: 'https://replit.com',
    features: ['Code completion', 'Error fixing', 'Code explanation', 'Collaborative coding'],
    rating: 4.3,
    image: '/api/placeholder/300/200',
    tags: ['replit', 'collaborative', 'explanation']
  },
  {
    id: '19',
    name: 'Tabnine',
    description: 'AI code completion tool for developers.',
    category: 'Code Generation',
    pricing: 'Freemium',
    website: 'https://tabnine.com',
    features: ['Code prediction', 'Team learning', 'Privacy focused', 'IDE plugins'],
    rating: 4.4,
    image: '/api/placeholder/300/200',
    tags: ['prediction', 'privacy', 'plugins']
  },
  {
    id: '20',
    name: 'Amazon CodeWhisperer',
    description: 'AWS AI coding companion for multiple programming languages.',
    category: 'Code Generation',
    pricing: 'Freemium',
    website: 'https://aws.amazon.com/codewhisperer',
    features: ['AWS integration', 'Security scanning', 'Multiple languages', 'Enterprise support'],
    rating: 4.2,
    image: '/api/placeholder/300/200',
    tags: ['aws', 'security', 'enterprise']
  },

  // Audio & Music
  {
    id: '21',
    name: 'ElevenLabs',
    description: 'AI voice generator with realistic speech synthesis.',
    category: 'Audio & Music',
    pricing: 'Freemium',
    website: 'https://elevenlabs.io',
    features: ['Voice cloning', 'Multiple languages', 'Emotional speech', 'API access'],
    rating: 4.8,
    image: '/api/placeholder/300/200',
    tags: ['voice-cloning', 'multilingual', 'api', 'popular']
  },
  {
    id: '22',
    name: 'Murf AI',
    description: 'AI voice generator for voiceovers and narration.',
    category: 'Audio & Music',
    pricing: 'Freemium',
    website: 'https://murf.ai',
    features: ['Professional voices', 'Voice editing', 'Team collaboration', 'Commercial use'],
    rating: 4.5,
    image: '/api/placeholder/300/200',
    tags: ['voiceover', 'professional', 'commercial']
  },
  {
    id: '23',
    name: 'AIVA',
    description: 'AI music composer for soundtracks and background music.',
    category: 'Audio & Music',
    pricing: 'Freemium',
    website: 'https://aiva.ai',
    features: ['Music composition', 'Multiple genres', 'Customizable', 'Royalty-free'],
    rating: 4.3,
    image: '/api/placeholder/300/200',
    tags: ['music', 'composition', 'royalty-free']
  },
  {
    id: '24',
    name: 'Suno AI',
    description: 'AI music generator creating songs from text prompts.',
    category: 'Audio & Music',
    pricing: 'Freemium',
    website: 'https://suno.ai',
    features: ['Text-to-music', 'Lyrics generation', 'Multiple styles', 'High quality'],
    rating: 4.6,
    image: '/api/placeholder/300/200',
    tags: ['text-to-music', 'lyrics', 'styles']
  },
  {
    id: '25',
    name: 'Speechify',
    description: 'AI text-to-speech tool for reading content aloud.',
    category: 'Audio & Music',
    pricing: 'Freemium',
    website: 'https://speechify.com',
    features: ['Text-to-speech', 'Speed control', 'Voice selection', 'Mobile app'],
    rating: 4.4,
    image: '/api/placeholder/300/200',
    tags: ['text-to-speech', 'mobile', 'accessibility']
  },

  // Business & Productivity
  {
    id: '26',
    name: 'Notion AI',
    description: 'AI writing assistant integrated with Notion workspace.',
    category: 'Business & Productivity',
    pricing: 'Paid',
    website: 'https://notion.so',
    features: ['Writing assistance', 'Content generation', 'Workspace integration', 'Team features'],
    rating: 4.5,
    image: '/api/placeholder/300/200',
    tags: ['notion', 'workspace', 'teams']
  },
  {
    id: '27',
    name: 'Grammarly',
    description: 'AI writing assistant for grammar, spelling, and style.',
    category: 'Business & Productivity',
    pricing: 'Freemium',
    website: 'https://grammarly.com',
    features: ['Grammar checking', 'Style suggestions', 'Plagiarism detection', 'Browser extension'],
    rating: 4.6,
    image: '/api/placeholder/300/200',
    tags: ['grammar', 'style', 'browser-extension', 'popular']
  },
  {
    id: '28',
    name: 'Zapier AI',
    description: 'AI-powered automation platform for connecting apps.',
    category: 'Business & Productivity',
    pricing: 'Freemium',
    website: 'https://zapier.com',
    features: ['Workflow automation', 'App integrations', 'AI suggestions', 'No-code'],
    rating: 4.4,
    image: '/api/placeholder/300/200',
    tags: ['automation', 'integrations', 'no-code']
  },
  {
    id: '29',
    name: 'Monday.com AI',
    description: 'AI-enhanced project management and team collaboration.',
    category: 'Business & Productivity',
    pricing: 'Paid',
    website: 'https://monday.com',
    features: ['Project management', 'AI insights', 'Team collaboration', 'Custom workflows'],
    rating: 4.3,
    image: '/api/placeholder/300/200',
    tags: ['project-management', 'insights', 'workflows']
  },
  {
    id: '30',
    name: 'Calendly AI',
    description: 'AI-powered scheduling assistant for meetings.',
    category: 'Business & Productivity',
    pricing: 'Freemium',
    website: 'https://calendly.com',
    features: ['Smart scheduling', 'Meeting optimization', 'Calendar integration', 'Automated reminders'],
    rating: 4.5,
    image: '/api/placeholder/300/200',
    tags: ['scheduling', 'meetings', 'calendar']
  },

  // Design & Creative
  {
    id: '31',
    name: 'Canva AI',
    description: 'AI-powered design platform for graphics and presentations.',
    category: 'Design & Creative',
    pricing: 'Freemium',
    website: 'https://canva.com',
    features: ['Design templates', 'AI image generation', 'Brand kit', 'Team collaboration'],
    rating: 4.7,
    image: '/api/placeholder/300/200',
    tags: ['design', 'templates', 'branding', 'popular']
  },
  {
    id: '32',
    name: 'Figma AI',
    description: 'AI features integrated into Figma design platform.',
    category: 'Design & Creative',
    pricing: 'Freemium',
    website: 'https://figma.com',
    features: ['Design assistance', 'Auto-layout', 'Component generation', 'Collaborative design'],
    rating: 4.6,
    image: '/api/placeholder/300/200',
    tags: ['figma', 'ui-design', 'collaboration']
  },
  {
    id: '33',
    name: 'Looka',
    description: 'AI logo maker and brand identity designer.',
    category: 'Design & Creative',
    pricing: 'Paid',
    website: 'https://looka.com',
    features: ['Logo generation', 'Brand kit', 'Business cards', 'Marketing materials'],
    rating: 4.4,
    image: '/api/placeholder/300/200',
    tags: ['logo', 'branding', 'marketing']
  },
  {
    id: '34',
    name: 'Uizard',
    description: 'AI-powered UI design tool for rapid prototyping.',
    category: 'Design & Creative',
    pricing: 'Freemium',
    website: 'https://uizard.io',
    features: ['Wireframe generation', 'Design-to-code', 'Collaboration', 'Mobile mockups'],
    rating: 4.2,
    image: '/api/placeholder/300/200',
    tags: ['ui-design', 'prototyping', 'wireframes']
  },
  {
    id: '35',
    name: 'Framer AI',
    description: 'AI website builder with advanced design capabilities.',
    category: 'Design & Creative',
    pricing: 'Freemium',
    website: 'https://framer.com',
    features: ['Website generation', 'Interactive prototypes', 'CMS integration', 'Responsive design'],
    rating: 4.5,
    image: '/api/placeholder/300/200',
    tags: ['website-builder', 'prototypes', 'responsive']
  },

  // Data & Analytics
  {
    id: '36',
    name: 'Tableau AI',
    description: 'AI-powered data visualization and analytics platform.',
    category: 'Data & Analytics',
    pricing: 'Paid',
    website: 'https://tableau.com',
    features: ['Data visualization', 'Predictive analytics', 'Natural language queries', 'Dashboard automation'],
    rating: 4.6,
    image: '/api/placeholder/300/200',
    tags: ['visualization', 'analytics', 'dashboards']
  },
  {
    id: '37',
    name: 'DataRobot',
    description: 'Automated machine learning platform for businesses.',
    category: 'Data & Analytics',
    pricing: 'Paid',
    website: 'https://datarobot.com',
    features: ['AutoML', 'Model deployment', 'Predictive modeling', 'Enterprise features'],
    rating: 4.4,
    image: '/api/placeholder/300/200',
    tags: ['automl', 'enterprise', 'predictive']
  },
  {
    id: '38',
    name: 'H2O.ai',
    description: 'Open-source machine learning and AI platform.',
    category: 'Data & Analytics',
    pricing: 'Freemium',
    website: 'https://h2o.ai',
    features: ['Machine learning', 'AutoML', 'Model interpretability', 'Scalable deployment'],
    rating: 4.3,
    image: '/api/placeholder/300/200',
    tags: ['machine-learning', 'open-source', 'scalable']
  },
  {
    id: '39',
    name: 'Databricks AI',
    description: 'Unified analytics platform for big data and machine learning.',
    category: 'Data & Analytics',
    pricing: 'Paid',
    website: 'https://databricks.com',
    features: ['Data lakehouse', 'MLOps', 'Collaborative notebooks', 'Real-time analytics'],
    rating: 4.5,
    image: '/api/placeholder/300/200',
    tags: ['big-data', 'mlops', 'real-time']
  },
  {
    id: '40',
    name: 'Alteryx AI',
    description: 'Self-service data analytics platform with AI capabilities.',
    category: 'Data & Analytics',
    pricing: 'Paid',
    website: 'https://alteryx.com',
    features: ['Data preparation', 'Predictive analytics', 'Workflow automation', 'No-code interface'],
    rating: 4.2,
    image: '/api/placeholder/300/200',
    tags: ['data-prep', 'no-code', 'workflows']
  },

  // Customer Service
  {
    id: '41',
    name: 'Intercom AI',
    description: 'AI-powered customer service and support platform.',
    category: 'Customer Service',
    pricing: 'Paid',
    website: 'https://intercom.com',
    features: ['Chatbot automation', 'Ticket routing', 'Customer insights', 'Multi-channel support'],
    rating: 4.5,
    image: '/api/placeholder/300/200',
    tags: ['chatbot', 'support', 'multi-channel']
  },
  {
    id: '42',
    name: 'Zendesk AI',
    description: 'AI-enhanced customer service and ticketing system.',
    category: 'Customer Service',
    pricing: 'Paid',
    website: 'https://zendesk.com',
    features: ['Smart routing', 'Answer bot', 'Sentiment analysis', 'Performance analytics'],
    rating: 4.4,
    image: '/api/placeholder/300/200',
    tags: ['ticketing', 'sentiment', 'analytics']
  },
  {
    id: '43',
    name: 'Ada',
    description: 'AI chatbot platform for customer service automation.',
    category: 'Customer Service',
    pricing: 'Paid',
    website: 'https://ada.cx',
    features: ['Conversational AI', 'Multi-language support', 'Integration APIs', 'Analytics dashboard'],
    rating: 4.3,
    image: '/api/placeholder/300/200',
    tags: ['conversational-ai', 'multilingual', 'apis']
  },
  {
    id: '44',
    name: 'LivePerson AI',
    description: 'Conversational AI platform for customer engagement.',
    category: 'Customer Service',
    pricing: 'Paid',
    website: 'https://liveperson.com',
    features: ['Messaging automation', 'Intent recognition', 'Agent assistance', 'Real-time insights'],
    rating: 4.2,
    image: '/api/placeholder/300/200',
    tags: ['messaging', 'intent', 'real-time']
  },
  {
    id: '45',
    name: 'Freshworks AI',
    description: 'AI-powered CRM and customer experience platform.',
    category: 'Customer Service',
    pricing: 'Freemium',
    website: 'https://freshworks.com',
    features: ['CRM automation', 'Lead scoring', 'Predictive contact scoring', 'Workflow automation'],
    rating: 4.4,
    image: '/api/placeholder/300/200',
    tags: ['crm', 'lead-scoring', 'automation']
  },

  // Marketing & SEO
  {
    id: '46',
    name: 'Surfer SEO',
    description: 'AI-powered SEO tool for content optimization.',
    category: 'Marketing & SEO',
    pricing: 'Paid',
    website: 'https://surferseo.com',
    features: ['Content optimization', 'Keyword research', 'SERP analysis', 'Content editor'],
    rating: 4.6,
    image: '/api/placeholder/300/200',
    tags: ['seo', 'content-optimization', 'keywords']
  },
  {
    id: '47',
    name: 'SEMrush AI',
    description: 'Comprehensive digital marketing toolkit with AI features.',
    category: 'Marketing & SEO',
    pricing: 'Paid',
    website: 'https://semrush.com',
    features: ['Keyword research', 'Competitor analysis', 'Content audit', 'PPC optimization'],
    rating: 4.7,
    image: '/api/placeholder/300/200',
    tags: ['digital-marketing', 'competitor-analysis', 'ppc', 'popular']
  },
  {
    id: '48',
    name: 'Ahrefs AI',
    description: 'SEO toolset with AI-powered insights and recommendations.',
    category: 'Marketing & SEO',
    pricing: 'Paid',
    website: 'https://ahrefs.com',
    features: ['Backlink analysis', 'Keyword explorer', 'Content gap analysis', 'Rank tracking'],
    rating: 4.8,
    image: '/api/placeholder/300/200',
    tags: ['backlinks', 'keyword-research', 'rank-tracking', 'popular']
  },
  {
    id: '49',
    name: 'Mailchimp AI',
    description: 'AI-enhanced email marketing and automation platform.',
    category: 'Marketing & SEO',
    pricing: 'Freemium',
    website: 'https://mailchimp.com',
    features: ['Email automation', 'Audience insights', 'Content optimizer', 'Send time optimization'],
    rating: 4.3,
    image: '/api/placeholder/300/200',
    tags: ['email-marketing', 'automation', 'insights']
  },
  {
    id: '50',
    name: 'HubSpot AI',
    description: 'AI-powered CRM and marketing automation platform.',
    category: 'Marketing & SEO',
    pricing: 'Freemium',
    website: 'https://hubspot.com',
    features: ['Marketing automation', 'Lead nurturing', 'Content strategy', 'Sales pipeline'],
    rating: 4.5,
    image: '/api/placeholder/300/200',
    tags: ['crm', 'marketing-automation', 'lead-nurturing']
  },

  // Additional Tools
  {
    id: '51',
    name: 'Perplexity AI',
    description: 'AI-powered search engine and research assistant.',
    category: 'Research & Analysis',
    pricing: 'Freemium',
    website: 'https://perplexity.ai',
    features: ['AI search', 'Source citations', 'Follow-up questions', 'Real-time information'],
    rating: 4.6,
    image: '/api/placeholder/300/200',
    tags: ['search', 'research', 'citations']
  },
  {
    id: '52',
    name: 'Character.AI',
    description: 'Platform for creating and chatting with AI characters.',
    category: 'Entertainment',
    pricing: 'Freemium',
    website: 'https://character.ai',
    features: ['Character creation', 'Roleplay conversations', 'Community sharing', 'Mobile app'],
    rating: 4.4,
    image: '/api/placeholder/300/200',
    tags: ['characters', 'roleplay', 'community']
  }
];

export const categories = [
  'All',
  'Writing & Content',
  'Image Generation',
  'Video Generation',
  'Code Generation',
  'Audio & Music',
  'Business & Productivity',
  'Design & Creative',
  'Data & Analytics',
  'Customer Service',
  'Marketing & SEO',
  'Research & Analysis',
  'Entertainment'
];