import React from "react";
import './Link.css';


const Link5 = () => {
  return (
  <div className="links">
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
        <h2 className="cardf-title"></h2>
        <h5 className="cardf-description">
          {/* <h5>Ensure that the beer keg is empty</h5> */}
          <h5> <b>Step 1 :  </b> Open up the tap by pressing the button on the left</h5> 
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
        <h2 className="cardf-title"></h2>
        <h5 className="cardf-description">
          {/* <h5>Disengage and lift up dispense.</h5> */}<br/>
          <h5> <b>Step 2 :  </b>Remove the beer line from the font</h5>
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
        <h2 className="cardf-title"></h2>
        <h5 className="cardf-description">
         <h5> <b>Step 3 :  </b>Disengage and lift up the coupler</h5>
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
        <h2 className="cardf-title"></h2>
        <h5 className="cardf-description">
         <h5> <b>Step 4 :  </b>Break open the seal of the new beer keg and uncoil the beer line</h5>
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
        <h2 className="cardf-title"></h2>
        <h5 className="cardf-description">
          <h5> <b>Step 5 :  </b>Slot the beer line up the font</h5>
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
        <h2 className="cardf-title"></h2>
        <h5 className="cardf-description">
         <h5> <b>Step 6 :  </b>Secure the beer line in place before closing the font</h5>
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
        <h2 className="cardf-title"></h2>
        <h5 className="cardf-description">
         <h5> <b>Step 7 :  </b>Slot in the coupler and engage the button to enable gas flow</h5> 
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
        <h2 className="cardf-title"></h2>
        <h5 className="cardf-description">
         <h5> <b>Step 8 :  </b>Remove the nozzle cover and start tapping beer</h5> 
        </h5>
      </div>
    </div>


  </div>
  </div>
</div>

    )
}

export default Link5;