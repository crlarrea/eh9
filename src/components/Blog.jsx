import React from "react";
import { blog } from "../assets/data/data";
export const Blog = () => {
  return (
    <section className="blog-carousel">
      {blog.map((entry) => {
        return (
          <article>
            <div style={{ backgroundImage: `url(${entry.image})` }}></div>

            <div>
              
              <h3>{entry.title}</h3>
              <p>{entry.shortDescription}</p>
              <span>{new Date(entry.date).toLocaleDateString()}</span>
            </div>
          </article>
        );
      })}
    </section>
  );
};
