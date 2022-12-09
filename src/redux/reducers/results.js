import {
  ADD_SEARCH_ITEM,
  FETCH_RECIPES_COMPLETE,
  FETCH_RECIPES_ERROR,
  FETCH_RECIPES_START,
} from "../actions/results";

const initialState = {
  data: [],
  isLoading: false,
  error: {},
  searchItems: [],
};

const resultsReducer = (state = initialState, action) => {
  console.log("Payload", action.payload);
  switch (action.type) {
    case FETCH_RECIPES_START:
      return { ...state, isLoading: true }; // Esto proboca que haya rendereos es como asignar con el setState la informacion

    case FETCH_RECIPES_COMPLETE:
      return { ...state, isLoading: false, data: action.payload };

    case FETCH_RECIPES_ERROR:
      return { ...state, isLoading: false, error: action.error };

    case ADD_SEARCH_ITEM:
      return {
        ...state,
        isLoading: true,
        searchItems: [...state.searchItems, action.payload],
      };

    default:
      return state;
  }
};

export default resultsReducer;
