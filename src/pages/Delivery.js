import Footer from "../component/Footer";
import LoginForm from "../component/LoginForm";
import RegisterForm from "../component/RegisterForm";

const Delivery = () => {
  return (
    <div>
      <section
        className="main-header"
        style={{ backgroundImage: "url(assets/images/gallery-2.jpg)" }}
      >
        <header>
          <div className="container text-center">
            <h2 className="h2 title">Checkout</h2>
            <ol className="breadcrumb breadcrumb-inverted">
              <li>
                <a href="/">
                  <span className="icon icon-home" />
                </a>
              </li>
              <li>
                <a href="/checkout">Cart items</a>
              </li>
              <li>
                <a className="active" href="/delivery">
                  Delivery
                </a>
              </li>
              <li>
                <a href="/payment">Payment</a>
              </li>
              <li>
                <a href="/receipt">Receipt</a>
              </li>
            </ol>
          </div>
        </header>
      </section>
      {/* ========================  Step wrapper ======================== */}
      <div className="step-wrapper">
        <div className="container">
          <div className="stepper">
            <ul className="row">
              <li className="col-md-3 active">
                <span data-text="Cart items" />
              </li>
              <li className="col-md-3 active">
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
      {/* ========================  Checkout ======================== */}
      <section className="checkout">
        <div className="container">
          <header className="hidden">
            <h3 className="h3 title">Checkout - Step 2</h3>
          </header>
          {/* ========================  Cart navigation ======================== */}
          <div className="clearfix">
            <div className="row">
              <div className="col-xs-6">
                <a href="checkout-1.html" className="btn btn-clean-dark">
                  <span className="icon icon-chevron-left" /> Back to cart
                </a>
              </div>
              <div className="col-xs-6 text-right">
                <a href="/payment" className="btn btn-main">
                  <span className="icon icon-cart" /> Go to payment
                </a>
              </div>
            </div>
          </div>
          {/* ========================  Delivery ======================== */}
          <div className="cart-wrapper">
            <div className="note-block">
              <div className="row">
                {/* === left content === */}
                <div className="col-md-6">
                  {/* === login-wrapper === */}
                  <div className="login-wrapper">
                    <div className="white-block">
                      {/*signin*/}
                      <LoginForm />
                      {/*/signin*/}
                      {/*signup*/}
                      <RegisterForm />
                      {/*/signup*/}
                    </div>
                  </div>{" "}
                  {/*/login-wrapper*/}
                </div>{" "}
                {/*/col-md-6*/}
                {/* === right content === */}
                <div className="col-md-6">
                  <div className="white-block">
                    <div className="h4">Choose delivery</div>
                    <hr />
                    <span className="checkbox">
                      <input
                        type="radio"
                        id="deliveryId1"
                        name="deliveryOption"
                      />
                      <label htmlFor="deliveryId1">
                        Delivery 1-3 Days - <strong>₹50,00</strong>
                      </label>
                    </span>
                    <span className="checkbox">
                      <input
                        type="radio"
                        id="deliveryId2"
                        name="deliveryOption"
                      />
                      <label htmlFor="deliveryId2">
                        Fast delivery - <strong>₹199,00</strong>
                      </label>
                    </span>
                    <span className="checkbox">
                      <input
                        type="radio"
                        id="deliveryId3"
                        name="deliveryOption"
                      />
                      <label htmlFor="deliveryId3">
                        Pick up in the store - <strong>Free</strong>
                      </label>
                    </span>
                    <hr />
                    <div className="clearfix">
                      <p>
                        A frequently overlooked, powerful fulfillment option is
                        offering local pick-up. If you have a physical location
                        and can allow your customers to forgo paying shipping
                        costs altogether, you should!
                      </p>{" "}
                      <p>
                        <strong>Benefits:</strong>
                      </p>
                      <ul>
                        <li>Avoid both shipping and packaging costs</li>
                        <li>
                          Develop a face-to-face relationship with your
                          customers
                        </li>
                        <li>
                          Potential for additional purchases while customers are
                          at your store
                        </li>
                      </ul>
                      <p>
                        <strong>Challenges:</strong>
                      </p>
                      <ul>
                        <li>
                          Limited business hours can sometimes make it difficult
                          to coordinate pickup
                        </li>
                        <li>
                          Shoppers who cross state lines or ZIP codes may not
                          know the sales tax rates in your area
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  <a href="product.html">
                    <img src="assets/images/product-1.png" alt="" />
                  </a>
                </div>
                <div className="title">
                  <div className="h4">
                    <a href="product.html">Green corner</a>
                  </div>
                  <div>Green corner</div>
                </div>
                <div className="quantity">
                  <strong>1</strong>
                </div>
                <div className="price">
                  <span className="final h3">₹ 1,999</span>
                  <span className="discount">₹ 2,999</span>
                </div>
              </div>
              <div className="cart-block cart-block-item clearfix">
                <div className="image">
                  <a href="product.html">
                    <img src="assets/images/product-2.png" alt="" />
                  </a>
                </div>
                <div className="title">
                  <div className="h4">
                    <a href="product.html">Green corner</a>
                  </div>
                  <div>Green corner</div>
                </div>
                <div className="quantity">
                  <strong>1</strong>
                </div>
                <div className="price">
                  <span className="final h3">₹ 1,999</span>
                  <span className="discount">₹ 2,999</span>
                </div>
              </div>
              <div className="cart-block cart-block-item clearfix">
                <div className="image">
                  <a href="product.html">
                    <img src="assets/images/product-3.png" alt="" />
                  </a>
                </div>
                <div className="title">
                  <div className="h4">
                    <a href="product.html">Green corner</a>
                  </div>
                  <div>Green corner</div>
                </div>
                <div className="quantity">
                  <strong>1</strong>
                </div>
                <div className="price">
                  <span className="final h3">₹ 1,999</span>
                  <span className="discount">₹ 2,999</span>
                </div>
              </div>
              <div className="cart-block cart-block-item clearfix">
                <div className="image">
                  <a href="product.html">
                    <img src="assets/images/product-3.png" alt="" />
                  </a>
                </div>
                <div className="title">
                  <div className="h4">
                    <a href="product.html">Green corner</a>
                  </div>
                  <div>Green corner</div>
                </div>
                <div className="quantity">
                  <strong>1</strong>
                </div>
                <div className="price">
                  <span className="final h3">₹ 1,999</span>
                  <span className="discount">₹ 2,999</span>
                </div>
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
              <div className="cart-block cart-block-footer clearfix">
                <div>
                  <strong>Promo code included!</strong>
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
                <a href="/delivery" className="btn btn-clean-dark">
                  <span className="icon icon-chevron-left" /> Back to cart
                </a>
              </div>
              <div className="col-xs-6 text-right">
                <a href="/payment" className="btn btn-main">
                  <span className="icon icon-cart" /> Go to payment
                </a>
              </div>
            </div>
          </div>
        </div>{" "}
        {/*/container*/}
      </section>
    </div>
  );
};
export default Delivery;
