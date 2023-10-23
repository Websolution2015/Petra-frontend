import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useMutation } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { motion, useAnimation } from "framer-motion";
import logo from '../img/Logo/Logo 1/PNG.png'
import logo2 from '../img/Logo/Logo 2/logo2.png'
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { MyMap } from './Map';
import ClipLoader from "react-spinners/ClipLoader";
import { useInView } from "react-intersection-observer";


const HomeContent = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger the animation only once
  });

  // Define your mutation function
  const sendFormToEndpoint = async (formData) => {
    // Make the API request to send the form data
    try {
      const response = await fetch('https://backend-petra.onrender.com/api/v1/jobs/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error('Failed to send the form data');
      }

      return response.json();
    } catch (error) {
      throw new Error('Failed to send the form data');
    }
  };

  // Use the useMutation hook
  const mutation = useMutation(sendFormToEndpoint, {
    onError: (error) => {
      // Handle errors here
      const notify = () => toast("Form not submitted, try again");
      notify()
    },
    onSuccess: (data) => {
      // Handle successful response
      reset();
      const notify = () => toast("Form submitted successfully");
      notify()
      console.log('Form submitted successfully', data);
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  // Define a function to fetch all jobs
  async function fetchAllJobs() {
    const response = await fetch('https://backend-petra.onrender.com/api/v1/jobs'); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }

  // Use useMutation to fetch all jobs on page load
  const { mutate: fetchJobs, isLoading, isError } = useMutation(fetchAllJobs, {
    onMutate: () => {
      // You can handle any pre-fetching logic here
    },
    onSuccess: (data) => {
      // Handle the fetched data, e.g., update your state or display it
      setJobs(data.jobs)
      console.log('Fetched jobs:', data.jobs);
    },
  });




  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <motion.div initial={{ opacity: 0.5, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0.9, y: -100 }}
      transition={{ duration: .7 }}

    >
      <ToastContainer />

      <section className="herosection">

        {/* <div class="container">
          <h1>Petra Power</h1>
          <p>Vivamus nisl turpis, ultrices at fermentum eget, interdum ac urna. Proin at turpis mauris. Interdum et
            malesuada fames
            ac ante ipsum primis in faucibus.</p>
        </div> */}
      </section>


      <motion.div className="home-content">

        <div className="home-content__one">
          <div>
            <img src={logo} alt="petra" />

            <p className="home-content__one__text">Petra Power is a precision manufacturer of solid oxide fuel cell power systems.
              Our mission is to seamlessly
              bridge the
              world’s conversion from fossil fuels to clean fuels such as hydrogen with technology that lowers our customers’
              fuel
              costs and carbon emissions. This is accomplished by leveraging the power and versatility of Petra Power’s novel
              solid
              oxide fuel cells to efficiently convert fossil fuel to electricity in a product that can also convert hydrogen
              and other
              clean fuels to electricity. This will enable immediate reduction of carbon emissions and lower the barriers for
              hydrogen
              adoption and a true zero-carbon future. We are growing rapidly and always looking for innovative, hard-working,
              and
              mission-driven individuals to join the team. Apply below!</p>


          </div>

        </div>

        <section className="home-content__two container">


          <img style={{ margin: "2rem 0", width: "282px" }} src={logo2} alt="petra power" />

          <div className="home-content__jobs">
            {jobs?.length !== 0 ? jobs?.slice(0, 3).map((job) => {
              const truncatedDescription = job.description.length > 50
                ? job.description.substring(0, 350) + '...'
                : job.description;

              return (
                <div id="jobs__div" key={job._id}>
                  <h3>{job.title}</h3>

                  <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truncatedDescription) }}></p>

                  <button onClick={() => navigate(`/jobs/${job._id}`)} className="btn-no-outline">Apply now</button>
                </div>
              );
            }) : <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", border: "none" }}>
              <ClipLoader
                color="#fff"
                loading={true}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />

            </div>}

          </div>
        </section>


        <section className="home-content_three">
          <div
            
          >
            <h3>The work done at Petra Power is fast-paced, ever-evolving and highly interdisciplinary. The job descriptions
              listed
              above and within each application link are meant to provide a broad overview of the position and job
              requirements. Petra
              Power will consider any candidate who feels they may be a benefit to the Organization for employment. All
              full-time
              positions include company stock options, health, vision, and dental benefits, relocation assistance where
              appropriate,
              holiday, and PTO.
            </h3>
            <p>All qualified applicants will receive consideration for employment without regard to race, skin color,
              religion, sex,
              sexual orientation, gender identity, disability, veteran status, or any other protected category
            </p>
          </div>
        </section>


        <section className="section home-content__four">
          <div className='home-content__four__flex container'>
            <section className='home-content__four-maps'>
              <h2>More info</h2>
              <p>Have a question? We are here to help. Send us a message and we’ll be in touch.</p>
              <div style={{ height: '380px', width: '100' }} className='maps'>
                <MyMap />

              </div>
            </section>
            <section className='home-content__four-contact-us'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='contact-form-flex'>
                  <div className='firstLast'>
                    <div>
                      <input type="text" placeholder='First name' {...register("firstName", {
                        required: true,
                        minLength: 2
                      })} />
                      {errors.firstName && <p>This field is required</p>}
                    </div>

                    <div>
                      <input type="text" placeholder='Last name' {...register("lastName", {
                        required: true,
                        minLength: 2
                      })} />
                      {errors.lastName && <p>This field is required</p>}
                    </div>
                  </div>
                  <div>
                    <input type="email" placeholder='Your email' {...register("email", {
                      required: true,

                    })} />
                    {errors.email && <p>This field is required</p>}
                  </div>
                  <div>
                    <input type="number" placeholder='Your phone' {...register("phone", {
                      required: true,

                    })} />
                    {errors.phone && <p>This field is required</p>}
                  </div>
                  <div>
                    <textarea placeholder='Your message' cols="30" rows="10" {...register("message", {
                      required: true,

                    })}></textarea>
                    {errors.message && <p>This field is required</p>}
                  </div>
                </div>

                <button type="submit" disabled={mutation.isLoading}>
                  {mutation.isLoading ? 'Submitting...' : 'Submit'}
                </button>
              </form>

            </section>
          </div>
        </section>


      </motion.div>

    </motion.div>
  )
}

export default HomeContent