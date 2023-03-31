import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Grid,
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
    <Grid
      container
      xs={12}
      sm={4}
      lg={3}
      xl={2}
      sx={{ padding: 1 }}
      onClick={() => handleOpen(item)}
    >
      <Card sx={{ height: "100%", width: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image={item?.urlToImage ?? emptyUrlToImage}
            alt={item?.title}
          />
          <CardContent sx={{ padding: 1 }}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="caption" color="primary.main">
                {item?.source.name}
              </Typography>
              <Typography variant="caption" color="primary.main" align="right">
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
              {item?.description?.split(" ").slice(0, 15).join(" ")}(...)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
