import { motion } from 'framer-motion';
import { Shield, Lock, FileCheck, AlertTriangle, Database, Cloud } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Penetration Testing",
      description: "Comprehensive security assessments to identify vulnerabilities in your systems and applications."
    },
    {
      icon: <Lock className="h-12 w-12" />,
      title: "Security Consulting",
      description: "Expert guidance on security strategy, architecture, and best practices."
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "Data Protection",
      description: "Robust solutions for securing sensitive data and maintaining compliance."
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      title: "Cloud Security",
      description: "Secure cloud infrastructure and applications with modern security controls."
    },
    {
      icon: <AlertTriangle className="h-12 w-12" />,
      title: "Incident Response",
      description: "24/7 support for managing and responding to security incidents."
    },
    {
      icon: <FileCheck className="h-12 w-12" />,
      title: "Compliance Management",
      description: "Streamlined compliance processes for various regulatory requirements."
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
          <h1 className="text-4xl font-bold text-black mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive cybersecurity solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg"
            >
              <div className="text-black mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;