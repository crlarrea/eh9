const MenuReducer = (state = [], action) => {
  switch (action.type) {
    case "setMenu":
      return { ...state, menu: [...action.payload] };
    case "setView":
      const { payload: selection } = action;
      let filteredData = state.menu.filter((entry) => {
        return entry.type === selection;
      });

      return {
        ...state,
        currentView: filteredData,
        activeSelection: selection,
      };

    case "setMenuSections":
      const sections = Array.from(
        new Set(state.menu.map((entry) => entry.type))
      );
      return { ...state, menuSections: sections };

    case "addToBasket":
      if (!state.basket[action.payload.id]) {
        let item = {};
        item[action.payload.id] = action.payload;
        item[action.payload.id].qty = 1;
        return { ...state, basket: { ...state.basket, ...item } };
      } else {
        let newBasket = state.basket;
        ++newBasket[action.payload.id].qty;
        
        localStorage.setItem("basket", JSON.stringify(newBasket));
        return { ...state, basket: newBasket };
      }

    case "removeFromBasket":
      if (!state.basket[action.payload.id]) {
        return { ...state, basket: { ...state.basket } };
      } else {
        let newBasket = state.basket;
        if (newBasket[action.payload.id].qty > 1) {
          --newBasket[action.payload.id].qty;
        } else {
          delete newBasket[action.payload.id];
        }

        localStorage.setItem("basket", JSON.stringify(newBasket));
        return { ...state, basket: newBasket };
      }

    default:
      return state;
  }
};
export { MenuReducer };
