import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Script from "next/script";
import bg from "../public/New-Wine-Realty_4-Bedroom-Semi-Detached-In-Ajah.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>New Wine Realty - Nigeria&apos;s Most Trusted Real Estate Company</title>
        <meta name="description" content="At New Wine Realty, we provide unique housing solutions with a host of highly secured and profitable real estate investment opportunities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="size1 bg-white where1-parent">
        <div
          className="flex-c-m bg-img1 size2 where1 overlay1 where2 respon2"
          style={{
            backgroundImage: `url(${bg.src})`,
            // width: "100%",
            // height: "100%",
          }}
        >
          <div className="wsize2 flex-w flex-c-m cd100 js-tilt">
            <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
              <span className="l2-txt1 p-b-9 days">35</span>
              <span className="s2-txt4">Days</span>
            </div>

            <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
              <span className="l2-txt1 p-b-9 hours">17</span>
              <span className="s2-txt4">Hours</span>
            </div>

            <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
              <span className="l2-txt1 p-b-9 minutes">50</span>
              <span className="s2-txt4">Minutes</span>
            </div>

            <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
              <span className="l2-txt1 p-b-9 seconds">39</span>
              <span className="s2-txt4">Seconds</span>
            </div>
          </div>
        </div>
        <div className="size3 flex-col-sb flex-w p-l-75 p-r-75 p-t-45 p-b-45 respon1">
          <div className="wrap-pic1">
            <Image
              width="150"
              height="100"
              src="/New_Wine_Realty_Transparent_White.png"
              alt="LOGO"
            />
          </div>

          <div className="p-t-50 p-b-60">
            <p className="m1-txt1 p-b-10">
              We are <span className="m1-txt2">upgrading</span> to serve you
              better.
            </p>
            <p className="text-md p-b-20">For inquiries on our latest listing, kindly fill out the form
              below.</p>

            <form className="contact100-form validate-form">
              <div
                className="wrap-input100 m-b-10 validate-input"
                data-validate="Name is required"
              >
                <input
                  className="s2-txt1 placeholder0 input100"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                />
                <span className="focus-input100"></span>
              </div>

              <div
                className="wrap-input100 m-b-10 validate-input"
                data-validate="Email is required: ex@abc.xyz"
              >
                <input
                  className="s2-txt1 placeholder0 input100"
                  type="text"
                  name="email"
                  placeholder="Email Address"
                />
                <span className="focus-input100"></span>
              </div>

              <div
                className="wrap-input100 m-b-20 validate-input"
                data-validate="Phone is required: 0903450933"
              >
                <input
                  className="s2-txt1 placeholder0 input100"
                  type="text"
                  name="phone-number"
                  placeholder="Phone Number"
                />
                <span className="focus-input100"></span>
              </div>

              <div className="w-full">
                <button className="flex-c-m s2-txt2 size4 bg1 bor1 hov1 trans-04">
                  Subscribe
                </button>
              </div>
            </form>

            <p className="s2-txt3 p-t-18">
              And don’t worry, we hate spam too! You can unsubcribe at anytime.
            </p>
          </div>

          <div className="flex-w">
            <a
              href="https://www.facebook.com/newinerealty/"
              className="flex-c-m size5 bg3 how1 trans-04 m-r-5"
            >
              <i className="fa fa-facebook"></i>
            </a>

            <a
              href="https://www.instagram.com/newinerealty/"
              className="flex-c-m size5 bg5 how1 trans-04 m-r-5"
            >
              <i className="fa fa-instagram"></i>
            </a>

            <a
              href="https://www.linkedin.com/company/new-wine-realty/"
              className="flex-c-m size5 bg4 how1 trans-04 m-r-5"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* <Script src="../styles/vendor/jquery/jquery-3.2.1.min.js"></Script> */}
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js"></Script>
        <Script src="../styles/vendor/bootstrap/js/popper.js"></Script>
        <Script src="../styles/vendor/bootstrap/js/bootstrap.min.js"></Script>
        <Script src="../styles/vendor/select2/select2.min.js"></Script>
        <Script src="../styles/vendor/countdowntime/moment.min.js"></Script>
        <Script src="../styles/vendor/countdowntime/moment-timezone.min.js"></Script>
        <Script src="../styles/vendor/countdowntime/moment-timezone-with-data.min.js"></Script>
        <Script src="../styles/vendor/countdowntime/countdowntime.js"></Script>
        <Script src="../styles/vendor/tilt/tilt.jquery.min.js"></Script>
        <Script src="../styles/vendor/js/main.js"></Script>
      </main>
    </>
  );
}
