import { motion } from 'framer-motion';
import { Building, Award, TrendingUp, Users } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Global Financial Institution",
      challenge: "Modernizing compliance monitoring across 50+ countries",
      solution: "Implemented an integrated GRC platform with automated workflows",
      results: [
        "60% reduction in compliance monitoring time",
        "90% decrease in manual reporting effort",
        "100% audit trail coverage"
      ]
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Healthcare Provider Network",
      challenge: "Managing risk across 200+ facilities",
      solution: "Deployed centralized risk assessment and monitoring system",
      results: [
        "40% improvement in risk identification",
        "75% faster incident response time",
        "$2M annual cost savings"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Tech Startup Scale-up",
      challenge: "Establishing governance framework for rapid growth",
      solution: "Created adaptive governance model with scalable processes",
      results: [
        "Successfully scaled from 50 to 500 employees",
        "Maintained compliance during 3x growth",
        "Zero major incidents during expansion"
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Government Agency",
      challenge: "Streamlining policy management across departments",
      solution: "Implemented collaborative policy development platform",
      results: [
        "50% reduction in policy review cycle",
        "95% staff policy acknowledgment rate",
        "Improved cross-department coordination"
      ]
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
          <h1 className="text-4xl font-bold text-black mb-4">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped organizations transform their governance, risk, and compliance practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {cases.map((case_study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">{case_study.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{case_study.title}</h3>
              <div className="mb-4">
                <p className="font-medium text-gray-700">Challenge:</p>
                <p className="text-gray-600">{case_study.challenge}</p>
              </div>
              <div className="mb-4">
                <p className="font-medium text-gray-700">Solution:</p>
                <p className="text-gray-600">{case_study.solution}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">Key Results:</p>
                <ul className="list-disc list-inside text-gray-600">
                  {case_study.results.map((result, idx) => (
                    <li key={idx}>{result}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;