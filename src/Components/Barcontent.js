import React from "react";
import "./Barcontent.css";

const Barcontent = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h1>Bar Processes</h1>
      <h4 className="hed">Click on the process that you require</h4>

      <div className="cardm-container">
        <div
          className="row row-cols-1 row-cols-md-3 g-6"
          style={{ marginTop: "80px" }}
        >
          <div className="col">
            <div className="cardm">
              <div className="card-body">
                <a href="/changing_beer_keg" className="card-link">
                  <h3>Changing a Beer KEG(ICE BANK COOLER)</h3>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="cardm">
              <div className="card-body">
                <a href="/changing_co2_cylinder" className="card-link">
                  <h3>
                    Changing a CO<sub>2</sub>Cylinder(ICE BANK COOLER)
                  </h3>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="cardm">
              <div classv="card-body">
                <a href="/changing_co2cylinder_dispenser" className="card-link">
                  <h3>
                    Changing a CO<sub>2</sub>Cylinder(DAVID DISPENSER SYSTEM)
                  </h3>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="cardm">
              <div className="card-body">
                <a href="/bar_closing" className="card-link">
                  <h3>Bar Closing(ICE BANK COOLER)</h3>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="cardm">
              <div className="card-body">
                <a href="/bar_closing_super_cold" className="card-link">
                  <h3>Bar Closing(SUPER COLD)</h3>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="cardm">
              <div className="card-body">
                <a href="/perfect_pour_heineken" className="card-link">
                  <h3>Perfect Pour For Heineken</h3>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="cardm">
              <div className="card-body">
                <a href="/daily_bar_operations(DDS)" className="card-link"><h3>Daily Bar Operations(DDS)</h3></a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="cardm">
              <div className="card-body">
                 <a href="/daily_bar_operations(IBC)" className="card-link"><h3>Daily Bar Operations(IBC)</h3></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barcontent;
