import Image from "next/image";
import React from "react";

const Testimonial = () => (
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="text-center mb-3 pb-3">
        <h6 className="text-primary text-uppercase tracking-[5px]">
          Testimonial
        </h6>
        <h1>What Our Clients are Saying</h1>
      </div>
      <div className="owl-carousel testimonial-carousel">
        <div className="text-center pb-4">
          <Image
            width="100"
            height="100"
            className="img-fluid mx-auto w-[100px] h-[100px]"
            src="/img/testimonial-1.jpg"
            alt="testimonial-1"
          />
          <div className="testimonial-text bg-white p-4 mt-n5">
            <p className="mt-5">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </p>
            <h5 className="text-truncate">Client Name</h5>
            <span>Profession</span>
          </div>
        </div>
        <div className="text-center">
          <Image
            className="img-fluid mx-auto w-[100px] h-[100px]"
            src="/img/testimonial-2.jpg"
            alt="testimonial-2"
            width="100"
            height="100"
          />
          <div className="testimonial-text bg-white p-4 mt-n5">
            <p className="mt-5">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </p>
            <h5 className="text-truncate">Client Name</h5>
            <span>Profession</span>
          </div>
        </div>
        <div className="text-center">
          <Image
            width="100"
            height="100"
            className="img-fluid mx-auto w-[100px] h-[100px]"
            src="/img/testimonial-3.jpg"
            alt="testimonial-3"
          />
          <div className="testimonial-text bg-white p-4 mt-n5">
            <p className="mt-5">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </p>
            <h5 className="text-truncate">Client Name</h5>
            <span>Profession</span>
          </div>
        </div>
        <div className="text-center">
          <Image
            width="100"
            height="100"
            className="img-fluid mx-auto w-[100px] h-[100px]"
            src="/img/testimonial-4.jpg"
            alt="testimonial-jpg"
          />
          <div className="testimonial-text bg-white p-4 mt-n5">
            <p className="mt-5">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </p>
            <h5 className="text-truncate">Client Name</h5>
            <span>Profession</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonial;
