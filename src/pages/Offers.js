 
import Footer from "../component/Footer";

const Offers = () => {
  return (
    <div>
      <section
        className="main-header"
        style={{ backgroundImage: "url(assets/images/gallery-3.jpg)" }}
      >
        <header>
          <div className="container">
            <h1 className="h2 title">Shop</h1>
            <ol className="breadcrumb breadcrumb-inverted">
              <li>
                <a href="index.html">
                  <span className="icon icon-home" />
                </a>
              </li>
              <li>
                <a href="/product-grid">Product Category</a>
              </li>
              <li>
                <a className="active" href="/product-list">
                  Product Sub-category
                </a>
              </li>
            </ol>
          </div>
        </header>
      </section>
      {/* ========================  Icons slider ======================== */}
      <section className="owl-icons-wrapper">
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
      {/* ======================== Products ======================== */}
      <section className="products">
        <div className="container">
          <header className="hidden">
            <h3 className="h3 title">Product category grid</h3>
          </header>
          <div className="row">
            {/* === product-filters === */}
            {/* <div className="col-md-3 col-xs-12">
              <div className="filters">
                
              
                
                
                
              
              </div>{" "}
           
            </div> */}
            {/*product items*/}
            <div className="col-md-9 col-xs-12">
              <div className="sort-bar clearfix">
                <div className="sort-results pull-left">
                  {/*Showing result per page*/}
                  <select>
                    <option value={1}>10</option>
                    <option value={2}>50</option>
                    <option value={3}>100</option>
                    <option value={4}>All</option>
                  </select>
                  {/*Items counter*/}
                  <span>
                    Showing all <strong>50</strong> of <strong>3,250</strong>{" "}
                    items
                  </span>
                </div>
                {/*Sort options*/}
                <div className="sort-options pull-right">
                  <span className="hidden-xs">Sort by</span>
                  <select>
                    <option value={1}>Name</option>
                    <option value={2}>Popular items</option>
                    <option value={3}>Price: lowest</option>
                    <option value={4}>Price: highest</option>
                  </select>
                  {/*Grid-list view*/}
                  <span className="grid-list">
                    <a href="products-grid.html">
                      <i className="fa fa-th-large" />
                    </a>
                    <a href="products-list.html">
                      <i className="fa fa-align-justify" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="toggle-filters-mobile"
                    >
                      <i className="fa fa-search" />
                    </a>
                  </span>
                </div>
              </div>
              <div className="row">
                {/* === product-item === */}
                <div className="col-md-6 col-xs-6">
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
                      <span className="label label-info" style={{color:"white"}}>-50%</span>
                      <div className="image">
                        <a href="#productid1" className="mfp-open">
                          <img
                            src="assets/images/product-1.png"
                            alt=""
                            width={360}
                          />
                        </a>
                      </div>
                      <div className="text">
                        <h2 className="title h4">
                          <a href="product.html">Green corner</a>
                        </h2>
                        <sub>₹ 1,499</sub>
                        <sup>₹ 1,099</sup>
                        <span className="description clearfix">
                          Gubergren amet dolor ea diam takimata consetetur
                          facilisis blandit et aliquyam lorem ea duo labore diam
                          sit et consetetur nulla
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
                {/* === product-item === */}
                <div className="col-md-6 col-xs-6">
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
                    <span className="label label-info" style={{color:"white"}}>-50%</span>
                      <div className="image">
                        <a href="#productid1" className="mfp-open">
                          <img
                            src="assets/images/product-2.png"
                            alt=""
                            width={360}
                          />
                        </a>
                      </div>
                      <div className="text">
                        <h2 className="title h4">
                          <a href="product.html">Laura</a>
                        </h2>
                        <sub>₹ 3,999</sub>
                        <sup>₹ 3,499</sup>
                        <span className="description clearfix">
                          Gubergren amet dolor ea diam takimata consetetur
                          facilisis blandit et aliquyam lorem ea duo labore diam
                          sit et consetetur nulla
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
                {/* === product-item === */}
                <div className="col-md-6 col-xs-6">
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
                    <span className="label label-info" style={{color:"white"}}>-60%</span>
                      <div className="image">
                        <a href="#productid1" className="mfp-open">
                          <img
                            src="assets/images/product-3.png"
                            alt=""
                            width={360}
                          />
                        </a>
                      </div>
                      <div className="text">
                        <h2 className="title h4">
                          <a href="product.html">Nude</a>
                        </h2>
                        <sup>₹ 2,999</sup>
                        <span className="description clearfix">
                          Gubergren amet dolor ea diam takimata consetetur
                          facilisis blandit et aliquyam lorem ea duo labore diam
                          sit et consetetur nulla
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
                {/* === product-item === */}
                <div className="col-md-6 col-xs-6">
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
                      <span className="label label-info" style={{color:"white"}}>-40%</span>
                      <div className="image">
                        <a href="#productid1" className="mfp-open">
                          <img
                            src="assets/images/product-4.png"
                            alt=""
                            width={360}
                          />
                        </a>
                      </div>
                      <div className="text">
                        <h2 className="title h4">
                          <a href="product.html">Aurora</a>
                        </h2>
                        <sup>₹ 299</sup>
                        <span className="description clearfix">
                          Gubergren amet dolor ea diam takimata consetetur
                          facilisis blandit et aliquyam lorem ea duo labore diam
                          sit et consetetur nulla
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
                {/* === product-item === */}
                <div className="col-md-6 col-xs-6">
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
                      <span className="label label-info" style={{color:"white"}}>-30%</span>
                      <div className="image">
                        <a href="#productid1" className="mfp-open">
                          <img
                            src="assets/images/product-5.png"
                            alt=""
                            width={360}
                          />
                        </a>
                      </div>
                      <div className="text">
                        <h2 className="title h4">
                          <a href="product.html">Dining set</a>
                        </h2>
                        <sub>₹ 1,999</sub>
                        <sup>₹ 1,499</sup>
                        <span className="description clearfix">
                          Gubergren amet dolor ea diam takimata consetetur
                          facilisis blandit et aliquyam lorem ea duo labore diam
                          sit et consetetur nulla
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
                {/* === product-item === */}
                <div className="col-md-6 col-xs-6">
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
                    <span className="label label-info" style={{color:"white"}}>-50%</span>
                      <div className="image">
                        <a href="#productid1" className="mfp-open">
                          <img
                            src="assets/images/product-6.png"
                            alt=""
                            width={360}
                          />
                        </a>
                      </div>
                      <div className="text">
                        <h2 className="title h4">
                          <a href="product.html">Seat chair</a>
                        </h2>
                        <sup>₹ 896</sup>
                        <span className="description clearfix">
                          Gubergren amet dolor ea diam takimata consetetur
                          facilisis blandit et aliquyam lorem ea duo labore diam
                          sit et consetetur nulla
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
                {/* === product-item === */}
                <div className="col-md-6 col-xs-6">
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
                    <span className="label label-info" style={{color:"white"}}>-50%</span>
                      <div className="image">
                        <a href="#productid1" className="mfp-open">
                          <img
                            src="assets/images/product-1.png"
                            alt=""
                            width={360}
                          />
                        </a>
                      </div>
                      <div className="text">
                        <h2 className="title h4">
                          <a href="product.html">Green corner</a>
                        </h2>
                        <sub>₹ 1,499</sub>
                        <sup>₹ 1,099</sup>
                        <span className="description clearfix">
                          Gubergren amet dolor ea diam takimata consetetur
                          facilisis blandit et aliquyam lorem ea duo labore diam
                          sit et consetetur nulla
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
                {/* === product-item === */}
                <div className="col-md-6 col-xs-6">
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
                    <span className="label label-info" style={{color:"white"}}>-40%</span>
                      <div className="image">
                        <a href="#productid1" className="mfp-open">
                          <img
                            src="assets/images/product-2.png"
                            alt=""
                            width={360}
                          />
                        </a>
                      </div>
                      <div className="text">
                        <h2 className="title h4">
                          <a href="product.html">Laura</a>
                        </h2>
                        <sub>₹ 3,999</sub>
                        <sup>₹ 3,499</sup>
                        <span className="description clearfix">
                          Gubergren amet dolor ea diam takimata consetetur
                          facilisis blandit et aliquyam lorem ea duo labore diam
                          sit et consetetur nulla
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
                {/* === product-item === */}
                <div className="col-md-6 col-xs-6">
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
                    <span className="label label-info" style={{color:"white"}}>-50%</span>
                      <div className="image">
                        <a href="#productid1" className="mfp-open">
                          <img
                            src="assets/images/product-3.png"
                            alt=""
                            width={360}
                          />
                        </a>
                      </div>
                      <div className="text">
                        <h2 className="title h4">
                          <a href="product.html">Nude</a>
                        </h2>
                        <sup>₹ 2,999</sup>
                        <span className="description clearfix">
                          Gubergren amet dolor ea diam takimata consetetur
                          facilisis blandit et aliquyam lorem ea duo labore diam
                          sit et consetetur nulla
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
                {/* === product-item === */}
                <div className="col-md-6 col-xs-6">
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
                      <span className="label label-info" style={{color:"white"}}>-20%</span>
                      <div className="image">
                        <a href="#productid1" className="mfp-open">
                          <img
                            src="assets/images/product-4.png"
                            alt=""
                            width={360}
                          />
                        </a>
                      </div>
                      <div className="text">
                        <h2 className="title h4">
                          <a href="product.html">Aurora</a>
                        </h2>
                        <sup>₹ 299</sup>
                        <span className="description clearfix">
                          Gubergren amet dolor ea diam takimata consetetur
                          facilisis blandit et aliquyam lorem ea duo labore diam
                          sit et consetetur nulla
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              {/*/row*/}
              {/*Pagination*/}
              <div className="pagination-wrapper">
                <ul className="pagination">
                  <li>
                    <a href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>{" "}
            {/*/product items*/}
          </div>
          {/*/row*/}
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
                  </div>
                  {/*/row*/}
                </div>{" "}
                {/*/product-info-wrapper*/}
              </div>
              {/*/popup-content*/}
              {/* === product-popup-footer === */}
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
                    <a href="/product-grid">
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
        </div>
        {/*/container*/}
      </section>
      <Footer />
    </div>
  );
};
export default Offers;

