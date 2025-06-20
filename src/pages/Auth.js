import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      {isLogin ? (
        <LoginForm onSwitch={() => setIsLogin(false)} />
      ) : (
        <RegisterForm onSwitch={() => setIsLogin(true)} />
      )}
    </div>
  );
};

export default Auth;