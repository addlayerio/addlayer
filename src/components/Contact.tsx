
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `New Consultation Request from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Message:
${formData.message}`;

    const mailtoLink = `mailto:contact@addlayer.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-addlayer-darker text-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="text-addlayer-green">Connect</span> Your Vision?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's start a conversation about how we can transform your ideas 
            into innovative technological solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-addlayer-green">
                Let's Talk About Your Project
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every great technological solution begins with a conversation. 
                Share your vision with us and discover how we can 
                build your digital future together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-addlayer-green/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-addlayer-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-addlayer-green">Email</h4>
                  <p className="text-muted-foreground">contact@addlayer.io</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-addlayer-green/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-addlayer-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-addlayer-green">Phone</h4>
                  <p className="text-muted-foreground">+36 320 617 2262</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-addlayer-green/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-addlayer-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-addlayer-green">Office</h4>
                  <div className="text-muted-foreground">
                    <p>United States</p>
                    <p>651 N Broad St, Suite 201</p>
                    <p>Middletown, Delaware 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-addlayer-green">
                Free Consultation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-addlayer-green"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-addlayer-green"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-addlayer-green"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-addlayer-green resize-none"
                    placeholder="Describe your vision, objectives and how we can help you..."
                    required
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-addlayer-green hover:bg-addlayer-green/90 text-addlayer-darker py-3 text-lg group">
                  Send Consultation
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
