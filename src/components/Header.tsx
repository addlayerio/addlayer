
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-addlayer-gradient rounded-lg"></div>
            <span className="text-2xl font-bold text-addlayer-dark">AddLayer</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-addlayer-green transition-colors">Inicio</a>
            <a href="#services" className="text-gray-700 hover:text-addlayer-green transition-colors">Servicios</a>
            <a href="#about" className="text-gray-700 hover:text-addlayer-green transition-colors">Nosotros</a>
            <a href="#contact" className="text-gray-700 hover:text-addlayer-green transition-colors">Contacto</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-addlayer-green hover:bg-addlayer-green/90 text-white">
              Consulta Gratuita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-addlayer-green transition-colors">Inicio</a>
              <a href="#services" className="text-gray-700 hover:text-addlayer-green transition-colors">Servicios</a>
              <a href="#about" className="text-gray-700 hover:text-addlayer-green transition-colors">Nosotros</a>
              <a href="#contact" className="text-gray-700 hover:text-addlayer-green transition-colors">Contacto</a>
              <Button className="bg-addlayer-green hover:bg-addlayer-green/90 text-white w-full">
                Consulta Gratuita
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
