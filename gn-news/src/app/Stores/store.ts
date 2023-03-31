import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import layoutReducer from "./reducers/Layout/layoutSlice";
import countryReducer from "./reducers/Country/countrySlice";
import newsReducer from "./reducers/News/newsSlice";
import languageReducer from "./reducers/Language/languageSlice";

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    country: countryReducer,
    news: newsReducer,
    language: languageReducer,
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
