import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthenticationPage from "./pages/AuthenticationPage";
import HomePage from "./pages/HomePage";
import AddPostPage from "./pages/AddPostPage";

import "./App.css";

const App = ({ user }) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              user.uid ? <Navigate to="/feeds" /> : <AuthenticationPage />
            }
          />
          <Route
            path="/feeds"
            element={!user.uid ? <Navigate to="/" /> : <HomePage />}
          />
          <Route
            path="/addPost"
            element={!user.uid ? <Navigate to="/" /> : <AddPostPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.authUser,
  };
};

export default connect(mapStateToProps, null)(App);
