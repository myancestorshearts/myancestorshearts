import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    return (
        <nav className='flex justify-between bg-primary-500 px-8 py-8'>
            <div className='container mx-auto md:flex md:justify-between md:items-center'>
                <div className='flex justify-between items-center'>
                    <div className=''>

                    </div>
                    <div className='md:hidden'>
                        <button className='text-white focus:outline-none'>
                            <MenuIcon />
                        </button>
                    </div>
                </div>
                <div className='hidden md:flex items-center ml-auto'>
                    <Link to='/' className='text-white text-lg mx-4'>Login</Link>
                    {/* <a href='/support' className='text-white text-lg md:mx-4>'>Support</a> */}
                    <Link to='/register' className='text-white text-lg mx-4'>Create an Account</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar