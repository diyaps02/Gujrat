import React, { useState } from 'react';
import NormalUserSignup from '../Pages/NormalUserSingnup.jsx';
import ResearcherSignup from '../Pages/ResearcherSignup.jsx';
import StartupSignup from '../Pages/StartupSignup.jsx';
import FundProviderSignup from '../Pages/FundProvider.jsx';

const Signup = () => {
    const [userType, setUserType] = useState('');

    const userTypes = [
        { type: 'normal', label: 'As a Normal User', icon: '👤', color: 'bg-blue-500' },
        { type: 'researcher', label: 'As a Researcher', icon: '🔬', color: 'bg-green-800' },
        { type: 'startup', label: 'As a Startup', icon: '🚀', color: 'bg-orange-300' },
        { type: 'fundProvider', label: 'As a Fund Provider', icon: '💰', color: 'bg-grey-700' }
    ];

    const renderSignupForm = () => {
        switch(userType) {
            case 'normal': return <NormalUserSignup />;
            case 'researcher': return <ResearcherSignup />;
            case 'startup': return <StartupSignup />;
            case 'fundProvider': return <FundProviderSignup />;
            default: return null;
        }
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">Sign Up</h1>
            {!userType ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
                    {userTypes.map((type) => (
                        <button
                            key={type.type}
                            onClick={() => setUserType(type.type)}
                            className={`${type.color} hover:opacity-90 text-white rounded-lg p-6 shadow-md transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center`}
                        >
                            <span className="text-4xl mb-2">{type.icon}</span>
                            <span className="text-xl font-semibold">{type.label}</span>
                        </button>
                    ))}
                </div>
            ) : (
                <div className="w-full max-w-md">
                    <button
                        onClick={() => setUserType('')}
                        className="mb-4 text-blue-500 hover:text-blue-700 transition-colors duration-300"
                    >
                        ← Back to user type selection
                    </button>
                    {renderSignupForm()}
                </div>
            )}
        </div>
    );
};

export default Signup;
