import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom'


const Login = () => {
   
    // eslint-disable-next-line no-unused-vars
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    // set the history state for redirect
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData,[e.target.name] : e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.email || !formData.email.trim()) {
            newErrors.email = "Email is Required"
        }
        if (!formData.password || !formData.password.trim()) {
            newErrors.password = "Password is Required"
        }
        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return;
        }


        try {
            const response = await fetch('http://localhost:5001/authRoutes/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json();

            if (response.ok) {
                sessionStorage.setItem('authToken', data.token)
                navigate('/dashboard')
                console.log(data)
            } else {
                console.error(data.message || "Login error! Try Again!")
            }

        } catch (err) {
            console.error("Login Error: ", err)
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex items-center justify-center p-6 md:p-12">
            {/* Container for both columns */}
            <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-2xl bg-white rounded-lg overflow-hidden">
                {/* Left Column for Branding */}
                <div className="flex-1 flex flex-col justify-between bg-primary-500 text-white p-6 md:p-12">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">MyAncestorsHeart</h1>
                        <p className="text-xl">Connecting Generations, One Story at a Time</p>
                    </div>
                    <div>
                        <p className="text-sm">Conditions of Use</p>
                        <p className="text-sm">Help</p>
                    </div>
                </div>
                {/* Right Column for Form */}
                <div className="flex-1 flex justify-center p-6 md:p-12">
                    <div className="max-w-md w-full">
                    <Typography variant='h2' className='text-center mb-4 pb-6 text-primary-500 '>Login</Typography>
                                <form onSubmit={handleSubmit} className='space-y-4'>
                                    <input
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    onChange={handleChange}
                                    value={formData.email}
                                    className='w-full p-3 py-2 rounded-md focus:outline-none border border-primary-500 text-primary-500 placeholder-bold'
                                />
                                {errors.email && <span className='text-secondary-500'>{errors.email}</span>}
                                <input
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    onChange={handleChange}
                                    value={formData.password}
                                    className='w-full p-3 py-2 rounded-md focus:outline-none border border-primary-500 placeholder-bold'
                                />
                                {errors.password && <span className='text-secondary-500'>{errors.password}</span>}

                                <div className='flex flex-col items-center'>
                                    <button type='submit' className='w-32 bg-primary-500 text-white font-bold py-2 px-4 rounded-full hover:bg-secondary-white focus:bg-secondary-white'>Login</button>
                                    <a href='/reset-password' className='text-sm text-primary-500 hover:underline text-center pt-4'>Forgot Password? Reset Here</a>
                                </div>

                                <div className='text-center pt-4 text-primary-500 font-extrabold text-xl'>Or</div>
                                <div className='flex justify-center'>
                                    <a href='/admin-register' className='flex  items-center px-2 py-2 mt-2 underline underline-offset-4 text-primary-500 hover:bg-white focus:outline-none focus:bg-white'>Create an Account</a>
                                </div>
                            </form>
                            
                    </div>
                </div>
            </div>
        </div>
            <Footer />
        </div>
        // <div className='relative min-h-screen' style={backgroundImageStyle}>

        //     <div className='absolute flex items-center justify-center pt-16 pb-16 md:pt-0 md:pb-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        //         <div className='bg-secondary-500 w-full max-w-md p-8 mx-auto md:mx-0 md:p-12 rounded-lg shadow-md'>
        //             <Typography variant='h2' className='text-center mb-4 pb-6 text-white '>Login</Typography>
        //             <form onSubmit={handleSubmit} className='space-y-6'>
        //                 <input
        //                     type='email'
        //                     name='email'
        //                     placeholder='Email'
        //                     onChange={handleChange}
        //                     value={formData.email}
        //                     className='w-full p-3 py-2 rounded-full focus:outline-none focus:ring focus:border-secondary-500 text-secondary-500 placeholder-bold'
        //                 />
        //                 <input
        //                     type='password'
        //                     name='password'
        //                     placeholder='Password'
        //                     onChange={handleChange}
        //                     value={formData.password}
        //                     className='w-full p-3 py-2 rounded-full focus:outline-none focus:ring focus:border-secondary-500 placeholder-bold'
        //                 />
        //                 <div className='flex flex-col items-center'>
        //                     <button type='submit' className='w-32 bg-white text-secondary-500 font-bold py-2 px-4 rounded-full hover:bg-secondary-white focus:bg-secondary-white'>Login</button>
        //                     <a href='/reset-password' className='text-sm text-white hover:underline text-center pt-4'>Forgot Password? Reset Here</a>
        //                 </div>

        //                 <div className='text-center pt-4 text-white font-extrabold text-xl'>Or</div>
        //                 <div className='flex justify-center'>
        //                     <a href='/register' className='flex  items-center px-2 py-2 mt-2 underline underline-offset-4 text-white hover:bg-secondary-500 focus:outline-none focus:bg-secondary-500'>Create an Account</a>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        //     <div className='absolute h-24 pt-4 bg-secondary-500 bottom-0 w-full'>
        //         <Footer />
        //     </div>
        // </div>

    )
}

export default Login