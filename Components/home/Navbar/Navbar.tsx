import Image from "next/image";
import NavLink from "next/link";
import React from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Navbar = () => {
  React.useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }, []);

  return (
    <div
      data-aos="fade-down"
      className="container-fluid position-relative nav-bar p-0"
    >
      <div className="container-lg position-relative p-0 px-lg-3 z-[9]">
        <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
          <Link
            className="test6"
            to="anchor"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Image
              width="130"
              height="100"
              src="/New_Wine_Realty_Transparent_White.png"
              alt="LOGO"
            />
          </Link>
          {/* <Link href="/" className="navbar-brand">
          <Image
            width="130"
            height="100"
            src="/New_Wine_Realty_Transparent_White.png"
            alt="LOGO"
          />
        </Link> */}
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse justify-content-between px-3 collapse"
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto py-0">
              <Link
                className="nav-item nav-link active"
                activeClass="active"
                to="test1"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                delay={1000}
              >
                Home
              </Link>
              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="about-us"
                spy={true}
                smooth={true}
                offset={150}
                duration={500}
                delay={1000}
              >
                About Us
              </Link>
              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-400}
                duration={500}
                delay={1000}
              >
                Contact
              </Link>
              <NavLink
                className="nav-item nav-link"
                href="https://properties.newinerealty.com"
              >
                Properties
              </NavLink>
              {/* <Link href="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link href="#about-us" className="nav-item nav-link">
              About Us
            </Link>
            <Link href="#contact" className="nav-item nav-link">
              Contact
            </Link>
            <Link href="#properties" className="nav-item nav-link">
              Properties
            </Link> */}
              {/* <div className="nav-item dropdown">
                <Link
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Blog
                </Link>
                <div className="dropdown-menu border-0 rounded-0 m-0">
                  <Link href="blog.html" className="dropdown-item">
                    Blog Grid
                  </Link>
                  <Link href="single.html" className="dropdown-item">
                    Blog Detail
                  </Link>
                  <Link href="destination.html" className="dropdown-item">
                    Destination
                  </Link>
                  <Link href="guide.html" className="dropdown-item">
                    Travel Guides
                  </Link>
                  <Link href="testimonial.html" className="dropdown-item">
                    Testimonial
                  </Link>
                </div>
              </div> */}
              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="blog"
                spy={true}
                smooth={true}
                offset={-400}
                duration={500}
                delay={1000}
              >
                Blog
              </Link>
              {/* <Link href="/blog" className="nav-item nav-link">
            Blog
          </Link> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
