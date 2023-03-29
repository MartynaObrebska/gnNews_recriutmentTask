import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface INewsState {
  news:
    | {
        source: {
          id: number;
          name: string;
        };
        author: string;
        title: string;
        description: string;
        url: string;
        urlToImage: string;
        publishedAt: string;
        content: string;
      }[]
    | null;
}

const initialState: INewsState = {
  news: null,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (
      state,
      action: PayloadAction<
        | {
            source: {
              id: number;
              name: string;
            };
            author: string;
            title: string;
            description: string;
            url: string;
            urlToImage: string;
            publishedAt: string;
            content: string;
          }[]
        | null
      >
    ) => {
      state.news = action.payload;
    },
  },
});

export const { setNews } = newsSlice.actions;
export const selectNews = (state: INewsState) => state.news;
export default newsSlice.reducer;
