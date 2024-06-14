import React, { useState, useEffect, useReducer } from "react";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
import { MenuReducer } from "../Reducers/Reducers";
import { FaPlus } from "react-icons/fa";
import logo from "../assets/img/eh9_logo.webp";
import coffee from "../assets/img/coffee.webp";

export const Menu = () => {
  const [menuState, dispatch] = useReducer(MenuReducer, {
    menu: [],
    menuSections: [],
    currentView: [],
    activeSelection: null,
    basket: [],
  });

  const getMenu = async () => {
    let { data: data, error } = await supabase
      .from("menu")
      .select("*")
      .neq("type", "milk");
    dispatch({ type: "setMenu", payload: data });
    dispatch({ type: "setMenuSections", payload: data });
    dispatch({ type: "setView", payload: "coffee" });
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <section className="menu" id="menu">
      <article>
        <h2>our menu </h2>
        <div>
          {menuState?.menuSections?.map((entry) => {
            return (
              <button
                className={
                  entry === menuState.activeSelection ? "active" : "inactive"
                }
                onClick={() => {
                  dispatch({ type: "setView", payload: entry });
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

            {menuState.currentView.map((entry) => {
              return (
                <tr key={entry.id}>
                  <td>
                    {entry.item_name}
                    <span>{entry?.ingredients?.join(", ")}</span>
                  </td>
                  <td>
                    {new Intl.NumberFormat("en-GB", {
                      style: "currency",
                      currency: "GBP",
                    }).format(entry.price_per_unit)}
                    <FaPlus
                      onClick={() => {
                        dispatch({ type: "updateBasket", payload: entry });
                      }}
                    />
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
        <img src={coffee} alt="" />
        {/* <img src={logo} alt="" /> */}
        <h2>your order</h2>
        <table>
          <tbody>
            <tr>
              <th>product</th>
              <th>quantity</th>
              <th>price</th>
            </tr>

            {Object.values(menuState.basket).map((entry) => {
              return (
                <tr key={entry}>
                  <td>{entry.item_name}</td>
                  <td>{entry.qty}</td>
                  <td>
                    {new Intl.NumberFormat("en-GB", {
                      style: "currency",
                      currency: "GBP",
                    }).format(entry.qty * entry.price_per_unit)}
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
