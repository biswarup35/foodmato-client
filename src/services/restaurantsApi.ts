import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Restaurants } from "../types/restaurants";

const baseUrl = process.env.REACT_APP_API_URL;
export const restaurantsApi = createApi({
  reducerPath: "restaurants",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurants[], {}>({
      query: (param: string) => `${baseUrl}/restaurants${param}`,
    }),
  }),
});

export const { useGetRestaurantsQuery } = restaurantsApi;
