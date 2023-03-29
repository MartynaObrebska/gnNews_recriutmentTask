import { Card, CardContent, Typography, Stack, ListItem } from "@mui/material";

interface Props {
  item: {
    source: {
      id: number;
      name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  } | null;
}

export default function ArticleListItem(props: Props) {
  const { item } = props;
  return (
    <ListItem sx={{ cursor: "pointer" }}>
      <Card sx={{ minHeight: "40px", flexGrow: 1 }}>
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
            variant="body1"
            component="div"
            sx={{ fontWeight: "800" }}
          >
            {item?.title}
          </Typography>
        </CardContent>
      </Card>
    </ListItem>
  );
}
