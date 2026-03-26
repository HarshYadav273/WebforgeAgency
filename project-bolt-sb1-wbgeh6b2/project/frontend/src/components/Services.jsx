import { Globe, Smartphone, ShoppingCart, Palette, Search, Gauge } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Globe size={40} />,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies and best practices for optimal performance.',
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile-First Design',
      description: 'Responsive designs that look stunning on all devices, from mobile to desktop.',
    },
    {
      icon: <ShoppingCart size={40} />,
      title: 'E-Commerce Solutions',
      description: 'Powerful online stores with seamless payment integration and inventory management.',
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed to engage users and drive conversions.',
    },
    {
      icon: <Search size={40} />,
      title: 'SEO Optimization',
      description: 'Strategic SEO implementation to improve your visibility and organic search rankings.',
    },
    {
      icon: <Gauge size={40} />,
      title: 'Performance Tuning',
      description: 'Lightning-fast load times and optimized code for the best user experience.',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive web solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
