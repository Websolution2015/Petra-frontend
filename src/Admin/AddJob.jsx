import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import ReactQuill from 'react-quill';



const AddJob = () => {
  const [editorHtml, setEditorHtml] = useState('');
  const [errors, setErrors] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
    setError,
    formState,
  } = useForm();

  const addJobMutation = useMutation(
    (formData) =>
      fetch('https://backend-petra.onrender.com/api/v1/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: formData.title, description: formData.description}),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error submitting the form');
          }
          return response.json();
        }),
    {
      onMutate: () => {

        // console.log("Form submission in progress");
      },
      onError: (error) => {

        // toast.error(error.message);
        // console.error('Error:', error);
      },
      onSuccess: (data) => {
        
        const notify = () => toast("Form submitted successfully");
        notify()
        setEditorHtml("")
        reset();
      },
    }
  );

  const onSubmit = (formData) => {
    // Capture form data
    console.log(formData.title, editorHtml);
    const payload = {
      title: formData.title,
      description: editorHtml
    }

    if (!payload.description) {
      setErrors("Enter job description")
      return
    }

    // Use addJobMutation to send the data to your API
    addJobMutation.mutate(payload);
  };

  const editorStyles = {
    height: '50vh',
    color: '#fff',
    margin: '2rem 0',
  };

  return (
    <>
      <ToastContainer position="bottom-right" />
      <Header />
      <div className='add_job-form'>
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
          <h1 style={{ textAlign: "center", margin: "3rem", color: "#fff" }}>Add Job</h1>
          <div>
            <div>
              <input
                type="text"
                placeholder='Job title'
                {...register('title', { required: 'Job title is required' })}
              />
              {formState.errors.title && <span>{formState.errors.title.message}</span>}
            </div>
            <div>
              <ReactQuill
                value={editorHtml}
                onChange={setEditorHtml}
                style={editorStyles}
                className="white-text"
              />
              {errors && <p style={{ margin: "2rem 0" }}>Enter job description</p>}
            </div>

            <button className="btn-no-outline" type="submit" disabled={addJobMutation.isLoading}>
              {addJobMutation.isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddJob;
