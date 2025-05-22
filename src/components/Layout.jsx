import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <div className="horizontal-line"></div> {/* Renamed for clarity, but we can keep the CSS class name */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;