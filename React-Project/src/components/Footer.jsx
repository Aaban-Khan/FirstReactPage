// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"

const Footer = () => {
    return (
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: '#0b0b0b', width: '100%' }}
      >
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Links */}
          <section>
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              {/* Grid column */}
  
              <hr className="w-100 clearfix d-md-none" />
  
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p>
                  <a href="#!" className="text-white">MDBootstrap</a>
                </p>
                <p>
                  <a href="#!" className="text-white">MDWordPress</a>
                </p>
                <p>
                  <a href="#!" className="text-white">BrandFlow</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Bootstrap Angular</a>
                </p>
              </div>
              {/* Grid column */}
  
              <hr className="w-100 clearfix d-md-none" />
  
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                <p>
                  <a href="#!" className="text-white">Your Account</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Become an Affiliate</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Shipping Rates</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Help</a>
                </p>
              </div>
              {/* Grid column */}
  
              <hr className="w-100 clearfix d-md-none" />
  
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </section>
          {/* Section: Links */}
  
          <hr className="my-3" />
  
          {/* Section: Copyright */}
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              {/* Grid column */}
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                {/* Copyright */}
                <div className="p-3">
                  © 2020 Copyright:
                  <a href="https://mdbootstrap.com/" className="text-white">
                    MDBootstrap.com
                  </a>
                </div>
                {/* Copyright */}
              </div>
              {/* Grid column */}
  
              {/* Grid column */}
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                {/* Social media links */}
                <a
                  href="#!"
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
  
                <a
                  href="#!"
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i className="fab fa-twitter"></i>
                </a>
  
                <a
                  href="#!"
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i className="fab fa-google"></i>
                </a>
  
                <a
                  href="#!"
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              {/* Grid column */}
            </div>
          </section>
          {/* Section: Copyright */}
        </div>
        {/* Grid container */}
      </footer>
    );
  };
  
  export default Footer;
  