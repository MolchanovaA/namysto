import { useState, useEffect } from "react";

const Article = ({ article }) => {
  const [paragraphs, setPargraphs] = useState(article);
  useEffect(() => {
    setPargraphs(article);
  }, [article]);
  return (
    <li>
      <article>
        {paragraphs.map((par, i) => {
          return <p key={i}>{par}</p>;
        })}
      </article>
    </li>
  );
};

export default Article;
