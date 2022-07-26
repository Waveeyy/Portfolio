import React from "react";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg navigation navbar-light w-100"
        style={{ backgroundColor: "#cfe1eb" }}
      >
        {/* <div className="container" style={{ border: "none" }}>
          <div className="row"> */}
        <a className="navbar-brand wavey" href="/index.html">
          <h1 className="navTopics">Wavey</h1>
          <span className="sr-only">(current)</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarNav">
              <ul
                className="navbar-nav nav-sections tabss ml-auto"
                style={{ marginRight: "20rem" }}
              >
                <li className="nav-item active mr-5">
                  <a className="navTopics nav-link" href="/individuals.html">
                    Projects <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active mr-5">
                  <a className="navTopics nav-link" href="#aboutt">
                    About
                  </a>
                </li>
                <li className="nav-item active contactt">
                  <a className="navTopics nav-link" href="/enterprise.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div> */}
        {/* </div>
        </div> */}
      </nav>
    </div>
  );
}

export default Navbar;
