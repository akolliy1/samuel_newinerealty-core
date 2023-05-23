import React from "react";

const Topbar = () => (
  <div className="container-fluid bg-light pt-3 d-none d-lg-block">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
          <div className="d-inline-flex align-items-center">
            <p>
              <i className="fa fa-envelope mr-2"></i>newinerealty@gmail.com
            </p>
            <p className="text-body px-3">|</p>
            <p>
              <i className="fa fa-phone mr-2"></i> +2348189861993, +2348150350306
            </p>
          </div>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            <a className="text-primary px-3" target="_blank" href="https://www.facebook.com/newinerealty">
              <i className="fab fa-facebook-f"></i>
            </a>
            {/* <a className="text-primary px-3" href="">
              <i className="fab fa-twitter"></i>
            </a> */}
            <a className="text-primary px-3" target="_blank" href="https://www.linkedin.com/company/new-wine-realty/">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="text-primary px-3" target="_blank" href="https://www.instagram.com/newinerealty/">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="text-primary pl-3" target="_blank" href="https://www.youtube.com/@newwinerealty/">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Topbar;
