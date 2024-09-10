import React from 'react'
import Logo1 from "../../Assets/Images/logo_1.png";
import Logo2 from "../../Assets/Images/logo_2.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 mx-auto w-11/12 ">
    <div className="navbar-start flex gap-4 ">
      <img src={Logo1} className=' bg-grey-100 w-6/12 object-cover '/>
    <img src={Logo2}  className='bg-grey-100 w-6/12 object-cover'/>
    </div>
    <div className="navbar-center hidden lg:flex ml-16">
      <ul className="menu menu-horizontal px-1 text-black">
        <li><a>Innovation</a></li>
        <li><a>Research</a></li>
        <li><a>IPR Management</a></li>
        <li><a>Reports</a></li>
        <li><a>Resourses</a></li>
      </ul>
    </div>
    <div className="navbar-end flex gap-2">
      <a className="btn bg-orange-300 text-white rounded-md px-6">Login</a>
      <a className="btn bg-orange-50 text-orange-300 rounded-md px-6">Signup</a>
    </div>
   
  </div>
  )
}

export default Navbar;
