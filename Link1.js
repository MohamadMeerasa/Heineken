import React from "react";
import './link.css';
import Navbar from "../Navbar";
import Footer from "../Footer";


const Link1 = () => {
  return (
    <div className="links">
        <Navbar />
    <div className="container">
    <div className="column">
    <p className="perfect" style={{marginTop : "170px"}}>Changing a Beer KEG (Ice Bank Cooler)</p>
    <br />
    </div>

 <div className="cardstart" style={{marginTop : "30px"}}>
    <div className="cardf">
      <div className="cardf-image-container">
        <img src="/link11.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 1</h2>
        <p className="cardf-description"><h3>Ensure that the beer keg is empty</h3>
          <h6> The beer tap will only dispense foam when the keg is empty</h6> </p>
      </div>
    </div>

     
<div className="cardf">
      <div className="cardf-image-container">
        <img src="/link12.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 2</h2>
        <p className="cardf-description"><h3>Disengage and lift up dispenser
</h3><h6>Hold the entire lever down, before squeezing the bottom lever so that you can lift up the whole lever</h6></p>
      </div>
    </div>
 
    <div className="cardf">
      <div className="cardf-image-container">
        <img src="/link13.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 3</h2>
        <p className="cardf-description"><h3>Turn anti-clockwise and remove dispenser</h3>
           </p>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
        <img src="/link14.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 4</h2>
        <p className="cardf-description"><h3>Break open the seal of the new beer keg</h3>
       </p>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
        <img src="/link15.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 5</h2>
        <p className="cardf-description"><h3>Connect the dispenser and turn it clockwise to lock it</h3>
          <h6>You have to align the dispenser head with the spearhead before being able to turn the dispenser to secure it. Do not force the 
            dispenser onto the spearhead as it can cause damage to either components. </h6> </p>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
        <img src="/link16.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 6</h2>
        <p className="cardf-description"><h3>Engage the dispenser by squeezing the lever and pushing down</h3>
          <h6>Squeeze the bottom half of the lever before pushing the entire lever down to lock the dispenser </h6> </p>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
        <img src="/link17.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 7</h2>
        <p className="cardf-description"><h3>Test the flow of beer</h3>
          <h6> Pull the beer tap to dispense beer and stop when you see clear beer flow</h6> </p>
      </div>
    </div>
    </div>
    </div>
    <Footer />
    </div>

    )
}

export default Link1;
