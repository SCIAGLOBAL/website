import { motion } from 'framer-motion';
import { Download, FileText, Video, Book } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Compliance Checklist Template",
      description: "A comprehensive checklist to assess your organization's compliance status",
      type: "PDF Document",
      size: "2.4 MB"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Risk Assessment Workshop",
      description: "Video guide on conducting effective risk assessments",
      type: "Video Tutorial",
      size: "45 min"
    },
    {
      icon: <Book className="h-8 w-8" />,
      title: "Governance Best Practices Guide",
      description: "Detailed guide on implementing corporate governance frameworks",
      type: "E-Book",
      size: "5.1 MB"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Policy Templates Bundle",
      description: "Collection of customizable policy templates for various business needs",
      type: "ZIP Archive",
      size: "8.7 MB"
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
          <h1 className="text-4xl text-black mb-4 font-normal">Resources</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Download helpful resources to strengthen your governance, risk, and compliance programs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">{resource.icon}</div>
              <h3 className="text-xl mb-2 font-normal">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  {resource.type} • {resource.size}
                </div>
                <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  <Download size={16} className="mr-1" />
                  Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;