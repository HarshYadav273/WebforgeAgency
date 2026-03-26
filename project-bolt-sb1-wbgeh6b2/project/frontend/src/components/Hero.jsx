import { ArrowRight, Users, Award, Code, Zap } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            Crafting Digital
            <br />
            <span className="text-orange-500">Experiences</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            We build stunning, high-performance websites that transform your vision into reality
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Start Your Project
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-100 p-4 rounded-full">
                <Users className="text-orange-500" size={32} />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-black mb-2">200+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-100 p-4 rounded-full">
                <Code className="text-orange-500" size={32} />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-black mb-2">350+</h3>
            <p className="text-gray-600">Projects Done</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-100 p-4 rounded-full">
                <Award className="text-orange-500" size={32} />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-black mb-2">15+</h3>
            <p className="text-gray-600">Awards Won</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-100 p-4 rounded-full">
                <Zap className="text-orange-500" size={32} />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-black mb-2">99%</h3>
            <p className="text-gray-600">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
