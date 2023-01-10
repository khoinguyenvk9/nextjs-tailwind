import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GlobalState {
  test: string;
}

const initialState: GlobalState = {
  test: "",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    reset: (state: GlobalState, action: PayloadAction<{ test: string }>) => {
      state.test = action.payload.test;
    },
  },
});

export const { reset } = globalSlice.actions;
export default globalSlice.reducer;
