import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

export const Blog = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  const getArticles = async () => {
    let { data: data, error } = await supabase
      .from("articles")
      .select("id,title,short_description,authors,created_at, image")
      .order("created_at", { ascending: false });
    setArticles(data);
  };
  const scrollCarousel = (ev) => {
    const direction =
      ev.target.dataset.direction ||
      ev.target.closest("span").dataset.direction;

    const carousel = ev.target.closest("div");
    carousel.scrollBy({
      top: 0,
      left: direction === "left" ? -150 : 150,
      behavior: "smooth",
    });
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
              key={entry.id}
              onClick={() => {
                navigate(`article/${entry.id}`);
              }}
            >
              <h3>{entry.title}</h3>
              <p>{entry.short_description}</p>
              <p>{entry.authors}</p>
              <span>
                {new Date(entry.created_at).toLocaleDateString("en-GB")}
              </span>
            </article>
          );
        })}

        <span data-direction="left" onClick={(ev) => scrollCarousel(ev)}>
          <FaCircleArrowLeft />
        </span>

        <span data-direction="right" onClick={(ev) => scrollCarousel(ev)}>
          <FaCircleArrowRight />
        </span>
      </div>
    </section>
  );
};
