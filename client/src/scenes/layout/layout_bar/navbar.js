import React from 'react'
import { Link } from 'react-router-dom'
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, search, settingsOutlined, ArrowDropDown } from "@mui/icons-material";
import flexBetween from '../../../common/flexBetween';
import { useDispatch } from 'react-redux';
import Logo from '../../../assets/ancestorlogo.png'
import Profile from '../../../components/Profile';
import { AppBar, useTheme } from "@mui/material";
import { setMode } from '../../../state';




const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    
    return (
        <nav className='flex justify-between bg-slate px-4 py-4'>
            <div className='container mx-auto md:flex md:justify-between md:items-center'>
                <div className='flex justify-between items-center'>
                    <div className=''>
                       
                    </div>
                    <div className='md:hidden'>
                        <button className=' text-secondary-500 focus:outline-none'>
                            <MenuIcon />
                        </button>
                    </div>
                </div>
                <div className='hidden md:flex items-center ml-auto'>
                    <Link to="/profile">
                        <Profile/>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar