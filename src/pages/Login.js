import React from "react";
import { useNavigate } from 'react-router-dom';

import ModalLogin from "../components/ModalLogin";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault()
    navigate('home')
  }

  return (
    <ModalLogin
      open={true}
      title="Welcome to CodeLeap network!"
      subtitle="Please enter your username"
      onEnter={handleLogin}
    />
  );
}

export default Login;
