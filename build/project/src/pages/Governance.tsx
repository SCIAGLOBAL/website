import { motion } from 'framer-motion';
import { BookOpen, Users, FileText, Settings } from 'lucide-react';

const Governance = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Policy Management",
      description: "Centralize and streamline your policy lifecycle management process"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Board Management",
      description: "Facilitate effective board meetings and decision-making processes"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Document Control",
      description: "Maintain version control and audit trails for critical documents"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Process Automation",
      description: "Automate governance workflows and approval processes"
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
          <h1 className="text-4xl text-black mb-4 font-normal">Corporate Governance</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build a strong governance framework that aligns with your organization's objectives
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

export default Governance;