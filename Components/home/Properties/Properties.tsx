import Image from "next/image";
import React from "react";
import { Element } from "react-scroll";

const Properties = () => (
  <Element name="properties" data-aos="flip-up" data-aos-delay="1000" className="container-fluid py-5">
    <div className="container pt-5 pb-3">
      <div className="text-center mb-3 pb-3">
        <h6 className="text-primary text-uppercase tracking=[5px]">Properties</h6>
        <h1>View Our Exclusive Properties</h1>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="package-item bg-white mb-2">
            <Image width="300" height="200" className="img-fluid w-100" src="/Our_Exclusive_Properties/3-Bedroom-Bungalow-for-Sale-in-Sangotedo-Lekki_New-Wine-Realty.jpg" alt="" />
            <div className="p-4">
              <div className="d-flex justify-content-between mb-3">
                <small className="m-0">
                  <i className="fa fa-map-marker text-primary mr-2"></i>
                  Lagos, Nigeria
                </small>
                <small className="m-0">
                  <i className="fa fa-calendar-alt text-primary mr-2"></i>3 days
                </small>
                <small className="m-0">
                  <i className="fa fa-user text-primary mr-2"></i>2 Person
                </small>
              </div>
              <a className="h5 text-decoration-none" href="https://fairmont.newinerealty.com/">
                Fairmont Green & Smart Estate
              </a>
              <div className="border-top mt-4 pt-4">
                <div className="d-flex justify-content-between">
                  <h6 className="m-0">
                    <i className="fa fa-star text-primary mr-2"></i>4.5{" "}
                    <small>(250)</small>
                  </h6>
                  <h5 className="m-0">$350</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="package-item bg-white mb-2">
            <Image width="300" height="200" className="img-fluid w-100" src="/Our_Exclusive_Properties/4-Bedroom-House-for-Sale-in-Isheri-North-GRA_New-Wine-Realty.jpg" alt="" />
            <div className="p-4">
              <div className="d-flex justify-content-between mb-3">
                <small className="m-0">
                  <i className="fa fa-map-marker text-primary mr-2"></i>
                  Lagos, Nigeria
                </small>
                <small className="m-0">
                  <i className="fa fa-calendar-alt text-primary mr-2"></i>3 days
                </small>
                <small className="m-0">
                  <i className="fa fa-user text-primary mr-2"></i>2 Person
                </small>
              </div>
              <a className="h5 text-decoration-none" href="https://daapt.newinerealty.com/">
                De Avocado Luxury Apartment
              </a>
              <div className="border-top mt-4 pt-4">
                <div className="d-flex justify-content-between">
                  <h6 className="m-0">
                    <i className="fa fa-star text-primary mr-2"></i>4.5{" "}
                    <small>(250)</small>
                  </h6>
                  <h5 className="m-0">$350</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="package-item bg-white mb-2">
            <Image width="300" height="200" className="img-fluid w-100" src="/Our_Exclusive_Properties/De-Avocado-Apartment-House-for-Sale-in-Abijo-Ibeju-Lekki_New-Wine-Realty.jpg" alt="" />
            <div className="p-4">
              <div className="d-flex justify-content-between mb-3">
                <small className="m-0">
                  <i className="fa fa-map-marker text-primary mr-2"></i>
                  Nigeria
                </small>
                <small className="m-0">
                  <i className="fa fa-calendar-alt text-primary mr-2"></i>3 days
                </small>
                <small className="m-0">
                  <i className="fa fa-user text-primary mr-2"></i>2 Person
                </small>
              </div>
              <a className="h5 text-decoration-none" href="https://properties.newinerealty.com/">
                Discover amazing places of the world with us
              </a>
              <div className="border-top mt-4 pt-4">
                <div className="d-flex justify-content-between">
                  <h6 className="m-0">
                    <i className="fa fa-star text-primary mr-2"></i>4.5{" "}
                    <small>(250)</small>
                  </h6>
                  <h5 className="m-0">$350</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Element>
);

export default Properties;
