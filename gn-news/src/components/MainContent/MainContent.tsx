import { ImageList, Box, List } from "@mui/material";

import logo from "../../assets/gnNews.png";
import bgi from "../../assets/gnNews.png";
import ArticleListItem from "./ArticleListItem/ArticleListItem";
import ArticleTile from "./ArticleGridItem/ArticleGridItem";
import { useAppSelector } from "../../app/hooks";

export default function MainContent() {
  const view = useAppSelector((state) => state.layout.layout);

  const articlesData = [
    {
      title: "Lorem ipsum.",
      img: logo,
      author: "next.gazeta.pl",
      source: "Google News",
      publishedAt: "2023-03-27T07:21:29Z",
      content:
        "Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      img: logo,
      author: "next.gazeta.pl",
      source: "Google News",
      publishedAt: "2023-03-27T07:21:29Z",
      content:
        "Lorem ipsum dolor sit amet dolor sit amet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Lorem ipsum dolor.",
      img: logo,
      author: "next.gazeta.pl",
      source: "Google News",
      publishedAt: "2023-03-27T07:21:29Z",
      content:
        "Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      img: logo,
      author: "next.gazeta.pl",
      source: "Google News",
      publishedAt: "2023-03-27T07:21:29Z",
      content:
        "Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      img: logo,
      author: "next.gazeta.pl",
      source: "Google News",
      publishedAt: "2023-03-27T07:21:29Z",
      content:
        "Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      img: logo,
      author: "next.gazeta.pl",
      source: "Google News",
      publishedAt: "2023-03-27T07:21:29Z",
      content:
        "Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const articleGridItems = (
    <ImageList
      sx={{
        height: "calc(100vh - 84px - 84px)",
        margin: 0,
      }}
      cols={3}
    >
      {articlesData.map((item, index) => (
        <ArticleTile key={index} item={item} />
      ))}
    </ImageList>
  );
  const articleListItems = (
    <List
      sx={{
        height: "calc(100vh - 84px - 84px)",
        margin: 0,
        padding: 0,
      }}
    >
      {articlesData.map((item, index) => (
        <ArticleListItem key={index} item={item} />
      ))}
    </List>
  );

  return (
    <Box sx={{ backgroundImage: { bgi } }}>
      {view === "list" ? articleListItems : articleGridItems}
    </Box>
  );
}
