import { Modal, Box, Typography, Stack, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export interface ModalItem {
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
}

interface Props {
  open: boolean;
  item?: ModalItem;
  handleClose: () => void;
}

export default function NewsModal(props: Props) {
  const { open, item, handleClose } = props;
  const style = {
    position: "absolute" as "absolute",
    top: { xs: 0, sm: "50%" },
    left: { xs: 0, sm: "50%" },
    transform: { xs: "none", sm: "translate(-50%, -50%)" },
    width: { xs: "100%", sm: "70%" },
    bgcolor: "background.paper",
    border: { xs: "none", sm: "1px solid #aaa" },
    boxShadow: 12,
    p: { xs: 2, sm: 4 },
    borderRadius: { xs: 0, sm: 2 },
    boxSizing: "border-box",
    overflow: "auto",
    maxHeight: { xs: "100vh", sm: "auto" },
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Stack sx={style}>
        <IconButton
          onClick={handleClose}
          sx={{ p: 0, justifyContent: "right" }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ marginTop: 2 }}
        >
          <Typography variant="caption" color="primary.main">
            {item?.source.name}
          </Typography>
          <Typography variant="caption" color="primary.main">
            {item?.publishedAt}
          </Typography>
        </Stack>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {item?.title}
        </Typography>
        <br />
        <Typography id="modal-modal-description" variant="body2">
          {item?.description}
        </Typography>
        <br />
        <Typography id="modal-modal-description" variant="body2">
          {item?.content}
        </Typography>
        <br />
        <Stack direction="row">
          <Typography variant="caption">Author: </Typography>
          <Typography variant="caption">{item?.author}</Typography>
        </Stack>
        <Box
          component="a"
          href={item?.url}
          color="primary.main"
          sx={{
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <Typography
            sx={{
              overflowWrap: "break-word",
            }}
            variant="caption"
          >
            {item?.url.substring(0, 100)}(...)
          </Typography>
        </Box>
      </Stack>
    </Modal>
  );
}
