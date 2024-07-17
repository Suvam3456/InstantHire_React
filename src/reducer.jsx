const reducer = (state, action) => {
  switch (action.type) {
    case "HOME_UPDATE":
      return {
        ...state,
        name: action.payload.name,
        image: action.payload.image,
      };
    case "ABOUT_UPDATE":
      return {
        ...state,
        name: action.payload.name,
        image: action.payload.image,
      };
    case "GET_SERVICES":
      return {
        ...state,
        services: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
