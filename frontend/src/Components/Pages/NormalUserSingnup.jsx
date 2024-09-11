import { useState } from "react";

const NormalUserSignup = () => {

    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const [pass, setPass] = useState("");

    const isLoginDisabled = () => {
      return email.trim() === "" || pass.trim() === "" || text.trim() === "";
    };

    return (
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setText(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
          className="input input-bordered w-full"
        />
        <button
          type="submit"
          disabled={isLoginDisabled()}
          className={` ${isLoginDisabled() ? "cursor-not-allowed" : "cursor-pointer"} bg-blue-500 text-white w-full btn`}
        >
          Sign Up
        </button>
      </form>
    );
};

export default NormalUserSignup;