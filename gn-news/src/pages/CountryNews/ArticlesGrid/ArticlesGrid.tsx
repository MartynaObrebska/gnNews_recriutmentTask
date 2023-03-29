import { Box, ImageList } from "@mui/material";
import { useAppSelector } from "../../../app/hooks";
import ArticleGridItem from "./ArticleGridItem/ArticleGridItem";

export default function ArticlesGrid() {
  const articlesData = useAppSelector((state) => state.news.news);
  return (
    <ImageList
      sx={{
        height: "calc(100vh - 84px - 84px)",
        margin: 0,
      }}
      cols={3}
    >
      {articlesData ? (
        articlesData?.map((item, index) => (
          <ArticleGridItem key={index} item={item} />
        ))
      ) : (
        <Box />
      )}
    </ImageList>
  );
}
