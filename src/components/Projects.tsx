import React from "react";
import "./styles.css";

const Projects = () => {
  return (
    <div id="projects">
      <div className="projects-header">
        <h1>PROJECTS</h1>
      </div>

      <div className="projects-container">
        <div className="project">
          <h2 className="project-title">Activity Tracker</h2>
          <div className="project-img-container">
            <img
              className="project-img"
              src="https://i.imgur.com/7Hmwfxt.png"
              alt="activitytracker_project"
            />
          </div>
          <div className="project-info">
            <div className="project-links">
              <button type="button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://reactactivitytracker.herokuapp.com/"
                >
                  Live Demo
                </a>
              </button>
              <button type="button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/noomdalv/react_activity_tracker"
                >
                  Source
                </a>
              </button>
            </div>
            <p>
              App designed to track statistics of basic daily activities (sleep,
              work, exercise, leisure).
            </p>
            <h3>Built With:</h3>
            <ul>
              <li>Rails</li>
              <li>React</li>
              <li>Javascript</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
        </div>

        <div className="project">
          <h2 className="project-title">COVID-19 Stats Tracker</h2>
          <div className="project-img-container">
            <img
              className="project-img"
              src="https://i.imgur.com/OfPAEjt.png"
              alt="covid19_project"
            />
          </div>
          <div className="project-info">
            <div className="project-links">
              <button type="button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://covid-19statistics.herokuapp.com/"
                >
                  Live Demo
                </a>
              </button>
              <button type="button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/noomdalv/react_covid19_stats"
                >
                  Source
                </a>
              </button>
            </div>
            <p>
              Covid-19 global stats app created using Redux store, with a
              country/location search filter.
            </p>
            <h3>Built With:</h3>
            <ul>
              <li>React</li>
              <li>Javascript</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
        </div>

        <div className="project">
          <h2 className="project-title">Battleships</h2>
          <div className="project-img-container">
            <img
              className="project-img"
              src="https://i.imgur.com/1JIU4Ba.jpg"
              alt="battleships_project"
            />
          </div>
          <div className="project-info">
            <div className="project-links">
              <button type="button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://raw.githack.com/marcos-medeiros/battleship/game-setup/dist/index.html"
                >
                  Live Demo
                </a>
              </button>
              <button type="button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/noomdalv/battleship"
                >
                  Source
                </a>
              </button>
            </div>
            <p>
              Battleship game simulator made with JavaScript, implementing
              Factory Functions, and a basic bootstrap design.
            </p>
            <h3>Built With:</h3>
            <ul>
              <li>Javascript</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
        </div>

        <div className="project">
          <h2 className="project-title">Weather App</h2>
          <div className="project-img-container">
            <img
              className="project-img"
              src="https://i.imgur.com/hdB9JuU.jpg"
              alt="weatherapp_project"
            />
          </div>
          <div className="project-info">
            <div className="project-links">
              <button type="button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://raw.githack.com/noomdalv/js_weatherApp/api_config/dist/index.html"
                >
                  Live Demo
                </a>
              </button>
              <button type="button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/noomdalv/js_weatherApp"
                >
                  Source
                </a>
              </button>
            </div>
            <p>
              App created to allow users to search for the forecast in cities
              worldwide.
            </p>
            <h3>Built With:</h3>
            <ul>
              <li>Javascript</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
        </div>

        <div className="project">
          <h2 className="project-title">Restaurant Page</h2>
          <div className="project-img-container">
            <img
              className="project-img"
              src="https://i.imgur.com/qumadH4.png?1"
              alt="restaurant_project"
            />
          </div>
          <div className="project-info">
            <div className="project-links">
              <button type="button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://raw.githack.com/noomdalv/js_restaurant_page/development/dist/index.html"
                >
                  Live Demo
                </a>
              </button>
              <button type="button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/noomdalv/js_restaurant_page"
                >
                  Source
                </a>
              </button>
            </div>
            <p>
              HTML DOM manipulation project, the goal was to render a static
              pages restaurant website with JavaScript and basic Webpack
              configuration.
            </p>
            <h3>Built With:</h3>
            <ul>
              <li>Javascript</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
        </div>

        <div className="project">
          <h2 className="project-title">Mini Facebook</h2>
          <div className="project-img-container">
            <img
              className="project-img"
              src="https://i.imgur.com/YTELo3v.png"
              alt="minifb_project"
            />
          </div>
          <div className="project-info">
            <div className="project-links">
              <button type="button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://ancient-woodland-03904.herokuapp.com/signup"
                >
                  Live Demo
                </a>
              </button>
              <button type="button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/noomdalv/rails_mini_fb"
                >
                  Source
                </a>
              </button>
            </div>
            <p>
              Facebook clone with user authentication, implementing friendships,
              posts, comments, and likes functionalities.
            </p>
            <h3>Built With:</h3>
            <ul>
              <li>Rails</li>
              <li>HTML/CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>

        <div className="project">
          <h2 className="project-title">Using Bootstrap 4.0</h2>
          <div className="project-img-container">
            <img
              className="project-img"
              src="https://i.imgur.com/SZo4ykk.png"
              alt=""
            />
          </div>
          <div className="project-info">
            <div className="project-links">
              <button type="button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://rawcdn.githack.com/noomdalv/Using-Bootstrap/2e8fef1864dd1ae3487bb516d86938fdead14d5f/index.html"
                >
                  Live Demo
                </a>
              </button>
              <button type="button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/noomdalv/Using-Bootstrap"
                >
                  Source
                </a>
              </button>
            </div>
            <p>
              Aimed to recreate the newsweek.com main page using Bootstrap's
              front-end component library.
            </p>
            <h3>Built With:</h3>
            <ul>
              <li>HTML/CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>

        <div className="project">
          <h2 className="project-title">Responsive Design</h2>
          <div className="project-img-container">
            <img
              className="project-img"
              src="https://i.imgur.com/djic07g.png"
              alt=""
            />
          </div>
          <div className="project-info">
            <div className="project-links">
              <button type="button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://rawcdn.githack.com/noomdalv/Building-with-Responsive-Design/2da975d24f53fec4a4e1161f7c13b297426cf435/index.html"
                >
                  Live Demo
                </a>
              </button>
              <button type="button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/noomdalv/Building-with-Responsive-Design"
                >
                  Source
                </a>
              </button>
            </div>
            <p>
              CSS Gridbox adaptation to recreate thenextweb.com main page
              structure applying media query breakpoints.
            </p>
            <h3>Built With:</h3>
            <ul>
              <li>HTML/CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
