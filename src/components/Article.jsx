import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Blog } from "./Blog";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const Article = () => {
  const { id } = useParams();

  const [article, setArticle] = useState({});
  const getArticle = async () => {
    let { data: data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("id", id);
    setArticle(data[0]);
  };

  useEffect(() => {
    getArticle();
    scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="blog-article">
        {Object.keys(article).length !== 0 && (
          <article>
            <span>{new Date(article.created_at).toDateString()}</span>
            <h3>{article.title}</h3>
            <span>{article.short_description}</span>
            <span>{article.authors}</span>
            {article.body.split("\\n").map((paragraph, index) => {
              return paragraph !== "" && <p key={index}>{paragraph}</p>;
            })}
            <img src={article.image} loading="lazy" />
          </article>
        )}
      </section>
    </>
  );
};
