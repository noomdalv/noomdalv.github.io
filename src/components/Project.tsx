import "./styles.css";

type Project = {
  id: number;
  title: string;
  description: string;
  sourceImg: string;
  repoUrl: string;
  usedTools: string[];
};

type ProjectTypeProps = {
  project: Project;
};

function Project({
  project: { title, description, sourceImg, repoUrl, usedTools },
}: ProjectTypeProps) {
  return (
    <div className="project">
      <h2 className="project-title">{title}</h2>
      <div className="project-img-container">
        <img className="project-img" src={sourceImg} alt="" />
      </div>
      <div className="project-info">
        <div className="project-links">
          {/* <button type="button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href=""
                >
                  Live Demo
                </a>
              </button> */}
          <button type="button">
            <a target="_blank" rel="noopener noreferrer" href={repoUrl}>
              Source
            </a>
          </button>
        </div>
        <p>{description}</p>
        <h3>Built With:</h3>
        <ul>
          {usedTools.map((tool) => (
            <li>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;
