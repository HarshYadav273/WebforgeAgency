import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '₹4,999',
      description: 'Perfect for small businesses and startups',
      features: [
        'Single-page website',
        'Responsive design',
        'Contact form',
        'Basic SEO',
        '1 month support',
      ],
    },
    {
      name: 'Professional',
      price: '₹12,999',
      description: 'Ideal for growing businesses',
      features: [
        'Multi-page website',
        'Advanced animations',
        'CMS integration',
        'E-commerce functionality',
        'Advanced SEO',
        '3 months support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '₹24,999',
      description: 'Complete solution for large businesses',
      features: [
        'Custom web application',
        'Database integration',
        'API development',
        'User authentication',
        'Performance optimization',
        '6 months support',
        'Dedicated support',
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Pricing Plans</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden costs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl ${
                plan.popular
                  ? 'bg-orange-500 text-white transform scale-105 shadow-2xl'
                  : 'bg-gray-50 text-black hover:shadow-xl'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-orange-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className={`flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-white' : 'text-orange-500'
                      }`}
                    />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-white text-orange-500 hover:bg-gray-100'
                    : 'bg-orange-500 text-white hover:bg-orange-600'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
