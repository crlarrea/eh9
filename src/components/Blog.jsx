import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const Blog = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  const getArticles = async () => {
    let { data: data, error } = await supabase
      .from("articles")
      .select("_id,title,shortDescription,authors,createdAt, image")
      .order("createdAt", { ascending: false });
    setArticles(data);
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
              <h3>{entry.title}</h3>
              <p>{entry.shortDescription}</p>
              <p>{entry.authors}</p>
              <span>
                {new Date(entry.createdAt).toLocaleDateString("en-GB")}
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
};
