import React from "react";

import ModalLogin from "../components/ModalLogin";

import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import * as actions from '../actions/auth'

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault()
    
    dispatch(actions.login({user: e.target.value}))

    navigate("home", { replace: true });
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
