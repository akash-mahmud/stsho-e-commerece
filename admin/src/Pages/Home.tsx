import React from 'react'
import { Helmet } from 'react-helmet-async';
import { useIsAuth } from '../utils/useIsAuth';
export default function Home() {
  useIsAuth();
  return (
      <>
      <Helmet>
        <title>Stshio Admin - Dashboard</title>
  
        <meta name="description"  content='Dashboiard of Stshio e-commerce admin panel'/>
      </Helmet>   
       
          <div className="page-header">
            <h3 className="page-title">
              Dashboard
            </h3>
          </div>
       
      
      
         
        
    
    
     
      
     
    </>
  )
}
