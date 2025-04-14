import { motion } from 'framer-motion';
import { Shield, Lock, FileCheck, BookOpen, Target, Gauge } from 'lucide-react';
import AnimatedCube from '../components/AnimatedCube';

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const title = "Securing Your Digital Future".split("");

  return (
    <div className="min-h-screen">
      <div className="min-h-screen relative overflow-hidden animated-gradient">
        <div className="relative z-10 pt-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <h1 className="text-6xl mb-6 text-glow">
              {title.map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block gradient-text"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
            <motion.p 
              variants={textVariants}
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 font-light"
            >
              we are dedicated to being a trusted partner in shaping the future of governance, risk management, cybersecurity, and IT assurance. As a dynamic start-up, we provide innovative and tailored solutions to help organizations navigate the complexities of today’s digital landscape.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors mb-12"
            >
              <button className="learn-more">
  <span className="circle" aria-hidden="true">
  <span className="icon arrow"></span>
  </span>
  <span className="button-text">Learn More</span>
</button>
            </motion.button>
            <div className="w-[1000px] h-[800px] mx-auto mb-12">
              <AnimatedCube />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Integrated GRC Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to Governance, Risk, and Compliance helps organizations 
              navigate complex regulatory landscapes while maintaining operational efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover-card"
            >
              <BookOpen className="h-12 w-12 text-black mb-4" />
              <h3 className="text-xl mb-4">Governance</h3>
              <p className="text-gray-600">
                Establish robust frameworks and policies to ensure effective organizational oversight
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover-card"
            >
              <Target className="h-12 w-12 text-black mb-4" />
              <h3 className="text-xl mb-4">Risk Management</h3>
              <p className="text-gray-600">
                Identify, assess, and mitigate risks across your enterprise landscape
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover-card"
            >
              <Gauge className="h-12 w-12 text-black mb-4" />
              <h3 className="text-xl mb-4">Compliance</h3>
              <p className="text-gray-600">
                Stay ahead of regulatory requirements with automated compliance monitoring
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-lg hover-card"
            >
              <Shield className="h-12 w-12 text-black mb-4" />
              <h3 className="text-xl mb-4">Cybersecurity</h3>
              <p className="text-gray-600">
                Advanced threat protection and security solutions for your business
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-lg hover-card"
            >
              <Lock className="h-12 w-12 text-black mb-4" />
              <h3 className="text-xl font-semibold mb-4">Data Protection</h3>
              <p className="text-gray-600">
                Secure your sensitive data with state-of-the-art protection measures
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-lg hover-card"
            >
              <FileCheck className="h-12 w-12 text-black mb-4" />
              <h3 className="text-xl font-semibold mb-4">Audit Management</h3>
              <p className="text-gray-600">
                Streamline your audit processes with our integrated solutions
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;