import React from "react";
import { connect } from "react-redux";

import { logOut } from "../redux";

const HomePage = ({ handleLogOut, user }) => {
  return (
    <div>
      <div>
        <h4>Welcome, {user.email}</h4>
        <button onClick={handleLogOut}>Logout</button>
      </div>
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
    handleLogOut: () => dispatch(logOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
