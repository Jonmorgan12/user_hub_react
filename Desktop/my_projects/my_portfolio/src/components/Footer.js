import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div id="footerdiv" className="footer">
        <footer>
          <div className="container">
            <p>
              Copyright 2020 &copy; Jon-Morgan P. Cobb |{" "}
              <a href="#">Privacy Policy</a> | <a href="#">Terms Of Service</a>{" "}
              | Website powered by: Heroku Application{" "}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
