import React from "react";

function Projects() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center mt-5 mb-5">PROJECTS</h1>
          </div>
          <div className="col-md-6">
            <a href="https://reactuserwavey.netlify.app/" target="_blank">
              <img
                className="img-fluid shadow-lg projectss ml-2"
                style={{ borderRadius: "4%" }}
                src="/Images/user form.png"
                alt=""
              />
            </a>
            <h2 className="mt-4 ml-2" style={{ color: "#24528b" }}>
              React Form
            </h2>
            <p style={{ color: "#6c7177", fontSize: "large" }} className="ml-2">
              This is a form built with react to create user data and retrieve
              it when needed. I built this app to practice the "Create" and
              "Retrieve" concepts in CRUD. In this webapp, there is a form
              available for the user to fill and the data is then rendered on
              the other half of the screen. I created this using React and React
              Bootstrap.
            </p>
          </div>
          <div className="col-md-6">
            <a href="https://wack-a-molewavey.netlify.app/" target="_blank">
              <img
                className="img-fluid shadow-lg projectss ml-2"
                style={{ borderRadius: "4%" }}
                src="/Images/wack-a-mole.png"
                alt=""
              />
            </a>
            <h2 className="mt-4 ml-2" style={{ color: "#24528b" }}>
              Wack-a-Mole
            </h2>
            <p style={{ color: "#6c7177", fontSize: "large" }} className="ml-2">
              This webapp is a simple game of Wack-a-mole I built to practice
              JavaScript concepts and to see how far my understanding of these
              concepts were. I used vanilla JavaScript because I had not learned
              React yet at the time. However I hope to convert it to react soon
              enough.
            </p>
          </div>
          <div className="col-md-6">
            <a href="https://reactcounterwavey.netlify.app/" target="_blank">
              <img
                className="img-fluid shadow-lg projectss ml-2"
                style={{ borderRadius: "4%" }}
                src="/Images/counter.png"
                alt=""
              />
            </a>
            <h2 className="mt-4 ml-2" style={{ color: "#24528b" }}>
              Counter
            </h2>
            <p style={{ color: "#6c7177", fontSize: "large" }} className="ml-2">
              This here is a webapp I built to practice "State" and "useState"
              in React. I basically stored the number in a state so it could be
              changed whenever through an eventListener. I created it in a class
              and functional component so as to understand how state works in
              either component.
            </p>
          </div>
          <div className="col-md-6">
            <a href="https://calendly-clonewavey.netlify.app/" target="_blank">
              <img
                className="img-fluid shadow-lg projectss mr-2"
                style={{ borderRadius: "4%" }}
                src="/Images/screencapture-127-0-0-1-5500-calendly-html-2022-03-25-22_10_54.png"
                alt=""
              />
            </a>
            <h2 className="mt-4 mr-2" style={{ color: "#24528b" }}>
              Calendly Website
            </h2>
            <p style={{ color: "#6c7177", fontSize: "large" }} className="mr-2">
              This is a clone of the front-end interface of the Calendly
              website. I designed this as a mini-project to practice HTML, CSS
              and Bootstrap.
            </p>
          </div>
          <div className="col-md-6">
            <a href="https://twitter-clone-wavey.netlify.app/" target="_blank">
              <img
                className="img-fluid shadow-lg projectss ml-2"
                style={{ borderRadius: "4%" }}
                src="/Images/twitter.png"
                alt=""
              />
            </a>
            <h2 className="mt-4 ml-2" style={{ color: "#24528b" }}>
              Twitter
            </h2>
            <p style={{ color: "#6c7177", fontSize: "large" }} className="ml-2">
              This was my attempt to clone the front-end user interface of my
              twitter homepage. I am yet to make it interactive, however since I
              designed it using Bootstrap, it is responsive to screen size.
            </p>
          </div>
          <div className="col-md-6">
            <a href="https://pizzamaniawavey.netlify.app/" target="_blank">
              <img
                className="img-fluid shadow-lg projectss ml-2"
                style={{ borderRadius: "4%" }}
                src="/Images/Pizzamania.png"
                alt=""
              />
            </a>
            <h2 className="mt-4 ml-2" style={{ color: "#24528b" }}>
              Pizza Website
            </h2>
            <p style={{ color: "#6c7177", fontSize: "large" }} className="ml-2">
              This is my attempt at designing the front-end of a pizza store
              website using Bootstrap and CSS. It is responsive to screen size
              but not interactive (yet).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
