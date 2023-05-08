import React from "react";
import './Details.css';
import Navbar from "./Navbar";


const Details =() => {
return(
<div className='details' style={{marginTop : "30px"}}>
  <Navbar />
        
<div className="container" style={{marginTop : "150px"}}>
    <div className="column">
    <p className="perfect">Perfect Pour for Heineken</p>
    <br />

    <div className="cardf">
      <div className="cardf-image-container">
        <img src="/step1.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 1</h2>
        <p className="cardf-description">Rinse the beer glass
        Hold the glass by the base and rinse it, 
        and avoid touching the upper section of the glass to keep the beer cold and at the right foam density.</p>
      </div>
    </div>
 

    <div className="cardf">
      <div className="cardf-image-container">
        <img src="/step1.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 2</h2>
        <p className="cardf-description">Start dispensing the beer by pulling the tap handle towards you while
         holding the glass at a 45 degree angle
         (IMPORTANT) Ensure that the tap is not touching the beer for hygiene purposes</p>
      </div>
    </div>


    <div className="cardf">
      <div className="cardf-image-container">
        <img src="/step3.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 3</h2>
        <p className="cardf-description">When the glass is almost 3/4 full, gradually straighten it,
         turn off the tap and push the handle away from you for a foam head
        (IMPORTANT) Use a skimmer to skim off any excess foam. The foam head should be around 2 fingers' height</p>
      </div>
    </div>
 

    <div className="cardf">
      <div className="cardf-image-container">
        <img src="/step4.webp" alt="..." className="cardf-image" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 4</h2>
        <p className="cardf-description">Serve the beer with the right coaster and enjoy your Heineken!</p>
      </div>
    </div>

    </div>   
</div>

</div>
    
  );
}

export default Details;
