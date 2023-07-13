import React from "react";
import './Link.css';


const Link10 = () => {
  return (
    <div className="links">
    <div className="container">
    <div className="column">
    <h5 className="perfect" style={{marginTop : "170px"}}>Perfect Pour for Heineken</h5>
    <br />
    </div>

    <div className="cardstart" style={{marginTop : "30px"}}>

    <div className="cardf">
      <div className="cardf-image-container">
      <video width="100%" height="100%" controls poster="step1.webp">
          <source src="file.mp4" type="video/mp4" />
        </video>      </div>
      <div className="cardf-content">
        <h2 className="cardf-title"></h2>
        <h5 className="cardf-description"><h5> <b>Step 1 :  </b>Rinse the beer glass
        <b style={{fontWeight:'500', fontSize:'1rem' , marginLeft:'5px'}}>Hold the glass by the base and rinse it, and avoid 
            touching the upper section of the glass to keep the beer cold 
            and at the right foam density </b></h5> </h5>
      </div>
    </div>

     
<div className="cardf">
      <div className="cardf-image-container">
      <video width="100%" height="100%" controls poster="step1.webp">
          <source src="file2.mp4" type="video/mp4" />
        </video>     
         </div>
      <div className="cardf-content">
        <h2 className="cardf-title"></h2>
        <h5 className="cardf-description"><h5> <b>Step 2 :  </b>Start dispensing the beer by
             pulling the tap handle towards you while holding the glass at a 45 degree angle
             <b style={{fontWeight:'500', fontSize:'1rem' , marginLeft:'5px'}}>(IMPORTANT) Ensure that the tap is not touching the beer for hygiene purposes</b></h5>
        </h5>
      </div>
    </div>
 
    <div className="cardf">
      <div className="cardf-image-container">
      <video width="100%" height="100%" controls poster="step3.webp">
          <source src="file3.mp4" type="video/mp4" />
        </video>     
         </div>
      <div className="cardf-content">
        <h2 className="cardf-title"></h2>
        <h5 className="cardf-description"><h5> <b>Step 3 :  </b>When the glass is almost 3/4 full, gradually straighten it, 
            turn off the tap and push the handle away from you for a foam head
            <b style={{fontWeight:'500', fontSize:'1rem' , marginLeft:'5px' }}>(IMPORTANT) Use a skimmer to skim off any excess foam. The foam head should be around 2 fingers' height</b>
          </h5> 
          </h5>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
      <video width="100%" height="100%" controls poster="step1.webp">
          <source src="file4.mp4" type="video/mp4" />
        </video>     
         </div>
      <div className="cardf-content">
        <h2 className="cardf-title"></h2>
        <h5 className="cardf-description"><h5> <b>Step 4 :  </b>Serve the beer with the right coaster and enjoy your Heineken!</h5>
       </h5>
      </div>
    </div>
    </div>

</div>
    </div>

    )
}

export default Link10;
