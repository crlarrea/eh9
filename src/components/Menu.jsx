import React, { useState, useEffect, useReducer } from "react";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
import { MenuReducer } from "../Reducers/Reducers";

import coffee from "../assets/img/coffee.webp";
import { Order } from "./Order";

export const Menu = () => {
  const [menuState, dispatch] = useReducer(MenuReducer, {
    menu: [],
    filteredView: [],
  });

  const getMenu = async () => {
    let { data: data, error } = await supabase.from("menu").select("*");
    const action = { type: "setMenu", payload: data };
    dispatch(action);
    updateView(data);
    updateTypes(data);
  };

  const updateView = (data, condition = "coffee") => {
    let filteredData = data.filter((entry) => {
      return entry.type === condition;
    });

    const action = {
      type: "setCurrentView",
      payload: filteredData,
    };
    dispatch(action);
  };

  const updateTypes = (data) => {
    let types = new Set(data.map((entry) => entry.type));
    const action = {
      type: "setTypes",
      payload: types,
    };
    dispatch(action);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <section className="menu" id="menu">
      <article>
        <h2>our menu </h2>
        {menuState?.types?.map((entry) => {
          return (
            <button
              onClick={() => {
                updateView(menuState.menu, entry);
              }}
            >
              {entry}
            </button>
          );
        })}
        <h3>{menuState.choices}</h3>
        {menuState?.filteredView?.map((entry) => {
          return <p key={entry.id}>{entry.item_name}</p>;
        })}
      </article>
      <article>
        <h2>your order</h2>
      </article>
    </section>
  );
};
