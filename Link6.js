import React from "react";
import './link.css';
import Navbar from "../Navbar";
import Footer from "../Footer";


const Link6 = () => {
  return (
    <div className="links">
        <Navbar />
    <div className="container">
    <div className="column">
    <p className="perfect" style={{marginTop : "170px"}}>Perfect Pour for Heineken</p>
    <br />
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
        <img src="/step1.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 1</h2>
        <p className="cardf-description"><h3>Rinse the beer glass</h3>
          <h6>Hold the glass by the base and rinse it, and avoid 
            touching the upper section of the glass to keep the beer cold 
            and at the right foam density </h6> </p>
      </div>
    </div>

     
<div className="cardf">
      <div className="cardf-image-container">
        <img src="/step1.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 2</h2>
        <p className="cardf-description"><h3>Start dispensing the beer by
             pulling the tap handle towards you while holding the glass at a 45 degree angle</h3>
         <h6>(IMPORTANT) Ensure that the tap is not touching the beer for hygiene purposes</h6>
        </p>
      </div>
    </div>
 
    <div className="cardf">
      <div className="cardf-image-container">
        <img src="/step3.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 3</h2>
        <p className="cardf-description"><h3>When the glass is almost 3/4 full, gradually straighten it, 
            turn off the tap and push the handle away from you for a foam head</h3>
           <h6>(IMPORTANT) Use a skimmer to skim off any excess foam. The foam head should be around 2 fingers' height</h6>
           </p>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
        <img src="/step4.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 4</h2>
        <p className="cardf-description"><h3>Serve the beer with the right coaster and enjoy your Heineken!</h3>
       </p>
      </div>
    </div>

</div>
    <Footer />
    </div>

    )
}

export default Link6;
