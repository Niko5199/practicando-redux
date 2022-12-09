import { combineReducers } from "@reduxjs/toolkit";

// * Reducers
import detailReducer from "./detail";
import resultsReducer from "./results";

// * Slices
import detailSlice from "../slices/detail";

export default combineReducers({
  results: resultsReducer,
  detail: detailReducer,
  detailSlice,
});
