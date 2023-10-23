import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import DOMPurify from 'dompurify'
import "../components/components.css";
import { useMutation } from 'react-query';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const JobContainer = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  // console.log(errors);
  
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('resume', data.resume[0]); // Upload the first file from the list

    try {
      const response = await fetch('https://backend-petra.onrender.com/api/v1/jobs/upload-resume', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log('File uploaded successfully');
        reset()
      } else {
        // Handle errors
        console.error('Error uploading file');
      }
    } catch (error) {
      // Handle exceptions (e.g., network errors)
      console.error('Error:', error);
    }
  };

  // Define a function to fetch a single job by ID
  async function fetchJob() {
    const response = await fetch(`https://backend-petra.onrender.com/api/v1/jobs/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }

  // Use useMutation to fetch a single job by ID
  const { mutate: fetchJobById, isLoading, isError } = useMutation(fetchJob, {
    onMutate: () => {
      // You can handle any pre-fetching logic here
      
    },
    onSuccess: (data) => {
      setJob(data.job)
    },
  });

  useEffect(() => {
    // Fetch the job by ID using the fetchJobById mutation
    fetchJobById();
  }, []);

  return (
    <div className='job__container'>
      <div className='container'>
        <h2 className='job__title'>{job?.title || <Skeleton count={10} />}</h2>
        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(job?.description) }} className='job__description'>
        </p>

        
      </div>

      <div className="upload__resume container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='upload__resume-flex'>
            <div className='upload__flex'>
              <div>
                <input type="text" placeholder='Name' {...register("name", {
                  required: true,
                  minLength: 2
                })} />
                {errors.name && <p>This field is required</p>}
              </div>
              <div>
                <input type="email" placeholder='Your Email'  {...register("email", {
                  required: true,

                })} />
                {errors.email && <p>This field is required</p>}
              </div>
              <div>
                <input type="number" placeholder='Your Phone' {...register("phone", {
                  required: true,
                  minLength: 2
                })} />
                {errors.phone && <p>This field is required</p>}
              </div>
              <div>
                <input type="file" id="resume" {...register("resume", {
                  required: true,
                  validate: {
                    acceptedFormats: (value) => {
                      if (value) {
                        const allowedFormats = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
                        return allowedFormats.includes(value[0].type);
                      }
                      return true;
                    },
                  },
                })}
                  accept=".pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
                {errors.phone && <p>Upload your file</p>}
              </div>
              <button type="submit">Submit</button>
            </div>
            <div className='resume__class'>
              <label htmlFor="resume">


                <span>
                  <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.1875 51.75V16.6031L18.975 27.8156L12.9375 21.5625L34.5 0L56.0625 21.5625L50.025 27.8156L38.8125 16.6031V51.75H30.1875ZM8.62501 69C6.25313 69 4.22194 68.1547 2.53144 66.4642C0.840944 64.7737 -0.00286768 62.744 7.32173e-06 60.375V47.4375H8.62501V60.375H60.375V47.4375H69V60.375C69 62.7469 68.1548 64.7781 66.4643 66.4686C64.7738 68.1591 62.744 69.0029 60.375 69H8.62501Z" fill="#3DAB35" />
                  </svg>
                </span>
                <h3>Upload Resume</h3>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices</p>
              </label>
            </div>
          </div>
        </form>
      </div>

      <div className="others">
        <div>
          <p>The above statements are meant to describe only the broad
            nature and level of work. Job responsibilities include above
            are a non-exhaustive list and may contain elements that are
            irrelevant to the true
            nature of work for this position. Other duties,
            responsibilities, and roles may be added and this
            description may be amended at any time.
            Petra Power is an equal-opportunity employer.
            All qualified applicants will receive consideration
            for employment without regard to race, skin color,
            religion, sex, sexual orientation, gender identity,
            disability, veteran status, or any other protected category.
          </p>
        </div>
      </div>
    </div>
  )
}

export default JobContainer