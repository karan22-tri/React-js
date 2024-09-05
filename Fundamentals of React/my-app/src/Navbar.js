import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://lithoreact.themezaa.com/assets/img/webp/logo-gradient-magenta-orange.webp"></img>
      </div>
      <nav className="main-navbar">
        <a href="" id="home">Home</a>
        <a href="">Page</a>
        <a href="">Portfolio</a>
        <a href="">Elements</a>
        <a href="">Features</a>
        <a href="">Blog</a>
        <a href="">Shop</a>
      </nav>
      <div className="icons">
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-twitter"></i>
      </div>
    </div>
  );
}

export default Navbar;
