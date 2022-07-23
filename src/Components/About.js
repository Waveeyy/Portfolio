import React from "react";

function About() {
  return (
    <div>
      <div className="container" id="aboutt">
        <div className="row mt-5 about">
          <div className="col-md-6 mt-5">
            <h1>
              HI! MY NAME IS <br />
              DANIEL AKA WAVEY, <br />
              AN UPCOMING FULL- STACKED <br />
              SOFTWARE DEVELOPER. THIS <br />
              IS MY PORTFOLIO WITH <br />A FEW OF MY MINI-PROJECTS
            </h1>
            <br />

            <a target="_blank" href="https://github.com/Waveeyy">
              <button type="button" className="btn contactss">
                Github
              </button>
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/daniel-agyapong-a72204129/"
            >
              <button type="button" className="btn contactss ml-5">
                Linkedin
              </button>
            </a>

            <a target="_blank" href="mailto:danieloagyapong@gmail.com">
              <button type="button" className="btn contactss ml-5">
                Email
              </button>
            </a>
          </div>
          <div className="col-md-6 mt-5">
            <img
              src="/Images/photo_2022-05-16_20-37-58.jpg"
              alt=""
              className="img-fluid mb-5"
              style={{ height: "400px", width: "350px", borderRadius: "2%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
