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
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };

    case REMOVE_FILTER:
      return { ...state, myFavorites: [...state.allCharacters] };

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
      return {
        ...state,
        myFavorites: state.allCharacters.sort((a, b) => {
          if (action.payload === "A") {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
          } else if (action.payload === "D") {
            if (a.name > b.name) {
              return -1;
            }
            if (a.name < b.name) {
              return 1;
            }
          }
          return 0;
        }),
      };
    default:
      return { ...state };
  }
};
