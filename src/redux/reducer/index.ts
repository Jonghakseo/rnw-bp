import { authReducer } from "../slices/auth";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
