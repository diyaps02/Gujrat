import { useState } from "react";

const ResearcherSignup = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [workingInstitution, setWorkingInstitution] = useState('');
    const [position, setPosition] = useState('');
    const [researchField, setResearchField] = useState('');

    const isSignupDisabled = () => {
        return fullName.trim() === "" || email.trim() === "" || password.trim() === "" || 
               country.trim() === "" || workingInstitution.trim() === "" || position.trim() === "" || 
               researchField.trim() === "";
    };

    return (
        <form className="space-y-4">
            <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="input input-bordered w-full"
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full"
            />
            <input
                type="text"
                placeholder="Country/Region"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="input input-bordered w-full"
            />
            <input
                type="text"
                placeholder="Working Institution"
                value={workingInstitution}
                onChange={(e) => setWorkingInstitution(e.target.value)}
                className="input input-bordered w-full"
            />
            <input
                type="text"
                placeholder="Position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="input input-bordered w-full"
            />
            <input
                type="text"
                placeholder="Research Field"
                value={researchField}
                onChange={(e) => setResearchField(e.target.value)}
                className="input input-bordered w-full"
            />
            <button
                type="submit"
                disabled={isSignupDisabled()}
                className={`${isSignupDisabled() ? "cursor-not-allowed" : "cursor-pointer"} bg-green-800 text-white w-full btn`}
            >
                Sign Up as Researcher
            </button>
        </form>
    );
};

export default ResearcherSignup;