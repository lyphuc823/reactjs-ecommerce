import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="body-wrapper">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="header-top-left">
                  <ul className="phone-wrap">
                    <li>
                      <span>Telephone Enquiry:</span>
                      <Link to="/">(+123) 123 321 345</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-9 col-md-8">
                <div className="header-top-right">
                  <ul className="ht-menu">
                    <li>
                      <div className="ht-setting-trigger">
                        <span>Setting</span>
                      </div>
                      <div className="setting ht-setting">
                        <ul className="ht-setting-list">
                          <li>
                            <Link to="/login-register">My Account</Link>
                          </li>
                          <li>
                            <Link to="/checkout">Checkout</Link>
                          </li>
                          <li>
                            <Link to="/login-register">Sign In</Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <span className="currency-selector-wrapper">
                        Currency :
                      </span>
                      <div className="ht-currency-trigger">
                        <span>USD $</span>
                      </div>
                      <div className="currency ht-currency">
                        <ul className="ht-setting-list">
                          <li>
                            <Link to="/">EUR €</Link>
                          </li>
                          <li className="active">
                            <Link to="/">USD $</Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <span className="language-selector-wrapper">
                        Language :
                      </span>
                      <div className="ht-language-trigger">
                        <span>English</span>
                      </div>
                      <div className="language ht-language">
                        <ul className="ht-setting-list">
                          <li className="active">
                            <Link to="/">
                              <img
                                src="assets/images/menu/flag-icon/1.jpg"
                                alt=""
                              />
                              English
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <img
                                src="assets/images/menu/flag-icon/2.jpg"
                                alt=""
                              />
                              Français
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="logo pb-sm-30 pb-xs-30">
                  <Link to="/">
                    <img src="assets/images/menu/logo/1.jpg" alt="" />
                  </Link>
                </div>
              </div>

              <div className="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
                <form action="/" className="hm-searchbox">
                  <select className="nice-select select-search-category">
                    <option value="0">All</option>
                    <option value="10">Laptops</option>
                    <option value="17">- - Prime Video</option>
                    <option value="20">- - - - All Videos</option>
                    <option value="21">- - - - Blouses</option>
                    <option value="22">- - - - Evening Dresses</option>
                    <option value="23">- - - - Summer Dresses</option>
                    <option value="24">- - - - T-shirts</option>
                    <option value="25">- - - - Rent or Buy</option>
                    <option value="26">- - - - Your Watchlist</option>
                    <option value="27">- - - - Watch Anywhere</option>
                    <option value="28">- - - - Getting Started</option>
                    <option value="18">- - - - Computers</option>
                    <option value="29">- - - - More to Explore</option>
                    <option value="30">- - - - TV &amp; Video</option>
                    <option value="31">- - - - Audio &amp; Theater</option>
                    <option value="32">- - - - Camera, Photo </option>
                    <option value="33">- - - - Cell Phones</option>
                    <option value="34">- - - - Headphones</option>
                    <option value="35">- - - - Video Games</option>
                    <option value="36">- - - - Wireless Speakers</option>
                    <option value="19">- - - - Electronics</option>
                    <option value="37">- - - - Amazon Home</option>
                    <option value="38">- - - - Kitchen &amp; Dining</option>
                    <option value="39">- - - - Furniture</option>
                    <option value="40">- - - - Bed &amp; Bath</option>
                    <option value="41">- - - - Appliances</option>
                    <option value="11">TV &amp; Audio</option>
                    <option value="42">- - Chamcham</option>
                    <option value="45">- - - - Office</option>
                    <option value="47">- - - - Gaming</option>
                    <option value="48">- - - - Chromebook</option>
                    <option value="49">- - - - Refurbished</option>
                    <option value="50">- - - - Touchscreen</option>
                    <option value="51">- - - - Ultrabooks</option>
                    <option value="52">- - - - Blouses</option>
                    <option value="43">- - Meito</option>
                    <option value="53">- - - - Hard Drives</option>
                    <option value="54">- - - - Graphic Cards</option>
                    <option value="55">- - - - Processors (CPU)</option>
                    <option value="56">- - - - Memory</option>
                    <option value="57">- - - - Motherboards</option>
                    <option value="58">- - - - Fans &amp; Cooling</option>
                    <option value="59">- - - - CD/DVD Drives</option>
                    <option value="44">- - Sony Bravia</option>
                    <option value="60">- - - - Sound Cards</option>
                    <option value="61">- - - - Cases &amp; Towers</option>
                    <option value="62">- - - - Casual Dresses</option>
                    <option value="63">- - - - Evening Dresses</option>
                    <option value="64">- - - - T-shirts</option>
                    <option value="65">- - - - Tops</option>
                    <option value="12">Smartphone</option>
                    <option value="66">- - Camera Accessories</option>
                    <option value="68">- - - - Octa Core</option>
                    <option value="69">- - - - Quad Core</option>
                    <option value="70">- - - - Dual Core</option>
                    <option value="71">- - - - 7.0 Screen</option>
                    <option value="72">- - - - 9.0 Screen</option>
                    <option value="73">- - - - Bags &amp; Cases</option>
                    <option value="67">- - XailStation</option>
                    <option value="74">- - - - Batteries</option>
                    <option value="75">- - - - Microphones</option>
                    <option value="76">- - - - Stabilizers</option>
                    <option value="77">- - - - Video Tapes</option>
                    <option value="78">- - - - Memory Card Readers</option>
                    <option value="79">- - - - Tripods</option>
                    <option value="13">Cameras</option>
                    <option value="14">headphone</option>
                    <option value="15">Smartwatch</option>
                    <option value="16">Accessories</option>
                  </select>
                  <input type="text" placeholder="Enter your search key ..." />
                  <button className="li-btn" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>

                <div className="header-middle-right">
                  <ul className="hm-menu">
                    <li className="hm-wishlist">
                      <Link to="/">
                        <span className="cart-item-count wishlist-item-count">
                          0
                        </span>
                        <i className="fa fa-heart-o"></i>
                      </Link>
                    </li>

                    <li className="hm-minicart">
                      <div className="hm-minicart-trigger">
                        <span className="item-icon"></span>
                        <span className="item-text">
                          £160
                          <span className="cart-item-count">2</span>
                        </span>
                      </div>
                      <span></span>
                      <div className="minicart">
                        <ul className="minicart-product-list">
                          <li>
                            <Link to="/single-product"
                              
                              className="minicart-product-image"
                            >
                              <img
                                src="assets/images/product/small-size/3.jpg"
                                alt="cart products"
                              />
                            </Link>
                            <div className="minicart-product-details">
                              <h6>
                                <Link to="/single-product">
                                  Aenean eu tristique
                                </Link>
                              </h6>
                              <span>£80 x 1</span>
                            </div>
                            <button className="close">
                              <i className="fa fa-close"></i>
                            </button>
                          </li>
                          <li>
                            <Link to="/single-product"
                              
                              className="minicart-product-image"
                            >
                              <img
                                src="assets/images/product/small-size/4.jpg"
                                alt="cart products"
                              />
                            </Link>
                            <div className="minicart-product-details">
                              <h6>
                                <Link to="/single-product">
                                  Aenean eu tristique
                                </Link>
                              </h6>
                              <span>£80 x 1</span>
                            </div>
                            <button className="close">
                              <i className="fa fa-close"></i>
                            </button>
                          </li>
                        </ul>
                        <p className="minicart-total">
                          SUBTOTAL: <span>£160</span>
                        </p>
                        <div className="minicart-button">
                          <Link to="/checkout"
                            
                            className="li-button li-button-dark li-button-fullwidth li-button-sm"
                          >
                            <span>View Full Cart</span>
                          </Link>
                          <Link to="/checkout"
                            
                            className="li-button li-button-fullwidth li-button-sm"
                          >
                            <span>Checkout</span>
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom header-sticky d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hb-menu hb-menu-2 d-xl-block">
                  <nav>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/shop-left-sidebar">Shop</Link>
                      </li>
                      <li className="megamenu-static-holder">
                        <Link to="/">Pages</Link>
                        <ul className="megamenu hb-megamenu">
                          <li>
                            <Link to="/">Other Pages</Link>
                            <ul>
                              <li>
                                <Link to="/login-register">My Account</Link>
                              </li>
                              <li>
                                <Link to="/checkout">Checkout</Link>
                              </li>
                              <li>
                                <Link to="/shopping-cart">Shopping Cart</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/">Other Pages 2</Link>
                            <ul>
                              <li>
                                <Link to="/contact">Contact</Link>
                              </li>
                              <li>
                                <Link to="/about-us">About Us</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>

                      <li className="hb-info f-right p-0 d-sm-none d-lg-block">
                        <span>6688 London, Greater London BAS 23JK, UK</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu-area d-lg-none d-xl-none col-12">
          <div className="container">
            <div className="row">
              <div className="mobile-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
