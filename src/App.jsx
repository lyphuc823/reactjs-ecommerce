import "./App.css";
import AboutUs from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Modal from "./pages/Modal";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Contact from "./pages/Contact";
import LoginRegister from "./pages/LoginRegister";
import Page404 from "./pages/Page404";
import ShopLeftSideBar from "./pages/ShopLeftSideBar";
import ShoppingCart from "./pages/ShoppingCart";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login-register" element={<LoginRegister />} />
          <Route path="/shop-left-sidebar" element={<ShopLeftSideBar />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Modal />
        <Footer />
      </Router>
    </>
  );
}

export default App;
