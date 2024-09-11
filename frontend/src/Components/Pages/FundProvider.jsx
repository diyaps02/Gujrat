import { useState } from "react";

const FundProviderSignup = () => {
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [representativeName, setRepresentativeName] = useState('');
    const [investmentFocus, setInvestmentFocus] = useState('');
    const [fundSize, setFundSize] = useState('');

    const isSignupDisabled = () => {
        return companyName.trim() === "" || email.trim() === "" || password.trim() === "" || 
               representativeName.trim() === "" || investmentFocus.trim() === "" || fundSize.trim() === "";
    };

    return (
        <form className="space-y-6 p-8 bg-white rounded-lg shadow-md">
            <input
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="input input-bordered w-full p-3 rounded-md"
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full p-3 rounded-md"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full p-3 rounded-md"
            />
            <input
                type="text"
                placeholder="Representative Name"
                value={representativeName}
                onChange={(e) => setRepresentativeName(e.target.value)}
                className="input input-bordered w-full p-3 rounded-md"
            />
            <input
                type="text"
                placeholder="Investment Focus (e.g., Tech, Healthcare)"
                value={investmentFocus}
                onChange={(e) => setInvestmentFocus(e.target.value)}
                className="input input-bordered w-full p-3 rounded-md"
            />
            <input
                type="text"
                placeholder="Fund Size (in millions USD)"
                value={fundSize}
                onChange={(e) => setFundSize(e.target.value)}
                className="input input-bordered w-full p-3 rounded-md"
            />
            <button
                type="submit"
                disabled={isSignupDisabled()}
                className={`${isSignupDisabled() ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-gray-800"} bg-gray-700 text-white w-full btn p-3 rounded-md transition duration-300 ease-in-out`}
            >
                Sign Up as Fund Provider
            </button>
        </form>
    );
};

export default FundProviderSignup;