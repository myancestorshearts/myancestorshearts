import React from "react"
import { Link } from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu"

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-primary-500 px-4 py-12">
      <div className="container mx-auto md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div className="">
            <img src="" alt="myancestorsheartslogo" width={102} height={10} />
          </div>
          <div className="md:hidden">
            <button className=" text-secondary-500 focus:outline-none">
              <MenuIcon />
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-center ml-auto">
          <Link to="/" className=" text-white text-lg mx-4">
            Home
          </Link>
          <Link to="/Our Team" className=" text-white text-lg mx-4">
            Our Team
          </Link>
          <Link to="/" className=" text-white text-lg mx-4">
            Purchase Workbook
          </Link>
          <Link to="/" className=" text-white text-lg mx-4">
            Sign In
          </Link>
          <Link to="/" className="text-white text-lg mx-4">
            Create an Account
          </Link>

          {/* <a href='/support' className='text-white text-lg md:mx-4>'>Support</a> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
