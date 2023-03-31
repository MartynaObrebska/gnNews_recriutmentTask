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
        <Typography
          align="center"
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ marginBottom: 2 }}
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
      </Box>
    </Modal>
  );
}
