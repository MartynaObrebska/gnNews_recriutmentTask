import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import layoutReducer from "./reducers/Layout/layoutSlice";
import countryReducer from "./reducers/Country/countrySlice";
import newsReducer from "./reducers/News/newsSlice";

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    country: countryReducer,
    news: newsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
