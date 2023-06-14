import React from "react";
import "./Link.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const NotFound = () => {
  return (
    <div className="links">
      <Navbar />
      <div className="container">
        <div className="column">
          <img src="../error-page-not-found-vector-27898543.jpg" alt="sdf" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
