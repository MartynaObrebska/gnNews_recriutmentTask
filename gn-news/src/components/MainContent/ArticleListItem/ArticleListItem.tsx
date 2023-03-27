import { Card, CardContent, Typography, Stack, ListItem } from "@mui/material";

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

export default function ArticleListItem(props: Props) {
  const { item } = props;
  return (
    <ListItem>
      <Card sx={{ minHeight: "90px", flexGrow: 1 }}>
        <CardContent>
          <Stack direction="row">
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="caption" color="primary.main">
              {item.publishedAt}
            </Typography>
          </Stack>
          <Typography variant="caption" color="primary.main">
            {item.author}
          </Typography>
        </CardContent>
      </Card>
    </ListItem>
  );
}
