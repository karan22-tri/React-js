import React from 'react'

export default function Index() {
  return (
    <>

            <nav className="navbar navbar-expand-lg fixed-top navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="index.html" className="navbar-brand p-0">
                    <h1 className="display-6 text-primary m-0"><i className="fas fa-envelope me-3"></i>Mailler</h1>
                    {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="service.html" className="nav-item nav-link">Services</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="feature.html" className="dropdown-item">Features</a>
                                <a href="pricing.html" className="dropdown-item">Pricing</a>
                                <a href="blog.html" className="dropdown-item">Blog</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact Us</a>
                    </div>
                    <a href="#" className="btn btn-light border border-primary rounded-pill text-primary py-2 px-4 me-4">Log In</a>
                    <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4">Sign Up</a>
                </div>
            </nav>

            <div className="hero-header overflow-hidden px-5">
                <div className="rotate-img">
                    <img src="img/sty-1.png" className="img-fluid w-100" alt=""/>
                    <div className="rotate-sty-2"></div>
                </div>
                <div className="row gy-5 align-items-center">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                        <h1 className="display-4 text-dark mb-4 wow fadeInUp" data-wow-delay="0.3s">Turn Emails into Revenue</h1>
                        <p className="fs-4 mb-4 wow fadeInUp" data-wow-delay="0.5s">Win new customers with the #1 email marketing and automations brand* that recommends ways to get more opens, clicks, and sales.</p>
                        <a href="#" className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.7s">Get Started</a>
                    </div>
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                        <img src="img/hero-img-1.png" className="img-fluid w-100 h-100" alt=""/>
                    </div>
                </div>
            </div>
            <div className="sec2 container" >
            {/* <div className="container-fluid overflow-hidden py-5"  style="margin-top: 6rem;"> */}
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="RotateMoveLeft">
                            <img src="img/about-1.png" className="img-fluid w-100" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <h4 className="mb-1 text-primary">About Us</h4>
                        <h1 className="display-5 mb-4">Get Started Easily With a Personalized Product Tour</h1>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, suscipit itaque quaerat dicta porro illum, autem, molestias ut animi ab aspernatur dolorum officia nam dolore. Voluptatibus aliquam earum labore atque.
                        </p>
                        <a href="#" className="btn btn-primary rounded-pill py-3 px-5">About More</a>
                    </div>
                </div>
            </div>
        </div>
            {/* </div> */}

            <div className="sec3 container ">
            <div className="container py-5">
                {/* <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 900px;"> */}
                    <h4 className="mb-1 text-primary">Our Service</h4>
                    <h1 className="display-5 mb-4">What We Can Do For You</h1>
                    <p className="mb-0">Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae maxime. Vel animi eveniet doloremque reiciendis soluta iste provident non rerum illum perferendis earum est architecto dolores vitae quia vero quod incidunt culpa corporis, porro doloribus. Voluptates nemo doloremque cum.
                    </p>
                </div>
                <div className="row g-0 justify-content-center">
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item text-center rounded p-4">
                            <div className="service-icon d-inline-block bg-light rounded p-4 mb-4"><i className="fas fa-mail-bulk fa-5x text-secondary"></i></div>
                            <div className="service-content">
                                <h4 className="mb-4">Email Newsletters</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                </p>
                                <a href="#" className="btn btn-light rounded-pill text-primary py-2 px-4">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item text-center rounded p-4">
                            <div className="service-icon d-inline-block bg-light rounded p-4 mb-4"><i className="fas fa-thumbs-up fa-5x text-secondary"></i></div>
                            <div className="service-content">
                                <h4 className="mb-4">Acquistion Emails </h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                </p>
                                <a href="#" className="btn btn-light rounded-pill text-primary py-2 px-4">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item text-center rounded p-4">
                            <div className="service-icon d-inline-block bg-light rounded p-4 mb-4"><i className="fa fa-subway fa-5x text-secondary"></i></div>
                            <div className="service-content">
                                <h4 className="mb-4">Retention Emails</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                </p>
                                <a href="#" className="btn btn-light rounded-pill text-primary py-2 px-4">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="service-item text-center rounded p-4">
                            <div className="service-icon d-inline-block bg-light rounded p-4 mb-4"><i className="fas fa-sitemap fa-5x text-secondary"></i></div>
                            <div className="service-content">
                                <h4 className="mb-4">Promotional Emails</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                </p>
                                <a href="#" className="btn btn-light rounded-pill text-primary py-2 px-4">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item text-center rounded p-4">
                            <div className="service-icon d-inline-block bg-light rounded p-4 mb-4"><i className="fas fa-mail-bulk fa-5x text-secondary"></i></div>
                            <div className="service-content">
                                <h4 className="mb-4">Email Newsletters</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                </p>
                                <a href="#" className="btn btn-light rounded-pill text-primary py-2 px-4">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item text-center rounded p-4">
                            <div className="service-icon d-inline-block bg-light rounded p-4 mb-4"><i className="fas fa-thumbs-up fa-5x text-secondary"></i></div>
                            <div className="service-content">
                                <h4 className="mb-4">Acquistion Emails </h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                </p>
                                <a href="#" className="btn btn-light rounded-pill text-primary py-2 px-4">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item text-center rounded p-4">
                            <div className="service-icon d-inline-block bg-light rounded p-4 mb-4"><i className="fa fa-subway fa-5x text-secondary"></i></div>
                            <div className="service-content">
                                <h4 className="mb-4">Retention Emails</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                </p>
                                <a href="#" className="btn btn-light rounded-pill text-primary py-2 px-4">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="service-item text-center rounded p-4">
                            <div className="service-icon d-inline-block bg-light rounded p-4 mb-4"><i className="fas fa-sitemap fa-5x text-secondary"></i></div>
                            <div className="service-content">
                                <h4 className="mb-4">Promotional Emails</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                </p>
                                <a href="#" className="btn btn-light rounded-pill text-primary py-2 px-4">Read More</a>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
        


        <div className="container-fluid FAQ bg-light overflow-hidden py-5">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                       <div className="accordion" id="accordionExample">
                            <div className="accordion-item border-0 mb-4">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseTOne">
                                        Why did you choose Our Email Services?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body my-2">
                                        <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo impedit, sapiente quis illo quia nulla atque maxime fuga minima ipsa quae cum consequatur, sit, delectus exercitationem odit officiis maiores! Neque, quidem corrupti modi architecto eos saepe incidunt dignissimos rerum.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio hic fuga odio excepturi ducimus sequi at. Doloribus, non aspernatur.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0 mb-4">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Are there any hidden charges? 
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body my-2">
                                        <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo impedit, sapiente quis illo quia nulla atque maxime fuga minima ipsa quae cum consequatur, sit, delectus exercitationem odit officiis maiores! Neque, quidem corrupti modi architecto eos saepe incidunt dignissimos rerum.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio hic fuga odio excepturi ducimus sequi at. Doloribus, non aspernatur.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What are the key challenges of email marketing?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body my-2">
                                        <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo impedit, sapiente quis illo quia nulla atque maxime fuga minima ipsa quae cum consequatur, sit, delectus exercitationem odit officiis maiores! Neque, quidem corrupti modi architecto eos saepe incidunt dignissimos rerum.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio hic fuga odio excepturi ducimus sequi at. Doloribus, non aspernatur.</p>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
                        <div className="FAQ-img RotateMoveRight rounded">
                            <img src="img/about-1.png" className="img-fluid w-100" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div className="container-fluid blog py-5">
            <div className="container py-5">
                {/* <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 900px;"> */}
                    <h4 className="text-primary">Our Blog</h4>
                    <h1 className="display-5 mb-4">Join Us For New Blog</h1>
                    <p className="mb-0">Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae maxime. Vel animi eveniet doloremque reiciendis soluta iste provident non rerum illum perferendis earum est architecto dolores vitae quia vero quod incidunt culpa corporis, porro doloribus. Voluptates nemo doloremque cum.
                    </p>
                {/* </div> */}
                <div className="row g-4 justify-content-center mt-5">
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-1.png" className="img-fluid w-100" alt=""/>
                                <div className="blog-info">
                                    <span><i className="fa fa-clock"></i> Dec 01.2024</span>
                                    <div className="d-flex">
                                        <span className="me-3"> 3 <i className="fa fa-heart"></i></span>
                                        <a href="#" className="text-white">0 <i className="fa fa-comment"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-content text-dark border p-4 ">
                                <h5 className="mb-4">Dolor, sit amet consectetur adipisicing</h5>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip.</p>
                                <a className="btn btn-light rounded-pill py-2 px-4" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-2.png" className="img-fluid w-100" alt=""/>
                                <div className="blog-info">
                                    <span><i className="fa fa-clock"></i> Dec 01.2024</span>
                                    <div className="d-flex">
                                        <span className="me-3"> 3 <i className="fa fa-heart"></i></span>
                                        <a href="#" className="text-white">0 <i className="fa fa-comment"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-content text-dark border p-4 ">
                                <h5 className="mb-4">Dolor, sit amet consectetur adipisicing</h5>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip.</p>
                                <a className="btn btn-light rounded-pill py-2 px-4" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-3.png" className="img-fluid w-100" alt=""/>
                                <div className="blog-info">
                                    <span><i className="fa fa-clock"></i> Dec 01.2024</span>
                                    <div className="d-flex">
                                        <span className="me-3"> 3 <i className="fa fa-heart"></i></span>
                                        <a href="#" className="text-white">0 <i className="fa fa-comment"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-content text-dark border p-4 ">
                                <h5 className="mb-4">Dolor, sit amet consectetur adipisicing</h5>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip.</p>
                                <a className="btn btn-light rounded-pill py-2 px-4" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-4.png" className="img-fluid w-100" alt=""/>
                                <div className="blog-info">
                                    <span><i className="fa fa-clock"></i> Dec 01.2024</span>
                                    <div className="d-flex">
                                        <span className="me-3"> 3 <i className="fa fa-heart"></i></span>
                                        <a href="#" className="text-white">0 <i className="fa fa-comment"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-content text-dark border p-4 ">
                                <h5 className="mb-4">Dolor, sit amet consectetur adipisicing</h5>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip.</p>
                                <a className="btn btn-light rounded-pill py-2 px-4" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>








        {/* footer  */}


        <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-dark mb-4">Company</h4>
                            <a href=""> Why Mailler?</a>
                            <a href=""> Our Features</a>
                            <a href=""> Our Portfolio</a>
                            <a href=""> About Us</a>
                            <a href=""> Our Blog & News</a>
                            <a href=""> Get In Touch</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="mb-4 text-dark">Quick Links</h4>
                            <a href=""> About Us</a>
                            <a href=""> Contact Us</a>
                            <a href=""> Privacy Policy</a>
                            <a href=""> Terms & Conditions</a>
                            <a href=""> Our Blog & News</a>
                            <a href=""> Our Team</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="mb-4 text-dark">Services</h4>
                            <a href=""> All Services</a>
                            <a href=""> Promotional Emails</a>
                            <a href=""> Product Updates</a>
                            <a href=""> Email Marketing</a>
                            <a href=""> Acquistion Emails</a>
                            <a href=""> Retention Emails</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="mb-4 text-dark">Contact Info</h4>
                            <a href=""><i className="fa fa-map-marker-alt me-2"></i> 123 Street, New York, USA</a>
                            <a href=""><i className="fas fa-envelope me-2"></i> info@example.com</a>
                            <a href=""><i className="fas fa-phone me-2"></i> +012 345 67890</a>
                            <a href="" className="mb-3"><i className="fas fa-print me-2"></i> +012 345 67890</a>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-share fa-2x text-secondary me-2"></i>
                                <a className="btn-square btn btn-primary rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn-square btn btn-primary rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn-square btn btn-primary rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn-square btn btn-primary rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    {/* copyright claim */}
    <div className="container-fluid copyright py-4">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-md-0">
                        <span className="text-white"><a href="#"><i className="fas fa-copyright text-light me-2"></i>Your Site Name</a>, All right reserved.</span>
                    </div>
                    <div className="col-md-6 text-center text-md-end text-white">
                       
                        Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a className="border-bottom" href="https://themewagon.com">ThemeWagon</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
