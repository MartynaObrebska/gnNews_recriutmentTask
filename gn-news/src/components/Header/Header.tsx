import ToggleViewButtons from "./ToggleViewButtons/ToggleViewButtons";
import logo from "../../assets/gnNews.png";
import {
  AppBar,
  Box,
  Button,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import PopUp from "./PopUp/PopUp";
import LongMenu from "./LongMenu/LongMenu";

function Header() {
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);
  const handleOpenPopUp = () => {
    setOpenPopUp(true);
  };
  const handleClosePopUp = () => {
    setOpenPopUp(false);
  };

  return (
    <Grid item xs={12} sx={{ height: "84px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          color="secondary"
          justify-content="space-between"
        >
          <Toolbar sx={{ padding: 0, height: "84px" }}>
            <Box
              component="a"
              href="/"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <img src={logo} alt="gnNews" loading="lazy" />
            </Box>
            <Typography
              color="secondary.contrastText"
              component="a"
              href="/"
              variant="h6"
              sx={{
                flexGrow: 1,
                fontWeight: "800",
                padding: "0 20px",
                display: { xs: "inline", sm: "none" },
                textDecoration: "none",
              }}
            >
              gnNews
            </Typography>
            <Stack spacing={2} direction="row" sx={{ padding: "0 20px" }}>
              <ToggleViewButtons />
              <Button
                variant="contained"
                sx={{
                  fontWeight: "800",
                  paddingTop: "9px",
                  display: { xs: "none", lg: "inline-flex" },
                }}
                onClick={handleOpenPopUp}
              >
                About
              </Button>
              <LongMenu handleOpenPopUp={handleOpenPopUp} />
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <PopUp open={openPopUp} handleClose={handleClosePopUp} />
    </Grid>
  );
}

export default Header;
