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
    activeSelection: "coffee",
    basket: [],
  });

  const getMenu = async () => {
    let { data: data, error } = await supabase
      .from("menu")
      .select("*")
      .neq("type", "milk");
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
      payload: { activeSelection: condition, currentView: filteredData },
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

  const updateBasket = (item) => {
    const payload = { basket: item };
    const action = {
      type: "updateBasket",
      payload: payload,
    };
    dispatch(action);
    console.log(item);
  };
  useEffect(() => {
    getMenu();
  }, []);

  return (
    <section className="menu" id="menu">
      <article>
        <h2>our menu </h2>
        <div>
          {menuState?.types?.map((entry) => {
            return (
              <button
                className={
                  entry === menuState.activeSelection ? "active" : "inactive"
                }
                onClick={() => {
                  updateView(menuState.menu, entry);
                }}
                key={entry}
              >
                {entry}
              </button>
            );
          })}
        </div>
        <h3>{menuState.choices}</h3>

        <table>
          <tbody>
            <tr>
              <th>product</th>
              <th>ingredients</th>
              <th>price</th>
            </tr>

            {menuState.filteredView.map((entry) => {
              return (
                <tr
                  key={entry.id}
                  onClick={() => {
                    updateBasket(entry);
                  }}
                >
                  <td>
                    {entry.item_name}
                    <span>{entry?.ingredients?.join(", ")}</span>
                  </td>
                  <td>
                    {new Intl.NumberFormat("en-GB", {
                      style: "currency",
                      currency: "GBP",
                    }).format(entry.price_per_unit)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <span>
          {menuState.activeSelection !== "food" ? "oat milk £0.15" : ""}
        </span>
      </article>
      <article>
        <h2>your order</h2>
        <table>
          <tbody>
            <tr>
              <th>product</th>
              <th>quantity</th>
              <th>price</th>
            </tr>

            {menuState.basket.map((entry) => {
              return (
                <tr
                  key={entry}
                >
                  <td>
                    {entry.item_name}
                    
                  </td>
                  <td>
                    
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    </section>
  );
};
