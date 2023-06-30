import React from "react";
import './Link.css';
import Navbar from "../Navbar";
import Footer from "../Footer";


const Link5 = () => {
  return (
  <div className="links">
      <Navbar />
    <div className="container">
      <div className="column">
        <h3 className="perfect" style={{marginTop : "170px"}}>Changing a Beer Keg (David Dispense System)</h3>
         <br />
      </div>

  <div className="cardstart" style={{marginTop : "30px"}}>
    <div className="cardf">
      <div className="cardf-image-container">
        <video className="card-video" width="100%" height="100%" controls poster="link51.jpg">
          <source src="link51.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 1</h2>
        <h5 className="cardf-description">
          {/* <h5>Ensure that the beer keg is empty</h5> */}<br/>
          <h5> Open up the tap by pressing the button on the left</h5> 
        </h5>
      </div>
    </div>

     
    <div className="cardf">
      <div className="cardf-image-container">
        <video width="100%" height="100%" controls poster="link52.jpg">
          <source src="link52.mp4" type="video/mp4" />
        </video> 
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 2</h2>
        <h5 className="cardf-description">
          {/* <h5>Disengage and lift up dispense.</h5> */}<br/>
          <h5>Remove the beer line from the font</h5>
        </h5>
      </div>
    </div>
 
    <div className="cardf">
      <div className="cardf-image-container">
        <video width="100%" height="100%" controls poster="link53.jpg">
          <source src="link53.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 3</h2>
        <h5 className="cardf-description">
        <br/>  <h5>Disengage and lift up the coupler</h5>
        </h5>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
        <video width="100%" height="100%" controls poster="link54.jpg">
          <source src="link54.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 4</h2>
        <h5 className="cardf-description">
        <br/>  <h5>Break open the seal of the new beer keg and uncoil the beer line</h5>
       </h5>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
        <video width="100%" height="100%" controls poster="link55.jpg">
          <source src="link55.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 5</h2>
        <h5 className="cardf-description">
        <br/>  <h5>Slot the beer line up the font</h5>
        </h5>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
      <video width="100%" height="100%" controls poster="link56.jpg">
          <source src="link56.mp4" type="video/mp4" />
        </video>
              </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 6</h2>
        <h5 className="cardf-description">
        <br/>  <h5>Secure the beer line in place before closing the font</h5>
        </h5>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
      <video width="100%" height="100%" controls poster="link57.jpg">
          <source src="link57.mp4" type="video/mp4" />
        </video>
        </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 7</h2>
        <h5 className="cardf-description">
        <br/>  <h5>Slot in the coupler and engage the button to enable gas flow</h5> 
        </h5>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
      <video width="100%" height="100%" controls poster="link58.jpg">
          <source src="link58.mp4" type="video/mp4" />
        </video>
        </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 8</h2>
        <h5 className="cardf-description">
        <br/>  <h5>Remove the nozzle cover and start tapping beer</h5> 
        </h5>
      </div>
    </div>


  </div>
  </div>
<Footer />
</div>

    )
}

export default Link5;