import Image from "next/image";
import React from "react";

const About = () => (
  <div className="container-fluid py-5">
    <div className="container pt-5">
      <div className="row">
        <div className="col-lg-6 min-h-[500px]">
          <div className="position-relative h-100">
            <Image
              className="position-absolute w-100 h-100 object-cover"
              alt="about"
              src="/img/about.jpg"
              width="500"
              height="500"
            />
          </div>
        </div>
        <div className="col-lg-6 pt-5 pb-lg-5">
          <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
            <h6 className="text-primary text-uppercase tracking-[5px]">
              About Us
            </h6>
            <h1 className="mb-3">
              New Wine Realty - Nigeria&rsquo;s Most Trusted Real Estate Company
            </h1>
            <p>
              At New Wine Realty, we provide unique housing solutions with a host of highly secured and profitable real estate investment opportunities.
            </p>
            <div className="row mb-4">
              <div className="col-6">
                <Image width="500" height="100" className="img-fluid" src="/img/about-1.jpg" alt="" />
              </div>
              <div className="col-6">
                <Image width="500" height="100" className="img-fluid" src="/img/about-2.jpg" alt="" />
              </div>
            </div>
            <a href="" className="btn btn-primary mt-1">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
