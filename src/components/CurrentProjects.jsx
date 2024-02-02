import { projects } from "./infoForComponents./generalInfo";
import school from "../assets/school.jpeg";
import aidhub from "../assets/aidhub.jpg";
import meetups from "../assets/meetups.jpg";

const CurrentProjects = () => {
  const proj_pics = {
    school: school,
    aidhub: aidhub,
    meetups: meetups,
  };
  return (
    <section className="main-container">
      <h1>Current Projects</h1>
      <p>
        At the heart of our organization lie several impactful projects aimed at
        enriching the lives of the Ukrainian community in Cambridge. The
        'Cambridge Ukrainian School' stands as a beacon of educational
        excellence, providing a nurturing space for children to learn and
        connect with their cultural roots. Our 'AidHub' initiative extends a
        helping hand, offering essential support to those in need within the
        community. Engaging 'Ukrainian Meetups' foster social connections, while
        English lessons contribute to the integration process. Additionally, our
        events cater to both Ukrainian children and adults, creating spaces for
        cultural celebration, learning, and community building. These projects
        collectively reflect our commitment to holistic support and empowerment
        within the Ukrainian community in Cambridge.
      </p>
      <ul>
        {projects.map((project, i) => {
          return (
            <li key={i} className="projects_list">
              <div className="sub_header">{project.name}</div>
              <div className="project_descr">{project.article}</div>
              <div className="pic-container">
                <img src={`${proj_pics[project.photo]}`} alt={project.name} />
              </div>
              {project.link ? (
                <a href={project.link} target="_blank">
                  {project.linkDescr}
                </a>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CurrentProjects;
