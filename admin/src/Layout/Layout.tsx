import React from 'react'
import { Helmet } from 'react-helmet-async'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Layout({children}: React.PropsWithChildren<{}>) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
      </Helmet>
      <div className="container-scroller">
        <Header />
        <main>
          <div className="container-fluid page-body-wrapper">
            <Sidebar />
            <div className="main-panel">
              <div className="content-wrapper">
                
              {children}
            </div>
              <Footer/>
            </div>
            
        </div>
        </main>
          </div>
    </>
  )
}
