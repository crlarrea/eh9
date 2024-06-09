const MenuReducer = (state = [], action) => {
  switch (action.type) {
    case "setMenu":
      return { ...state, menu: [...action.payload] };
    case "setCurrentView":
      return {
        ...state,
        filteredView: [...action.payload.currentView],
        activeSelection: action.payload.activeSelection,
      };
    case "setTypes":
      return { ...state, types: [...action.payload] };
    case "updateBasket":
      return { ...state, basket: [...state.basket, action.payload.basket]};

    default:
      return state;
  }
};
export { MenuReducer };
