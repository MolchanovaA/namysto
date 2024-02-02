import { useEffect, useState } from "react";
import { media } from "./infoForComponents./generalInfo";

const Media = () => {
  const [mediaInfo, setMediaInfo] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setMediaInfo(media);
    setIsLoading(false);
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <section className="main-container">
      <ul>
        {mediaInfo.map((mediaArticle) => {
          return (
            <li className="articles">
              <div className="sub_header">{mediaArticle.name} :</div>
              <a href={mediaArticle.link} target="_blank">
                {mediaArticle.linkDescr}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Media;
