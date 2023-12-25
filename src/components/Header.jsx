import React from "react";

function Header() {
  return (
    <div
      id="header"
      className="d-flex flex-row justify-content-between align-items-center"
    >
      <div>
        <h1 className="px-2">Matching numbers?</h1>
      </div>
      <div className="d-flex flex-column flex-md-row">
        <h2 className="px-2">Home</h2>
        <h2 className="px-2">Services</h2>
        <h2 className="px-2">Products</h2>
        <h2 className="px-2">Abut</h2>
      </div>
    </div>
  );
}

export default Header;
