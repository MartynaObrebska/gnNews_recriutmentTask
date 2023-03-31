import { Modal, Typography, IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function PopUp(props: Props) {
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
          Największe trudności i przyjemności
        </Typography>
        <Typography
          align="justify"
          id="modal-modal-title"
          variant="body1"
          component="h2"
        >
          Największą trudność sprawiła mi praca z biblioteką UI i Reduxem,
          ponieważ nie miałam wcześniej zbyt dużego doświadczenia z tymi
          narzędziami. Staram sie jednak traktować to bardziej jako wyzwania nie
          problem, ponieważ dzięki temu bardziej się rozwijam i uczę nowych
          rzeczy. Daje mi to zdecydowanie wiekszą satysfakcję, gdy uda mi się
          pokonać jakąś trudność. Dlatego właśnie te same aspekty były dla mnie
          również największą przyjemnością. Ciekawa była również współpraca z
          News API. Duuuużo frajdy sprawiło mi także projektowanie designu całej
          aplikacji w oparciu o design strony gnStudio. Ogólnie praca nad
          projektem była bardzo satysfakcjonująca i rozwijająca.
        </Typography>
      </Stack>
    </Modal>
  );
}
