import useFetchProjects from './FetchContent';

const Projects = () => {
  const { loading, projects } = useFetchProjects(); // Ensure the names match your hook's output
  console.log(loading, projects);

  if (loading) {
    return (
      <section className="projects">
        <h1>Loading....</h1>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
        <div className="projects-center">
          {projects.map((project) => {
            const { id, img, url, title } = project;
            return (
              <div key={id} className="project">
                <a href={url} target="_blank" rel="noreferrer">
                  <img src={img} alt={title} />
                </a>
                <h5>{title}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
