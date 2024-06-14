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

    case "updateBasket":
      if (!state.basket[action.payload.id]) {
        let item = {};
        item[action.payload.id] = action.payload;
        item[action.payload.id].qty = 1;
        return { ...state, basket: { ...state.basket, ...item } };
      } else {
        let newBasket = state.basket;
        ++newBasket[action.payload.id].qty;
        // let newBasket = state.basket[item].qty
        // let item = action.payload.id;
        // let item = {state.basket[item].qty}
        
        return { ...state, basket: newBasket };
      }

    default:
      return state;
  }
};
export { MenuReducer };
