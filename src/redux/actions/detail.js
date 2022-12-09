import apiCall from "../../api";

// * Actions type
export const FETCH_MEAL_DETAIL_START = "FETCH_MEAL_DETAIL_START";
export const FETCH_MEAL_DETAIL_COMPLETE = "FETCH_MEAL_DETAIL_COMPLETE";
export const FETCH_MEAL_DETAIL_ERROR = "FETCH_MEAL_DETAIL_ERROR";

export const fetchMealDetailStart = () => ({ type: FETCH_MEAL_DETAIL_START });

export const fetchMealDetailComplete = (payload) => ({
  type: FETCH_MEAL_DETAIL_COMPLETE,
  payload,
});

export const fetchMealDetailError = (error) => ({
  type: FETCH_MEAL_DETAIL_ERROR,
  error,
});

// *Action Creator Thunk
export const fetchMealDetail = (id) => async (dispatch) => {
  try {
    dispatch(fetchMealDetailStart());
    const response = await apiCall(`/lookup.php?i=${id}`);
    console.log(response);
    dispatch(fetchMealDetailComplete(response?.meals[0]));
  } catch (error) {
    dispatch(fetchMealDetailError(error));
  }
};
