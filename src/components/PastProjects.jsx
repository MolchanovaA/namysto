import { pastProjects } from "./infoForComponents./generalInfo";
import easter from "../assets/Easter.gif";
import vyshyvanka from "../assets/vyshyvanka.jpg";
import openGarden from "../assets/openGarden.jpg";
import EuropeDay from "../assets/EuropeDay.jpg";
import UnbreakableWomen from "../assets/UnbreakableWomen.jpg";
import RockForUkraine from "../assets/RockForUkraine.jpg";
import fundraiser from "../assets/fundraiser.jpg";
import market from "../assets/market.jpg";

const PastProjects = () => {
  const proj_pics = {
    Easter: easter,
    vyshyvanka: vyshyvanka,
    openGarden: openGarden,
    EuropeDay: EuropeDay,
    UnbreakableWomen: UnbreakableWomen,
    RockForUkraine: RockForUkraine,
    fundraiser: fundraiser,
    market: market,
  };

  return (
    <section className="main-container">
      <h1>Past Projects</h1>
      <p>
        Namysto, a committed charity organization in Cambridge, has successfully
        organized a series of impactful events and projects. These initiatives,
        ranging from cultural events like Vyshyvanka Day to community-focused
        activities like the Easter Egg Hunt at Romsey Recreational Ground, have
        fostered a sense of unity and support within the Ukrainian community.
        Fundraisers, such as the Unbreakable Women event, demonstrate a
        dedication to addressing critical issues. With each project, Namysto
        continues to create a vibrant and supportive environment for Ukrainians
        in Cambridge. Stay tuned for upcoming projects that aim to strengthen
        community bonds and make a positive impact.
      </p>
      <ul>
        {pastProjects.map((project, i) => {
          return (
            <li key={i}>
              <h2>{project.name}</h2>
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

export default PastProjects;
