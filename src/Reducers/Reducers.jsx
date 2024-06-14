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
      return { ...state, basket: [...state.basket, action.payload] };

    default:
      return state;
  }
};
export { MenuReducer };
