import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilterState {
  price: number[];
  format: string[];
  occasion: string[];
}
const initialState: IFilterState = {
  price: [],
  format: [],
  occasion: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPrice: (state, action: PayloadAction<number[]>) => {
      state.price = action.payload;
    },
    setFormat: (state, action: PayloadAction<string[]>) => {
      state.format = action.payload;
    },
    setOccasion: (state, action: PayloadAction<string[]>) => {
      state.occasion = action.payload;
    },
  },
});

export const { setPrice, setFormat, setOccasion } = filterSlice.actions;
export default filterSlice.reducer;
