import React, { useEffect, useState } from 'react'
import torture from '../assets/torture.webp'
import shiro from '../assets/shiro.jpg'
import door from '../assets/door.jpg'
import { useAuth } from './context/authContext';
import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';
import { FcGoogle } from "react-icons/fc";
import { Navigate, Link, useNavigate } from 'react-router-dom';
import hero22 from '../assets/hero22.png'

const SignUp = () => {



    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false)


     const { userLoggedIn } = useAuth()

     const onSubmit = async (e) => {
        e.preventDefault()
        if(!isRegistering) {
            setIsRegistering(true)
            try {
                await doCreateUserWithEmailAndPassword(email, password)
            } catch (error) {
                console.error("Error creating user: ", error);
                setIsRegistering(false)
            }
        }
    }
    
useEffect(() => {
    if (userLoggedIn) {
      navigate('/main');
    }
  }, [userLoggedIn, navigate]);

    return (
        <>
        {userLoggedIn && (<Navigate to={'/main'} replace={true} />)}    
        <div className='xl:flex h-screen' >
             <div className='relative '>
            <div className='absolute inset-0 xl:bg-gradient-to-l bg-gradient-to-t from-black to-transparent'></div>
            <img src={hero22} alt="torture-fremd" className='h-full w-full object-cover' />
        </div>
            <form onSubmit={onSubmit} className='text-white flex justify-center items-center flex-col xl:w-2/3'>
                <label className='my-4 text-5xl relative bottom-20 font-playwright'>Sign Up</label>
                <label className="input input-bordered flex items-center gap-2 my-2">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="text" className="grow" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                
              
                <label className="input input-bordered flex items-center gap-2 my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input type="password" className="grow" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <p className='text-sm'>The password must be over 6 characters</p>
                <button className='btn my-7 bg-white text-black rounded-lg hover:text-white'>Sign Up</button>
            
            <button className='btn flex border-2 border-white rounded-full text-lg'><Link to="/main">Continue without Account</Link></button>
            <Link className='my-4' to={'/login'}> <p>Already have an account?</p> </Link>
            </form>
            
        </div>
        </>
    )
}

export default SignUp
