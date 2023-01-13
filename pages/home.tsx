import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import Topbar from '../Components/home/Topbar/Topbar'
import Navbar from '../Components/home/Navbar/Navbar'
import Booking from '../Components/home/Booking/Booking'
import Blog from '../Components/home/Blog/Blog'
import Carousel from '../Components/home/Carousel/Carousel'
import About from '../Components/home/About/About'
import Features from '../Components/home/Features/Features'
import Destination from '../Components/home/Destination/Destination'
import Service from '../Components/home/Service/Service'
import Packages from '../Components/home/Packages/Packages'
import Registration from '../Components/home/Registration/Registration'
import Teams from '../Components/home/Teams/Teams'
import Testimonial from '../Components/home/Testimonial/Testimonial'
import Footer from '../Components/home/Footer/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />


        {/* <link rel="preconnect" href="https://fonts.gstatic.com"> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">  */}

        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />

        {/* <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" /> */}
      </Head>
      <main className={styles.main}>
        <Topbar />
        <Navbar />
        <Carousel />
        <Booking />
        <About />
        <Features />
        <Destination />
        <Service />
        <Packages />
        <Registration />
        <Teams />
        <Testimonial />
        <Blog />
        <Footer />

        {/* <Script src="https://example.com/script.js" strategy="worker" /> */}
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js"></Script>
        <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></Script>
        <Script src="../styles/lib/easing/easing.min.js"></Script>
        <Script src="../styles/lib/owlcarousel/owl.carousel.min.js"></Script>
        <Script src="../styles/lib/tempusdominus/js/moment.min.js"></Script>
        <Script src="../styles/lib/tempusdominus/js/moment-timezone.min.js"></Script>
        <Script src="../styles/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></Script>

        {/* <Script src="mail/jqBootstrapValidation.min.js"></Script>
        <Script src="mail/contact.js"></Script> */}

        <Script src="../styles/js/main.js"></Script>
      </main>
    </>
  )
}
