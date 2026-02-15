import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Policies from "./pages/Policies";
import About from "./pages/About";
import Agent from "./pages/Agent";

function Layout() {
  const location = useLocation();
  const isAgentPage = location.pathname === "/agent";

  if (isAgentPage) {
    return (
      <div className="h-screen flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 min-h-0">
          <Agent />
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
        <Layout />
      </div>
    </BrowserRouter>
  );
}
