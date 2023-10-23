import React, { useEffect } from 'react'
import Header from '../components/Header'
import HomeContent from '../components/HomeContent'
import Footer from '../components/Footer'

const Home = () => {

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 10);
  }, []);


  return (
    <>
      <Header />

      <HomeContent />

      <Footer />
    </>
  )
}

export default Home