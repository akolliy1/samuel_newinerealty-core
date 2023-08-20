import "react-phone-number-input/style.css";
import "../styles/globals.css";
import "../styles/style.css";
import "../styles/scss/style.scss";
import "../styles/lib/owlcarousel/assets/owl.carousel.min.css";
import "../styles/lib/owlcarousel/assets/owl.theme.default.css";
import "../styles/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";

import "../styles/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../styles/coming-soon-css/main.css";
import "../styles/coming-soon-css/util.css";
import "../styles/vendor/animate/animate.css";
import "../plugins/loader";
import AOS from "aos";
import "aos/dist/aos.css";

import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1200, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return <Component {...pageProps} />;
}
