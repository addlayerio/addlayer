
import { ArrowRight, Code, Layers, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background via-card to-addlayer-green/5 pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Add<span className="text-addlayer-green">Layer</span>
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground font-medium">
                <span className="block">LAYERS THAT</span>
                <span className="block">CONNECT YOUR</span>
                <span className="block text-addlayer-green font-bold">IT VISION</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Transformamos tu visión tecnológica en realidad. Desde desarrollo hasta arquitectura, 
              construimos las capas que conectan tus ideas con soluciones innovadoras.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-addlayer-green hover:bg-addlayer-green/90 text-addlayer-darker px-8 py-4 text-lg group"
              >
                Comenzar Proyecto
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-addlayer-green text-addlayer-green hover:bg-addlayer-green hover:text-addlayer-darker px-8 py-4 text-lg"
              >
                Ver Servicios
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-addlayer-green">50+</div>
                <div className="text-sm text-muted-foreground">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-addlayer-green">5+</div>
                <div className="text-sm text-muted-foreground">Años Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-addlayer-green">100%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative z-10 animate-slide-in">
              {/* Geometric shapes representing "layers" */}
              <div className="relative w-full h-96">
                <div className="absolute inset-0 bg-addlayer-gradient rounded-3xl rotate-6 opacity-20"></div>
                <div className="absolute inset-4 bg-addlayer-green/30 rounded-2xl rotate-3"></div>
                <div className="absolute inset-8 bg-card rounded-xl shadow-2xl flex items-center justify-center border border-border">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="w-16 h-16 bg-addlayer-green/20 rounded-xl flex items-center justify-center">
                      <Code className="w-8 h-8 text-addlayer-green" />
                    </div>
                    <div className="w-16 h-16 bg-addlayer-green/20 rounded-xl flex items-center justify-center">
                      <Layers className="w-8 h-8 text-addlayer-green" />
                    </div>
                    <div className="w-16 h-16 bg-addlayer-green/20 rounded-xl flex items-center justify-center">
                      <Zap className="w-8 h-8 text-addlayer-green" />
                    </div>
                    <div className="w-16 h-16 bg-addlayer-green rounded-xl flex items-center justify-center animate-glow">
                      <span className="text-addlayer-darker font-bold text-xl">AL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
