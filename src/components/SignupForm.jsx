import React, { useState } from "react";
import { connect } from "react-redux";

import { handleSignUp } from "../redux";

const SignupForm = ({ signUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  const handleSubmit = () => {
    signUp(email, password);
  };

  return (
    <div>
      <h4>Signup Form</h4>
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
      <button onClick={handleSubmit}>Signup</button>
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
    signUp: (email, password) => dispatch(handleSignUp(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
