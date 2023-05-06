import React from "react";
import './link.css';
import Navbar from "../Navbar";
import Footer from "../Footer";


const Link3 = () => {
  return (
    <div className="links">
        <Navbar />
    <div className="container">
    <div className="column">
    <p className="perfect" style={{marginTop : "170px"}}>Changing a CO<sub>2</sub> Cylinder (David Dispenser System)</p>
    <br />
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
        <img src="/link31.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 1</h2>
        <p className="cardf-description"><h3>Check if the CO2 cylinder is empty</h3>
          <h6>The button cannot be engaged may be due to
           - The CO2 cylinder not turned on (turn the cylinder knob anti-clockwise and try to press the button again)<br />
           - The CO2 cylinder is empty</h6> </p>
      </div>
    </div>

     
<div className="cardf">
      <div className="cardf-image-container">
        <img src="/link32.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 2</h2>
        <p className="cardf-description"><h3>Turn off the CO2 cylinder by turning the cylinder knob clockwise</h3>
        <h6>(IMPORTANT) Ensure that the knob is fully turned (hand-tight) before pulling on the release key to release remaining pressure</h6></p>
      </div>
    </div>
 
    <div className="cardf">
      <div className="cardf-image-container">
        <img src="/link33.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 3</h2>
        <p className="cardf-description"><h3>Use the attached spanner to loosen the nut connecting the cylinder and regulator before unscrewing it</h3>
           </p>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
        <img src="/link34.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 4</h2>
        <p className="cardf-description"><h3>Ensure that there is a washer on the regulator before connecting to a new cylinder</h3>
        <h6>(IMPORTANT) The washer MUST be present to prevent gas leaks</h6>
       </p>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
        <img src="/link35.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 5</h2>
        <p className="cardf-description"><h3>Connect the regulator to a new cylinder and tighten the nut with the attached spanner</h3>
          <h6>(IMPORTANT) Double check that the nut is properly tightened</h6> </p>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
        <img src="/link36.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 6</h2>
        <p className="cardf-description"><h3>Turn on the CO2 cylinder by turning the knob anti-clockwise</h3></p>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
        <img src="/link37.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 7</h2>
        <p className="cardf-description"><h3>Engage the dispenser by pressing on the button to start the flow of CO2</h3> </p>
      </div>
    </div>

    </div>
    <Footer />
    </div>

    )
}

export default Link3;
