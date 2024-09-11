import { useState } from "react";

const StartupSignup = () => {
    const [showForm, setShowForm] = useState(false);
    const [startupName, setStartupName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dpiitId, setDpiitId] = useState('');
    const [founderName, setFounderName] = useState('');
    const [industry, setIndustry] = useState('');

    const isSignupDisabled = () => {
        return startupName.trim() === "" || email.trim() === "" || password.trim() === "" || 
               dpiitId.trim() === "" || founderName.trim() === "" || industry.trim() === "";
    };

    if (!showForm) {
        return (
            <div className="mt-8 p-8 space-y-6 text-center bg-orange-50 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-orange-600">Important Notice</h2>
                <p className="text-gray-700">To sign up as a startup, you must have a DPIIT ID. If you don't have one, please register your startup with the Department for Promotion of Industry and Internal Trade (DPIIT) first.</p>
                <p className="text-lg font-semibold text-gray-800">Do you have a DPIIT ID?</p>
                    <div className="flex justify-center space-x-4 pt-4">
    <button 
        onClick={() => setShowForm(true)}
        className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
    >
        Yes, I have a DPIIT ID
    </button>
    <a 
        href="https://www.startupindia.gov.in/content/sih/en/registration.html" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out inline-block"
    >
        No, I need to register
    </a>
</div>

            </div>
        );
    }

    return (
        <form className="space-y-6 p-8 bg-white rounded-lg shadow-md">
            <input
                type="text"
                placeholder="Startup Name"
                value={startupName}
                onChange={(e) => setStartupName(e.target.value)}
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
                placeholder="DPIIT ID"
                value={dpiitId}
                onChange={(e) => setDpiitId(e.target.value)}
                className="input input-bordered w-full p-3 rounded-md"
            />
            <input
                type="text"
                placeholder="Founder Name"
                value={founderName}
                onChange={(e) => setFounderName(e.target.value)}
                className="input input-bordered w-full p-3 rounded-md"
            />
            <input
                type="text"
                placeholder="Industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="input input-bordered w-full p-3 rounded-md"
            />
            <button
                type="submit"
                disabled={isSignupDisabled()}
                className={`${isSignupDisabled() ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-orange-400"} bg-orange-300 text-white w-full btn p-3 rounded-md transition duration-300 ease-in-out`}
            >
                Sign Up as Startup
            </button>
        </form>
    );
};

export default StartupSignup;