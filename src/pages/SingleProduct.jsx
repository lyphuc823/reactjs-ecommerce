import React from "react";
import { Link } from "react-router-dom";

function SingleProduct() {
  return (
    <div>
      <div className="body-wrapper">
        <div className="breadcrumb-area">
          <div className="container">
            <div className="breadcrumb-content">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">Single Product</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-wraper">
          <div className="container">
            <div className="row single-product-area">
              <div className="col-lg-5 col-md-6">
                <div className="product-details-left">
                  <div className="product-details-images slider-navigation-1">
                    <div className="lg-image">
                      <Link
                        className="popup-img venobox vbox-item"
                        to="/images/product/large-size/1.jpg"
                        data-gall="myGallery"
                      >
                        <img
                          src="assets/images/product/large-size/1.jpg"
                          alt="product image"
                        />
                      </Link>
                    </div>
                    <div className="lg-image">
                      <Link
                        className="popup-img venobox vbox-item"
                        to="/images/product/large-size/2.jpg"
                        data-gall="myGallery"
                      >
                        <img
                          src="assets/images/product/large-size/2.jpg"
                          alt="product image"
                        />
                      </Link>
                    </div>
                    <div className="lg-image">
                      <Link
                        className="popup-img venobox vbox-item"
                        to="/images/product/large-size/3.jpg"
                        data-gall="myGallery"
                      >
                        <img
                          src="assets/images/product/large-size/3.jpg"
                          alt="product image"
                        />
                      </Link>
                    </div>
                    <div className="lg-image">
                      <Link
                        className="popup-img venobox vbox-item"
                        to="/images/product/large-size/4.jpg"
                        data-gall="myGallery"
                      >
                        <img
                          src="assets/images/product/large-size/4.jpg"
                          alt="product image"
                        />
                      </Link>
                    </div>
                    <div className="lg-image">
                      <Link
                        className="popup-img venobox vbox-item"
                        to="/images/product/large-size/5.jpg"
                        data-gall="myGallery"
                      >
                        <img
                          src="assets/images/product/large-size/5.jpg"
                          alt="product image"
                        />
                      </Link>
                    </div>
                    <div className="lg-image">
                      <Link
                        className="popup-img venobox vbox-item"
                        to="/images/product/large-size/6.jpg"
                        data-gall="myGallery"
                      >
                        <img
                          src="assets/images/product/large-size/6.jpg"
                          alt="product image"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="product-details-thumbs slider-thumbs-1">
                    <div className="sm-image">
                      <img
                        src="assets/images/product/small-size/1.jpg"
                        alt="product image thumb"
                      />
                    </div>
                    <div className="sm-image">
                      <img
                        src="assets/images/product/small-size/2.jpg"
                        alt="product image thumb"
                      />
                    </div>
                    <div className="sm-image">
                      <img
                        src="assets/images/product/small-size/3.jpg"
                        alt="product image thumb"
                      />
                    </div>
                    <div className="sm-image">
                      <img
                        src="assets/images/product/small-size/4.jpg"
                        alt="product image thumb"
                      />
                    </div>
                    <div className="sm-image">
                      <img
                        src="assets/images/product/small-size/5.jpg"
                        alt="product image thumb"
                      />
                    </div>
                    <div className="sm-image">
                      <img
                        src="assets/images/product/small-size/6.jpg"
                        alt="product image thumb"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 col-md-6">
                <div className="product-details-view-content pt-60">
                  <div className="product-info">
                    <h2
                    // th:text="${product.productName"
                    ></h2>
                    <span className="product-details-ref">
                      Reference: demo_15
                    </span>
                    <div className="rating-box pt-20">
                      <ul className="rating rating-with-review-item">
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
                        <li className="review-item">
                          <Link to="#">Read Review</Link>
                        </li>
                        <li className="review-item">
                          <Link to="#">Write Review</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="price-box pt-20">
                      <span
                        className="new-price new-price-2"
                        // th:text="'$'+${product.price"
                      ></span>
                    </div>
                    <div className="product-desc">
                      <p>
                        <span
                        // th:text="${product.description"
                        ></span>
                      </p>
                    </div>
                    <div className="product-variants">
                      <div className="produt-variants-size">
                        <label>Dimension</label>
                        <select className="nice-select">
                          <option value="1" title="S" selected="selected">
                            40x60cm
                          </option>
                          <option value="2" title="M">
                            60x90cm
                          </option>
                          <option value="3" title="L">
                            80x120cm
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="single-add-to-cart">
                      <form action="#" className="cart-quantity">
                        <div className="quantity">
                          <label>Quantity</label>
                          <div className="cart-plus-minus">
                            <input
                              className="cart-plus-minus-box"
                              value="1"
                              type="text"
                            />
                            <div className="dec qtybutton">
                              <i className="fa fa-angle-down"></i>
                            </div>
                            <div className="inc qtybutton">
                              <i className="fa fa-angle-up"></i>
                            </div>
                          </div>
                        </div>
                        <button className="add-to-cart" type="submit">
                          Add to cart
                        </button>
                      </form>
                    </div>
                    <div className="product-additional-info pt-25">
                      <Link className="wishlist-btn" to="#">
                        <i className="fa fa-heart-o"></i>Add to wishlist
                      </Link>
                      <div className="product-social-sharing pt-25">
                        <ul>
                          <li className="facebook">
                            <Link to="#">
                              <i className="fa fa-facebook"></i>Facebook
                            </Link>
                          </li>
                          <li className="twitter">
                            <Link to="#">
                              <i className="fa fa-twitter"></i>Twitter
                            </Link>
                          </li>
                          <li className="google-plus">
                            <Link to="#">
                              <i className="fa fa-google-plus"></i>Google +
                            </Link>
                          </li>
                          <li className="instagram">
                            <Link to="#">
                              <i className="fa fa-instagram"></i>Instagram
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="block-reassurance">
                      <ul>
                        <li>
                          <div className="reassurance-item">
                            <div className="reassurance-icon">
                              <i className="fa fa-check-square-o"></i>
                            </div>
                            <p>
                              Security policy (edit with Customer reassurance
                              module)
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="reassurance-item">
                            <div className="reassurance-icon">
                              <i className="fa fa-truck"></i>
                            </div>
                            <p>
                              Delivery policy (edit with Customer reassurance
                              module)
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="reassurance-item">
                            <div className="reassurance-icon">
                              <i className="fa fa-exchange"></i>
                            </div>
                            <p>
                              {" "}
                              Return policy (edit with Customer reassurance
                              module)
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-area pt-35">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="li-product-tab">
                  <ul className="nav li-product-menu">
                    <li>
                      <Link
                        className="active"
                        data-toggle="tab"
                        to="#description"
                      >
                        <span>Description</span>
                      </Link>
                    </li>
                    <li>
                      <Link data-toggle="tab" to="#product-details">
                        <span>Product Details</span>
                      </Link>
                    </li>
                    <li>
                      <Link data-toggle="tab" to="#reviews">
                        <span>Reviews</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-content">
              <div
                id="description"
                className="tab-pane active show"
                role="tabpanel"
              >
                <div className="product-description">
                  <span
                  //   th:text="${product.description"
                  ></span>
                </div>
              </div>
              <div id="product-details" className="tab-pane" role="tabpanel">
                <div className="product-details-manufacturer">
                  <Link to="#">
                    <img
                      src="assets/images/product-details/1.jpg"
                        alt="Product Manufacturer Image"
                    />
                  </Link>
                  <p>
                    <span>Reference</span> demo_7
                  </p>
                  <p>
                    <span>Reference</span> demo_7
                  </p>
                </div>
              </div>
              <div id="reviews" className="tab-pane" role="tabpanel">
                <div className="product-reviews">
                  <div className="product-details-comment-block">
                    <div
                    // th:each="comment :${comments"
                    >
                      <div className="comment-review">
                        <span>Grade</span>
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
                      <div className="comment-author-infos pt-25">
                        <span
                        // th:text="${comment.user.getLastName()}+' '+${comment.user.getFirstName()"
                        ></span>
                        <em
                        // th:text="${comment.commentDate"
                        ></em>
                      </div>
                      <div className="comment-details">
                        <h4 className="title-block">Demo</h4>
                        <p
                        // th:text="${comment.commentText"
                        ></p>
                      </div>
                    </div>
                    <div className="review-btn">
                      <Link
                        className="review-links"
                        to="#"
                        data-toggle="modal"
                        data-target="#mymodal"
                      >
                        Write Your Review!
                      </Link>
                    </div>

                    <div className="modal fade modal-wrapper" id="mymodal">
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-body">
                            <h3 className="review-page-title">
                              Write Your Review
                            </h3>
                            <div className="modal-inner-area row">
                              <div className="col-lg-6">
                                <div className="li-review-product">
                                  <img
                                    src="assets/images/product/large-size/3.jpg"
                                    alt="Li's Product"
                                  />
                                  <div className="li-review-product-desc">
                                    <p className="li-product-name">
                                      Today is a good day Framed poster
                                    </p>
                                    <p>
                                      <span>
                                        Beach Camera Exclusive Bundle - Includes
                                        Two Samsung Radiant 360 R3 Wi-Fi
                                        Bluetooth Speakers. Fill The Entire Room
                                        With Exquisite Sound via Ring Radiator
                                        Technology. Stream And Control R3
                                        Speakers Wirelessly With Your
                                        Smartphone. Sophisticated, Modern Design{" "}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="li-review-content">
                                  <div className="feedback-area">
                                    <div className="feedback">
                                      <h3 className="feedback-title">
                                        Our Feedback
                                      </h3>
                                      <form action="#">
                                        <p className="your-opinion">
                                          <label>Your Rating</label>
                                          <span>
                                            <select className="star-rating">
                                              <option value="1">1</option>
                                              <option value="2">2</option>
                                              <option value="3">3</option>
                                              <option value="4">4</option>
                                              <option value="5">5</option>
                                            </select>
                                          </span>
                                        </p>
                                        <p className="feedback-form">
                                          <label htmlFor="feedback">
                                            Your Review
                                          </label>
                                          <textarea
                                            id="feedback"
                                            name="comment"
                                            cols="45"
                                            rows="8"
                                            aria-required="true"
                                          ></textarea>
                                        </p>
                                        <div className="feedback-input">
                                          <p className="feedback-form-author">
                                            <label htmlFor="author">
                                              Name
                                              <span className="required">
                                                *
                                              </span>
                                            </label>
                                            <input
                                              id="author"
                                              name="author"
                                              value=""
                                              size="30"
                                              aria-required="true"
                                              type="text"
                                            />
                                          </p>
                                          <p className="feedback-form-author feedback-form-email">
                                            <label htmlFor="email">
                                              Email
                                              <span className="required">
                                                *
                                              </span>
                                            </label>
                                            <input
                                              id="email"
                                              name="email"
                                              value=""
                                              size="30"
                                              aria-required="true"
                                              type="text"
                                            />
                                            <span className="required">
                                              <sub>*</sub> Required fields
                                            </span>
                                          </p>
                                          <div className="feedback-btn pb-15">
                                            <Link
                                              to="#"
                                              className="close"
                                              data-dismiss="modal"
                                              aria-label="Close"
                                            >
                                              Close
                                            </Link>
                                            <Link to="#">Submit</Link>
                                          </div>
                                        </div>
                                      </form>
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
              </div>
            </div>
          </div>
        </div>

        <section className="product-area li-laptop-product pt-30 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="li-section-title">
                  <h2>
                    <span>15 other products in the same category:</span>
                  </h2>
                </div>
                <div className="row">
                  <div className="product-active owl-carousel">
                    <div className="col-lg-12">
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <Link to="/single-product">
                            <img
                              src="assets/images/product/large-size/1.jpg"
                              alt="Li's Product Image"
                            />
                          </Link>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <Link to="#">
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
                              <Link
                                className="product_name"
                                to="single-product"
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
                                <Link
                                  to="#"
                                  title="quick view"
                                  className="quick-view-btn"
                                  data-toggle="modal"
                                  data-target="#exampleModalCenter"
                                >
                                  <i className="fa fa-eye"></i>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="links-details"
                                  to="#"
                                >
                                  <i className="fa fa-heart-o"></i>
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
                              src="assets/images/product/large-size/2.jpg"
                              alt="Li's Product Image"
                            />
                          </Link>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <Link to="#">Studio Design</Link>
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
                              <Link
                                className="product_name"
                                to="/single-product"
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
                                <Link
                                  to="#"
                                  title="quick view"
                                  className="quick-view-btn"
                                  data-toggle="modal"
                                  data-target="#exampleModalCenter"
                                >
                                  <i className="fa fa-eye"></i>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="links-details"
                                  to="wishlist"
                                >
                                  <i className="fa fa-heart-o"></i>
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
                              src="assets/images/product/large-size/3.jpg"
                              alt="Li's Product Image"
                            />
                          </Link>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <Link to="/product-details">
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
                              <Link
                                className="product_name"
                                to="/single-product"
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
                                <Link
                                  to="#"
                                  title="quick view"
                                  className="quick-view-btn"
                                  data-toggle="modal"
                                  data-target="#exampleModalCenter"
                                >
                                  <i className="fa fa-eye"></i>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="links-details"
                                  to="#"
                                >
                                  <i className="fa fa-heart-o"></i>
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
                              src="assets/images/product/large-size/4.jpg"
                              alt="Li's Product Image"
                            />
                          </Link>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <Link to="#">Studio Design</Link>
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
                              <Link
                                className="product_name"
                                to="/single-product"
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
                                <Link
                                  to="#"
                                  title="quick view"
                                  className="quick-view-btn"
                                  data-toggle="modal"
                                  data-target="#exampleModalCenter"
                                >
                                  <i className="fa fa-eye"></i>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="links-details"
                                  to="#"
                                >
                                  <i className="fa fa-heart-o"></i>
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
                              src="assets/images/product/large-size/5.jpg"
                              alt="Li's Product Image"
                            />
                          </Link>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <Link to="#">
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
                              <Link
                                className="product_name"
                                to="/single-product"
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
                                <Link
                                  to="#"
                                  title="quick view"
                                  className="quick-view-btn"
                                  data-toggle="modal"
                                  data-target="#exampleModalCenter"
                                >
                                  <i className="fa fa-eye"></i>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="links-details"
                                  to="#"
                                >
                                  <i className="fa fa-heart-o"></i>
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
                              src="assets/images/product/large-size/6.jpg"
                              alt="Li's Product Image"
                            />
                          </Link>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <Link to="#">Studio Design</Link>
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
                              <Link
                                className="product_name"
                                to="/single-product"
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
                                <Link
                                  to="#"
                                  title="quick view"
                                  className="quick-view-btn"
                                  data-toggle="modal"
                                  data-target="#exampleModalCenter"
                                >
                                  <i className="fa fa-eye"></i>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="links-details"
                                  to="#"
                                >
                                  <i className="fa fa-heart-o"></i>
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

        <div className="modal fade modal-wrapper" id="exampleModalCenter">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <div className="modal-inner-area row">
                  <div className="col-lg-5 col-md-6 col-sm-6">
                    <div className="product-details-left">
                      <div className="product-details-images slider-navigation-1">
                        <div className="lg-image">
                          <img
                            src="assets/images/product/large-size/1.jpg"
                            alt="product image"
                          />
                        </div>
                        <div className="lg-image">
                          <img
                            src="assets/images/product/large-size/2.jpg"
                            alt="product image"
                          />
                        </div>
                        <div className="lg-image">
                          <img
                            src="assets/images/product/large-size/3.jpg"
                            alt="product image"
                          />
                        </div>
                        <div className="lg-image">
                          <img
                            src="assets/images/product/large-size/4.jpg"
                            alt="product image"
                          />
                        </div>
                        <div className="lg-image">
                          <img
                            src="assets/images/product/large-size/5.jpg"
                            alt="product image"
                          />
                        </div>
                        <div className="lg-image">
                          <img
                            src="assets/images/product/large-size/6.jpg"
                            alt="product image"
                          />
                        </div>
                      </div>
                      <div className="product-details-thumbs slider-thumbs-1">
                        <div className="sm-image">
                          <img
                            src="assets/images/product/small-size/1.jpg"
                            alt="product image thumb"
                          />
                        </div>
                        <div className="sm-image">
                          <img
                            src="assets/images/product/small-size/2.jpg"
                            alt="product image thumb"
                          />
                        </div>
                        <div className="sm-image">
                          <img
                            src="assets/images/product/small-size/3.jpg"
                            alt="product image thumb"
                          />
                        </div>
                        <div className="sm-image">
                          <img
                            src="assets/images/product/small-size/4.jpg"
                            alt="product image thumb"
                          />
                        </div>
                        <div className="sm-image">
                          <img
                            src="assets/images/product/small-size/5.jpg"
                            alt="product image thumb"
                          />
                        </div>
                        <div className="sm-image">
                          <img
                            src="assets/images/product/small-size/6.jpg"
                            alt="product image thumb"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-7 col-md-6 col-sm-6">
                    <div className="product-details-view-content pt-60">
                      <div className="product-info">
                        <h2>Today is a good day Framed poster</h2>
                        <span className="product-details-ref">
                          Reference: demo_15
                        </span>
                        <div className="rating-box pt-20">
                          <ul className="rating rating-with-review-item">
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
                            <li className="review-item">
                              <Link to="#">Read Review</Link>
                            </li>
                            <li className="review-item">
                              <Link to="#">Write Review</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="price-box pt-20">
                          <span className="new-price new-price-2">$57.98</span>
                        </div>
                        <div className="product-desc">
                          <p>
                            <span>
                              100% cotton double printed dress. Black and white
                              striped top and orange high waisted skater skirt
                              bottom. Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. quibusdam corporis, earum
                              facilis et nostrum dolorum accusamus similique
                              eveniet quia pariatur.
                            </span>
                          </p>
                        </div>
                        <div className="product-variants">
                          <div className="produt-variants-size">
                            <label>Dimension</label>
                            <select className="nice-select">
                              <option value="1" title="S" selected="selected">
                                40x60cm
                              </option>
                              <option value="2" title="M">
                                60x90cm
                              </option>
                              <option value="3" title="L">
                                80x120cm
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="single-add-to-cart">
                          <form action="#" className="cart-quantity">
                            <div className="quantity">
                              <label>Quantity</label>
                              <div className="cart-plus-minus">
                                <input
                                  className="cart-plus-minus-box"
                                  value="1"
                                  type="text"
                                />
                                <div className="dec qtybutton">
                                  <i className="fa fa-angle-down"></i>
                                </div>
                                <div className="inc qtybutton">
                                  <i className="fa fa-angle-up"></i>
                                </div>
                              </div>
                            </div>
                            <button className="add-to-cart" type="submit">
                              Add to cart
                            </button>
                          </form>
                        </div>
                        <div className="product-additional-info pt-25">
                          <Link className="wishlist-btn" to="#">
                            <i className="fa fa-heart-o"></i>Add to wishlist
                          </Link>
                          <div className="product-social-sharing pt-25">
                            <ul>
                              <li className="facebook">
                                <Link to="#">
                                  <i className="fa fa-facebook"></i>Facebook
                                </Link>
                              </li>
                              <li className="twitter">
                                <Link to="#">
                                  <i className="fa fa-twitter"></i>Twitter
                                </Link>
                              </li>
                              <li className="google-plus">
                                <Link to="#">
                                  <i className="fa fa-google-plus"></i>Google +
                                </Link>
                              </li>
                              <li className="instagram">
                                <Link to="#">
                                  <i className="fa fa-instagram"></i>Instagram
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
    </div>
  );
}

export default SingleProduct;
