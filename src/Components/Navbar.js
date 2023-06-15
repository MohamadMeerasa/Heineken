import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <label className="logo">
        <img className="image" src="/logoimage.webp" alt="logo" />
      </label>

      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <div className="right-menu">
            <Link className="bar" to="/barprocesses">
              Barprocesses
            </Link>
            <div className="dropdown-menu">
              <div className="drop-items">
                <Link to="/changing_beer_keg"> Change IBC keg</Link>
                <Link to="/changing_co2_cylinder"> Change IBC CO2</Link>
                <Link to="/changing_co2cylinder_dispenser">
                  Bar Closing(IBC)
                </Link>
                <Link to="/bar_closing"> Bar Closing (Supercold)</Link>
                <Link to="/bar_closing_super_cold"> Change DDS CO2</Link>
                <Link to="/perfect_pour_heineken"> Heineken Perfect pour</Link>
                <Link to="/daily_bar_operations(DDS)"> Daily Bar Operations(DDS)</Link>
                <Link to="/perfect_pour_heineken">Daily Bar Operations(IBC) </Link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
