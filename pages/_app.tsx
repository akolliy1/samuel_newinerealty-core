import '../styles/globals.css'
import '../styles/style.css';
import '../styles/scss/style.scss';
import "../styles/lib/owlcarousel/assets/owl.carousel.min.css";
import "../styles/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
