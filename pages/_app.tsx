import '../styles/globals.css'
import '../styles/style.css';
import '../styles/scss/style.scss';
import "../styles/lib/owlcarousel/assets/owl.carousel.min.css";
import "../styles/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";

import "../styles/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../styles/coming-soon-css/main.css";
import "../styles/coming-soon-css/util.css";
import "../styles/vendor/animate/animate.css";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
