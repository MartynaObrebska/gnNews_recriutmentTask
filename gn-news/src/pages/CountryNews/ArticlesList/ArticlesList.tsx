import { List } from "@mui/material";
import { useAppSelector } from "../../../app/hooks";
import ArticleListItem from "./ArticleListItem/ArticleListItem";

export default function ArticlesList() {
  const articlesData = useAppSelector((state) => state.news.news);
  return (
    <List
      sx={{
        position: "relative",
        overflow: "auto",
        height: "calc(100vh - 84px - 84px)",
        margin: 0,
        padding: 0,
      }}
    >
      {articlesData?.map((item, index) => (
        <ArticleListItem key={index} item={item} />
      ))}
    </List>
  );
}
