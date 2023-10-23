import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import Logo from '../img/Logo/Logo 3/PNG.png';
import './components.css'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";


const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    delay: 0
  });



  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
      });
    } else {
      controls.start({
        opacity: 0,
        y: 120,
      });
    }
  }, [controls, inView]);
  return (
    <footer>
      <div className='section footer' >
        <div className='footer__container container'>
          <div className="footer-flex">
            <h6>Follow Us</h6>
            <p>Stay in touch with us on social media and find out more about what we do</p>
            <div className='footer__icons_flex'>
              <Link to="https://www.linkedin.com/company/petra-power-llc">
                <svg width="41" height="41" viewBox="0 0 41 41" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20.0844" cy="20.0844" r="20.0844" fill="white" />
                  <path d="M14.3556 16.467V30.7424H9.81236V16.467H14.3556ZM14.6447 12.059C14.6539 12.76 14.4222 13.3458 13.9495 13.8164C13.4768 14.287 12.855 14.5223 12.084 14.5223H12.0565C11.3038 14.5223 10.6981 14.287 10.2392 13.8164C9.78024 13.3458 9.55078 12.76 9.55078 12.059C9.55078 11.3483 9.78712 10.7601 10.2598 10.2944C10.7325 9.82859 11.3497 9.5957 12.1115 9.5957C12.8733 9.5957 13.4837 9.82859 13.9426 10.2944C14.4015 10.7601 14.6355 11.3483 14.6447 12.059ZM30.6975 22.5603V30.7424H26.168V23.1077C26.168 22.0994 25.9822 21.3095 25.6105 20.7381C25.2387 20.1667 24.6582 19.881 23.8689 19.881C23.2907 19.881 22.8065 20.0466 22.4164 20.3779C22.0264 20.7093 21.7349 21.1198 21.5422 21.6096C21.4412 21.8977 21.3908 22.2866 21.3908 22.7764V30.7424H16.8613C16.8796 26.9107 16.8888 23.804 16.8888 21.4223C16.8888 19.0407 16.8842 17.6194 16.875 17.1584L16.8613 16.467H21.3908V18.5413H21.3632C21.5468 18.234 21.7349 17.9651 21.9277 17.7346C22.1204 17.5041 22.3797 17.2544 22.7055 16.9855C23.0314 16.7166 23.4306 16.5078 23.9033 16.3589C24.376 16.2101 24.9014 16.1356 25.4797 16.1356C27.0492 16.1356 28.3112 16.6806 29.2657 17.7706C30.2203 18.8606 30.6975 20.4572 30.6975 22.5603Z" fill="#276D22" />
                </svg>

              </Link>
              <Link to="https://www.x.com/petrapower1">
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20.2524" cy="20.0844" r="20.0844" fill="white" />
                  <path d="M27.7518 9.5957H31.4575L23.3614 18.5543L32.8865 30.7424H25.4287L19.5882 23.3494L12.9038 30.7424H9.19606L17.8562 21.16L8.71875 9.59668H16.3658L21.6455 16.3541L27.7518 9.5957ZM26.4518 28.5959H28.5051L15.2501 11.6301H13.0468L26.4518 28.5959Z" fill="#276D22" />
                </svg>

              </Link>
              <Link to="mailto:info@petrapower.com">
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20.4203" cy="20.0844" r="20.0844" fill="white" />
                  <path d="M33.5649 13.3722C33.5649 12.126 32.4094 11.1064 30.9971 11.1064H10.4545C9.04224 11.1064 7.88672 12.126 7.88672 13.3722V26.9665C7.88672 28.2127 9.04224 29.2322 10.4545 29.2322H30.9971C32.4094 29.2322 33.5649 28.2127 33.5649 26.9665V13.3722ZM30.9971 13.3722L20.7258 19.0365L10.4545 13.3722H30.9971ZM30.9971 26.9665H10.4545V15.6379L20.7258 21.3022L30.9971 15.6379V26.9665Z" fill="#276D22" />
                </svg>

              </Link>
            </div>
          </div>
          <div className="footer-flex">
            <div>
              <img src={Logo} alt="Petra" />
            </div>
          </div>
          <div className="footer-flex">
            <div>
              <h6>Address</h6>
              <div className='footer__flex_location'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" fill="none">
                  <path d="M8 10.45C7.24224 10.45 6.51551 10.1603 5.9797 9.64454C5.44388 9.12882 5.14286 8.42935 5.14286 7.7C5.14286 6.97065 5.44388 6.27118 5.9797 5.75546C6.51551 5.23973 7.24224 4.95 8 4.95C8.75776 4.95 9.48449 5.23973 10.0203 5.75546C10.5561 6.27118 10.8571 6.97065 10.8571 7.7C10.8571 8.06114 10.7832 8.41873 10.6397 8.75238C10.4961 9.08603 10.2856 9.38918 10.0203 9.64454C9.755 9.89991 9.44003 10.1025 9.09338 10.2407C8.74674 10.3789 8.37521 10.45 8 10.45ZM8 0C5.87827 0 3.84344 0.811248 2.34315 2.25528C0.842855 3.69931 0 5.65783 0 7.7C0 13.475 8 22 8 22C8 22 16 13.475 16 7.7C16 5.65783 15.1571 3.69931 13.6569 2.25528C12.1566 0.811248 10.1217 0 8 0Z" fill="white" />
                </svg>
                <p>6565 Davis Industrial Pkwy Suite O, Solon, OH 44139</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='footer__border-bottom container'></div>
      <div className="footer__copyright">
        <h6>Copyright © All Rights Reserved.</h6>
      </div>
    </footer>
  )
}

export default Footer