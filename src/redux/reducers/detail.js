import {
  FETCH_MEAL_DETAIL_COMPLETE,
  FETCH_MEAL_DETAIL_ERROR,
  FETCH_MEAL_DETAIL_START,
} from "../actions/detail";

const initialState = {
  data: {},
  isLoading: false,
  error: {},
};

const detailReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_MEAL_DETAIL_START:
      return { ...state, isLoading: true, data: {} };

    case FETCH_MEAL_DETAIL_COMPLETE:
      return { ...state, isLoading: false, data: action.payload };

    case FETCH_MEAL_DETAIL_ERROR:
      return { ...state, isLoading: false, error: action.error };

    default:
      return state;
  }
};

export default detailReducer;
