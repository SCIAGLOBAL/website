import { motion } from 'framer-motion';
// Note: You need to install framer-motion first by running:
// npm install framer-motion
// or
// yarn add framer-motion
// First install lucide-react:
// npm install lucide-react
// or 
// yarn add lucide-react
import { Lock, FileCheck, Home, BookOpen, Target, Users, FileText, BookOpen as Blog, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="SCIA GLOBAL Logo" 
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="nav-link flex items-center space-x-1">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/governance" className="nav-link flex items-center space-x-1">
              <BookOpen size={18} />
              <span>Governance</span>
            </Link>
            <Link to="/risk" className="nav-link flex items-center space-x-1">
              <Target size={18} />
              <span>Risk</span>
            </Link>
            <Link to="/compliance" className="nav-link flex items-center space-x-1">
              <FileCheck size={18} />
              <span>Compliance</span>
            </Link>
            <Link to="/services" className="nav-link flex items-center space-x-1">
              <Lock size={18} />
              <span>Services</span>
            </Link>
<Link to="/blog" className="nav-link flex items-center space-x-1">
              <Blog size={18} />
              <span>Blog</span>
            </Link>
            <Link to="/resources" className="nav-link flex items-center space-x-1">
              <FileText size={18} />
              <span>Resources</span>
            </Link>
            <Link to="/case-studies" className="nav-link flex items-center space-x-1">
              <Target size={18} />
              <span>Case Studies</span>
            </Link>
            <Link to="/team" className="nav-link flex items-center space-x-1">
              <Users size={18} />
              <span>Team</span>
            </Link>
            <Link to="/contact" className="nav-link flex items-center space-x-1">
              <Mail size={18} />
              <span>Contact</span>
            </Link>

          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;