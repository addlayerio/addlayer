
import { Award, Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Enfoque en Resultados',
      description: 'Cada proyecto tiene objetivos claros y métricas de éxito definidas.'
    },
    {
      icon: Lightbulb,
      title: 'Innovación Constante',
      description: 'Adoptamos las últimas tecnologías para mantenerte a la vanguardia.'
    },
    {
      icon: Users,
      title: 'Trabajo Colaborativo',
      description: 'Trabajamos codo a codo contigo en cada etapa del proyecto.'
    },
    {
      icon: Award,
      title: 'Calidad Garantizada',
      description: 'Estándares de calidad enterprise en cada línea de código.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Construimos el Futuro
                <span className="text-addlayer-green"> Capa por Capa</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                En AddLayer, entendemos que cada solución tecnológica exitosa se construye 
                mediante capas interconectadas de expertise, innovación y dedicación. 
                Somos tu socio estratégico en la transformación digital.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Desde startups disruptivas hasta empresas consolidadas, hemos ayudado a 
                organizaciones de todos los tamaños a materializar su visión IT con 
                soluciones robustas, escalables y orientadas al futuro.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-addlayer-green/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-addlayer-green" />
                      </div>
                      <h3 className="font-semibold text-foreground">{value.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed pl-13">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Layered design representing the company concept */}
              <div className="space-y-4">
                <div className="h-20 bg-addlayer-gradient rounded-xl opacity-90 flex items-center justify-center">
                  <span className="text-addlayer-darker font-bold text-lg">VISIÓN</span>
                </div>
                <div className="h-20 bg-addlayer-green/80 rounded-xl ml-8 flex items-center justify-center">
                  <span className="text-addlayer-darker font-bold text-lg">ESTRATEGIA</span>
                </div>
                <div className="h-20 bg-addlayer-green/60 rounded-xl ml-16 flex items-center justify-center">
                  <span className="text-background font-bold text-lg">DESARROLLO</span>
                </div>
                <div className="h-20 bg-addlayer-green/40 rounded-xl ml-24 flex items-center justify-center">
                  <span className="text-foreground font-bold text-lg">IMPLEMENTACIÓN</span>
                </div>
                <div className="h-20 bg-addlayer-green/20 rounded-xl ml-32 flex items-center justify-center border border-addlayer-green/30">
                  <span className="text-addlayer-green font-bold text-lg">ÉXITO</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-addlayer-green/10 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-addlayer-green/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
