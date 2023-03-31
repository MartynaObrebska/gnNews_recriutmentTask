import { Modal, Typography, IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";

interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function PopUp(props: Props) {
  const { t } = useTranslation();
  const { open, handleClose } = props;
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

  const descriptionParts = ["1", "2", "3", "4"];
  return (
    <Modal open={open} onClose={handleClose}>
      <Stack sx={style}>
        <IconButton
          onClick={handleClose}
          sx={{ p: 0, justifyContent: "right" }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        <Typography
          align="center"
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ margin: 2 }}
        >
          {t("popUpTitle")}
        </Typography>
        {descriptionParts.map((number) => (
          <Typography
            key={number}
            align="justify"
            id={`modal-modal-desc${number}`}
            variant="body1"
            sx={{ m: 1 }}
          >
            {t(`popUpDescriptionPart${number}`)}
          </Typography>
        ))}
      </Stack>
    </Modal>
  );
}
