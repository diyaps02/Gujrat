import React from 'react'
import Logo1 from "../../Assets/Images/logo_1.png";
import Logo2 from "../../Assets/Images/logo_2.png";
import Logo3 from "../../Assets/Images/navbarlogo.png"
import Login from "../Pages/Login";

const Navbar = () => {
  return (
   <div className=''>
    <div  className="w-full bg-grey-900 flex justify-end items-center  p-2 px-12">
     
     <div className='w-full h-full flex gap-8 items-center '>
     <img src={Logo1} className=" w-4/12 h-full" />
     <img src={Logo2}  className=" w-4/12 h-full"/>
     </div>

<div className='text-white w-6/12'>
Toll-free: 18002330616(10:30 AM - 06:10 PM)
</div>

     </div>
     <div className="navbar bg-base-100  mx-auto w-11/12 flex items-center ">
      <div className="navbar-start flex gap-4 items-center">
        <img src={Logo3} className=" w-2/12" />
        <h1>Government of gujrat</h1>
      </div>
      <div className="navbar-center hidden lg:flex ml-16">
        <ul className="menu menu-horizontal px-1 text-black dark:text-white">
          <li>
            <a className="hover:text-orange-300">Innovation</a>
          </li>
          <li>
            <a className="hover:text-orange-300">Research</a>
          </li>
          <li>
            <a className="hover:text-orange-300">IPR Management</a>
          </li>
          <li>
            <a className="hover:text-orange-300">Resources</a>
          </li>
        </ul>
        <div className="form-control ml-4">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
      </div>
      <div className="navbar-end flex gap-2">
  <Login />
  <a className="btn bg-orange-50 text-orange-300 rounded-md px-6">
    Signup
  </a>
</div>
    </div>
   </div>
  );
}

export default Navbar;
