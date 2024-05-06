import { useContext } from "react";
import { AppContext, AppContextType } from "./context/appContext";
import "./styles.css";
import Project from "./Project";

const ProjectList = () => {
  const { projects } = useContext<AppContextType>(AppContext);
  return (
    <div id="projects">
      <div className="projects-header">
        <h1>PROJECTS</h1>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
