export const initialState = {
  favPlanets: [],
  singlePlanet: [],
};

const reducer = (state = initialState, action) => {
  // console.log(action);
  // console.log(state);
  switch (action.type) {
    case "ADD_TO_FAV":
      return {
        ...state,
        favPlanets: [...state.favPlanets, action.planet],
      };

    case "REMOVE_FROM_FAV":
      return {
        ...state,
        favPlanets: state.favPlanets.filter((item) => item.id !== action.id),
      };

    case "ADD_DETAILS":
      return {
        ...state,
        singlePlanet: [...state.singlePlanet, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
