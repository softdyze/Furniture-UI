import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      {/* ========================  Header content ======================== */}
      <section className="header-content">
        <div className="owl-slider">
          {/* === slide item === */}
          <div
            className="item"
            style={{ backgroundImage: "url(https://www.woodenstreet.com/images/home-new1/banner-1.jpg?v=27)" }}
          >
            <div className="box">
              <div className="container">
                <h2 className="title animated h1" data-animation="fadeInDown">
                  Modern furniture theme
                </h2>
                <div className="animated" data-animation="fadeInUp">
                  Modern &amp; powerfull template. <br /> Clean design &amp;
                  reponsive layout. Google fonts integration
                </div>
                <div className="animated" data-animation="fadeInUp">
                  <a
                    href=""
                    target="_blank"
                    className="btn btn-main"
                  >
                    <i className="icon icon-cart" /> View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* === slide item === */}
          <div
            className="item"
            style={{ backgroundImage: "url(https://www.woodenstreet.com/images/home-new1/banner-2.jpg)" }}
          >
            <div className="box">
              <div className="container">
                <h2 className="title animated h1" data-animation="fadeInDown">
                  Furniture is ready to buy!
                </h2>
                <div className="animated" data-animation="fadeInUp">
                  Unlimited Choices. Unbeatable Prices. Free Shipping.
                </div>
                <div className="animated" data-animation="fadeInUp">
                  Furniture category icon fonts!
                </div>
                <div className="animated" data-animation="fadeInUp">
                  <a href="" className="btn btn-main">
                    Show More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* === slide item === */}
          <div
            className="item"
            style={{ backgroundImage: "url(https://www.woodenstreet.com/images/home-new1/banner-4.jpg?v=27)" }}
          >
            <div className="box">
              <div className="container">
                <h2 className="title animated h1" data-animation="fadeInDown">
                  Very Animate.css Friend.
                </h2>
                <div className="desc animated" data-animation="fadeInUp">
                  Combine with animate.css. Or just use your own!.
                </div>
                <div className="desc animated" data-animation="fadeInUp">
                  Bunch of typography effects.
                </div>
                <div className="animated" data-animation="fadeInUp">
                  <a
                    href=""
                    target="_blank"
                    className="btn btn-main"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/*/owl-slider*/}
      </section>
      {/* ========================  Icons slider ======================== */}
      <section className="owl-icons-wrapper owl-icons-frontpage">
        {/* === header === */}
        <header className="hidden">
          <h2>Product categories</h2>
        </header>
        <div className="container">
          <div className="owl-icons">
            {/* === icon item === */}
            <a href="#">
              <figure>
                <i className="f-icon f-icon-sofa" />
                <figcaption>Sofa</figcaption>
              </figure>
            </a>
            {/* === icon item === */}
            <a href="#">
              <figure>
                <i className="f-icon f-icon-armchair" />
                <figcaption>Armchairs</figcaption>
              </figure>
            </a>
            {/* === icon item === */}
            <a href="#">
              <figure>
                <i className="f-icon f-icon-chair" />
                <figcaption>Chairs</figcaption>
              </figure>
            </a>
            {/* === icon item === */}
            <a href="#">
              <figure>
                <i className="f-icon f-icon-dining-table" />
                <figcaption>Dining tables</figcaption>
              </figure>
            </a>
            {/* === icon item === */}
            <a href="#">
              <figure>
                <i className="f-icon f-icon-media-cabinet" />
                <figcaption>Media storage</figcaption>
              </figure>
            </a>
            {/* === icon item === */}
            <a href="#">
              <figure>
                <i className="f-icon f-icon-table" />
                <figcaption>Tables</figcaption>
              </figure>
            </a>
            {/* === icon item === */}
            <a href="#">
              <figure>
                <i className="f-icon f-icon-bookcase" />
                <figcaption>Bookcase</figcaption>
              </figure>
            </a>
            {/* === icon item === */}
            <a href="#">
              <figure>
                <i className="f-icon f-icon-bedroom" />
                <figcaption>Bedroom</figcaption>
              </figure>
            </a>
            {/* === icon item === */}
            <a href="#">
              <figure>
                <i className="f-icon f-icon-nightstand" />
                <figcaption>Nightstand</figcaption>
              </figure>
            </a>
            {/* === icon item === */}
            <a href="#">
              <figure>
                <i className="f-icon f-icon-children-room" />
                <figcaption>Children room</figcaption>
              </figure>
            </a>
            {/* === icon item === */}
            <a href="#">
              <figure>
                <i className="f-icon f-icon-kitchen" />
                <figcaption>Kitchen</figcaption>
              </figure>
            </a>
            {/* === icon item === */}
            <a href="#">
              <figure>
                <i className="f-icon f-icon-bathroom" />
                <figcaption>Bathroom</figcaption>
              </figure>
            </a>
            {/* === icon item === */}
            <a href="#">
              <figure>
                <i className="f-icon f-icon-wardrobe" />
                <figcaption>Wardrobe</figcaption>
              </figure>
            </a>
            {/* === icon item === */}
            <a href="#">
              <figure>
                <i className="f-icon f-icon-shoe-cabinet" />
                <figcaption>Shoe cabinet</figcaption>
              </figure>
            </a>
            {/* === icon item === */}
            <a href="#">
              <figure>
                <i className="f-icon f-icon-office" />
                <figcaption>Office</figcaption>
              </figure>
            </a>
            {/* === icon item === */}
            <a href="#">
              <figure>
                <i className="f-icon f-icon-bar-set" />
                <figcaption>Bar sets</figcaption>
              </figure>
            </a>
            {/* === icon item === */}
            <a href="#">
              <figure>
                <i className="f-icon f-icon-lightning" />
                <figcaption>Lightning</figcaption>
              </figure>
            </a>
            {/* === icon item === */}
            <a href="#">
              <figure>
                <i className="f-icon f-icon-carpet" />
                <figcaption>Varpet</figcaption>
              </figure>
            </a>
            {/* === icon item === */}
            <a href="#">
              <figure>
                <i className="f-icon f-icon-accessories" />
                <figcaption>Accessories</figcaption>
              </figure>
            </a>
          </div>{" "}
          {/*/owl-icons*/}
        </div>{" "}
        {/*/container*/}
      </section>
      <section className="products">
        <div className="container">
          {/* === header title === */}
          <header>
            <div className="row">
              <div className="col-md-offset-2 col-md-8 text-center">
                <h2 className="title">Popular products</h2>
                <div className="text">
                  <p>Check out our latest collections</p>
                </div>
              </div>
            </div>
          </header>
          <div className="row">
            {/* === product-item === */}
            <div className="col-md-4 col-xs-6">
              <article>
                <div className="info">
                  <span className="add-favorite added">
                    <a
                      href="javascript:void(0);"
                      data-title="Add to favorites"
                      data-title-added="Added to favorites list"
                    >
                      <i className="icon icon-heart" />
                    </a>
                  </span>
                  <span>
                    <a
                      href="#productid1"
                      className="mfp-open"
                      data-title="Quick wiew"
                    >
                      <i className="icon icon-eye" />
                    </a>
                  </span>
                </div>
                <div className="btn btn-add">
                  <i className="icon icon-cart" />
                </div>
                <div className="figure-grid">
                  <div className="image">
                    <a href="#productid1" className="mfp-open">
                      <img
                        src="https://www.woodenstreet.com/images/home-new1/beds-banner.jpg"
                        alt=""
                        width={360}
                      />
                    </a>
                  </div>
                  <div className="text">
                    <h2 className="title h4">
                      {/* <a href="product.html">Green corner</a> */}
                    </h2>
                    <sub>₹ 1499,-</sub>
                    <sup>₹ 1099,-</sup>
                    <span className="description clearfix">
                      Gubergren amet dolor ea diam takimata consetetur facilisis
                      blandit et aliquyam lorem ea duo labore diam sit et
                      consetetur nulla
                    </span>
                  </div>
                </div>
              </article>
            </div>
            {/* === product-item === */}
            <div className="col-md-4 col-xs-6">
              <article>
                <div className="info">
                  <span className="add-favorite">
                    <a
                      href="javascript:void(0);"
                      data-title="Add to favorites"
                      data-title-added="Added to favorites list"
                    >
                      <i className="icon icon-heart" />
                    </a>
                  </span>
                  <span>
                    <a
                      href="#productid1"
                      className="mfp-open"
                      data-title="Quick wiew"
                    >
                      <i className="icon icon-eye" />
                    </a>
                  </span>
                </div>
                <div className="btn btn-add">
                  <i className="icon icon-cart" />
                </div>
                <div className="figure-grid">
                  <div className="image">
                    <a href="#productid1" className="mfp-open">
                      <img
                        src="https://www.woodenstreet.com/images/home-new1/wfh-banner.jpg?v=27"
                        alt=""
                        width={360}
                      />
                    </a>
                  </div>
                  <div className="text">
                    <h2 className="title h4">
                      {/* <a href="product.html">Laura</a> */}
                    </h2>
                    <sub>₹ 3999,-</sub>
                    <sup>₹ 3499,-</sup>
                    <span className="description clearfix">
                      Gubergren amet dolor ea diam takimata consetetur facilisis
                      blandit et aliquyam lorem ea duo labore diam sit et
                      consetetur nulla
                    </span>
                  </div>
                </div>
              </article>
            </div>
            {/* === product-item === */}
            <div className="col-md-4 col-xs-6">
              <article>
                <div className="info">
                  <span className="add-favorite">
                    <a
                      href="javascript:void(0);"
                      data-title="Add to favorites"
                      data-title-added="Added to favorites list"
                    >
                      <i className="icon icon-heart" />
                    </a>
                  </span>
                  <span>
                    <a
                      href="#productid1"
                      className="mfp-open"
                      data-title="Quick wiew"
                    >
                      <i className="icon icon-eye" />
                    </a>
                  </span>
                </div>
                <div className="btn btn-add">
                  <i className="icon icon-cart" />
                </div>
                <div className="figure-grid">
                  <span className="label label-warning">New</span>
                  <div className="image">
                    <a href="#productid1" className="mfp-open">
                      <img
                        src="https://www.woodenstreet.com/images/home-new1/dining-set-banner.jpg?v=27"
                        alt=""
                        width={360}
                      />
                    </a>
                  </div>
                  <div className="text">
                    <h2 className="title h4">
                      {/* <a href="product.html">Nude</a> */}
                    </h2>
                    <sup>₹ 2999,-</sup>
                    <span className="description clearfix">
                      Gubergren amet dolor ea diam takimata consetetur facilisis
                      blandit et aliquyam lorem ea duo labore diam sit et
                      consetetur nulla
                    </span>
                  </div>
                </div>
              </article>
            </div>
            {/* === product-item === */}
            <div className="col-md-4 col-xs-6">
              <article>
                <div className="info">
                  <span className="add-favorite">
                    <a
                      href="javascript:void(0);"
                      data-title="Add to favorites"
                      data-title-added="Added to favorites list"
                    >
                      <i className="icon icon-heart" />
                    </a>
                  </span>
                  <span>
                    <a
                      href="#productid1"
                      className="mfp-open"
                      data-title="Quick wiew"
                    >
                      <i className="icon icon-eye" />
                    </a>
                  </span>
                </div>
                <div className="btn btn-add">
                  <i className="icon icon-cart" />
                </div>
                <div className="figure-grid">
                  <div className="image">
                    <a href="#productid1" className="mfp-open">
                      <img
                        src="https://www.woodenstreet.com/images/home-new1/space-save-banner.jpg?v=27"
                        alt=""
                        width={360}
                      />
                    </a>
                  </div>
                  <div className="text">
                    <h2 className="title h4">
                      {/* <a href="product.html">Aurora</a> */}
                    </h2>
                    <sup>₹ 299,-</sup>
                    <span className="description clearfix">
                      Gubergren amet dolor ea diam takimata consetetur facilisis
                      blandit et aliquyam lorem ea duo labore diam sit et
                      consetetur nulla
                    </span>
                  </div>
                </div>
              </article>
            </div>
            {/* === product-item === */}
            <div className="col-md-4 col-xs-6">
              <article>
                <div className="info">
                  <span className="add-favorite added">
                    <a
                      href="javascript:void(0);"
                      data-title="Add to favorites"
                      data-title-added="Added to favorites list"
                    >
                      <i className="icon icon-heart" />
                    </a>
                  </span>
                  <span>
                    <a
                      href="#productid1"
                      className="mfp-open"
                      data-title="Quick wiew"
                    >
                      <i className="icon icon-eye" />
                    </a>
                  </span>
                </div>
                <div className="btn btn-add">
                  <i className="icon icon-cart" />
                </div>
                <div className="figure-grid">
                  <span className="label label-info">-50%</span>
                  <div className="image">
                    <a href="#productid1" className="mfp-open">
                      <img
                        src="https://www.woodenstreet.com/images/home-new1/wooden-sofa-banner.jpg?v=27"
                        alt=""
                        width={360}
                      />
                    </a>
                  </div>
                  <div className="text">
                    <h2 className="title h4">
                      {/* <a href="product.html">Dining set</a> */}
                    </h2>
                    <sub>₹ 1999,-</sub>
                    <sup>₹ 1499,-</sup>
                    <span className="description clearfix">
                      Gubergren amet dolor ea diam takimata consetetur facilisis
                      blandit et aliquyam lorem ea duo labore diam sit et
                      consetetur nulla
                    </span>
                  </div>
                </div>
              </article>
            </div>
            {/* === product-item === */}
            <div className="col-md-4 col-xs-6">
              <article>
                <div className="info">
                  <span className="add-favorite">
                    <a
                      href="javascript:void(0);"
                      data-title="Add to favorites"
                      data-title-added="Added to favorites list"
                    >
                      <i className="icon icon-heart" />
                    </a>
                  </span>
                  <span>
                    <a
                      href="#productid1"
                      className="mfp-open"
                      data-title="Quick wiew"
                    >
                      <i className="icon icon-eye" />
                    </a>
                  </span>
                </div>
                <div className="btn btn-add">
                  <i className="icon icon-cart" />
                </div>
                <div className="figure-grid">
                  <div className="image">
                    <a href="#productid1" className="mfp-open">
                      <img
                        src="https://www.woodenstreet.com/images/home-new1/dressing-table-banner.jpg?v=27"
                        alt=""
                        width={360}
                      />
                    </a>
                  </div>
                  <div className="text">
                    <h2 className="title h4">
                      {/* <a href="product.html">Seat chair</a> */}
                    </h2>
                    <sup>₹ 896,-</sup>
                    <span className="description clearfix">
                      Gubergren amet dolor ea diam takimata consetetur facilisis
                      blandit et aliquyam lorem ea duo labore diam sit et
                      consetetur nulla
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>{" "}
          {/*/row*/}
          {/* === button more === */}
          <div className="wrapper-more">
            <a href="products-grid.html" className="btn btn-main">
              View store
            </a>
          </div>
          {/* ========================  Product info popup - quick view ======================== */}
          <div className="popup-main mfp-hide" id="productid1">
            {/* === product popup === */}
            <div className="product">
              {/* === popup-title === */}
              <div className="popup-title">
                <div className="h1 title">
                  Laura <small>product category</small>
                </div>
              </div>
              {/* === product gallery === */}
              <div className="owl-product-gallery">
                <img src="assets/images/product-1.png" alt="" width={640} />
                <img src="assets/images/product-2.png" alt="" width={640} />
                <img src="assets/images/product-3.png" alt="" width={640} />
                <img src="assets/images/product-4.png" alt="" width={640} />
              </div>
              {/* === product-popup-info === */}
              <div className="popup-content">
                <div className="product-info-wrapper">
                  <div className="row">
                    {/* === left-column === */}
                    <div className="col-sm-6">
                      <div className="info-box">
                        <strong>Maifacturer</strong>
                        <span>Brand name</span>
                      </div>
                      <div className="info-box">
                        <strong>Materials</strong>
                        <span>Wood, Leather, Acrylic</span>
                      </div>
                      <div className="info-box">
                        <strong>Availability</strong>
                        <span>
                          <i className="fa fa-check-square-o" /> in stock
                        </span>
                      </div>
                    </div>
                    {/* === right-column === */}
                    <div className="col-sm-6">
                      <div className="info-box">
                        <strong>Available Colors</strong>
                        <div className="product-colors clearfix">
                          <span className="color-btn color-btn-red" />
                          <span className="color-btn color-btn-blue checked" />
                          <span className="color-btn color-btn-green" />
                          <span className="color-btn color-btn-gray" />
                          <span className="color-btn color-btn-biege" />
                        </div>
                      </div>
                      <div className="info-box">
                        <strong>Choose size</strong>
                        <div className="product-colors clearfix">
                          <span className="color-btn color-btn-biege">S</span>
                          <span className="color-btn color-btn-biege checked">
                            M
                          </span>
                          <span className="color-btn color-btn-biege">XL</span>
                          <span className="color-btn color-btn-biege">XXL</span>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/*/row*/}
                </div>{" "}
                {/*/product-info-wrapper*/}
              </div>{" "}
              {/*/popup-content*/}
              {/* === product-popup-Footer === */}
              <div className="popup-table">
                <div className="popup-cell">
                  <div className="price">
                    <span className="h3">
                      ₹ 1999,00 <small>₹ 2999,00</small>
                    </span>
                  </div>
                </div>
                <div className="popup-cell">
                  <div className="popup-buttons">
                    <a href="product.html">
                      <span className="icon icon-eye" />{" "}
                      <span className="hidden-xs">View more</span>
                    </a>
                    <a href="javascript:void(0);">
                      <span className="icon icon-cart" />{" "}
                      <span className="hidden-xs">Buy</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/*/product*/}
          </div>{" "}
          {/*popup-main*/}
        </div>{" "}
        {/*/container*/}
      </section>
      <section className="stretcher-wrapper">
        {/* === stretcher header === */}
        <header className="hidden">
          {/*remove class 'hidden'' to show section header */}
          <div className="container">
            <div className="row">
              <div className="col-md-offset-2 col-md-8 text-center">
                <h1 className="h2 title">Popular categories</h1>
                <div className="text">
                  <p>
                    Whether you are changing your home, or moving into a new
                    one, you will find a huge selection of quality living room
                    furniture, bedroom furniture, dining room furniture and the
                    best value at Furniture factory
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* === stretcher === */}
        <ul className="stretcher">
          {/* === stretcher item === */}
          <li
            className="stretcher-item"
            style={{ backgroundImage: "url(https://www.woodsgenie.in/cdn/shop/products/319518100_3516360421929702_135548783965565448_n.jpg?v=1682159319&width=713)" }}
          >
            {/*logo-item*/}
            <div className="stretcher-logo">
              <div className="text">
                <span className="f-icon f-icon-bedroom" />
                <span className="text-intro">Bedroom</span>
              </div>
            </div>
            {/*main text*/}
            <figure>
              <h4>Modern furnishing projects</h4>
              <figcaption>New furnishing ideas</figcaption>
            </figure>
            {/*anchor*/}
            <a href="#">Anchor link</a>
          </li>
          {/* === stretcher item === */}
          <li
            className="stretcher-item"
            style={{ backgroundImage: "url(https://m.media-amazon.com/images/I/71JkIqej5lL._SX522_.jpg)" }}
          >
            {/*logo-item*/}
            <div className="stretcher-logo">
              <div className="text">
                <span className="f-icon f-icon-sofa" />
                <span className="text-intro">Living room</span>
              </div>
            </div>
            {/*main text*/}
            <figure>
              <h4>Furnishing and complements</h4>
              <figcaption>Discover the design table collection</figcaption>
            </figure>
            {/*anchor*/}
            <a href="#">Anchor link</a>
          </li>
          {/* === stretcher item === */}
          <li
            className="stretcher-item"
            style={{ backgroundImage: "url(https://m.media-amazon.com/images/I/61sNtx1yICL._SL1176_.jpg)" }}
          >
            {/*logo-item*/}
            <div className="stretcher-logo">
              <div className="text">
                <span className="f-icon f-icon-office" />
                <span className="text-intro">Office</span>
              </div>
            </div>
            {/*main text*/}
            <figure>
              <h4>Which is Best for Your Home</h4>
              <figcaption>Wardrobes vs Walk-In Closets</figcaption>
            </figure>
            {/*anchor*/}
            <a href="#">Anchor link</a>
          </li>
          {/* === stretcher item === */}
          <li
            className="stretcher-item"
            style={{ backgroundImage: "url(https://vibecrafts.com/cdn/shop/products/vibecrafts-the-autumn-tree-led-rectangular-shape-bathroom-mirror-WMVC_817_1.jpg?v=1678177487)" }}
          >
            {/*logo-item*/}
            <div className="stretcher-logo">
              <div className="text">
                <span className="f-icon f-icon-bathroom" />
                <span className="text-intro">Bathroom</span>
              </div>
            </div>
            {/*main text*/}
            <figure>
              <h4>Keeping Things Minimal</h4>
              <figcaption>Creating Your Very Own Bathroom</figcaption>
            </figure>
            {/*anchor*/}
            <a href="#">Anchor link</a>
          </li>
          {/* === stretcher item more=== */}
          <li className="stretcher-item more">
            <div className="more-icon">
              <span data-title-show="Show more" data-title-hide="+" />
            </div>
            <a href="#" />
          </li>
        </ul>
      </section>
      <section className="instagram">
        {/* === instagram header === */}
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-offset-2 col-md-8 text-center">
                <h2 className="h2 title">
                  Follow us <i className="fa fa-instagram fa-2x" /> Instagram{" "}
                </h2>
                <div className="text">
                  <p>@InstaFurnitureFactory</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* === instagram gallery === */}
        <div className="gallery clearfix">
          <a className="item" href="#">
            <img src="assets/images/square-1.jpg" alt="Alternate Text" />
          </a>
          <a className="item" href="#">
            <img src="assets/images/square-2.jpg" alt="Alternate Text" />
          </a>
          <a className="item" href="#">
            <img src="assets/images/square-3.jpg" alt="Alternate Text" />
          </a>
          <a className="item" href="#">
            <img src="assets/images/square-4.jpg" alt="Alternate Text" />
          </a>
          <a className="item" href="#">
            <img src="assets/images/square-5.jpg" alt="Alternate Text" />
          </a>
          <a className="item" href="#">
            <img src="assets/images/square-6.jpg" alt="Alternate Text" />
          </a>
        </div>{" "}
        {/*/gallery*/}
      </section>
      <Footer />
    </div>
  );
};

export default Home;
