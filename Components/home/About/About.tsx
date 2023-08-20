import Image from "next/image";
import React from "react";

const About = () => (
  <div data-aos="fade-down" className="container-fluid py-5">
    <div className="container pt-5">
      <div className="row">
        <div className="col-lg-6 min-h-[500px]">
          <div className="position-relative h-100">
            <Image
              className="position-absolute w-100 h-100 object-cover"
              alt="about"
              src="/img/about.jpg"
              width="1000"
              height="1500"
            />
          </div>
        </div>
        <div data-aos="slide-left" className="col-lg-6 pt-5 pb-lg-5">
          <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
            <h6 className="text-primary text-uppercase tracking-[5px]">
              About Us
            </h6>
            <h1 className="mb-3">
              New Wine Realty - Nigeria&rsquo;s Most Trusted Real Estate Company
            </h1>
            <p>
              At New Wine Realty, we offer the most safest & secured housing solutions and profitable real estate investment opportunities. Our utmost goal is to walk you through your home ownership journey in the most seamless and effective way.
            </p>
            {/* <div className="row mb-4">
              <div className="col-6">
                <Image width="500" height="100" className="img-fluid" src="/img/about-1.jpg" alt="" />
              </div>
              <div className="col-6">
                <Image width="500" height="100" className="img-fluid" src="/img/about-2.jpg" alt="" />
              </div>
            </div> */}
            <a href="" className="btn btn-primary mt-1">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
