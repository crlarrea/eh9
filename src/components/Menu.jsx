import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import menuAnimation from "../assets/img/menu_animation.json";
import { GiCoffeePot } from "react-icons/gi";
import { GiTeapotLeaves } from "react-icons/gi";
import { GiSandwich } from "react-icons/gi";
import coffee from "../assets/img/coffee.webp";

export const Menu = () => {
  const types = ["coffee", "tea", "food"];
  const [menu, setMenu] = useState([]);
  const [menuView, setMenuView] = useState([]);
  const [active, setActive] = useState(types[0]);

  const getMenu = async () => {
    let { data: data, error } = await supabase.from("menu").select("*");
    setMenu(data);
    setMenuView(data.filter((el) => el.type === "coffee"));
  };

  const updateMenuView = (condition) => {
    let filteredResults = menu.filter((el) => el.type === condition);
    setMenuView(filteredResults);
    setActive(condition);
  };

  useEffect(() => {
    getMenu();
    updateMenuView("coffee");
  }, []);

  return (
    <section className="menu" id="menu">
      <article>
        <h2>Our Menu</h2>
        {types.map((button) => {
          return (
            <button
              key={button}
              className={active === button ? "active" : "inactive"}
              onClick={(ev) => {
                updateMenuView(button);
              }}
            >
              {/* {button === "coffee" ? (
                <GiCoffeePot />
              ) : button === "tea" ? (
                <GiTeapotLeaves />
              ) : (
                <GiSandwich />
              )} */}
              {button}
            </button>
          );
        })}
        <picture>
          <img src={coffee} alt="" />
        </picture>
      </article>
      <article>
        {/* <Player
          autoplay
          loop
          src={menuAnimation}
          style={{ height: "250px", width: "250px" }}
          speed={2}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player> */}
      </article>
      <article>
        <h3>{menuView.length !== 0 && menuView[0].type}</h3>

        <table>
          <tbody>
            <tr>
              <th>product</th>
              <th>price</th>
            </tr>
            {menuView.map((item) => {
              return (
                <tr key={item.item_name}>
                  <td>{item.item_name}</td>
                  <td key={`ingredients-${item.item_name}`}>
                    {item.ingredients !== null && item.ingredients.join(", ")}
                  </td>
                  <td>
                    {new Intl.NumberFormat("en-GB", {
                      style: "currency",
                      currency: "GBP",
                    }).format(item.price_per_unit)}
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
