import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ILayoutState {
  layout: "list" | "grid";
}

const initialState: ILayoutState = {
  layout: "grid",
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setLayout: (state, action: PayloadAction<"list" | "grid">) => {
      state.layout = action.payload;
    },
  },
});

export const { setLayout } = layoutSlice.actions;
export default layoutSlice.reducer;
