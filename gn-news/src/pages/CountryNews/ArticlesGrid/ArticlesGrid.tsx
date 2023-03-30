import { Box, ImageList } from "@mui/material";
import { useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import NewsModal, { ModalItem } from "../NewsModal/NewsModal";
import ArticleGridItem from "./ArticleGridItem/ArticleGridItem";

export default function ArticlesGrid() {
  const articlesData = useAppSelector((state) => state.news.news);
  const [open, setOpen] = useState<boolean>(false);
  const [modalItem, setModalItem] = useState<undefined | ModalItem>();
  const handleOpen = (item: ModalItem) => {
    setModalItem(item);
    setOpen(true);
  };
  const handleClose = () => {
    setModalItem(undefined);
    setOpen(false);
  };

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
          <ArticleGridItem key={index} item={item} handleOpen={handleOpen} />
        ))
      ) : (
        <Box />
      )}
      <NewsModal item={modalItem} open={open} handleClose={handleClose} />
    </ImageList>
  );
}
