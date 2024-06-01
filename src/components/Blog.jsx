import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Blog = () => {
  console.log("VITE ENV", import.meta.env.VITE_EH9_API);
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  const getArticles = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYWFzX2RldmljZV9pZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsImJhYXNfZG9tYWluX2lkIjoiNjY1OGVlYWRlNjk5OWUwMDBkNDFmNzM2IiwiZXhwIjoxNzE3MjM1NDg3LCJpYXQiOjE3MTcyMzM2ODcsImlzcyI6IjY2NWFlODE3NzhiMTYwOGM0MDAwYzcyYiIsImp0aSI6IjY2NWFlODE3NzhiMTYwOGM0MDAwYzcyZCIsInN0aXRjaF9kZXZJZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsInN0aXRjaF9kb21haW5JZCI6IjY2NThlZWFkZTY5OTllMDAwZDQxZjczNiIsInN1YiI6IjY2NTlhNDNlYjcyNjA2YjA1YjY3ZGM4YyIsInR5cCI6ImFjY2VzcyJ9.6pFXRgR1bYl7h8I_3UBSpgRWe1HwdFM-UYctU2JKV7w"
    );

    const raw = JSON.stringify({
      collection: "articles",
      database: "eh9",
      dataSource: "crlarrea",
      projection: {
        _id: 1,
        title: 1,
        shortDescription: 1,
        authors: 1,
        createdAt: 1,
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://eu-central-1.aws.data.mongodb-api.com/app/data-eoqcbhs/endpoint/data/v1/action/find",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setArticles(result.documents))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <section className="blog">
      <h2>Latest</h2>
      <div>
        {articles.map((entry) => {
          return (
            <article
              key={entry._id}
              onClick={() => {
                navigate(`article/${entry._id}`);
              }}
            >
              <h3>
                {/* <Link to={`article/${entry._id}`}> */}
                {entry.title}
                {/* </Link> */}
              </h3>
              <p>{entry.shortDescription}</p>
              <p>{entry.authors.join(/\s/)}</p>
              <span>{entry.createdAt.replaceAll("-", ".")}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
};
