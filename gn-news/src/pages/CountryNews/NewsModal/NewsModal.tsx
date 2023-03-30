import { Modal, Box, Typography, Stack } from "@mui/material";
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
  handleClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}

export default function NewsModal(props: Props) {
  const { open, item, handleClose } = props;
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    border: "1px solid #aaa",
    boxShadow: 12,
    p: 4,
    borderRadius: 2,
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Stack direction="row" justifyContent="space-between">
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
          <Typography variant="caption">{item?.url}</Typography>
        </Box>
      </Box>
    </Modal>
  );
}
