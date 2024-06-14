import React, { useState, useEffect, useReducer } from "react";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
import { MenuReducer } from "../Reducers/Reducers";
import { FaMinus,FaPlus } from "react-icons/fa";
import logo from "../assets/img/eh9_logo.webp";
import coffee from "../assets/img/coffee.webp";
import { Logo } from "./Logo";

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

  let total =
    Object.values(menuState.basket).length !== 0 &&
    Object.values(menuState.basket)
      .map((el) => el.price_per_unit * el.qty)
      .reduce((total, el) => total + el);

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
                  <FaMinus onClick={() => {
                        dispatch({ type: "removeFromBasket", payload: entry });
                      }} />

                    {new Intl.NumberFormat("en-GB", {
                      style: "currency",
                      currency: "GBP",
                    }).format(entry.price_per_unit)}
                    <FaPlus
                      onClick={() => {
                        dispatch({ type: "addToBasket", payload: entry });
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

        <h2>your order</h2>
        {total  && (
          <table>
            <tbody>
              <tr>
                <th>quantity</th>
                <th>product</th>
                <th>price</th>
              </tr>
              <tr>
                <td>
                  <span>eh9 | espresso</span>
                  <span>specialty coffee</span>
                </td>
              </tr>
              {Object.values(menuState.basket).map((entry) => {
                return (
                  <tr key={entry.id}>
                    <td>
                      {entry.qty} {entry.item_name}
                    </td>

                    <td>{(entry.qty * entry.price_per_unit).toFixed(2)}</td>
                  </tr>
                );
              })}

              <tr>
                <td>total</td>
                <td>
                  {new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP",
                  }).format(total)}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </article>
    </section>
  );
};
