import React from "react";

function Footer() {
  return (
    <div id="footer" className="d-flex flex-row fixed-bottom">
      <h1>Copyright &copy; {new Date().getFullYear()}</h1>
    </div>
  );
}

export default Footer;
