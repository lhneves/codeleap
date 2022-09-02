import React from "react";

import ModalLogin from "../components/ModalLogin";

function Login() {
  return (
    <ModalLogin
      open={true}
      title="Welcome to CodeLeap network!"
      subtitle="Please enter your username"
    />
  );
}

export default Login;
