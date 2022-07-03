import { configureStore } from "@reduxjs/toolkit";
import { restaurantsApi } from "../services/restaurantsApi";

export default configureStore({
  reducer: {
    [restaurantsApi.reducerPath]: restaurantsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restaurantsApi.middleware),
});
