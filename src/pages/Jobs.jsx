import React from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import JobContainer from '../components/JobContainer';
import JobHero from '../components/JobHero';

const Jobs = () => {
  
  return (
    <>
      <Header />
      <JobHero />
      <JobContainer />
      <Footer />
    </>
    
  )
}

export default Jobs