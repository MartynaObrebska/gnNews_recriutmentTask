import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function MainContent() {
  return (
    <ImageList sx={{ height: "calc(100vh - 84px - 84px)", margin: 0 }} cols={3}>
      <ImageListItem />
    </ImageList>
  );
}
