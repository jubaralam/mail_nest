import React from "react";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { Route, Routes } from "react-router-dom";

const AllRoutes = () => {
  Home;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
};

export default AllRoutes;
