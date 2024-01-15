import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Forget from "../Pages/Forget";
import { UserAuthContextProvider } from "../Context/UserAuthContext";
import ProtectedRoute from "../Context/ProtectedRoute";
import PhoneSignUp from "../Context/PhoneSignUp";

const Routers = () => {
  return (
    <>
      <Router>
        <UserAuthContextProvider>
          <Routes>
            <Route
              path="/Home"
              exact
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/" exact element={<Login />} />
            <Route path="/SignUp" exact element={<SignUp />} />
            <Route path="/PhoneSignUp" exact element={<PhoneSignUp />} />
            <Route path="/Forget" exact element={<Forget />} />
          </Routes>
        </UserAuthContextProvider>
      </Router>
    </>
  );
};
export default Routers;
