import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "David Anderson",
      role: "Chief Executive Officer",
      image: "/team/david.svg",
      bio: "20+ years of experience in enterprise risk management and corporate governance",
      linkedin: "#",
      email: "david@example.com",
      phone: "+1 (555) 123-4567"
    },
    {
      name: "Sarah Chen",
      role: "Head of Risk Advisory",
      image: "/team/sarah.svg",
      bio: "Former Big 4 consultant specializing in operational risk and compliance",
      linkedin: "#",
      email: "sarah@example.com",
      phone: "+1 (555) 234-5678"
    },
    {
      name: "Michael Roberts",
      role: "Compliance Director",
      image: "/team/michael.svg",
      bio: "15+ years experience in regulatory compliance and policy development",
      linkedin: "#",
      email: "michael@example.com",
      phone: "+1 (555) 345-6789"
    },
    {
      name: "Emily Thompson",
      role: "Governance Specialist",
      image: "/team/emily.svg",
      bio: "Expert in board governance and corporate sustainability practices",
      linkedin: "#",
      email: "emily@example.com",
      phone: "+1 (555) 456-7890"
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
          <h1 className="text-4xl font-bold text-black mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet our experienced professionals dedicated to your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-200"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-blue-600 mb-2">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={member.linkedin}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail size={20} />
                </a>
                <a
                  href={`tel:${member.phone}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Phone size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;