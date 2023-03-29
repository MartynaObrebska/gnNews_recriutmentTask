import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ArticlesGrid from "./ArticlesGrid/ArticlesGrid";
import ArticlesList from "./ArticlesList/ArticlesList";
import { useParams } from "react-router-dom";
import { setNews } from "../../app/Stores/reducers/News/newsSlice";
import { useEffect } from "react";
import { Box } from "@mui/material";

export default function CountryNews() {
  const view = useAppSelector((state) => state.layout.layout);
  const dispatch = useAppDispatch();
  const API_KEY = "38bb71567831456bb239cd383b4704db";
  const { countryCode } = useParams();
  const url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${API_KEY}`;

  const fetchArticles = async (url: string) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data?.articles.length === 0) {
          dispatch(setNews(null));
        } else {
          dispatch(setNews(data.articles));
        }
      });
  };

  useEffect(() => {
    fetchArticles(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  console.log("countrynews");
  return <Box>{view === "list" ? <ArticlesList /> : <ArticlesGrid />}</Box>;
}
