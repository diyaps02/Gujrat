import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { ImCross } from "react-icons/im";

const LoginModal = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login submitted', { email, password });
    };
    const isLoginDisabled = () => {
        return email.trim() === '' || password.trim() === '';
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm overflow-y-auto h-full w-full flex items-center justify-center z-50">
            <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-xl w-[25%] h-[60%] backdrop-filter backdrop-blur-xl border border-gray-600">
                    <div className='w-full flex items-center justify-end'>
                        <ImCross className='text-white text-sm cursor-pointer active:scale-95 transition-all duration-300' onClick={onClose}/>
                    </div>
                <div className='w-full h-full flex items-center justify-center flex-col gap-4'>
                    <h1 className='text-white text-2xl font-bold'>Login</h1>
                    <div className='w-full flex items-center justify-center gap-4'>
                        <div className='flex items-center justify-center gap-2 bg-white rounded-lg p-2 text-black cursor-pointer active:scale-95 transition-all duration-300'>
                            <FcGoogle className='text-2xl text-white'/>
                            <span>Google</span>
                        </div>
                        <div className='flex items-center justify-center gap-2 bg-white rounded-lg p-2 text-black cursor-pointer active:scale-95 transition-all duration-300'>
                            <BiLogoFacebookCircle className='text-2xl text-blue-500'/>
                            <span>Facebook</span>
                        </div>
                    </div>
                    <span className='text-white-200 text-sm'>or</span>
                    <form action="submit" onSubmit={handleSubmit}>
                        <div className='w-full flex items-center justify-center flex-col gap-2'>
                            <input type="email" placeholder='Email' className='w-full md:w-80 p-2 rounded-lg bg-transparent border border-gray-600 text-white' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            <input type="password" placeholder='Password' className='w-full md:w-80 p-2 rounded-lg bg-transparent border border-gray-600 text-white' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            <button type='submit' className={`py-2 px-6 rounded-lg bg-white ${isLoginDisabled() ? 'cursor-not-allowed' : ' cursor-pointer active:scale-95'} text-black transition-all duration-300`} disabled={isLoginDisabled()}>Login</button>
                        </div>
                    </form>
                    <span className='text-white-200 text-sm'>Don't have an account? <span className='text-blue underline cursor-pointer'>Sign up</span></span>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;