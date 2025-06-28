
import { Code, Database, Layers, Monitor, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Desarrollo de Software',
      description: 'Aplicaciones web y móviles personalizadas con las últimas tecnologías y mejores prácticas.',
      features: ['React & Node.js', 'APIs REST', 'Aplicaciones Móviles']
    },
    {
      icon: Layers,
      title: 'Arquitectura de Sistemas',
      description: 'Diseñamos arquitecturas escalables y robustas que crecen con tu negocio.',
      features: ['Microservicios', 'Cloud Architecture', 'DevOps']
    },
    {
      icon: Database,
      title: 'Gestión de Datos',
      description: 'Soluciones completas para el manejo, análisis y visualización de datos empresariales.',
      features: ['Big Data', 'Analytics', 'Business Intelligence']
    },
    {
      icon: Shield,
      title: 'Ciberseguridad',
      description: 'Protegemos tu infraestructura IT con soluciones de seguridad de vanguardia.',
      features: ['Auditorías de Seguridad', 'Pentesting', 'Compliance']
    },
    {
      icon: Monitor,
      title: 'Consultoría IT',
      description: 'Asesoramiento estratégico para optimizar tu infraestructura tecnológica.',
      features: ['Transformación Digital', 'IT Strategy', 'Process Optimization']
    },
    {
      icon: Zap,
      title: 'Automatización',
      description: 'Automatizamos procesos para aumentar la eficiencia y reducir costos operativos.',
      features: ['RPA', 'CI/CD', 'Infrastructure as Code']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-addlayer-dark mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conectamos cada capa de tu visión tecnológica con soluciones expertas 
            que impulsan tu negocio hacia el futuro digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-addlayer-green/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-addlayer-green/20 transition-colors">
                    <Icon className="w-8 h-8 text-addlayer-green" />
                  </div>
                  <CardTitle className="text-xl text-addlayer-dark group-hover:text-addlayer-green transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
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
