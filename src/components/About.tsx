import "./styles.css";

const About = () => {
  return (
    <div id="about">
      <div className="about-header">
        <h1>ABOUT</h1>
      </div>
      <div className="about-info">
        <div className="about-text">
          <div className="aboutme">
            <p>
              Hi, I'm <span>Vladimir Luna Santos</span> from Colombia{" "}
              <i className="far fa-smile"></i>
            </p>
            <p>I'm a Computer Science Engineer / Software Developer.</p>
            <p>
              I consider myself a natural born logical thinker and I love to
              face new programming challenges!
            </p>
          </div>
          <div className="about-stack">
            <h5>DEVELOPMENT STACK</h5>

            <ul className="">
              <li>Javascript</li>
              <li>NodeJS</li>
              <li>ReactJS</li>
              <li>React Native</li>
              <li>Databases</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about-social">
        <div className="about-contact">
          <h5>CONTACT INFORMATION</h5>
          <div className="contact-links">
            <h6>
              <i className="fas fa-phone-square-alt"></i>+57 314 2997313
            </h6>
            <h6>
              <i className="fas fa-envelope"></i>vladlunasan@gmail.com
            </h6>
            <h6>
              <i className="fab fa-discord"></i>vlunasan#3650
            </h6>
          </div>
        </div>
        <span>Let's build your idea!</span>
        <div className="about-links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/noomdalv"
            className="media-icon"
          >
            <i className="fab fa-github-square"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/vladlunasan"
            className="media-icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/noomdalv"
            className="media-icon"
          >
            <i className="fab fa-twitter-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
