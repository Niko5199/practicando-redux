import apiCall from "../../api";

export const FETCH_RECIPES_START = "FETCH_RECIPES_START";
export const FETCH_RECIPES_COMPLETE = "FETCH_RECIPES_COMPLETE";
export const FETCH_RECIPES_ERROR = "FETCH_RECIPES_ERROR";
export const ADD_SEARCH_ITEM = "ADD_SEARCH_ITEM";

export const fetchRecipesStart = () => ({
  type: FETCH_RECIPES_START,
});

export const fetchRecipesComplete = (payload) => ({
  type: FETCH_RECIPES_COMPLETE,
  payload,
});

export const fetchRecipesError = (error) => ({
  type: FETCH_RECIPES_ERROR,
  error,
});

// * Action Creator
export const fetchRecipes = (text) => async (dispatch) => {
  try {
    dispatch(fetchRecipesStart());
    const response = await apiCall(`/search.php?s=${text}`);
    dispatch(fetchRecipesComplete(response?.meals));
  } catch (error) {
    console.log(error);
    dispatch(fetchRecipesError(error));
  }
};

export const addSearchItem = (payload) => ({
  type: ADD_SEARCH_ITEM,
  payload,
});
