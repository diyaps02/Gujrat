import React, { useState } from 'react';
import LoginModal from './LoginModal';

const Login = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <button onClick={openModal} className="btn bg-orange-300 text-white rounded-md px-6">Login</button>
            {isModalOpen && <LoginModal onClose={closeModal} />}
        </div>
    );
}

export default Login;