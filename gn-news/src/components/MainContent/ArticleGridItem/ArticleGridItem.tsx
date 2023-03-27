import {
  ImageListItem,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";

interface Props {
  item: {
    title: string;
    img: string;
    author: string;
    source: string;
    publishedAt: string;
    content: string;
  };
}

export default function ArticleGridItem(props: Props) {
  const { item } = props;
  return (
    <ImageListItem sx={{ margin: "10px" }}>
      <Card sx={{ height: "360px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            image={item.img}
            alt={item.title}
          />
          <CardContent>
            <Stack direction="row">
              <Typography variant="caption" color="primary.main">
                {item.author}
              </Typography>
              <Typography variant="caption" color="primary.main">
                {item.publishedAt}
              </Typography>
            </Stack>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              {<span>{item.content.split(" ").slice(0, 15).join(" ")}...</span>}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ImageListItem>
  );
}
