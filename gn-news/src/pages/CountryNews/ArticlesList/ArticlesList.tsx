import { List } from "@mui/material";
import { useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import NewsModal, { ModalItem } from "../NewsModal/NewsModal";
import ArticleListItem from "./ArticleListItem/ArticleListItem";

export default function ArticlesList() {
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
        <ArticleListItem key={index} item={item} handleOpen={handleOpen} />
      ))}
      <NewsModal item={modalItem} open={open} handleClose={handleClose} />
    </List>
  );
}
