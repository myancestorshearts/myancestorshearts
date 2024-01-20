import React from 'react'
import backgroundImage from '../../assets/login_background.jpg'
import Typography from '@mui/material/Typography';
import Footer from '../Footer';


const Login = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'luminosity',
        width: '100vw',
        height: '100vh'
    }
    return (
        <div className='relative min-h-screen' style={backgroundImageStyle}>

            <div className='absolute flex items-center justify-center pt-16 pb-16 md:pt-0 md:pb-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='bg-secondary-500 w-full max-w-md p-8 mx-auto md:mx-0 md:p-12 rounded-lg shadow-md'>
                    <Typography variant='h2' className='text-center mb-4 pb-6 text-white '>Login</Typography>
                    <form className='space-y-6'>
                        <input type='email' placeholder='Email' className='w-full p-3 py-2 rounded-full focus:outline-none focus:ring focus:border-secondary-500 text-secondary-500 placeholder-bold' />
                        <input type='password' placeholder='Password' className='w-full p-3 py-2 rounded-full focus:outline-none focus:ring focus:border-secondary-500 placeholder-bold' />
                        <div className='flex flex-col items-center'>
                            <button type='submit' className='w-32 bg-white text-secondary-500 font-bold py-2 px-4 rounded-full hover:bg-secondary-white focus:bg-secondary-white'>Login</button>
                            <a href='/reset-password' className='text-sm text-white hover:underline text-center pt-4'>Forgot Password? Reset Here</a>
                        </div>

                        <div className='text-center pt-4 text-white font-extrabold text-xl'>Or</div>
                        <div className='flex justify-center'>
                            <a href='/register' className='flex  items-center px-2 py-2 mt-2 underline underline-offset-4 text-white hover:bg-secondary-500 focus:outline-none focus:bg-secondary-500'>Create an Account</a>
                        </div>
                    </form>
                </div>
            </div>
            <div className='absolute h-24 pt-4 bg-primary-500 bottom-0 w-full'>
                <Footer />
            </div>
        </div>

    )
}

export default Login