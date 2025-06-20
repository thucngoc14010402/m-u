import React, { useState } from "react";

const RegisterForm = ({ onSwitch }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: name,
          phone,
          password,
          city,
          district,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        alert("Registration successful! Please check your email to confirm.");
      } else {
        const errorText = await response.text();
        alert(`Registration failed: ${errorText || "Unknown error"}`);
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
        Member Registration
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Full Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone Number *</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
        <div className="relative">
          <label className="block text-gray-700">Confirm Password *</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border rounded pr-10"
            required
          />
          <span
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            👁️
          </span>
        </div>
        <div>
          <label className="block text-gray-700">Province/City *</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">District/Ward *</label>
          <input
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-amber-700 text-white p-2 rounded hover:bg-amber-900"
        >
          Register
        </button>
        <div className="text-center mt-4">
          <p>
            Already have an account?{" "}
            <a href="#" onClick={onSwitch} className="text-blue-500">
              Login now
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;