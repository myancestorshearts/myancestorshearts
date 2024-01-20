import React, { useState } from 'react'
import backgroundImage from '../../assets/login_background.jpg'
import Footer from '../Footer';
import Typography from '@mui/material/Typography';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import '../../index.css'



const Register = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh'
    }

    const [currStep, setCurrStep] = useState(1)
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        gender: '',
        birthday: ''
    })

    const nextStep = () => {
        setCurrStep(currStep => Math.min(currStep + 1, 2));
    }

    const prevStep = () => {
        setCurrStep(currStep => Math.max(currStep - 1, 1))
    }

    // handles the changes in the form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    // Submit the formData to the server
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formData)
    }

    const renderStep = () => {
        switch (currStep) {
            case 1:
                return (
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <input
                            type='username'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                            placeholder='Username'
                            className='w-full p-3 py-2 rounded-full focus:outline-none focus:ring focus:border-secondary-500 text-secondary-500 placeholder-bold'
                        />
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Email'
                            className='w-full p-3 py-2 rounded-full focus:outline-none focus:ring focus:border-secondary-500 text-secondary-500 placeholder-bold'
                        />
                        <input
                            type='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Password'
                            className='w-full p-3 py-2 rounded-full focus:outline-none focus:ring focus:border-secondary-500 text-secondary-500 placeholder-bold'
                        />
                        <div className='flex justify-end'>
                            <button
                                type="button"
                                onClick={nextStep}
                                className="btn flex items-center justify-center"
                            >

                                <ArrowCircleRightIcon className="ml-2" sx={{ color: 'white', fontSize: '3rem' }} />
                            </button>
                        </div>


                    </form>
                );
            case 2:
                return (
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <select name='gender' value={formData.gender} onChange={handleChange} className='w-full p-3 rounded-full focus:outline-none focus:ring focus:border-secondary-500 text-secondary-500 bg-white text-center appearance-none'>

                            <option value="" className='bg-white' disabled>Select Gender</option>
                            <option value='male' style={{ backgroundColor: "white" }}>Male</option>
                            <option value='female' style={{ backgroundColor: "white" }}>Female</option>
                            <option value='noninary' style={{ backgroundColor: "white" }}>Non-binary</option>
                            <option value='prefernottosay' style={{ backgroundColor: "white" }}>Prefer not to say</option>
                        </select>
                        <input
                            type='date'
                            name='birthday'
                            value={formData.birthday}
                            onChange={handleChange}
                            placeholder='DD/MM/YYY'
                            className='w-full p-3 py-2 rounded-full focus:outline-none focus:ring focus:border-secondary-500 text-secondary-500 placeholder-bold'

                        />

                        <div className='flex justify-between items-center w-full'>
                            <span
                                type='button'
                                onClick={prevStep}
                                className='cursor-pointer text-white font-bold py-2 px-4 rounded-full hover:bg-secondary-500 focus:bg-secondary-500'>
                                Previous
                            </span>

                            <button
                                type='submit'
                                className='bg-white text-secondary-500 font-bold py-2 px-4 rounded-full hover:bg-secondary-white focus:bg-secondary-white'>
                                Submit
                            </button>
                        </div>

                    </form>


                );

            default:
                return null;
        }
    }


    return (
        <div className='relative bg-blend-luminosity flex flex-col justify-center min-h-screen' style={backgroundImageStyle}>
            <div className='absolute flex items-center justify-center pt-16 pb-16 md:pt-0 md:pb-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className="max-w-md w-full mx-auto px-4">
                    <div className='bg-secondary-500 w-full max-w-md p-8 mx-auto md:mx-0 md:p-12 rounded-lg shadow-md'>
                        <div className="mb-4">
                            {currStep === 1 && <Typography variant='h2' className='text-center mb-4 pb-6 text-white '>Getting Started</Typography>}
                            {currStep === 2 && (<Typography variant='h2' className='text-center mb-4 pb-6 text-white '>Personal Details</Typography>)}

                        </div>
                        {renderStep()}
                    </div>
                </div>




            </div>
            <div className='absolute h-24 pt-4 bg-primary-500 bottom-0 w-full'>
                <Footer />
            </div>

        </div>
    )
}

export default Register