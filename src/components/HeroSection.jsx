import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate =  useNavigate()

  const redirectToRoute = (url)=>{
    navigate(url)
  }
  return (
    <div className="relative h-screen w-full bg-cover bg-center hero-section-container">
      {/* Overlay for darkening image */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Your Smart Inbox, Reinvented
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Manage all your emails in one beautiful, secure dashboard.
        </p>
        <div>
          <button
          onClick={()=> redirectToRoute("/register")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300">
            Get Started
          </button>
          <button
          onClick={()=> redirectToRoute("/login")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 mx-5 bg-gradient-to-t bg-gradient-red">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
