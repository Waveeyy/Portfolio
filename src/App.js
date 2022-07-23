import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="fullPage">
      <Navbar />

      <About />

      <Projects />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="container-fluid">
        <div className="row mx-auto text-center">
          <div className="col-md-12">
            <h2 className="mt-4" style={{ color: "#24528b" }}>
              Contacts
            </h2>
            <br />
            <br />
          </div>
        </div>
        <div className="row contact-links">
          <a target="_blank" href="https://github.com/Waveeyy">
            <button type="button" className="btn contactss">
              Github
            </button>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/daniel-agyapong-a72204129/"
          >
            <button type="button" className="btn contactss">
              Linkedin
            </button>
          </a>
          <a target="_blank" href="mailto:danieloagyapong@gmail.com">
            <button type="button" className="btn contactss">
              Email
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
