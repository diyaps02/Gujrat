import React from 'react'
import Logo1 from "../../Assets/Images/logo_1.png";
import Logo2 from "../../Assets/Images/logo_2.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Contact Us</h6>
    <a className="link link-hover">Block No: 1, 3rd Floor, Udhyog Bhavan, Sector: 11, Gandhinagar - 382010 Gujarat, INDIA.</a>
    <a className="link link-hover">079-23252588 / 1800-233-0616</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
  
</footer>

<div  className="w-full bg-grey-900 flex justify-end items-center  p-2 px-12">
     
     <div className='w-full h-full flex gap-8 items-center '>
     <img src={Logo2}  className=' w-4/12 h-full'/>
     </div>

<div className='text-white w-8/12'>
@ 2024 StartUp,Research and Innovation Gujarat Cell. All Rights Reserved.
</div>

     </div>
    </div>
  )
}

export default Footer;
