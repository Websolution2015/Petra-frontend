import React, { useEffect } from "react";
import Header from "../components/Header";
import PressHero from "../components/PressHero";
import Footer from "../components/Footer";
import PressContainer from "../components/PressContainer";

const Press = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 10);
  }, []);
  return (
    <>
      <Header />
      <PressHero />
      <PressContainer />
      <Footer />
    </>
  )
}

export default Press;