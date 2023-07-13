import React from "react";
import './Link.css';


const Link6 = () => {
  return (
  <div className="links">
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
        <h2 className="cardf-title"></h2>
        <h5 className="cardf-description">
          <h5> <b>Step 1 :  </b>Ensure that the beer keg is empty
          <b style={{fontWeight:'500', fontSize:'1rem' , marginLeft:'5px'}}> The beer tap will only dispense foam when the keg is empty</b> </h5>
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
        <h2 className="cardf-title"></h2>
        <h5 className="cardf-description">
          <h5> <b>Step 2 :  </b>Disengage and lift up dispense.
          <b style={{fontWeight:'500', fontSize:'1rem' , marginLeft:'5px'}}>Hold the entire lever down, before squeezing the bottom lever so that you can lift up the whole lever</b></h5>
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
        <h2 className="cardf-title"></h2>
        <h5 className="cardf-description">
          <h5> <b>Step 3 :  </b>Turn anti-clockwise and remove dispenser</h5>
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
        <h2 className="cardf-title"></h2>
        <h5 className="cardf-description">
          <h5> <b>Step 4 :  </b>Break open the seal of the new beer keg</h5>
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
        <h2 className="cardf-title"></h2>
        <h5 className="cardf-description">
          <h5> <b>Step 5 :  </b>Connect the dispenser and turn it clockwise to lock it
          <b style={{fontWeight:'500', fontSize:'1rem' , marginLeft:'5px'}}>You have to align the dispenser head with the spearhead before being able to turn the dispenser to secure it. Do not force the 
            dispenser onto the spearhead as it can cause damage to either components. </b></h5> 
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
        <h2 className="cardf-title"></h2>
        <h5 className="cardf-description">
          <h5> <b>Step 6 :  </b>Engage the dispenser by squeezing the lever and pushing down
          <b style={{fontWeight:'500', fontSize:'1rem' , marginLeft:'5px'}}>Squeeze the bottom half of the lever before pushing the entire lever down to lock the dispenser </b></h5> 
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
        <h2 className="cardf-title"></h2>
        <h5 className="cardf-description"><h5> <b>Step 7 : </b>Test the flow of beer
        <b style={{fontWeight:'500', fontSize:'1rem' , marginLeft:'5px'}}> Pull the beer tap to dispense beer and stop when you see clear beer flow</b> </h5>
        </h5>
      </div>
    </div>
  </div>
  </div>
</div>

    )
}

export default Link6;