import React from 'react';
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Offers from "./pages/Offers";
import LoginRegister from "./pages/LoginRegister";
import Profile from "./pages/Profile";
import ProductGrid from "./pages/ProductGrid";
import ProductList from "./pages/ProductList";
import Checkout from "./pages/Checkout";
import Delivery from "./pages/Delivery";
import Payment from "./pages/Payment";
import Error from "./pages/Error";
import Receipt from "./pages/Receipt";
// import HelpFAQ from './pages/HelpFAQ';



function App() {
  return (
    <>
      <Router>
        <div class="wrapper">
          <Navbar />

          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login-register" element={<LoginRegister />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/product-grid" element={<ProductGrid />} />
              <Route path="/product-list" element={<ProductList />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/receipt" element={<Receipt/>} />
              {/* <Route path="/helpfaq" element={<HelpFAQ/>} /> */}
               <Route path="/contact" element={<Contact />} />
               <Route path="/error" element={< Error/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
