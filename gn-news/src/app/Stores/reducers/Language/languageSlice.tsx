import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ILanguageState {
  language: "pl" | "en";
}

const initialState: ILanguageState = {
  language: "pl",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<"pl" | "en">) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
