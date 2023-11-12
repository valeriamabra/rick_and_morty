import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  REMOVE_FILTER,
} from "../actions/types";

const initialState = {
  myFavorites: [], // Characters filtrados
  allCharacters: [], // Todos los characters
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((personaje) => {
          if (personaje.id == action.payload) {
            return false;
          } else {
            return true;
          }
        }),
      };
    case REMOVE_FILTER:
      return { ...state, myFavorites: [...state.allCharacters] };
      break;
    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter((character) => {
          if (character.gender === action.payload) {
            return true;
          } else {
            return false;
          }
        }),
      };
    case ORDER:
      console.log("--------------");
      console.log(state.allCharacters);
      console.log(action.payload);
      console.log(
        state.allCharacters.sort((a, b) => {
          if (action.payload === "A") {
            return a.name > b.name ? 1 : -1;
          } else {
            return a.name > b.name ? -1 : 1;
          }
        })
      );
      return {
        ...state,
        myFavorites: state.allCharacters.sort((a, b) => {
          if (action.payload === "A") {
            return a.name - b.name;
          } else if (action.payload === "D") {
            return b.name - a.name;
          } else {
            return 0;
          }
        }),
      };
    default:
      return { ...state };
  }
};
