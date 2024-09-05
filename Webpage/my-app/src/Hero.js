import React from "react";

function Hero() {
  return (
    <div className="background">
      <div className="main-text">
        <div className="sub">
          <h3>RECEIVE YOUR FREE</h3>
          <h1>SEO REPORT</h1>
          <p>
            Start working with an company that can provide <br></br>
            everything you need to generate awareness.
          </p>
          <input type="email" placeholder="Enter Your email address"></input>
          <br></br>
          <button type="button">Get Start now</button>{" "}
          <a href="">see live demo</a>
        </div>
        <div className="sub">
          <img src="https://lithoreact.themezaa.com/assets/img/webp/home-seo-agency-img-01.webp" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
