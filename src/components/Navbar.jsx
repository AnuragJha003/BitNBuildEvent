import React from "react";

export default function Navbar() {
  return (
    <nav className="nav--container">
      <img
        className="nav--logo"
        src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/small-logo.png"
      ></img>
      <h4 className="nav--text">
        <a
          href="https://gdsc-ju.vercel.app/"
          style={{ textDecoration: "none", color: "rgb(111, 111, 115)" }}
        >
          GDSC Jadavpur University
        </a>
      </h4>
    </nav>
  );
}
