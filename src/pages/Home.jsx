import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div className="slider-with-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="category-menu">
                <div className="category-heading">
                  <h2 className="categories-toggle">
                    <span>categories</span>
                  </h2>
                </div>
                <div className="category-menu-list" id="cate-toggle">
                  <ul>
                    <li>
                      <Link to="#"
                        // th:each="categoryt8 : ${categoriesTop8}"
                        // th:text="${categoryt8.categoryName}"
                      ></Link>
                    </li>
                    <li className="rx-child">
                      <Link to="#"
      
                        // th:each="categoryf9 : ${categoriesFrom9}"
                        // th:text="${categoryf9.categoryName}"
                      ></Link>
                    </li>
                    <li className="rx-parent">
                      <Link to="#" className="rx-default">More Categories</Link>
                      <Link to="#" className="rx-show">Less Categories</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="slider-area pt-sm-30 pt-xs-30">
                <div className="slider-active owl-carousel">
                  <div className="single-slide align-center-left animation-style-02 bg-4">
                    <div className="slider-progress"></div>
                    <div className="slider-content">
                      <h5>
                        Sale Offer <span>-20% Off</span> This Week
                      </h5>
                      <h2>Chamcham Galaxy S9 | S9+</h2>
                      <h3>
                        Starting at <span>$589.00</span>
                      </h3>
                      <div className="default-btn slide-btn">
                        <Link to="/shop-left-sidebar" className="links" >
                          Shopping Now
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="single-slide align-center-left animation-style-01 bg-5">
                    <div className="slider-progress"></div>
                    <div className="slider-content">
                      <h5>
                        Sale Offer <span>Black Friday</span> This Week
                      </h5>
                      <h2>Work Desk Surface Studio 2018</h2>
                      <h3>
                        Starting at <span>$1599.00</span>
                      </h3>
                      <div className="default-btn slide-btn">
                        <Link to="/shop-left-sidebar" className="links" >
                          Shopping Now
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="single-slide align-center-left animation-style-02 bg-6">
                    <div className="slider-progress"></div>
                    <div className="slider-content">
                      <h5>
                        Sale Offer <span>-10% Off</span> This Week
                      </h5>
                      <h2>Phantom 4 Pro+ Obsidian</h2>
                      <h3>
                        Starting at <span>$809.00</span>
                      </h3>
                      <div className="default-btn slide-btn">
                        <Link to="/shop-left-sidebar" className="links" >
                          Shopping Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="li-static-banner pt-20 pt-sm-30 pt-xs-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="single-banner pb-xs-30">
                <Link to="#">
                  <img
                    alt="Li's Static Banner"
                    src="assets/images/banner/1_3.jpg"
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <div className="single-banner pb-xs-30">
                <Link to="#">
                  <img
                    alt="Li's Static Banner"
                    src="assets/images/banner/1_4.jpg"
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <div className="single-banner">
                <Link to="#">
                  <img
                    alt="Li's Static Banner"
                    src="assets/images/banner/1_5.jpg"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="product-area li-laptop-product li-laptop-product-2 pb-45">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="li-section-title">
                <h2>
                  <span>Laptops</span>
                </h2>
                <ul className="li-sub-category-list">
                  <li className="active">
                    <Link to="/shop-left-sidebar">Prime Video</Link>
                  </li>
                  <li>
                    <Link to="/shop-left-sidebar">Computers</Link>
                  </li>
                  <li>
                    <Link to="/shop-left-sidebar">Electronics</Link>
                  </li>
                </ul>
              </div>
              <div className="li-banner-2 pt-15">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="single-banner">
                      <Link to="#">
                        <img
                          alt="Li's Static Banner"
                          src="assets/images/banner/2_1.jpg"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="single-banner pt-xs-30">
                      <Link to="#">
                        <img
                          alt="Li's Static Banner"
                          src="assets/images/banner/2_2.jpg"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="product-active owl-carousel">
                  <div
                    className="col-lg-12"
                    // th:each="tempProduct : ${products}"
                  >
                    <div className="single-product-wrap">
                      <div className="product-image">
                        <Link to="/single-product">
                          <img
                            alt="Li's Product Image"
                            src="assets/images/product/large-size/1.jpg"
                          />
                        </Link>
                        <span className="sticker">New</span>
                      </div>
                      <div className="product_desc">
                        <div className="product_desc_info">
                          <div className="product-review">
                            <h5 className="manufacturer">
                              <Link to="/shop-left-sidebar">
                                Graphic Corner
                              </Link>
                            </h5>
                            <div className="rating-box">
                              <ul className="rating">
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                                <li className="no-star">
                                  <i className="fa fa-star-o"></i>
                                </li>
                                <li className="no-star">
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h4>
                            <Link to="/single-product"
                              className="product_name"
                              
                            //   th:text="${tempProduct.productName}"
                            ></Link>
                          </h4>
                          <div className="price-box">
                            <span className="new-price">$46.80</span>
                          </div>
                        </div>
                        <div className="add-actions">
                          <ul className="add-actions-link">
                            <li className="add-cart active">
                              <Link to="#">Add to cart</Link>
                            </li>
                            <li>
                              <Link to="/wishlist" className="links-details" >
                                <i className="fa fa-heart-o"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="#"
                                className="quick-view-btn"
                                data-target="#exampleModalCenter"
                                data-toggle="modal"
                                
                                title="quick view"
                              >
                                <i className="fa fa-eye"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-area li-laptop-product li-tv-audio-product-2 pb-45">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="li-section-title">
                <h2>
                  <span>TV &amp; Audio</span>
                </h2>
                <ul className="li-sub-category-list">
                  <li className="active">
                    <Link to="/shop-left-sidebar">Chamcham</Link>
                  </li>
                  <li>
                    <Link to="/shop-left-sidebar">Meito</Link>
                  </li>
                  <li>
                    <Link to="/shop-left-sidebar">Sony Bravia</Link>
                  </li>
                </ul>
              </div>
              <div className="li-banner-2 pt-15">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="single-banner">
                      <Link to="#">
                        <img
                          alt="Li's Static Banner"
                          src="assets/images/banner/2_5.jpg"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="single-banner pt-xs-30">
                      <Link to="#">
                        <img
                          alt="Li's Static Banner"
                          src="assets/images/banner/2_6.jpg"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="product-active owl-carousel">
                  <div
                    className="col-lg-12"
                    // th:each="tempProduct : ${products}"
                  >
                    <div className="single-product-wrap">
                      <div className="product-image">
                        <Link to="/single-product">
                          <img
                            alt="Li's Product Image"
                            src="assets/images/product/large-size/1.jpg"
                          />
                        </Link>
                        <span className="sticker">New</span>
                      </div>
                      <div className="product_desc">
                        <div className="product_desc_info">
                          <div className="product-review">
                            <h5 className="manufacturer">
                              <Link to="/shop-left-sidebar">
                                Graphic Corner
                              </Link>
                            </h5>
                            <div className="rating-box">
                              <ul className="rating">
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                                <li className="no-star">
                                  <i className="fa fa-star-o"></i>
                                </li>
                                <li className="no-star">
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h4>
                            <Link to="/single-product"
                              className="product_name"
                              
                            //   th:text="${tempProduct.productName}"
                            ></Link>
                          </h4>
                          <div className="price-box">
                            <span className="new-price">$46.80</span>
                          </div>
                        </div>
                        <div className="add-actions">
                          <ul className="add-actions-link">
                            <li className="add-cart active">
                              <Link to="#">Add to cart</Link>
                            </li>
                            <li>
                              <Link to="/wishlist" className="links-details" >
                                <i className="fa fa-heart-o"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="#"
                                className="quick-view-btn"
                                data-target="#exampleModalCenter"
                                data-toggle="modal"
                                
                                title="quick view"
                              >
                                <i className="fa fa-eye"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-area li-laptop-product li-smart-phone-product-2 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="li-section-title">
                <h2>
                  <span>Smartphone</span>
                </h2>
                <ul className="li-sub-category-list">
                  <li className="active">
                    <Link to="/shop-left-sidebar">Camera Accessories</Link>
                  </li>
                  <li>
                    <Link to="/shop-left-sidebar">XailStation</Link>
                  </li>
                </ul>
              </div>
              <div className="li-banner-2 pt-15">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="single-banner">
                      <Link to ="#">
                        <img
                          alt="Li's Static Banner"
                          src="assets/images/banner/2_3.jpg"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="single-banner pt-xs-30">
                      <Link to ="#">
                        <img
                          alt="Li's Static Banner"
                          src="assets/images/banner/2_4.jpg"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="product-active owl-carousel">
                  <div
                    className="col-lg-12"
                    // th:each="tempProduct : ${products}"
                  >
                    <div className="single-product-wrap">
                      <div className="product-image">
                        <Link to="/single-product">
                          <img
                            alt="Li's Product Image"
                            src="assets/images/product/large-size/1.jpg"
                          />
                        </Link>
                        <span className="sticker">New</span>
                      </div>
                      <div className="product_desc">
                        <div className="product_desc_info">
                          <div className="product-review">
                            <h5 className="manufacturer">
                              <Link to="/shop-left-sidebar">
                                Graphic Corner
                              </Link>
                            </h5>
                            <div className="rating-box">
                              <ul className="rating">
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                                <li className="no-star">
                                  <i className="fa fa-star-o"></i>
                                </li>
                                <li className="no-star">
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h4>
                            <Link to="/single-product"
                              className="product_name"
                              
                            //   th:text="${tempProduct.productName}"
                            ></Link>
                          </h4>
                          <div className="price-box">
                            <span className="new-price">$46.80</span>
                          </div>
                        </div>
                        <div className="add-actions">
                          <ul className="add-actions-link">
                            <li className="add-cart active">
                              <Link to ="#">Add to cart</Link>
                            </li>
                            <li>
                              <Link to="/wishlist" className="links-details" >
                                <i className="fa fa-heart-o"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="#"
                                className="quick-view-btn"
                                data-target="#exampleModalCenter"
                                data-toggle="modal"
                                
                                title="quick view"
                              >
                                <i className="fa fa-eye"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="li-static-home">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="li-static-home-image"></div>

              <div className="li-static-home-content">
                <p>
                  Sale Offer<span>-20% Off</span>This Week
                </p>
                <h2>Featured Product</h2>
                <h2>Meito Accessories 2018</h2>
                <p className="schedule">
                  Starting at
                  <span> $1209.00</span>
                </p>
                <div className="default-btn">
                  <Link to="/shop-left-sidebar" className="links" >
                    Shopping Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="product-area li-trending-product li-trending-product-2 pt-60 pb-45">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="li-product-tab li-trending-product-tab">
                <h2>
                  <span>Trendding Products</span>
                </h2>
                <ul className="nav li-product-menu li-trending-product-menu">
                  <li>
                    <Link to="#home1" className="active" data-toggle="tab" >
                      <span>Meito</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#home2" data-toggle="tab" >
                      <span>Camera Accessories</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#home3" data-toggle="tab" >
                      <span>XailStation</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="tab-content li-tab-content li-trending-product-content">
                <div className="tab-pane show fade in active" id="home1">
                  <div className="row">
                    <div className="product-active owl-carousel">
                      <div className="col-lg-12">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <Link to="/single-product">
                              <img
                                alt="Li's Product Image"
                                src="assets/images/product/large-size/2.jpg"
                              />
                            </Link>
                            <span className="sticker">New</span>
                          </div>
                          <div className="product_desc">
                            <div className="product_desc_info">
                              <div className="product-review">
                                <h5 className="manufacturer">
                                  <Link to="/shop-left-sidebar">
                                    Graphic Corner
                                  </Link>
                                </h5>
                                <div className="rating-box">
                                  <ul className="rating">
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <Link to="/single-product"
                                  className="product_name"
                                  
                                >
                                  Accusantium dolorem1
                                </Link>
                              </h4>
                              <div className="price-box">
                                <span className="new-price">$46.80</span>
                              </div>
                            </div>
                            <div className="add-actions">
                              <ul className="add-actions-link">
                                <li className="add-cart active">
                                  <Link to="#">Add to cart</Link>
                                </li>
                                <li>
                                  <Link to="/wishlist"
                                    className="links-details"
                                    
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#"
                                    className="quick-view-btn"
                                    data-target="#exampleModalCenter"
                                    data-toggle="modal"
                                    
                                    title="quick view"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <Link to="/single-product">
                              <img
                                alt="Li's Product Image"
                                src="assets/images/product/large-size/4.jpg"
                              />
                            </Link>
                            <span className="sticker">New</span>
                          </div>
                          <div className="product_desc">
                            <div className="product_desc_info">
                              <div className="product-review">
                                <h5 className="manufacturer">
                                  <Link to="/shop-left-sidebar">
                                    Studio Design
                                  </Link>
                                </h5>
                                <div className="rating-box">
                                  <ul className="rating">
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <Link to="/single-product"
                                  className="product_name"
                                  
                                >
                                  Mug Today is a good day
                                </Link>
                              </h4>
                              <div className="price-box">
                                <span className="new-price new-price-2">
                                  $71.80
                                </span>
                                <span className="old-price">$77.22</span>
                                <span className="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div className="add-actions">
                              <ul className="add-actions-link">
                                <li className="add-cart active">
                                  <Link to="#">Add to cart</Link>
                                </li>
                                <li>
                                  <Link to="/wishlist"
                                    className="links-details"
                                    
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#"
                                    className="quick-view-btn"
                                    data-target="#exampleModalCenter"
                                    data-toggle="modal"
                                    
                                    title="quick view"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <Link to="/single-product">
                              <img
                                alt="Li's Product Image"
                                src="assets/images/product/large-size/6.jpg"
                              />
                            </Link>
                            <span className="sticker">New</span>
                          </div>
                          <div className="product_desc">
                            <div className="product_desc_info">
                              <div className="product-review">
                                <h5 className="manufacturer">
                                  <Link to="/shop-left-sidebar">
                                    Graphic Corner
                                  </Link>
                                </h5>
                                <div className="rating-box">
                                  <ul className="rating">
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <Link to="/single-product"
                                  className="product_name"
                                  
                                >
                                  Accusantium dolorem1
                                </Link>
                              </h4>
                              <div className="price-box">
                                <span className="new-price">$46.80</span>
                              </div>
                            </div>
                            <div className="add-actions">
                              <ul className="add-actions-link">
                                <li className="add-cart active">
                                  <Link to="#">Add to cart</Link>
                                </li>
                                <li>
                                  <Link to="/wishlist"
                                    className="links-details"
                                    
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#"
                                    className="quick-view-btn"
                                    data-target="#exampleModalCenter"
                                    data-toggle="modal"
                                    
                                    title="quick view"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <Link to="/single-product">
                              <img
                                alt="Li's Product Image"
                                src="assets/images/product/large-size/8.jpg"
                              />
                            </Link>
                            <span className="sticker">New</span>
                          </div>
                          <div className="product_desc">
                            <div className="product_desc_info">
                              <div className="product-review">
                                <h5 className="manufacturer">
                                  <Link to="/shop-left-sidebar">
                                    Studio Design
                                  </Link>
                                </h5>
                                <div className="rating-box">
                                  <ul className="rating">
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <Link to="/single-product"
                                  className="product_name"
                                  
                                >
                                  Mug Today is a good day
                                </Link>
                              </h4>
                              <div className="price-box">
                                <span className="new-price new-price-2">
                                  $71.80
                                </span>
                                <span className="old-price">$77.22</span>
                                <span className="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div className="add-actions">
                              <ul className="add-actions-link">
                                <li className="add-cart active">
                                  <Link to ="#">Add to cart</Link>
                                </li>
                                <li>
                                  <Link to="/wishlist"
                                    className="links-details"
                                    
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#"
                                    className="quick-view-btn"
                                    data-target="#exampleModalCenter"
                                    data-toggle="modal"
                                    
                                    title="quick view"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <Link to="/single-product">
                              <img
                                alt="Li's Product Image"
                                src="assets/images/product/large-size/10.jpg"
                              />
                            </Link>
                            <span className="sticker">New</span>
                          </div>
                          <div className="product_desc">
                            <div className="product_desc_info">
                              <div className="product-review">
                                <h5 className="manufacturer">
                                  <Link to="/shop-left-sidebar">
                                    Graphic Corner
                                  </Link>
                                </h5>
                                <div className="rating-box">
                                  <ul className="rating">
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <Link to="/single-product"
                                  className="product_name"
                                  
                                >
                                  Accusantium dolorem1
                                </Link>
                              </h4>
                              <div className="price-box">
                                <span className="new-price">$46.80</span>
                              </div>
                            </div>
                            <div className="add-actions">
                              <ul className="add-actions-link">
                                <li className="add-cart active">
                                  <Link to="#">Add to cart</Link>
                                </li>
                                <li>
                                  <Link to="/wishlist"
                                    className="links-details"
                                    
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#"
                                    className="quick-view-btn"
                                    data-target="#exampleModalCenter"
                                    data-toggle="modal"
                                    
                                    title="quick view"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <Link to="/single-product">
                              <img
                                alt="Li's Product Image"
                                src="assets/images/product/large-size/12.jpg"
                              />
                            </Link>
                            <span className="sticker">New</span>
                          </div>
                          <div className="product_desc">
                            <div className="product_desc_info">
                              <div className="product-review">
                                <h5 className="manufacturer">
                                  <Link to="/shop-left-sidebar">
                                    Studio Design
                                  </Link>
                                </h5>
                                <div className="rating-box">
                                  <ul className="rating">
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <Link to="/single-product"
                                  className="product_name"
                                  
                                >
                                  Mug Today is a good day
                                </Link>
                              </h4>
                              <div className="price-box">
                                <span className="new-price new-price-2">
                                  $71.80
                                </span>
                                <span className="old-price">$77.22</span>
                                <span className="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div className="add-actions">
                              <ul className="add-actions-link">
                                <li className="add-cart active">
                                  <Link to="#">Add to cart</Link>
                                </li>
                                <li>
                                  <Link to="/wishlist"
                                    className="links-details"
                                    
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#"
                                    className="quick-view-btn"
                                    data-target="#exampleModalCenter"
                                    data-toggle="modal"
                                    
                                    title="quick view"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="home2">
                  <div className="row">
                    <div className="product-active owl-carousel">
                      <div className="col-lg-12">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <Link to="/single-product">
                              <img
                                alt="Li's Product Image"
                                src="assets/images/product/large-size/11.jpg"
                              />
                            </Link>
                            <span className="sticker">New</span>
                          </div>
                          <div className="product_desc">
                            <div className="product_desc_info">
                              <div className="product-review">
                                <h5 className="manufacturer">
                                  <Link to="/shop-left-sidebar">
                                    Graphic Corner
                                  </Link>
                                </h5>
                                <div className="rating-box">
                                  <ul className="rating">
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <Link to="/single-product"
                                  className="product_name"
                                  
                                >
                                  Accusantium dolorem1
                                </Link>
                              </h4>
                              <div className="price-box">
                                <span className="new-price">$46.80</span>
                              </div>
                            </div>
                            <div className="add-actions">
                              <ul className="add-actions-link">
                                <li className="add-cart active">
                                  <Link to="#">Add to cart</Link>
                                </li>
                                <li>
                                  <Link to="/wishlist"
                                    className="links-details"
                                    
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#"
                                    className="quick-view-btn"
                                    data-target="#exampleModalCenter"
                                    data-toggle="modal"
                                    
                                    title="quick view"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <Link to="/single-product">
                              <img
                                alt="Li's Product Image"
                                src="assets/images/product/large-size/7.jpg"
                              />
                            </Link>
                            <span className="sticker">New</span>
                          </div>
                          <div className="product_desc">
                            <div className="product_desc_info">
                              <div className="product-review">
                                <h5 className="manufacturer">
                                  <Link to="/shop-left-sidebar">
                                    Studio Design
                                  </Link>
                                </h5>
                                <div className="rating-box">
                                  <ul className="rating">
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <Link to="/single-product"
                                  className="product_name"
                                  
                                >
                                  Mug Today is a good day
                                </Link>
                              </h4>
                              <div className="price-box">
                                <span className="new-price new-price-2">
                                  $71.80
                                </span>
                                <span className="old-price">$77.22</span>
                                <span className="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div className="add-actions">
                              <ul className="add-actions-link">
                                <li className="add-cart active">
                                  <Link to="#">Add to cart</Link>
                                </li>
                                <li>
                                  <Link to="/wishlist"
                                    className="links-details"
                                    
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#"
                                    className="quick-view-btn"
                                    data-target="#exampleModalCenter"
                                    data-toggle="modal"
                                    
                                    title="quick view"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <Link to="/single-product">
                              <img
                                alt="Li's Product Image"
                                src="assets/images/product/large-size/9.jpg"
                              />
                            </Link>
                            <span className="sticker">New</span>
                          </div>
                          <div className="product_desc">
                            <div className="product_desc_info">
                              <div className="product-review">
                                <h5 className="manufacturer">
                                  <Link to="/shop-left-sidebar">
                                    Graphic Corner
                                  </Link>
                                </h5>
                                <div className="rating-box">
                                  <ul className="rating">
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <Link to="/single-product"
                                  className="product_name"
                                  
                                >
                                  Accusantium dolorem1
                                </Link>
                              </h4>
                              <div className="price-box">
                                <span className="new-price">$46.80</span>
                              </div>
                            </div>
                            <div className="add-actions">
                              <ul className="add-actions-link">
                                <li className="add-cart active">
                                  <Link to="#">Add to cart</Link>
                                </li>
                                <li>
                                  <Link to="/wishlist"
                                    className="links-details"
                                    
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#"
                                    className="quick-view-btn"
                                    data-target="#exampleModalCenter"
                                    data-toggle="modal"
                                    
                                    title="quick view"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <Link to="/single-product">
                              <img
                                alt="Li's Product Image"
                                src="assets/images/product/large-size/5.jpg"
                              />
                            </Link>
                            <span className="sticker">New</span>
                          </div>
                          <div className="product_desc">
                            <div className="product_desc_info">
                              <div className="product-review">
                                <h5 className="manufacturer">
                                  <Link to="/shop-left-sidebar">
                                    Studio Design
                                  </Link>
                                </h5>
                                <div className="rating-box">
                                  <ul className="rating">
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <Link to="/single-product"
                                  className="product_name"
                                  
                                >
                                  Mug Today is a good day
                                </Link>
                              </h4>
                              <div className="price-box">
                                <span className="new-price new-price-2">
                                  $71.80
                                </span>
                                <span className="old-price">$77.22</span>
                                <span className="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div className="add-actions">
                              <ul className="add-actions-link">
                                <li className="add-cart active">
                                  <Link to ="#">Add to cart</Link>
                                </li>
                                <li>
                                  <Link to="/wishlist"
                                    className="links-details"
                                    
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#"
                                    className="quick-view-btn"
                                    data-target="#exampleModalCenter"
                                    data-toggle="modal"
                                    
                                    title="quick view"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <Link to="/single-product">
                              <img
                                alt="Li's Product Image"
                                src="assets/images/product/large-size/7.jpg"
                              />
                            </Link>
                            <span className="sticker">New</span>
                          </div>
                          <div className="product_desc">
                            <div className="product_desc_info">
                              <div className="product-review">
                                <h5 className="manufacturer">
                                  <Link to="/shop-left-sidebar">
                                    Graphic Corner
                                  </Link>
                                </h5>
                                <div className="rating-box">
                                  <ul className="rating">
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <Link to="/single-product"
                                  className="product_name"
                                  
                                >
                                  Accusantium dolorem1
                                </Link>
                              </h4>
                              <div className="price-box">
                                <span className="new-price">$46.80</span>
                              </div>
                            </div>
                            <div className="add-actions">
                              <ul className="add-actions-link">
                                <li className="add-cart active">
                                  <Link to="#">Add to cart</Link>
                                </li>
                                <li>
                                  <Link to="/wishlist"
                                    className="links-details"
                                    
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#"
                                    className="quick-view-btn"
                                    data-target="#exampleModalCenter"
                                    data-toggle="modal"
                                    
                                    title="quick view"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <Link to="/single-product">
                              <img
                                alt="Li's Product Image"
                                src="assets/images/product/large-size/5.jpg"
                              />
                            </Link>
                            <span className="sticker">New</span>
                          </div>
                          <div className="product_desc">
                            <div className="product_desc_info">
                              <div className="product-review">
                                <h5 className="manufacturer">
                                  <Link to="/shop-left-sidebar">
                                    Studio Design
                                  </Link>
                                </h5>
                                <div className="rating-box">
                                  <ul className="rating">
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <Link to="/single-product"
                                  className="product_name"
                                  
                                >
                                  Mug Today is a good day
                                </Link>
                              </h4>
                              <div className="price-box">
                                <span className="new-price new-price-2">
                                  $71.80
                                </span>
                                <span className="old-price">$77.22</span>
                                <span className="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div className="add-actions">
                              <ul className="add-actions-link">
                                <li className="add-cart active">
                                  <Link to="#">Add to cart</Link>
                                </li>
                                <li>
                                  <Link to="/wishlist"
                                    className="links-details"
                                    
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#"
                                    className="quick-view-btn"
                                    data-target="#exampleModalCenter"
                                    data-toggle="modal"
                                    
                                    title="quick view"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="home3">
                  <div className="row">
                    <div className="product-active owl-carousel">
                      <div className="col-lg-12">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <Link to="/single-product">
                              <img
                                alt="Li's Product Image"
                                src="assets/images/product/large-size/3.jpg"
                              />
                            </Link>
                            <span className="sticker">New</span>
                          </div>
                          <div className="product_desc">
                            <div className="product_desc_info">
                              <div className="product-review">
                                <h5 className="manufacturer">
                                  <Link to="/shop-left-sidebar">
                                    Graphic Corner
                                  </Link>
                                </h5>
                                <div className="rating-box">
                                  <ul className="rating">
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <Link to="/single-product"
                                  className="product_name"
                                  
                                >
                                  Accusantium dolorem1
                                </Link>
                              </h4>
                              <div className="price-box">
                                <span className="new-price">$46.80</span>
                              </div>
                            </div>
                            <div className="add-actions">
                              <ul className="add-actions-link">
                                <li className="add-cart active">
                                  <Link to="#">Add to cart</Link>
                                </li>
                                <li>
                                  <Link to="/wishlist"
                                    className="links-details"
                                    
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#"
                                    className="quick-view-btn"
                                    data-target="#exampleModalCenter"
                                    data-toggle="modal"
                                    
                                    title="quick view"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <Link to="/single-product">
                              <img
                                alt="Li's Product Image"
                                src="assets/images/product/large-size/7.jpg"
                              />
                            </Link>
                            <span className="sticker">New</span>
                          </div>
                          <div className="product_desc">
                            <div className="product_desc_info">
                              <div className="product-review">
                                <h5 className="manufacturer">
                                  <Link to="/shop-left-sidebar">
                                    Studio Design
                                  </Link>
                                </h5>
                                <div className="rating-box">
                                  <ul className="rating">
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <Link to="/single-product"
                                  className="product_name"
                                  
                                >
                                  Mug Today is a good day
                                </Link>
                              </h4>
                              <div className="price-box">
                                <span className="new-price new-price-2">
                                  $71.80
                                </span>
                                <span className="old-price">$77.22</span>
                                <span className="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div className="add-actions">
                              <ul className="add-actions-link">
                                <li className="add-cart active">
                                  <Link to="#">Add to cart</Link>
                                </li>
                                <li>
                                  <Link to="/wishlist"
                                    className="links-details"
                                    
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#"
                                    className="quick-view-btn"
                                    data-target="#exampleModalCenter"
                                    data-toggle="modal"
                                    
                                    title="quick view"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <Link to="/single-product">
                              <img
                                alt="Li's Product Image"
                                src="assets/images/product/large-size/9.jpg"
                              />
                            </Link>
                            <span className="sticker">New</span>
                          </div>
                          <div className="product_desc">
                            <div className="product_desc_info">
                              <div className="product-review">
                                <h5 className="manufacturer">
                                  <Link to="/shop-left-sidebar">
                                    Graphic Corner
                                  </Link>
                                </h5>
                                <div className="rating-box">
                                  <ul className="rating">
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <Link to="/single-product"
                                  className="product_name"
                                  
                                >
                                  Accusantium dolorem1
                                </Link>
                              </h4>
                              <div className="price-box">
                                <span className="new-price">$46.80</span>
                              </div>
                            </div>
                            <div className="add-actions">
                              <ul className="add-actions-link">
                                <li className="add-cart active">
                                  <Link to="#">Add to cart</Link>
                                </li>
                                <li>
                                  <Link to="/wishlist"
                                    className="links-details"
                                    
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#"
                                    className="quick-view-btn"
                                    data-target="#exampleModalCenter"
                                    data-toggle="modal"
                                    
                                    title="quick view"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <Link to="/single-product">
                              <img
                                alt="Li's Product Image"
                                src="assets/images/product/large-size/1.jpg"
                              />
                            </Link>
                            <span className="sticker">New</span>
                          </div>
                          <div className="product_desc">
                            <div className="product_desc_info">
                              <div className="product-review">
                                <h5 className="manufacturer">
                                  <Link to="/shop-left-sidebar">
                                    Studio Design
                                  </Link>
                                </h5>
                                <div className="rating-box">
                                  <ul className="rating">
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <Link to="/single-product"
                                  className="product_name"
                                  
                                >
                                  Mug Today is a good day
                                </Link>
                              </h4>
                              <div className="price-box">
                                <span className="new-price new-price-2">
                                  $71.80
                                </span>
                                <span className="old-price">$77.22</span>
                                <span className="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div className="add-actions">
                              <ul className="add-actions-link">
                                <li className="add-cart active">
                                  <Link to="#">Add to cart</Link>
                                </li>
                                <li>
                                  <Link to="/wishlist"
                                    className="links-details"
                                    
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#"
                                    className="quick-view-btn"
                                    data-target="#exampleModalCenter"
                                    data-toggle="modal"
                                    
                                    title="quick view"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <Link to="/single-product">
                              <img
                                alt="Li's Product Image"
                                src="assets/images/product/large-size/11.jpg"
                              />
                            </Link>
                            <span className="sticker">New</span>
                          </div>
                          <div className="product_desc">
                            <div className="product_desc_info">
                              <div className="product-review">
                                <h5 className="manufacturer">
                                  <Link to="/shop-left-sidebar">
                                    Graphic Corner
                                  </Link>
                                </h5>
                                <div className="rating-box">
                                  <ul className="rating">
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <Link to="/single-product"
                                  className="product_name"
                                  
                                >
                                  Accusantium dolorem1
                                </Link>
                              </h4>
                              <div className="price-box">
                                <span className="new-price">$46.80</span>
                              </div>
                            </div>
                            <div className="add-actions">
                              <ul className="add-actions-link">
                                <li className="add-cart active">
                                  <Link to="#">Add to cart</Link>
                                </li>
                                <li>
                                  <Link to="/wishlist"
                                    className="links-details"
                                    
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#"
                                    className="quick-view-btn"
                                    data-target="#exampleModalCenter"
                                    data-toggle="modal"
                                    
                                    title="quick view"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <Link to="/single-product">
                              <img
                                alt="Li's Product Image"
                                src="assets/images/product/large-size/9.jpg"
                              />
                            </Link>
                            <span className="sticker">New</span>
                          </div>
                          <div className="product_desc">
                            <div className="product_desc_info">
                              <div className="product-review">
                                <h5 className="manufacturer">
                                  <Link to="/shop-left-sidebar">
                                    Studio Design
                                  </Link>
                                </h5>
                                <div className="rating-box">
                                  <ul className="rating">
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="no-star">
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h4>
                                <Link to="/single-product"
                                  className="product_name"
                                  
                                >
                                  Mug Today is a good day
                                </Link>
                              </h4>
                              <div className="price-box">
                                <span className="new-price new-price-2">
                                  $71.80
                                </span>
                                <span className="old-price">$77.22</span>
                                <span className="discount-percentage">-7%</span>
                              </div>
                            </div>
                            <div className="add-actions">
                              <ul className="add-actions-link">
                                <li className="add-cart active">
                                  <Link to="#">Add to cart</Link>
                                </li>
                                <li>
                                  <Link to="/wishlist"
                                    className="links-details"
                                    
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#"
                                    className="quick-view-btn"
                                    data-target="#exampleModalCenter"
                                    data-toggle="modal"
                                    
                                    title="quick view"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
