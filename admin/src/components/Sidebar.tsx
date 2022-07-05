import React from 'react'
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
      <>
         <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <div className="nav-link">
              <div className="profile-image">
                <img src="images/faces/face5.jpg" alt="image"/>
              </div>
              <div className="profile-name">
                <p className="name">
                  Welcome Jane
                </p>
                <p className="designation">
                  Super Admin
                </p>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="fa fa-home menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/add-product">
     
              <i className="fa fa-folder menu-icon"></i>
              <span className="menu-title">Add Product</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="fa fa-users menu-icon"></i>
              <span className="menu-title">Add Employee</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="fa  fa-window-restore menu-icon"></i>
              <span className="menu-title">Add Category</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="fa fa-folder-open menu-icon"></i>
              <span className="menu-title">Add Sub Category</span>
            </Link>
          </li>
        </ul>
      </nav>  
    </>
  )
}
