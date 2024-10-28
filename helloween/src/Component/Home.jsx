import React from 'react'
import './Home.css'

export default function Home() {
    document.addEventListener("DOMContentLoaded", function() {
  
        let addToCartButtons = document.querySelectorAll(".button-sec2");
    
        addToCartButtons.forEach(button => {
            button.addEventListener("click", function() {
      
                let product = {
                    name: button.parentNode.querySelector(".woocommerce-loop-product__title").textContent,
                    price: button.parentNode.querySelector(".price-sec2").textContent
                };
    
                addToCart(product);
    
                alert("Item added to cart!");
            });
        });
    
        function addToCart(product) {
    
            let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    
            cartItems.push(product);
    
            localStorage.setItem("cart", JSON.stringify(cartItems));
        }
    });
  return (
    <div style={{marginLeft:"10%"}} >
      <nav className="navbar navbar-expand-lg">
        <div className="container">
            <div className="logo">
                <a className="navbar-brand" href="#"><img width="32" height="32"
                        src="https://websitedemos.net/halloween-shop-04/wp-content/uploads/sites/1398/2023/10/logo-icon.svg"
                        className="custom-logo" alt="Halloween Shop" decoding="async"/>&nbsp;&nbsp; HALLOWEEN SHOP</a>
            </div>
            <div className="nav d-md-none d-lg-block">
                <ul>
                    <li>
                        <a href="">HOME</a>
                    </li>
                    <li>
                        <a href="">SHOP</a>
                    </li>
                    <li>
                        <a href="">ABOUT</a>
                    </li>
                    <li>
                        <a href="">CONTACT</a>
                    </li>
                </ul>
            </div>
            <div className="shop d-lg-none">
                <button className="btn" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                    <i className="fa-solid fa-bars" style={{color: "wheat"}}></i>
                </button>

                <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1"
                    id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Menubar</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul>
                            <li>
                                <a href="" style={{color: "black"}}>HOME</a>
                            </li>
                            <li>
                                <a href="" style={{color: "black"}}>SHOP</a>
                            </li>
                            <li>
                                <a href="" style={{color: "black"}}>ABOUT</a>
                            </li>
                            <li>
                                <a href="" style={{color: "black"}}>CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <div className="container-fluid d-flex justify-content-center align-content-center">
        <div className="hero">
            <div className="container hero-text">
                <div className="row">
                    <div className="col-12">
                        <span className="collection">NEW COLLECTION</span><br/><br/>
                        <span className="helo-collection">Halloween </span>
                        <span className="helo-collection">Decorations</span><br/>
                        <p className="hero-para">Whether you prefer the charm of classic Halloween decor or the thrill of
                            modern and innovative designs, <br/>these decorations invite you to join in the celebration of all
                            things eerie, enigmatic, and enchanting.
                        </p><br/>
                        <button className="button1">SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br/><br/>
    <div className="container-fluid sec-2">
        <span className="most">
            MOST DELICIOUS
        </span><br/>

        <span className="helo-collection-1"> Candies & Cookies </span>

        <span className="dash">________</span>
        <div className="container sec-2mini">
            <div className="row">
                <div className="col-12 col-lg-4 col-md-">
                    <div className="img-sec2-1"></div>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <h2 className="woocommerce-loop-product__title">Boo-tiful Buttercookies</h2>
                    <del style={{fontWeight: 600, color: "#e35701"}}>$29.00 </del>
                    <span className="price-sec2">$21.00</span>
                    <br/>
                    <button className="button-sec2">ADD TO CART</button>
                </div>
                <div className="col-12 col-lg-4 col-md-6">
                    <div className="img-sec2-2"></div>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <h2 className="woocommerce-loop-product__title">Ghostly Gingersnaps</h2>
                    <span className="price-sec2">$27.00</span>
                    <br/>
                    <button className="button-sec2">ADD TO CART</button>
                </div>
                <div className="col-12 col-lg-4 col-md-6">
                    <div className="img-sec2-3"></div>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <h2 className="woocommerce-loop-product__title">Zombie Zest Cookies</h2>
                    <span className="price-sec2">$35.00</span>
                    <br/>
                    <button className="button-sec2">ADD TO CART</button>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid sec-2">
        <span className="most">
            SWEETS
        </span><br/>

        <span className="helo-collection-1"> Halloween Candy Packs</span>

        <span className="dash">________</span>
        <div className="container sec-2mini">
            <div className="row">
                <div className="col-12 col-lg-6 ppp">
                    <div className="tricks">
                        <span className="creepi">a sprinkle of magic to every trick-or-treat adventure</span><br/>
                        <p className="sec3-para">From the classic to the creatively creepy, Halloween candies remind us that
                            the true essence of this holiday lies in the delightful experience of indulging in sweet
                            surprises with friends and family.</p>
                        <br/>
                        <div className="sec3-button">
                            <button className="button-sec2">SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 sec-smile">
                    <div className="sec3-image"></div>
                </div>
            </div>
        </div>
    </div>

    <br/>
    <div className="container-fluid sec-2">
        <span className="most">
            SCARRY
        </span><br/>

        <span className="helo-collection-1">Decorations</span>

        <span className="dash">________</span>
        <div className="container sec-3mini">
            <div className="row">
                <div className="col-12 col-lg-4 col-md-6">
                    <div className="img-sec3-1"></div>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <h2 className="woocommerce-loop-product__title">Candle Support</h2>
                    <span className="price-sec2">$35.00</span>
                    <br/>
                    <button className="button-sec2">ADD TO CART</button>
                </div>
                <div className="col-12 col-lg-4 col-md-">
                    <div className="img-sec3-2"></div>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <h2 className="woocommerce-loop-product__title">Ceramic Pumpkin</h2>
                    <del style={{fontWeight: 600, color: "#e35701"}}>$99.00 </del>
                    <span className="price-sec2">$59.00</span>
                    <br/>
                    <button className="button-sec2">ADD TO CART</button>
                </div>
                <div className="col-12 col-lg-4 col-md-6">
                    <div className="img-sec3-3"></div>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <h2 className="woocommerce-loop-product__title">Paper Pumpkin</h2>
                    <span className="price-sec2">$17.00</span>
                    <br/>
                    <button className="button-sec2">ADD TO CART</button>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid sec-4-bimage">
        <div className="container sec-4">
            <div className="row">
                <div className="col-6">
                    <div className="tricks">
                        <span className="creepi-sec4">Ceramic Halloween <br/> Decorations</span><br/>
                        <p className="sec4-para">From the classic to the creatively creepy, Halloween candies remind us that
                            the true essence of this holiday lies in the delightful experience of indulging in sweet
                            surprises with friends and family.</p>
                        <br/>
                        <div className="sec3-button">
                            <button className="button-sec2">SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid sec-5">
        <span className="most">
            UNFORGETTABLE
        </span><br/>

        <span className="helo-collection-1">Costumes</span>

        <span className="dash">________</span>
        <div className="container sec-3mini">
            <div className="row">
                <div className="col-12 col-lg-4 col-md-6">
                    <div className="img-sec5-1"></div>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <h2 className="woocommerce-loop-product__title">Candle Support</h2>
                    <span className="price-sec2">$35.00</span>
                    <br/>
                    <button className="button-sec2">ADD TO CART</button>
                </div>
                <div className="col-12 col-lg-4 col-md-">
                    <div className="img-sec5-2"></div>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <h2 className="woocommerce-loop-product__title">Ceramic Pumpkin</h2>
                    <del style={{fontWeight: 600, color: "#e35701"}}>$99.00 </del>
                    <span className="price-sec2">$59.00</span>
                    <br/>
                    <button className="button-sec2">ADD TO CART</button>
                </div>
                <div className="col-12 col-lg-4 col-md-6">
                    <div className="img-sec5-3"></div>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <h2 className="woocommerce-loop-product__title">Paper Pumpkin</h2>
                    <span className="price-sec2">$17.00</span>
                    <br/>
                    <button className="button-sec2">ADD TO CART</button>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid full-sec6">
        <div className="container sec-6">
            <span className="most-sec6">
                TESTIMONIALS
            </span><br/>
            <span className="full-star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </span>

            <span className="helo-sec6">
                "Every item I purchased, from a wickedly realistic witch's hat to eerie decorations, exceeded my
                expectations. My Halloween celebrations have reached a whole new level of spooky fun. I'm already
                looking forward to next year's shopping spree!"
            </span>
            <div className="text-center">
                <img className="raoud"
                    src="https://websitedemos.net/halloween-shop-04/wp-content/uploads/sites/1398/2023/09/avatar.jpg"
                    alt=""/>
                <div className="elementor-testimonial-name">Jane Warren</div>
            </div>
        </div>
    </div>

    <div className="container sec-7">
        <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
                <span className="icon-sec7">
                    <i className="fa-solid fa-truck"></i>
                </span><br/>
                <h2 className="woocommerce-loop-product__title">Free Shipping</h2><br/>
                <p className="sec4-para">Enjoy the treat of free shipping on all your <br/> Halloween must-haves</p>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
                <span className="icon-sec7">
                    <i className="fa-solid fa-lock"></i>
                </span><br/>
                <h2 className="woocommerce-loop-product__title">Secure Payments</h2><br/>
                <p className="sec4-para">Shop with confidence knowing that your <br/> payments are securely processed for a
                    <br/> worry-free Halloween experience
                </p>
                <br/><br/>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
                <span className="icon-sec7">
                    <i className="fa-solid fa-map-pin"></i>
                </span><br/>
                <h2 className="woocommerce-loop-product__title">Order Tracking</h2><br/>
                <p className="sec4-para">Stay in the know with real-time order <br/> tracking to ensure your Halloween
                    treasures <br/> arrive right on time</p>
            </div>
        </div>
    </div>

    <div className="container sec-8">
        <div className="foot-logo">
            <a className="navbar-brand" href="#"><img width="32" height="32"
                    src="https://websitedemos.net/halloween-shop-04/wp-content/uploads/sites/1398/2023/10/logo-icon.svg"
                    className="custom-logo" alt="Halloween Shop" decoding="async"/>&nbsp;&nbsp; HALLOWEEN SHOP</a>
        </div>

        <div className="foot-navbar">
            <a href="">HOME</a>
            <a href="">SHOP</a>
            <a href="">ABOUT</a>
            <a href="">CONTACT</a>
        </div>

        <div className="foot_social">
            <span className="fu-star">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
            </span>
        </div>
    </div>

    <div className="container sec-9">
        <div className="text-center">
            <p className="sec9-para d-flex justify-content-center">Copyright © 2024 Halloween Shop | Powered by Halloween
                Shop</p>
        </div>
    </div>

    </div>
  )
}
