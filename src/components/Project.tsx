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
      <h1 className="project-title text-2xl">{title}</h1>
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
        <div className="project-description ">
          <p>{description}</p>
        </div>
        <div className="project-tools mb-1 self-end">
          <h2>Built With:</h2>
          <ul>
            {usedTools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
