import Image from "next/image";
import React from "react";

const Teams = () => (
  <div id="about-us" className="container-fluid py-5">
    <div className="container pt-5 pb-3">
      <div className="text-center mb-3 pb-3">
        <h6 className="text-primary text-uppercase tracking-[5px]">Our team of professionals</h6>
        <h1>Meet Our Team</h1>
      </div>
      <div className="row justify-center">
        <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
          <div className="team-item bg-white mb-4">
            <div className="team-img position-relative overflow-hidden">
              <Image data-aos="flip-right" data-aos-delay="1000" width="400" height="400" className="img-fluid w-100" src="https://res.cloudinary.com/deqt3envc/image/upload/v1692547276/Samuel-Ishau_CEO-New-Wine-Realty.png" alt="" />
              <div className="team-social">
                {/* <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-instagram"></i>
                </a> */}
                <a className="btn btn-outline-primary btn-square" href="https://www.linkedin.com/in/samuelishau/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="text-center py-4">
              <h5 className="text-truncate">Samuel Ishau</h5>
              <p className="m-0">Lead Consultant</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
          <div className="team-item bg-white mb-4">
            <div className="team-img position-relative overflow-hidden">
              <Image data-aos="flip-right" data-aos-delay="1000" width="400" height="400" className="img-fluid w-100" src="https://res.cloudinary.com/deqt3envc/image/upload/v1692547266/Funmilayo-Okelola_HR-New-Wine-Realty.png" alt="" />
              <div className="team-social">
                {/* <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-instagram"></i>
                </a> */}
                <a className="btn btn-outline-primary btn-square" href="https://www.linkedin.com/in/funmilayo-okelola-acipm-258017163/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="text-center py-4">
              <h5 className="text-truncate">Funmilayo Okelola</h5>
              <p className="m-0">Human Resource Manager</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
          <div className="team-item bg-white mb-4">
            <div className="team-img position-relative overflow-hidden">
              <Image data-aos="flip-right" data-aos-delay="1000" width="400" height="400" className="img-fluid w-100" src="https://res.cloudinary.com/deqt3envc/image/upload/v1692547272/Akolade-Adesanmi_Software-Engineering-Head_New-Wine-Realty.png" alt="" />
              <div className="team-social">
                {/* <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-instagram"></i>
                </a> */}
                <a className="btn btn-outline-primary btn-square" href="https://www.linkedin.com/in/akolade-adesanmi-156276142/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="text-center py-4">
              <h5 className="text-truncate">Akolade Adesanmi</h5>
              <p className="m-0">Lead Software Engineer</p>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
          <div className="team-item bg-white mb-4">
            <div className="team-img position-relative overflow-hidden">
              <Image width="400" height="400" className="img-fluid w-100" src="/img/team-4.jpg" alt="" />
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
        </div> */}
      </div>
    </div>
  </div>
);

export default Teams;
