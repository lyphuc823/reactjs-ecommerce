import React from "react";
import { Link } from "react-router-dom";

function ShopLeftSideBar() {
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
                <li className="active">Shop Left Sidebar</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-wraper pt-60 pb-60 pt-sm-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 order-1 order-lg-2">
                <div className="single-banner shop-page-banner">
                  <Link to="#">
                    <img
                      src="assets/images/bg-banner/2.jpg"
                      alt="Li's Static Banner"
                    />
                  </Link>
                </div>

                <div className="shop-top-bar mt-30">
                  <div className="shop-bar-inner">
                    <div className="product-view-mode">
                      <ul className="nav shop-item-filter-list" role="tablist">
                        <li className="active" role="presentation">
                          <Link
                            aria-selected="true"
                            className="active show"
                            data-toggle="tab"
                            role="tab"
                            aria-controls="grid-view"
                            to="#grid-view"
                          >
                            <i className="fa fa-th"></i>
                          </Link>
                        </li>
                        <li role="presentation">
                          <Link
                            data-toggle="tab"
                            role="tab"
                            aria-controls="list-view"
                            to="#list-view"
                          >
                            <i className="fa fa-th-list"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="toolbar-amount">
                      <span>Showing 1 to 9 of 15</span>
                    </div>
                  </div>

                  <div className="product-select-box">
                    <div className="product-short">
                      <p>Sort By:</p>
                      <select className="nice-select">
                        <option value="trending">Relevance</option>
                        <option value="sales">Name (A - Z)</option>
                        <option value="sales">Name (Z - A)</option>
                        <option value="rating">Price (Low &gt; High)</option>
                        <option value="date">Rating (Lowest)</option>
                        <option value="price-asc">Model (A - Z)</option>
                        <option value="price-asc">Model (Z - A)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="shop-products-wrapper">
                  <div className="tab-content">
                    <div
                      id="grid-view"
                      className="tab-pane fade active show"
                      role="tabpanel"
                    >
                      <div className="product-area shop-product-area">
                        <div className="row">
                          <div
                            className="col-lg-4 col-md-4 col-sm-6 mt-40"
                            // th:each="product : ${products}"
                          >
                            <div className="single-product-wrap">
                              <div className="product-image">
                                <Link to="/single-product">
                                  <img
                                    src="assets/images/product/large-sze/1.jpg}"
                                    alt="Li's Product Image"
                                  />
                                </Link>
                                <span className="sticker">New</span>
                              </div>
                              <div className="product_desc">
                                <div className="product_desc_info">
                                  <div className="product-review">
                                    <h5 className="manufacturer">
                                      <Link
                                        to="#"
                                        // th:text="${product.category.categoryName}"
                                      ></Link>
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
                                      //   th:text="${product.productName}"
                                    ></Link>
                                  </h4>
                                  <div className="price-box">
                                    <span
                                      className="new-price"
                                      //   th:text="'$'+${product.price}"
                                    ></span>
                                  </div>
                                </div>
                                <div className="add-actions">
                                  <ul className="add-actions-link">
                                    <li className="add-cart active">
                                      <Link to="/shopping-cart">
                                        Add to cart
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#"
                                        // th:to="@{/product/modal/{productId}(productId=${product.productId})}"
                                        title="quick view"
                                        className="quick-view-btn link-detail"
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
                    <div
                      id="list-view"
                      className="tab-pane fade product-list-view"
                      role="tabpanel"
                    >
                      <div className="row">
                        <div className="col">
                          <div
                            className="row product-layout-list"
                            // th:each="product : ${products}"
                          >
                            <div className="col-lg-3 col-md-5 ">
                              <div className="product-image">
                                <Link to="/single-product">
                                  <img
                                    src="assets/images/product/large-sze/12.jpg}"
                                    alt="Li's Product Image"
                                  />
                                </Link>
                                <span className="sticker">New</span>
                              </div>
                            </div>
                            <div className="col-lg-5 col-md-7">
                              <div className="product_desc">
                                <div className="product_desc_info">
                                  <div className="product-review">
                                    <h5 className="manufacturer">
                                      <Link
                                        to="product-details"
                                        // th:text="${product.category.categoryName}"
                                      ></Link>
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
                                      //   th:text="${product.productName}"
                                    ></Link>
                                  </h4>
                                  <div className="price-box">
                                    <span
                                      className="new-price"
                                      //   th:text="'$'+${product.price}"
                                    ></span>
                                  </div>
                                  <p
                                  //   th:text="${product.description}"
                                  ></p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="shop-add-action mb-xs-30">
                                <ul className="add-actions-link">
                                  <li className="add-cart">
                                    <Link to="#">Add to cart</Link>
                                  </li>
                                  <li className="wishlist">
                                    <Link to="/wishlist">
                                      <i className="fa fa-heart-o"></i>Add to
                                      wishlist
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="quick-view"
                                      data-toggle="modal"
                                      data-target="#exampleModalCenter"
                                      to="#"
                                    >
                                      <i className="fa fa-eye"></i>Quick view
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="paginatoin-area">
                      <div className="row">
                        <div
                          className="col-lg-6 col-md-6 pt-xs-15"
                          //   th:if="${totalPages > 1}"
                        >
                          <p>
                            Showing 1-12 of
                            {/* [[${totalItems}]]  */}
                            item(s)
                          </p>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <ul className="pagination-box pt-xs-20 pb-xs-15">
                            <li
                            // th:if="${currentPage != 1}"
                            >
                              <Link to="#"
                                // th:to="@{'/product/list/1?sortField=' + ${sortField} + '&sortDir=' + ${sortDir}}"
                                className="Previous"
                              >
                                <i className="fa fa-chevron-left"></i> First
                              </Link>
                            </li>

                            <li
                            // th:if="${currentPage != 1}"
                            >
                              <Link to="#"
                                // th:to="@{'/product/list/'+${currentPage - 1}+'?sortField=' + ${sortField} + '&sortDir=' + ${sortDir}}"
                                className="Previous"
                              >
                                <i className="fa fa-chevron-left"></i> Previous
                              </Link>
                            </li>
                            <li
                              className="page-item hidden"
                              //   th:if="${currentPage - 2 > 1}"
                            >
                              <Link className="page-link" to="#">
                                ...
                              </Link>
                            </li>
                            <li
                            //   th:each="i : ${#numbers.sequence(((currentPage > 2) ? (currentPage - 2) : 1),(((currentPage + 2) < totalPages) ? (currentPage + 2) : totalPages))}"
                            //   th:className="${i==currentPage} ? active"
                            >
                              <Link  to="#"
                              //   th:to="@{'/product/list/'+${i}+'?sortField=' + ${sortField} + '&sortDir=' + ${sortDir}}"
                              >
                                {/* [[${i}]] */}
                              </Link>
                            </li>
                            <li
                              className="page-item hidden"
                              //   th:if="${currentPage + 2 < totalPages}"
                            >
                              <Link className="page-link" to="#">
                                ...
                              </Link>
                            </li>
                            <li
                            // th:if="${currentPage != totalPages}"
                            >
                              <Link  to="#"
                                // th:to="@{'/product/list/'+${currentPage + 1}+'?sortField=' + ${sortField} + '&sortDir=' + ${sortDir}}"
                                className="Next"
                              >
                                {" "}
                                Next <i className="fa fa-chevron-right"></i>
                              </Link>
                            </li>
                            <li
                            // th:if="${currentPage != totalPages}"
                            >
                              <Link  to="#"
                                // th:to="@{'/product/list/'+${totalPages}+'?sortField=' + ${sortField} + '&sortDir=' + ${sortDir}}"
                                className="Next"
                              >
                                {" "}
                                Last <i className="fa fa-chevron-right"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 order-2 order-lg-1">
                <div className="sidebar-categores-box mt-sm-30 mt-xs-30">
                  <div className="sidebar-title">
                    <h2>Laptop</h2>
                  </div>

                  <div className="category-sub-menu">
                    <ul>
                      <li className="has-sub">
                        <Link to="# ">Prime Video</Link>
                        <ul>
                          <li>
                            <Link to="#">All Videos</Link>
                          </li>
                          <li>
                            <Link to="#">Blouses</Link>
                          </li>
                          <li>
                            <Link to="#">Evening Dresses</Link>
                          </li>
                          <li>
                            <Link to="#">Summer Dresses</Link>
                          </li>
                          <li>
                            <Link to="#">T-Rent or Buy</Link>
                          </li>
                          <li>
                            <Link to="#">Your Watchlist</Link>
                          </li>
                          <li>
                            <Link to="#">Watch Anywhere</Link>
                          </li>
                          <li>
                            <Link to="#">Getting Started</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-sub">
                        <Link to="#">Computer</Link>
                        <ul>
                          <li>
                            <Link to="#">TV & Video</Link>
                          </li>
                          <li>
                            <Link to="#">Audio & Theater</Link>
                          </li>
                          <li>
                            <Link to="#">Camera, Photo</Link>
                          </li>
                          <li>
                            <Link to="#">Cell Phones</Link>
                          </li>
                          <li>
                            <Link to="#">Headphones</Link>
                          </li>
                          <li>
                            <Link to="#">Video Games</Link>
                          </li>
                          <li>
                            <Link to="#">Wireless Speakers</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-sub">
                        <Link to="#">Electronics</Link>
                        <ul>
                          <li>
                            <Link to="#">Amazon Home</Link>
                          </li>
                          <li>
                            <Link to="#">Kitchen & Dining</Link>
                          </li>
                          <li>
                            <Link to="#">Bed & Bath</Link>
                          </li>
                          <li>
                            <Link to="#">Appliances</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="sidebar-categores-box">
                  <div className="sidebar-title">
                    <h2>Filter By</h2>
                  </div>

                  <button className="btn-clear-all mb-sm-30 mb-xs-30">
                    Clear all
                  </button>

                  <div className="filter-sub-area">
                    <h5 className="filter-sub-titel">Brand</h5>
                    <div className="categori-checkbox">
                      <form action="#">
                        <ul>
                          <li>
                            <input type="checkbox" name="product-categori" />
                            <Link to="#">Prime Video (13)</Link>
                          </li>
                          <li>
                            <input type="checkbox" name="product-categori" />
                            <Link to="#">Computers (12)</Link>
                          </li>
                          <li>
                            <input type="checkbox" name="product-categori" />
                            <Link to="#">Electronics (11)</Link>
                          </li>
                        </ul>
                      </form>
                    </div>
                  </div>

                  <div className="filter-sub-area pt-sm-10 pt-xs-10">
                    <h5 className="filter-sub-titel">Categories</h5>
                    <div className="categori-checkbox">
                      <form action="#">
                        <ul>
                          <li>
                            <input type="checkbox" name="product-categori" />
                            <Link to="#">Graphic Corner (10)</Link>
                          </li>
                          <li>
                            <input type="checkbox" name="product-categori" />
                            <Link to="#"> Studio Design (6)</Link>
                          </li>
                        </ul>
                      </form>
                    </div>
                  </div>

                  <div className="filter-sub-area pt-sm-10 pt-xs-10">
                    <h5 className="filter-sub-titel">Size</h5>
                    <div className="size-checkbox">
                      <form action="#">
                        <ul>
                          <li>
                            <input type="checkbox" name="product-size" />
                            <Link to="#">S (3)</Link>
                          </li>
                          <li>
                            <input type="checkbox" name="product-size" />
                            <Link to="#">M (3)</Link>
                          </li>
                          <li>
                            <input type="checkbox" name="product-size" />
                            <Link to="#">L (3)</Link>
                          </li>
                          <li>
                            <input type="checkbox" name="product-size" />
                            <Link to="#">XL (3)</Link>
                          </li>
                        </ul>
                      </form>
                    </div>
                  </div>

                  <div className="filter-sub-area pt-sm-10 pt-xs-10">
                    <h5 className="filter-sub-titel">Color</h5>
                    <div className="color-categoriy">
                      <form action="#">
                        <ul>
                          <li>
                            <span className="white"></span>
                            <Link to="#">White (1)</Link>
                          </li>
                          <li>
                            <span className="black"></span>
                            <Link to="#">Black (1)</Link>
                          </li>
                          <li>
                            <span className="Orange"></span>
                            <Link to="#">Orange (3) </Link>
                          </li>
                          <li>
                            <span className="Blue"></span>
                            <Link to="#">Blue (2) </Link>
                          </li>
                        </ul>
                      </form>
                    </div>
                  </div>

                  <div className="filter-sub-area pt-sm-10 pb-sm-15 pb-xs-15">
                    <h5 className="filter-sub-titel">Dimension</h5>
                    <div className="categori-checkbox">
                      <form action="#">
                        <ul>
                          <li>
                            <input type="checkbox" name="product-categori" />
                            <Link to="#">40x60cm (6)</Link>
                          </li>
                          <li>
                            <input type="checkbox" name="product-categori" />
                            <Link to="#">60x90cm (6)</Link>
                          </li>
                          <li>
                            <input type="checkbox" name="product-categori" />
                            <Link to="#">80x120cm (6)</Link>
                          </li>
                        </ul>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="sidebar-categores-box mb-sm-0 mb-xs-0">
                  <div className="sidebar-title">
                    <h2>Laptop</h2>
                  </div>
                  <div className="category-tags">
                    <ul>
                      <li>
                        <Link to="# ">Devita</Link>
                      </li>
                      <li>
                        <Link to="# ">Cameras</Link>
                      </li>
                      <li>
                        <Link to="# ">Sony</Link>
                      </li>
                      <li>
                        <Link to="# ">Computer</Link>
                      </li>
                      <li>
                        <Link to="# ">Big Sale</Link>
                      </li>
                      <li>
                        <Link to="# ">Accessories</Link>
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
  );
}

export default ShopLeftSideBar;
