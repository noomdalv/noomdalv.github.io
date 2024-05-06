import { useContext } from "react";
import { AppContext, AppContextType } from "./context/appContext";
import Project from "./Project";
import Carousel from "react-multi-carousel";

import "./styles.css";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProjectList = () => {
  const { projects } = useContext<AppContextType>(AppContext);
  return (
    <div id="projects">
      <div className="projects-header">
        <h1>PROJECTS</h1>
      </div>
      <div className="carousel-container">
        <Carousel responsive={responsive} showDots={true} infinite>
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </Carousel>
      </div>
      ;
    </div>
  );
};

export default ProjectList;
