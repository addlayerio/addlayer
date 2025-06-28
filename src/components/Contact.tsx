
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-addlayer-darker text-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para <span className="text-addlayer-green">Conectar</span> tu Visión?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Iniciemos una conversación sobre cómo podemos transformar tus ideas 
            en soluciones tecnológicas innovadoras.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-addlayer-green">
                Hablemos de tu Proyecto
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Cada gran solución tecnológica comienza con una conversación. 
                Comparte tu visión con nosotros y descubre cómo podemos 
                construir juntos tu futuro digital.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-addlayer-green/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-addlayer-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-addlayer-green">Email</h4>
                  <p className="text-muted-foreground">contacto@addlayer.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-addlayer-green/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-addlayer-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-addlayer-green">Teléfono</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-addlayer-green/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-addlayer-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-addlayer-green">Oficina</h4>
                  <p className="text-muted-foreground">Ciudad Tech, Innovation District</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-addlayer-green">
                Consulta Gratuita
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-addlayer-green"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-addlayer-green"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-addlayer-green"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Cuéntanos sobre tu proyecto
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-addlayer-green resize-none"
                  placeholder="Describe tu visión, objetivos y cómo podemos ayudarte..."
                ></textarea>
              </div>

              <Button className="w-full bg-addlayer-green hover:bg-addlayer-green/90 text-addlayer-darker py-3 text-lg group">
                Enviar Consulta
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
