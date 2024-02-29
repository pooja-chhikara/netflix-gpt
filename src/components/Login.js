import React from 'react'
import Header from './Header'
import { useState } from 'react'
const Login = () => {
    const [isSignIn,setIsSignIn]=useState(true)


    const toggleFormType=()=>{
        setIsSignIn(!isSignIn)
    }
  return (
    <div className=''> 
    <div className=''> 
   
    <Header/>
    <img 
    src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
    alt="bg"
    />
    </div>
    
        <form className='absolute bg-black bg-opacity-70 left-0 mx-auto my-36 p-12 right-0 text-white top-0 w-3/12'>
            <h1 className='font-bold py-2 text-3xl'>           
             {isSignIn?"Sign In":"Sign Up"}
            </h1>
            <input className='bg-transparent border-2 my-3 p-4 w-full'
            type="text/numeric"
            placeholder='Email Address or phone number'
            />
            {isSignIn?"":<input className='bg-transparent border-2 my-3 p-4 w-full'
            type="numeric"
            placeholder='Phone number'
            />}
            <input className='bg-transparent border-2 my-3 p-4 w-full'
            type="password"
            placeholder='Password'
            />
        <button className='bg-red-800 my-4 p-4 w-full'>
            {isSignIn?"Sign In":"Sign Up"}
        </button>
        <p className='text-center'>Forget password?</p>
        <div className='flex mt-24'>
            <input
            className='bg-transparent'
            type="checkbox"
            />
        <p className='mx-2'>Remember me</p>

        </div>
        <div className='flex my-2'>
        <p>
            {isSignIn?"new to Netflix ?":"already a user ?"}
             </p>
        <p className='cursor-pointer font-bold mx-2 text-lg' onClick={()=>toggleFormType()}> {!isSignIn?"Sign In":"Sign Up"}</p>

        </div>
        </form>
  

    </div>
  )
}

export default Login