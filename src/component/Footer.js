const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/*footer showroom*/}
        <div className="footer-showroom">
          <div className="row">
            <div className="col-sm-8">
              <h2>Visit our showroom</h2>
              <p>Patia,Bhubaneswar</p>
              <p>
                Mon - Sat: 10 am - 9 pm &nbsp; &nbsp; | &nbsp; &nbsp; Sun: 12pm
                - 2 pm
              </p>
            </div>
            <div className="col-sm-4 text-center">
              <a href="https://www.google.com/maps/place/Patia,+Bhubaneswar,+Odisha/@20.3514316,85.8036421,14z/data=!3m1!4b1!4m6!3m5!1s0x3a190912b69339ab:0xa11e7186a04f1474!8m2!3d20.3532772!4d85.8265977!16s%2Fg%2F1vzn3zsh?entry=ttu" className="btn btn-clean">
                <span className="icon icon-map-marker" /> Get directions
              </a>
              <div className="call-us h4">
                <span className="icon icon-phone-handset" /> 333.278.06622
              </div>
            </div>
          </div>
        </div>
        {/*footer links*/}
        <div className="footer-links">
          <div className="row">
            <div className="col-sm-4 col-md-2">
              <h5>Browse by</h5>
              <ul>
                <li>
                  <a href="#">Brand</a>
                </li>
                <li>
                  <a href="/product-grid">Product</a>
                </li>
                <li>
                  <a href="/product-list">Category</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-2">
              <h5>Recources</h5>
              <ul>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Sales</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-2">
              <h5>Our company</h5>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6">
              <h5>Sign up for our newsletter</h5>
              <p>
                <i>
                Add your email address to sign up for our monthly emails and
                  to receive promotional offers.
                </i>
              </p>
              <div className="form-group form-newsletter">
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  placeholder="Enter your Email ID"
                />
              </div>
              <div class="text-right">
                <input
                  type="submit"
                  className="btn btn-clean btn-sm"
                  defaultValue="Subscribe"/>
              </div>
            </div>
          </div>
        </div>
        {/*footer social*/}
        <div className="footer-social">
          <div className="row">
            <div className="col-sm-6">
              <a
                href="https://themeforest.net/item/mobel-furniture-website-template/20382155"
                target="_blank"/>
              
             
              <a href="#">Privacy policy</a>
            </div>
            <div className="col-sm-6 links">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;