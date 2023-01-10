import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IForm {
  fullname: string;
  age: string;
  phone: string;
  email: string;
  address: string;
  id: string;
}

export interface RentalState {
  loading: boolean;
  checkout?: {
    form: IForm;
  };
  test: string;
}

const initialState: RentalState = {
  loading: false,
  test: "",
};

export const rentalSlice = createSlice({
  name: "rental-app",
  initialState,
  reducers: {
    reset: (state: RentalState, action: PayloadAction<{ test: string }>) => {
      state.test = action.payload.test;
    },
    setLoading: (
      state: RentalState,
      action: PayloadAction<{ loading: boolean }>
    ) => {
      state.loading = action.payload.loading;
    },
  },
});

export const { reset } = rentalSlice.actions;
export default rentalSlice.reducer;
