import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { motion, AnimatePresence } from "framer-motion";
import './App.css';
import Press from "./pages/Press";
import Jobs from "./pages/Jobs";
import AddJob from "./Admin/AddJob";


export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>


      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/press" element={<Press />} />
        <Route path="/jobs/:id" element={<Jobs />} />
        <Route path="/add-jobs" element={<AddJob />} />
      </Routes>
    </AnimatePresence>
  );
}