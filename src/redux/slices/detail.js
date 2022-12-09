import { createSlice } from "@reduxjs/toolkit";
import apiCall from "../../api/index";

const initialState = {
  isLoading: false,
  error: {},
  data: {},
};

// Un slice compacta actions y reducers

const detailSlice = createSlice({
  name: "mealDetail",
  initialState,
  reducers: {
    fetchMealStart(state) {
      state.isLoading = true;
    },
    fetchMealError(state, payload) {
      state.isLoading = false;
      state.error = payload;
    },
    fetchMealComplete(state, payload) {
      state.isLoading = false;
      state.data = payload;
    },
  },
});

/*
    Cuando llamemos una de estas funciones lo que 
    pasara internamente es que se llamara una funcion 
    que nos retornara un objeto que tiene el type con
    el siguiente formato mealDetail/fetchMealStart, y si 
    le pasamos el payload lo recibira.
*/
export const { fetchMealStart, fetchMealError, fetchMealComplete } =
  detailSlice.actions;

export default detailSlice.reducer;

export const fetchMealDetail = (id) => async (dispatch) => {
  try {
    dispatch(fetchMealStart());
    const response = await apiCall(`/lookup.php?i=${id}`);
    console.log(response);
    dispatch(fetchMealComplete(response?.meals[0]));
  } catch (error) {
    dispatch(fetchMealError(error));
  }
};
