import { aboutUs } from "./infoForComponents./generalInfo";
import { useState, useEffect } from "react";
import mainPhoto from "../assets/main-photo.jpeg";

const Home = () => {
  const [articles, setArticles] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setArticles(aboutUs[0]);
    setIsLoading(false);
  }, []);

  if (isLoading) return <>Page is loading</>;

  return (
    <section className="main-container">
      <h1>Namysto</h1>
      <section className="main-article-section">
        {/* <h2>{articles.name}</h2> */}

        <div className="pic-container">
          <img src={mainPhoto} alt={articles.name} />
        </div>

        <article className="article-about-us">
          {articles.article.map((par, i) => {
            return <p key={i}>{par}</p>;
          })}
        </article>
      </section>
    </section>
  );
};
export default Home;
