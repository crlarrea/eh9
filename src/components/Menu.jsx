import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const Menu = () => {
  const [menu, setMenu] = useState([]);
  const getMenu = async () => {
    let { data: data, error } = await supabase.from("menu").select("*");
    setMenu(data);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <section className="menu">
      {menu.map((item) => {
        return <p>{item.item_name}</p>;
      })}
    </section>
  );
};
