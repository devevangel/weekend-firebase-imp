import React, { useState } from "react";
import { connect } from "react-redux";

import { handleLogin } from "../redux";

const LoginForm = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  const handleSubmit = () => {
    login(email, password);
  };

  return (
    <div>
      <h4>Login Form</h4>
      <input
        type="text"
        placeholder="enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="enter your password"
        value={password}
        onChange={(e) => setPassWord(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.authUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(handleLogin(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
