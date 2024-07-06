import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import appleIcon from '../assets/apple.png'; 
import googleIcon from '../assets/google.png'; 
import bck from "../assets/bck.jpg";
import { useGoogleLogin } from 'react-google-login';
import starx91 from '../assets/starx91.png';
import {ProfileContext} from '../../context/ProfileContext';

const clientId = "261778488059-r3p7jn1uctichj37qi3kq21j1fghclns.apps.googleusercontent.com";

const Register = () => {
  const navigate = useNavigate();
  const { updateProfileImageUrl } = useContext(ProfileContext);

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    const profileImage= res.profileObj.imageUrl;
    updateProfileImageUrl(profileImage);
    navigate('/dashboard');
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
  };

  const { signIn } = useGoogleLogin({
    clientId,
    onSuccess,
    onFailure,
    cookiePolicy: 'single_host_origin',
  });

  return (
    <div className='container-lg bg-black w-full'>
      <Formik
        initialValues={{ username: '', password: '', email: '' }}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          password: Yup.string()
            .min(6, 'Must be at least 6 characters')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          axios.post('http://localhost:5000/api/register', values)
            .then(response => {
              alert('Registration successful!');
              setSubmitting(false);
            })
            .catch(error => {
              alert('Registration failed');
              setSubmitting(false);
            });
        }}
      >
      <div className='bg-black min-[320px]:h-full sm:w-full sm:h-screen lg:h-screen lg:w-full'> 
        <div className='flex justify-center content-center pt-4 '>
            <img src={starx91} className='w-28 h-8 px-5 bg-white rounded-full'/>
          </div>    
        <div className='container flex max-w-screen min-[320px]:flex-wrap-reverse min-[320px]:place-content-center md:flex-wrap-reverse lg:flex-nowrap '>
          <div className='flex-row min-[320px]:px-12  sm:px-28 mt-10 mb-5 '>
            <h1 className='text-white text-2xl font-bold'>Get Started.</h1>
            <h2 className='text-white'>Fly Smarter. Start Planning.</h2>
            
            <button
              className='flex min-[320px]:px-12 py-2 justify-center rounded-lg my-3 min-[320px]:h-11 md:w-48 lg:w-72 border-solid border-2 border-zinc-800 hover:bg-zinc-900 hover:text-white gap-2'
              onClick={signIn} 
            >
              <div className='flex justify-center gap-2'>
                <img src={googleIcon} alt="Google Icon" className='w-1/12 h-1/12 py-1'/>
                <h1 className='gap-y-30 text-zinc-400 text-sm'>Login with Google</h1>
              </div>
            </button>
            
            <button className='flex min-[320px]:px-12 py-2  justify-center rounded-lg my-3 min-[320px]:h-11 md:w-48 lg:w-72 border-solid border-2 border-zinc-800  hover:bg-zinc-900 hover:text-white gap-2'>
              <div className='flex justify-center gap-2'>
                <img src={appleIcon} alt="Apple Icon" className='w-1/12 h-1/12 py-1'/>
                <h1 className='gap-y-30 text-zinc-400 text-sm'>Login with Apple</h1>
              </div>
            </button>
            
            <hr className='h-px bg-gray-800 my-2'></hr>
            <Form>
              <div className='flex flex-col gap-y-2  text-zinc-400'>
                <label htmlFor="username">Your Username</label>
                <Field name="username" type="text" placeholder="xyz" className=' min-[320px]:h-9 md:w-48 lg:w-72 bg-zinc-900 rounded-lg  p-3 ' />
                <ErrorMessage name="username"/>

                <label htmlFor="email">Your Email</label>
                <Field name="email" type="email" placeholder="xyz@domain.com" className='  min-[320px]:h-9 md:w-48 lg:w-72 bg-zinc-900 rounded-lg p-3 '/>
                <ErrorMessage name="email" />

                <label htmlFor="password">Password</label>
                <Field name="password" type="password" placeholder="At least 8 characters" className='  min-[320px]:h-9 md:w-48 lg:w-72 bg-zinc-900 rounded-lg p-3' />
                <ErrorMessage name="password" />

                <div className='flex gap-1'>
                  <input type='checkbox' className='px-2 py-2 '></input>
                  <h1 className='text-zinc-500 text-sm'>Remember me.</h1>
                </div>

                <button type="submit" className='bg-white text-black rounded-md h-10 gap-34 font-bold hover:bg-zinc-200 border-solid border-2 hover:border-zinc-700'>Sign Up</button>
              </div>
            </Form>

            <div className='flex gap-2 text-sm'>
              <h1 className='text-zinc-500'>Already have an account? </h1>
              <Link to="/login" className='text-white'>Login</Link>
            </div>
          </div>
          
          <div className='flex place-content-center w-7/12 p-5'>
            <img src={bck} className='lg:w-full h-5/12'/>
          </div>
        </div>
      </div>
      </Formik>
    </div>
  );
};

export default Register;
