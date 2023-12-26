

import React from 'react';
import '../css/Navbar.css';
import Train from "../Assests/Images/TRAIN_MANIA_YOU_TUBE_CHANNEL_LOGO-removebg-preview.png"
import TrainLogo from "../Assests/Images/TrainLogo.jpg"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={TrainLogo} alt="Logo" className="logo-image" />
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
