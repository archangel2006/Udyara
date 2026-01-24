import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhatIsUdyara from './pages/WhatIsUdyara';
import HowItWorks from './pages/HowItWorks';
import Features from './pages/Features';
import WhyUdyara from './pages/WhyUdyara';
import Policies from './pages/Policies';
import Roadmap from './pages/Roadmap';
import ChatBot from './pages/ChatBot';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-50 transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-is-udyara" element={<WhatIsUdyara />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/why-udyara" element={<WhyUdyara />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/chatbot" element={<ChatBot />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}