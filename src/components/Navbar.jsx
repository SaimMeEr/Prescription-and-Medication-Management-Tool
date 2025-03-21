import React from "react";
import { Link } from "react-router-dom";
import { FaPills, FaCalendarAlt, FaChartBar } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Med Management</h2>
      <ul>
        <li><Link to="/"><FaPills /> Dashboard</Link></li>
        <li><Link to="/schedule"><FaCalendarAlt /> Schedule</Link></li>
        <li><Link to="/analytics"><FaChartBar /> Analytics</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

