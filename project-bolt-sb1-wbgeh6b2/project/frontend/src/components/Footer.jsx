import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Web<span className="text-orange-500">forge</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Crafting digital experiences that transform businesses and delight users.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">Mobile Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">E-Commerce</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#portfolio" className="text-gray-400 hover:text-orange-500 transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-orange-500 transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-orange-500 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-all duration-300 transform hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-all duration-300 transform hover:scale-110">
                <Github size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-all duration-300 transform hover:scale-110">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Webforge. All rights reserved. Built with passion and code.
          </p>
        </div>
      </div>
    </footer>
  );
}
