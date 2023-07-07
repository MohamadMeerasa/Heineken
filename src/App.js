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
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar/><Home /><Footer/></>} />
          <Route path="/barprocesses" element={<><Navbar/><Barprocesses /><Footer/></>} />
          <Route path="/bar_closing" element={<><Navbar/><Link1 /><Footer/></>} />
          <Route path="/bar_closing_super_cold" element={<><Navbar/><Link2 /><Footer/></>} />
          <Route path="/changing_co2cylinder_dispenser" element={<><Navbar/><Link3 /><Footer/></>} />
          <Route path="/changing_co2_cylinder" element={<><Navbar/><Link4 /><Footer/></>} />
          <Route path="/changing_dds_beerkeg" element={<><Navbar/><Link5 /><Footer/></>} />
          <Route path="/changing_beer_keg" element={<><Navbar/><Link6 /><Footer/></>} />
          <Route path="/daily_bar_operations(DDS)" element={<><Navbar/><Link07 /><Footer/></>} />
          <Route path="/daily_bar_operations(IBC)" element={<><Navbar/><Link08 /><Footer/></>} />   
          <Route path="/guinness_perfect_pour" element={<><Navbar/><Link9 /><Footer/></>} /> 
          <Route path="/perfect_pour_heineken" element={<><Navbar/><Link10 /><Footer/></>} /> 
          <Route path="*" element={<><Navbar/><NotFound /><Footer/></>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
