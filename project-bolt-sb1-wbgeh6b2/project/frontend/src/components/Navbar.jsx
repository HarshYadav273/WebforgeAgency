import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black">
              Web<span className="text-orange-500">forge</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-black hover:text-orange-500 transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-black hover:text-orange-500 transition-colors">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-black hover:text-orange-500 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('pricing')} className="text-black hover:text-orange-500 transition-colors">Pricing</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-black hover:text-orange-500 transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-black hover:bg-orange-50 rounded-md">Home</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-black hover:bg-orange-50 rounded-md">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-3 py-2 text-black hover:bg-orange-50 rounded-md">Portfolio</button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-3 py-2 text-black hover:bg-orange-50 rounded-md">Pricing</button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-3 py-2 text-black hover:bg-orange-50 rounded-md">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 bg-orange-500 text-white rounded-md mt-2">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
}
