import Footer from "../component/Footer";

const Error =() => {

    return(
        <div>
        {/* ========================  404 ======================== */}
        <section className="not-found">
          <div className="container">
            <h1 className="title" data-title="Page not found!">404</h1>
            <div className="h4 subtitle">Sorry! Page not found.</div>
            <p>The requested URL was not found on this server. That’s all we know.</p>
            <p>Click <a href="#">here</a> to get to the front page? </p>
          </div>
        </section>
        <Footer/>
      </div>

    );
};

export default Error;