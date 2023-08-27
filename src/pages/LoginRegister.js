import Footer from "../component/Footer";
import LoginForm from "../component/LoginForm";
import RegisterForm from "../component/RegisterForm";

const LoginRegister = () => {
  return (
    <div>
       <section
        className="main-header"
        style={{
          backgroundImage:
            "url(http://www.elathemes.com/themes/mobel/assets/images/gallery-2.jpg)",
        }}
      >
        <header>
          <div className="container text-center">
            <h2 className="h2 title">Customer page</h2>
            <ol className="breadcrumb breadcrumb-inverted">
              <li>
                <a href="index.html">
                  <span className="icon icon-home" />
                </a>
              </li>
              <li>
                <a className="active" href="login.html">
                  Login &amp; Register
                </a>
              </li>
            </ol>
          </div>
        </header>
      </section>
      <section className="login-wrapper login-wrapper-page">
        <div className="container">
          <header className="hidden">
            <h3 className="h3 title">Sign in</h3>
          </header>
          <div className="row">
            {/* === left content === */}
            <div className="col-md-6 col-md-offset-3">
              {/* === login-wrapper === */}
              <div className="login-wrapper">
                <div className="white-block">
                  {/*signin*/}
                  <LoginForm />
                  {/*signup*/}
                  <RegisterForm />
                </div>
              </div>
              {/*/login-wrapper*/}
            </div>
            {/*/col-md-6*/}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LoginRegister;
