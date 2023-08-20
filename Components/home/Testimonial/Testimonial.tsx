import Image from "next/image";
import React from "react";

const Testimonial = () => (
  <div data-aos="zoom-in" data-aos-delay="1200" className="container-fluid py-5">
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
            src="data:image/jpeg;base64,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"
            alt="testimonial-1"
          />
          <div className="testimonial-text bg-white p-4 mt-n5">
            <p className="mt-5 text-justify">
              {`I never knew Real Estate investment was so simple and could be a smart way to grow my
                money until I met New Wine Realty. They educated me, understood my goals and risk appetite
                then professionally assisted me in starting my investment journey. My portfolio rose by over 70%
                within 12 months of working with them.
              `}
            </p>
            <h5 className="text-truncate">Miss Tosin</h5>
            {/* <span>Profession</span> */}
          </div>
        </div>
        <div className="text-center">
          <Image
            className="img-fluid mx-auto w-[100px] h-[100px]"
            src="data:image/jpeg;base64,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"
            alt="testimonial-2"
            width="100"
            height="100"
          />
          <div className="testimonial-text bg-white p-4 mt-n5">
            <p className="mt-5 text-justify">
              {`New Wine Realty helped us find our first home in Lagos, Nigeria, and they were fantastic. We
                looked for a reputable real estate agent for three years before coming across one of their
                adverts on Facebook and decided to give it a go. We did a lot of research to see whether we
                could buy our first home via them, and we were not disappointed by the level of service they
                provided. We were convinced that New Wine Realty provides the best in real estate after
                acquiring my first house via them. Thanks to New Wine Realty, we now own multiple homes in
                Lagos, Nigeria and we have never patronised other real estate agency.
              `}
            </p>
            <h5 className="text-truncate">Mrs Remi</h5>
            {/* <span>Profession</span> */}
          </div>
        </div>
        <div className="text-center">
          <Image
            width="100"
            height="100"
            className="img-fluid mx-auto w-[100px] h-[100px]"
            src="/Headshot-Placeholder-man.jpeg"
            alt="testimonial-3"
          />
          <div className="testimonial-text bg-white p-4 mt-n5">
            <p className="mt-5 text-justify">
              {`My Special greetings to New Wine Realty, and a massive thanks to Samuel from for his tenacity
                from responding to enquiries and getting me allocated. God is great. Many have lost funds
                through family or friends, yet I'm so so appreciative of him for being there for me. Thank you Mr
                Samuel, your own to go better IJN.
              `}
            </p>
            <h5 className="text-truncate">Mr Obaloluwa</h5>
            {/* <span>Profession</span> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonial;
