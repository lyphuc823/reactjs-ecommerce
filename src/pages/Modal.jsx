import React from "react";
import { Link } from "react-router-dom";

function Modal() {
  return (
    <div>
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
                            adipisicing elit. quibusdam corporis, earum facilis
                            et nostrum dolorum accusamus similique eveniet quia
                            pariatur.
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
  );
}

export default Modal;
