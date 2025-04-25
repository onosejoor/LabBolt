import React from 'react';
import { Shield, Clock, MapPin, CreditCard } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="bg-teal-50 text-teal-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Secure Bookings",
      description: "All payments and personal data are protected with enterprise-grade security and encryption.",
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist with any questions or issues.",
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: "Verified Properties",
      description: "Every property on our platform is personally verified to ensure quality and accuracy.",
    },
    {
      icon: <CreditCard className="w-7 h-7" />,
      title: "Flexible Payment",
      description: "Pay in full or split your payment with multiple payment methods and currencies supported.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Why Choose TravelEase
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to making your travel experience exceptional from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;