import React, { useState } from "react";

import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const AuthenticationPage = () => {
  const [authType, setAuthType] = useState("");

  return (
    <div>
      <h4>AuthenticationPage</h4>
      <div>
        <button onClick={() => setAuthType("signup")}>I want signup</button>
        <button onClick={() => setAuthType("login")}>I want login</button>
      </div>

      {authType === "signup" && <SignupForm />}
      {authType === "login" && <LoginForm />}
    </div>
  );
};

export default AuthenticationPage;
