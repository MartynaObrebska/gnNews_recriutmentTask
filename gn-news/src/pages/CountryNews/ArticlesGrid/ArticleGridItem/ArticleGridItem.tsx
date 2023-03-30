import {
  ImageListItem,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";
import { ModalItem } from "../../NewsModal/NewsModal";

interface Props {
  item: ModalItem;
  handleOpen: (item: ModalItem) => void;
}

export default function ArticleGridItem(props: Props) {
  const { item, handleOpen } = props;

  const emptyUrlToImage =
    "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";

  return (
    <ImageListItem sx={{ margin: "10px" }} onClick={() => handleOpen(item)}>
      <Card sx={{ height: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            image={item?.urlToImage ?? emptyUrlToImage}
            alt={item?.title}
          />
          <CardContent>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="caption" color="primary.main">
                {item?.source.name}
              </Typography>
              <Typography variant="caption" color="primary.main">
                {item?.publishedAt}
              </Typography>
            </Stack>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              sx={{ fontWeight: "800" }}
            >
              {item?.title}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              {
                <span>
                  {item?.description?.split(" ").slice(0, 15).join(" ")}...
                </span>
              }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ImageListItem>
  );
}
