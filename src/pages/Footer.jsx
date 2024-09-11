import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <div className="footer">
    
    <div className="footer-static-top">
        <div className="container">
            
            <div className="footer-shipping pt-60 pb-55 pb-xs-25">
                <div className="row">
                    
                    <div className="col-lg-3 col-md-6 col-sm-6 pb-sm-55 pb-xs-55">
                        <div className="li-shipping-inner-box">
                            <div className="shipping-icon">
                                <img src="assets/images/shipping-icon/1.png" alt="Shipping Icon"/>
                            </div>
                            <div className="shipping-text">
                                <h2>Free Delivery</h2>
                                <p>And free returns. See checkout for delivery dates.</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="col-lg-3 col-md-6 col-sm-6 pb-sm-55 pb-xs-55">
                        <div className="li-shipping-inner-box">
                            <div className="shipping-icon">
                                <img src="assets/images/shipping-icon/2.png" alt="Shipping Icon"/>
                            </div>
                            <div className="shipping-text">
                                <h2>Safe Payment</h2>
                                <p>Pay with the world&#39;s most popular and secure payment methods.</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="col-lg-3 col-md-6 col-sm-6 pb-xs-30">
                        <div className="li-shipping-inner-box">
                            <div className="shipping-icon">
                                <img src="assets/images/shipping-icon/3.png" alt="Shipping Icon"/>
                            </div>
                            <div className="shipping-text">
                                <h2>Shop with Confidence</h2>
                                <p>Our Buyer Protection covers your purchasefrom click to delivery.</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="col-lg-3 col-md-6 col-sm-6 pb-xs-30">
                        <div className="li-shipping-inner-box">
                            <div className="shipping-icon">
                                <img src="assets/images/shipping-icon/4.png" alt="Shipping Icon"/>
                            </div>
                            <div className="shipping-text">
                                <h2>24/7 Help Center</h2>
                                <p>Have a question? Call a Specialist or chat online.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
    
    
    <div className="footer-static-middle">
        <div className="container">
            <div className="footer-logo-wrap pt-50 pb-35">
                <div className="row">
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-logo">
                            <img src="assets/images/menu/logo/1.jpg" alt="Footer Logo"/>
                            <p className="info">
                                We are a team of designers and developers that create high quality HTML Template & Woocommerce, Shopify Theme.
                            </p>
                        </div>
                        <ul className="des">
                            <li>
                                <span>Address: </span>
                                6688Princess Road, London, Greater London BAS 23JK, UK
                            </li>
                            <li>
                                <span>Phone: </span>
                                <Link to="#">(+123) 123 321 345</Link>
                            </li>
                            <li>
                                <span>Email: </span>
                                <Link to="/mailto://info@yourdomain.com">info@yourdomain.com</Link>
                            </li>
                        </ul>
                    </div>
                    
                    
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer-block">
                            <h3 className="footer-block-title">Product</h3>
                            <ul>
                                <li><Link to="#">Prices drop</Link></li>
                                <li><Link to="#">New products</Link></li>
                                <li><Link to="#">Best sales</Link></li>
                                <li><Link to="#">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer-block">
                            <h3 className="footer-block-title">Our company</h3>
                            <ul>
                                <li><Link to="#">Delivery</Link></li>
                                <li><Link to="#">Legal Notice</Link></li>
                                <li><Link to="#">About us</Link></li>
                                <li><Link to="#">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    
                    <div className="col-lg-4">
                        <div className="footer-block">
                            <h3 className="footer-block-title">Follow Us</h3>
                            <ul className="social-link">
                                <li className="twitter">
                                    <Link to="/https://twitter.com/" data-toggle="tooltip" target="_blank" title="Twitter">
                                        <i className="fa fa-twitter"></i>
                                    </Link>
                                </li>
                                <li className="rss">
                                    <Link to="/https://rss.com/" data-toggle="tooltip" target="_blank" title="RSS">
                                        <i className="fa fa-rss"></i>
                                    </Link>
                                </li>
                                <li className="google-plus">
                                    <Link to="/https://www.plus.google.com/discover" data-toggle="tooltip" target="_blank" title="Google +">
                                        <i className="fa fa-google-plus"></i>
                                    </Link>
                                </li>
                                <li className="facebook">
                                    <Link to="/https://www.facebook.com/" data-toggle="tooltip" target="_blank" title="Facebook">
                                        <i className="fa fa-facebook"></i>
                                    </Link>
                                </li>
                                <li className="youtube">
                                    <Link to="/https://www.youtube.com/" data-toggle="tooltip" target="_blank" title="Youtube">
                                        <i className="fa fa-youtube"></i>
                                    </Link>
                                </li>
                                <li className="instagram">
                                    <Link to="/https://www.instagram.com/" data-toggle="tooltip" target="_blank" title="Instagram">
                                        <i className="fa fa-instagram"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="footer-newsletter">
                            <h4>Sign up to newsletter</h4>
                            <form action="#" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="footer-subscribe-form validate" target="_blank" noValidate>
                                <div id="mc_embed_signup_scroll">
                                    <div id="mc-form" className="mc-form subscribe-form form-group" >
                                        <input id="mc-email" type="email" autoComplete="off" placeholder="Enter your email" />
                                        <button  className="btn" id="mc-submit">Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
    
    <div className="footer-static-bottom pt-55 pb-55">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                   
                    <div className="footer-links">
                        <ul>
                            <li><Link to="#">Online Shopping</Link></li>
                            <li><Link to="#">Promotions</Link></li>
                            <li><Link to="#">My Orders</Link></li>
                            <li><Link to="#">Help</Link></li>
                            <li><Link to="#">Customer Service</Link></li>
                            <li><Link to="#">Support</Link></li>
                            <li><Link to="#">Most Populars</Link></li>
                            <li><Link to="#">New Arrivals</Link></li>
                            <li><Link to="#">Special Products</Link></li>
                            <li><Link to="#">Manufacturers</Link></li>
                            <li><Link to="#">Our Stores</Link></li>
                            <li><Link to="#">Shipping</Link></li>
                            <li><Link to="#">Payments</Link></li>
                            <li><Link to="#">Warantee</Link></li>
                            <li><Link to="#">Refunds</Link></li>
                            <li><Link to="#">Checkout</Link></li>
                            <li><Link to="#">Discount</Link></li>
                            <li><Link to="#">Refunds</Link></li>
                            <li><Link to="#">Policy Shipping</Link></li>
                        </ul>
                    </div>
                    
                    
                    <div className="copyright text-center">
                        <Link to="#">
                            <img src="assets/images/payment/1.png" alt=""/>
                        </Link>
                    </div>
                    
                    
                    <div className="copyright text-center pt-25">
                        <span><Link target="_blank" to="https://www.templateshub.net">Templates Hub</Link></span>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
</div>

        </div>
    );
}

export default Footer;