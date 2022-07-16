import React from 'react'
import Footer from '../Components/Base/Footer'
import Header from '../Components/Base/Header'

export default function Layout({children}) {
  return (
    <div class="body-wrapper">
 
          <Header />
          <main>{children}</main>
          <Footer/>
    </div>
  )
}
