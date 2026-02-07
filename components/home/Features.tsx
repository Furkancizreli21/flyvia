import { Compass, BadgeCheck, Headset } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Compass className="w-8 h-8 text-blue-600" />,
      title: "Wide Selection",
      description: "Choose from thousands of vacation destinations and car rental options.",
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-blue-600" />,
      title: "Best Price Guarantee",
      description: "Find the most suitable options for your budget at the best prices.",
    },
    {
      icon: <Headset className="w-8 h-8 text-blue-600" />,
      title: "24/7 Support",
      description: "Our expert team is with you at every moment of your journey.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-blue-100 group-hover:scale-105">
              {feature.icon}
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 uppercase tracking-wide">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed max-w-70">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
