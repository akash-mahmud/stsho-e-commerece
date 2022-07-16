import Layout from '../Layout'


import '../styles/material-design-iconic-font.min.css'
import '../styles/font-awesome.min.css'
import '../styles/fontawesome-stars.css'
import '../styles/meanmenu.css'
import '../styles/owl.carousel.min.css'
import '../styles/slick.css'
import '../styles/animate.css'
import '../styles/jquery-ui.min.css'
import '../styles/venobox.css'
import '../styles/nice-select.css'
import '../styles/magnific-popup.css'
import '../styles/bootstrap.min.css'
import '../styles/helper.css'
import '../styles/globals.css'
import  '../styles/responsive.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Layout>
        
    <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
