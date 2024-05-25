import React, { useEffect, useState } from "react";
import { getData } from "../utils/requests";
import { Link } from "react-router-dom";

export const Blog = () => {
  const [articles, setArticles] = useState([]);
  const getArticles = async () => {
    const data = await getData("http://127.0.0.1:3900/api/articles", "GET");
    setArticles(data.data.sort());
  };
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <section className="blog">
      {articles.map((entry) => {
        return (
          <article key={entry._id}>
            <h3>
              <Link to={`article/${entry._id}`}>{entry.title}</Link>
            </h3>
            <p>{entry.shortDescription}</p>
            <p>{entry.authors.join(/\s/)}</p>
            <span>{entry.createdAt.replaceAll('-','.')}</span>
          </article>
        );
      })}
    </section>
  );
};
