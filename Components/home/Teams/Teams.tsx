import Image from "next/image";
import React from "react";

const Teams = () => (
  <div className="container-fluid py-5">
    <div className="container pt-5 pb-3">
      <div className="text-center mb-3 pb-3">
        <h6 className="text-primary text-uppercase tracking-[5px]">Guides</h6>
        <h1>Our Travel Guides</h1>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
          <div className="team-item bg-white mb-4">
            <div className="team-img position-relative overflow-hidden">
              <Image width="100" height="100" className="img-fluid w-100" src="/img/team-1.jpg" alt="" />
              <div className="team-social">
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="text-center py-4">
              <h5 className="text-truncate">Guide Name</h5>
              <p className="m-0">Designation</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
          <div className="team-item bg-white mb-4">
            <div className="team-img position-relative overflow-hidden">
              <Image width="100" height="100" className="img-fluid w-100" src="/img/team-2.jpg" alt="" />
              <div className="team-social">
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="text-center py-4">
              <h5 className="text-truncate">Guide Name</h5>
              <p className="m-0">Designation</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
          <div className="team-item bg-white mb-4">
            <div className="team-img position-relative overflow-hidden">
              <Image width="100" height="100" className="img-fluid w-100" src="/img/team-3.jpg" alt="" />
              <div className="team-social">
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="text-center py-4">
              <h5 className="text-truncate">Guide Name</h5>
              <p className="m-0">Designation</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
          <div className="team-item bg-white mb-4">
            <div className="team-img position-relative overflow-hidden">
              <Image width="100" height="100" className="img-fluid w-100" src="/img/team-4.jpg" alt="" />
              <div className="team-social">
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="text-center py-4">
              <h5 className="text-truncate">Guide Name</h5>
              <p className="m-0">Designation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Teams;
