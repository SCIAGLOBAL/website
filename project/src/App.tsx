import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Home from './pages/Home';
import Services from './pages/Services';
import Compliance from './pages/Compliance';
import Governance from './pages/Governance';
import Risk from './pages/Risk';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Resources from './pages/Resources';
import CaseStudies from './pages/CaseStudies';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <div className="relative">
        <Cursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/risk" element={<Risk />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;