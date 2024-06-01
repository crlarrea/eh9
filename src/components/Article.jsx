import React,{useState} from "react";
import { useParams } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const Article = () => {
  let { id } = useParams();
  const [article, setArticle] = useState([]);
  const getArticle = async () => {
    let { data: data, error } = await supabase
      .from("articles")
      .select("_id,title,shortDescription,author,createdAt")
      .order("createdAt", { ascending: false });

    setArticle(data);
  };
  console.log(id);
  return (
    <section>
      <p>article id: {id} </p>
    </section>
  );
};
