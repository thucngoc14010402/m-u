import React, { useState } from "react";

const LoginForm = ({ onSwitch }) => {
  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailPhone, password }),
      });
      if (response.ok) {
        alert("Login successful!");
      } else {
        alert("Login failed!");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Phone Number or Email *</label>
          <input
            type="text"
            value={emailPhone}
            onChange={(e) => setEmailPhone(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="relative">
          <label className="block text-gray-700">Password *</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded pr-10"
            required
          />
          <span
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            👁️
          </span>
        </div>
        <button
          type="submit"
          className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          LOGIN
        </button>
        <div className="text-center">
          <p>
            Don't have an account?{" "}
            <a href="#" onClick={onSwitch} className="text-blue-500">
              Register now
            </a>
          </p>
          <p>
            <a href="#" className="text-blue-500">
              Forgot password?
            </a>
          </p>
        </div>
      </form>
      <div className="text-center mt-4">
        <p>Or</p>
        <button className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700">
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;