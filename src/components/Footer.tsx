
import { Layers } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-addlayer-darker text-white py-12 border-t border-addlayer-green/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-addlayer-gradient rounded-lg"></div>
              <span className="text-2xl font-bold">AddLayer</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Layers that connect your IT vision. We transform ideas into 
              innovative technological solutions that drive your business growth.
            </p>
            <div className="text-sm text-addlayer-green">
              LAYERS THAT CONNECT YOUR IT VISION
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-addlayer-green">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-addlayer-green transition-colors">Software Development</a></li>
              <li><a href="#" className="hover:text-addlayer-green transition-colors">Systems Architecture</a></li>
              <li><a href="#" className="hover:text-addlayer-green transition-colors">IT Consulting</a></li>
              <li><a href="#" className="hover:text-addlayer-green transition-colors">Cybersecurity</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-addlayer-green">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-addlayer-green transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-addlayer-green transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-addlayer-green transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-addlayer-green transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-addlayer-green/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AddLayer. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-addlayer-green transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-addlayer-green transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
