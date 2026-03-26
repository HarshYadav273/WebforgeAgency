import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'TechStart SaaS',
      category: 'Web Application',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern SaaS platform with advanced analytics',
    },
    {
      title: 'Luxury Fashion Store',
      category: 'E-Commerce',
      image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-end fashion e-commerce with 3D previews',
    },
    {
      title: 'HealthCare Plus',
      category: 'Healthcare Portal',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Patient management and telemedicine platform',
    },
    {
      title: 'FoodHub Delivery',
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Food delivery app with real-time tracking',
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our finest projects and digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-orange-500 text-sm font-semibold mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold text-black mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all duration-300">
                  View Project
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
