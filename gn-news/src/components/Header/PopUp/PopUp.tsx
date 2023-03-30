import { Modal, Box, Typography } from "@mui/material";

interface Props {
  open: boolean;
  handleClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}

export default function PopUp(props: Props) {
  const { open, handleClose } = props;
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
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Największa frajda
        </Typography>
        <Typography id="modal-modal-title" variant="body1" component="h2">
          Placeholder
        </Typography>
        <br />
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Największe trudności
        </Typography>
        <Typography id="modal-modal-title" variant="body1" component="h2">
          Placeholder
        </Typography>
      </Box>
    </Modal>
  );
}
