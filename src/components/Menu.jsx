import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
import { GiCoffeePot } from "react-icons/gi";
import { GiTeapotLeaves } from "react-icons/gi";
import { GiSandwich } from "react-icons/gi";

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
    setActive(condition)
  };

  useEffect(() => {
    getMenu();
    updateMenuView("coffee");
  }, []);

  return (
    <section className="menu">
      <article>
        <h2>Our Menu</h2>
        {types.map((button) => {
          return (
            <button
              key={button}
              className={(active === button) ? 'active' :'inactive'}
          
              onClick={(ev) => {
                updateMenuView(button);
              }}
            >
              {button === "coffee" ? (
                <GiCoffeePot />
              ) : button === "tea" ? (
                <GiTeapotLeaves />
              ) : (
                <GiSandwich />
              )}
              {button}
            </button>
          );
        })}
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
