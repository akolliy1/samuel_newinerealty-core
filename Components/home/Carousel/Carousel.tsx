import Image from "next/image";
import React from "react";

const Carousel = () => (
  <div className="container-fluid p-0">
    <div id="header-carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image width="1000" height="100" className="w-100" src="/img/carousel-1.jpg" alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3 max-w-[900px]">
              <h4 className="text-white text-uppercase mb-md-3">
                Tours & Travel
              </h4>
              <h1 className="display-3 text-white mb-md-4">
                {`Let's`} Discover The World Together
              </h1>
              <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">
                Book Now
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <Image width="1000" height="100" className="w-100" src="/img/carousel-2.jpg" alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3 max-w-[900px]">
              <h4 className="text-white text-uppercase mb-md-3">
                Tours & Travel
              </h4>
              <h1 className="display-3 text-white mb-md-4">
                Discover Amazing Places With Us
              </h1>
              <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#header-carousel"
        data-slide="prev"
      >
        <div className="btn btn-dark w-[45px] h-[45px]">
          <span className="carousel-control-prev-icon mb-n2"></span>
        </div>
      </a>
      <a
        className="carousel-control-next"
        href="#header-carousel"
        data-slide="next"
      >
        <div className="btn btn-dark w-[45px] h-[45px]">
          <span className="carousel-control-next-icon mb-n2"></span>
        </div>
      </a>
    </div>
  </div>
);

export default Carousel;
