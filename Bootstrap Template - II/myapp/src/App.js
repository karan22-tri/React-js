import './App.css';

function App() {
  return (
    <>
      <a id="menu-toggle" href="#" className="btn btn-primary btn-lg toggle"><i className="fa fa-bars"></i></a>
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <a id="menu-close" href="#" className="btn btn-default btn-lg pull-right toggle"><i className="fa fa-times"></i></a>
          <li className="sidebar-brand"><a href="http://startbootstrap.com">Start Bootstrap</a></li>
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div id="top" className="header">
        <div className="vert-text">
          <h1>Start Bootstrap</h1>
          <h3><em>We</em> Build Great Templates, <em>You</em> Make Them Better</h3>
          <a href="#about" className="btn btn-default btn-lg">Find Out More</a>
        </div>
      </div>

      <div id="about" className="intro">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center">
              <h2>Subtle Sidebar is the Perfect Template for your Next Portfolio Website Project!</h2>
              <p className="lead">This template really has it all. It's up to you to customize it to your liking! It features some fresh photography courtesy of <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a>.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="services" className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4 text-center">
              <h2>Our Services</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-md-offset-2 text-center">
              <div className="service-item">
                <i className="service-icon fa fa-rocket"></i>
                <h4>Spacecraft Repair</h4>
                <p>Did your navigation system shut down in the middle of that asteroid field? We can repair any dings and scrapes to your spacecraft!</p>
              </div>
            </div>
            <div className="col-md-2 text-center">
              <div className="service-item">
                <i className="service-icon fa fa-magnet"></i>
                <h4>Problem Solving</h4>
                <p>Need to know how magnets work? Our problem solving solutions team can help you identify problems and conduct exploratory research.</p>
              </div>
            </div>
            <div className="col-md-2 text-center">
              <div className="service-item">
                <i className="service-icon fa fa-shield"></i>
                <h4>Blacksmithing</h4>
                <p>Planning a time travel trip to the middle ages? Preserve the space time continuum by blending in with period accurate armor and weapons.</p>
              </div>
            </div>
            <div className="col-md-2 text-center">
              <div className="service-item">
                <i className="service-icon fa fa-pencil"></i>
                <h4>Pencil Sharpening</h4>
                <p>We've been voted the best pencil sharpening service for 10 consecutive years. If you have a pencil that feels dull, we'll get it sharp!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="callout">
        <div className="vert-text">
          <h1>A Dramatic Text Area</h1>
        </div>
      </div>

      <div id="portfolio" className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4 text-center">
              <h2>Our Work</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-md-offset-2 text-center">
              <div className="portfolio-item">
                <a href="#">
                  <img className="img-portfolio img-responsive" src="img/portfolio-1.jpg" alt="Portfolio 1" />
                </a>
                <h4>Cityscape</h4>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="portfolio-item">
                <a href="#">
                  <img className="img-portfolio img-responsive" src="img/portfolio-2.jpg" alt="Portfolio 2" />
                </a>
                <h4>Is That On Fire?</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-md-offset-2 text-center">
              <div className="portfolio-item">
                <a href="#">
                  <img className="img-portfolio img-responsive" src="img/portfolio-3.jpg" alt="Portfolio 3" />
                </a>
                <h4>Stop Sign</h4>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="portfolio-item">
                <a href="#">
                  <img className="img-portfolio img-responsive" src="img/portfolio-4.jpg" alt="Portfolio 4" />
                </a>
                <h4>Narrow Focus</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center">
              <h3>The buttons below are impossible to resist.</h3>
              <a href="#" className="btn btn-lg btn-default">Click Me!</a>
              <a href="#" className="btn btn-lg btn-primary">Look at Me!</a>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="map">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"
        ></iframe>
        <br />
        <small>
          <a
            href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A"
          ></a>
        </small>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center">
              <ul className="list-inline">
                <li><i className="fa fa-facebook fa-3x"></i></li>
                <li><i className="fa fa-twitter fa-3x"></i></li>
                <li><i className="fa fa-dribbble fa-3x"></i></li>
              </ul>
              <div className="top-scroll">
                <a href="#top"><i className="fa fa-circle-arrow-up scroll fa-4x"></i></a>
              </div>
              <hr />
              <p>Copyright &copy; Company 2013</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
