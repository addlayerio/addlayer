
import { Code, Database, Layers, Monitor, Shield, Zap, Cloud, Users, RefreshCw, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom web and mobile applications with the latest technologies and best practices.',
      features: ['Full-Stack Development', 'REST APIs', 'Mobile Applications']
    },
    {
      icon: Layers,
      title: 'Systems Architecture',
      description: 'We design scalable and robust architectures that grow with your business.',
      features: ['Microservices', 'Cloud Architecture', 'DevOps']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'From migration to optimization, we ensure seamless and scalable cloud integration for your business.',
      features: ['Cloud Migration', 'AWS & Azure', 'Infrastructure Optimization']
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Build the right platform to outpace competition and scale confidently.',
      features: ['Digital Strategy', 'Technology Assessment', 'Business Growth']
    },
    {
      icon: RefreshCw,
      title: 'Tech Refresh',
      description: 'Build the right platform to outpace competition and scale confidently.',
      features: ['Legacy Modernization', 'Technology Upgrade', 'System Migration']
    },
    {
      icon: Building,
      title: 'Tech Hub',
      description: 'We not only craft bespoke applications for clients but also pioneer the development of innovative solutions.',
      features: ['Innovation Lab', 'Custom Solutions', 'R&D Services']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Complete solutions for handling, analyzing and visualizing enterprise data.',
      features: ['Big Data', 'Analytics', 'Business Intelligence']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'We protect your IT infrastructure with cutting-edge security solutions.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance']
    },
    {
      icon: Monitor,
      title: 'IT Consulting',
      description: 'Strategic advisory to optimize your technological infrastructure.',
      features: ['Digital Transformation', 'IT Strategy', 'Process Optimization']
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'We automate processes to increase efficiency and reduce operational costs.',
      features: ['RPA', 'CI/CD', 'Infrastructure as Code']
    }
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We connect every layer of your technological vision with expert solutions 
            that drive your business towards the digital future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background border-border shadow-lg hover:border-addlayer-green/50"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-addlayer-green/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-addlayer-green/30 transition-colors">
                    <Icon className="w-8 h-8 text-addlayer-green" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-addlayer-green transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-addlayer-green font-medium">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
