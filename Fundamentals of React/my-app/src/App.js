import "./App.css";
import Navbar from "./Navbar.js";
import Hero from "./Hero.js";
import React from "./Results.js";
import Results from "./Results.js";
import Seo from "./Seo.js";
import Boost from "./Boost.js";
import Scientific from "./Scientific.js"
import Colorlib from "./Colorlib.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Results />
      <Seo />
      <Boost />
      <Scientific />
      <Colorlib/>
      <Footer/>
    </div>
  );
}

export default App;
