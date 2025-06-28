
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/55546d23-d100-49dc-a6b5-fe98deaa0e07.png" 
              alt="AddLayer Logo" 
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-foreground">AddLayer</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-muted-foreground hover:text-addlayer-green transition-colors">Home</a>
            <a href="#services" className="text-muted-foreground hover:text-addlayer-green transition-colors">Services</a>
            <a href="#about" className="text-muted-foreground hover:text-addlayer-green transition-colors">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-addlayer-green transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-addlayer-green hover:bg-addlayer-green/90 text-addlayer-darker"
              onClick={() => window.open('https://outlook.office365.com/owa/calendar/AddLayer@NETORGFT15142014.onmicrosoft.com/bookings/', '_blank')}
            >
              Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-muted-foreground hover:text-addlayer-green transition-colors">Home</a>
              <a href="#services" className="text-muted-foreground hover:text-addlayer-green transition-colors">Services</a>
              <a href="#about" className="text-muted-foreground hover:text-addlayer-green transition-colors">About</a>
              <a href="#contact" className="text-muted-foreground hover:text-addlayer-green transition-colors">Contact</a>
              <Button 
                className="bg-addlayer-green hover:bg-addlayer-green/90 text-addlayer-darker w-full"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/AddLayer@NETORGFT15142014.onmicrosoft.com/bookings/', '_blank')}
              >
                Free Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
