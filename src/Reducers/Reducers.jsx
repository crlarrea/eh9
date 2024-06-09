const MenuReducer = (state = [], action) => {
  switch (action.type) {
    case "setMenu":
      return { ...state, menu: [...action.payload] };
    case "setCurrentView":
      return { ...state, filteredView: [...action.payload] };
    case "setTypes":
      return { ...state, types: [...action.payload] };
    default:
      return state;
  }
};
export { MenuReducer };
