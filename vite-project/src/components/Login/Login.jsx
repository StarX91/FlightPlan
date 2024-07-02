import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useGoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import appleIcon from '../assets/apple.png';
import googleIcon from '../assets/google.png';
import bck from "../assets/bck.jpg";
import starx91 from '../assets/starx91.png';

const clientId = "261778488059-r3p7jn1uctichj37qi3kq21j1fghclns.apps.googleusercontent.com";

const Login = () => {
  const navigate = useNavigate();

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
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
    <div className='bg-black min-[320px] h-full sm:w-screen sm:h-screen lg:h-full lg:w-screen'>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={Yup.object({
          username: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
          password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          axios.post('http://localhost:5000/api/login', values)
            .then(response => {
              alert('Login successful!');
              setSubmitting(false);
              navigate('/home');
            })
            .catch(error => {
              alert('Login failed');
              setSubmitting(false);
            });
        }}
      >
      <div className='bg-black min-[320px]:h-full sm:w-full sm:h-screen lg:h-screen lg:w-full'> 
        <div className='flex justify-center content-center pt-4 '>
            <img src={starx91} className='w-28 h-8 px-5 bg-white rounded-full'/>
        </div>   
        <div className='flex max-w-screen min-[320px] flex-wrap-reverse place-content-center md:flex-wrap-reverse lg:flex-nowrap '>
          <div className='flex-row min-[320px] px-12 sm:px-28 mt-10 mb-5'>
            <h1 className='text-white text-2xl font-bold'>Welcome Back!</h1>
            <h2 className='text-white'>Your flights await. Log in and take off.</h2>
            
            <button
              className='flex min-[320px] px-12 py-2 justify-center rounded-lg my-3 min-[320px] h-11 md:w-48 lg:w-72 border-solid border-2 border-zinc-800 hover:bg-zinc-900 hover:text-white gap-2'
              onClick={signIn}
            >
              <div className='flex justify-center gap-2'>
                <img src={googleIcon} alt="Google Icon" className='w-1/12 h-1/12 py-1'/>
                <h1 className='gap-y-30 text-zinc-400 text-sm'>Login with Google</h1>
              </div>
            </button>
            
            <button className='flex min-[320px] px-12 py-2 justify-center rounded-lg my-3 min-[320px] h-11 md:w-48 lg:w-72 border-solid border-2 border-zinc-800 hover:bg-zinc-900 hover:text-white gap-2'>
              <div className='flex justify-center gap-2'>
                <img src={appleIcon} alt="Apple Icon" className='w-1/12 h-1/12 py-1'/>
                <h1 className='gap-y-30 text-zinc-400 text-sm'>Login with Apple</h1>
              </div>
            </button>
            
            <Form>
              <div className='flex flex-col gap-y-2 text-zinc-400'>
                <label htmlFor="username">Username</label>
                <Field name="username" type="text" placeholder="xyz" className='min-[320px] h-9 md:w-48 lg:w-72 bg-zinc-900 rounded-lg p-3' />
                <ErrorMessage name="username" />
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" placeholder="At least 8 characters" className='min-[320px] h-9 md:w-48 lg:w-72 bg-zinc-900 rounded-lg p-3' />
                <ErrorMessage name="password" />
                <div className='flex justify-between'>
                  <div className='flex gap-1'>
                    <input type='checkbox' className='px-2 py-2 bg-green-300' />
                    <h1 className='text-zinc-500'>Remember me.</h1>
                  </div>
                  <button className='text-white text-sm'>Forgot Password?</button>
                </div>
                <button type="submit" className='bg-white text-black rounded-md h-10 gap-34 font-bold hover:bg-zinc-200 border-solid border-2 hover:border-zinc-700'>Login</button>
              </div>
            </Form>
          </div>
          
          <div className='flex place-content-center'>
            <img src={bck} className='w-fit h-fit'/>
          </div>
        </div >
      </div>
      </Formik>
    </div>
  );
};

export default Login;
