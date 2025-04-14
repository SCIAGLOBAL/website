import { motion } from 'framer-motion';
import { Target, AlertTriangle, TrendingUp, Shield } from 'lucide-react';

const Risk = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Risk Assessment",
      description: "Identify and evaluate potential risks across your organization"
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Risk Monitoring",
      description: "Real-time monitoring and alerting of risk indicators"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Risk Analytics",
      description: "Advanced analytics and reporting for risk management"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Risk Mitigation",
      description: "Develop and implement effective risk mitigation strategies"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl text-black mb-4 font-normal">Risk Management</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive risk management solutions to protect your organization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg"
            >
              <div className="text-black mb-4">{feature.icon}</div>
              <h3 className="text-xl mb-4 font-normal">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Risk;