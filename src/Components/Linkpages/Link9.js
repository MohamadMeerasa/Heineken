import React from "react";
import './Link.css';
import Navbar from "../Navbar";
import Footer from "../Footer";


const Link9 = () => {
  return (
  <div className="links">
      <Navbar />
    <div className="container">
      <div className="column">
        <h3 className="perfect" style={{marginTop : "170px"}}>Guinness Perfect Pour</h3>
         <br />
      </div>

  <div className="cardstart" style={{marginTop : "30px"}}>
    <div className="cardf">
      <div className="cardf-image-container">
        <video className="card-video" width="100%" height="100%" controls poster="link91.jpg">
          <source src="link91.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title"></h2>
        <h5 className="cardf-description">
          {/* <h5>Ensure that the beer keg is empty</h5> */}<br/>
          {/* <h5> Open up the tap by pressing the button on the left</h5>  */}
        </h5>
      </div>
    </div>
     </div>
  </div>
<Footer />
</div>

    )
}

export default Link9;