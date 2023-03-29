import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICountryState {
  country: { name: string; code: string; flag: string } | null;
}

const initialState: ICountryState = {
  country: null,
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountry: (
      state,
      action: PayloadAction<{ name: string; code: string; flag: string } | null>
    ) => {
      state.country = action.payload;
    },
  },
});

export const { setCountry } = countrySlice.actions;
export default countrySlice.reducer;
