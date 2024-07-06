import React from 'react'
import Navbar from './Navbar'
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

function EditProfile() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate=useNavigate();
  const back=()=>{
    navigate('/dashboard')
  }

  return (
    <div 
    className={`w-full h-screen bg-black
    card ${theme === "Dark"
                ? "transition duration-300 bg-black "
                : "transition duration-300 bg-zinc-100 "
            }`}>
        <Navbar/>
        <div className='h-[calc(100%-48px)] w-full p-4 flex-col  '>
            <div className='flex justify-center mb-2'>
                <button 
                className={`p-8 rounded-full 
                card ${theme === "Dark"
                ? " transition bg-neutral-900 hover:bg-neutral-800 duration-300"
                : " transition bg-neutral-400 hover:bg-neutral-500 duration-300 "
                }`}></button>
            </div>
            <div className='flex justify-center'>
                <button 
                className={` text-xs text-center font-semibold
                card ${theme === "Dark"
                ? "transition text-neutral-600 hover:text-neutral-500 duration-200"
                : " transition text-neutral-500 hover:text-neutral-600 duration-200 "
                }`}>Change Profile Picture</button>
            </div>
            <form>
                <div className='flex justify-center '>
                    <div className='flex-col flex justify-center  px-20 py-4 rounded-lg'>
                        <div 
                        className={` text-center font-bold text-xl my-3
                         card ${theme === "Dark"
                         ? "transition text-neutral-300 duration-200"
                         : " transition text-neutral-800 duration-200 "
                         }`}>Personal Information</div>
                        <div 
                        className={`m-1 border-solid border-[1px] border-neutral-800 pl-3 pr-20 py-1 rounded-lg 
                        card ${theme === "Dark"
                        ? "transition border-solid border-[1px] border-neutral-800  text-neutral-300  hover:bg-neutral-900  hover:text-neutral-200 duration-200"
                        : " transition border-solid border-[1px] border-neutral-500 text-neutral-500  hover:bg-neutral-200  hover:text-neutral-600 duration-200 "
                        }`}>
                            <div className=' font-semibold text-sm'>Name</div>
                            <input readOnly placeholder='Atharv Malve' 
                            className={`px-0 text-sm  font-semibold bg-transparent rounded-none placeholder-neutral-500  
                            card ${theme === "Dark"
                            ? "transition placeholder-neutral-500  duration-200"
                            : " transition placeholder-neutral-800  duration-200 "
                            }`}></input>
                        </div>
                        <div 
                        className={`m-1 border-solid border-[1px] border-neutral-800 pl-3 pr-20 py-1 rounded-lg 
                        card ${theme === "Dark"
                        ? "transition border-solid border-[1px] border-neutral-800  text-neutral-300  hover:bg-neutral-900  hover:text-neutral-200 duration-200"
                        : " transition border-solid border-[1px] border-neutral-500 text-neutral-500  hover:bg-neutral-200  hover:text-neutral-600 duration-200 "
                        }`}>
                            <div className=' font-semibold text-sm'>Date of Birth</div>
                            <input readOnly placeholder='18 December 1857' 
                            className={`px-0 text-sm  font-semibold bg-transparent rounded-none placeholder-neutral-500  
                            card ${theme === "Dark"
                            ? "transition placeholder-neutral-500  duration-200"
                            : " transition placeholder-neutral-800  duration-200 "
                            }`}></input>
                        </div>
                        <div 
                        className={`m-1 border-solid border-[1px] border-neutral-800 pl-3 pr-20 py-1 rounded-lg 
                        card ${theme === "Dark"
                        ? "transition border-solid border-[1px] border-neutral-800  text-neutral-300  hover:bg-neutral-900  hover:text-neutral-200 duration-200"
                        : " transition border-solid border-[1px] border-neutral-500 text-neutral-500  hover:bg-neutral-200  hover:text-neutral-600 duration-200 "
                        }`}>
                            <div className=' font-semibold text-sm'>Pilot License</div>
                            <input readOnly placeholder='A123489348' 
                            className={`px-0 text-sm  font-semibold bg-transparent rounded-none placeholder-neutral-500  
                            card ${theme === "Dark"
                            ? "transition placeholder-neutral-500  duration-200"
                            : " transition placeholder-neutral-800  duration-200 "
                            }`}></input>
                        </div>
                        <div 
                        className={`m-1 border-solid border-[1px] border-neutral-800 pl-3 pr-20 py-1 rounded-lg 
                        card ${theme === "Dark"
                        ? "transition border-solid border-[1px] border-neutral-800  text-neutral-300  hover:bg-neutral-900  hover:text-neutral-200 duration-200"
                        : " transition border-solid border-[1px] border-neutral-500 text-neutral-500  hover:bg-neutral-200  hover:text-neutral-600 duration-200 "
                        }`}>
                            <div className=' font-semibold text-sm'>Phone Number</div>
                            <input readOnly placeholder='892392129' 
                            className={`px-0 text-sm  font-semibold bg-transparent rounded-none placeholder-neutral-500  
                            card ${theme === "Dark"
                            ? "transition placeholder-neutral-500  duration-200"
                            : " transition placeholder-neutral-800  duration-200 "
                            }`}></input>
                        </div>
                        <div className=' flex justify-evenly my-2'>
                            <button 
                            onClick={back}
                            className={`px-12 py-1 rounded-sm  font-semibold
                            card ${theme === "Dark"
                            ? "transition bg-neutral-300 hover:bg-white duration-200"
                            : " transition bg-neutral-800 text-neutral-300 hover:bg-black duration-200 "
                            }`}>
                                Back
                            </button>
                            <button 
                            className={`px-12 py-1 rounded-sm  font-semibold
                            card ${theme === "Dark"
                            ? "transition bg-neutral-300 hover:bg-white duration-200"
                            : " transition bg-neutral-800 text-neutral-300 hover:bg-black duration-200 "
                            }`}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    </div>
  )
}

export default EditProfile