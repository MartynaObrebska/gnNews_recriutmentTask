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
    <ImageListItem sx={{ margin: "20px", height: "370px" }}>
      <Card sx={{ height: "370px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
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
