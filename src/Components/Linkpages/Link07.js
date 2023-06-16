import React from "react";
import './Link.css';
import Navbar from "../Navbar";
import Footer from "../Footer";


const Link07 = () => {
  return (
    <div className="links">
        <Navbar />
    <div className="container">
    <div className="column">
    <h3 className="perfect" style={{marginTop : "156px"}}>Daily Bar Operations(DDS)</h3>
   
    <br />
    </div>

    <div className="cardstart" style={{marginTop : "30px"}}>
     <div className="cardf">
      <div className="cardf-image-container">
        <img width="100%" height="100%" src="link7.png" alt="pic" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 1</h2>
        <h5 className="cardf-description"> Adopt a First In First Out method when using your kegs. The kegs with an earlier date of manufacturing/date of expiry should be used first</h5>
         
      </div>
    </div>

     

    <div className="carde" style={{ marginTop: "4%" }}>
  <div className="carde-content">
    <h2 className="carde-title">Step 2</h2>
    <h5 className="carde-description">Check the servicing card for your chillers to see if they have missed servicing or not.(IBC:15 days, DDS:3 months)</h5>
   
  </div>
  <div className="container" style={{marginTop: "2%"}} >
      <div className="row">
        <div className="col-md-6">
          <img  src="pic2.jpg" alt="piccs" style={{maxWidth:"100%"}} />
        </div>
        <div className="col-md-6">
        <img  src="pic22.jpg" alt="piccs" style={{maxWidth:"100%"}} />

        </div>
      </div>
   
  </div>
</div>


    <div className="carde" style={{ marginTop: "4%" }}>
  <div className="carde-content">
    <h2 className="carde-title">Step 3</h2>
      <h5 className="carde-description" >Ensure that the beer kegs are chilled for at least 12 hours before use.</h5>
  </div>
  <div className="container" style={{marginTop:"2%"}}>
      <div className="row">
        <div className="col-md-6">
          <img  src="pic3.jpg" alt="picccs" style={{maxWidth:"100%"}} />
        </div>
        <div className="col-md-6"  >
          <video  controls poster="link35a.webp" style={{maxWidth:"100%",minWidth:"96%"}}>
            <source  src="link35a.mp4" type="video/mp4"  />
          </video>
        </div>
      </div>
   
  </div>
</div>


    

    <div className="cardf" style={{marginTop:"4%"}}> 
    <div className="cardf-image-container" style={{alignItems:"center",justifyContent:"center"}}>
      <video width={"100%"} height={"100%"} controls poster="link34a.webp">
          <source src="link34a.mp4" type="video/mp4" />
        </video>
              </div>
    <div className="cardf-content">
        <h2 className="cardf-title">Step 4</h2>
        <h5 className="cardf-description">Check the gas cylinder if there is sufficient volume in the cylinder. If the gas cylinder is depleted, the keg coupler will not be activated.</h5>
      </div>
    </div>

    

             <div className="cardd-content" >
              <h2 className="cardff-title" >Step 5 : Connect the beer keg</h2>
              
              <div className="container" style={{marginTop:"2%"}}>
                <div className="row">
                <div className="col-md-6">
                  <video width="100%" height="100%" controls poster="link35a.webp">
                    <source src="link35a.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="col-md-6" >
                  <h5 className="cardff-substep-title" >
                    Step 5.1: Slot the beer line up the font
                  </h5>
                </div>
                </div>
              {/* <div className="cardff-substep"> */}
              <div className="row">
                <div className="col-md-6" >
                  <video width="100%" height="100%" controls poster="link36a.webp">
                    <source src="link36a.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="col-md-6" >
                  <h5 className="cardff-substep-title">
                    Step 5.2: Secure the beer line in place before closing the font
                  </h5>
                </div>
                </div>
              {/* <div className="cardff-substep" > */}
              <div className="row">
                <div className="col-md-6" >
                  <video width="100%" height="100%" controls poster="link37a.webp">
                    <source src="link37a.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="col-md-6" >
                  <h5 className="cardff-substep-title" >
                    Step 5.3: Slot in the coupler and engage the button to enable gas flow
                  </h5>
                </div>
                </div>
            </div>
            </div>

            <div className="cardd-content" style={{marginTop:"4%"}}>
              <h2 className="cardff-title"  >Step 6 : Connect the beer keg</h2>
              
              <div className="container" style={{marginTop:"2%"}}>
                <div className="row">
                <div className="col-md-6" >
                  <video width="100%" height="100%" controls poster="link35a.webp">
                    <source src="link35a.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="col-md-6">
                  <h5 className="cardff-substep-title" >
                    Step 6.1: prepare a brush and a pail of water. Soak the brush into the water.
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6" >
                  <video width="100%" height="100%" controls poster="link36a.webp">
                    <source src="link36a.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="col-md-6">
                  <h5 className="cardff-substep-title">
                    Step 6.2: Scrub the tap thoroughly with the brush.
                  </h5>
                </div>
                </div>
              
              <div className="row">
                <div className="col-md-6" >
                  <video width="100%" height="100%" controls poster="link37a.webp">
                    <source src="link37a.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="col-md-6">
                  <h5 className="cardff-substep-title">
                    Step 6.3: Turn on the tap to flush out any residue.
                  </h5>
                </div>
              </div>
            </div>
        </div>

  <div className="cardf" style={{flexDirection:"column",alignItems:"center",marginTop:"4%"}}>
  <div className="cardf-content">
    <h2 className="cardf-title">Step 7</h2>
      <h5 className="cardf-description">Engage the dispenser by pressing on the button to start the flow of CO2.</h5>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-6" style={{marginTop:"1%"}}>
        <img src="pic61.jpg" alt="pics" />
      </div>
      <div className="col-md-6" style={{marginTop:"1%"}}>
        <img src="pic62.jpg" alt="pics" />
      </div>
      <div className="col-md-6" style={{marginTop:"1%"}}>
        <img src="pic63.jpg" alt="pics" />
      </div>
      <div className="col-md-6" style={{marginTop:"1%"}}>
        <img src="pic64.jpg" alt="pics" />
      </div>
    </div>
  </div>
  <h5>Examples of glasses that are not clean</h5>
</div>

  

    
      
    </div>
    </div>
    <Footer />
    </div>

    )
}

export default Link07;
