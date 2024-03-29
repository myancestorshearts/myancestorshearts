import React, {useState} from 'react'
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from 'react-router-dom';
import { UseSelector } from 'react-redux';
import Navbar from './layout_bar/navbar';



const Layout = () => {
    return <Box width="100%" height="100%">
        <Box>
            <Navbar/>
            <Outlet/>
        </Box>
    </Box>
}

export default Layout;