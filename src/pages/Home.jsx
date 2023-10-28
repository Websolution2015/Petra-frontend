import React, { useEffect, useRef, useState } from 'react'
import HomeContent from '../components/HomeContent'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../img/Logo/Logo 1/PNG.png'
import Header from '../components/Header'

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const jobRef = useRef();
  
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 10);
  }, []);

  return (
    <>
      <Header />
      <HomeContent jobRef={jobRef} />
      <Footer />
    </>
  )
}

export default Home