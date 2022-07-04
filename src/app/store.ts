import { configureStore } from "@reduxjs/toolkit";
import { restaurantsApi } from "../services/restaurantsApi";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    [restaurantsApi.reducerPath]: restaurantsApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restaurantsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
