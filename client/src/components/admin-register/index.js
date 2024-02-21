import React, { useState, useEffect } from 'react'
//import backgroundImage from '../../assets/login_background.jpg'
import Footer from '../Footer';
import Typography from '@mui/material/Typography';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import '../../index.css'
import { useNavigate } from 'react-router-dom'
import { Listbox } from '@headlessui/react';
import { SelectorIcon } from '@heroicons/react/solid';




const Register = () => {
    const fetchedGenderOptions = [
        { id: 1, name: 'Male' },
        { id: 2, name: 'Female' },
        { id: 3, name: 'Non-binary' },
        { id: 4, name: 'Prefer not to say' },
    ];

    //set the state of the step registration
    const [currStep, setCurrStep] = useState(1)

    // set the state of the form info 
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        gender: '',
        birthday: ''
    })

    // eslint-disable-next-line no-unused-vars
    const [genderOptions, setGenderOptions] = useState(fetchedGenderOptions);
    const [selectedGender, setSelectedGender] = useState();
    const [errors, setErrors] = useState({});



    // set the history state for redirect
    const navigate = useNavigate();

    // registration step 
    const nextStep = () => {
        setCurrStep(currStep => Math.min(currStep + 1, 2));
    }

    const prevStep = () => {
        setCurrStep(currStep => Math.max(currStep - 1, 1))
    }

    // handles the changes in the form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: value.trim() === '' ? `${name.charAt(0).toUpperCase() + name.slice(1)} is required.` : '' });
    }
    

    // Submit the formData to the server
    const handleSubmit = async (e) => {
        e.preventDefault()
        const validationErrors = {};
        if (!formData.username || !formData.username.trim()) {
            validationErrors.username = 'Username is required.';
        }
        if (!formData.email || !formData.email.trim()) {
            validationErrors.email = 'Email is required.';
        } 
        if (!formData.password || !formData.password.trim()) {
            validationErrors.password = 'Password is required.';
        }
        if (!formData.gender) {
            validationErrors.gender = 'Gender is required.';
        }
        if (!formData.birthday) {
            validationErrors.birthday = 'Birthday is required.';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // const apiURL = process.env.REACT_APP_API_BASE_URL;

        const userData = {
            ...formData

        };
        
        try {
            const response = await fetch('http://localhost:5001/authRoutes/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)

            })

            const data = await response.json()

            if (response.ok) {

                navigate('/login')
            } else {
                console.error(data.message || "An error occurred during reg")
            }

        } catch (err) {
            console.error('Registration Error: ', err)

        }
    }

    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            gender: selectedGender ? selectedGender.name : '',
        }));
    }, [selectedGender]);

    // Initialize selectedGender based on formData.gender
    useEffect(() => {
        const genderFromData = genderOptions.find(g => g.name === formData.gender);
        setSelectedGender(genderFromData);
    }, [formData.gender, genderOptions]);

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
                        className='w-full p-3 py-2 rounded-md focus:outline-none  border border-gray-500 text-primary-500 placeholder-bold'
                    />
                    {errors.username && <p className="text-secondary-500">{errors.username}</p>}

                    <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email'
                        className='w-full p-3 py-2 rounded-md focus:outline-none  border border-gray-500 text-primary-500 placeholder-bold'
                    />
                    {errors.email && <p className="text-secondary-500">{errors.email}</p>}

                    <input
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        placeholder='Password'
                        className='w-full p-3 py-2 rounded-md focus:outline-none  border border-gray-500 text-primary-500 placeholder-bold'
                    />
                    {errors.password && <p className="text-secondary-500">{errors.password}</p>}

                    <div className='flex justify-end'>
                        <button
                            type="button"
                            onClick={nextStep}
                            className="btn flex items-center justify-center"
                        >

                            <ArrowCircleRightIcon className="ml-2" sx={{ color: '#070d2e', fontSize: '3rem' }} />
                        </button>
                    </div>


                </form>


                    
                   
                );
            case 2:
                return (
                    <form onSubmit={handleSubmit} className='space-y-6'>
                       <Listbox value={selectedGender} onChange={setSelectedGender}>
                {({ open }) => (
                    <>
                        <div className="mt-4 relative">
                            <Listbox.Button className="relative w-full bg-white border border-primary-500 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                                <span className="block truncate">{selectedGender?.name || 'Select Gender'}</span>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </Listbox.Button>
                            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                {genderOptions.map((option) => (
                                    <Listbox.Option
                                        key={option.id}
                                        className={({ active }) =>
                                            `cursor-default select-none relative py-2 pl-10 pr-4 ${
                                                active ? 'bg-primary-100 text-primary-900' : 'text-gray-900'
                                            }`
                                        }
                                        value={option}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                    {option.name}
                                                </span>
                                                {selected ? (
                                                    <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                        active ? 'text-primary-500' : 'text-primary-500'
                                                    }`}>
                                                        {/* Checkmark icon */}
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </div>
                    </>
                )}
            </Listbox>
            {errors.gender && <p className="text-secondary-500">{errors.gender}</p>}

            <input
                type='date'
                name='birthday'
                value={formData.birthday}
                onChange={handleChange}
                placeholder='DD/MM/YYY'
                border-gray-300
                className='w-full p-3 py-2 rounded-md  border-primary-600 focus:outline-none border text-primary-600 placeholder-bold'

             />
            {errors.birthday && <p className="text-secondary-500">{errors.birthday}</p>}



                        <div className='flex justify-between items-center w-full'>
                            <span
                                type='button'
                                onClick={prevStep}
                                className='cursor-pointer text-primary-500 font-bold py-2 px-4 rounded-full '>
                                Previous
                            </span>

                            <button
                                type='submit'
                                className='bg-primary-500 text-white font-bold py-2 px-4 rounded-full hover:bg-primary-white focus:bg-primary-white'>
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
                    {currStep === 1 && (
                        <Typography variant='h3' component="h1" className='text-center mb-6 text-primary-500 font-bold pb-4'>
                            Getting Started
                        </Typography>
                    )}
                    {currStep === 2 && (
                        <Typography variant='h3' component="h1" className='text-center mb-6 text-primary-500'>
                            Personal Details
                        </Typography>
                    )}
                    {renderStep()}
                </div>
            </div>
        </div>
    </div>
        <Footer />
    </div>
);

}

export default Register