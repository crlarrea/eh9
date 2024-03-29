import React, { useEffect, useState } from "react";
import { getData } from "../utils/requests";

export const Blog = () => {
  const [articles, setArticles] = useState([]);
  const getArticles = async () => {
    const data = await getData("http://127.0.0.1:3900/api/articles", "GET");
    setArticles(data.data);
  };
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <section className="blog">
      {articles.map((entry) => {
        return (
          <article key={entry._id}>
            <h3>{entry.title}</h3>
            <span>{entry.shortDescription}</span>
          </article>
        );
      })}
    </section>
  );
};
