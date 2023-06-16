import "./App.css";
import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Barprocesses from "./Components/Barprocesses";
import Link1 from "./Components/Linkpages/Link1";
import Link2 from "./Components/Linkpages/Link2";
import Link3 from "./Components/Linkpages/Link3";
import Link5 from "./Components/Linkpages/Link5";
import Link6 from "./Components/Linkpages/Link6";
import Link4 from "./Components/Linkpages/Link4";
import Link07 from "./Components/Linkpages/Link07";
// import Link8 from "./Components/Linkpages/Link07";
import Link9 from "./Components/Linkpages/Link9";
import Link10 from "./Components/Linkpages/Link10";
import NotFound from "./Components/Linkpages/NotFound";
import Link08 from "./Components/Linkpages/Link08";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/barprocesses" element={<Barprocesses />} />
          <Route path="/bar_closing" element={<Link1 />} />
          <Route path="/bar_closing_super_cold" element={<Link2 />} />
          <Route path="/changing_co2cylinder_dispenser" element={<Link3 />} />
          <Route path="/changing_co2_cylinder" element={<Link4 />} />
          <Route path="/changing_dds_beerkeg" element={<Link5 />} />
          <Route path="/changing_beer_keg" element={<Link6 />} />
          <Route path="/daily_bar_operations(DDS)" element={<Link07 />} />
          <Route path="/daily_bar_operations(IBC)" element={<Link08 />} />   
          <Route path="/guinness_perfect_pour" element={<Link9 />} /> 
          <Route path="/perfect_pour_heineken" element={<Link10 />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
