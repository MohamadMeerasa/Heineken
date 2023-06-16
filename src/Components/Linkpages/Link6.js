import React from "react";
import './Link.css';
import Navbar from "../Navbar";
import Footer from "../Footer";


const Link6 = () => {
  return (
  <div className="links">
      <Navbar />
    <div className="container">
      <div className="column">
        <h3 className="perfect" style={{marginTop : "170px"}}>Changing a Beer KEG (Ice Bank Cooler)</h3>
         <br />
      </div>

  <div className="cardstart" style={{marginTop : "30px"}}>
    <div className="cardf">
      <div className="cardf-image-container">
        <video className="card-video" width="100%" height="100%" controls poster="link11.webp">
          <source src="link11.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 1</h2>
        <h5 className="cardf-description">
          <h5>Ensure that the beer keg is empty</h5>
          <h6> The beer tap will only dispense foam when the keg is empty</h6> 
        </h5>
      </div>
    </div>

     
    <div className="cardf">
      <div className="cardf-image-container">
        <video width="100%" height="100%" controls poster="link12.webp">
          <source src="link12.mp4" type="video/mp4" />
        </video> 
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 2</h2>
        <h5 className="cardf-description">
          <h5>Disengage and lift up dispense.</h5>
          <h6>Hold the entire lever down, before squeezing the bottom lever so that you can lift up the whole lever</h6>
        </h5>
      </div>
    </div>
 
    <div className="cardf">
      <div className="cardf-image-container">
        <video width="100%" height="100%" controls poster="link13.webp">
          <source src="link13.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 3</h2>
        <h5 className="cardf-description">
          <h5>Turn anti-clockwise and remove dispenser</h5>
        </h5>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
        <video width="100%" height="100%" controls poster="link14.webp">
          <source src="link14.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 4</h2>
        <h5 className="cardf-description">
          <h5>Break open the seal of the new beer keg</h5>
       </h5>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
        <video width="100%" height="100%" controls poster="link15.webp">
          <source src="link15.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 5</h2>
        <h5 className="cardf-description">
          <h5>Connect the dispenser and turn it clockwise to lock it</h5>
          <h6>You have to align the dispenser head with the spearhead before being able to turn the dispenser to secure it. Do not force the 
            dispenser onto the spearhead as it can cause damage to either components. </h6> 
        </h5>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
      <video width="100%" height="100%" controls poster="link16.webp">
          <source src="link16.mp4" type="video/mp4" />
        </video>
              </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 6</h2>
        <h5 className="cardf-description">
          <h5>Engage the dispenser by squeezing the lever and pushing down</h5>
          <h6>Squeeze the bottom half of the lever before pushing the entire lever down to lock the dispenser </h6> 
        </h5>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
      <video width="100%" height="100%" controls poster="link17.webp">
          <source src="link17.mp4" type="video/mp4" />
        </video>
        </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 7</h2>
        <h5 className="cardf-description"><h5>Test the flow of beer</h5>
          <h6> Pull the beer tap to dispense beer and stop when you see clear beer flow</h6> 
        </h5>
      </div>
    </div>
  </div>
  </div>
<Footer />
</div>

    )
}

export default Link6;