import Image from "next/image";
import React from "react";

const Destination = () => (
  <div className="container-fluid py-5">
    <div className="container pt-5 pb-3">
      <div className="text-center mb-3 pb-3">
        <h1>Browse by Neighbourhoods</h1>
        <h6 className="text-primary lowercase">
          <span className="text-uppercase">I</span>nvest in the top cities and neighbourhoods in <span className="text-uppercase">L</span>agos
        </h6>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="destination-item position-relative overflow-hidden mb-2">
            <Image width="600" height="400" className="img-fluid w-100" src="/neighbourhood/House-in-Nigeria.jpeg" alt="" />
            <a
              className="destination-overlay text-white text-decoration-none"
              href=""
            >
              <h5 className="text-white">Lekki</h5>
              {/* <span>100 Cities</span> */}
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="destination-item position-relative overflow-hidden mb-2">
            <Image width="600" height="400" className="img-fluid w-100" src="/neighbourhood/Apartments-in-Nigeria.jpeg" alt="" />
            <a
              className="destination-overlay text-white text-decoration-none"
              href=""
            >
              <h5 className="text-white">Ajah</h5>
              {/* <span>100 Cities</span> */}
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="destination-item position-relative overflow-hidden mb-2">
            <Image width="600" height="400" className="img-fluid w-100" src="/neighbourhood/Houses-in-Nigeria_New-Wine-Realty.jpeg" alt="" />
            <a
              className="destination-overlay text-white text-decoration-none"
              href=""
            >
              <h5 className="text-white">Epe</h5>
              {/* <span>100 Cities</span> */}
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="destination-item position-relative overflow-hidden mb-2">
            <Image width="600" height="400" className="img-fluid w-100" src="/neighbourhood/Apartment-in-Nigeria.jpeg" alt="" />
            <a
              className="destination-overlay text-white text-decoration-none"
              href=""
            >
              <h5 className="text-white">Lagos Mainland</h5>
              {/* <span>100 Cities</span> */}
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="destination-item position-relative overflow-hidden mb-2">
            <Image width="600" height="400" className="img-fluid w-100" src="/neighbourhood/House-For-Sale-in-Nigeria.jpeg" alt="" />
            <a
              className="destination-overlay text-white text-decoration-none"
              href=""
            >
              <h5 className="text-white">Ibeju-Lekki</h5>
              {/* <span>100 Cities</span> */}
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="destination-item position-relative overflow-hidden mb-2">
            <Image width="600" height="400" className="img-fluid w-100" src="/neighbourhood/Nigerian-Houses.jpeg" alt="" />
            <a
              className="destination-overlay text-white text-decoration-none"
              href=""
            >
              <h5 className="text-white">Victoria Island</h5>
              {/* <span>100 Cities</span> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Destination;
