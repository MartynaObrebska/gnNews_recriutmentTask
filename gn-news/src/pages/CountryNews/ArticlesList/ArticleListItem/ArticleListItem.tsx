import { Card, CardContent, Typography, Stack, ListItem } from "@mui/material";
import { ModalItem } from "../../NewsModal/NewsModal";

interface Props {
  item: ModalItem;
  handleOpen: (item: ModalItem) => void;
}

export default function ArticleListItem(props: Props) {
  const { item, handleOpen } = props;

  return (
    <ListItem sx={{ cursor: "pointer" }} onClick={() => handleOpen(item)}>
      <Card sx={{ minHeight: "40px", flexGrow: 1 }}>
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="caption" color="primary.main">
              {item?.source.name}
            </Typography>
            <Typography variant="caption" color="primary.main" align="right">
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
