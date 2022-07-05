import React from "react";
import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AddProduct from "./Pages/AddProduct";
import './App.css'
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};
function App() {
  return (
    <Provider template={AlertTemplate} {...options}>

    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        <Route path="/add-product" element={<AddProduct />} />
        
     
      </Routes>
    </Layout>
    </Provider>
  );
}

export default App;
