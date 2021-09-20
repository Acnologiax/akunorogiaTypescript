import { createSlice } from "@reduxjs/toolkit";

export interface ModeState {
  value: boolean;
}

const initialState: ModeState = {
  value: true,
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    dark: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
    },
    light: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { dark, light } = modeSlice.actions;

export default modeSlice.reducer;
