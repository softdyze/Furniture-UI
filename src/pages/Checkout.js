import Footer from "../component/Footer";


const Checkout = () => {
    return(
        <div>
        <section className="main-header" style={{backgroundImage: 'url(assets/images/gallery-2.jpg)'}}>
          <header>
            <div className="container text-center">
              <h2 className="h2 title">Checkout</h2>
              <ol className="breadcrumb breadcrumb-inverted">
              <li><a href="/"><span className="icon icon-home" /></a></li>
              <li><a className="active" href="/checkout">Cart items</a></li>
              <li><a href="/delivery">Delivery</a></li>
              <li><a href="/payment">Payment</a></li>
              <li><a href="/receipt">Receipt</a></li>
            </ol>
            </div>
          </header>
        </section>
        {/* ========================  Checkout ======================== */}
        <div className="step-wrapper">
          <div className="container">
            <div className="stepper">
              <ul className="row">
                <li className="col-md-3 active">
                  <span data-text="Cart items" />
                </li>
                <li className="col-md-3">
                  <span data-text="Delivery" />
                </li>
                <li className="col-md-3">
                  <span data-text="Payment" />
                </li>
                <li className="col-md-3">
                  <span data-text="Receipt" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="checkout">
          <div className="container">
            <header className="hidden">
              <h3 className="h3 title">Checkout - Step 1</h3>
            </header>
            {/* ========================  Cart wrapper ======================== */}
            <div className="cart-wrapper">
              {/*cart header */}
              <div className="cart-block cart-block-header clearfix">
                <div>
                  <span>Product</span>
                </div>
                <div>
                  <span>&nbsp;</span>
                </div>
                <div>
                  <span>Quantity</span>
                </div>
                <div className="text-right">
                  <span>Price</span>
                </div>
              </div>
              {/*cart items*/}
              <div className="clearfix">
                <div className="cart-block cart-block-item clearfix">
                  <div className="image">
                    <a href="product.html"><img src="assets/images/product-1.png" alt="" /></a>
                  </div>
                  <div className="title">
                    <div className="h4"><a href="product.html">Green corner</a></div>
                    <div>Green corner</div>
                  </div>
                  <div className="quantity">
                    <input type="number" defaultValue={2} className="form-control form-quantity" />
                  </div>
                  <div className="price">
                    <span className="final h3">₹ 1,999</span>
                    <span className="discount">₹ 2,999</span>
                  </div>
                  {/*delete-this-item*/}
                  <span className="icon icon-cross icon-delete" />
                </div>
                <div className="cart-block cart-block-item clearfix">
                  <div className="image">
                    <a href="product.html"><img src="assets/images/product-2.png" alt="" /></a>
                  </div>
                  <div className="title">
                    <div className="h4"><a href="product.html">Green corner</a></div>
                    <div>Green corner</div>
                  </div>
                  <div className="quantity">
                    <input type="number" defaultValue={2} className="form-control form-quantity" />
                  </div>
                  <div className="price">
                    <span className="final h3">₹ 1,999</span>
                    <span className="discount">₹ 2,999</span>
                  </div>
                  {/*delete-this-item*/}
                  <span className="icon icon-cross icon-delete" />
                </div>
                <div className="cart-block cart-block-item clearfix">
                  <div className="image">
                    <a href="product.html"><img src="assets/images/product-3.png" alt="" /></a>
                  </div>
                  <div className="title">
                    <div className="h4"><a href="product.html">Green corner</a></div>
                    <div>Green corner</div>
                  </div>
                  <div className="quantity">
                    <input type="number" defaultValue={2} className="form-control form-quantity" />
                  </div>
                  <div className="price">
                    <span className="final h3">₹ 1,999</span>
                    <span className="discount">₹ 2,999</span>
                  </div>
                  {/*delete-this-item*/}
                  <span className="icon icon-cross icon-delete" />
                </div>
                <div className="cart-block cart-block-item clearfix">
                  <div className="image">
                    <a href="product.html"><img src="assets/images/product-3.png" alt="" /></a>
                  </div>
                  <div className="title">
                    <div className="h4"><a href="product.html">Green corner</a></div>
                    <div>Green corner</div>
                  </div>
                  <div className="quantity">
                    <input type="number" defaultValue={2} className="form-control form-quantity" />
                  </div>
                  <div className="price">
                    <span className="final h3">₹ 1,999</span>
                    <span className="discount">₹ 2,999</span>
                  </div>
                  {/*delete-this-item*/}
                  <span className="icon icon-cross icon-delete" />
                </div>
              </div>
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
              {/*cart final price */}
              <div className="clearfix">
                <div className="cart-block cart-block-footer cart-block-footer-price clearfix">
                  <div>
                    <span className="checkbox">
                      <input type="checkbox" id="couponCodeID" />
                      <label htmlFor="couponCodeID">Promo code</label>
                      <input type="text" className="form-control form-coupon" defaultValue placeholder="Enter your coupon code" />
                    </span>
                  </div>
                  <div>
                    <div className="h2 title">₹ 1259,00</div>
                  </div>
                </div>
              </div>
            </div>
            {/* ========================  Cart navigation ======================== */}
            <div className="clearfix">
              <div className="row">
                <div className="col-xs-6">
                  <a href="/" className="btn btn-clean-dark"><span className="icon icon-chevron-left" /> Shop more</a>
                </div>
                <div className="col-xs-6 text-right">
                  <a href="/delivery" className="btn btn-main"><span className="icon icon-cart" /> Proceed to delivery</a>
                </div>
              </div>
            </div>
          </div> {/*/container*/}
        </section>
        <Footer/>
      </div>

    );
};
export default Checkout ; 