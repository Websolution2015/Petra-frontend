import React, { useEffect } from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import JobContainer from '../components/JobContainer';
import JobHero from '../components/JobHero';
import { motion } from "framer-motion";

const Jobs = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 10);
  }, []);
  return (
    <motion.div initial={{ opacity: 0.5, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0.9, y: -100 }}
      transition={{ duration: .7 }}>
      <Header />
      <JobHero />
      <JobContainer />
      <Footer />
    </motion.div>
    
  )
}

export default Jobs