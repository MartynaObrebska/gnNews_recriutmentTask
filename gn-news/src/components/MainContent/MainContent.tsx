import {
  ImageList,
  ImageListItem,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import logo from "../../assets/gnNews.png";
import bgi from "../../assets/gnNews.png";

export default function MainContent() {
  const articles = [
    {
      title: "Lorem ipsum.",
      img: { logo },
      author: "next.gazeta.pl",
      source: "Google News",
    },
    {
      title: "Lorem ipsum.",
      img: { logo },
      author: "next.gazeta.pl",
      source: "Google News",
    },
    {
      title: "Lorem ipsum.",
      img: { logo },
      author: "next.gazeta.pl",
      source: "Google News",
    },
    {
      title: "Lorem ipsum.",
      img: { logo },
      author: "next.gazeta.pl",
      source: "Google News",
    },
    {
      title: "Lorem ipsum.",
      img: { logo },
      author: "next.gazeta.pl",
      source: "Google News",
    },
    {
      title: "Lorem ipsum.",
      img: { logo },
      author: "next.gazeta.pl",
      source: "Google News",
    },
    {
      title: "Lorem ipsum.",
      img: { logo },
      author: "next.gazeta.pl",
      source: "Google News",
    },
    {
      title: "Lorem ipsum.",
      img: { logo },
      author: "next.gazeta.pl",
      source: "Google News",
    },
    {
      title: "Lorem ipsum.",
      img: { logo },
      author: "next.gazeta.pl",
      source: "Google News",
    },
  ];
  return (
    <Box sx={{ background: { bgi } }}>
      <ImageList
        sx={{
          height: "calc(100vh - 84px - 84px)",
          margin: 0,
        }}
        cols={3}
      >
        {articles.map((item, index) => (
          <ImageListItem sx={{ margin: "20px" }} key={index}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={logo}
                  alt={item.author}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {<span>by: {item.author}</span>}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
