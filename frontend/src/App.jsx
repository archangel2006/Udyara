import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Features from './pages/Features';
import Policies from './pages/Policies';
import Roadmap from './pages/Roadmap';


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/features" element={<Features />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}