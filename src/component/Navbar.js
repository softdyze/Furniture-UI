import { Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";
const Navbar = () => {
  return (
    <nav className="navbar-fixed">
      <div className="container">
        {/* ==========  Top navigation ========== */}
        <div className="navigation navigation-top clearfix">
          <ul>
            <li>
              <Link to="/login-register" className="open-login">
                <i className="icon icon-user" />
              </Link>
              {/* <a href="javascript:void(0);" onClick={() => window.location.href()} >
                
              </a> */}
            </li>
            <li>
              <a href="javascript:void(0);" className="open-search">
                <i className="icon icon-magnifier" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" className="open-cart">
                <i className="icon icon-cart" /> <span>3</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" className="wa-button">
                <ReactWhatsapp number="919110465068" message="hello World !">
                  <img src="/assets/images/whatsapp.png" alt="whatsapp" />
                </ReactWhatsapp>
              </a>
            </li>
          </ul>
        </div>{" "}
        {/*/navigation-top*/}
        {/* ==========  Main navigation ========== */}
        <div className="navigation navigation-main">
          {/* Setup your logo here*/}
          <a href="/" className="logo">
            <img src="assets/images/logo.png" alt="" />
          </a>
          {/* Mobile toggle menu */}
          <a href="#" className="open-menu">
            <i className="icon icon-menu" />
          </a>
          {/* Convertible menu (mobile/desktop)*/}
          <div className="floating-menu">
            {/* Mobile toggle menu trigger*/}
            <div className="close-menu-wrapper">
              <span className="close-menu">
                <i className="icon icon-cross" />
              </span>
            </div>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              {/* Multi-content dropdown */}
              <li>
                <a href="/product-grid">Product</a>
              </li>
              {/* <li>
                <a href="#">
                  Product{" "}
                  <span className="open-dropdown">
                    <i className="fa fa-angle-down" />
                  </span>
                </a>
                <div className="navbar-dropdown">
                  <div className="navbar-box">
                    <div className="box-2">
                      <div className="box clearfix">
                        <div className="row">
                          <div className="clearfix">
                            <div className="col-md-3">
                              <ul>
                                <li className="label">Seating</li>
                                <li>
                                  <a href="javascript:void(0);">Benches</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    Submenu{" "}
                                    <span className="label label-warning">
                                      New
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">Chaises</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">Recliners</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-3">
                              <ul>
                                <li className="label">Storage</li>
                                <li>
                                  <a href="javascript:void(0);">Bockcases</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">Closets</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">Wardrobes</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    Dressers{" "}
                                    <span className="label label-success">
                                      Trending
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">Sideboards </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-3">
                              <ul>
                                <li className="label">Tables</li>
                                <li>
                                  <a href="javascript:void(0);">Consoles</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">Desks</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    Dining tables
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    Occasional tables
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-3">
                              <ul>
                                <li className="label">Chairs</li>
                                <li>
                                  <a href="javascript:void(0);">
                                    Dining Chairs
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    Office Chairs
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    Lounge Chairs{" "}
                                    <span className="label label-warning">
                                      Offer
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">Stools</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="clearfix">
                            <div className="col-md-3">
                              <ul>
                                <li className="label">Kitchen</li>
                                <li>
                                  <a href="javascript:void(0);">
                                    Kitchen types
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    Kitchen elements{" "}
                                    <span className="label label-info">
                                      50%
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">Bars</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    Wall decoration
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-3">
                              <ul>
                                <li className="label">Accessories</li>
                                <li>
                                  <a href="javascript:void(0);">Coat Racks</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    Lazy bags{" "}
                                    <span className="label label-success">
                                      Info
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-3">
                              <ul>
                                <li className="label">Beds</li>
                                <li>
                                  <a href="javascript:void(0);">Beds</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">Sofabeds</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-3">
                              <ul>
                                <li className="label">Entertainment</li>
                                <li>
                                  <a href="javascript:void(0);">
                                    Wall units{" "}
                                    <span className="label label-warning">
                                      Popular
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">Media sets</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">Decoration</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>{" "}                     
                    </div>{" "}                  
                  </div>{" "}               
                </div>{" "}               
              </li>           */}
              <li>
                <a href="#">
                  Shops{" "}
                  <span className="open-dropdown">
                    <i className="fa fa-angle-down" />
                  </span>
                </a>
                <div className="navbar-dropdown navbar-dropdown-single">
                  <div className="navbar-box">
                    {/* box-2 (without 'box-1', box-2 will be displayed as full width)*/}
                    <div className="box-2">
                      <div className="box clearfix">
                        <ul>
                          <li className="label">Shop</li>
                          <li>
                            <a href="/product-grid">Products grid</a>
                          </li>
                          <li>
                            <a href="product-list">Products list</a>
                          </li>
                          {/* <li>
                            <a href="category.html">Products intro</a>
                          </li>
                          <li>
                            <a href="products-topbar.html">Products topbar</a>
                          </li>
                          <li>
                            <a href="product.html">Product overview</a>
                          </li> */}
                        </ul>
                        {/* <ul>
                          <li className="label">Shop Isotope</li>
                          <li>
                            <a href="products-grid-isotope.html">
                              Products filters{" "}
                              <span className="label label-warning">New</span>
                            </a>
                          </li>
                          <li>
                            <a href="products-topbar-isotope.html">
                              Products topbar{" "}
                              <span className="label label-warning">New</span>
                            </a>
                          </li>
                        </ul> */}
                        <ul>
                          <li className="label">Checkout</li>
                          <li>
                            <a href="/Checkout">Checkout - Cart items</a>
                          </li>
                          <li>
                            <a href="/delivery">Checkout - Delivery</a>
                          </li>
                          <li>
                            <a href="/payment">Checkout - Payment</a>
                          </li>
                          <li>
                            <a href="/receipt">Checkout - Receipt</a>
                          </li>

                          <li>
                            <a href="/Error">Error - Error</a>
                          </li>
                        </ul>
                      </div>{" "}
                      {/*/box*/}
                    </div>{" "}
                    {/*/box-2*/}
                  </div>{" "}
                  {/*/navbar-box*/}
                </div>{" "}
                {/*/navbar-dropdown*/}
              </li>
              <li>
                <a href="/offers">Offers</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
              <li>
                <a href="/profile">Profile</a>
              </li>
              {/* <li>
                <a href="/helpfaq">Help & FAQ</a>
              </li> */}
            </ul>
          </div>{" "}
          {/*/floating-menu*/}
        </div>{" "}
        {/*/navigation-main*/}
        {/* ==========  Search wrapper ========== */}
        <div className="search-wrapper">
          {/* Search form */}
          <input className="form-control" placeholder="Search..." />
          <button className="btn btn-main btn-search">Go!</button>
          {/* Search results - live search */}
          <div className="search-results">
            <div className="search-result-items">
              <div className="title h4">
                Products{" "}
                <a href="#" className="btn btn-clean-dark btn-xs">
                  View all
                </a>
              </div>
              <ul>
                <li>
                  <a href="#">
                    <span className="id">42563</span>{" "}
                    <span className="name">Green corner</span>{" "}
                    <span className="category">Sofa</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="id">42563</span>{" "}
                    <span className="name">Laura</span>{" "}
                    <span className="category">Armchairs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="id">42563</span>{" "}
                    <span className="name">Nude</span>{" "}
                    <span className="category">Dining tables</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="id">42563</span>{" "}
                    <span className="name">Aurora</span>{" "}
                    <span className="category">Nightstands</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="id">42563</span>{" "}
                    <span className="name">Dining set</span>{" "}
                    <span className="category">Kitchen</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="id">42563</span>{" "}
                    <span className="name">Seat chair</span>{" "}
                    <span className="category">Bar sets</span>
                  </a>
                </li>
              </ul>
            </div>{" "}
            {/*/search-result-items*/}
            <div className="search-result-items">
              <div className="title h4">
                Blog{" "}
                <a href="#" className="btn btn-clean-dark btn-xs">
                  View all
                </a>
              </div>
              <ul>
                <li>
                  <a href="#">
                    <span className="id">01 Jan</span>{" "}
                    <span className="name">
                      Creating the Perfect Gallery Wall{" "}
                    </span>{" "}
                    <span className="category">Interior ideas</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="id">12 Jan</span>{" "}
                    <span className="name">
                      Making the Most Out of Your Kids Old Bedroom
                    </span>{" "}
                    <span className="category">Interior ideas</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="id">28 Dec</span>{" "}
                    <span className="name">
                      Have a look at our new projects!
                    </span>{" "}
                    <span className="category">Modern design</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="id">31 Sep</span>{" "}
                    <span className="name">
                      Decorating When You're Starting Out or Starting Over
                    </span>{" "}
                    <span className="category">Best of 2017</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="id">22 Sep</span>{" "}
                    <span className="name">
                      The 3 Tricks that Quickly Became Rules
                    </span>{" "}
                    <span className="category">Tips for you</span>
                  </a>
                </li>
              </ul>
            </div>{" "}
            {/*/search-result-items*/}
          </div>{" "}
          {/*/search-results*/}
        </div>
        {/* ==========  Login wrapper ========== */}
        <div className="login-wrapper">
          <form>
            <div className="h4">Sign in</div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <a href="#forgotpassword" className="open-popup">
                Forgot password?
              </a>
              <a href="#createaccount" className="open-popup">
                Don't have an account?
              </a>
            </div>
            <button type="submit" className="btn btn-block btn-main">
              Submit
            </button>
          </form>
        </div>
        {/* ==========  Cart wrapper ========== */}
        <div className="cart-wrapper">
          <div className="checkout">
            <div className="clearfix">
              {/*cart item*/}
              <div className="row">
                <div className="cart-block cart-block-item clearfix">
                  <div className="image">
                    <a href="product.html">
                      <img src="assets/images/product-1.png" alt="" />
                    </a>
                  </div>
                  <div className="title">
                    <div>
                      <a href="product.html">Green corner</a>
                    </div>
                    <small>Green corner</small>
                  </div>
                  <div className="quantity">
                    <input
                      type="number"
                      defaultValue={2}
                      className="form-control form-quantity"
                    />
                  </div>
                  <div className="price">
                    <span className="final">₹ 1,999</span>
                    <span className="discount">₹ 2,999</span>
                  </div>
                  {/*delete-this-item*/}
                  <span className="icon icon-cross icon-delete" />
                </div>
                {/*cart item*/}
                <div className="cart-block cart-block-item clearfix">
                  <div className="image">
                    <a href="product.html">
                      <img src="assets/images/product-2.png" alt="" />
                    </a>
                  </div>
                  <div className="title">
                    <div>
                      <a href="product.html">Green corner</a>
                    </div>
                    <small>Green corner</small>
                  </div>
                  <div className="quantity">
                    <input
                      type="number"
                      defaultValue={2}
                      className="form-control form-quantity"
                    />
                  </div>
                  <div className="price">
                    <span className="final">₹ 1,999</span>
                    <span className="discount">₹ 2,999</span>
                  </div>
                  {/*delete-this-item*/}
                  <span className="icon icon-cross icon-delete" />
                </div>
                {/*cart item*/}
                <div className="cart-block cart-block-item clearfix">
                  <div className="image">
                    <a href="product.html">
                      <img src="assets/images/product-3.png" alt="" />
                    </a>
                  </div>
                  <div className="title">
                    <div>
                      <a href="product.html">Green corner</a>
                    </div>
                    <small>Green corner</small>
                  </div>
                  <div className="quantity">
                    <input
                      type="number"
                      defaultValue={2}
                      className="form-control form-quantity"
                    />
                  </div>
                  <div className="price">
                    <span className="final">₹ 1,999</span>
                    <span className="discount">₹ 2,999</span>
                  </div>
                  {/*delete-this-item*/}
                  <span className="icon icon-cross icon-delete" />
                </div>
                {/*cart item*/}
                <div className="cart-block cart-block-item clearfix">
                  <div className="image">
                    <a href="product.html">
                      <img src="assets/images/product-4.png" alt="" />
                    </a>
                  </div>
                  <div className="title">
                    <div>
                      <a href="product.html">Green corner</a>
                    </div>
                    <small>Green corner</small>
                  </div>
                  <div className="quantity">
                    <input
                      type="number"
                      defaultValue={2}
                      className="form-control form-quantity"
                    />
                  </div>
                  <div className="price">
                    <span className="final">₹ 1,999</span>
                    <span className="discount">₹ 2,999</span>
                  </div>
                  {/*delete-this-item*/}
                  <span className="icon icon-cross icon-delete" />
                </div>
              </div>
              <hr />
              {/*cart prices */}
              <div className="clearfix">
                <div className="cart-block cart-block-footer clearfix">
                  <div>
                    <strong>Discount 15%</strong>
                  </div>
                  <div>
                    <span>₹ 159,00</span>
                  </div>
                </div>
                <div className="cart-block cart-block-footer clearfix">
                  <div>
                    <strong>Shipping</strong>
                  </div>
                  <div>
                    <span>₹ 30,00</span>
                  </div>
                </div>
                <div className="cart-block cart-block-footer clearfix">
                  <div>
                    <strong>VAT</strong>
                  </div>
                  <div>
                    <span>₹ 59,00</span>
                  </div>
                </div>
              </div>
              <hr />
              {/*cart final price */}
              <div className="clearfix">
                <div className="cart-block cart-block-footer clearfix">
                  <div>
                    <strong>Total</strong>
                  </div>
                  <div>
                    <div className="h4 title">₹ 1259,00</div>
                  </div>
                </div>
              </div>
              {/*cart navigation */}
              <div className="cart-block-buttons clearfix">
                <div className="row">
                  <div className="col-xs-6">
                    <a href="/product-list" className="btn btn-clean-dark">
                      Continue shopping
                    </a>
                  </div>
                  <div className="col-xs-6 text-right">
                    <a href="/checkout" className="btn btn-main">
                      <span className="icon icon-cart" /> Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/*/checkout*/}
        </div>{" "}
        {/*/cart-wrapper*/}
      </div>{" "}
      {/*/container*/}
    </nav>
  );
};

export default Navbar;
