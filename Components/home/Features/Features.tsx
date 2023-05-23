import React from "react";
import { IoShieldCheckmark } from 'react-icons/io5';

const Features = () => (
  <div className="container-fluid pb-5">
    <div className="container pb-5">
      <div className="row">
        <div className="col-md-4">
          <div className="d-flex mb-4 mb-lg-0">
            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3 h-[100px] w-[100px]">
              <i className="fa fa-2x fa-regular fa-smile text-white"></i>
            </div>
            <div className="d-flex flex-column">
              <h5 className="">Customer Satisfaction</h5>
              <p className="m-0">
                Understanding our client needs, providing accurate and secured housing solutions, and delivering excellent services that meet or exceed their expectations
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex mb-4 mb-lg-0">
            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3 h-[100px] w-[100px]">
              <i className="fa fa-2x fa-regular fa-lightbulb text-white"></i>
            </div>
            <div className="d-flex flex-column">
              <h5 className="">Innovation</h5>
              <p className="m-0">
                Introduction of new and creative ideas, technologies, and practices that improve the way real estate services are provided and enhance the experience for clients and customers.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex mb-4 mb-lg-0">
            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3 h-[100px] w-[100px]">
              {/* <i className="fa fa-2x fa-globe text-white"></i> */}
              <IoShieldCheckmark className="text-white" size={30} />
            </div>
            <div className="d-flex flex-column">
              <h5 className="">Quality service</h5>
              <p className="m-0">
                Providing excellent service to clients that meets or exceeds their expectations. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Features;
