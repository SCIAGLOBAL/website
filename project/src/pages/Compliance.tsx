import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Compliance = () => {
  const frameworks = [
    {
      title: "ISO 27001",
      description: "Information security management system (ISMS) framework"
    },
    {
      title: "GDPR",
      description: "European Union data protection and privacy regulation"
    },
    {
      title: "HIPAA",
      description: "Healthcare information privacy and security"
    },
    {
      title: "PCI DSS",
      description: "Payment card industry data security standard"
    },
    {
      title: "SOC 2",
      description: "Service organization control reporting framework"
    },
    {
      title: "NIST",
      description: "National Institute of Standards and Technology framework"
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
          <h1 className="text-4xl text-black mb-4 font-normal">Compliance Solutions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay compliant with industry standards and regulations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {frameworks.map((framework, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                <h3 className="text-xl font-normal">{framework.title}</h3>
              </div>
              <p className="text-gray-600">{framework.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl mb-4">Need Help with Compliance?</h2>
          <p className="text-gray-600 mb-8">
            Our team of experts can help you achieve and maintain compliance with these frameworks.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Contact Our Compliance Team
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Compliance;