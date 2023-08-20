import Image from "next/image";
import React from "react";

const Blog = () => (
  <div className="container-fluid py-5">
    <div className="container pt-5 pb-3">
      <div className="text-center mb-3 pb-3">
        <h6 className="text-primary text-uppercase tracking-[5px]">Our Blog</h6>
        <h1>Latest From Our Blog</h1>
      </div>
      <div className="row pb-3">
        <div className="col-lg-4 col-md-6 mb-4 pb-2">
          <div className="blog-item">
            <div className="position-relative">
              <Image
                className="img-fluid w-100"
                src="/Blog/Facts-About-Dangote-Refinery_New-Wine-Realty_Samuel-Ishau.jpg"
                alt="blog-img"
                width="250"
                height="100"
              />
              <div className="blog-date">
                <h6 className="font-weight-bold mb-n1">01</h6>
                <small className="text-white text-uppercase">Jan</small>
              </div>
            </div>
            <div className="bg-white p-4">
              <div className="d-flex mb-2">
                <a
                  className="text-primary text-uppercase text-decoration-none"
                  href=""
                >
                  Admin
                </a>
                <span className="text-primary px-2">|</span>
                <a
                  className="text-primary text-uppercase text-decoration-none"
                  href=""
                >
                  Tours & Travel
                </a>
              </div>
              <a className="h5 m-0 text-decoration-none" href="">
                Facts About Dangote Refinery
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 pb-2">
          <div className="blog-item">
            <div className="position-relative">
              <Image
                className="img-fluid w-100"
                src="/Blog/What-Can-I-build-on-a-Half-Plot-of-Land_300sqm-Land_New-Wine-Realty.jpg"
                alt="blog-img"
                width="250"
                height="100"
              />
              <div className="blog-date">
                <h6 className="font-weight-bold mb-n1">01</h6>
                <small className="text-white text-uppercase">Jan</small>
              </div>
            </div>
            <div className="bg-white p-4">
              <div className="d-flex mb-2">
                <a
                  className="text-primary text-uppercase text-decoration-none"
                  href=""
                >
                  Admin
                </a>
                <span className="text-primary px-2">|</span>
                <a
                  className="text-primary text-uppercase text-decoration-none"
                  href=""
                >
                  Tours & Travel
                </a>
              </div>
              <a className="h5 m-0 text-decoration-none" href="">
                What Can I build on a Half Plot of Land 300sqm Land
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 pb-2">
          <div className="blog-item">
            <div className="position-relative">
              <Image
                className="img-fluid w-100"
                src="/Blog/Why-Celebrities-Invest-in-Real-Estate_New-Wine-Realty.jpg"
                alt="blog-img"
                width="250"
                height="100"
              />
              <div className="blog-date">
                <h6 className="font-weight-bold mb-n1">01</h6>
                <small className="text-white text-uppercase">Jan</small>
              </div>
            </div>
            <div className="bg-white p-4">
              <div className="d-flex mb-2">
                <a
                  className="text-primary text-uppercase text-decoration-none"
                  href=""
                >
                  Admin
                </a>
                <span className="text-primary px-2">|</span>
                <a
                  className="text-primary text-uppercase text-decoration-none"
                  href=""
                >
                  Tours & Travel
                </a>
              </div>
              <a className="h5 m-0 text-decoration-none" href="">
                Why Celebrities Invest in Real Estate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Blog;
