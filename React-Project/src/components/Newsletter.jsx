function Newsletter() {
    return (
      <footer className="bg-body-tertiary text-center text-lg-start">
        {/* Centered Grid container */}
        <div className="container d-flex flex-column align-items-center p-4 pb-0"
        style={{backgroundColor:"#1b1b1b",color:"#fff"}}>
          <form action="">
            {/* Grid row centered */}
            <div className="row d-flex justify-content-center">
              {/* Column for newsletter heading */}
              <div className="col-auto mb-4 mb-md-0">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
  
              {/* Column for email input */}
              <div className="col-md-5 col-12 mb-4 mb-md-0">
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="email" id="form5Example22" className="form-control" />
                  <label className="form-label" htmlFor="form5Example22">
                    Email address
                  </label>
                </div>
              </div>
  
              {/* Column for subscribe button */}
              <div className="col-auto mb-4 mb-md-0">
                <button
                  data-mdb-ripple-init
                  type="button"
                  className="btn btn-primary mb-4"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
  
        {/* Copyright */}
        {/* <div
          className="text-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        >
          © 2020 Copyright:
          <a className="text-body" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div> */}
      </footer>
    );
  }
  
  export default Newsletter;
  