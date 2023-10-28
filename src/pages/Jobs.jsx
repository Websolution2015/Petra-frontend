import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import JobContainer from '../components/JobContainer';
import JobHero from '../components/JobHero';
import { motion } from "framer-motion";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo/Logo 1/PNG.png'



const Jobs = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 10);
  }, []);
  return (
    <motion.div initial={{ opacity: 0.5, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0.9, y: -100 }}
      transition={{ duration: .7 }}
    >
      <ToastContainer position="bottom-right" />
      <header className={isActive ? "index__header center show" : "index__header center"}>
        <nav className="container">
          <div>
            <Link onClick={() => window.location.href = '/'}>
              <img height="76px" src={Logo} alt="Petra" />
            </Link>
          </div>
          <div>
            <ul className={isActive ? "show" : ""}>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/">
                  About us
                </Link>
              </li>

              <li>
                <Link to="/press">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span>
              <button className="btn-no-outline">
                <Link style={{ color: "#fff" }} to="/">Contact Us</Link>
              </button>
            </span>
          </div>
        </nav>

        <div className="hamburger">
          <div className={`containers ${isActive ? 'active' : ''}`} onClick={toggleActive}>
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="150" viewBox="0 0 200 200">
              <g strokeWidth="6.5" strokeLinecap="round">
                <path
                  d="M72 82.286h28.75"
                  fill="#009100"
                  fillRule="evenodd"
                  stroke="#fff"
                />
                <path
                  d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                  fill="none"
                  stroke="#fff"
                />
                <path
                  d="M72 125.143h28.75"
                  fill="#009100"
                  fillRule="evenodd"
                  stroke="#fff"
                />
                <path
                  d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                  fill="none"
                  stroke="#fff"
                />
                <path
                  d="M100.75 82.286h28.75"
                  fill="#009100"
                  fillRule="evenodd"
                  stroke="#fff"
                />
                <path
                  d="M100.75 125.143h28.75"
                  fill="#009100"
                  fillRule="evenodd"
                  stroke="#fff"
                />
              </g>
            </svg>
          </div>
        </div>
      </header>
      <JobHero />
      <JobContainer />
      <Footer />
    </motion.div>

  )
}

export default Jobs